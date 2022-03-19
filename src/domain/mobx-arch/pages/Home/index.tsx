import { Box, CssBaseline, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { CountriesContext } from '../../state/context/countries.context';
import { Countries } from '../../state/observables/countries.observable';

const MobxArchHomePage = () => {
  return (
    <Box sx={{ display: 'flex', height: '100%', width: '100%', flexFlow: 'column' }}>
      <Typography variant="h3" component="div">
        Mobx arch
      </Typography>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: 'inherit', width: 'inherit', justifyContent: 'center', alignItems: 'center' }}>
        <CountriesContext.Provider value={new Countries()}>
          <Outlet />
        </CountriesContext.Provider>
      </Box>
    </Box>
  );
};

export { MobxArchHomePage };
