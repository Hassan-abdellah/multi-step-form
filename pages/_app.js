import { PlanContextProvider } from '../context/PlanContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <PlanContextProvider>
      <Component {...pageProps} />
    </PlanContextProvider>
  );
}

export default MyApp;
