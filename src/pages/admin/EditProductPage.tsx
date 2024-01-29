import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Heading } from "@radix-ui/themes";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import useProduct from "../../hooks/useProduct";

const EditProductPage = withAuthenticationRequired(() => {
  const navigate = useNavigate();
  const params = useParams();
  const productId = parseInt(params.id!);
  const { data: product, isLoading, error } = useProduct(productId);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (!product) return <div>The given product was not found.</div>;

  return (
    <div>
      <Heading mb="4">Edit Product</Heading>
      <ProductForm
        product={product}
        onSubmit={async (product) => {
          await axios.put("/products/" + productId, product);
          toast.success("Changes were successfully saved.");
          navigate("/admin/products");
        }}
      />
    </div>
  );
});

export default EditProductPage;
