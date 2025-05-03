
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, getNewArrivals, getDiscountedProducts } from "@/data/products";
import { categories } from "@/data/categories";

const HomePage = () => {
  const [newArrivals, setNewArrivals] = useState(getNewArrivals().slice(0, 4));
  const [saleItems, setSaleItems] = useState(getDiscountedProducts().slice(0, 4));
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-purple-light">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-dark mb-4">
              Summer Collection 2025
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-md">
              Discover the latest trends in fashion with our new summer collection. Refresh your wardrobe with vibrant colors and comfortable styles.
            </p>
            <div className="flex space-x-4">
              <Button asChild className="bg-purple hover:bg-purple-tertiary">
                <Link to="/category/women">Shop Women</Link>
              </Button>
              <Button asChild variant="outline" className="border-purple text-purple hover:bg-purple/10">
                <Link to="/category/men">Shop Men</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
              alt="Summer Collection" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-lg shadow-md aspect-square"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Button asChild variant="ghost" className="text-purple hover:text-purple-tertiary">
              <Link to="/new-arrivals" className="flex items-center">
                View All <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
          <div className="product-grid">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Sale Banner */}
      <section className="py-16 bg-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Summer Sale</h2>
          <p className="text-xl text-white/90 mb-8">Up to 50% off on selected items</p>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link to="/category/sale">Shop Now</Link>
          </Button>
        </div>
      </section>
      
      {/* Featured Sale Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">On Sale</h2>
            <Button asChild variant="ghost" className="text-purple hover:text-purple-tertiary">
              <Link to="/category/sale" className="flex items-center">
                View All <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
          <div className="product-grid">
            {saleItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-purple/10 rounded-full text-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On all orders over $50</p>
            </div>
            
            <div className="p-6">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-purple/10 rounded-full text-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M12 2v4"></path>
                  <path d="m6.58 6.58-2.83-2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="m6.58 17.42-2.83 2.83"></path>
                  <path d="M12 18v4"></path>
                  <path d="m17.42 17.42 2.83 2.83"></path>
                  <path d="M18 12h4"></path>
                  <path d="m17.42 6.58 2.83-2.83"></path>
                  <circle cx="12" cy="12" r="5"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            
            <div className="p-6">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-purple/10 rounded-full text-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
              <p className="text-gray-600">Encrypted & secure checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-purple-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for exclusive offers, new arrivals, and fashion tips.
          </p>
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-800"
            />
            <Button type="submit" className="bg-purple hover:bg-purple-tertiary rounded-l-none">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
