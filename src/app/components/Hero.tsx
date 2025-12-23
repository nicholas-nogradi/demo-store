import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface HeroProps {
  onShopNow: () => void;
}

export function Hero({ onShopNow }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-orange-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <Badge variant="secondary" className="mb-6 bg-orange-100 text-orange-600 hover:bg-orange-100 border-0">
              New Products Available
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
              Build Better UIs with{' '}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Chromatic
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Discover our collection of visual testing tools, component libraries, 
              and development resources to streamline your workflow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={onShopNow}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg p-6 aspect-square flex flex-col justify-between">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div>
                    <p className="text-2xl text-gray-900 mb-1">50+</p>
                    <p className="text-gray-600 text-sm">Products</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg p-6 aspect-square flex flex-col justify-between">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">★</span>
                  </div>
                  <div>
                    <p className="text-2xl text-gray-900 mb-1">4.9</p>
                    <p className="text-gray-600 text-sm">Rating</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-6 aspect-square flex flex-col justify-between col-span-2">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">◉</span>
                  </div>
                  <div>
                    <p className="text-2xl text-gray-900 mb-1">10,000+</p>
                    <p className="text-gray-600 text-sm">Happy Developers</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
}