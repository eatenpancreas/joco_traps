import { writable } from 'svelte/store';

export default writable<{ username: string } | undefined>(undefined)