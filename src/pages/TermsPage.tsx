
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-purple-secondary">Terms and Conditions</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to FreeClothing. These terms and conditions govern your use of our website and the purchase of products from our online store. By accessing our website or placing an order, you agree to be bound by these terms and conditions.
            </p>
            <p>
              Please read these terms carefully before using our services. If you do not agree to these terms, you may not use our website or services.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <p className="mb-2">"Company", "we", "us", or "our" refers to FreeClothing.</p>
            <p className="mb-2">"Website" refers to www.freeclothing.com and all related subdomains.</p>
            <p className="mb-2">"User", "you", or "your" refers to the person accessing the website or placing an order.</p>
            <p className="mb-2">"Products" refers to the items offered for sale on our website.</p>
            <p className="mb-2">"Order" refers to a request to purchase products from our website.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Ordering and Payment</h2>
            <p className="mb-4">
              By placing an order, you are making an offer to purchase products. All orders are subject to acceptance and availability. We reserve the right to refuse any order.
            </p>
            <p className="mb-4">
              All prices are in South African Rand (ZAR) and include VAT at the current rate of 15%. We accept payment via credit card, debit card, EFT, and other payment methods as indicated during the checkout process.
            </p>
            <p className="mb-4">
              Payment must be received in full before we dispatch your order. We reserve the right to cancel any order for which payment has not been received.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Delivery</h2>
            <p className="mb-4">
              We deliver to all nine provinces of South Africa. Delivery times and costs vary by location and will be specified during the checkout process.
            </p>
            <p className="mb-4">
              We aim to deliver within the specified timeframe, but delivery times are estimates only and not guaranteed. We are not liable for any delays in delivery.
            </p>
            <p>
              Risk of loss or damage to products passes to you upon delivery.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Returns and Refunds</h2>
            <p className="mb-4">
              You may return most products within 30 days of delivery for a full refund or exchange, provided the product is unused, in its original packaging, and in a resalable condition.
            </p>
            <p className="mb-4">
              To initiate a return, please contact our customer service team or follow the return instructions included with your order.
            </p>
            <p>
              Refunds will be processed within 14 days of receiving the returned product using the same payment method used for the original purchase.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Privacy Policy</h2>
            <p className="mb-4">
              We collect and process your personal data in accordance with our Privacy Policy, which forms part of these terms and conditions.
            </p>
            <p>
              By using our website and services, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p className="mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of FreeClothing or its content suppliers and is protected by South African and international copyright laws.
            </p>
            <p>
              You may not reproduce, distribute, display, or create derivative works from any content on our website without our express written permission.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, FreeClothing shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
            </p>
            <p>
              Our total liability to you for all claims arising from or related to your use of our website or services shall not exceed the amount paid by you for the products that are the subject of the claim.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p>
              These terms and conditions are governed by the laws of the Republic of South Africa. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the courts of South Africa.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website after any changes indicates your acceptance of the new terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about these terms and conditions, please contact us at info@freeclothing.com or call us at +27 21 123 4567.
            </p>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsPage;
