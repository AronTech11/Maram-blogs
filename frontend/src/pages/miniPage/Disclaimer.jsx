import React from "react";

const Disclaimer = () => {
  return (
    <div className="pt-20">
      <section className="bg-deep-brown py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Disclaimer
          </h1>
          <p className="text-white/50 mt-2 text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-soft-gray/50 space-y-6 text-primary/70 leading-relaxed">
            <p>
              The information provided on Maram Heritage is for general informational
              purposes only. All information on the site is provided in good faith;
              however, we make no representation or warranty of any kind, express or
              implied, regarding the accuracy, adequacy, validity, reliability,
              availability, or completeness of any information on the site.
            </p>
            <p>
              Under no circumstances shall we have any liability to you for any loss
              or damage of any kind incurred as a result of the use of the site or
              reliance on any information provided on the site.
            </p>
            <p>
              Blog posts and articles published on this website represent the views
              and opinions of their respective authors. They do not necessarily
              reflect the official policy or position of the Maram Heritage team.
            </p>
            <p>
              The site may contain links to other websites that are not under our
              control. We have no control over the nature, content, and availability
              of those sites. The inclusion of any links does not necessarily imply
              a recommendation.
            </p>
            <p>
              If you have questions about this disclaimer, please contact us at{" "}
              <a href="mailto:arontech11@gmail.com" className="text-accent hover:underline">
                arontech11@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;
