
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    price: 249.99,
    description: "A comfortable and versatile t-shirt made from 100% cotton. Perfect for everyday wear.",
    category: "men",
    subCategory: "t-shirts",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503341338985-c0477be52513?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f577fac3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["S", "M", "L", "XL"],
    availableColors: ["White", "Black", "Navy", "Gray"],
    isNew: false,
    discount: 0,
    brand: "FreeClothing",
    rating: 4.5,
    reviews: 128
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 599.99,
    description: "Modern slim fit jeans with a bit of stretch for comfort. Made with sustainable denim.",
    category: "men",
    subCategory: "jeans",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604176424472-9e9468137942?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["28", "30", "32", "34", "36"],
    availableColors: ["Blue", "Black", "Gray"],
    isNew: false,
    discount: 15,
    brand: "DenimCo",
    rating: 4.3,
    reviews: 95
  },
  {
    id: "3",
    name: "Oversized Sweater",
    price: 499.99,
    description: "A cozy oversized sweater perfect for those chilly days. Made with a soft wool blend.",
    category: "women",
    subCategory: "sweaters",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559334417-a57bd929f003?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52d01a7b321?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["XS", "S", "M", "L"],
    availableColors: ["Cream", "Blush", "Sage", "Charcoal"],
    isNew: true,
    discount: 0,
    brand: "Urban Comfort",
    rating: 4.7,
    reviews: 64
  },
  {
    id: "4",
    name: "Summer Floral Dress",
    price: 399.99,
    description: "A light and flowy summer dress with a beautiful floral pattern. Perfect for warm days.",
    category: "women",
    subCategory: "dresses",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570382667048-23b581258f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: ["Blue Floral", "Pink Floral"],
    isNew: false,
    discount: 20,
    brand: "Bloom & Petal",
    rating: 4.4,
    reviews: 89
  },
  {
    id: "5",
    name: "Kids Dinosaur Pajama Set",
    price: 299.99,
    description: "Comfortable and fun pajama set for kids featuring adorable dinosaur prints.",
    category: "kids",
    subCategory: "sleepwear",
    images: [
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604671801866-719197ec2754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604671801925-cd2d0dbd7043?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["2T", "3T", "4T", "5T"],
    availableColors: ["Green", "Blue"],
    isNew: true,
    discount: 0,
    brand: "Little Dreams",
    rating: 4.9,
    reviews: 42
  },
  {
    id: "6",
    name: "Leather Crossbody Bag",
    price: 799.99,
    description: "A stylish and practical leather crossbody bag with multiple compartments.",
    category: "accessories",
    subCategory: "bags",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["One Size"],
    availableColors: ["Black", "Tan", "Burgundy"],
    isNew: false,
    discount: 0,
    brand: "Modern Leather",
    rating: 4.6,
    reviews: 76
  },
  {
    id: "7",
    name: "Running Sneakers",
    price: 899.99,
    description: "Lightweight and supportive running shoes with responsive cushioning.",
    category: "men",
    subCategory: "shoes",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["7", "8", "9", "10", "11", "12"],
    availableColors: ["Gray/Blue", "Black/Red", "All Black"],
    isNew: true,
    discount: 10,
    brand: "Athletic Pro",
    rating: 4.8,
    reviews: 112
  },
  {
    id: "8",
    name: "Casual Button-Up Shirt",
    price: 349.99,
    description: "A versatile button-up shirt made from breathable cotton fabric. Perfect for casual or semi-formal occasions.",
    category: "men",
    subCategory: "shirts",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    availableColors: ["Light Blue", "White", "Navy", "Striped"],
    isNew: false,
    discount: 0,
    brand: "FreeClothing",
    rating: 4.2,
    reviews: 58
  },
  {
    id: "9",
    name: "Leather Ankle Boots",
    price: 1299.99,
    description: "Classic leather ankle boots with a durable sole, perfect for all-day wear and versatile styling.",
    category: "women",
    subCategory: "shoes",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["36", "37", "38", "39", "40", "41"],
    availableColors: ["Black", "Brown", "Tan"],
    isNew: false,
    discount: 15,
    brand: "Modern Leather",
    rating: 4.6,
    reviews: 83
  },
  {
    id: "10",
    name: "Patterned Headscarf",
    price: 149.99,
    description: "A vibrant patterned headscarf made from soft, premium fabric. Perfect for adding a pop of color to any outfit.",
    category: "accessories",
    subCategory: "scarves",
    images: [
      "https://images.unsplash.com/photo-1606483956061-46a898dce538?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583500178450-e59e7f3ace15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["One Size"],
    availableColors: ["Multicolor", "Blue Pattern", "Red Pattern"],
    isNew: true,
    discount: 0,
    brand: "Style Accent",
    rating: 4.8,
    reviews: 37
  },
  {
    id: "11",
    name: "Kids Colorful Sneakers",
    price: 399.99,
    description: "Fun and comfortable sneakers for kids with bright colors and durable soles.",
    category: "kids",
    subCategory: "shoes",
    images: [
      "https://images.unsplash.com/photo-1555274175-75f4056dfd05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["Kids 10", "Kids 11", "Kids 12", "Kids 13", "Youth 1", "Youth 2"],
    availableColors: ["Blue/Yellow", "Pink/Purple", "Green/Orange"],
    isNew: false,
    discount: 10,
    brand: "Little Steps",
    rating: 4.7,
    reviews: 52
  },
  {
    id: "12",
    name: "Floral Maxi Dress",
    price: 599.99,
    description: "An elegant floral maxi dress made with flowing fabric, perfect for summer events.",
    category: "women",
    subCategory: "dresses",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618721405407-88476b445d45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["XS", "S", "M", "L", "XL"],
    availableColors: ["Blue Floral", "Pink Floral", "Yellow Floral"],
    isNew: true,
    discount: 0,
    brand: "Bloom & Petal",
    rating: 4.9,
    reviews: 63
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getDiscountedProducts = (): Product[] => {
  return products.filter(product => product.discount > 0);
};
