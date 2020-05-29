import { Command, flags } from "@oclif/command";
import { NotesResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logNotes } from "../utils/log";
import { getToken } from "../utils/config";

export default class Search extends Command {
  static description =
    "Show search results in Bear for all notes or for a specific tag.";

  static flags = {
    help: flags.help({ char: "h" }),
    "show-window": flags.boolean({
      char: "w",
      description: "force the opening of bear main window"
    }),
    tag: flags.string({ char: "t", description: "tag to search into" })
  };

  static args = [{ name: "term", description: "string to search" }];

  async run() {
    const { args, flags } = this.parse(Search);
    const token = getToken(this.config.configDir);
    const params = { ...flags, ...args, token };

    try {
      const response = await bearExec<NotesResponse>("search", params);
      logNotes(response);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
