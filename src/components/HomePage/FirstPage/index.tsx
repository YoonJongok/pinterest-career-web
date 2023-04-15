import React from "react";
import CustomImage from "../../CustomImage";
import Button from "../../Button";
import "twin.macro";
import {
	firstColumnImagesConfig,
	secondColumnImagesConfig,
	thirdColumnImagesConfig,
} from "./FirstPage.config";

const FirstPage: React.ForwardRefRenderFunction<HTMLDivElement> = (
	props,
	ref
) => {
	return (
		<section
			ref={ref}
			tw="h-screen flex bg-pinterest-pink text-pinterest-fluorescent"
		>
			<div tw="w-1/2 flex justify-center items-center flex-col gap-3 px-10 text-center font-normal">
				<h1 tw="text-5xl">Warsaw</h1>
				<p tw="text-xl">
					Where sweeping skyscrapers and rich history unite in harmony <br />
					Explore open positions.
				</p>
				<Button variant="secondary">Hello</Button>
			</div>
			<div tw="w-1/2 h-full flex justify-center items-center gap-3.5 space-x-3.5">
				<div>
					{firstColumnImagesConfig.map((image) => (
						<CustomImage
							key={image.alt}
							size={image.size}
							src={image.src}
							alt={image.alt}
							className={image.className}
							position={image.position}
							priority={image.priority}
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
