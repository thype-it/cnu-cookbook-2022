import { BrowserRouter as Router} from 'react-router-dom';

import { Layout } from './components/general/Layout';
import { Routes } from './Routes';

export function App() {

  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}
