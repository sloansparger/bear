import { Command } from "@oclif/command";
import { NotesResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logNotes } from "../utils/log";
import { getToken } from "../utils/config";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class Today extends Command {
  static description = [
    "Fetch all notes in the Today sidebar item.",
    "Returns list of unique note identifiers and note titles.",
    "NOTE: this feature doesn't currently work as expected.",
    "BUG: There's an issue with bear that causes notes that match search not in Today to be returned.",
    "BUG: There's an issue where fetching Today's notes causes bear to hold process open."
  ].join("\n");

  static flags = {
    help: cmdFlags.help,
    "show-window": cmdFlags["show-window"]
  };

  static args = [
    {
      name: "search",
      description: "string to search"
    }
  ];

  async run() {
    const { args: cmdArgs, flags } = this.parse(Today);
    const args = await argsWithPipe(Today.args, cmdArgs);
    if (args.search === undefined) delete args.search;
    const token = getToken(this.config.configDir);
    const params = { ...flags, ...args, token };

    const response = await bearExec<NotesResponse>("today", params);
    logNotes(response);
  }
}
