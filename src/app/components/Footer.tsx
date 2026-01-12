import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-xl text-white">Chromatic Store</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your one-stop shop for visual testing tools, component libraries, and development resources. 
              Build better UIs with Chromatic. This is a demo store. No products are actually sold. Built for demos and testing purposes only.
            </p>
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Testing Tools</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Development Kits</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Component Libraries</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Plugins</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <Separator className="mt-8 mb-8 bg-gray-800" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Chromatic Store. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}