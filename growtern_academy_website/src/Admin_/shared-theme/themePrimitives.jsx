import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();


export const gray = {
  50: 'hsl(220, 35%, 97%)',
  100: 'hsl(220, 30%, 94%)',
  200: 'hsl(220, 20%, 88%)',
  300: 'hsl(220, 20%, 80%)',
  400: 'hsl(220, 20%, 65%)',
  500: 'hsl(220, 20%, 42%)',
  600: 'hsl(220, 20%, 35%)',
  700: 'hsl(220, 20%, 25%)',
  800: 'hsl(220, 30%, 6%)',
  900: 'hsl(220, 35%, 3%)',
};

export const colorSchemes = {
  light: {
    palette: {
      // Primary Brand Color
      primary: {
        light: "#499FE2",      // Sky Blue
        main: "#0365B3",       // Primary Blue
        dark: "#034C86",
        contrastText: "#FFFFFF",
      },

      // Secondary Brand Color
      secondary: {
        light: "#73E25A",
        main: "#4DAE2B",       // Growth Green
        dark: "#3A8A20",
        contrastText: "#FFFFFF",
      },

      // Information
      info: {
        light: "#7CC4F5",
        main: "#499FE2",       // Sky Blue
        dark: "#0365B3",
        contrastText: "#FFFFFF",
      },

      // Accent
      warning: {
        light: "#FFB066",
        main: "#F06409",       // Success Orange
        dark: "#C84E05",
        contrastText: "#FFFFFF",
      },

      // Error
      error: {
        light: "#FFEBEE",
        main: "#E53935",
        dark: "#B71C1C",
        contrastText: "#FFFFFF",
      },

      // Success
      success: {
        light: "#73E25A",
        main: "#4DAE2B",       // Growth Green
        dark: "#3A8A20",
        contrastText: "#FFFFFF",
      },

      // Premium / Gold
      premium: {
        light: "#E6C86A",
        main: "#D5A121",       // Achievement Gold
        dark: "#A77D18",
        contrastText: "#FFFFFF",
      },

      grey: {
        ...gray,
      },

      background: {
        default: "#FFFFFF",
        paper: "#FFFFFF",
      },

      text: {
        primary: "#020202",    // Dark Black
        secondary: "#4A4A4A",
      },

      divider: "rgba(3, 101, 179, 0.12)",

      action: {
        hover: "rgba(3,101,179,0.08)",
        selected: "rgba(3,101,179,0.16)",
      },

      baseShadow:
        "0px 4px 16px rgba(3,101,179,0.08), 0px 8px 24px rgba(3,101,179,0.12)",
    },
  },
};

export const typography = {
  fontFamily: 'Poppins, sans-serif',
  h1: {
    fontFamily: "Poppins, sans-serif",
    fontSize: defaultTheme.typography.pxToRem(30),
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: "Poppins, sans-serif",
    fontSize: defaultTheme.typography.pxToRem(36),
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: "Poppins, sans-serif",
    fontSize: defaultTheme.typography.pxToRem(30),
    lineHeight: 1.2,
  },
  h4: {
    fontFamily: "Poppins, sans-serif",
    fontSize: defaultTheme.typography.pxToRem(24),
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h5: {
    fontFamily: "Poppins, sans-serif",
    fontSize: defaultTheme.typography.pxToRem(20),
    fontWeight: 600,
  },
  h6: {
    fontFamily: "Poppins, sans-serif",
    fontSize: defaultTheme.typography.pxToRem(18),
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: defaultTheme.typography.pxToRem(18),
  },
  subtitle2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 500,
  },
  body1: {
    fontSize: defaultTheme.typography.pxToRem(14),
  },
  body2: {
    fontSize: defaultTheme.typography.pxToRem(14),
    fontWeight: 400,
  },
  caption: {
    fontSize: defaultTheme.typography.pxToRem(12),
    fontWeight: 400,
  },
};

export const shape = {
  borderRadius: 8,
};

