import CustomImage from "@/components/CustomImage";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="h-screen flex bg-pinterest-pink text-pinterest-fluorescent">
				<section className="w-full flexCenterCenter flex-col gap-3 px-10 text-center font-normal">
					<h1 className="text-5xl">Warsaw</h1>
					<p className="text-xl">
						Where sweeping skyscrapers and rich history unite in harmony <br />
						Explore open positions.
					</p>
				</section>
				<section className="w-full">
					<CustomImage
						size={{ width: 194, height: 400 }}
						src="/careers/home1/squirrels.jpg"
						alt="Squirrels"
						className="min-h-[290px]"
					/>
				</section>
			</main>
		</>
	);
}
