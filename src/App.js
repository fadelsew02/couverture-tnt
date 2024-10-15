import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
// import Presentation from "layouts/pages/presentation";
import AboutUsPage from "layouts/pages/landing-pages/about-us";

// import routes from "routes";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // const getRoutes = (allRoutes) =>
  //   allRoutes.map((route) => {
  //     if (route.collapse) {
  //       return getRoutes(route.collapse);
  //     }

  //     if (route.route) {
  //       return <Route exact path={route.route} element={route.component} key={route.key} />;
  //     }

  //     return null;
  //   });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* {getRoutes(routes)} */}
        <Route path="/pages/landing-pages/about-us" element={<AboutUsPage />} />
        <Route path="*" element={<Navigate to="/pages/landing-pages/about-us" />} />
      </Routes>
    </ThemeProvider>
  );
}
