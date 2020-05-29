import { Command, flags } from "@oclif/command";
import { NotesResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logNotes } from "../utils/log";
import { getToken } from "../utils/config";

export default class Todo extends Command {
  static description = "Select the Todo sidebar item.";

  static flags = {
    help: flags.help({ char: "h" }),
    "show-window": flags.boolean({
      char: "w",
      description: "force the opening of bear main window"
    })
  };

  static args = [{ name: "search", description: "string to search" }];

  async run() {
    const { args, flags } = this.parse(Todo);
    const token = getToken(this.config.configDir);
    const params = { ...flags, ...args, token };

    try {
      const response = await bearExec<NotesResponse>("todo", params);
      logNotes(response);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
