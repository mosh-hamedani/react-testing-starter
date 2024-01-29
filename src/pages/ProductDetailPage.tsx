import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

const ProductDetailPage = () => {
  const params = useParams();
  const productId = parseInt(params.id!);
  const { data: product, isLoading, error } = useProduct(productId);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (!product) return <div>The given product was not found.</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{"$" + product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
