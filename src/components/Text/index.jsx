import React from "react";

const sizeClasses = {
  txtManropeRegular16WhiteA700: "font-manrope font-normal",
  txtOpenSansBold24: "font-bold font-opensans",
  txtLucidaSansTypewriterBold40: "font-lucidasanstypewriter font-semibold",
  txtOpenSansBold20: "font-bold font-opensans",
  txtLucidaSansTypewriterBold20: "font-lucidasanstypewriter font-semibold",
  txtManropeSemiBold16: "font-manrope font-semibold",
  txtLucidaSansTypewriterBold56: "font-lucidasanstypewriter font-semibold",
  txtOpenSansRomanLight18: "font-light font-opensans",
  txtManropeRegular14: "font-manrope font-normal",
  txtManropeRegular16: "font-manrope font-normal",
  txtOpenSansRomanBold18: "font-bold font-opensans",
  txtOpenSansBold20GreenA40002: "font-bold font-opensans",
  txtOpenSansRomanSemiBold18WhiteA700: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold18: "font-opensans font-semibold",
  txtOpenSansRegular18Bluegray200: "font-normal font-opensans",
  txtLucidaSansTypewriterBold24WhiteA700:
    "font-lucidasanstypewriter font-semibold",
  txtOpenSansRegular18: "font-normal font-opensans",
  txtLucidaSansTypewriterBold24Indigo800:
    "font-lucidasanstypewriter font-semibold",
  txtOpenSansBold56: "font-bold font-opensans",
  txtOpenSansRomanRegular12: "font-normal font-opensans",
  txtLucidaSansTypewriterBold24: "font-lucidasanstypewriter font-semibold",
  txtOpenSansRegular18Gray500: "font-normal font-opensans",
  txtLucidaSansTypewriterBold48: "font-lucidasanstypewriter font-semibold",
  txtManropeLight20: "font-light font-manrope",
  txtOpenSansRomanExtraBold18: "font-extrabold font-opensans",
  txtOpenSansBold24WhiteA700: "font-bold font-opensans",
  txtOpenSansRomanExtraBold36: "font-extrabold font-opensans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
