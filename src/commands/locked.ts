import { Command, flags } from "@oclif/command";
import { execXCallback } from "../utils/x-callback";

export default class Locked extends Command {
  static description = "Select the Locked sidebar item.";

  static flags = {
    help: flags.help({ char: "h" }),
    "show-window": flags.boolean({
      char: "w",
      description: "force the opening of bear main window"
    })
  };

  static args = [{ name: "search", description: "string to search" }];

  async run() {
    const { args, flags } = this.parse(Locked);
    const params = { ...flags, ...args };

    execXCallback("locked", params);
  }
}
