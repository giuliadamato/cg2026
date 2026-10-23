export type Ambientazione = 'INT' | 'EST' | 'INT/EST';

export interface InspoFile {
  id: string;
  name: string;
  type: 'image' | 'audio' | 'video' | 'document';
  url: string;
}

export interface Scene {
  id: number;
  number: number;
  title: string;
  setting: Ambientazione;
  location: string;
  durationMinutes: number;
  actors: string[];
  characters: string[];
  keywords: string[];
  colorTag: string;
  description: string;
  mediaFiles: InspoFile[];
}