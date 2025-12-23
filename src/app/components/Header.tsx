import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { CartState, ProductCategory } from '../../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface HeaderProps {
  cart: CartState;
  onCartToggle: () => void;
  onCategoryChange: (category: ProductCategory | 'all') => void;
  onSearchChange: (query: string) => void;
  selectedCategory: ProductCategory | 'all';
}

const categories: { value: ProductCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'testing-tools', label: 'Testing Tools' },
  { value: 'development-kits', label: 'Development Kits' },
  { value: 'component-libraries', label: 'Component Libraries' },
  { value: 'plugins', label: 'Plugins' },
  { value: 'courses', label: 'Courses' },
  { value: 'merchandise', label: 'Merchandise' },
];

export function Header({ 
  cart, 
  onCartToggle, 
  onCategoryChange, 
  onSearchChange,
  selectedCategory 
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearchChange(value);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Chromatic Demo Store</span>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              onClick={onCartToggle}
              variant="ghost"
              size="icon"
              className="relative"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-orange-500 text-white w-5 h-5 p-0 flex items-center justify-center rounded-full">
                  {totalItems}
                </Badge>
              )}
            </Button>

            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block border-t border-gray-100 md:border-0`}>
          <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 py-2 md:py-0 md:h-12">
            {categories.map((category) => (
              <li key={category.value}>
                <Button
                  onClick={() => {
                    onCategoryChange(category.value);
                    setMobileMenuOpen(false);
                  }}
                  variant={selectedCategory === category.value ? 'secondary' : 'ghost'}
                  className={`w-full md:w-auto justify-start md:justify-center ${
                    selectedCategory === category.value
                      ? 'bg-orange-50 text-orange-600 hover:bg-orange-100 hover:text-orange-700'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  {category.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}