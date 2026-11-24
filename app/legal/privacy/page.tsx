import type { Metadata } from 'next';
import LegalPage from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy | Rush Creek Development',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lines={[<span key="l1">Privacy</span>, <em key="b" className="italic">Policy</em>]}
      intro="At Rush Creek Developments (“Company,” “we,” “our,” or “us”), your privacy is very important to us. This Privacy Policy describes how and why we and our subsidiaries, sister companies, and affiliates collect, use, store, disclose, and share your personal information whenever you interact with us — whether in person, by phone, or through our website and any related online platforms."
      effective="Effective date: 1 January 2025"
      sections={[
        {
          paragraphs: [
            'By interacting with Rush Creek Developments in any way, you consent to our use of your information as described in this Privacy Policy. We may update this Privacy Policy from time to time, so we encourage you to review it periodically.',
          ],
        },
        {
          heading: '1. What information do we collect?',
          list: [
            'Personal identifiers: name, mailing address, email address, phone number.',
            'Financial information: payment information, bank account details, credit or debit card numbers.',
            'Demographic information: date of birth, nationality, gender.',
            'Device and online identifiers: IP address, device type, cookies, browser type, unique device identifiers.',
            'Location information: geographic location based on your IP address or GPS settings.',
            'Behavioral information: details on how you use our services, such as browsing patterns and engagement with educational resources.',
            'Employment information: job title, employer details, licenses, and professional memberships, if relevant to the services you request.',
            'Audio, visual, and sensory information: phone call recordings, where applicable, and images shared for service-related purposes.',
            'Purchase and interaction history: records of services purchased, returned, or inquiries made.',
            'Preferences and characteristics inferred from your service usage and communication preferences.',
          ],
        },
        {
          heading: '2. How do we collect information?',
          paragraphs: [
            'Directly: when you contact us via forms, emails, or phone calls; when you register for events, sign up for a newsletter, or request service information; and when you create an account, fill out paperwork, or complete surveys.',
            'Automatically: through cookies, web beacons, tracking pixels, and similar technologies when you browse our website; from your interactions with our marketing emails; and via device information such as IP addresses, browser types, and browsing history.',
            'From third parties: we may receive additional information from third-party sources to improve our services or verify data, including demographic information, updated contact details, or market research from advertising networks, public records, or affiliates.',
          ],
        },
        {
          heading: '3. How do we use personal information?',
          list: [
            'Service delivery: to provide the services and products you request.',
            'Customer support: to respond to your inquiries, requests, and support tickets.',
            'Marketing and promotions: to send relevant updates about our services and those of our affiliates.',
            'Personalization: to tailor your experience based on your preferences and interests.',
            'Fraud detection and security: to protect against unauthorized access, fraud, or malicious activity.',
            'Legal compliance: to comply with applicable laws, regulations, and legal requests.',
          ],
        },
        {
          heading: '4. Sharing your personal information',
          paragraphs: [
            'Sister companies and affiliates: we may share your information with our sister companies and affiliates to offer related services and ensure a seamless customer experience.',
            'Service providers: we share data with trusted service providers who assist with payment processing, data hosting and website management, and email marketing platforms. These providers are required to handle your data securely and only for the purposes outlined in this policy.',
            'Legal obligations and protection: we may disclose your information if required by law, to protect our rights and the safety of our clients, or to investigate fraud or security incidents.',
            'Business transfers: in the event of a merger, sale, or reorganization, your information may be transferred to the successor entity.',
            'With your consent: in circumstances not covered above, we will request your explicit consent before sharing your information with third parties.',
          ],
        },
        {
          heading: '5. Cookies and tracking technologies',
          paragraphs: [
            'We use cookies and similar tracking technologies to understand how you interact with our website, improve user experience and deliver personalized content, and measure the effectiveness of our advertisements. We may permit third-party partners to place cookies and use tracking pixels to serve relevant advertisements across different platforms.',
            'Do Not Track disclosure: our website does not respond to “Do Not Track” signals from browsers.',
          ],
        },
        {
          heading: '6. How do we store and protect your information?',
          paragraphs: [
            'Your personal information is stored securely on servers protected by industry-standard encryption and security measures. We use administrative, technical, and physical safeguards to prevent unauthorized access, alteration, or disclosure.',
            'However, no system can guarantee absolute security. You are responsible for keeping your login credentials secure and notifying us immediately if you suspect unauthorized access.',
          ],
        },
        {
          heading: '7. How can you manage or delete your information?',
          list: [
            'Request access to the personal data we hold about you.',
            'Update or correct inaccurate information.',
            'Request deletion of your personal information, subject to legal retention requirements.',
            'Opt out of marketing communications at any time by clicking “unsubscribe” in emails or contacting us directly.',
          ],
        },
        {
          heading: '8. Your choices regarding marketing communications',
          paragraphs: [
            'Opt-in for text messages: we will only send you text messages if you have explicitly opted in.',
            'Opt-out for emails and mailings: you may opt out of receiving marketing emails and postal mail by updating your preferences or contacting us. Even if you opt out of marketing, we may still contact you regarding service updates, billing, or security issues.',
          ],
        },
        {
          heading: '9. Children’s privacy',
          paragraphs: [
            'Our services are not intended for individuals under 16 years of age, and we do not knowingly collect information from children. If we learn that we have collected personal data from a child under 16, we will delete that information promptly.',
          ],
        },
        {
          heading: '10. Changes to this privacy policy',
          paragraphs: [
            'We may update this Privacy Policy periodically. Changes will be effective upon posting to our website, with the updated effective date noted. We encourage you to review this policy regularly.',
          ],
        },
        {
          heading: '11. Contact us',
          paragraphs: [
            'If you have any questions or concerns about this Privacy Policy or our data practices, please reach out through our website contact form.',
          ],
        },
      ]}
    />
  );
}
