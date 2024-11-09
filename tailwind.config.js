/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
        sectionHeader: "48px",
        mobileTitle: "44px",
      },
    },
  },
  plugins: [],
};
