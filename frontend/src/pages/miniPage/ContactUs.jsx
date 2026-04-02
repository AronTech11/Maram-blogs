import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:arontech11@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="pt-20">
      <section className="bg-deep-brown py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-warm-gold">Touch</span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Have questions, suggestions, or want to contribute? We&apos;d love
            to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Email</h4>
                    <a
                      href="mailto:arontech11@gmail.com"
                      className="text-accent text-sm hover:underline"
                    >
                      arontech11@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Location</h4>
                    <p className="text-primary/60 text-sm">
                      Senapati District, Manipur, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-lg">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Community</h4>
                    <p className="text-primary/60 text-sm">
                      Join our platform to share stories and preserve the
                      heritage of the Maram Naga Tribe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-bgPrimary rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-bgPrimary rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full bg-bgPrimary rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Your Message"
                    className="w-full bg-bgPrimary rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
