import { writable } from 'svelte/store';

export const studenteStore = writable('');

export const quesitiStore = writable([]);

export const generatoStore = writable(false);

// export const sorted = derived(todos_, (todos_) => sortBy(todos_, 'checkboxed'))
