import React from "react";
// import "./Loader.scss";
import ContentLoader from "react-content-loader";

const Loader = () => {
  const arrayOfLoaderParts = [...Array(12).keys()];
  return (
    <>
      {arrayOfLoaderParts.map((item) => (
        <ContentLoader key={item} foregroundColor="#cac0c0" viewBox="0 0 720 520" className="LoaderPart" speed={1}>
          <rect x="0" y="0" rx="2" ry="2" width="720" height="520" />
        </ContentLoader>
      ))}
    </>
  );
};

export default Loader;
