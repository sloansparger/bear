import { Command, flags } from "@oclif/command";
import { NotesResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logNotes } from "../utils/log";
import { getToken } from "../utils/config";

export default class Today extends Command {
  static description = "Select the Today sidebar item.";

  static flags = {
    help: flags.help({ char: "h" }),
    "show-window": flags.boolean({
      char: "w",
      description: "force the opening of bear main window"
    })
  };

  static args = [
    {
      name: "search",
      description: "string to search",
      required: true
    }
  ];

  async run() {
    const { args, flags } = this.parse(Today);
    if (args.search === undefined) delete args.search;
    const token = getToken(this.config.configDir);
    const params = { ...flags, ...args, token };

    try {
      const response = await bearExec<NotesResponse>("today", params);
      logNotes(response);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
