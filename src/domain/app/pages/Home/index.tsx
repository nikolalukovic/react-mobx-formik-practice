import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { APP_NAVIGATION } from '../../../../infrastructure/navigation/constants';
import { NotFoundPage } from '../../../../infrastructure/not-found/pages';
import { DynamicFormsHomePage } from '../../../dynamic-forms/pages';
import { MobxArchHomePage } from '../../../mobx-arch/pages';
import { App } from '../../components';

const AppHomePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<DynamicFormsHomePage />} />
          <Route path={APP_NAVIGATION.DYNAMIC_FORMS} element={<DynamicFormsHomePage />} />
          <Route path={APP_NAVIGATION.MOBX_ARCHITECTURE} element={<MobxArchHomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppHomePage };
