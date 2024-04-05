import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu, Lock } from "@mui/icons-material";
import photoURL from "../assets/react.svg";
import { useValue } from "../context/ContextProvider";
import UserIcon from "./user/UserIcon";

const user = { name: "test", photoURL };

const Navbar = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ mr: 1 }}>
            <IconButton size="large" color="inherit">
              <Menu />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            You Are Welcom
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            YRW
          </Typography>
          {!currentUser ? (
            <Button
              color="inherit"
              startIcon={<Lock />}
              onClick={() => dispatch({ type: "OPEN_LOGIN" })}
            >
              Login
            </Button>
          ) : (
            <UserIcon />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
