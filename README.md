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
* [`bear add-file FILE`](#bear-add-file-file)
* [`bear add-text TEXT`](#bear-add-text-text)
* [`bear archive [FILE]`](#bear-archive-file)
* [`bear auth API-TOKEN`](#bear-auth-api-token)
* [`bear change-font FONT`](#bear-change-font-font)
* [`bear change-theme THEME`](#bear-change-theme-theme)
* [`bear create [TEXTFILE]`](#bear-create-textfile)
* [`bear delete-tag NAME`](#bear-delete-tag-name)
* [`bear grab-url URL`](#bear-grab-url-url)
* [`bear help [COMMAND]`](#bear-help-command)
* [`bear locked [SEARCH]`](#bear-locked-search)
* [`bear open-note [ID]`](#bear-open-note-id)
* [`bear open-tag NAME`](#bear-open-tag-name)
* [`bear rename-tag NAME NEW-NAME`](#bear-rename-tag-name-new-name)
* [`bear search [TERM]`](#bear-search-term)
* [`bear tags`](#bear-tags)
* [`bear today SEARCH`](#bear-today-search)
* [`bear todo [SEARCH]`](#bear-todo-search)
* [`bear trash [ID]`](#bear-trash-id)
* [`bear untagged [SEARCH]`](#bear-untagged-search)

## `bear add-file FILE`

Append or prepend a file to a note identified by its title or id.

```
USAGE
  $ bear add-file FILE

ARGUMENTS
  FILE  path to file you want to add

OPTIONS
  -a, --filename=filename                        override file name including extension
  -c, --edit                                     place the cursor inside the note editor
  -e, --new-window                               open the note in an external window
  -h, --help                                     show CLI help
  -i, --id=id                                    note unique identifier

  -m, --mode=prepend|append|replace|replace_all  [default: append] the allowed values are prepend, append, replace_all
                                                 and replace (keep the note's title untouched)

  -o, --open-note                                display the new note in Bear's main or external window

  -s, --header=header                            note title

  -t, --title=title                              note title

  -w, --show-window                              force the opening of bear main window

DESCRIPTION
  This call can't be performed if the app is a locked state.
  Encrypted notes can't be accessed with this call.
```

_See code: [src/commands/add-file.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/add-file.ts)_

## `bear add-text TEXT`

Append or prepend text to a note identified by its title or id.

```
USAGE
  $ bear add-text TEXT

ARGUMENTS
  TEXT  note body

OPTIONS
  -c, --edit                                     place the cursor inside the note editor
  -d, --timestamp                                prepend the current date and time to the text
  -e, --new-window                               open the note in an external window
  -h, --help                                     show CLI help
  -i, --id=id                                    note unique identifier

  -l, --new-line                                 if true and mode is append force the text to appear on a new line
                                                 inside the note

  -m, --mode=prepend|append|replace|replace_all  [default: append] the allowed values are prepend, append, replace_all
                                                 and replace (keep the note's title untouched)

  -o, --open-note                                display the new note in Bear's main or external window

  -s, --header=header                            note title

  -t, --tag=tag                                  tag for note

  -t, --title=title                              note title

  -w, --show-window                              force the opening of bear main window

  -x, --exclude-trashed                          exclude trashed notes

DESCRIPTION
  Beta encrypted notes can't be accessed with this call.
```

_See code: [src/commands/add-text.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/add-text.ts)_

## `bear archive [FILE]`

describe the command here

```
USAGE
  $ bear archive [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/archive.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/archive.ts)_

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

## `bear change-font FONT`

Change the selected Bear Font.

```
USAGE
  $ bear change-font FONT

ARGUMENTS
  FONT  font name

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window
```

_See code: [src/commands/change-font.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/change-font.ts)_

## `bear change-theme THEME`

Change the selected Bear theme.

```
USAGE
  $ bear change-theme THEME

ARGUMENTS
  THEME  theme name

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window

DESCRIPTION
  Some themes may require a Bear Pro subscription.
```

_See code: [src/commands/change-theme.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/change-theme.ts)_

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
  -e, --new-window         open the note in an external window
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

## `bear delete-tag NAME`

Delete an existing tag.

```
USAGE
  $ bear delete-tag NAME

ARGUMENTS
  NAME  tag name

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window

DESCRIPTION
  This call can't be performed if the app is a locked state.
  If the tag contains any locked note this call will not be performed.
```

_See code: [src/commands/delete-tag.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/delete-tag.ts)_

## `bear grab-url URL`

Create a new note with the content of a web page.

```
USAGE
  $ bear grab-url URL

ARGUMENTS
  URL  url to grab

OPTIONS
  -h, --help     show CLI help
  -p, --pin      pin the note to the top of the list
  -t, --tag=tag  tag for note, if tags are specified in the Bear's web content prefences this parameter is ignored
  -w, --wait     if false, command returns immediately without waiting for note return value
```

_See code: [src/commands/grab-url.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/grab-url.ts)_

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

## `bear open-note [ID]`

Open a note identified by its title or id and return its content.

```
USAGE
  $ bear open-note [ID]

ARGUMENTS
  ID  note unique identifier

OPTIONS
  -c, --edit             place the cursor inside the note editor
  -c, --selected         return the note currently selected in Bear
  -e, --new-window       open the note in an external window
  -f, --float            makes the external window float on top
  -h, --help             show CLI help
  -o, --open-note        display the new note in Bear's main or external window
  -p, --pin              pin the note to the top of the list
  -s, --header=header    note title
  -t, --title=title      note title
  -w, --show-window      force the opening of bear main window
  -x, --exclude-trashed  exclude trashed notes
```

_See code: [src/commands/open-note.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/open-note.ts)_

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

## `bear rename-tag NAME NEW-NAME`

Rename an existing tag.

```
USAGE
  $ bear rename-tag NAME NEW-NAME

ARGUMENTS
  NAME      tag name
  NEW-NAME  new tag name

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window

DESCRIPTION
  This call can't be performed if the app is a locked state.
  If the tag contains any locked note this call will not be performed.
```

_See code: [src/commands/rename-tag.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/rename-tag.ts)_

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

## `bear trash [ID]`

Move a note to bear trash and select the Trash sidebar item.

```
USAGE
  $ bear trash [ID]

ARGUMENTS
  ID  note unique identifier

OPTIONS
  -h, --help           show CLI help
  -s, --search=search  string to search. search term is ignored if an id is provided.
  -w, --show-window    force the opening of bear main window

DESCRIPTION
  This call can't be performed if the app is a locked state.
  Encrypted notes can't be used with this call.
```

_See code: [src/commands/trash.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/trash.ts)_

## `bear untagged [SEARCH]`

Select the Untagged sidebar item.

```
USAGE
  $ bear untagged [SEARCH]

ARGUMENTS
  SEARCH  string to search

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window
```

_See code: [src/commands/untagged.ts](https://github.com/sloansparger/bear/blob/v0.0.0/src/commands/untagged.ts)_
<!-- commandsstop -->
