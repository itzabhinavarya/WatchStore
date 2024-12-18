import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24 px-6 md:px-16">

      {/* Contact Heading Section */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We would love to hear from you! Whether you have a question, need assistance, or just want to say hello, feel free to reach out.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col bg-white p-8 rounded-xl shadow-xl">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-2 block w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-2xl text-blue-600 mr-4" />
                <p className="text-lg text-gray-600">123 Watch Street, City, Country</p>
              </div>
              {/* Phone */}
              <div className="flex items-center">
                <FaPhoneAlt className="text-2xl text-blue-600 mr-4" />
                <p className="text-lg text-gray-600">+1 (234) 567-8900</p>
              </div>
              {/* Email */}
              <div className="flex items-center">
                <FaEnvelope className="text-2xl text-blue-600 mr-4" />
                <p className="text-lg text-gray-600">support@watchstore.com</p>
              </div>
              {/* Social Media */}
              <div className="flex space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800 transition" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-2xl text-blue-600 hover:text-blue-800 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl text-blue-600 hover:text-blue-800 transition" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section with Map */}
      <section className="bg-blue-50 py-16">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Location</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Visit us at our headquarters or drop us a message—we’re here to assist you!
          </p>
        </div>
        <div className="relative w-full h-96">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799124169!2d-74.25986778453674!3d40.6976700637251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af0e3d5a5f%3A0x33b6b777c7dbe08b!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1635313522579!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
