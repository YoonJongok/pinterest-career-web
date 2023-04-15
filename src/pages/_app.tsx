import Header from "@/components/Header";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import "twin.macro";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			{/* <Header /> */}
			<Component {...pageProps} />
		</Layout>
	);
};

export default App;
