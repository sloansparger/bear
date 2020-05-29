import { Command, flags } from "@oclif/command";
import { TagsResponse } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logTags } from "../utils/log";
import { getToken } from "../utils/config";

export default class Tags extends Command {
  static description =
    "Return all the tags currently displayed in Bear's sidebar.";

  static flags = {
    help: flags.help({ char: "h" })
  };

  async run() {
    try {
      const token = getToken(this.config.configDir);
      const response = await bearExec<TagsResponse>("tags", { token });
      logTags(response);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
