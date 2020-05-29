import { Command, flags } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";

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

    bearExec("locked", params);
  }
}
