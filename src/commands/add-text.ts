import { Command, flags } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";
import { NoteContents } from "../types";
import { logNoteContents } from "../utils/log";

export default class AddText extends Command {
  static description = [
    "Append or prepend text to a note identified by its title or id.",
    "Beta encrypted notes can't be accessed with this call."
  ].join("\n");

  static flags = {
    help: flags.help({ char: "h" }),
    id: flags.string({ char: "i", description: "note unique identifier" }),
    title: flags.string({ char: "t", description: "note title" }),
    header: flags.string({ char: "s", description: "note title" }),
    mode: flags.string({
      char: "m",
      description:
        "the allowed values are prepend, append, replace_all and replace (keep the note's title untouched)",
      options: ["prepend", "append", "replace", "replace_all"]
    }),
    "new-line": flags.boolean({
      char: "l",
      description:
        "if true and mode is append force the text to appear on a new line inside the note",
      dependsOn: ["mode"]
    }),
    tag: flags.string({
      char: "t",
      description: "tag for note",
      multiple: true
    }),
    "exclude-trashed": flags.boolean({
      char: "x",
      description: "exclude trashed notes"
    }),
    "open-note": flags.boolean({
      char: "o",
      description: "display the new note in Bear's main or external window"
    }),
    "new-window": flags.boolean({
      char: "e",
      description: "open the note in an external window"
    }),
    "show-window": flags.boolean({
      char: "w",
      description: "force the opening of bear main window"
    }),
    edit: flags.boolean({
      char: "c",
      description: "place the cursor inside the note editor"
    }),
    timestamp: flags.boolean({
      char: "d",
      description: "prepend the current date and time to the text"
    })
  };

  static args = [{ name: "text", description: "note body", required: true }];

  async run() {
    const { args, flags } = this.parse(AddText);
    const params = { ...args, ...flags };

    try {
      const response = await bearExec<NoteContents>("add-text", params);
      logNoteContents(response);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
