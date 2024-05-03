import { create } from "zustand";

interface KeywordStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useKeywordStore = create<KeywordStore>((set, _) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
