
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.images[0],
      size: product.availableSizes[0],
      quantity: 1,
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div className="group card-hover">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-[3/4]">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.isNew && (
            <div className="absolute top-2 right-2 bg-purple text-white text-xs font-medium px-2 py-1 rounded">
              NEW
            </div>
          )}
          {product.discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}
        </div>
        <div className="pt-3">
          <h3 className="font-medium text-sm">{product.name}</h3>
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center">
              {product.discount > 0 ? (
                <>
                  <span className="font-semibold text-red-500">R{(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                  <span className="text-sm text-gray-400 line-through ml-2">R{product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="font-semibold">R{product.price.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button 
          onClick={handleAddToCart}
          variant="default" 
          className="w-full bg-purple hover:bg-purple-tertiary"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
