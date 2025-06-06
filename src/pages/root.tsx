import { Outlet } from 'react-router-dom';
import Header from '@components/h/h';
import Footer from '@components/f/f';

export default function Root() {
  return (
    <div className='wrapper'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
