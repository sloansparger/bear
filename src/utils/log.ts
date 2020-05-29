/* eslint-disable no-console */

import {
  Notes,
  NotesResponse,
  FullNote,
  NoteId,
  Tags,
  TagsResponse
} from "../types";

export function logNotes({ notes }: NotesResponse): void {
  const parsedNotes: Notes = JSON.parse(notes);

  parsedNotes.forEach(note => {
    console.log(
      `${note.identifier}\t${note.title}\t${note.modificationDate}\t${note.creationDate}\t${note.pin}`
    );
  });
}

export function logNoteId(noteId: NoteId) {
  console.log(`${noteId.identifier}\t${noteId.title}`);
}

export function logFullNote(fullNote: FullNote) {
  console.log(fullNote);
}

export function logTags({ tags }: TagsResponse): void {
  const parsedTags: Tags = JSON.parse(tags);

  parsedTags.forEach(tag => {
    console.log(`${tag.name}`);
  });
}
