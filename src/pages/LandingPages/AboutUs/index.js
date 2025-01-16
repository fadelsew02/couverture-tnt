import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
import footerRoutes from "footer.routes";
import bgImage from "assets/images/tnt-3.jpeg";

function AboutUs() {
  return (
    <>
      <DefaultNavbar
        routes={[]}
        action={{
          type: "external",
          route: "#",
          label: "Ma Couverture TNT",
          color: "default",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{ backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) => `${linearGradient(rgba(gradients.dark.main, 0.6), rgba(gradients.dark.state, 0.6))}, url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", display: "grid", placeItems: "center" }}
      >
        <Container>
          <Grid container item xs={12} lg={8} justifyContent="center" alignItems="center" flexDirection="column" sx={{ mx: "auto", textAlign: "center", my: "5" }}>
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Testez la couverture TNT depuis chez vous
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Renseignez simplement vos coordonnées et découvrez la disponibilité de la TNT avec les antennes proches de chez vous.
            </MKTypography>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Retrouvez-nous sur
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Featuring />
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
