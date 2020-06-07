import { Command, flags } from "@oclif/command";
import { NotesResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logNotes } from "../utils/log";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class Search extends Command {
  static description = [
    "Fetch search results from Bear for all notes or for a specific tag.",
    "Returns list of unique note identifiers and note titles."
  ].join("\n");

  static flags = {
    help: cmdFlags.help,
    "show-window": cmdFlags["show-window"],
    tag: flags.string({ char: "t", description: "tag to search into" }),
    token: cmdFlags.token
  };

  static args = [{ name: "term", description: "string to search" }];

  async run() {
    const { args: cmdArgs, flags } = this.parse(Search);
    const args = await argsWithPipe(Search.args, cmdArgs);
    const params = { ...flags, ...args };

    const response = await bearExec<NotesResponse>("search", params);
    logNotes(response);
  }
}
