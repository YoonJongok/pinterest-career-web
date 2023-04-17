import React, { FC, useEffect, useRef, useState } from "react";

export type SlideFrom = "left" | "bottom" | "right";

interface SlideInOnScrollProps {
	children: React.ReactNode;
	wrapperStyle?: string;
	slideFrom: Partial<SlideFrom>;
}

const SlideInOnScroll: FC<SlideInOnScrollProps> = ({
	children,
	wrapperStyle,
	slideFrom = "left",
}) => {
	const [isVisible, setIsVisible] = useState(false);
	const [, setScrollPosition] = useState(0);
	const elementRef = useRef<HTMLDivElement>(null);

	const onScroll = () => {
		const elmPosition = elementRef.current?.getBoundingClientRect();
		elmPosition && setScrollPosition(elmPosition.top);
		if (elmPosition && elmPosition.top <= window.innerHeight * 0.6) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	switch (slideFrom) {
		case "bottom":
			return (
				<div
					ref={elementRef}
					className={`transform transition-all duration-500 ease-out ${
						isVisible
							? "translate-y-0 opacity-100"
							: "translate-y-1/2 opacity-0"
					} ${wrapperStyle}`}
				>
					{children}
				</div>
			);
		case "right":
			return (
				<div
					ref={elementRef}
					className={`transform transition-all duration-500 ease-in-out ${
						isVisible
							? "-translate-x-0 opacity-100"
							: "translate-x-1/2 opacity-0"
					} ${wrapperStyle}`}
				>
					{children}
				</div>
			);

		default:
			return (
				<div
					ref={elementRef}
					className={`transform transition-all duration-500 ease-in-out ${
						isVisible
							? "translate-x-0 opacity-100"
							: "-translate-x-full opacity-0"
					} ${wrapperStyle}`}
				>
					{children}
				</div>
			);
	}
};

export default SlideInOnScroll;
