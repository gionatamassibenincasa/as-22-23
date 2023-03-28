import { stripHtml } from 'string-strip-html';

export interface Esercizio {
	testo: string;
	esempio?: string;
	commento?: string;
	restituzionePredefinita?: string;
	prototipo: string;
}
export const elencoEsercizi: Array<Esercizio> = [
	{
		testo: `Scrivi la funzione <code>somma</code> che accetta come argomenti un array di interi e la dimensione dell'array e restituisce la somma di tutti i valori.`,
		esempio: `<code>int A[3] = {1, 2, 3}; cout << somma(A, 3) << end;</code> stampa 6.`,
		prototipo: `int somma (int A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>inverti</code> he accetta come argomenti un array di interi e la dimensione dell'array e inverte sul posto l'array.`,
		esempio: `<code>int A[3] = {1, 2, 3}; inverti(A, 3); stampa(A, 3);</code> stampa {3, 2, 1}`,
		prototipo: `void inverti (int A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>tuttiPari</code> he accetta come argomenti un array di interi e la dimensione dell'array e restituisce <code>true</code> se tutti gli elementi dell'array sono pari.`,
		esempio: `<code>int A[3] = {0, 2, 8}; if (tuttiPari(A, 3)) cout << "Tutti pari";</code> stampa <em>Tutti pari</em>.`,
		prototipo: `bool tuttiPari (int A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>media</code> che accetta come argomenti un array di numeri double e la dimensione dell'array e restituisce la media aritmetica dei valori.`,
		esempio: `<code>int A[3] = {1., 2., 3.}; cout << media(A, 3);</code> stampa 2.`,
		prototipo: `double media (double A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>sommaPari</code> che accetta come argomenti un array di interi e la dimensione dell'array e restituisce la somma dei numeri pari.`,
		prototipo: `int sommaPari (int A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>sommaDispari</code> che accetta come argomenti un array di interi e la dimensione dell'array e restituisce la somma dei numeri dispari.`,
		prototipo: `int sommaDispari (int A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>numeroElementiMulipliDiTre</code> che accetta come argomenti un array di interi e la dimensione dell'array e restituisce il numero di elementi multipli di tre nell'array.`,
		prototipo: `int numeroElementiMulipliDiTre(int A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>trovaMax</code> che accetta come argomenti un array di interi e la dimensione dell'array e restituisce il valore massimo.`,
		prototipo: `int trovaMax(int A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>trovaMin</code> che accetta come argomenti un array di interi e la dimensione dell'array e restituisce il valore minimo.`,
		prototipo: `int trovaMin(int A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>ordinaCrescente</code> che accetta come argomenti un array di double e la dimensione dell'array e ordina l'array sul posto in ordine crescente.`,
		prototipo: `void ordinaCrescente(double A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>ordinaDecrescente</code> che accetta come argomenti un array di float e la dimensione dell'array e ordina l'array sul posto in ordine decrescente.`,
		prototipo: `void ordinaDecrescente(float A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>sommaValoriIndicePari</code> che accetta come argomenti un array di interi e la dimensione dell'array e restituisce la somma dei valori presenti in posizione di indice pari.`,
		prototipo: `int sommaValoriIndicePari(int A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>sommaValoriIndiceDispari</code> che accetta come argomenti un array di numeri double e restituisce la somma dei valori presenti in posizione di indice dispari.`,
		prototipo: `double sommaValoriIndiceDispari(double A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>contaOccorrenze</code> che accetta come argomenti un array di interi, la dimensione dell'array e un valore di ricerca, e restituisce il numero di volte che il valore di ricerca compare nell'array.`,
		prototipo: `int contaOccorrenze(int A, int n, int v)`
	},
	{
		testo: `Scrivi la funzione <code>sommaInPosizioni</code> che accetta come argomenti un array di numeri, il numero di elementi, un secondo array con elementi tra 0 e la lunghezza del primo array, la lunghezza del secondo array e restituisce la somma dei valori del primo array nelle posizioni specificate dal secondo array.`,
		prototipo: `int sommaInPosizioni(int A[], int nA, int P, int nP)`
	},
	{
		testo: `Scrivi la funzione <code>trovaValore</code> che accetta come argomenti un array di numeri, la dimensione dell'array e un valore, e restituisce la posizione in cui trova la prima occorrenza del valore oppure -1.`,
		prototipo: `int trovaValore(int A[], int n, int v)`
	},
	{
		testo: `Scrivi la funzione <code>mappaQuadrato</code> che accetta come argomenti un array di numeri interi e la dimensione, e aggiorna i valori dell'array sostituendoli con i loro quadrati`,
		prototipo: `void mappaQuadrato(int A[], int n)`
	},
	{
		testo: `Scrivi la funzione <code>mappaCubo</code> che accetta come argomenti un array di numeri interi e la dimensione, e aggiorna i valori dell'array sostituendoli con i loro cubi`,
		prototipo: `void mappaCubo(int A[], int n)`
	}
];

function shuffe(a: Array<any>): Array<any> {
	let currentIndex = a.length,
		randomIndex;
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[a[currentIndex], a[randomIndex]] = [a[randomIndex], a[currentIndex]];
	}
	return a;
}

export function generaElencoDomande(numeroDomande: number): Array<Esercizio> {
	const copiaDomande: Array<Esercizio> = structuredClone(elencoEsercizi);
	const eserciziCausali: Array<Esercizio> = shuffe(copiaDomande).slice(0, numeroDomande);
	const reTipoRestituitoZero = /^(int)|(float)|(double)\s/;
	const reTipoRestituitoFalso = /^(bool)\s/;
	// aggiunge la riga di commento
	eserciziCausali.forEach((e) => {
		e.commento = stripHtml(e.testo).result;
		// aggiunge l'istruzione 'return' predefinita, se necessario
		if (reTipoRestituitoZero.test(e.prototipo)) e.restituzionePredefinita = 'return 0;';
		else if (reTipoRestituitoFalso.test(e.prototipo)) e.restituzionePredefinita = 'return false;';
	});
	return eserciziCausali;
}
