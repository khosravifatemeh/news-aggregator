import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            AllInOne
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default NavBar;
