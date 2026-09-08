export const metadata = {
  title: "Privacy Policy | Webgreal Agency",
  description:
    "Privacy Policy for Webgreal Agency, covering website development, hosting, domain registration, and digital advertising services.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-[#1A82FF]"
          >
            WEBGREAL
          </a>

          <a
            href="/"
            className="text-sm font-medium text-gray-600 transition hover:text-[#1A82FF]"
          >
            Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        {/* Title */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1A82FF]">
            Legal
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Last Updated: September 8, 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-6 text-[16px] leading-8 text-gray-600">
          <p>
            Webgreal Agency (&quot;Webgreal,&quot; &quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;) respects your privacy and is
            committed to protecting the personal information you provide to
            us. This Privacy Policy explains how we collect, use, store, and
            protect information when you visit our website, contact us, or use
            our website development, hosting, domain registration, and digital
            advertising services.
          </p>

          <p>
            Webgreal Agency operates in the United States, Albania, and Europe
            and may provide services to clients located in different countries.
          </p>

          <p>
            By using our website or services, you acknowledge the practices
            described in this Privacy Policy.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {/* 1 */}
          <section>
            <SectionTitle number="1" title="Information We Collect" />

            <SubTitle title="1.1 Information You Provide" />

            <p className="section-text">
              When you contact Webgreal or become a client, we may collect
              information such as:
            </p>

            <BulletList
              items={[
                "Your name",
                "Your phone number",
                "Your email address",
                "Your business name and business information",
                "Information you voluntarily provide about your business, website, products, or services",
                "Website content, images, logos, text, domain information, and other materials provided for website development",
                "Information necessary to provide hosting, domain registration, website maintenance, or advertising services",
              ]}
            />

            <p className="section-text">
              We only request information that is reasonably necessary to
              communicate with you and provide our services.
            </p>

            <SubTitle title="1.2 Information You Provide for Website Development" />

            <p className="section-text">
              To create and customize a website, we may ask you to provide
              information about your business and its products or services.
            </p>

            <p className="section-text">
              You may provide content directly to us, or, where appropriate,
              you may direct us to an existing website or other publicly
              available business information so that we can use relevant
              information to prepare your new website.
            </p>

            <p className="section-text">
              You are responsible for ensuring that any content you provide to
              Webgreal may legally be used for your website and does not violate
              the rights of third parties.
            </p>

            <SubTitle title="1.3 Information Collected Automatically" />

            <p className="section-text">
              Our website may collect limited technical information that is
              automatically transmitted by your browser, such as:
            </p>

            <BulletList
              items={[
                "IP address",
                "Browser type",
                "Device type",
                "Operating system",
                "Basic website access information",
              ]}
            />

            <p className="section-text">
              We do not currently use Google Analytics or similar analytics
              platforms to create detailed profiles of visitors to our
              website.
            </p>
          </section>

          {/* 2 */}
          <section>
            <SectionTitle number="2" title="How We Use Your Information" />

            <p className="section-text">
              We may use your information to:
            </p>

            <BulletList
              items={[
                "Respond to inquiries and requests",
                "Communicate with prospective and existing clients",
                "Develop, configure, and maintain websites",
                "Provide website hosting and domain registration services",
                "Provide basic website maintenance",
                "Manage client accounts and subscriptions",
                "Provide Meta/Facebook and Google advertising services",
                "Configure and manage advertising campaigns on behalf of clients",
                "Process payments and subscriptions",
                "Schedule consultations or meetings",
                "Improve our services and website",
                "Protect our services against fraud, abuse, or security threats",
                "Comply with applicable legal obligations",
              ]}
            />

            <p className="section-text">
              We do not use your personal information for unrelated purposes
              without an appropriate legal basis or your permission where
              required by law.
            </p>
          </section>

          {/* 3 */}
          <section>
            <SectionTitle number="3" title="Legal Basis for Processing" />

            <p className="section-text">
              Depending on the circumstances and applicable law, we may process
              personal information on the following legal bases:
            </p>

            <BulletList
              items={[
                "Contract: When processing is necessary to provide services you have requested.",
                "Legitimate Interests: When necessary to operate, secure, maintain, and improve our business and services.",
                "Consent: Where you have provided consent for a specific purpose and consent is required.",
                "Legal Obligations: Where processing is necessary to comply with applicable laws or legal requirements.",
              ]}
            />
          </section>

          {/* 4 */}
          <section>
            <SectionTitle
              number="4"
              title="Website Development and Hosting Services"
            />

            <p className="section-text">
              Webgreal offers website development and hosting services.
            </p>

            <p className="section-text">
              Our website development offer may allow a client to review a
              website created for their business before making a payment for
              the website development service.
            </p>

            <p className="section-text">
              Our monthly service may include website hosting, domain-related
              services, professional email, and basic website maintenance for
              the applicable subscription fee.
            </p>

            <p className="section-text">
              Where a client already has their own hosting and domain, they may
              instead choose to pay a one-time website development fee and have
              the completed website transferred to their existing hosting and
              domain, subject to the applicable service agreement.
            </p>

            <p className="section-text">
              Information necessary to create, host, maintain, or transfer a
              website may be processed by Webgreal and relevant third-party
              service providers.
            </p>
          </section>

          {/* 5 */}
          <section>
            <SectionTitle number="5" title="How We Share Information" />

            <p className="section-text">
              We do not sell, rent, or trade your personal information.
            </p>

            <p className="section-text">
              We may share limited information with third-party service
              providers when necessary to provide our services, including:
            </p>

            <BulletList
              items={[
                "Website hosting providers",
                "Domain registration providers",
                "Payment processors",
                "Scheduling platforms such as Calendly",
                "Email and communication service providers",
                "Advertising platforms such as Meta and Google when providing advertising services",
                "Other technical service providers necessary to operate our business",
              ]}
            />

            <p className="section-text">
              These providers may process information according to their own
              privacy policies and applicable laws.
            </p>

            <p className="section-text">
              We may also disclose information when required to do so by law,
              legal process, court order, or governmental authority, or when
              reasonably necessary to protect our rights, property, users, or
              services.
            </p>
          </section>

          {/* 6 */}
          <section>
            <SectionTitle number="6" title="Advertising Services" />

            <p className="section-text">
              Webgreal provides Meta/Facebook Ads and Google Ads management
              services for businesses.
            </p>

            <p className="section-text">
              When we manage advertising campaigns for a client, certain
              information may be processed through the relevant advertising
              platforms according to the client&apos;s advertising setup and
              the privacy policies of those platforms.
            </p>

            <p className="section-text">
              Where Webgreal assists a client with advertising technologies
              such as advertising pixels, conversion tracking, remarketing, or
              similar tools, the applicable client website should provide its
              own appropriate privacy and cookie disclosures.
            </p>

            <p className="section-text">
              Webgreal does not sell personal information obtained through
              advertising services.
            </p>
          </section>

          {/* 7 */}
          <section>
            <SectionTitle number="7" title="Cookies" />

            <p className="section-text">
              Our website may use cookies and similar technologies that are
              necessary for basic website functionality, security, or service
              operation.
            </p>

            <p className="section-text">
              We do not currently use Google Analytics or similar analytics
              services to track visitors across our website.
            </p>

            <p className="section-text">
              Third-party services embedded or linked through our website may
              use their own cookies or similar technologies. For example,
              scheduling functionality provided through Calendly may involve
              technologies operated by Calendly.
            </p>

            <p className="section-text">
              You can control or disable cookies through your browser settings.
              Disabling certain cookies may affect the functionality of some
              parts of a website.
            </p>
          </section>

          {/* 8 */}
          <section>
            <SectionTitle number="8" title="Scheduling Services" />

            <p className="section-text">
              We may use Calendly to allow prospective and existing clients to
              schedule consultations or meetings with Webgreal.
            </p>

            <p className="section-text">
              When you use a scheduling feature powered by Calendly, information
              you provide through that service may be processed by Calendly in
              accordance with its own privacy policy.
            </p>

            <p className="section-text">
              We recommend reviewing the privacy practices of third-party
              services before providing information through them.
            </p>
          </section>

          {/* 9 */}
          <section>
            <SectionTitle number="9" title="Data Retention" />

            <p className="section-text">
              We retain personal information only for as long as reasonably
              necessary for the purposes described in this Privacy Policy,
              including to:
            </p>

            <BulletList
              items={[
                "Provide and maintain our services",
                "Maintain business and client records",
                "Fulfill contractual obligations",
                "Resolve disputes",
                "Enforce agreements",
                "Comply with legal, accounting, or regulatory requirements",
              ]}
            />

            <p className="section-text">
              When personal information is no longer reasonably required, we
              may delete, anonymize, or securely dispose of it, subject to
              applicable legal requirements.
            </p>
          </section>

          {/* 10 */}
          <section>
            <SectionTitle number="10" title="Data Security" />

            <p className="section-text">
              We take reasonable administrative, technical, and organizational
              measures to protect personal information against unauthorized
              access, alteration, disclosure, loss, or misuse.
            </p>

            <p className="section-text">
              However, no method of transmitting or storing information online
              is completely secure. Therefore, while we take reasonable steps
              to protect your information, we cannot guarantee absolute
              security.
            </p>
          </section>

          {/* 11 */}
          <section>
            <SectionTitle number="11" title="International Data Transfers" />

            <p className="section-text">
              Because Webgreal operates and provides services across the United
              States, Albania, and Europe, information may be processed or
              stored in countries other than the country in which you live.
            </p>

            <p className="section-text">
              Where applicable laws require safeguards for international
              transfers of personal information, we will take reasonable steps
              to comply with those requirements.
            </p>
          </section>

          {/* 12 */}
          <section>
            <SectionTitle number="12" title="Your Privacy Rights" />

            <p className="section-text">
              Depending on your location and applicable privacy laws, you may
              have rights regarding your personal information, which may
              include:
            </p>

            <BulletList
              items={[
                "Access: Request information about the personal data we hold about you.",
                "Correction: Request that inaccurate or incomplete information be corrected.",
                "Deletion: Request deletion of your personal information, subject to applicable legal requirements.",
                "Restriction: Request that certain processing of your information be restricted.",
                "Objection: Object to certain types of processing where applicable.",
                "Portability: Request certain personal information in a portable format where applicable.",
                "Withdraw Consent: Withdraw consent where processing is based on consent.",
              ]}
            />

            <p className="section-text">
              To exercise an applicable privacy right, contact us using the
              information provided in the &quot;Contact Us&quot; section
              below.
            </p>

            <p className="section-text">
              We may need to verify your identity before fulfilling certain
              requests.
            </p>
          </section>

          {/* 13 */}
          <section>
            <SectionTitle number="13" title="Children's Privacy" />

            <p className="section-text">
              Our services are intended for businesses and are not directed
              toward children.
            </p>

            <p className="section-text">
              We do not knowingly collect personal information from children
              through our website. If we become aware that we have collected
              personal information from a child in circumstances where
              applicable law requires parental consent, we will take reasonable
              steps to address and delete the information where appropriate.
            </p>
          </section>

          {/* 14 */}
          <section>
            <SectionTitle
              number="14"
              title="Third-Party Websites and Services"
            />

            <p className="section-text">
              Our website or services may contain links to third-party websites
              or services.
            </p>

            <p className="section-text">
              These third parties operate independently from Webgreal and may
              have their own privacy policies and terms. Webgreal is not
              responsible for the privacy practices, content, or security of
              third-party websites.
            </p>

            <p className="section-text">
              We encourage you to review the privacy policies of third-party
              services before providing them with personal information.
            </p>
          </section>

          {/* 15 */}
          <section>
            <SectionTitle number="15" title="Business Transfers" />

            <p className="section-text">
              If Webgreal undergoes a merger, acquisition, restructuring, sale
              of assets, or similar business transaction, personal information
              may be transferred as part of that transaction, subject to
              applicable law.
            </p>

            <p className="section-text">
              We will take reasonable steps to ensure that personal information
              remains protected during such transactions.
            </p>
          </section>

          {/* 16 */}
          <section>
            <SectionTitle
              number="16"
              title="Changes to This Privacy Policy"
            />

            <p className="section-text">
              We may update this Privacy Policy from time to time to reflect
              changes in our services, business practices, technology, or
              applicable legal requirements.
            </p>

            <p className="section-text">
              When we make changes, we will update the &quot;Last Updated&quot;
              date at the top of this Privacy Policy.
            </p>

            <p className="section-text">
              We encourage you to periodically review this page for the latest
              version.
            </p>
          </section>

          {/* 17 */}
          <section>
            <SectionTitle number="17" title="Contact Us" />

            <p className="section-text">
              If you have questions about this Privacy Policy, how Webgreal
              handles personal information, or wish to exercise an applicable
              privacy right, you may contact us at:
            </p>

            <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <p className="font-semibold text-gray-950">Webgreal Agency</p>
              <p className="mt-2 text-gray-600">
                Chicago / Schaumburg, Illinois, United States
              </p>

              <p className="mt-2">
                <a
                  href="mailto:info@webgreal.com"
                  className="font-medium text-[#1A82FF] hover:underline"
                >
                  info@webgreal.com
                </a>
              </p>
            </div>

            <p className="section-text">
              We will make reasonable efforts to respond to privacy-related
              requests within the timeframe required by applicable law.
            </p>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Webgreal Agency. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="/privacy-policy"
              className="font-medium text-[#1A82FF]"
            >
              Privacy Policy
            </a>

            <a href="/" className="transition hover:text-[#1A82FF]">
              Home
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* Reusable section heading */
function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
      <span className="mr-3 text-[#1A82FF]">{number}.</span>
      {title}
    </h2>
  );
}

/* Reusable subsection heading */
function SubTitle({ title }: { title: string }) {
  return (
    <h3 className="mb-3 mt-8 text-lg font-semibold text-gray-950">
      {title}
    </h3>
  );
}

/* Reusable paragraph */
function SectionText({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[16px] leading-8 text-gray-600">{children}</p>
  );
}

/* Reusable bullet list */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mb-6 ml-5 list-disc space-y-2 text-[16px] leading-7 text-gray-600">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
