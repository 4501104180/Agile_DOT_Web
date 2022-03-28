import Router from './routes';
import ThemeConfig from './theme';

import { ScrollToTop } from './components/ScrollToTop';
import Loading from './pages/Loading';
import useAuth from './hooks/useAuth';

const App = () => {
  const { isInitialized } = useAuth();
  return (
    <ThemeConfig>
      <ScrollToTop />
      {isInitialized ? <Router /> : <Loading />}
    </ThemeConfig>
  );
};

export default App;
