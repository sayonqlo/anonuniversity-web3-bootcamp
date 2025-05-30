
import { BookOpen, Twitter, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AnonU</span>
            </div>
            <p className="text-gray-400">
              The world's first anonymous blockchain learning academy. 
              Master blockchain development while maintaining complete privacy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/courses" className="hover:text-orange-500 transition-colors">Blockchain Fundamentals</Link></li>
              <li><Link to="/courses" className="hover:text-orange-500 transition-colors">Smart Contracts</Link></li>
              <li><Link to="/courses" className="hover:text-orange-500 transition-colors">DeFi Development</Link></li>
              <li><Link to="/courses" className="hover:text-orange-500 transition-colors">NFT Development</Link></li>
              <li><Link to="/courses" className="hover:text-orange-500 transition-colors">Web3 Full-Stack</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/faq" className="hover:text-orange-500 transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Academy</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About AnonU</Link></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Anonymous Team</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Certification</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AnonU. All rights reserved. Learn anonymously, develop confidently.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
