import { Command } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

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
    { name: "new-name", description: "new tag name" }
  ];

  async run() {
    const { args: cmdArgs, flags } = this.parse(RenameTag);
    const args = await argsWithPipe(RenameTag.args, cmdArgs, true);
    const params = { ...flags, name: args.name, new_name: args["new-name"] };

    await bearExec("rename-tag", params);
  }
}
