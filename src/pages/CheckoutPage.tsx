
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, ShoppingBag, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";
import { CheckoutFormData } from "@/types";

const CheckoutPage = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  const [formData, setFormData] = useState<CheckoutFormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "South Africa",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const shipping = subtotal > 500 ? 0 : 75.99;
  const tax = subtotal * 0.15; // South Africa's VAT is 15%
  const total = subtotal + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === "cardNumber") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        .slice(0, 19); // limit to 16 digits + 3 spaces
      setFormData({ ...formData, [name]: formatted });
      return;
    }
    
    // Format card expiry with /
    if (name === "cardExpiry") {
      let formatted = value.replace(/\D/g, "");
      if (formatted.length > 2) {
        formatted = `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}`;
      }
      setFormData({ ...formData, [name]: formatted });
      return;
    }
    
    // Format CVC
    if (name === "cardCvc") {
      const formatted = value.replace(/\D/g, "").slice(0, 3);
      setFormData({ ...formData, [name]: formatted });
      return;
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const validateStep1 = () => {
    if (!formData.email || !formData.firstName || !formData.lastName || 
        !formData.address || !formData.city || !formData.state || !formData.zipCode) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.cardNumber || !formData.cardExpiry || !formData.cardCvc) {
      toast({
        title: "Missing Payment Information",
        description: "Please enter your card details",
        variant: "destructive",
      });
      return false;
    }
    
    if (formData.cardNumber.replace(/\s/g, "").length !== 16) {
      toast({
        title: "Invalid Card Number",
        description: "Please enter a valid 16-digit card number",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.cardExpiry.match(/^\d{2}\/\d{2}$/)) {
      toast({
        title: "Invalid Expiration Date",
        description: "Please enter a valid expiration date (MM/YY)",
        variant: "destructive",
      });
      return false;
    }
    
    if (formData.cardCvc.length !== 3) {
      toast({
        title: "Invalid CVC",
        description: "Please enter a valid 3-digit CVC",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) {
      return;
    }
    
    setIsProcessing(true);
    
    // Simulating payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      clearCart();
      
      // Redirect to success page after a moment
      setTimeout(() => {
        navigate("/");
        toast({
          title: "Order Placed Successfully",
          description: "Thank you for your purchase!",
        });
      }, 2000);
    }, 2000);
  };

  if (cartItems.length === 0 && !paymentSuccess) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
          <ShoppingBag size={48} className="text-gray-300 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-gray-600 mb-6">Add some items to your cart before checkout.</p>
          <Button asChild className="bg-purple hover:bg-purple-tertiary">
            <a href="/">Continue Shopping</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex flex-col items-center">
          <CheckCircle size={64} className="text-green-500 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-xl text-gray-600 mb-2">Thank you for your purchase.</p>
          <p className="text-gray-600 mb-8">
            A confirmation email has been sent to {formData.email}.
          </p>
          <Button asChild className="bg-purple hover:bg-purple-tertiary">
            <a href="/">Continue Shopping</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        
        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep === 1 ? "bg-purple text-white" : "bg-purple text-white"
            }`}>
              1
            </div>
            <span className={`mx-2 text-sm ${
              currentStep === 1 ? "text-gray-800 font-medium" : "text-gray-800 font-medium"
            }`}>Shipping</span>
            <div className="w-12 h-1 mx-2 bg-gray-200">
              <div className={`h-full ${
                currentStep === 2 ? "bg-purple" : "bg-gray-200"
              }`}></div>
            </div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep === 2 ? "bg-purple text-white" : "bg-gray-300 text-white"
            }`}>
              2
            </div>
            <span className={`ml-2 text-sm ${
              currentStep === 2 ? "text-gray-800 font-medium" : "text-gray-400"
            }`}>Payment</span>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Main St"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Cape Town"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">Province</Label>
                        <select
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple"
                          required
                        >
                          <option value="">Select Province</option>
                          <option value="Eastern Cape">Eastern Cape</option>
                          <option value="Free State">Free State</option>
                          <option value="Gauteng">Gauteng</option>
                          <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                          <option value="Limpopo">Limpopo</option>
                          <option value="Mpumalanga">Mpumalanga</option>
                          <option value="North West">North West</option>
                          <option value="Northern Cape">Northern Cape</option>
                          <option value="Western Cape">Western Cape</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="zipCode">Postal Code</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          placeholder="8001"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple"
                        required
                        disabled
                      >
                        <option value="South Africa">South Africa</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button 
                    type="button" 
                    onClick={handleNextStep}
                    className="w-full bg-purple hover:bg-purple-tertiary"
                  >
                    Continue to Payment
                  </Button>
                </div>
              )}
              
              {/* Step 2: Payment */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                        <CreditCard size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cardExpiry">Expiration Date</Label>
                        <Input
                          id="cardExpiry"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardCvc">CVC</Label>
                        <Input
                          id="cardCvc"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleChange}
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={handlePrevStep}
                      className="w-1/3"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={isProcessing}
                      className="w-2/3 bg-purple hover:bg-purple-tertiary"
                    >
                      {isProcessing ? "Processing..." : `Pay R${total.toFixed(2)}`}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex">
                    <div className="w-16 h-20 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                      <div className="flex justify-between mt-1">
                        <p className="text-sm">R{item.price.toFixed(2)} × {item.quantity}</p>
                        <p className="font-medium">R{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `R${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (15%)</span>
                  <span>R{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>R{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
