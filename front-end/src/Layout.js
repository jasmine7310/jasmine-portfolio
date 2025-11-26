import React from "react";
import Box from "@mui/material/Box";

import Home from "./Home";
import Ubiq from "./Ubiq";
import About from "./About";
import BookCover from "./BookCover";
import Whales from "./Whales";
import Shuwa from "./Shuwa";
import Mand from "./Mand";
import Webslingerz from "./Webslingerz";
import Restaurant from "./Restaurant";
import TLocate from "./TLocate";


const pageComponents = {
  home: Home,
  ubiq: Ubiq,
  about: About,
  bookcover: BookCover,
  whales: Whales,
  shuwa: Shuwa,
  mand: Mand,
  webslingerz: Webslingerz,
  restaurant: Restaurant,
  tlocate: TLocate,
};

export default function MainLayout({ activePage }) {
  const ActiveComponent = pageComponents[activePage];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        paddingLeft: 2,
        boxSizing: "border-box",
        wordWrap: "break-word",
        mt: 0
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          maxWidth: "vw",
          overflowX: "hidden",
          background: "transparent",
          mt: 0
        }}
      >
        {ActiveComponent && (
          <Box sx={{ background: "transparent", mt: 0 }}>
            <ActiveComponent  sx={{mt: 0}}/>
          </Box>
        )}
      </Box>
    </Box>
  );
}
