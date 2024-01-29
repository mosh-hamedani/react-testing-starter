import { useEffect, useState } from "react";
import { Product } from "../entities";

const ProductDetail = ({ productId }: { productId: number }) => {
  const [product, setProduct] = useState<Product | undefined>(
    undefined
  );
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!productId) {
      setError("Invalid ProductId");
      return;
    }

    setLoading(true);
    fetch("/products/" + productId)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => setError((err as Error).message))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!product) return <div>The given product was not found.</div>;

  return (
    <div>
      <h1>Product Detail</h1>
      <div>Name: {product.name}</div>
      <div>Price: ${product.price}</div>
    </div>
  );
};

export default ProductDetail;
