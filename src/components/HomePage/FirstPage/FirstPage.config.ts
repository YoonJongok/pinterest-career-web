import { CustomImageProps } from "@/components/CustomImage";

export type ImageTitle =
	| "squirrels"
	| "oldtown"
	| "pierogi"
	| "mermaid"
	| "warsaw"
	| "park";

export const FirstPageImages: Record<ImageTitle, CustomImageProps> = {
	squirrels: {
		size: { height: 290 },
		src: "/careers/home1/squirrels.jpg",
		alt: "Squirrels",
		className: "min-h-[290px]",
		priority: true,
		position: {
			top: 0,
		},
	},
	mermaid: {
		size: { height: 210 },
		src: "/careers/home1/mermaid.jpg",
		alt: "Mermaid",
		className: "min-h-[210px]",
		position: {
			top: 30,
		},
	},
	oldtown: {
		size: { height: 210 },
		src: "/careers/home1/oldtown.jpg",
		alt: "Old Town",
		className: "min-h-[210px]",
		position: {
			top: -70,
		},
	},
	warsaw: {
		size: { height: 290 },
		src: "/careers/home1/warsaw.jpg",
		alt: "Modern Warsaw",
		className: "min-h-[290px]",
		position: {
			top: -40,
		},
	},
	pierogi: {
		size: { height: 290 },
		src: "/careers/home1/pierogi.jpg",
		alt: "Pierogi",
		className: "min-h-[290px]",
		position: {
			top: 0,
		},
	},
	park: {
		size: { height: 250 },
		src: "/careers/home1/park.jpg",
		alt: "Park",
		className: "min-h-[290px]",
		position: {
			top: 30,
		},
	},
};

export const firstColumnImagesConfig = [
	FirstPageImages.squirrels,
	FirstPageImages.mermaid,
];

export const secondColumnImagesConfig = [
	FirstPageImages.oldtown,
	FirstPageImages.warsaw,
];
export const thirdColumnImagesConfig = [
	FirstPageImages.pierogi,
	FirstPageImages.park,
];
