import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DynamicFormsHomePage } from '../../../dynamic-forms/pages';
import { MobxArchHomePage } from '../../../mobx-arch/pages';
import { App } from '../../components';

const AppHomePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<DynamicFormsHomePage />} />
          <Route path="dynamic-forms" element={<DynamicFormsHomePage />} />
          <Route path="mobx-arch" element={<MobxArchHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppHomePage };
