import { Table } from "@radix-ui/themes";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import QuantitySelector from "../components/QuantitySelector";
import { Product } from "../entities";

function ProductListPage() {
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
            <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {products!.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>
                <Link to={product.id.toString()}>{product.name}</Link>
              </Table.Cell>
              <Table.Cell>${product.price}</Table.Cell>
              <Table.Cell>
                <QuantitySelector product={product} />
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
      {renderProducts()}
    </div>
  );
}

const useProducts = () =>
  useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: () => axios.get("/products").then((res) => res.data),
  });

export default ProductListPage;
