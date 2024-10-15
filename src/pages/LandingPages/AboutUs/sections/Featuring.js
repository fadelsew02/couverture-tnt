import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center", mb: 8 }}>
          <Grid item xs={12} md={9}>
            <MKTypography variant="h4" mb={2}>
              Application de Prédiction de la Couverture TNT
            </MKTypography>
            <MKTypography variant="body1" color="textSecondary">
              Ce projet vise à fournir une interface interactive permettant aux utilisateurs de
              prédire et de visualiser la couverture de la TNT sur l’ensemble du territoire béninois
              en temps réel.
            </MKTypography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={50}
              suffix="+"
              title="Zones couvertes"
              description="Prédictions effectuées pour différentes zones géographiques du Bénin."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={200}
              suffix="+"
              title="Prédictions réalisées"
              description="Nombre de prédictions effectuées par les utilisateurs sur la plateforme."
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="Support"
              description="Support disponible pour assister les utilisateurs avec leurs prédictions."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
