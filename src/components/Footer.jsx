import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-6 mt-10">
      <div className="max-w-7xl mx-auto text-white">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Footer Links */}
          <div className="text-center sm:text-left">
            <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
            <ul>
              <li>
                <Link to="/" className="hover:text-red-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-red-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-red-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-red-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 justify-center sm:justify-end">
            <Link to="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
              <FaFacebookF size={20} /> {/* Facebook Icon */}
            </Link>
            <Link to="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
              <FaTwitter size={20} /> {/* Twitter Icon */}
            </Link>
            <Link to="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
              <FaInstagram size={20} /> {/* Instagram Icon */}
            </Link>
            <Link to="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
              <FaLinkedinIn size={20} /> {/* LinkedIn Icon */}
            </Link>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
