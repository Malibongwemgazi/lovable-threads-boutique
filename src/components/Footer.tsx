
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-purple-secondary">FreeClothing</h3>
            <p className="text-gray-600 mb-4">Quality clothing for everyone, at prices you'll love.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-purple">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-purple">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-purple">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Email" className="text-gray-500 hover:text-purple">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/category/men" className="text-gray-600 hover:text-purple">Men</Link></li>
              <li><Link to="/category/women" className="text-gray-600 hover:text-purple">Women</Link></li>
              <li><Link to="/category/kids" className="text-gray-600 hover:text-purple">Kids</Link></li>
              <li><Link to="/category/accessories" className="text-gray-600 hover:text-purple">Accessories</Link></li>
              <li><Link to="/category/sale" className="text-gray-600 hover:text-purple">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-purple">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-purple">FAQs</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-purple">Shipping & Returns</Link></li>
              <li><Link to="/size-guide" className="text-gray-600 hover:text-purple">Size Guide</Link></li>
              <li><Link to="/track-order" className="text-gray-600 hover:text-purple">Track Order</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-purple">Our Story</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-purple">Careers</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-purple">Store Locator</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-purple">Sustainability</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-purple">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} FreeClothing. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-500 hover:text-purple text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-purple text-sm">Terms of Service</Link>
            <Link to="/terms" className="text-gray-500 hover:text-purple text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
