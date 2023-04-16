import React from "react";
import SlideInOnScroll, { SlideFrom } from "../SlideInOnScroll";

const secondPageTextConfig: Array<{ text: string; slideFrom: SlideFrom }> = [
	{
		text: "Enjoy a midday break in the sunshine of colorful Old Town",
		slideFrom: "left",
	},
	{
		text: "Set out on a mission to find the capital’s best Pierogi",
		slideFrom: "bottom",
	},
	{
		text: "Explore one of Europe’s largest city parks by gondola",
		slideFrom: "right",
	},
];

const SecondPage: React.ForwardRefRenderFunction<HTMLDivElement> = (
	props,
	ref
) => {
	return (
		<>
			<section
				ref={ref}
				className="h-screen flexAroundCenter gap-6 bg-pinterest-light-sky-blue text-pinterest-light-brown px-8"
			>
				{secondPageTextConfig.map((config, i) => (
					<SlideInOnScroll
						key={i}
						wrapperStyle="flexCenterCenter pt-6 border-t-4 border-t-pinterest-light-brown text-3xl"
						slideFrom={config.slideFrom}
					>
						<p>{config.text}</p>
					</SlideInOnScroll>
				))}
			</section>
		</>
	);
};

export default React.forwardRef(SecondPage);
