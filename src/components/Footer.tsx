import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo and Description (Optional) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-3xl flex items-center text-white"
            >
              
              SIGN SPELL
            </a>
            <p className="mt-2 text-gray-400 max-w-sm">
              Voicing the Unspoken
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              rel="noreferrer noopener"
              href="#"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <InstagramLogoIcon className="h-6 w-6" />
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <TwitterLogoIcon className="h-6 w-6" />
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              aria-label="Discord"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <GitHubLogoIcon className="h-6 w-6" />
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              aria-label="Youtube"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <LinkedInLogoIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Main Navigation Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-white">Product</h3>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">
              Features
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Services
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Documentation
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-white">Company</h3>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              About Us
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Careers
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Blog
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg text-white">Resources</h3>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Support
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              FAQs
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
          </div>

          {/* New: Newsletter Signup */}
          <div className="flex flex-col gap-3 sm:col-span-2 md:col-span-1 lg:col-span-2">
            <h3 className="font-semibold text-lg text-white">Stay Updated</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest news and updates.
            </p>
            <form className="flex gap-2 mt-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow p-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-5 py-3 rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Bottom Section: Copyright */}
        <section className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sign Spell. All rights reserved. Made with ❤️ by{" "}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.linkedin.com/in/leopoldo-miranda/"
              className="text-green-400 hover:text-green-300 transition-all border-b border-transparent hover:border-green-300"
            >
              Machine Maestros
            </a>
            .
          </p>
        </section>
      </div>
    </footer>
  );
};