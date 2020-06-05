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

  return new Promise((resolve, reject) => {
    let hasRejected = false;

    const timeoutId = setTimeout(() => {
      hasRejected = true;
      reject(new Error("Command timed out."));
    }, 30 * 1000); // timeout of 30 seconds

    client
      .call(action, params)
      .then((response: string) => {
        if (DEBUG === "true") {
          console.log("raw response", response);
        }

        const parsedResponse = JSON.parse(response);
        delete parsedResponse[""];

        if (DEBUG === "true") {
          console.log("response", parsedResponse);
        }

        if (!hasRejected) {
          clearTimeout(timeoutId);
          resolve(parsedResponse);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
