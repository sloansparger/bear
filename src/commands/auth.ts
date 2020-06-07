import { Command } from "@oclif/command";
import config from "../utils/config";
import cmdFlags from "../utils/flags";

export default class Auth extends Command {
  static description = [
    "Authenticates Bear CLI commands that require an app generated token to work.",
    "Go to Bear → Help → API Token → Copy Token and paste into this command."
  ].join("\n");

  static flags = {
    help: cmdFlags.help
  };

  static args = [
    { name: "api-token", required: true, description: "application token" }
  ];

  async run() {
    try {
      const { args } = this.parse(Auth);
      config.set("token", args["api-token"]);
      this.log("Successfully saved API Token");
    } catch (error) {
      this.error("There was an error saving your API Token.", { exit: 1 });
    }
  }
}
