import { themeColors } from "@/styles/colors";
import Link from "next/link";
import React from "react";
import PinterestLogo from "../../../public/logo.svg";

export const headerColors = {
	home1: {
		primary: themeColors.pink,
		accentColor: themeColors.fluorescent,
	},
};

const Header = () => {
	return (
		<header className="sticky top-0 z-20 w-full flexBetweenCenter py-5 px-6 transition-all duration-500  bg-pinterest-pink text-pinterest-fluorescent group hover:bg-pinterest-fluorescent">
			<div className="flexStartCenter gap-1">
				<PinterestLogo
					width={32}
					height={32}
					className="fill-pinterest-fluorescent group-hover:fill-pinterest-pink"
				/>
				<h2 className={`text-lg  group-hover:text-pinterest-pink`}>Careers</h2>
			</div>

			<Link
				href={"/"}
				className="flexCenterCenter  border-2 px-3 py-1 rounded-full group-hover:text-pinterest-pink group-hover:border-pinterest-pink"
			>
				All Jobs
			</Link>
		</header>
	);
};

export default Header;
