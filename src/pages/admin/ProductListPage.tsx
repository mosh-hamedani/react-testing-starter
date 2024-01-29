import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Button, Table } from "@radix-ui/themes";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Product } from "../../entities";

const ProductListPage = withAuthenticationRequired(() => {
  const { data: products, isLoading, error } = useProducts();

  const renderProducts = () => {
    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    if (products!.length === 0) return <p>No product was found!</p>;

    return (
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products!.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>{product.name}</Table.Cell>
              <Table.Cell>${product.price}</Table.Cell>
              <Table.Cell>
                <Link to={`/admin/products/${product.id}/edit`}>Edit</Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    );
  };

  return (
    <div>
      <h1>Products</h1>
      <Link to="new">
        <Button>New Product</Button>
      </Link>
      {renderProducts()}
    </div>
  );
});

const useProducts = () =>
  useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: () => axios.get("/products").then((res) => res.data),
  });

export default ProductListPage;
