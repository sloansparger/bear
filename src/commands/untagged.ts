import { Command } from "@oclif/command";
import { NotesResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logNotes } from "../utils/log";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class Untagged extends Command {
  static description = [
    "Fetch all notes in the Untagged sidebar item.",
    "Returns list of unique note identifiers and note titles."
  ].join("\n");

  static flags = {
    help: cmdFlags.help,
    "show-window": cmdFlags["show-window"],
    token: cmdFlags.token
  };

  static args = [{ name: "search", description: "string to search" }];

  async run() {
    const { args: cmdArgs, flags } = this.parse(Untagged);
    const args = await argsWithPipe(Untagged.args, cmdArgs);
    if (args.search === undefined) delete args.search;
    const params = { ...flags, ...args };

    const response = await bearExec<NotesResponse>("untagged", params);
    logNotes(response);
  }
}
