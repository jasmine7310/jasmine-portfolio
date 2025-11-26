import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./Sidebar.css";

export default function Sidebar({ drawerWidth, setActivePage, activePage }) {
  const menuItems = [
    { label: "Home", page: "home" },
    { label: "Who am I?", page: "about" },
    { label: "Shuwa: ASL to Text Meeting App", page: "shuwa" },
    { label: "Ubiq: Spatial Media App", page: "ubiq" },
    { label: "MAND: an interactive thriller game", page: "mand" },
    { label: "T-Locate App", page: "tlocate" },
    { label: "Bird Collector", page: "webslingerz" },
    { label: "Restaurant Delivery App", page: "restaurant" },
    { label: "Save the Whales!", page: "whales" },
    { label: "Design Exploration: Medea", page: "bookcover" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          transition: "width 0.3s",
          overflowX: "hidden",
          boxSizing: "border-box",
          background: "transparent",
          fontFamily: "Sen, sans-serif",
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          textAlign: "center",
        }}
      >
        <h2 className="judson-regular" id="logo">{activePage === "about" ? "who? me?" : "jasmine fan."} </h2>  
      </Box>

      <List sx={{ height: "100%" }}>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => setActivePage(item.page)}
              sx={{ minHeight: 48, justifyContent: "initial", px: 2.5 }}
            >
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: {
                    sx: { fontFamily: "Sen, sans-serif" }
                  }
                }}
              />

            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
