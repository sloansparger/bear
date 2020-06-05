import { Command } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class Archive extends Command {
  static description = [
    "Move a note to bear archive and select the Archive sidebar item.",
    "This call can't be performed if the app is a locked state.",
    "Encrypted notes can't be accessed with this call."
  ].join("\n");

  static flags = {
    help: cmdFlags.help,
    search: cmdFlags.search,
    "show-window": cmdFlags["show-window"]
  };

  static args = [{ name: "id", description: "note unique identifier" }];

  async run() {
    const { args: cmdArgs, flags } = this.parse(Archive);
    const args = await argsWithPipe(Archive.args, cmdArgs);
    if (args.id === undefined) delete args.id;
    const params = { ...flags, ...args };

    try {
      await bearExec("archive", params);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
