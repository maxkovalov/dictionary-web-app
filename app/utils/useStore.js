import { create } from "zustand";

const useStore = create((set) => ({
  data: null,
  isLoading: false,
  error: null,
  fetchData: async (word) => {
    set({ isLoading: true });
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
  deleteData: set({ data: null})
}));

export default useStore;