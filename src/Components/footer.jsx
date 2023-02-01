import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Stack direction="row" spacing={4}>
          <p align="center">
            <strong>
              © 2020-2023 Santiago, Chile Ð€IMØ§¯®Ã§Iv Todos los derechos
              reservados.
            </strong>
          </p>
          <Avatar alt="Remy Sharp" src="../public/yo2.JPG" />
        </Stack>
      </Container>
    </React.Fragment>
  );
}
