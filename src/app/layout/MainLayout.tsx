import { Outlet } from 'react-router-dom';
import { NavBar } from '../../features/nav-bar/Components/NavBar';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
