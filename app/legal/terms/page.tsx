import type { Metadata } from 'next';
import LegalPage from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Rush Creek Development',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lines={[<span key="l1">Terms &amp;</span>, <span key="l2">Conditions</span>]}
      intro="Welcome to Rush Creek Developments. These Terms and Conditions outline the rules and regulations for the use of our website and services. By accessing our website and engaging with our services, you agree to be bound by these terms. If you do not agree with any of these terms, please do not use our services."
      sections={[
        {
          heading: '1. Definitions',
          paragraphs: [
            'Company: “Rush Creek Developments,” “we,” “our,” or “us” refers to the entity offering the website and services.',
            'User: “User,” “you,” or “your” refers to any individual or entity accessing or using the website and services.',
            'Services: Refers to any service, product, consultation, or feature provided by Rush Creek Developments.',
          ],
        },
        {
          heading: '2. Acceptance of terms',
          paragraphs: [
            'By using our website or services, you acknowledge that you have read, understood, and agreed to comply with these Terms and Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: '3. Use of website',
          list: [
            'Users must be at least 18 years of age or possess legal parental/guardian consent to use this site.',
            'You agree not to use the website for any unlawful or prohibited purposes.',
            'You may not attempt to gain unauthorized access to any portion of our website, servers, or connected databases.',
          ],
        },
        {
          heading: '4. Intellectual property',
          list: [
            'All content on our website, including but not limited to text, images, graphics, logos, and software, is owned by Rush Creek Developments or licensed to us.',
            'You may not reproduce, distribute, or create derivative works from our intellectual property without prior written consent.',
          ],
        },
        {
          heading: '5. User responsibilities',
          list: [
            'You agree to provide accurate and current information when requested by the Company.',
            'You are responsible for safeguarding your account credentials (if applicable) and are liable for any unauthorized use of your account.',
          ],
        },
        {
          heading: '6. Limitation of liability',
          list: [
            'Rush Creek Developments shall not be held liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of or inability to use our services.',
            'We do not guarantee uninterrupted access to our website or that it will be free from errors, viruses, or harmful components.',
          ],
        },
        {
          heading: '7. Third-party links',
          paragraphs: [
            'Our website may contain links to third-party websites or services. Rush Creek Developments is not responsible for the content, policies, or practices of these third-party sites.',
          ],
        },
        {
          heading: '8. Privacy policy',
          paragraphs: [
            'By using our services, you acknowledge that you have read and understood our Privacy Policy, which explains how we handle your personal data.',
          ],
        },
        {
          heading: '9. Payment and fees',
          list: [
            'Payments for any services rendered by Rush Creek Developments must be made according to the agreed terms.',
            'Rush Creek Developments reserves the right to change pricing at any time, with prior notice to clients where applicable.',
          ],
        },
        {
          heading: '10. Termination',
          paragraphs: [
            'We reserve the right to terminate or suspend your access to our website or services at our discretion, without prior notice, if we believe you have violated these Terms and Conditions.',
          ],
        },
        {
          heading: '11. Indemnification',
          paragraphs: [
            'You agree to indemnify and hold Rush Creek Developments harmless from any claims, damages, liabilities, and expenses (including reasonable legal fees) arising from your use of the website, breach of these terms, or violation of any rights of a third party.',
          ],
        },
        {
          heading: '12. Governing law',
          paragraphs: [
            'These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of [Insert State], without regard to conflict of law principles.',
          ],
        },
        {
          heading: '13. Changes to terms',
          paragraphs: [
            'Rush Creek Developments reserves the right to modify or replace these Terms and Conditions at any time. Users will be notified of any significant changes through the website or email. Continued use of the website following the posting of changes constitutes your acceptance of the updated terms.',
          ],
        },
        {
          heading: '14. Contact us',
          paragraphs: [
            'If you have any questions about these Terms and Conditions, please contact us through the contact page.',
          ],
        },
        {
          heading: 'Cybersecurity awareness and fraud prevention',
          paragraphs: [
            'At Rush Creek Developments, protecting our clients and partners is a top priority. Cybercriminals often exploit reputable organizations to engage in fraudulent schemes that trick individuals into believing they are communicating with trusted representatives. These scams can occur via fraudulent websites, emails, texts, social media, and other communication methods.',
            'These schemes are designed to deceive victims into sharing sensitive personal information under false pretenses. Common tactics include “phishing,” where cybercriminals attempt to gather your confidential data, such as financial details, usernames, passwords, or personal identification.',
          ],
        },
        {
          heading: 'Recognizing and avoiding common scams',
          list: [
            'Email or SMS (text) phishing: cybercriminals send messages disguised as official communications, asking you to click links, download attachments, or share personal information.',
            'Vishing (voice phishing): fraudsters may impersonate company representatives over the phone, claiming there is an urgent issue that requires your personal details or payment information.',
            'Job offer and social media scams: scammers may post fake job openings or send messages claiming to offer employment opportunities at Rush Creek Developments. We only recruit through verified channels, and we will never request payment or personal details over social media.',
            'Mobile app scams: fraudsters may create fake apps claiming to be affiliated with Rush Creek. We currently do not offer investment or commercial services through any mobile app.',
            'Bank transfer and payment scams: be wary of extraordinary investment offers with promises of high returns at low risk. Rush Creek Developments will never request bank transfers or payments through unauthorized channels.',
          ],
        },
        {
          heading: 'Best practices to stay protected',
          list: [
            'Verify official communication. Our official website and communications use authorized email domains and verified contact methods.',
            'Check for typos and unfamiliar links. Do not click suspicious links or download unexpected attachments.',
            'Keep your login information private. We will never request your login details or password for any reason.',
            'Avoid suspicious downloads and ignore pop-ups that request personal information.',
            'Be skeptical of unsolicited communications asking for sensitive information.',
            'Confirm payment instructions directly with us using the contact information on our website.',
          ],
        },
        {
          heading: 'Reporting fraud',
          paragraphs: [
            'If you suspect fraudulent activity or believe you have been targeted by a scam, please contact your local authorities and consider filing a report with the FBI Internet Crime Complaint Center (IC3), the Federal Trade Commission (FTC), or the U.S. Postal Service for mail-related fraud.',
            'Rush Creek Developments is not responsible for third-party content but provides these references for your safety.',
          ],
        },
      ]}
    />
  );
}
