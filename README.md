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
* [`bear auth API-TOKEN`](#bear-auth-api-token)
* [`bear create [TEXTFILE]`](#bear-create-textfile)
* [`bear help [COMMAND]`](#bear-help-command)
* [`bear locked [SEARCH]`](#bear-locked-search)
* [`bear open-tag NAME`](#bear-open-tag-name)
* [`bear search [TERM]`](#bear-search-term)
* [`bear tags`](#bear-tags)
* [`bear today SEARCH`](#bear-today-search)
* [`bear todo [SEARCH]`](#bear-todo-search)
* [`bear untagged [FILE]`](#bear-untagged-file)

## `bear auth API-TOKEN`

Authenticates Bear CLI commands that require an app generated token to work.

```
USAGE
  $ bear auth API-TOKEN

ARGUMENTS
  API-TOKEN  application token

OPTIONS
  -h, --help  show CLI help

DESCRIPTION
  Go to Bear → Help → API Token → Copy Token and paste into this command.
```

_See code: [src/commands/auth.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/auth.ts)_

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
  -t, --tag=tag            tag for note
  -w, --show-window        force the opening of bear main window

DESCRIPTION
  Returns note unique identifier.
```

_See code: [src/commands/create.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/create.ts)_

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

## `bear locked [SEARCH]`

Select the Locked sidebar item.

```
USAGE
  $ bear locked [SEARCH]

ARGUMENTS
  SEARCH  string to search

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window
```

_See code: [src/commands/locked.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/locked.ts)_

## `bear open-tag NAME`

Show all the notes which have a selected tag in bear.

```
USAGE
  $ bear open-tag NAME

ARGUMENTS
  NAME  tag name

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/open-tag.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/open-tag.ts)_

## `bear search [TERM]`

Show search results in Bear for all notes or for a specific tag.

```
USAGE
  $ bear search [TERM]

ARGUMENTS
  TERM  string to search

OPTIONS
  -h, --help         show CLI help
  -t, --tag=tag      tag to search into
  -w, --show-window  force the opening of bear main window
```

_See code: [src/commands/search.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/search.ts)_

## `bear tags`

Return all the tags currently displayed in Bear's sidebar.

```
USAGE
  $ bear tags

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/tags.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/tags.ts)_

## `bear today SEARCH`

Select the Today sidebar item.

```
USAGE
  $ bear today SEARCH

ARGUMENTS
  SEARCH  string to search

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window
```

_See code: [src/commands/today.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/today.ts)_

## `bear todo [SEARCH]`

Select the Todo sidebar item.

```
USAGE
  $ bear todo [SEARCH]

ARGUMENTS
  SEARCH  string to search

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window
```

_See code: [src/commands/todo.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/todo.ts)_

## `bear untagged [FILE]`

describe the command here

```
USAGE
  $ bear untagged [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/untagged.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/untagged.ts)_
<!-- commandsstop -->
