import Header from "@/components/Header";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Header />
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
