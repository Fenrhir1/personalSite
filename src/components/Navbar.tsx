import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import TemporaryDrawer from "./Drawer";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TemporaryDrawer />
          <Typography
            variant="h6"
            component="div"
            sx={{ marginLeft: "0px", marginRight: "auto", flexGrow: 1 }}
          >
            Salvatore Polizzotti
          </Typography>

          <Avatar alt="planet" src="../public/planet3-svg.svg" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
