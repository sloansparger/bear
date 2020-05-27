import { Command, flags } from "@oclif/command";
const { execSync } = require("child_process");

export default class Today extends Command {
  static description = "describe the command here";

  static flags = {
    help: flags.help({ char: "h" }),
    "show-window": flags.boolean({
      char: "w",
      description: "force the opening of bear main window"
    }),
    token: flags.string({ char: "t", description: "application token" })
  };

  static args = [{ name: "search", description: "string to search" }];

  async run() {
    const { args, flags } = this.parse(Today);
    const params = { ...flags, ...args };

    const xCallbackParams = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
      .join("&");

    execSync(`open "bear://x-callback-url/today?${xCallbackParams}"`);
  }
}
