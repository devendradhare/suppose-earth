import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  return { title: "login | suppose earth" };
}

const Layout = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
