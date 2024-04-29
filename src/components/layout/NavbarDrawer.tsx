import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

interface NavbarMobileProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  navItems: { name: string; to: string }[];
}

const NavbarDrawer: React.FC<NavbarMobileProps> = ({
  mobileOpen,
  navItems,
  setMobileOpen,
}) => {
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              MUI
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <Link to={item.to} style={{ textDecoration: "none" }}>
                      {item.name}
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </>
  );
};

export default NavbarDrawer;
