const { exec } = require("child_process");
const { promisify } = require("util");
const querystring = require("querystring");
const execAsync = promisify(exec);

export default class XCall {
  scheme: string;

  constructor(scheme: string) {
    this.scheme = scheme;
  }

  async call(action: string, params: object) {
    const xcall = `${__dirname}/xcall.app/Contents/MacOS/xcall`;
    const cmd =
      `${xcall} ` +
      `-url "${this.scheme}://x-callback-url/${action}?${querystring.stringify(
        params
      )}"`;
    const { stdout, stderr } = await execAsync(cmd);
    if (stderr) throw new Error(stderr);
    return stdout;
  }
}
