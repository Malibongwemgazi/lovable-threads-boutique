
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    price: 24.99,
    description: "A comfortable and versatile t-shirt made from 100% cotton. Perfect for everyday wear.",
    category: "men",
    subCategory: "t-shirts",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503341338985-c0477be52513?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
    price: 59.99,
    description: "Modern slim fit jeans with a bit of stretch for comfort. Made with sustainable denim.",
    category: "men",
    subCategory: "jeans",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
    price: 49.99,
    description: "A cozy oversized sweater perfect for those chilly days. Made with a soft wool blend.",
    category: "women",
    subCategory: "sweaters",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559334417-a57bd929f003?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52d01a7b321?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
    price: 39.99,
    description: "A light and flowy summer dress with a beautiful floral pattern. Perfect for warm days.",
    category: "women",
    subCategory: "dresses",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570382667048-23b581258f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
    price: 29.99,
    description: "Comfortable and fun pajama set for kids featuring adorable dinosaur prints.",
    category: "kids",
    subCategory: "sleepwear",
    images: [
      "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604671801866-719197ec2754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604671801925-cd2d0dbd7043?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
    price: 79.99,
    description: "A stylish and practical leather crossbody bag with multiple compartments.",
    category: "accessories",
    subCategory: "bags",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
    price: 89.99,
    description: "Lightweight and supportive running shoes with responsive cushioning.",
    category: "men",
    subCategory: "shoes",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
    price: 34.99,
    description: "A versatile button-up shirt made from breathable cotton fabric. Perfect for casual or semi-formal occasions.",
    category: "men",
    subCategory: "shirts",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598961942613-ba897716405b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    availableColors: ["Light Blue", "White", "Navy", "Striped"],
    isNew: false,
    discount: 0,
    brand: "FreeClothing",
    rating: 4.2,
    reviews: 58
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
