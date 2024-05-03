import { create } from "zustand";
import type { Paper } from "../types";

interface PapersStore {
  papers: Paper[];
  setPapers: (papers: Paper[]) => void;
}

export const usePapersStore = create<PapersStore>((set, _) => ({
  papers: [],
  setPapers: (papers) => set({ papers }),
}));
