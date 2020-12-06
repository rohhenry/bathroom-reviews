import { init } from "@rematch/core";
import { plugins } from "f-core";
import * as models from "models";

export const store = init({
  models,
  plugins: [plugins.actions],
});
