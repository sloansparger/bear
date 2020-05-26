import { expect, test } from "@oclif/test";

describe("create", () => {
  test
    .stdout()
    .command(["create", "--tag", "bear-cli-test", "Test Note"])
    .it("runs create with Test Note", (ctx) => {
      expect(ctx.stdout).to.contain("");
    });
});
