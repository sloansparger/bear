import { Command, flags } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";
import { NoteId } from "../types";
import { logNoteId } from "../utils/log";
import cmdFlags from "../utils/flags";

export default class GrabUrl extends Command {
  static description = "Create a new note with the content of a web page.";

  static flags = {
    help: cmdFlags.help,
    pin: cmdFlags.pin,
    tag: flags.string({
      char: "t",
      description:
        "tag for note, if tags are specified in the Bear's web content prefences this parameter is ignored",
      multiple: true
    }),
    wait: cmdFlags.wait
  };

  static args = [{ name: "url", description: "url to grab", required: true }];

  async run() {
    const { args, flags } = this.parse(GrabUrl);
    const { tag, ...restFlags } = flags;

    const params: any = { ...args, restFlags };
    if (tag) params.tags = tag.join(",");

    try {
      // result is undefined if --wait flag is not set
      // if wait is true, we log the note id once it is returned
      const result = await bearExec<NoteId | undefined>("grab-url", params);
      if (result !== undefined) logNoteId(result);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
