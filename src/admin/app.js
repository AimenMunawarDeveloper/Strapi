import favicon from "../../favicon2.jpeg";

const config = {
  config: {
    locales: ["ru", "zh"],
  },
  head: {
    favicon: favicon,
  },
  bootstrap() {},
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
