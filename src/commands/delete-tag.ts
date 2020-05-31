import { Command } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";
import cmdFlags from "../utils/flags";

export default class DeleteTag extends Command {
  static description = [
    "Delete an existing tag.",
    "This call can't be performed if the app is a locked state.",
    "If the tag contains any locked note this call will not be performed."
  ].join("\n");

  static flags = {
    help: cmdFlags.help,
    "show-window": cmdFlags["show-window"]
  };

  static args = [{ name: "name", description: "tag name", required: true }];

  async run() {
    const { args, flags } = this.parse(DeleteTag);
    const params = { ...flags, ...args };

    try {
      await bearExec("delete-tag", params);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
