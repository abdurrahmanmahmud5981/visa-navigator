import { CiFacebook, CiInstagram, CiLinkedin, CiMapPin, CiTwitter } from "react-icons/ci";
import { RiMvAiLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import footerLogo from "../assets/logo.gif";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'All Visas', to: '/allVisas' },
    { label: 'Add Visa', to: '/addVisa' },
    { label: 'My Added Visas', to: '/myAddedVisas' },
    { label: 'My Visa Applications', to: '/myVisaApplications'}
  ];

  const legalLinks = [
    { label: 'Privacy Policy', to: '/' },
    { label: 'Terms of Service', to: '/' },
    { label: 'Cookie Policy', to: '/' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="mx-auto  grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen-2xl w-11/12">
        {/* Brand Section */}
        <div>
          <div className=" flex items-center gap-3 mb-4">
            <img className="h-8 rounded" src={footerLogo} alt="Logo of Visa navigator" />
          <h3 className="text-2xl font-bold ">Visa Navigator</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Your comprehensive global travel visa resource
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.to} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            {legalLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.to} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-3 mb-4">
            {[CiFacebook, CiTwitter, CiInstagram, CiLinkedin].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <RiMvAiLine className="w-5 h-5 mr-2 text-blue-500" />
              <span>support@visanavigator.com</span>
            </div>
            <div className="flex items-center">
              <CiMapPin className="w-5 h-5 mr-2 text-red-500" />
              <span>Global Support Center</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center">
        <p className="text-gray-400 text-sm">
          © {currentYear} Visa Navigator. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;