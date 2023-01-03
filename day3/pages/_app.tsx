import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DateProvider } from '../contexts/DateContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<DateProvider>
			<Component {...pageProps} />
		</DateProvider>
	);
}
