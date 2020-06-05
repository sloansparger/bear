/* eslint-disable no-console */

import XCall from "./xcall";
const { DEBUG } = process.env;

export const client = new XCall("bear");

export function bearExec<T>(action: string, rawParams: object): Promise<T> {
  const params: any = {};
  for (const [key, value] of Object.entries(rawParams)) {
    params[key.replace("-", "_")] = value;
  }

  if (DEBUG === "true") {
    console.log("action:", action);
    console.log("params:", JSON.stringify(params, null, 2));
  }

  return client.call(action, params).then((response: string) => {
    if (DEBUG === "true") {
      console.log("raw response", response);
    }

    // may need to add conditional here if response is plain text?
    const parsedResponse = JSON.parse(response);
    delete parsedResponse[""];

    if (DEBUG === "true") {
      console.log("response", parsedResponse);
    }

    return parsedResponse;
  });
}
