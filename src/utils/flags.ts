import { flags } from "@oclif/command";

// can I convert true/false values into something else via flags?
// NOTE: chars remaining [g, q, r, v, y]

const boolToYesNo = (isTrue: boolean) => {
  if (isTrue) return "Yes";
  return "No";
};

const cmdFlags = {
  // tag: char t, not include here since it's used in several ways for bear
  edit: flags.boolean({
    char: "c",
    description: "place the cursor inside the note editor",
    parse: boolToYesNo
  }),
  "exclude-trashed": flags.boolean({
    char: "x",
    description: "exclude trashed notes",
    parse: boolToYesNo
  }),
  file: flags.string({ char: "a", description: "path to a file attachment" }),
  filename: flags.string({
    char: "j",
    description: "override file name including extension"
  }),
  float: flags.boolean({
    char: "f",
    description: "makes the external window float on top",
    parse: boolToYesNo
  }),
  header: flags.string({ char: "u", description: "note title" }),
  help: flags.help({ char: "h" }),
  id: flags.string({ char: "i", description: "note unique identifier" }),
  mode: flags.string({
    char: "m",
    description:
      "the allowed values are prepend, append, replace_all and replace (keep the note's title untouched)",
    options: ["prepend", "append", "replace", "replace_all"],
    default: "append"
  }),
  "new-line": flags.boolean({
    char: "l",
    description:
      "if true and mode is append force the text to appear on a new line inside the note",
    dependsOn: ["mode"],
    parse: boolToYesNo
  }),
  "new-window": flags.boolean({
    char: "e",
    description: "open the note in an external window",
    parse: boolToYesNo
  }),
  "open-note": flags.boolean({
    char: "o",
    description: "display the new note in Bear's main or external window",
    parse: boolToYesNo
  }),
  pin: flags.boolean({
    char: "p",
    description: "pin the note to the top of the list",
    parse: boolToYesNo
  }),
  search: flags.string({
    char: "s",
    description:
      "string to search. search term is ignored if an id is provided."
  }),
  selected: flags.boolean({
    char: "k",
    description: "return the note currently selected in Bear",
    parse: boolToYesNo
  }),
  "show-window": flags.boolean({
    char: "w",
    description: "force the opening of bear main window",
    parse: boolToYesNo
  }),
  timestamp: flags.boolean({
    char: "d",
    description: "prepend the current date and time to the text",
    parse: boolToYesNo
  }),
  title: flags.string({ char: "n", description: "note title" }),
  wait: flags.boolean({
    char: "z",
    description:
      "if false, command returns immediately without waiting for note return value",
    parse: boolToYesNo
  })
};

export default cmdFlags;
