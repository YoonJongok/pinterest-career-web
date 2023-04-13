import React from "react";

const ThirdPage: React.ForwardRefRenderFunction<HTMLDivElement> = (
	props,
	ref
) => {
	return (
		<section
			ref={ref}
			className="h-screen flexAroundCenter gap-6 bg-pinterest-sky-blue text-pinterest-light-violet px-8"
		>
			<div className="w-1/2 h-full flexCenterCenter">
				<video controls>
					<source src="https://cdn-static.findly.com/wp-content/uploads/sites/1509/2021/05/18214758/Default-Office.webm" />
				</video>
			</div>
			<div className="w-1/2 flexCenterCenter flex-col gap-3 px-10 text-center font-normal">
				<h1 className="text-5xl">Offices that inspire</h1>
				<p className="text-xl">
					We take pride in providing much more than a space to plug in. Every
					office reflects our passion and purposes.
				</p>
			</div>
		</section>
	);
};

export default React.forwardRef(ThirdPage);
