import { Command } from "@oclif/command";
import { FullNote } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logFullNote } from "../utils/log";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class OpenNote extends Command {
  static description = [
    "Fetch a note identified by its title or id.",
    "Returns the matched note's contents."
  ].join("\n");

  static flags = {
    help: cmdFlags.help,
    title: cmdFlags.title,
    header: cmdFlags.header,
    "exclude-trashed": cmdFlags["exclude-trashed"],
    "new-window": cmdFlags["new-window"],
    float: cmdFlags.float,
    "show-window": cmdFlags["show-window"],
    "open-note": cmdFlags["open-note"],
    selected: cmdFlags.selected,
    pin: cmdFlags.pin,
    edit: cmdFlags.edit,
    token: cmdFlags.token
  };

  static args = [{ name: "id", description: "note unique identifier" }];

  async run() {
    const { args: cmdArgs, flags } = this.parse(OpenNote);
    const args = await argsWithPipe(OpenNote.args, cmdArgs);
    const params = { ...args, ...flags };

    const response = await bearExec<FullNote>("open-note", params);
    logFullNote(response);
  }
}
