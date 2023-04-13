import React, { FC, MutableRefObject, forwardRef } from "react";
import CustomImage, { CustomImageProps } from "../CustomImage";

const imageWidth = 194;

type ImageTitle =
	| "squirrels"
	| "oldtown"
	| "pierogi"
	| "mermaid"
	| "warsaw"
	| "park";

const FirstPageImages: Record<ImageTitle, CustomImageProps> = {
	squirrels: {
		size: { width: imageWidth, height: 290 },
		src: "/careers/home1/squirrels.jpg",
		alt: "Squirrels",
		className: "min-h-[290px]",
		position: {
			top: 0,
		},
	},
	mermaid: {
		size: { width: imageWidth, height: 210 },
		src: "/careers/home1/mermaid.jpg",
		alt: "Mermaid",
		className: "min-h-[210px]",
		position: {
			top: 30,
		},
	},
	oldtown: {
		size: { width: imageWidth, height: 210 },
		src: "/careers/home1/oldtown.jpg",
		alt: "Old Town",
		className: "min-h-[210px]",
		position: {
			top: -70,
		},
	},
	warsaw: {
		size: { width: imageWidth, height: 290 },
		src: "/careers/home1/warsaw.jpg",
		alt: "Modern Warsaw",
		className: "min-h-[290px]",
		position: {
			top: -40,
		},
	},
	pierogi: {
		size: { width: imageWidth, height: 290 },
		src: "/careers/home1/pierogi.jpg",
		alt: "Pierogi",
		className: "min-h-[290px]",
		position: {
			top: 0,
		},
	},
	park: {
		size: { width: imageWidth, height: 250 },
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

const FirstPage: React.ForwardRefRenderFunction<HTMLDivElement> = (
	props,
	ref
) => {
	return (
		<section
			ref={ref}
			className=" h-screen flex bg-pinterest-pink text-pinterest-fluorescent"
		>
			<div className="w-1/2 flexCenterCenter flex-col gap-3 px-10 text-center font-normal">
				<h1 className="text-5xl">Warsaw</h1>
				<p className="text-xl">
					Where sweeping skyscrapers and rich history unite in harmony <br />
					Explore open positions.
				</p>
			</div>
			<div className="w-1/2 h-full flexAroundCenter">
				<div>
					{firstColumnImagesConfig.map((image) => (
						<CustomImage
							key={image.alt}
							size={image.size}
							src={image.src}
							alt={image.alt}
							className={image.className}
							position={image.position}
						/>
					))}
				</div>
				<div>
					{secondColumnImagesConfig.map((image) => (
						<CustomImage
							key={image.alt}
							size={image.size}
							src={image.src}
							alt={image.alt}
							className={image.className}
							position={image.position}
						/>
					))}
				</div>
				<div>
					{thirdColumnImagesConfig.map((image) => (
						<CustomImage
							key={image.alt}
							size={image.size}
							src={image.src}
							alt={image.alt}
							className={image.className}
							position={image.position}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default React.forwardRef(FirstPage);
