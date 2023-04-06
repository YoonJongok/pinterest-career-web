import Image from "next/image";
import React from "react";

export type CustomImageProps = {
	size: {
		width: number;
		height: number;
	};
	position: {
		top?: number | string;
		right?: number | string;
		left?: number | string;
		bottom?: number | string;
	};
	src: string;
	alt: string;
	className: string;
};

const CustomImage: React.FC<CustomImageProps> = ({
	size,
	src,
	alt,
	className,
	position,
}) => {
	return (
		<div
			className=" rounded-xl delay-100 cursor-pointer relative"
			style={{ ...position }}
		>
			<Image
				width={size.width}
				height={size.height}
				src={src}
				alt={alt}
				draggable={false}
				className={`min-w-[194px] cursor-pointer  z-0 object-cover rounded-xl ${className} bg-pinterest-pink hover:opacity-0 transition-opacity duration-500`}
			/>
			<div className="absolute rounded-xl text-center  opacity-0 hover:opacity-100 bg-pinterest-pink  hover:bg-pinterest-fluorescent  duration-300  inset-0 flexCenterCenter text-4xl text-pinterest-pink font-semibold">
				{alt}
			</div>
		</div>
	);
};

export default CustomImage;
