import { extendTheme } from "@chakra-ui/react";

// import "@fontsource/zen-kaku-gothic-new/300.css";
// import "@fontsource/zen-kaku-gothic-new/400.css";
// import "@fontsource/zen-kaku-gothic-new/500.css";
// import "@fontsource/zen-kaku-gothic-new/700.css";
// import "@fontsource/zen-kaku-gothic-new/900.css";

const theme = extendTheme({
  fonts: {
    heading: `'Zen Kaku Gothic New', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default theme;
