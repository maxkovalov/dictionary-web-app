import { create } from "zustand";

const useStore = create((set) => ({
  word: null,
  setWord: (word) => set(() => ({ word: word})),
  data: null,
  isLoading: false,
  error: null,
  fetchData: async (word) => {
    set({ isLoading: true, word: word });
    try {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
    //   if (!res.ok) {
    //     throw new Error(res.statusText);
    //   }
      set({ data: await res.json(), isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useStore;