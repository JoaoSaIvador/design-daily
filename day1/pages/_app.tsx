import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
