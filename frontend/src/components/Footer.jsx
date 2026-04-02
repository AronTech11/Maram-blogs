import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-deep-brown text-white/90">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-warm-gold mb-3">
              𝕸aram Heritage
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              A digital platform dedicated to preserving and sharing the vibrant
              culture, traditions, and wisdom of the Maram Naga community of
              Senapati District, Manipur, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-warm-gold">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Blogs", path: "/blogs" },
                { name: "History & Culture", path: "/about-maram/culture" },
                { name: "Festivals", path: "/about-maram/festival" },
                { name: "Villages", path: "/about-maram/village" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-warm-gold text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-warm-gold">
              Community
            </h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about-us" },
                { name: "Maram Union", path: "/about-maram/maram-union" },
                { name: "MKS", path: "/about-maram/mks" },
                { name: "Career Guidance", path: "/resources/career-guidance" },
                { name: "Scholarships", path: "/resources/scholarship" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-warm-gold text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-warm-gold">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Senapati District, Manipur, India</li>
              <li>
                <a
                  href="mailto:arontech11@gmail.com"
                  className="hover:text-warm-gold transition-colors"
                >
                  arontech11@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                to="/contact-us"
                className="inline-block bg-warm-gold/20 text-warm-gold text-sm px-4 py-2 rounded-lg hover:bg-warm-gold/30 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Maram Heritage. Built with love
            for the Maram Naga community.
          </p>
          <div className="flex gap-4 text-xs text-white/40">
            <Link
              to="/privacy-policy"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/disclaimer"
              className="hover:text-white/70 transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
