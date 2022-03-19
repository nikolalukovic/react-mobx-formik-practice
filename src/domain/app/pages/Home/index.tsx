import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appNavigation } from '../../../../infrastructure/navigation/constants';
import { NotFoundPage } from '../../../../infrastructure/not-found/pages';
import { DynamicFormsHomePage } from '../../../dynamic-forms/pages';
import { Countries, Info } from '../../../mobx-arch/components';
import { MobxArchHomePage } from '../../../mobx-arch/pages';
import { App } from '../../components';

const AppHomePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<DynamicFormsHomePage />} />
          <Route path={appNavigation.dynamicForms.home} element={<DynamicFormsHomePage />} />
          <Route path={appNavigation.mobxArch.home} element={<MobxArchHomePage />}>
            <Route index element={<Countries />} />
            <Route path={appNavigation.mobxArch.countries} element={<Countries />} />
            <Route path={appNavigation.mobxArch.info} element={<Info />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppHomePage };
