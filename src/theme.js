import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "light"
    ? {
      grey: {
        100: "#9A9A9A", // secondary
        200: "#181A20", // dark
        300: "#212121", // text
        400: "#212121",
        500: "#666666",
        600: "#ffffff",
        700: "#9A9A9A", // gray
        800: "#F3F6F9", // light gray
        900: "#ffffff", // white
      },
      primary: {
        100: "#ff4655", // primary
        200: "#080b12",
        300: "#0c101b",
        400: "#fcfcfc", // manually changed
        500: "#141b2d",
        600: "#ffffff",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
      },
      }
    : {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#ffffff",
          400: "#212121",
          500: "#666666",
          600: "#ffffff",
          700: "#ffffff",
          800: "#292929",
          900: "#212121",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#181A20",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.primary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: colors.primary[900],
            },
            secondary: {
              main: colors.primary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Noto Sans Thai Looped"," Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: [ "Noto Sans Thai", "Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: [ "Noto Sans Thai", "Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: [ "Noto Sans Thai", "Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: [ "Noto Sans Thai", "Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: [ "Noto Sans Thai", "Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: [ "Noto Sans Thai", "Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};