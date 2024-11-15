/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      objectPosition: {
        "custom-center": "25% 75%", // x-axis 25%, y-axis 75%
      },
      screens: {
        xs: "360px",
        lg: "1200px",
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
        offWhite: "#E9E8D5",
        wetCoral: "#D0564F",
        gingerFlower: "#D0514A",
        lightGingerFlower: "#CF554E",
      },
      fontSize: {
        navLinks: "20px",
        navLinksMobile: "17px",
        aaLogo: "35px",
        sectionHeaderTitle: "45px",
        sectionHeaderTabletTitle: "25px",
        sectionHeaderMobileTitle: "15px",
        sectionParagraph: "20px",
        sectionParagraphMobile: "10px",
        sectionParagraphTablet: "17px",
      },
    },
  },
  plugins: [],
};
