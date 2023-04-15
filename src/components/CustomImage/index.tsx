import Image from "next/image";
import React from "react";

const imageWidth = 194;

export type CustomImageProps = {
	size: {
		width?: number;
		height: number;
	};
	position: {
		top?: number | string;
		right?: number | string;
		left?: number | string;
		bottom?: number | string;
	};
	priority?: boolean;
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
	priority = false,
}) => {
	return (
		<div
			className="rounded-xl delay-100 cursor-pointer relative"
			css={{ ...position }}
		>
			<Image
				width={imageWidth}
				height={size.height}
				style={{ width: imageWidth, height: size.height }}
				className={`min-w-[194px] min-h-[210px] cursor-pointer z-0 object-cover rounded-xl ${className} bg-pinterest-pink`}
				src={src}
				alt={alt}
				priority={priority}
				draggable={false}
			/>
			<div className="absolute rounded-xl text-center  opacity-0 hover:opacity-100 bg-pinterest-pink  hover:bg-pinterest-fluorescent  duration-300  inset-0 flexCenterCenter text-4xl text-pinterest-pink font-semibold">
				{alt}
			</div>
		</div>
	);
};

export default CustomImage;
