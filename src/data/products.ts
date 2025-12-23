import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Chromatic Visual Testing Pro',
    description: 'Automated visual regression testing for your components. Catch UI bugs before production.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1649698145660-d30f91023b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwbGFwdG9wfGVufDF8fHx8MTc2NjUwNDYxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'testing-tools',
    featured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: '2',
    name: 'Component Library Starter Kit',
    description: 'Pre-built component library with Storybook integration. Kickstart your design system.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1726365222176-425a1a1b9b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0aW5nJTIwdG9vbHMlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2NTA0NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'component-libraries',
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 203
  },
  {
    id: '3',
    name: 'Storybook Integration Plugin',
    description: 'Seamlessly integrate Chromatic with your existing Storybook setup.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrfGVufDF8fHx8MTc2NjM4NjAxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'plugins',
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 89
  },
  {
    id: '4',
    name: 'UI Testing Masterclass',
    description: 'Complete course on visual testing, component-driven development, and modern workflows.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2NjUwMzYxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'courses',
    featured: true,
    inStock: true,
    rating: 5.0,
    reviewCount: 412
  },
  {
    id: '5',
    name: 'Chromatic Developer T-Shirt',
    description: 'Premium cotton t-shirt with the iconic Chromatic logo. Available in multiple sizes.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvbXB1dGVyJTIwc2NyZWVufGVufDF8fHx8MTc2NjUwNDYxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'merchandise',
    featured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 78
  },
  {
    id: '6',
    name: 'Enterprise Development Kit',
    description: 'Complete toolkit for enterprise-scale component development and testing.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1765805911885-7fce401a9230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZ2FkZ2V0cyUyMG1vZGVybnxlbnwxfHx8fDE3NjY0NzMwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'development-kits',
    featured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 134
  },
  {
    id: '7',
    name: 'Accessibility Testing Suite',
    description: 'Automated accessibility testing for your components. WCAG 2.1 compliant.',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1649698145660-d30f91023b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwbGFwdG9wfGVufDF8fHx8MTc2NjUwNDYxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'testing-tools',
    featured: false,
    inStock: true,
    rating: 4.8,
    reviewCount: 167
  },
  {
    id: '8',
    name: 'React Component Library',
    description: '100+ production-ready React components with full TypeScript support.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1726365222176-425a1a1b9b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0aW5nJTIwdG9vbHMlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2NTA0NjE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'component-libraries',
    featured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 201
  },
];
