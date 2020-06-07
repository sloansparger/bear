import { Command } from "@oclif/command";
import { NotesResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logNotes } from "../utils/log";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class Todo extends Command {
  static description = [
    "Fetch all notes in the Todo sidebar item.",
    "Returns list of unique note identifiers and note titles.",
    "BUG: There's an issue with bear that causes notes that match search with no Todo's to be returned."
  ].join("\n");

  static flags = {
    help: cmdFlags.help,
    "show-window": cmdFlags["show-window"],
    tokne: cmdFlags.token
  };

  static args = [{ name: "search", description: "string to search" }];

  async run() {
    const { args: cmdArgs, flags } = this.parse(Todo);
    const args = await argsWithPipe(Todo.args, cmdArgs);
    if (args.search === undefined) delete args.search;
    const params = { ...flags, ...args };

    const response = await bearExec<NotesResponse>("todo", params);
    logNotes(response);
  }
}
