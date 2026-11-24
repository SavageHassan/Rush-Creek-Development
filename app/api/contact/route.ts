import { NextResponse } from 'next/server';

/**
 * Contact / investor-questionnaire endpoint.
 *
 * This revamp concept validates the submission server-side and returns a
 * success response. It does NOT yet deliver the enquiry anywhere, because the
 * destination is a client decision. To make it live, set one of the following
 * and post to it from the marked section below:
 *
 *   RUSH_CREEK_FORM_WEBHOOK   a webhook (HubSpot, Zapier, Make, Power Automate)
 *   RESEND_API_KEY            + RUSH_CREEK_NOTIFY_EMAIL for transactional email
 *
 * See README.md, "Contact form configuration".
 */

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  accredited?: string;
  timeline?: string;
  amount?: string;
  consent?: boolean;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const errors: Record<string, string> = {};
  if (!body.firstName?.trim()) errors.firstName = 'Required';
  if (!body.lastName?.trim()) errors.lastName = 'Required';
  if (!body.email?.trim()) errors.email = 'Required';
  else if (!EMAIL.test(body.email.trim())) errors.email = 'Invalid email address';
  if (!body.accredited) errors.accredited = 'Required';
  if (!body.timeline) errors.timeline = 'Required';
  if (!body.amount) errors.amount = 'Required';
  if (!body.consent) errors.consent = 'Consent is required';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const webhook = process.env.RUSH_CREEK_FORM_WEBHOOK;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...body, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (error) {
      console.error('[contact] webhook delivery failed', error);
      return NextResponse.json(
        { ok: false, error: 'Unable to deliver the enquiry right now.' },
        { status: 502 },
      );
    }
  } else {
    // No destination configured yet — log it so the submission is visible in dev.
    console.info('[contact] enquiry received (no webhook configured)', {
      ...body,
      email: body.email,
    });
  }

  return NextResponse.json({ ok: true });
}
