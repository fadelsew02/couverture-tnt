import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

export default {
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Tous droits réservés. Copyright &copy; {date} Réalisé par{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Mereveille AIZANNON
      </MKTypography>
      .
    </MKTypography>
  ),
};
