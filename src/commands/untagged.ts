import { Command } from "@oclif/command";
import { NotesResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logNotes } from "../utils/log";
import { getToken } from "../utils/config";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class Untagged extends Command {
  static description = "Select the Untagged sidebar item.";

  static flags = {
    help: cmdFlags.help,
    "show-window": cmdFlags["show-window"]
  };

  static args = [{ name: "search", description: "string to search" }];

  async run() {
    const { args: cmdArgs, flags } = this.parse(Untagged);
    const args = await argsWithPipe(Untagged.args, cmdArgs);
    if (args.search === undefined) delete args.search;
    const token = getToken(this.config.configDir);
    const params = { ...flags, ...args, token };

    try {
      const response = await bearExec<NotesResponse>("untagged", params);
      logNotes(response);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
