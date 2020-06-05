import { Command } from "@oclif/command";
import { FullNote } from "../types";
import { bearExec } from "../utils/bear-exec";
import { logFullNote } from "../utils/log";
import { getToken } from "../utils/config";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class OpenNote extends Command {
  static description =
    "Open a note identified by its title or id and return its content.";

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
    edit: cmdFlags.edit
  };

  static args = [{ name: "id", description: "note unique identifier" }];

  async run() {
    const { args: cmdArgs, flags } = this.parse(OpenNote);
    const args = await argsWithPipe(OpenNote.args, cmdArgs);
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
