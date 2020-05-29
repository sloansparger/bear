import { Command, flags } from "@oclif/command";
import { FullNote } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logFullNote } from "../utils/log";
import { getToken } from "../utils/config";

export default class OpenNote extends Command {
  static description =
    "Open a note identified by its title or id and return its content.";

  static flags = {
    help: flags.help({ char: "h" }),
    title: flags.string({ char: "t", description: "note title" }),
    header: flags.string({ char: "s", description: "note title" }),
    "exclude-trashed": flags.boolean({
      char: "x",
      description: "exclude trashed notes"
    }),
    "new-window": flags.boolean({
      char: "e",
      description: "open the note in an external window"
    }),
    float: flags.boolean({
      char: "f",
      description: "makes the external window float on top"
    }),
    "show-window": flags.boolean({
      char: "w",
      description: "force the opening of bear main window"
    }),
    "open-note": flags.boolean({
      char: "o",
      description: "display the new note in Bear's main or external window"
    }),
    selected: flags.boolean({
      char: "c",
      description: "return the note currently selected in Bear"
    }),
    pin: flags.boolean({
      char: "p",
      description: "pin the note to the top of the list"
    }),
    edit: flags.boolean({
      char: "c",
      description: "place the cursor inside the note editor"
    })
  };

  static args = [{ name: "id", description: "note unique identifier" }];

  async run() {
    const { args, flags } = this.parse(OpenNote);
    const token = getToken(this.config.configDir);
    const params = { ...args, ...flags, token };

    try {
      const response = await bearExec<FullNote>("open-note", params);
      logFullNote(response);
    } catch (error) {
      if (
        error.string &&
        error.string.includes("The note could not be found")
      ) {
        this.error("The note could not be found", { exit: 1 });
      }
      this.error(error, { exit: 1 });
    }
  }
}
