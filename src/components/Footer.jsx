import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-gray-100 text-gray-800 py-6 mt-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <h4 className="font-bold text-lg">AgriBuddy</h4>
            <p>Your digital friend for farming solutions.</p>
            <div className="flex space-x-4 justify-center md:justify-start mt-2">
              <FaFacebook className="text-blue-600 text-xl" />
              <FaTwitter className="text-blue-400 text-xl" />
              <FaLinkedin className="text-blue-700 text-xl" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg">Resources</h4>
            <p>About Us</p>
            <p>Our Team</p>
            <p>Products</p>
            <p>Contact</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Quick Links</h4>
            <p>iOS</p>
            <p>Android</p>
            <p>Microsoft</p>
            <p>Desktop</p>
          </div>
          <div>
            <h4 className="font-bold text-lg">Download App</h4>
            <p>Download our app for the best experience.</p>
            <div className="flex space-x-2 mt-2">
              <button className="bg-green-600 text-white px-3 py-2 rounded-md">
                App Store
              </button>
              <button className="bg-green-600 text-white px-3 py-2 rounded-md">
                Google Play
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 border-t pt-4 text-gray-600">
          <p>Copyright © 2025. AgriBuddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
