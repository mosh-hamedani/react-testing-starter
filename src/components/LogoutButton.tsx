import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@radix-ui/themes";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      color="gray"
      variant="soft"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
