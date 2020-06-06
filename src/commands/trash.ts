import { Command } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class Trash extends Command {
  static description = [
    "Move a note to bear trash and select the Trash sidebar item.",
    "This call can't be performed if the app is a locked state.",
    "Encrypted notes can't be used with this call."
  ].join("\n");

  static flags = {
    help: cmdFlags.help,
    "show-window": cmdFlags["show-window"],
    search: cmdFlags.search
  };

  static args = [{ name: "id", description: "note unique identifier" }];

  async run() {
    const { args: cmdArgs, flags } = this.parse(Trash);
    const args = await argsWithPipe(Trash.args, cmdArgs);
    if (args.id === undefined) delete args.id;
    const params = { ...flags, ...args };

    await bearExec("trash", params);
  }
}
