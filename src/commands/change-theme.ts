import { Command, flags } from "@oclif/command";
import { bearExec } from "../utils/bear-exec";

export default class ChangeTheme extends Command {
  static description = [
    "Change the selected Bear theme.",
    "Some themes may require a Bear Pro subscription."
  ].join("\n");

  static flags = {
    help: flags.help({ char: "h" }),
    "show-window": flags.boolean({
      char: "w",
      description: "force the opening of bear main window"
    })
  };

  static args = [
    {
      name: "theme",
      description: "theme name",
      available: [
        "Ayu Mirage",
        "Ayu",
        "Charcoal",
        "Cobalt",
        "Dark Graphite",
        "Dieci",
        "Dracula",
        "Duotone Heat",
        "Duotone Light",
        "Duotone Snow",
        "Gandalf",
        "Gotham",
        "Panic Mode",
        "Red Graphite",
        "Solarized Dark",
        "Solarized Light",
        "Toothpaste"
      ]
    }
  ];

  async run() {
    const { args, flags } = this.parse(ChangeTheme);
    const params = { ...flags, ...args };

    try {
      await bearExec("change-theme", params);
    } catch (error) {
      this.error(error, { exit: 1 });
    }
  }
}
