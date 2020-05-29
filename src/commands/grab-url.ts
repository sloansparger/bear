import { Command, flags } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";
import { NoteId } from "../types";
import { logNoteId } from "../utils/log";

export default class GrabUrl extends Command {
  static description = "Create a new note with the content of a web page.";

  static flags = {
    help: flags.help({ char: "h" }),
    tag: flags.string({
      char: "t",
      description:
        "tag for note, if tags are specified in the Bear's web content prefences this parameter is ignored",
      multiple: true
    }),
    pin: flags.boolean({
      char: "p",
      description: "pin the note to the top of the list"
    }),
    wait: flags.boolean({
      char: "w",
      description:
        "if false, command returns immediately without waiting for note return value"
    })
  };

  static args = [{ name: "url", description: "url to grab", required: true }];

  async run() {
    const { args, flags } = this.parse(GrabUrl);
    const { tag, ...restFlags } = flags;

    const params: any = { ...args, restFlags };
    if (tag) params.tags = tag.join(",");

    try {
      const result = await bearExec<NoteId>("grab-url", params);
      logNoteId(result);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
