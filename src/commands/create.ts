import { Command, flags } from "@oclif/command";
import * as fs from "fs";
import * as path from "path";
import { bearExec } from "../utils/bear-exec";
import { NoteId } from "../types";
import { logNoteId } from "../utils/log";
import cmdFlags from "../utils/flags";
import { argsWithPipe } from "../utils/read-pipe";

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
    timestamp: cmdFlags.timestamp,
    title: cmdFlags.title
  };

  static args = [
    {
      name: "text",
      description: "note body"
    }
  ];

  async run() {
    const { flags, args: cmdArgs } = this.parse(Create);
    const args = await argsWithPipe(Create.args, cmdArgs);
    const { tag = [], file, ...restFlags } = flags;

    type Params = typeof restFlags & { file?: string; tags: string };
    const params: Params = { ...args, ...restFlags, tags: tag.join(",") };

    // bear requires base64 encoding of file attachements
    if (file) {
      const contents = fs.readFileSync(path.join(process.cwd(), file), "utf8");
      params.file = Buffer.from(contents).toString("base64");
    }

    const result = await bearExec<NoteId>("create", params);
    logNoteId(result);
  }
}
