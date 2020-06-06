import { Command } from "@oclif/command";
import { NotesResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logNotes } from "../utils/log";
import { getToken } from "../utils/config";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class OpenTag extends Command {
  static description = [
    "Fetch all the notes which have a selected tag in bear.",
    "Returns list of unique note identifiers and note titles."
  ].join("\n");

  static flags = {
    help: cmdFlags.help
  };

  static args = [{ name: "name", description: "tag name" }];

  async run() {
    const { args: cmdArgs } = this.parse(OpenTag);
    const args = await argsWithPipe(OpenTag.args, cmdArgs, true);
    const token = getToken(this.config.configDir);
    const params = { ...args, token };

    const response = await bearExec<NotesResponse>("open-tag", params);
    logNotes(response);
  }
}
