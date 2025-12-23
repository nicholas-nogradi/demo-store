import { Star, ShoppingCart } from 'lucide-react';
import type { Product } from '../../types';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onProductClick }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer border-gray-200">
      <div onClick={() => onProductClick(product)}>
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.featured && (
            <Badge className="absolute top-2 right-2 bg-orange-500 text-white border-0">
              Featured
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Badge variant="secondary" className="bg-gray-800 text-white border-0">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        {/* Product Info */}
        <CardContent className="p-4">
          <h3 className="text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating!)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({product.reviewCount})
              </span>
            </div>
          )}

          {/* Price & Action */}
          <div className="flex items-center justify-between">
            <span className="text-2xl text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              disabled={!product.inStock}
              className="bg-orange-500 hover:bg-orange-600"
            >
              <ShoppingCart className="w-4 h-4" />
              Add
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}