import { Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Container
      component="footer"
      sx={{
        py: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} kjfsm
      </Typography>
    </Container>
  );
}
