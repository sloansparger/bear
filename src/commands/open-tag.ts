import { Command } from "@oclif/command";
import { NotesResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logNotes } from "../utils/log";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class OpenTag extends Command {
  static description = [
    "Fetch all the notes which have a selected tag in bear.",
    "Returns list of unique note identifiers and note titles."
  ].join("\n");

  static flags = {
    help: cmdFlags.help,
    token: cmdFlags.token
  };

  static args = [{ name: "name", description: "tag name" }];

  async run() {
    const { args: cmdArgs, flags } = this.parse(OpenTag);
    const args = await argsWithPipe(OpenTag.args, cmdArgs, true);
    const params = { ...args, ...flags };

    const response = await bearExec<NotesResponse>("open-tag", params);
    logNotes(response);
  }
}
