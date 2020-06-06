/* eslint-disable no-console */

import {
  Notes,
  NoteBody,
  NotesResponse,
  NoteContents,
  FullNote,
  NoteId,
  Tags,
  TagsResponse
} from "../types";

export function logNotes({ notes }: NotesResponse): void {
  const parsedNotes: Notes = JSON.parse(notes);

  parsedNotes.forEach(note => {
    console.log(`${note.identifier}\t${note.title}`);
  });
}

export function logNoteId(noteId: NoteId) {
  console.log(noteId.identifier);
}

export function logNoteBody(noteBody: NoteBody) {
  console.log(noteBody.note);
}

export function logFullNote(fullNote: FullNote) {
  console.log(fullNote.note);
}

export function logNoteContents(noteContents: NoteContents) {
  // dont' log note title since it's included in the note
  console.log(noteContents.note);
}

export function logTags({ tags }: TagsResponse): void {
  const parsedTags: Tags = JSON.parse(tags);

  parsedTags.forEach(tag => {
    console.log(`${tag.name}`);
  });
}
