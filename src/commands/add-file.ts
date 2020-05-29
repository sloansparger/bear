import { Command, flags } from "@oclif/command";
import * as fs from "fs";
import * as path from "path";
import { bearExec } from "../utils/bear-exec";
import { NoteBody } from "../types";
import { logNoteBody } from "../utils/log";

export default class AddFile extends Command {
  static description = [
    "Append or prepend a file to a note identified by its title or id.",
    "This call can't be performed if the app is a locked state.",
    "Encrypted notes can't be accessed with this call."
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
      options: ["prepend", "append", "replace", "replace_all"],
      default: "append"
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
    filename: flags.string({
      char: "a",
      description: "override file name including extension"
    })
  };

  static args = [
    {
      name: "file",
      description: "path to file you want to add",
      required: true
    }
  ];

  async run() {
    const { args, flags } = this.parse(AddFile);
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

    try {
      const result = await bearExec<NoteBody>("add-file", params);
      logNoteBody(result);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
