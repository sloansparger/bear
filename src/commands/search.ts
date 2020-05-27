import { Command, flags } from "@oclif/command";
import { execXCallback } from "../utils/x-callback";

export default class Search extends Command {
  static description =
    "Show search results in Bear for all notes or for a specific tag.";

  static flags = {
    help: flags.help({ char: "h" }),
    "show-window": flags.boolean({
      char: "w",
      description: "force the opening of bear main window"
    }),
    tag: flags.string({ char: "t", description: "tag to search into" }),
    token: flags.string({ char: "x", description: "application token" })
  };

  static args = [{ name: "term", description: "string to search" }];

  async run() {
    const { args, flags } = this.parse(Search);
    const params = { ...flags, ...args };

    execXCallback("search", params);
  }
}
