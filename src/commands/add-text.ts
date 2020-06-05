import { Command, flags } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";
import { NoteContents } from "../types";
import { logNoteContents } from "../utils/log";
import cmdFlags from "../utils/flags";

export default class AddText extends Command {
  static description = [
    "Append or prepend text to a note identified by its title or id.",
    "Beta encrypted notes can't be accessed with this call."
  ].join("\n");

  static flags = {
    help: cmdFlags.help,
    edit: cmdFlags.edit,
    "exclude-trashed": cmdFlags["exclude-trashed"],
    header: cmdFlags.header,
    id: cmdFlags.id,
    mode: cmdFlags.mode,
    "new-line": cmdFlags["new-line"],
    "new-window": cmdFlags["new-window"],
    "open-note": cmdFlags["open-note"],
    "show-window": cmdFlags["show-window"],
    tag: flags.string({
      char: "t",
      description: "tag for note",
      multiple: true
    }),
    timestamp: cmdFlags.timestamp,
    title: cmdFlags.title
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
