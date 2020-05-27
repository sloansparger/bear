import { Command, flags } from "@oclif/command";
const { execSync } = require("child_process");

export default class OpenTag extends Command {
  static description = "Show all the notes which have a selected tag in bear.";

  static flags = {
    help: flags.help({ char: "h" }),
    token: flags.string({ char: "x", description: "application token" })
  };

  static args = [{ name: "name", description: "tag name" }];

  async run() {
    const { args, flags } = this.parse(OpenTag);

    const params = { ...flags, ...args };

    const xCallbackParams = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
      .join("&");

    execSync(`open "bear://x-callback-url/open-tag?${xCallbackParams}"`);
  }
}
