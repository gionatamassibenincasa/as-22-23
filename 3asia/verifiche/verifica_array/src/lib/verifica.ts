import type Studente from '$lib/studente';
import type Esercizio from '$lib/esercizio';

export interface Verifica {
	studente: Studente;
	esercizi: Array<Esercizio>;
	bozza: string;
}
