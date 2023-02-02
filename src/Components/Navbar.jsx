import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CakeIcon from "@mui/icons-material/Cake";

const Appbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <CakeIcon />

          <Typography variant="h6" sx={{ ml: 1, flexGrow: 1 }}>
            Happy Cake
          </Typography>

          <Button color="inherit" component={NavLink} to="/" sx={{ pt: 1 }}>
            Home
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/Tortas"
            sx={{ pt: 1 }}
          >
            Tortas
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/Novios"
            sx={{ pt: 1 }}
          >
            Novios
          </Button>

          <Button
            color="inherit"
            component={NavLink}
            to="/Contacto"
            sx={{ pt: 1 }}
          >
            Contacto
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Appbar;
