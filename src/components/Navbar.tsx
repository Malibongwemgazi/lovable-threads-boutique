
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const categories = [
    { name: "Men", path: "/category/men" },
    { name: "Women", path: "/category/women" },
    { name: "Kids", path: "/category/kids" },
    { name: "Accessories", path: "/category/accessories" },
    { name: "Sale", path: "/category/sale" },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-purple-secondary">FreeClothing</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                to={category.path}
                className="text-gray-700 hover:text-purple transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/search" aria-label="Search">
              <Search size={20} className="text-gray-700 hover:text-purple" />
            </Link>
            <Link to="/account" aria-label="Account">
              <User size={20} className="text-gray-700 hover:text-purple" />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative" aria-label="Shopping cart">
                  <ShoppingBag size={20} className="text-gray-700 hover:text-purple" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col h-full">
                  <h3 className="font-semibold text-lg pt-2">Your Cart</h3>
                  <div className="flex-grow overflow-auto py-4">
                    {cartItems.length === 0 ? (
                      <p className="text-muted-foreground">Your cart is empty</p>
                    ) : (
                      cartItems.map((item) => (
                        <div key={item.id} className="flex items-center py-2 border-b">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name} 
                            className="w-16 h-20 object-cover rounded"
                          />
                          <div className="ml-4 flex-grow">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              Size: {item.size} | Qty: {item.quantity}
                            </p>
                            <p className="font-semibold">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between py-2">
                      <span>Subtotal:</span>
                      <span className="font-semibold">
                        ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                      </span>
                    </div>
                    <Button 
                      className="w-full mt-4 bg-purple hover:bg-purple-tertiary"
                      disabled={cartItems.length === 0}
                      asChild
                    >
                      <Link to="/checkout">Checkout</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white px-4 pt-2 pb-4 border-t">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              to={category.path}
              className="block py-2 text-gray-700 hover:text-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
