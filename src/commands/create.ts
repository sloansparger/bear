import { Command, flags } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";
import { NoteId } from "../types";
import { logNoteId } from "../utils/log";
const fs = require("fs");
const path = require("path");

export default class Create extends Command {
  static description = [
    "Create a new note. Empty notes are not allowed.",
    "Returns note unique identifier."
  ].join("\n");

  static flags = {
    help: flags.help({ char: "h" }),
    title: flags.string({ char: "n", description: "note title" }),
    text: flags.string({
      char: "b",
      description:
        "note body. overriden if a text file is provided as an argument."
    }),
    tag: flags.string({
      char: "t",
      description: "tag for note",
      multiple: true
    }),
    file: flags.string({ char: "f", description: "path to a file attachment" }),
    filename: flags.string({
      char: "a",
      description: "override file name including extension"
    }),
    "open-note": flags.boolean({
      char: "o",
      description: "display the new note in Bear's main or external window"
    }),
    "new-note": flags.boolean({
      char: "e",
      description: "open the note in an external window"
    }),
    "show-window": flags.boolean({
      char: "w",
      description: "force the opening of bear main window"
    }),
    pin: flags.boolean({
      char: "p",
      description: "pin the note to the top of the list"
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

  static args = [
    {
      name: "textFile",
      description:
        "text file containing note body. overrides text flag if provided."
    }
  ];

  async run() {
    const { flags, args } = this.parse(Create);
    const { tag = [], file, ...rest } = flags;
    const { textFile } = args;

    type Params = typeof rest & { file?: string; tags: string };
    const params: Params = { ...rest, tags: tag.join(",") };

    // bear requires base64 encoding of file attachements
    if (file) {
      const contents = fs.readFileSync(path.join(process.cwd(), file), "utf8");
      params.file = Buffer.from(contents).toString("base64");
    }

    if (textFile) {
      params.text = fs.readFileSync(path.join(process.cwd(), textFile), "utf8");
    }

    try {
      const result = await bearExec<NoteId>("create", params);
      logNoteId(result);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
