const colorSet = {
  black: "#000000",
  white: "#ffffff",
  gray1: "#cccccc",
  gray2: "#c1c1c1",
  gray3: "#777777",
  gray4: "#efefef",
  gray5: "#dddddd",
  gray6: "#f7f7f7",
  gray7: "#eeeeee",
  gray8: "#ebebeb",
  gray9: "#444444",
  green: "#1eb482",
  green1: "#19c88c",
  blue: "#4095ea",

  kakao: "#ffe200",
  naver: "#17c132",
  google: "#f2f2f2",

  pointColor: "#0ad28c",
};

module.exports = {
  purge: ['./src/**/*.{js, ts, jsx, tsx}', ],
  theme: {
    colors: colorSet,
    backgroundColor: colorSet,
    extend: {},
    screens: {
      'mobile': {'max': '759px'},
      'tablet': {'max': '1023px'},
      'laptop': {'max': '1199px'},
      'desktop': {'min': '1200px'},
    },
  },
  variants: {


  },
  plugins: [],
};
