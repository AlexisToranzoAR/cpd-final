import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Icon from "../Icon";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";

export default function Navbar({ children }) {
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="static"
        color="secondary"
        style={{ borderBottom: "3px solid " + theme.palette.primary.main }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Icon style={{ height: 68 }} />
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Icon style={{ height: 68 }} />
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <Link href="/">
                <a>
                  <div className="logoutContainer">
                    <span>LOGOUT</span>
                    <LogoutIcon color="primary" />
                  </div>
                </a>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {children}

      <style jsx>{`
        .logoutContainer {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logoutContainer span {
          margin-right: 10px;
          color: ${theme.palette.primary.main};
          font-size: 12px;
        }
      `}</style>
    </>
  );
}
