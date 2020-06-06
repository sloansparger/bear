/* eslint-disable no-console */

import { CLIError } from "@oclif/errors";
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
    console.log("params:", params);
  }

  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      throw new CLIError("Command timed out.");
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

        if (timeoutId) clearTimeout(timeoutId);
        resolve(parsedResponse);
      })
      .catch(error => {
        if (timeoutId) clearTimeout(timeoutId);
        const [, ...errLines] = error.message.split("\n");
        const parsedError = JSON.parse(errLines.join("\n"));
        if (parsedError.errorMessage) {
          reject(new CLIError(parsedError.errorMessage));
        } else {
          reject(new CLIError(error));
        }
      });
  });
}
