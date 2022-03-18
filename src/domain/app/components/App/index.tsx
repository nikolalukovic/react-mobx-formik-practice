import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="dynamic-forms">Dynamic forms with Formik</Link> | <Link to="mobx-arch">MobX architecture</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
