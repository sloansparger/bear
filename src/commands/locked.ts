import { Command } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class Locked extends Command {
  static description = "Select the Locked sidebar item.";

  static flags = {
    help: cmdFlags.help,
    "show-window": cmdFlags["show-window"]
  };

  static args = [{ name: "search", description: "string to search" }];

  async run() {
    const { args: cmdArgs, flags } = this.parse(Locked);
    const args = await argsWithPipe(Locked.args, cmdArgs);
    const params = { ...flags, ...args };

    bearExec("locked", params);
  }
}
