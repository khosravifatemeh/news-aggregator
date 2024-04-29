import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface NavbarContentProps {
  navItems: { name: string; to: string }[];
  setMobileOpen: (open: boolean) => void;
}

const NavbarContent = ({ navItems, setMobileOpen }: NavbarContentProps) => {
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <Typography sx={{ color: "white" }}>Menu</Typography>
        </Button>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          All In One
        </Typography>

        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
              marginRight: "auto",
            },
          }}
        >
          {navItems.map((item) => (
            <Button key={item.name} sx={{ color: "#fff" }}>
              <Link style={{ textDecoration: "none" }} to={item.to}>
                {item.name}
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarContent;
