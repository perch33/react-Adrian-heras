const sizes = {
  mobile: "360px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1400px",
};

const device = {
  mobile: (styles) => {
    return `@media screen and (min-width:${sizes.mobile}){
            ${styles}
        }`;
  },
};

export default device;
