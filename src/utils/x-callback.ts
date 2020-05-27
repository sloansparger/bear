const { execSync } = require("child_process");

export const getXCallbackUrl = (action: string, params: object) => {
  const queryString = Object.entries(params)
    .map(
      ([key, value]) => value && `${key}=${encodeURIComponent(String(value))}`
    )
    .join("&");

  return `bear://x-callback-url/${action}?${queryString}`;
};

export const execXCallback = (action: string, params: object) => {
  const callbackUrl = getXCallbackUrl(action, params);
  return execSync(`open "${callbackUrl}"`);
};
