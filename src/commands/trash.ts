import { Command, flags } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";

export default class Trash extends Command {
  static description = [
    "Move a note to bear trash and select the Trash sidebar item.",
    "This call can't be performed if the app is a locked state.",
    "Encrypted notes can't be used with this call."
  ].join("\n");

  static flags = {
    help: flags.help({ char: "h" }),
    search: flags.string({
      char: "s",
      description:
        "string to search. search term is ignored if an id is provided."
    }),
    "show-window": flags.boolean({
      char: "w",
      description: "force the opening of bear main window"
    })
  };

  static args = [{ name: "id", description: "note unique identifier" }];

  async run() {
    const { args, flags } = this.parse(Trash);
    if (args.id === undefined) delete args.id;
    const params = { ...flags, ...args };

    try {
      await bearExec("trash", params);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
