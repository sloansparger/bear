export interface Note {
  title: string;
  identifier: string;
  modificationDate: string;
  creationDate: string;
  pin: boolean;
}

export type Notes = Note[];

export interface NotesResponse {
  notes: string; // parsed result is of type Notes
}

export interface Config {
  token?: string;
}
