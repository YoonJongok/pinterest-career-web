import Header from "@/components/Header";
import FirstPage from "@/components/HomePage/FirstPage";
import SecondPage from "@/components/HomePage/SecondPage";
import ThirdPage from "@/components/HomePage/ThridPage";
import Head from "next/head";
import { useCallback, useEffect, useRef, useState } from "react";

export type Page =
	| "firstPage"
	| "secondPage"
	| "thirdPage"
	| "fourthPage"
	| "fifthPage";

export const HEADER_HEIGHT = 70;

export default function Home() {
	const [page, setPage] = useState<Page>("firstPage");

	const firstPageRef = useRef<HTMLDivElement>(null);
	const secondPageRef = useRef<HTMLDivElement>(null);
	const thirdPageRef = useRef<HTMLDivElement>(null);

	const handleSetPageColor = useCallback(() => {
		if (window.scrollY >= firstPageRef.current?.offsetTop!) {
			setPage("firstPage");
		}
		if (
			window.scrollY >
			secondPageRef.current?.offsetTop! - window.outerHeight / 6 + HEADER_HEIGHT
		) {
			setPage("secondPage");
		}
		if (
			window.scrollY >
			thirdPageRef.current?.offsetTop! - window.outerHeight / 6 + HEADER_HEIGHT
		) {
			setPage("thirdPage");
		}
	}, [setPage, secondPageRef, firstPageRef, thirdPageRef]);

	useEffect(() => {
		window.addEventListener("scroll", handleSetPageColor);
	}, [handleSetPageColor]);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header page={page} />
			<main>
				<FirstPage ref={firstPageRef} />
				<SecondPage ref={secondPageRef} />
				<ThirdPage ref={thirdPageRef} />
			</main>
		</>
	);
}
