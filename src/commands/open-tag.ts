import { Command } from "@oclif/command";
import { NotesResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logNotes } from "../utils/log";
import { getToken } from "../utils/config";
import cmdFlags from "../utils/flags";

export default class OpenTag extends Command {
  static description = "Show all the notes which have a selected tag in bear.";

  static flags = {
    help: cmdFlags.help
  };

  static args = [{ name: "name", description: "tag name", required: true }];

  async run() {
    const { args } = this.parse(OpenTag);
    const token = getToken(this.config.configDir);
    const params = { ...args, token };

    try {
      const response = await bearExec<NotesResponse>("open-tag", params);
      logNotes(response);
    } catch (error) {
      if (error.string && error.string.includes("The tag could not be found")) {
        this.error("The tag could not be found", { exit: 1 });
      }
      this.error(error, { exit: 1 });
    }
  }
}
