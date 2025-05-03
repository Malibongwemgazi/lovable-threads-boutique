
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { getProductById } from "@/data/products";
import { Product as ProductType } from "@/types";
import NotFound from "./NotFound";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  const { addToCart } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    if (id) {
      const fetchedProduct = getProductById(id);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        setSelectedSize(fetchedProduct.availableSizes[0]);
        if (fetchedProduct.availableColors && fetchedProduct.availableColors.length > 0) {
          setSelectedColor(fetchedProduct.availableColors[0]);
        }
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex justify-center">
          <div className="animate-pulse flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 h-96 bg-gray-200 rounded-lg"></div>
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-8"></div>
              <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return <NotFound />;
  }
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.discount > 0 
        ? product.price * (1 - product.discount / 100) 
        : product.price,
      imageUrl: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };
  
  const prevImage = () => {
    setSelectedImage((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };
  
  const discountedPrice = product.discount > 0 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <ol className="list-none p-0 flex">
            <li className="text-gray-500">
              <a href="/" className="hover:text-purple">Home</a>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="text-gray-500">
              <a href={`/category/${product.category}`} className="hover:text-purple">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </a>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="text-gray-700">{product.name}</li>
          </ol>
        </nav>
        
        <div className="flex flex-col md:flex-row">
          {/* Product Images */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-medium px-2 py-1 rounded">
                  {product.discount}% OFF
                </div>
              )}
              <button 
                onClick={prevImage} 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex mt-4 space-x-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                    selectedImage === idx ? "border-purple" : "border-transparent"
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, idx) => (
                  <Star 
                    key={idx} 
                    size={16} 
                    className={idx < Math.floor(product.rating) 
                      ? "fill-yellow-400 text-yellow-400" 
                      : "text-gray-300"} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.discount > 0 ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-red-500">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-500 line-through ml-2">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 border rounded-md ${
                      selectedSize === size 
                        ? "border-purple bg-purple text-white" 
                        : "border-gray-300 hover:border-purple"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Color Selection */}
            {product.availableColors && product.availableColors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.availableColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`relative h-8 w-8 rounded-full border ${
                        selectedColor === color ? "ring-2 ring-purple ring-offset-2" : ""
                      }`}
                      style={{ backgroundColor: color.toLowerCase() === "white" ? "#fff" : undefined }}
                      aria-label={color}
                    >
                      {color.toLowerCase() === "white" ? null : (
                        <span className="sr-only">{color}</span>
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">Selected: {selectedColor}</p>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center border rounded-md w-32">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-3 py-1 text-lg"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="flex-grow text-center py-1">{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="px-3 py-1 text-lg"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <Button 
              onClick={handleAddToCart} 
              className="w-full mb-4 bg-purple hover:bg-purple-tertiary text-lg py-6"
            >
              Add to Cart - ${(discountedPrice * quantity).toFixed(2)}
            </Button>
            
            {/* Shipping Info */}
            <div className="border-t border-b py-4 mb-6">
              <div className="flex items-center mb-2">
                <Truck size={18} className="mr-2 text-gray-600" />
                <span className="text-sm text-gray-600">Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center">
                <RotateCcw size={18} className="mr-2 text-gray-600" />
                <span className="text-sm text-gray-600">Free 30-day returns</span>
              </div>
            </div>
            
            {/* Product Info Tabs */}
            <Tabs defaultValue="details">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
                <TabsTrigger value="returns">Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-4">
                <p className="text-sm text-gray-600">
                  <strong>Brand:</strong> {product.brand}<br />
                  <strong>Material:</strong> Premium quality materials<br />
                  <strong>Care:</strong> Machine wash cold, tumble dry low<br />
                </p>
              </TabsContent>
              <TabsContent value="shipping" className="p-4">
                <p className="text-sm text-gray-600">
                  Orders are typically processed and shipped within 1-2 business days. 
                  Standard shipping takes 3-5 business days. Express shipping options 
                  are available at checkout.
                </p>
              </TabsContent>
              <TabsContent value="returns" className="p-4">
                <p className="text-sm text-gray-600">
                  We offer a 30-day return policy for most items in new, unworn condition 
                  with tags attached. Return shipping is free for all eligible returns.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
