import { Command } from "@oclif/command";
import * as fs from "fs";
import * as path from "path";
import { bearExec } from "../utils/bear-exec";
import { NoteBody } from "../types";
import { logNoteBody } from "../utils/log";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

export default class AddFile extends Command {
  static description = [
    "Append or prepend a file to a note identified by its title or id.",
    "This call can't be performed if the app is a locked state.",
    "Encrypted notes can't be accessed with this call.",
    "Returns note's contents."
  ].join("\n");

  static flags = {
    edit: cmdFlags.edit,
    filename: cmdFlags.filename,
    header: cmdFlags.header,
    help: cmdFlags.help,
    id: cmdFlags.id,
    mode: cmdFlags.mode,
    "new-window": cmdFlags["new-window"],
    "open-note": cmdFlags["open-note"],
    "show-window": cmdFlags["show-window"],
    title: cmdFlags.title
  };

  static args = [
    {
      name: "file",
      description: "path to file you want to add"
    }
  ];

  async run() {
    const { args: cmdArgs, flags } = this.parse(AddFile);
    const args = await argsWithPipe(AddFile.args, cmdArgs, true);
    const { file } = args;

    if (!flags.filename) flags.filename = path.basename(file);

    let fileContents;
    try {
      fileContents = fs.readFileSync(path.join(process.cwd(), file), "utf8");
    } catch (error) {
      this.error("There was an error accessing that file");
    }

    const params = {
      ...flags,
      file: Buffer.from(fileContents).toString("base64")
    };

    const result = await bearExec<NoteBody>("add-file", params);
    logNoteBody(result);
  }
}
