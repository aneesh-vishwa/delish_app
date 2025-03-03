import AppRoutes from './AppRoutes';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import { useLoading } from './hooks/useLoading';
import { setLoadingInterceptor } from './interceptors/loadingInterceptor';
import { useEffect } from 'react';
import Footer from './pages/Footer/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import { useLocation } from 'react-router-dom';


function App() {
  const { showLoading, hideLoading } = useLoading();
  const location = useLocation();
  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, [showLoading, hideLoading]); 

  return (
    <>
      <Loading />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
