import { useState, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./Sidebar";
import MainLayout from "./Layout";

const drawerWidth = 240;

const pages = ["home", "about", "shuwa", "ubiq", "mand", "tlocate", "webslingerz", "restaurant", "whales", "bookcover"];

// Supports both /#ubiq and /?page=ubiq (some PDF viewers drop or mangle the "#" in links)
function getPageFromHash() {
  const hashPage = window.location.hash.replace("#", "").toLowerCase();
  if (pages.includes(hashPage)) return hashPage;
  const queryPage = (new URLSearchParams(window.location.search).get("page") || "").toLowerCase();
  return pages.includes(queryPage) ? queryPage : "home";
}

export default function App() {
  const [activePage, setActivePageState] = useState(getPageFromHash);

  // Keep the active page in sync with the URL hash so pages can be linked to directly (e.g. /#ubiq)
  useEffect(() => {
    const onHashChange = () => setActivePageState(getPageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const setActivePage = (page) => {
    window.location.hash = page;
    setActivePageState(page);
  };

  const pageBackgrounds = {
    about: "./background.svg",
    whales: "./whales-bg.svg",
    ubiq: "./ubiq-bg.svg",
    bookcover: "./bookcover-bg.svg",
    home: "./home-bg.svg",
    mand: "./mand-bg.svg",
    tlocate: "./tlocate-bg.svg",
    restaurant: "./restaurant-bg.svg",
    webslingerz: "./webslingerz-bg.svg",
    shuwa: "./shuwa-bg.svg"
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
