import { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./Sidebar";
import MainLayout from "./Layout";

const drawerWidth = 240;

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const pageBackgrounds = {
    about: "/background.svg",
    whales: "/whales-bg.svg",
    ubiq: "/ubiq-bg.svg",
    bookcover: "/bookcover-bg.svg",
    home: "/home-bg.svg",
    mand: "/mand-bg.svg",
    tlocate: "/tlocate-bg.svg",
    restaurant: "/restaurant-bg.svg",
    webslingerz: "/webslingerz-bg.svg",
    shuwa: "/shuwa-bg.svg"
  };

  const backgroundImage = pageBackgrounds[activePage]
    ? `url('${pageBackgrounds[activePage]}')`
    : "none";

  return (
    <>
      <Box
        className="app"
        sx={{
          display: "flex",
          minHeight: "100vh",
          backgroundImage: backgroundImage,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center top",
        }}
      >
        <CssBaseline />

        <Sidebar drawerWidth={drawerWidth} setActivePage={setActivePage} activePage={activePage} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "transparent",
            p: 3,
            ml: `0px`,
            width: `calc(100% - ${drawerWidth}px)`,
            mt: 0, 
          }}
        >
        <MainLayout activePage={activePage} />
        </Box>
      </Box>
    </>
    
  );
}
