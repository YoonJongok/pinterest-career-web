import React from "react";

const secondPageTextConfig = [
	"Enjoy a midday break in the sunshine of colorful Old Town",
	"Set out on a mission to find the capital’s best Pierogi",
	"Explore one of Europe’s largest city parks by gondola",
];

const SecondPage: React.ForwardRefRenderFunction<HTMLDivElement> = (
	props,
	ref
) => {
	// console.log("ref", ref);
	// console.log("hi");
	return (
		<>
			<section
				ref={ref}
				className="h-screen flexAroundCenter gap-6 bg-pinterest-light-sky-blue text-pinterest-light-brown px-8"
			>
				{secondPageTextConfig.map((text, i) => (
					<div
						key={i}
						className="flexCenterCenter pt-6 border-t-4 border-t-pinterest-light-brown text-3xl"
					>
						<p>{text}</p>
					</div>
				))}
			</section>
		</>
	);
};

export default React.forwardRef(SecondPage);
