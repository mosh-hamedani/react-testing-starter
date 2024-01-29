import { Badge, Flex, Text } from "@radix-ui/themes";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import AuthStatus from "./AuthStatus";
import LanguageSelector from "./LanguageSelector";

const NavBar = () => {
  const { getItemCount } = useCart();

  const links = [
    { label: "Products", href: "/products" },
    { label: "Playground", href: "/playground" },
    { label: "Admin", href: "/admin" },
  ];

  return (
    <Flex p="4" className="border-b" justify="between" role="navigation">
      <Flex gap="2" align="start">
        <Text className="font-medium">
          <Link to="/">
            <MdHome size={24} color="#000" />
          </Link>
        </Text>
        <ul className="flex space-x-8 ml-10">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-zinc-800"
                    : "text-zinc-700 hover:text-blue-500"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Flex>
      <Flex gap="2" align="center">
        <Flex align="center" gap="1">
          <AiOutlineShoppingCart />
          <Badge role="status">{getItemCount()}</Badge>
        </Flex>
        <LanguageSelector />
        <AuthStatus />
      </Flex>
    </Flex>
  );
};

export default NavBar;
