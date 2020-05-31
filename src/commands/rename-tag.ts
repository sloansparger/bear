import { Command } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";
import cmdFlags from "../utils/flags";

export default class RenameTag extends Command {
  static description = [
    "Rename an existing tag.",
    "This call can't be performed if the app is a locked state.",
    "If the tag contains any locked note this call will not be performed."
  ].join("\n");

  static flags = {
    help: cmdFlags.help,
    "show-window": cmdFlags["show-window"]
  };

  static args = [
    { name: "name", description: "tag name", required: true },
    { name: "new-name", description: "new tag name", required: true }
  ];

  async run() {
    const { args, flags } = this.parse(RenameTag);
    const params = { ...flags, name: args.name, new_name: args["new-name"] };

    try {
      await bearExec("rename-tag", params);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
