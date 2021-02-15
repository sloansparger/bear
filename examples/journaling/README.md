# Journaling
This one-liner (run in this folder..) will automatically make a template with date of today:

`sed "s#<date>#$( date +"%d/%m/%Y")#" templates/journaling.md | bear create`

You can also run this when logging in (that’s what I do):

Just add the `journaling.cmd` file to System Preferences > Accounts > Login item

Happy Journaling!

## TODO
- [ ] check if note of the day doesn’t exist yet, before creating
- [ ] change the title to more descriptive date. (keep the / for categorising)
