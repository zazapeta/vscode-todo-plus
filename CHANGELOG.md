### Version 2.3.0
- Added breadcrumb support
- Embedded: fixed support for CRLF mode

### Version 2.2.1
- Embedded: added support for AppleScript-like style comments

### Version 2.2.0
- Added support for the new “Outline” view

### Version 2.1.4
- Embedded: fixed support for folders and files names containing special characters

### Version 2.1.3
- Fixed the `todo.statistics.statusbar.ignoreArchive` setting

### Version 2.1.2
- Symbols: improved indentation
- Statistics: ensuring all instances of each token get replaced

### Version 2.1.1
- Readme: documented `Toggle Timer` command
- Ensuring only non-preview editors get opened

### Version 2.1.0
- Statistics: ensuring the statusbar item gets hidden when there are no files open
- Replaced `Todo: Start` with `Todo: Toggle Start`
- Estimate tag: improved regex
- Added a timer for started todos
- Added a `Todo: Toggle Timer` command

### Version 2.0.2
- Embedded: removed todos counter in favor of project-level statistics
- Statistics: fixed a typo

### Version 2.0.1
- Statistics: added a `[tags]` token
- Archive: avoiding creating it if there’s nothing to write in it
- Improved support for tagging projects

### Version 2.0.0
- Major refactoring
- Substantial performance improvements
- Removed support for triple-backticks code blocks
- Removed support for tags inside code blocks
- Symbols: showing also the parent symbol
- Archive: added an option for removing empty projects
- Archive: added an option for removing extra empty lines
- Statistics: added support for a JS expression as the `enabled` condition
- Statistics: added a `[comments]` token
- Statistics: added a `[projects]` token
- Statistics: improved support for `\t` as the indentation character
- Settings: renamed `todo.symbols.cancel` to `todo.symbols.cancelled`
- Settings: renamed `todo.colors.cancel` to `todo.colors.cancelled`
- Commands: renamed `todo.toggleCancel` to `todo.toggleCancelled`

### Version 1.18.2
- Project decorations: ensuring they get cleared when there are no more projects
- Fixed a regression when removing tags

### Version 1.18.1
- Supporting interacting with all support-but-not-setted symbols
- Performance improvements

### Version 1.18.0
- Readme: better separation between supported symbols
- Readme: improved embedded todos description
- Added some settings for disabling writing the time in `@created/started/done/cancelled`
- Considering any todo with `@done` or `@cancelled` as finished
- Project statistics: showing pending todos by default
- Added support for using the same symbol for everything
- Now compatible with TaskPaper

### Version 1.17.0
- Using `RegExp#test` instead of `String#match` whenever possible
- Added some date-diffing-related utilities
- Added an option for setting the time format inside `@lasted/wasted`
- Added support for time estimates

### Version 1.16.0
- Added a couple of settings for customizing the `@project` tag
- Added project-level statistics

### Version 1.15.0
- Archive: added a `@project` tag

### Version 1.14.0
- Archive: archiving comments too

### Version 1.13.1
- Improved tag removal logic
- Preserving cursors positions

### Version 1.13.0
- Statistics: simplified tokens retrieval logic
- Added a `Go to Symbol` provider

### Version 1.12.0
- Added some statistics to the statusbar

### Version 1.11.1
- Fixed a regression regarding toggling indented todos

### Version 1.11.0
- Timekeeping: added support for a @created tag
- Requiring a whitespace character after symbols

### Version 1.10.7
- Removed `todo.embedded.limit` setting
- Emebedded: filtering out `**/third_party` by default too

### Version 1.10.6
- Embedded: showing a counter of todos under each type

### Version 1.10.5
- Updated `todo.embedded.regex`, adding support for todos inside HTML-style comments

### Version 1.10.4
- Added support for `[]` as a box symbol

### Version 1.10.3
- Recommending the [Highlight](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-highlight) extension
- Embedded: improved support for things like “//TODO”

### Version 1.10.2
- Readme: updated `todo.embedded.regex`
- Updated `todo.file` description

### Version 1.10.1
- Added support for embedded todos without a description
- Embedded todos: fixed links to files in Windows

### Version 1.10.0
- Recognizing a few more embedded todos

### Version 1.9.1
- Updated readme

### Version 1.9.0
- Tags: removed restriction for the `_` character
- Added support for embedded todos

### Version 1.8.3
- Added taskpaper to the keywords
- Reordered keywords

### Version 1.8.1
- README: specify plugin author on install command
- Restricting single backtick codes to a single line
- Added support for special tags with arguments

### Version 1.8.0
- Added very basic support for TaskPaper

### Version 1.7.2
- Updated readme

### Version 1.7.1
- Properly getting the path of the currently active document

### Version 1.7.0
- Added basic `Archive` functionalities
- Added `Timekeeping` functionalities
- Todo: fixed toggling of line containing only `☐`
- Readme: linked `Demo` to the actual demo todo

### Version 1.6.1
- Added support for comments starting with a double dash
- Ensuring projects inside a code block don’t get decorated
- Added triple backticks (```) code blocks supports

### Version 1.6.0
- Added support for code blocks
- Reduced probability that formatting is applied where not intended

### Version 1.5.3
- Fixed multi-cursor support

### Version 1.5.2
- Replaced `resourceLangId` with `editorLangId`

### Version 1.5.1
- Ensuring most emails are not recognized as tags

### Version 1.5.0
- Improved support for comments containing commas and tags
- Added `X` and `[X]` to the supported symbols
- Ensuring special tags are not confused with normal tags starting with the same characters
- Added support for tags inside todos and comments
- Fixed a Windows incompatibility

### Version 1.4.0
- Added 3 commands to the command palette
- Running keybindings only when editing a todo file
- Fixed tags completion
- Added an option for disabling markdown-like formatting

### Version 1.3.2
- Updated readme

### Version 1.3.1
- Fixed a regex

### Version 1.3.0
- Added multi-root support

### Version 1.2.2
- Added support for "⬜" as a box symbol

### Version 1.1.2
- Added a link to Projects+ Todo+

### Version 1.1.1
- Minor code reorganization

### Version 1.0.1
- Ensuring leading spaces won’t get decorated
- Updated readme

### Version 1.0.0
- Initial release
