import Link from "next/link";
import React from "react";
import PinterestLogo from "../../../public/logo.svg";
import { PageColors } from "@/pages";
import tw, { styled } from "twin.macro";

const Logo = styled(PinterestLogo)(() => [tw`fill-amber-400`]);

interface HeaderProps {
	pageColorConfig: PageColors;
}

const Header: React.FC<HeaderProps> = ({
	pageColorConfig: { primary, accent },
}) => {
	return (
		<header
			className={`headerContainer bg-${primary} hover:bg-${accent} text-${accent}  hover:text-${primary} hover:border-${primary}  group`}
		>
			<div
				className={`flexStartCenter gap-1 fill-${accent} hover:fill-${primary}`}
			>
				<PinterestLogo width={32} height={32} />
				<h2 className={`text-lg`}>Careers</h2>
			</div>

			<Link
				href={"/"}
				className={`pageLink  border-${accent} group-hover:border-${primary}`}
			>
				All Jobs
			</Link>
			<h1 tw="text-amber-300">checking TW</h1>
		</header>
	);
};

export default Header;
