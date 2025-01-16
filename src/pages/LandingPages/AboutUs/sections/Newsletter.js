/* eslint-disable react/jsx-no-duplicate-props */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

import { MapContainer, Marker, TileLayer, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 
import { useState } from "react";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: require("assets/images/placeholder.png"),
  iconSize: [25, 25], 
});

const userIcon = new L.Icon({
  iconUrl: require("assets/images/marker-icon.png"), 
  iconSize: [15, 25], 
})

function Newsletter() {
  const [position, setPosition] = useState([9.3077, 2.3158]); 
  const [latitude, setLatitude] = useState(""); 
  const [longitude, setLongitude] = useState(""); 

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude.toFixed(6));
        setLongitude(longitude.toFixed(6));
        setPosition([latitude, longitude]); 
      });
    } else {
      console.log("La géolocalisation n'est pas supportée par ce navigateur.");
    }
  };

  const SelectLocationOnMap = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setLatitude(lat.toFixed(6));
        setLongitude(lng.toFixed(6));
        setPosition([lat, lng]);
      },
    });
    return null;
  };

  const antennes = [
    { name: "Cotonou", coordinates: [6.3703, 2.3912] },
    { name: "Porto-Novo", coordinates: [6.4969, 2.6289] },
    { name: "Parakou", coordinates: [9.337, 2.6303] },
    { name: "Abomey", coordinates: [7.1829, 1.9912] },
    { name: "Natitingou", coordinates: [10.3049, 1.3785] },
  ];

  const handleValidation = () => {
    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);
  
    if (!isNaN(lat) && !isNaN(lng)) {
      setPosition([lat, lng]);
    }
  };

  return (
    <MKBox component="section" pt={6} my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">Entrez vos coordonnées</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              Renseignez vos coordonnées GPS afin que nous puissions identifier
              l&apos;antenne TNT la plus proche.
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <MKInput
                  id="latitude-input"
                  type="text"
                  label="Latitude"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  disabled={!latitude}
                  fullWidth
                />
              </Grid>
              <Grid item xs={5}>
                <MKInput
                  id="longitude-input"
                  type="text"
                  label="Longitude"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  disabled={!longitude}
                  fullWidth
                />
              </Grid>
              <Grid item xs={4} mt={2}>
                <MKButton variant="gradient" color="info" fullWidth onClick={handleValidation}>
                  Valider
                </MKButton>
              </Grid>
              <Grid item xs={5} mt={2}>
                <MKButton variant="gradient" color="primary" fullWidth onClick={getCurrentLocation}>
                  Utiliser ma position actuelle
                </MKButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MapContainer
              center={position} 
              zoom={6} 
              minZoom={4} 
              maxBounds={[[5, -1.5], [13, 4.5]]} 
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Markers for multiple antennes in Bénin */}
              {antennes.map((antenne, index) => (
                <Marker key={index} position={antenne.coordinates} icon={customIcon}>
                  <Popup>{antenne.name}</Popup>
                </Marker>
              ))}

              {/* Marker for user-selected position */}
              <Marker position={position} icon={userIcon}>
                <Popup>Position sélectionnée: {position[0]}, {position[1]}</Popup>
              </Marker>

              <SelectLocationOnMap />
            </MapContainer>
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
              {/* Section pour les résultats */}
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
