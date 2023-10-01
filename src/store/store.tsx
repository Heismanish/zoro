import { create } from "zustand";

type User = {
	name: string;
	email: string;
	password: string;
};

type State = {
	url: string;
	shortID: string;
	user: User;
	// isSigned: boolean;
};

type Actions = {
	updateURL: (url: State["url"]) => void;
	updateShortID: (shortID: State["shortID"]) => void;
	updateUser: (user: Partial<User>) => void; // Partial<User> allows updating only specific fields
	// updateSignedIn: (isSigned: State["isSigned"]) => void;
};

const useStore = create<State & Actions>((set) => ({
	url: "",
	shortID: "",
	user: { name: "", email: "", password: "" },
	// isSigned: false,
	updateURL: (url) => set({ url }), // No need for a function here
	updateShortID: (shortID) => set({ shortID }), // No need for a function here
	updateUser: (user) => set((state) => ({ user: { ...state.user, ...user } })), // Merge the updated fields with the existing user object
	// updateSignedIn: (isSigned) => set({ isSigned }), // No need for a function here
}));

export default useStore;
