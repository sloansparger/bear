[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@sloansparger/bear.svg)](https://npmjs.org/package/@sloansparger/bear)
[![Downloads/week](https://img.shields.io/npm/dw/@sloansparger/bear.svg)](https://npmjs.org/package/@sloansparger/bear)
[![License](https://img.shields.io/npm/l/@sloansparger/bear.svg)](https://github.com/sloansparger/@sloansparger/bear/blob/master/package.json)

![](https://user-images.githubusercontent.com/7104357/83909151-1cf61180-a71d-11ea-81ab-2a250ed2ef1b.png)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

```sh-session
$ npm install -g @sloansparger/bear
$ bear auth API_TOKEN # Enter your Bear API token
$ bear autocomplete # Install CLI autocompletion
$ bear COMMAND
running command...
$ bear --help [COMMAND]
...
$ bear update
```

# Commands

<!-- commands -->
* [`bear add-file [FILE]`](#bear-add-file-file)
* [`bear add-text [TEXT]`](#bear-add-text-text)
* [`bear archive [ID]`](#bear-archive-id)
* [`bear auth API-TOKEN`](#bear-auth-api-token)
* [`bear autocomplete [SHELL]`](#bear-autocomplete-shell)
* [`bear change-font [FONT]`](#bear-change-font-font)
* [`bear change-theme [THEME]`](#bear-change-theme-theme)
* [`bear commands`](#bear-commands)
* [`bear create [TEXT]`](#bear-create-text)
* [`bear delete-tag [NAME]`](#bear-delete-tag-name)
* [`bear grab-url [URL]`](#bear-grab-url-url)
* [`bear help [COMMAND]`](#bear-help-command)
* [`bear locked [SEARCH]`](#bear-locked-search)
* [`bear open-note [ID]`](#bear-open-note-id)
* [`bear open-tag [NAME]`](#bear-open-tag-name)
* [`bear rename-tag NAME [NEW-NAME]`](#bear-rename-tag-name-new-name)
* [`bear search [TERM]`](#bear-search-term)
* [`bear tags`](#bear-tags)
* [`bear today [SEARCH]`](#bear-today-search)
* [`bear todo [SEARCH]`](#bear-todo-search)
* [`bear trash [ID]`](#bear-trash-id)
* [`bear untagged [SEARCH]`](#bear-untagged-search)
* [`bear update [CHANNEL]`](#bear-update-channel)

## `bear add-file [FILE]`

Append or prepend a file to a note identified by its title or id.

```
USAGE
  $ bear add-file [FILE]

ARGUMENTS
  FILE  path to file you want to add

OPTIONS
  -c, --edit                                     place the cursor inside the note editor
  -e, --new-window                               open the note in an external window
  -h, --help                                     show CLI help
  -i, --id=id                                    note unique identifier
  -j, --filename=filename                        override file name including extension

  -m, --mode=prepend|append|replace|replace_all  [default: append] the allowed values are prepend, append, replace_all
                                                 and replace (keep the note's title untouched)

  -n, --title=title                              note title

  -o, --open-note                                display the new note in Bear's main or external window

  -u, --header=header                            note title

  -w, --show-window                              force the opening of bear main window

DESCRIPTION
  This call can't be performed if the app is a locked state.
  Encrypted notes can't be accessed with this call.
  Returns note's contents.
```

_See code: [src/commands/add-file.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/add-file.ts)_

## `bear add-text [TEXT]`

Append or prepend text to a note identified by its title or id.

```
USAGE
  $ bear add-text [TEXT]

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

  -n, --title=title                              note title

  -o, --open-note                                display the new note in Bear's main or external window

  -t, --tag=tag                                  tag for note

  -u, --header=header                            note title

  -w, --show-window                              force the opening of bear main window

  -x, --exclude-trashed                          exclude trashed notes

DESCRIPTION
  Beta encrypted notes can't be accessed with this call.
  Returns note's contents.
```

_See code: [src/commands/add-text.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/add-text.ts)_

## `bear archive [ID]`

Move a note to bear archive and select the Archive sidebar item.

```
USAGE
  $ bear archive [ID]

ARGUMENTS
  ID  note unique identifier

OPTIONS
  -h, --help           show CLI help
  -s, --search=search  string to search. search term is ignored if an id is provided.
  -w, --show-window    force the opening of bear main window

DESCRIPTION
  This call can't be performed if the app is a locked state.
  Encrypted notes can't be accessed with this call.
```

_See code: [src/commands/archive.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/archive.ts)_

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

_See code: [src/commands/auth.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/auth.ts)_

## `bear autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ bear autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ bear autocomplete
  $ bear autocomplete bash
  $ bear autocomplete zsh
  $ bear autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.2.0/src/commands/autocomplete/index.ts)_

## `bear change-font [FONT]`

Change the selected Bear Font.

```
USAGE
  $ bear change-font [FONT]

ARGUMENTS
  FONT  font name

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window
```

_See code: [src/commands/change-font.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/change-font.ts)_

## `bear change-theme [THEME]`

Change the selected Bear theme.

```
USAGE
  $ bear change-theme [THEME]

ARGUMENTS
  THEME  theme name

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window

DESCRIPTION
  Some themes may require a Bear Pro subscription.
```

_See code: [src/commands/change-theme.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/change-theme.ts)_

## `bear commands`

list all the commands

```
USAGE
  $ bear commands

OPTIONS
  -h, --help  show CLI help
  -j, --json  output in json format
  --hidden    also show hidden commands
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.2.3/src/commands/commands.ts)_

## `bear create [TEXT]`

Create a new note. Empty notes are not allowed.

```
USAGE
  $ bear create [TEXT]

ARGUMENTS
  TEXT  note body

OPTIONS
  -a, --file=file          path to a file attachment
  -c, --edit               place the cursor inside the note editor
  -d, --timestamp          prepend the current date and time to the text
  -e, --new-window         open the note in an external window
  -h, --help               show CLI help
  -j, --filename=filename  override file name including extension
  -n, --title=title        note title
  -o, --open-note          display the new note in Bear's main or external window
  -p, --pin                pin the note to the top of the list
  -t, --tag=tag            tag for note
  -w, --show-window        force the opening of bear main window

DESCRIPTION
  Returns unique note identifier of new note.
```

_See code: [src/commands/create.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/create.ts)_

## `bear delete-tag [NAME]`

Delete an existing tag.

```
USAGE
  $ bear delete-tag [NAME]

ARGUMENTS
  NAME  tag name

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window

DESCRIPTION
  This call can't be performed if the app is a locked state.
  If the tag contains any locked note this call will not be performed.
```

_See code: [src/commands/delete-tag.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/delete-tag.ts)_

## `bear grab-url [URL]`

Create a new note with the content of a web page.

```
USAGE
  $ bear grab-url [URL]

ARGUMENTS
  URL  url to grab

OPTIONS
  -h, --help     show CLI help
  -p, --pin      pin the note to the top of the list
  -t, --tag=tag  tag for note, if tags are specified in the Bear's web content prefences this parameter is ignored
  -z, --wait     if false, command returns immediately without waiting for note return value

DESCRIPTION
  Returns unique note identifier of new note.
```

_See code: [src/commands/grab-url.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/grab-url.ts)_

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

_See code: [src/commands/locked.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/locked.ts)_

## `bear open-note [ID]`

Fetch a note identified by its title or id.

```
USAGE
  $ bear open-note [ID]

ARGUMENTS
  ID  note unique identifier

OPTIONS
  -c, --edit             place the cursor inside the note editor
  -e, --new-window       open the note in an external window
  -f, --float            makes the external window float on top
  -h, --help             show CLI help
  -k, --selected         return the note currently selected in Bear
  -n, --title=title      note title
  -o, --open-note        display the new note in Bear's main or external window
  -p, --pin              pin the note to the top of the list
  -u, --header=header    note title
  -w, --show-window      force the opening of bear main window
  -x, --exclude-trashed  exclude trashed notes
  -y, --token=token      [default: 493C02-3A08BB-D7BA51] bear api token. defaults to api key provided to auth command.

DESCRIPTION
  Returns the matched note's contents.
```

_See code: [src/commands/open-note.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/open-note.ts)_

## `bear open-tag [NAME]`

Fetch all the notes which have a selected tag in bear.

```
USAGE
  $ bear open-tag [NAME]

ARGUMENTS
  NAME  tag name

OPTIONS
  -h, --help         show CLI help
  -y, --token=token  [default: 493C02-3A08BB-D7BA51] bear api token. defaults to api key provided to auth command.

DESCRIPTION
  Returns list of unique note identifiers and note titles.
```

_See code: [src/commands/open-tag.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/open-tag.ts)_

## `bear rename-tag NAME [NEW-NAME]`

Rename an existing tag.

```
USAGE
  $ bear rename-tag NAME [NEW-NAME]

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

_See code: [src/commands/rename-tag.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/rename-tag.ts)_

## `bear search [TERM]`

Fetch search results from Bear for all notes or for a specific tag.

```
USAGE
  $ bear search [TERM]

ARGUMENTS
  TERM  string to search

OPTIONS
  -h, --help         show CLI help
  -t, --tag=tag      tag to search into
  -w, --show-window  force the opening of bear main window
  -y, --token=token  [default: 493C02-3A08BB-D7BA51] bear api token. defaults to api key provided to auth command.

DESCRIPTION
  Returns list of unique note identifiers and note titles.
```

_See code: [src/commands/search.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/search.ts)_

## `bear tags`

Fetch all the tags currently displayed in Bear's sidebar.

```
USAGE
  $ bear tags

OPTIONS
  -h, --help         show CLI help

  -y, --token=token  (required) [default: 493C02-3A08BB-D7BA51] bear api token. defaults to api key provided to auth
                     command.

DESCRIPTION
  Returns list of tag names.
```

_See code: [src/commands/tags.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/tags.ts)_

## `bear today [SEARCH]`

Fetch all notes in the Today sidebar item.

```
USAGE
  $ bear today [SEARCH]

ARGUMENTS
  SEARCH  string to search

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window
  -y, --token=token  [default: 493C02-3A08BB-D7BA51] bear api token. defaults to api key provided to auth command.

DESCRIPTION
  Returns list of unique note identifiers and note titles.
  NOTE: this feature doesn't currently work as expected.
  BUG: There's an issue with bear that causes notes that match search not in Today to be returned.
  BUG: There's an issue where fetching Today's notes causes bear to hold process open.
```

_See code: [src/commands/today.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/today.ts)_

## `bear todo [SEARCH]`

Fetch all notes in the Todo sidebar item.

```
USAGE
  $ bear todo [SEARCH]

ARGUMENTS
  SEARCH  string to search

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window
  -y, --tokne=tokne  [default: 493C02-3A08BB-D7BA51] bear api token. defaults to api key provided to auth command.

DESCRIPTION
  Returns list of unique note identifiers and note titles.
  BUG: There's an issue with bear that causes notes that match search with no Todo's to be returned.
```

_See code: [src/commands/todo.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/todo.ts)_

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

_See code: [src/commands/trash.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/trash.ts)_

## `bear untagged [SEARCH]`

Fetch all notes in the Untagged sidebar item.

```
USAGE
  $ bear untagged [SEARCH]

ARGUMENTS
  SEARCH  string to search

OPTIONS
  -h, --help         show CLI help
  -w, --show-window  force the opening of bear main window
  -y, --token=token  [default: 493C02-3A08BB-D7BA51] bear api token. defaults to api key provided to auth command.

DESCRIPTION
  Returns list of unique note identifiers and note titles.
```

_See code: [src/commands/untagged.ts](https://github.com/sloansparger/bear/blob/v0.1.1/src/commands/untagged.ts)_

## `bear update [CHANNEL]`

update the bear CLI

```
USAGE
  $ bear update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.10/src/commands/update.ts)_
<!-- commandsstop -->
