import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const LeftSideBar = () => {
  const drawerWidth = 240;
  const drawerContent = (
    <>
      <List>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="My Feed"></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Search"></ListItemText>
        </ListItem>
      </List>
    </>
  );
  return (
    <nav>
      <Drawer
        variant="temporary"
        open={true}
        slotProps={{ backdrop: { invisible: true } }}
        elevation={0}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "1px solid rgba(0, 0, 0, 0.12)",
            top: "64px",
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawerContent}
      </Drawer>
    </nav>
  );
};
export default LeftSideBar;
