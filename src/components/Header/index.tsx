import React from "react";
import styled from "styled-components";
import PinterestLogo from "../../../public/logo.svg";
import Link from "next/link";
import { headerColorsConfig } from "./Header.config";
import tw from "twin.macro";
import { Page } from "@/pages";
import { useRouter } from "next/router";

export type VariantType = { variant: Page };

export const _Header = styled.header.attrs({ className: "group" })<VariantType>`
	${tw`flex justify-between items-center sticky top-0 z-20 w-full h-[70px] px-6 transition-all duration-500`}
	${({ variant }) => headerColorsConfig[variant].container}

	div {
		${tw`flex justify-start items-center gap-1 cursor-pointer`}

		h2 {
			${tw`text-xl`}
		}
	}
`;

export const Logo = styled(PinterestLogo)<VariantType>`
	width: 32px;
	height: 32px;
	${tw`duration-500`};
	${({ variant }: VariantType) => headerColorsConfig[variant].logo};
`;

export const _Link = styled(Link)<VariantType>`
	${tw`flex justify-center items-center  border-2 px-3 py-1 rounded-full`}
	${({ variant }: VariantType) => headerColorsConfig[variant].link}
`;

interface HeaderProps {
	page: Page;
}

const Header: React.FC<HeaderProps> = ({ page = "firstPage" }) => {
	const router = useRouter();

	return (
		<_Header variant={page}>
			<div onClick={() => router.push("/")}>
				<Logo variant={page} />
				<h2>Careers</h2>
			</div>

			<_Link variant={page} href={"/"}>
				All Jobs
			</_Link>
		</_Header>
	);
};

export default Header;
