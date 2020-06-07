import { Command } from "@oclif/command";
import { TagsResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logTags } from "../utils/log";
import cmdFlags from "../utils/flags";

export default class Tags extends Command {
  static description = [
    "Fetch all the tags currently displayed in Bear's sidebar.",
    "Returns list of tag names."
  ].join("\n");

  static flags = {
    help: cmdFlags.help,
    token: cmdFlags.tokenRequired
  };

  async run() {
    const { flags } = this.parse(Tags);
    const response = await bearExec<TagsResponse>("tags", { ...flags });
    logTags(response);
  }
}
