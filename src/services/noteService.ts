import axios from "axios";
import type { AxiosResponse } from "axios";
import type { NewNote, Note } from "../types/note";

const noteApi = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
});

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes({
  page,
  perPage,
  search,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const response: AxiosResponse<FetchNotesResponse> = await noteApi.get(
    "/notes",
    {
      params: {
        page,
        perPage,
        ...(search ? { search } : {}),
      },
    },
  );

  return response.data;
}

export async function createNote(note: NewNote): Promise<Note> {
  const response: AxiosResponse<Note> = await noteApi.post("/notes", note);

  return response.data;
}

export async function deleteNote(id: Note["id"]): Promise<Note> {
  const response: AxiosResponse<Note> = await noteApi.delete(`/notes/${id}`);

  return response.data;
}
