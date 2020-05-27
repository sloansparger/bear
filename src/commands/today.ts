import { Command, flags } from "@oclif/command";
import { execXCallback } from "../utils/x-callback";

export default class Today extends Command {
  static description = "Select the Today sidebar item.";

  static flags = {
    help: flags.help({ char: "h" }),
    "show-window": flags.boolean({
      char: "w",
      description: "force the opening of bear main window"
    }),
    token: flags.string({ char: "x", description: "application token" })
  };

  static args = [{ name: "search", description: "string to search" }];

  async run() {
    const { args, flags } = this.parse(Today);
    const params = { ...flags, ...args };

    execXCallback("today", params);
  }
}
