/* eslint-disable no-console */

import { Notes, NotesResponse, Tags, TagsResponse } from "../types";

export function logNotes({ notes }: NotesResponse): void {
  const parsedNotes: Notes = JSON.parse(notes);

  parsedNotes.forEach(note => {
    console.log(
      `${note.identifier}\t${note.title}\t${note.modificationDate}\t${note.creationDate}\t${note.pin}`
    );
  });
}

export function logTags({ tags }: TagsResponse): void {
  const parsedTags: Tags = JSON.parse(tags);

  parsedTags.forEach(tag => {
    console.log(`${tag.name}`);
  });
}
