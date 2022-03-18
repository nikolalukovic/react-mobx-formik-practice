import { AppBar, Box, CssBaseline, Drawer, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { APP_NAVIGATION } from '../../../../infrastructure/navigation/constants';
import { useAppNavigate, useIsCurrentRoute } from '../../../../infrastructure/navigation/hooks';

const drawerWidth = 240;

export const App = () => {
  const { navToDynamicForms, navToMobxArch } = useAppNavigate();
  const isCurrentRoute = useIsCurrentRoute();

  return (
    <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Welcome to the App!
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItemButton
              key="Formik dynamic forms"
              onClick={navToDynamicForms}
              selected={isCurrentRoute(APP_NAVIGATION.DYNAMIC_FORMS)}
            >
              <ListItemText primary="Formik dynamic forms" />
            </ListItemButton>
            <ListItemButton key="MobX arch" onClick={navToMobxArch} selected={isCurrentRoute(APP_NAVIGATION.MOBX_ARCHITECTURE)}>
              <ListItemText primary="MobX arch" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
