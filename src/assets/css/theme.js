const theme = {
  color: {
    primary: "#ff385c",
    sencond: "#00848A",
    third: "#fff"
  },
  textColor: {
    primary: "#484848",
    sencond: "#222",
  },
  textSize: {
    primary: "18px",
    second: "16px",
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }`,
  },
};

export default theme;
