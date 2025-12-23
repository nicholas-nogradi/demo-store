import { Star, ShoppingCart, Check } from 'lucide-react';
import type { Product } from '../../types';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent } from './ui/dialog';
import { Separator } from './ui/separator';

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductDetail({ product, isOpen, onClose, onAddToCart }: ProductDetailProps) {
  if (!product) return null;

  const features = [
    'Full TypeScript support',
    'Comprehensive documentation',
    'Regular updates and support',
    'Community access',
    '30-day money-back guarantee',
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.featured && (
              <Badge className="absolute top-4 left-4 bg-orange-500 text-white border-0">
                Featured
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <Badge variant="secondary" className="mb-2 w-fit bg-orange-50 text-orange-600 hover:bg-orange-50 border-0">
              {product.category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </Badge>

            <h2 className="text-3xl text-gray-900 mb-4">
              {product.name}
            </h2>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating!)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            )}

            <p className="text-gray-600 mb-6">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-gray-900 mb-3">What&apos;s included:</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price & Add to Cart */}
            <div className="mt-auto pt-6">
              <Separator className="mb-4" />
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-gray-600 block text-sm">Price</span>
                  <span className="text-4xl text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="text-right">
                  {product.inStock ? (
                    <Badge variant="secondary" className="bg-green-50 text-green-600 border-green-200">
                      <Check className="w-4 h-4" />
                      In Stock
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      Out of Stock
                    </Badge>
                  )}
                </div>
              </div>

              <Button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                disabled={!product.inStock}
                className="w-full bg-orange-500 hover:bg-orange-600"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}