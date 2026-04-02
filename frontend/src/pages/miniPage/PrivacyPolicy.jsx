import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      <section className="bg-deep-brown py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-white/50 mt-2 text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl prose prose-sm text-primary/70 leading-relaxed">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-soft-gray/50 space-y-6">
            <div>
              <h2 className="font-heading text-xl font-bold text-primary mb-3">Introduction</h2>
              <p>
                This Privacy Policy applies to our online activities and is valid for visitors to Maram Heritage
                with regards to the information that they share and/or we collect. This policy is not applicable
                to any information collected offline or via channels other than this website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary mb-3">Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary mb-3">Information We Collect</h2>
              <p>
                The personal information that you are asked to provide, and the reasons why you are asked
                to provide it, will be made clear to you at the point we ask you to provide your personal
                information.
              </p>
              <p className="mt-2">
                When you register for an account, we may ask for your contact information, including items
                such as name and email address.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary mb-3">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Communicate with you for updates and notifications</li>
                <li>Find and prevent fraud</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary mb-3">Cookies</h2>
              <p>
                Maram Heritage uses cookies to store authentication tokens and user preferences.
                These cookies are essential for the functioning of the website and are not used
                for tracking or advertising purposes.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary mb-3">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:arontech11@gmail.com" className="text-accent hover:underline">
                  arontech11@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
