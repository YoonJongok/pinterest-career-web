import Image from "next/image";
import React from "react";

interface Props {
	size: {
		width: number;
		height: number;
	};

	src: string;
	alt: string;
	className: string;
}

const CustomImage: React.FC<Props> = ({ size, src, alt, className }) => {
	return (
		<div className="w-fit rounded-xl delay-100 hover:bg-pinterest-fluorescent hover:z-10 hover:opacity-100">
			<Image
				width={size.width}
				height={size.height}
				src={src}
				alt={alt}
				className={`cursor-pointer object-cover bg-no-repeat rounded-xl ${className} bg-pinterest-pink hover:opacity-0 transition-opacity duration-500`}
			/>
		</div>
	);
};

export default CustomImage;
