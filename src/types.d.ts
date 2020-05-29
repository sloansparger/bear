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

export interface Tag {
  name: string;
}

export type Tags = Tag[];

export interface TagsResponse {
  tags: string; // parsed result is of type Tags
}

export interface Config {
  token?: string;
}
