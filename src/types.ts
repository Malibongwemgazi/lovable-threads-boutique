
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  subCategory?: string;
  images: string[];
  availableSizes: string[];
  availableColors?: string[];
  isNew?: boolean;
  discount: number;
  brand: string;
  rating: number;
  reviews: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: string;
  color?: string;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}
