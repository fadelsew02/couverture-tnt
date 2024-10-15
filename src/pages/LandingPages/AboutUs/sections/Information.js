import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container spacing={2} justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="place"
                    title="Renseigner vos coordonnées"
                    description="Entrez vos coordonnées (adresse, latitude/longitude) dans le système afin que nous puissions localiser votre position avec précision."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="satellite"
                    title="Localisation des antennes"
                    description="Le système va automatiquement identifier l'antenne TNT la plus proche de vos coordonnées pour effectuer le test de couverture."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="signal_cellular_alt"
                    title="Tester la couverture"
                    description="Une fois l'antenne trouvée, vous pourrez visualiser sa couverture et vérifier si elle est accessible depuis votre position."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="info"
                    title="Détails techniques"
                    description="Obtenez des informations techniques sur l'antenne, telles que la puissance du signal, la fréquence et d'autres détails importants."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Comment utiliser la plateforme ?"
              description="Utilisez notre outil simple pour tester la couverture TNT en quelques étapes : renseignez vos coordonnées, laissez le système localiser l'antenne et visualisez les résultats."
              action={{
                type: "internal",
                route: "#",
                color: "info",
                label: "En savoir plus",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
