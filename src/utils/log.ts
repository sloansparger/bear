/* eslint-disable no-console */

import { Notes, NotesResponse } from "../types";

export function logNotes({ notes }: NotesResponse): void {
  const parsedNotes: Notes = JSON.parse(notes);

  parsedNotes.forEach(note => {
    console.log(
      `${note.identifier}\t${note.title}\t${note.modificationDate}\t${note.creationDate}\t${note.pin}`
    );
  });
}
