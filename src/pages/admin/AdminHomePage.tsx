import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const AdminHomePage = withAuthenticationRequired(() => {
  return (
    <div>
      <h1>Admin Area</h1>
      <Link to="products">Products</Link>
    </div>
  );
});

export default AdminHomePage;
