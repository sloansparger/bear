import * as Conf from "conf";

const config = new Conf({
  schema: {
    token: {
      type: "string"
    }
  }
});

export default config;
