import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { appNavigation } from '../constants';

const useAppNavigate = () => {
  const navigate = useNavigate();

  const navToDynamicForms = useCallback(() => navigate(appNavigation.dynamicForms.home), [navigate]);
  const navToMobxArch = useCallback(() => navigate(appNavigation.mobxArch.home), [navigate]);
  const navToMobxArchCountries = useCallback(() => navigate(appNavigation.mobxArch.countries), [navigate]);
  const navToMobxArchCountryInfo = useCallback(
    (officialName) => navigate(`${appNavigation.mobxArch.info.replace(':name', encodeURIComponent(officialName))}`),
    [navigate]
  );

  return { navToDynamicForms, navToMobxArch, navToMobxArchCountries, navToMobxArchCountryInfo };
};

const useIsCurrentRoute = () => {
  const location = useLocation();

  return useCallback((route: string) => location.pathname.indexOf(route) > -1, [location]);
};

export { useAppNavigate, useIsCurrentRoute };
