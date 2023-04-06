import Link from "next/link";
import React from "react";
import PinterestLogo from "../../../public/logo.svg";

const Header: React.FC = () => {
	return (
		<header className="secondPageHeader sticky top-0 z-20 w-full flexBetweenCenter py-5 px-6 transition-all duration-500  group">
			<div className="flexStartCenter gap-1">
				<PinterestLogo width={32} height={32} />
				<h2 className={`text-lg`}>Careers</h2>
			</div>

			<Link href={"/"} className="secondPageLink">
				All Jobs
			</Link>
		</header>
	);
};

export default Header;
