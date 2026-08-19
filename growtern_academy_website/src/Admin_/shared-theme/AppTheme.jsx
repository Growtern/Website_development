import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { inputsCustomizations } from './customizations/inputs';
import { feedbackCustomizations } from './customizations/feedback';
import { navigationCustomizations } from './customizations/navigation';
import { colorSchemes, typography, shape } from './themePrimitives';

function AppTheme({ children }) {
  const theme = React.useMemo(() => {
    return createTheme({
      palette: colorSchemes.light.palette,
      typography,
      shape,
      components: {
        ...inputsCustomizations,
        ...feedbackCustomizations,
        ...navigationCustomizations,
      },
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default AppTheme;
