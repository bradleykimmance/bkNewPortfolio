import Home from './components/Home.tsx';
import Layout from './components/Layout.tsx';
import { ThemeProvider } from './contexts/ThemeContext/ThemeProvider.tsx';

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
