import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { APP_NAVIGATION } from '../constants';

const useAppNavigate = () => {
  const navigate = useNavigate();

  const navToDynamicForms = useCallback(() => navigate(APP_NAVIGATION.DYNAMIC_FORMS), [navigate]);
  const navToMobxArch = useCallback(() => navigate(APP_NAVIGATION.MOBX_ARCHITECTURE), [navigate]);

  return { navToDynamicForms, navToMobxArch };
};

const useIsCurrentRoute = () => {
  const location = useLocation();

  return useCallback((route: string) => location.pathname === route, [location]);
};

export { useAppNavigate, useIsCurrentRoute };
