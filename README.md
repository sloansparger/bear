bear
====

Unofficial CLI for the Bear notes app (MacOS only)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bear.svg)](https://npmjs.org/package/bear)
[![Downloads/week](https://img.shields.io/npm/dw/bear.svg)](https://npmjs.org/package/bear)
[![License](https://img.shields.io/npm/l/bear.svg)](https://github.com/sloansparger/bear/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bear
$ bear COMMAND
running command...
$ bear (-v|--version|version)
bear/0.0.0 darwin-x64 node-v12.16.1
$ bear --help [COMMAND]
USAGE
  $ bear COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bear create [TEXTFILE]`](#bear-create-textfile)
* [`bear hello [FILE]`](#bear-hello-file)
* [`bear help [COMMAND]`](#bear-help-command)
* [`bear open-tag [FILE]`](#bear-open-tag-file)

## `bear create [TEXTFILE]`

Create a new note. Empty notes are not allowed.

```
USAGE
  $ bear create [TEXTFILE]

ARGUMENTS
  TEXTFILE  text file containing note body. overrides text flag if provided.

OPTIONS
  -a, --filename=filename  override file name including extension
  -b, --text=text          note body. overriden if a text file is provided as an argument.
  -c, --edit               place the cursor inside the note editor
  -d, --timestamp          prepend the current date and time to the text
  -e, --new-note           open the note in an external window
  -f, --file=file          path to a file attachment
  -h, --help               show CLI help
  -n, --title=title        note title
  -o, --open-note          display the new note in Bear's main or external window
  -p, --pin                pin the note to the top of the list
  -s, --show-window        force the opening of bear main window
  -t, --tag=tag            tag for note
```

_See code: [src/commands/create.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/create.ts)_

## `bear hello [FILE]`

describe the command here

```
USAGE
  $ bear hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ bear hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/hello.ts)_

## `bear help [COMMAND]`

display help for bear

```
USAGE
  $ bear help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_

## `bear open-tag [FILE]`

describe the command here

```
USAGE
  $ bear open-tag [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/open-tag.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/open-tag.ts)_
<!-- commandsstop -->
