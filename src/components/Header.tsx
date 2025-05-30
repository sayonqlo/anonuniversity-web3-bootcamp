
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WalletButton from "./WalletButton";
import { useWeb3 } from "@/contexts/Web3Context";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isConnected } = useWeb3();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              AnonU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isConnected ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`transition-colors ${isActive('/dashboard') ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'}`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/courses" 
                  className={`transition-colors ${isActive('/courses') ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'}`}
                >
                  Courses
                </Link>
                <Link 
                  to="/profile" 
                  className={`transition-colors ${isActive('/profile') ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'}`}
                >
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/courses" 
                  className={`transition-colors ${isActive('/courses') ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'}`}
                >
                  Courses
                </Link>
                <Link 
                  to="/about" 
                  className={`transition-colors ${isActive('/about') ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'}`}
                >
                  About
                </Link>
                <Link 
                  to="/faq" 
                  className={`transition-colors ${isActive('/faq') ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'}`}
                >
                  FAQ
                </Link>
              </>
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <WalletButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-4">
              {isConnected ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className={`transition-colors ${isActive('/dashboard') ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/courses" 
                    className={`transition-colors ${isActive('/courses') ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Courses
                  </Link>
                  <Link 
                    to="/profile" 
                    className={`transition-colors ${isActive('/profile') ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    to="/courses" 
                    className={`transition-colors ${isActive('/courses') ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Courses
                  </Link>
                  <Link 
                    to="/about" 
                    className={`transition-colors ${isActive('/about') ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/faq" 
                    className={`transition-colors ${isActive('/faq') ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </>
              )}
              <div className="pt-4">
                <WalletButton />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
