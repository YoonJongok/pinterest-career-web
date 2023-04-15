import Link from "next/link";
import React from "react";
import PinterestLogo from "../../../public/logo.svg";
import tw, { TwStyle } from "twin.macro";
import styled from "styled-components";

export type Page = "firstPage" | "secondPage";
// | "thirdPage"
// | "fourthPage"
// | "fifthPage";
export type PageColors = {
	container?: TwStyle;
	link?: TwStyle;
	logo?: TwStyle;
};

export const headerColorsConfig: Record<Page, PageColors> = {
	firstPage: {
		container: tw`bg-pinterest-pink hover:bg-pinterest-fluorescent text-pinterest-fluorescent hover:text-pinterest-pink`,
		link: tw`border-pinterest-fluorescent group-hover:border-pinterest-pink`,
		logo: tw`fill-pinterest-fluorescent  group-hover:fill-pinterest-pink`,
	},
	secondPage: {
		container: tw`bg-pinterest-pink hover:bg-pinterest-fluorescent text-pinterest-fluorescent hover:text-pinterest-pink`,
		link: tw`border-pinterest-fluorescent group-hover:border-pinterest-pink`,
		logo: tw`fill-pinterest-fluorescent  group-hover:fill-pinterest-pink`,
	},
};

export type VariantType = { variant: Page };

export const _Header = styled.header.attrs({ className: "group" })<VariantType>`
	${tw`flex justify-between items-center sticky top-0 z-20 w-full  py-5 px-6 transition-all duration-500`}
	${({ variant }) => headerColorsConfig[variant].container}
`;

export const Logo = styled(PinterestLogo)<VariantType>`
	${tw`w-8 h-8`};
	${({ variant }: VariantType) => headerColorsConfig[variant].logo};
`;

export const _Link = styled(Link)<VariantType>`
	${tw`flex justify-center items-center  border-2 px-3 py-1 rounded-full`}
	${({ variant }: VariantType) => headerColorsConfig[variant].link}
`;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<_Header variant="firstPage">
			<div className={`flexStartCenter gap-1`}>
				<Logo variant="firstPage" />
				<h2 tw="text-lg">Careers</h2>
			</div>

			<_Link variant="firstPage" href={"/"}>
				All Jobs
			</_Link>
		</_Header>
	);
};

export default Header;
