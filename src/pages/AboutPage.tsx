
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-purple-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-dark mb-6">Our Story</h1>
            <p className="text-lg text-gray-700 mb-8">
              Founded in 2020, FreeClothing began with a simple mission: to provide quality clothing for everyone at prices they'll love. Based in Cape Town, South Africa, we've grown from a small start-up to a nationally recognized brand.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team working together" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-purple-secondary">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At FreeClothing, we believe that style should be accessible to everyone. Our mission is to democratize fashion by offering trendy, high-quality clothing at reasonable prices, while maintaining ethical production practices.
              </p>
              <p className="text-gray-700 mb-6">
                We work directly with manufacturers to cut out middlemen and pass the savings on to you. This allows us to maintain high standards of quality and design while keeping prices affordable.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li className="mb-2">Ethical sourcing and production</li>
                <li className="mb-2">Affordable pricing without compromising quality</li>
                <li className="mb-2">Inclusive sizing and styles for all body types</li>
                <li>Environmentally conscious business practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-secondary">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Quality</h3>
              <p className="text-gray-600 text-center">
                We never compromise on quality. Every garment is inspected to ensure it meets our high standards before it reaches you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="m9 9 6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Sustainability</h3>
              <p className="text-gray-600 text-center">
                We're committed to reducing our environmental footprint through sustainable materials, ethical manufacturing, and eco-friendly packaging.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Inclusivity</h3>
              <p className="text-gray-600 text-center">
                Fashion is for everyone. We design clothes that fit and flatter diverse body types, and we price them so they're accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-secondary">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Sarah Johnson - CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-purple mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                With over 15 years in fashion retail, Sarah founded FreeClothing with a vision to make quality fashion accessible to all South Africans.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="David Nkosi - COO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">David Nkosi</h3>
              <p className="text-purple mb-2">COO</p>
              <p className="text-gray-600 text-sm">
                David oversees our operations across South Africa, ensuring that we deliver the best possible experience to our customers.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Lerato Molefe - Head of Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Lerato Molefe</h3>
              <p className="text-purple mb-2">Head of Design</p>
              <p className="text-gray-600 text-sm">
                With a background in fashion design, Lerato leads our creative team in developing clothing that's both stylish and functional.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full w-40 h-40 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Michael van der Merwe - Tech Lead" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Michael van der Merwe</h3>
              <p className="text-purple mb-2">Tech Lead</p>
              <p className="text-gray-600 text-sm">
                Michael ensures our online shopping experience is seamless, secure, and user-friendly for all our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Stores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-secondary">Our Stores</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
            While we're primarily an online retailer, we also have physical stores across South Africa where you can experience our products firsthand.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Store 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Cape Town</h3>
              <p className="text-gray-600 mb-4">
                123 Long Street<br />
                Cape Town Central<br />
                8001<br />
                Western Cape<br />
                <span className="text-purple">Tel: 021 123 4567</span>
              </p>
              <p className="text-gray-700">
                <strong>Hours:</strong><br />
                Mon-Fri: 9am - 6pm<br />
                Sat: 9am - 5pm<br />
                Sun: 10am - 3pm
              </p>
            </div>
            
            {/* Store 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Johannesburg</h3>
              <p className="text-gray-600 mb-4">
                456 Jan Smuts Avenue<br />
                Rosebank<br />
                2196<br />
                Gauteng<br />
                <span className="text-purple">Tel: 011 987 6543</span>
              </p>
              <p className="text-gray-700">
                <strong>Hours:</strong><br />
                Mon-Fri: 9am - 7pm<br />
                Sat: 9am - 6pm<br />
                Sun: 10am - 4pm
              </p>
            </div>
            
            {/* Store 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Durban</h3>
              <p className="text-gray-600 mb-4">
                789 Florida Road<br />
                Morningside<br />
                4001<br />
                KwaZulu-Natal<br />
                <span className="text-purple">Tel: 031 765 4321</span>
              </p>
              <p className="text-gray-700">
                <strong>Hours:</strong><br />
                Mon-Fri: 9am - 6pm<br />
                Sat: 9am - 5pm<br />
                Sun: 10am - 3pm
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sustainability */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-6 text-purple-secondary">Our Commitment to Sustainability</h2>
              <p className="text-gray-700 mb-4">
                We believe that fashion should not come at the cost of our environment. That's why we've implemented various initiatives to reduce our carbon footprint and promote sustainable practices:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li className="mb-2">Using eco-friendly materials in our products</li>
                <li className="mb-2">Reducing waste in our production processes</li>
                <li className="mb-2">Implementing recycling programs in all our facilities</li>
                <li className="mb-2">Using biodegradable packaging for shipping</li>
                <li>Supporting local manufacturers to reduce transportation emissions</li>
              </ul>
              <p className="text-gray-700">
                By 2026, we aim to have 75% of our products made from sustainable materials and achieve carbon neutrality in our operations.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Sustainable fashion" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-16 bg-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our mission to revolutionize South African fashion. Shop with us or join our team – together, we can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-purple hover:bg-gray-100">
              <Link to="/careers">Join Our Team</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/category/all">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
