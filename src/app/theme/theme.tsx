import { createTheme } from "@mui/material/styles";
import { indigo, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    default: {
      main: grey[100],
      contrastText: grey[900],
    },
    cancel: {
      main: grey[100],
      contrastText: grey[900],
    },
    ok: {
      main: indigo[900],
      contrastText: grey[50],
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    default: Palette["primary"];
    cancel: Palette["primary"];
    ok: Palette["success"];
  }

  interface PaletteOptions {
    default?: PaletteOptions["primary"];
    cancel?: PaletteOptions["primary"];
    ok?: PaletteOptions["success"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    default: true;
    cancel: true;
    ok: true;
  }
}

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: indigo[900],
    },
  },
});
