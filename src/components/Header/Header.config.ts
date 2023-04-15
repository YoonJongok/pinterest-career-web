import { Page } from "@/pages";
import tw, { TwStyle } from "twin.macro";

export type PageColors = {
	container: TwStyle;
	link: TwStyle;
	logo: TwStyle;
};

export const headerColorsConfig: Record<Page, PageColors> = {
	firstPage: {
		container: tw`bg-pinterest-pink hover:bg-pinterest-fluorescent text-pinterest-fluorescent hover:text-pinterest-pink`,
		link: tw`border-pinterest-fluorescent group-hover:border-pinterest-pink`,
		logo: tw`fill-pinterest-fluorescent  group-hover:fill-pinterest-pink`,
	},
	secondPage: {
		container: tw`bg-pinterest-light-sky-blue hover:bg-pinterest-light-brown text-pinterest-light-brown hover:text-pinterest-light-sky-blue`,
		link: tw`border-pinterest-light-brown group-hover:border-pinterest-light-sky-blue`,
		logo: tw`fill-pinterest-light-brown  group-hover:fill-pinterest-light-sky-blue`,
	},
	thirdPage: {
		container: tw`bg-pinterest-sky-blue hover:bg-pinterest-violet text-pinterest-violet hover:text-pinterest-sky-blue`,
		link: tw`border-pinterest-violet group-hover:border-pinterest-sky-blue`,
		logo: tw`fill-pinterest-violet  group-hover:fill-pinterest-sky-blue`,
	},
	fourthPage: {
		container: tw`bg-pinterest-light-yellow hover:bg-pinterest-purple text-pinterest-purple hover:text-pinterest-light-yellow`,
		link: tw`border-pinterest-purple group-hover:border-pinterest-light-yellow`,
		logo: tw`fill-pinterest-purple  group-hover:fill-pinterest-light-yellow`,
	},
	fifthPage: {
		container: tw`bg-pinterest-light-orange hover:bg-pinterest-turquoise text-pinterest-turquoise hover:text-pinterest-light-orange`,
		link: tw`border-pinterest-turquoise group-hover:border-pinterest-light-orange`,
		logo: tw`fill-pinterest-turquoise  group-hover:fill-pinterest-light-orange`,
	},
};
