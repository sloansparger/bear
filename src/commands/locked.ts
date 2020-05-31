import { Command } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";
import cmdFlags from "../utils/flags";

export default class Locked extends Command {
  static description = "Select the Locked sidebar item.";

  static flags = {
    help: cmdFlags.help,
    "show-window": cmdFlags["show-window"]
  };

  static args = [{ name: "search", description: "string to search" }];

  async run() {
    const { args, flags } = this.parse(Locked);
    const params = { ...flags, ...args };

    bearExec("locked", params);
  }
}
