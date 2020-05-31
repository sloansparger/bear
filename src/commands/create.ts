import { Command, flags } from "@oclif/command";
import * as fs from "fs";
import * as path from "path";
import { bearExec } from "../utils/bear-exec";
import { NoteId } from "../types";
import { logNoteId } from "../utils/log";
import cmdFlags from "../utils/flags";

export default class Create extends Command {
  static description = [
    "Create a new note. Empty notes are not allowed.",
    "Returns note unique identifier."
  ].join("\n");

  static flags = {
    edit: cmdFlags.edit,
    file: cmdFlags.file,
    filename: cmdFlags.filename,
    help: cmdFlags.help,
    "new-window": cmdFlags["new-window"],
    "open-note": cmdFlags["open-note"],
    pin: cmdFlags.pin,
    "show-window": cmdFlags["show-window"],
    tag: flags.string({
      char: "t",
      description: "tag for note",
      multiple: true
    }),
    text: cmdFlags.text,
    timestamp: cmdFlags.timestamp,
    title: cmdFlags.title
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
