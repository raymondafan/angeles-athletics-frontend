/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        custom: "20px",
      },
      objectPosition: {
        "custom-center": "25% 75%", // x-axis 25%, y-axis 75%
      },
      screens: {
        xs: "360px",
        lg: "1280px",
      },
      zIndex: {
        1000: "1000",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"], // Use Rubik as the default sans-serif font
      },
      colors: {
        purple: "#9335B3",
        lightGrey: "#38323A",
        wheat: "#FAF9EC",
        offWhite: "#FBFBFB",
        wetCoral: "#D0564F",
        gingerFlower: "#D0514A",
        lightGingerFlower: "#CF554E",
        silver: "#b6bcbf",
      },
      fontSize: {
        navLinks: "20px",
        navLinksMobile: "17px",
        aaLogo: "35px",
        sectionHeaderTitle: "40px",
        sectionHeaderTabletTitle: "27px",
        sectionHeaderMobileTitle: "19px",
        title: "45px",
        titleTablet: "27px",
        titleMobile: "19px",
        sectionParagraph: "24px",
        sectionParagraphMobile: "12px",
        sectionParagraphTablet: "19px",
        learnMoreButton: "20px",
        learnMoreButtonMobile: "12px",
        learnMoreButtonTablet: "17px",
        footerTitle: "19px",
        footerCopyright: "15px",
        footerParagraph: "17px",
      },
    },
  },
  plugins: [],
};
