import React from "react";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return <div className="w-full h-full min-h-screen">{children}</div>;
};

export default Layout;
