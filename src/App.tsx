import { useState, useMemo, useCallback } from 'react'
import { Header } from '@/app/components/Header'
import { Hero } from '@/app/components/Hero'
import { ProductGrid } from '@/app/components/ProductGrid'
import { ShoppingCart } from '@/app/components/ShoppingCart'
import { ProductDetail } from '@/app/components/ProductDetail'
import { Footer } from '@/app/components/Footer'
import { products } from './data/products'
import type { CartState, Product, ProductCategory, FilterState } from '@/types'
import { Toaster } from 'sonner'

export default function App() {
  const [cart, setCart] = useState<CartState>({
    items: [],
    isOpen: false,
  })

  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    searchQuery: '',
    sortBy: 'featured',
  })

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category)
    }

    // Filter by search query
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase()
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query),
      )
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name':
          return a.name.localeCompare(b.name)
        case 'featured':
        default:
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return 0
      }
    })

    return filtered
  }, [filters])

  // Cart operations
  const handleAddToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existingItem = prev.items.find(item => item.product.id === product.id)

      if (existingItem) {
        return {
          ...prev,
          items: prev.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      }

      return {
        ...prev,
        items: [...prev.items, { product, quantity: 1 }],
      }
    })
  }, [])

  const handleRemoveItem = useCallback((productId: string) => {
    setCart(prev => ({
      ...prev,
      items: prev.items.filter(item => item.product.id !== productId),
    }))
  }, [])

  const handleUpdateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      handleRemoveItem(productId)
      return
    }

    setCart(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    }))
  }, [handleRemoveItem])

  const handleCartToggle = useCallback(() => {
    setCart(prev => ({ ...prev, isOpen: !prev.isOpen }))
  }, [])

  // Filter operations
  const handleCategoryChange = useCallback((category: ProductCategory | 'all') => {
    setFilters(prev => ({ ...prev, category }))
  }, [])

  const handleSearchChange = useCallback((searchQuery: string) => {
    setFilters(prev => ({ ...prev, searchQuery }))
  }, [])

  const handleShopNow = useCallback(() => {
    window.scrollTo({ top: 600, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Toaster position="top-right" />
      <Header
        cart={cart}
        onCartToggle={handleCartToggle}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        selectedCategory={filters.category}
      />

      <main className="flex-1">
        <Hero onShopNow={handleShopNow} />

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl text-gray-900 mb-2">
                {filters.category === 'all'
                  ? 'All Products'
                  : filters.category
                      .split('-')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ')}
              </h2>
              <p className="text-gray-600">
                {filteredProducts.length}{' '}
                {filteredProducts.length === 1 ? 'product' : 'products'} found
              </p>
            </div>

            <select
              value={filters.sortBy}
              onChange={e =>
                setFilters(prev => ({
                  ...prev,
                  sortBy: e.target.value as FilterState['sortBy'],
                }))
              }
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            onProductClick={setSelectedProduct}
          />
        </section>
      </main>

      <Footer />

      <ShoppingCart
        items={cart.items}
        isOpen={cart.isOpen}
        onClose={handleCartToggle}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <ProductDetail
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  )
}
