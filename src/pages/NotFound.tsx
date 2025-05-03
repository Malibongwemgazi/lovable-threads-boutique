
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-purple mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page might have been removed, renamed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-purple hover:bg-purple-tertiary">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
