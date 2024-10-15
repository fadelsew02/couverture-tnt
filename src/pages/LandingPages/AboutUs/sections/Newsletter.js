/* eslint-disable react/jsx-no-duplicate-props */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import { AdvancedMarker, APIProvider } from "@vis.gl/react-google-maps";
import { Map, Pin } from "@vis.gl/react-google-maps";

// Images
// import macbook from "assets/images/macbook.png";MapCameraChangedEvent

const locations = [
  { key: "operaHouse", location: { lat: -33.8567844, lng: 151.213108 } },
  { key: "tarongaZoo", location: { lat: -33.8472767, lng: 151.2188164 } },
  { key: "manlyBeach", location: { lat: -33.8209738, lng: 151.2563253 } },
  { key: "hyderPark", location: { lat: -33.8690081, lng: 151.2052393 } },
  { key: "theRocks", location: { lat: -33.8587568, lng: 151.2058246 } },
  { key: "circularQuay", location: { lat: -33.858761, lng: 151.2055688 } },
  { key: "harbourBridge", location: { lat: -33.852228, lng: 151.2038374 } },
  { key: "kingsCross", location: { lat: -33.8737375, lng: 151.222569 } },
  { key: "botanicGardens", location: { lat: -33.864167, lng: 151.216387 } },
  { key: "museumOfSydney", location: { lat: -33.8636005, lng: 151.2092542 } },
  { key: "maritimeMuseum", location: { lat: -33.869395, lng: 151.198648 } },
  { key: "kingStreetWharf", location: { lat: -33.8665445, lng: 151.1989808 } },
  { key: "aquarium", location: { lat: -33.869627, lng: 151.202146 } },
  { key: "darlingHarbour", location: { lat: -33.87488, lng: 151.1987113 } },
  { key: "barangaroo", location: { lat: -33.8605523, lng: 151.1972205 } },
];

const PoiMarkers = ({ pois }) => (
  <>
    {pois.map((poi) => (
      <AdvancedMarker key={poi.key} position={poi.location}>
        <Pin background={"#FBBC04"} glyphColor={"#000"} borderColor={"#000"} />
      </AdvancedMarker>
    ))}
  </>
);

PoiMarkers.propTypes = {
  pois: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      location: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Entrez vos coordonnées</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Renseignez votre adresse ou vos coordonnées GPS afin que nous puissions identifier
              l&apos;antenne TNT la plus proche.
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <MKInput type="text" label="Adresse" fullWidth />
              </Grid>
              <Grid item xs={3}>
                <MKInput type="text" label="Latitude" fullWidth />
              </Grid>
              <Grid item xs={3}>
                <MKInput type="text" label="Longitude" fullWidth />
              </Grid>
              <Grid item xs={12} mt={2}>
                <MKButton variant="gradient" color="info" fullWidth>
                  Valider
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <APIProvider
              apiKey={"AIzaSyCOJZWlJgNneA_zYCK1pI0IOlS2FW0kfzM"}
              onLoad={() => console.log("Maps API has loaded.")}
            >
              <Map
                defaultZoom={13}
                defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
                mapId="da37f3254c6a6d1c"
                onCameraChanged={(ev) =>
                  console.log("camera changed:", ev.detail.center, "zoom:", ev.detail.zoom)
                }
              >
                <PoiMarkers pois={locations} />
              </Map>
            </APIProvider>
          </Grid>
        </Grid>

        {/* Section pour afficher les résultats */}
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <MKTypography variant="h5" mt={4} mb={2}>
              Résultats de la recherche
            </MKTypography>
            <MKBox
              p={3}
              sx={{
                backgroundColor: "#f0f0f0",
                borderRadius: "8px",
              }}
            >
              {/* Placeholder pour les résultats */}
              <MKTypography variant="body2" color="text">
                Les informations sur l&apos;antenne la plus proche s&apos;afficheront ici une fois
                les coordonnées validées.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
