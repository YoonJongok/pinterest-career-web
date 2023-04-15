import Layout from "@/components/Layout";
import "@/theme/globals.css";
import { AppProps } from "next/app";
import "twin.macro";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
