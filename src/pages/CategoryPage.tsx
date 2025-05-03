
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductsByCategory, getDiscountedProducts } from "@/data/products";
import { Product } from "@/types";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rating", value: "rating" },
];

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  
  useEffect(() => {
    let productList: Product[] = [];
    
    if (categoryId === "sale") {
      productList = getDiscountedProducts();
    } else if (categoryId) {
      productList = getProductsByCategory(categoryId);
    }
    
    setProducts(productList);
    setFilteredProducts(productList);
    
    // Get min and max prices from products
    if (productList.length > 0) {
      const prices = productList.map(p => p.price);
      const minPrice = Math.floor(Math.min(...prices));
      const maxPrice = Math.ceil(Math.max(...prices));
      setPriceRange([minPrice, maxPrice]);
    }
  }, [categoryId]);

  const brands = [...new Set(products.map(p => p.brand))];
  const sizes = [...new Set(products.flatMap(p => p.availableSizes))];
  
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  
  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };
  
  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
  };
  
  const applyFilters = () => {
    let result = [...products];
    
    // Filter by price
    result = result.filter(product => {
      const price = product.discount > 0
        ? product.price * (1 - product.discount / 100)
        : product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Filter by brand
    if (selectedBrands.length > 0) {
      result = result.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Filter by size
    if (selectedSizes.length > 0) {
      result = result.filter(product => 
        product.availableSizes.some(size => selectedSizes.includes(size))
      );
    }
    
    // Sort products
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => {
          const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
          const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
          return priceA - priceB;
        });
        break;
      case "price-desc":
        result.sort((a, b) => {
          const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
          const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
          return priceB - priceA;
        });
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
      default:
        // Assume newer products have isNew flag
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
    setMobileFiltersOpen(false);
  };
  
  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedSizes([]);
    const prices = products.map(p => p.price);
    const minPrice = Math.floor(Math.min(...prices));
    const maxPrice = Math.ceil(Math.max(...prices));
    setPriceRange([minPrice, maxPrice]);
    setFilteredProducts(products);
  };

  const categoryTitle = categoryId
    ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1)
    : "Products";
  
  const FiltersSidebar = () => (
    <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block md:w-1/4 lg:w-1/5 pr-6`}>
      <div className="sticky top-20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Filters</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={resetFilters}
            className="text-sm text-purple hover:text-purple-tertiary"
          >
            Reset All
          </Button>
        </div>
        
        {/* Price Filter */}
        <div className="mb-8">
          <h4 className="font-medium mb-3">Price</h4>
          <Slider 
            defaultValue={[priceRange[0], priceRange[1]]} 
            min={0} 
            max={200} 
            step={1}
            onValueChange={handlePriceChange}
            className="mb-2"
          />
          <div className="flex items-center justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
        
        {/* Brand Filter */}
        <div className="mb-8">
          <h4 className="font-medium mb-3">Brand</h4>
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center">
                <Checkbox 
                  id={`brand-${brand}`} 
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() => toggleBrand(brand)}
                />
                <label 
                  htmlFor={`brand-${brand}`} 
                  className="ml-2 text-sm text-gray-700 cursor-pointer"
                >
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Size Filter */}
        <div className="mb-8">
          <h4 className="font-medium mb-3">Size</h4>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSizes.includes(size) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleSize(size)}
                className={selectedSizes.includes(size) 
                  ? "bg-purple hover:bg-purple-tertiary" 
                  : "hover:border-purple hover:text-purple"
                }
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
        
        <Button 
          onClick={applyFilters} 
          className="w-full bg-purple hover:bg-purple-tertiary md:hidden"
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{categoryTitle}</h1>
          <p className="text-gray-600 mt-2">
            {filteredProducts.length} products
          </p>
        </div>
        
        {/* Mobile Filter Toggle */}
        <div className="flex justify-between items-center mb-4 md:hidden">
          <Button
            variant="outline"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center"
          >
            <SlidersHorizontal size={16} className="mr-2" />
            Filters
          </Button>
          
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-purple"
            >
              <option value="" disabled>Sort By</option>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Mobile Filters Modal */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
            <div className="absolute right-0 top-0 h-full w-80 bg-white overflow-auto">
              <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <X size={20} />
                  </Button>
                </div>
                
                {/* Filter content goes here - same as sidebar */}
                <div className="mb-8">
                  <h4 className="font-medium mb-3">Price</h4>
                  <Slider 
                    defaultValue={[priceRange[0], priceRange[1]]} 
                    min={0} 
                    max={200} 
                    step={1}
                    onValueChange={handlePriceChange}
                    className="mb-2"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-medium mb-3">Brand</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center">
                        <Checkbox 
                          id={`mobile-brand-${brand}`} 
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                        />
                        <label 
                          htmlFor={`mobile-brand-${brand}`} 
                          className="ml-2 text-sm text-gray-700 cursor-pointer"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-medium mb-3">Size</h4>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSizes.includes(size) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleSize(size)}
                        className={selectedSizes.includes(size) 
                          ? "bg-purple hover:bg-purple-tertiary" 
                          : "hover:border-purple hover:text-purple"
                        }
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    onClick={resetFilters} 
                    variant="outline" 
                    className="flex-1"
                  >
                    Reset
                  </Button>
                  <Button 
                    onClick={applyFilters} 
                    className="flex-1 bg-purple hover:bg-purple-tertiary"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* Filters Sidebar - Desktop */}
          <FiltersSidebar />
          
          {/* Products Grid */}
          <div className="md:w-3/4 lg:w-4/5">
            {/* Sort - Desktop */}
            <div className="hidden md:flex justify-end mb-6">
              <div className="relative w-48">
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    applyFilters();
                  }}
                  className="appearance-none w-full bg-white border rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-purple"
                >
                  <option value="" disabled>Sort By</option>
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <p className="text-xl text-gray-500 mb-4">No products match your filters.</p>
                <Button onClick={resetFilters} className="bg-purple hover:bg-purple-tertiary">
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
