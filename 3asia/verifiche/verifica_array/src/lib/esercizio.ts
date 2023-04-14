import { stripHtml } from 'string-strip-html';

export interface Esercizio {
	testo: string;
	esempio?: string;
	commento?: string;
	restituzionePredefinita?: string;
	prototipo: string;
	soluzione?: string;
}
export const elencoEsercizi: Array<Esercizio> = [
	{
		testo: `Scrivi la funzione <code>somma</code> che accetta come argomenti un array di interi<br />
 e la dimensione dell'array e restituisce la somma di tutti i  valori.`,
		esempio: `<code>int A[3] = {1, 2, 3}; cout << somma(A, 3) << end;</code> stampa 6.`,
		prototipo: `int somma (int A[], int n)`,
		soluzione: `/**
 * @brief Restituisce la somma degli elementi di un array di interi.
 * @param A Array di interi.
 * @param n Dimensione dell'array.
 * @return Somma degli elementi.
 */
int somma(int A[], int n) {
    int somma = 0;
    for (int i = 0; i < n; i++) {
        somma += A[i];
    }
    return somma;
}`
	},
	{
		testo: `Scrivi la funzione <code>inverti</code> he accetta come argomenti un array di interi<br />
 e la dimensione dell'array e inverte sul posto l'array.`,
		esempio: `<code>int A[3] = {1, 2, 3}; inverti(A, 3); stampa(A, 3);</code> stampa {3, 2, 1}`,
		prototipo: `void inverti (int A[], int n)`,
		soluzione: `/**
 * @brief Inverte l'ordine degli elementi di un array di interi.
 * @param A Array di interi.
 * @param n Dimensione dell'array.
 */
void inverti(int A[], int n) {
    for (int i = 0; i < n / 2; i++) {
        std::swap(A[i], A[n - i - 1]);
    }
}
`
	},
	{
		testo: `Scrivi la funzione <code>tuttiPari</code> he accetta come argomenti un array di interi<br />
 e la dimensione dell'array e restituisce <code>true</code> se tutti gli elementi dell'array sono pari.`,
		esempio: `<code>int A[3] = {0, 2, 8}; if (tuttiPari(A, 3)) cout << "Tutti pari";</code> stampa <em>Tutti pari</em>.`,
		prototipo: `bool tuttiPari (int A[], int n)`,
		soluzione: `/**
 * @brief Restituisce true se tutti gli elementi di un array di interi sono pari.
 * @param A Array di interi.
 * @param n Dimensione dell'array.
 * @return true se tutti gli elementi sono pari, false altrimenti.
 */
bool tuttiPari(int A[], int n) {
    for (int i = 0; i < n; i++) {
        if (A[i] % 2 != 0) {
            return false;
        }
    }
    return true;
}
`
	},
	{
		testo: `Scrivi la funzione <code>media</code> che accetta come argomenti un array di numeri double<br />
 e la dimensione dell'array e restituisce la media aritmetica dei valori.`,
		esempio: `<code>int A[3] = {1., 2., 3.}; cout << media(A, 3);</code> stampa 2.`,
		prototipo: `double media (double A[], int n)`,
		soluzione: `/**
 * @brief Restituisce la media degli elementi di un array di double.
 * @param A Array di double.
 * @param n Dimensione dell'array.
 * @return Media degli elementi.
 */
double media(double A[], int n) {
    double somma = 0;
    for (int i = 0; i < n; i++) {
        somma += A[i];
    }
    return somma / n;
}
`
	},
	{
		testo: `Scrivi la funzione <code>sommaPari</code> che accetta come argomenti un array di interi<br />
 e la dimensione dell'array e restituisce la somma dei numeri pari.`,
		prototipo: `int sommaPari (int A[], int n)`,
		soluzione: `/**
 * @brief Restituisce la somma degli elementi pari di un array di interi.
 * @param A Array di interi.
 * @param n Dimensione dell'array.
 * @return Somma degli elementi pari.
 */
int sommaPari(int A[], int n) {
    int somma = 0;
    for (int i = 0; i < n; i++) {
        if (A[i] % 2 == 0) {
            somma += A[i];
        }
    }
    return somma;
}
`
	},
	{
		testo: `Scrivi la funzione <code>sommaDispari</code> che accetta come argomenti un array di interi<br />
 e la dimensione dell'array e restituisce la somma dei numeri dispari.`,
		prototipo: `int sommaDispari (int A[], int n)`,
		soluzione: `/**
 * @brief Restituisce la somma degli elementi dispari di un array di interi.
 * @param A Array di interi.
 * @param n Dimensione dell'array.
 * @return Somma degli elementi dispari.
 */
int sommaDispari(int A[], int n) {
    int somma = 0;
    for (int i = 0; i < n; i++) {
        if (A[i] % 2 != 0) {
            somma += A[i];
        }
    }
    return somma;
}
`
	},
	{
		testo: `Scrivi la funzione <code>numeroElementiMulipliDiTre</code> che accetta come argomenti un array di interi<br />
 e la dimensione dell'array e restituisce il numero di elementi multipli di tre nell'array.`,
		prototipo: `int numeroElementiMulipliDiTre(int A[], int n)`,
		soluzione: `/**
* @brief Restituisce il numero di elementi multipli di tre nell'array.
* 
* @param A Array di interi.
* @param n Dimensione dell'array.
* @return Il numero di elementi multipli di tre.
*/
int numeroElementiMulipliDiTre(int A[], int n) {
    int count = 0; // inizializza il contatore a 0
    for (int i = 0; i < n; i++) { // cicla sull'array
        if (A[i] % 3 == 0) { // se l'elemento è multiplo di 3
            count++; // incrementa il contatore
        }
    }
    return count; // restituisce il numero di elementi multipli di 3
}
`
	},
	{
		testo: `Scrivi la funzione <code>trovaMax</code> che accetta come argomenti un array di interi e la dimensione<br />
 dell'array e restituisce il valore massimo.`,
		prototipo: `int trovaMax(int A[], int n)`,
		soluzione: `/**
* @brief Restituisce il valore massimo dell'array.
* 
* @param A Array di interi.
* @param n Dimensione dell'array.
* @return Il valore massimo dell'array.
*/
int trovaMax(int A[], int n) {
    int max = A[0]; // inizializza il massimo al primo elemento dell'array
    for (int i = 1; i < n; i++) { // cicla sull'array dal secondo elemento
        if (A[i] > max) { // se l'elemento è maggiore del massimo
            max = A[i]; // assegna all'elemento il nuovo massimo
        }
    }
    return max; // restituisce il valore massimo dell'array
}
`
	},
	{
		testo: `Scrivi la funzione <code>trovaMin</code> che accetta come argomenti un array di interi e la dimensione<br />
 dell'array e restituisce il valore minimo.`,
		prototipo: `int trovaMin(int A[], int n)`,
		soluzione: `/**
* @brief Restituisce il valore minimo dell'array.
* 
* @param A Array di interi.
* @param n Dimensione dell'array.
* @return Il valore minimo dell'array.
*/
int trovaMin(int A[], int n) {
    int min = A[0]; // inizializza il minimo al primo elemento dell'array
    for (int i = 1; i < n; i++) { // cicla sull'array dal secondo elemento
        if (A[i] < min) { // se l'elemento è minore del minimo
            min = A[i]; // assegna all'elemento il nuovo minimo
        }
    }
    return min; // restituisce il valore minimo dell'array
}
`
	},
	{
		testo: `Scrivi la funzione <code>ordinaCrescente</code> che accetta come argomenti un array di double e la dimensione<br />
 dell'array e ordina l'array sul posto in ordine crescente.`,
		prototipo: `void ordinaCrescente(double A[], int n)`,
		soluzione: `/**
* @brief Ordina l'array sul posto in ordine crescente. Bubble sort
* 
* @param A Array di double.
* @param n Dimensione dell'array.
*/
void ordinaCrescente(double A[], int n) {
    for (int i = 0; i < n - 1; i++) { // cicla sull'array fino al penultimo elemento
        for (int j = i + 1; j < n; j++) { // cicla sull'array dal successivo all'elemento corrente
            if (A[j] < A[i]) { // se l'elemento successivo è minore del corrente
                double temp = A[i]; // scambia gli elementi
                A[i] = A[j];
                A[j] = temp;
            }
        }
    }
}
`
	},
	{
		testo: `Scrivi la funzione <code>ordinaDecrescente</code> che accetta come argomenti un array di float e la dimensione<br />
 dell'array e ordina l'array sul posto in ordine decrescente.`,
		prototipo: `void ordinaDecrescente(float A[], int n)`,
		soluzione: `/**
 * @brief Ordina l'array in ordine decrescente
 * 
 * @param A L'array di float da ordinare
 * @param n La dimensione dell'array
 */
void ordinaDecrescente(float A[], int n) {
    // Ordina l'array con l'algoritmo di ordinamento bubblesort
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (A[j] < A[j + 1]) {
                // Scambia gli elementi
                float temp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = temp;
            }
        }
    }
}
`
	},
	{
		testo: `Scrivi la funzione <code>sommaValoriIndicePari</code> che accetta come argomenti un array di interi e la dimensione<br />
 dell'array e restituisce la somma dei valori presenti in posizione di indice pari.`,
		prototipo: `int sommaValoriIndicePari(int A[], int n)`,
		soluzione: `/**
 * @brief Calcola la somma dei valori presenti in posizione di indice pari
 * 
 * @param A L'array di interi
 * @param n La dimensione dell'array
 * @return int La somma dei valori in posizione di indice pari
 */
int sommaValoriIndicePari(int A[], int n) {
    int somma = 0;
    // Calcola la somma dei valori in posizione di indice pari
    for (int i = 0; i < n; i += 2) {
        somma += A[i];
    }
    return somma;
}
`
	},
	{
		testo: `Scrivi la funzione <code>sommaValoriIndiceDispari</code> che accetta come argomenti un array di numeri double e<br />
 restituisce la somma dei valori presenti in posizione di indice dispari.`,
		prototipo: `double sommaValoriIndiceDispari(double A[], int n)`,
		soluzione: `/**
 * @brief Calcola la somma dei valori presenti in posizione di indice dispari
 * 
 * @param A L'array di numeri double
 * @param n La dimensione dell'array
 * @return double La somma dei valori in posizione di indice dispari
 */
double sommaValoriIndiceDispari(double A[], int n) {
    double somma = 0;
    // Calcola la somma dei valori in posizione di indice dispari
    for (int i = 1; i < n; i += 2) {
        somma += A[i];
    }
    return somma;
}
`
	},
	{
		testo: `Scrivi la funzione <code>contaOccorrenze</code> che accetta come argomenti un array di interi, la dimensione dell'array<br />
 e un valore di ricerca, e restituisce il numero di volte che il valore di ricerca compare nell'array.`,
		prototipo: `int contaOccorrenze(int A, int n, int v)`,
		soluzione: `/**
 * @brief Conta il numero di volte che il valore di ricerca compare nell'array
 * 
 * @param A L'array di interi
 * @param n La dimensione dell'array
 * @param v Il valore di ricerca
 * @return Il numero di volte che il valore di ricerca compare nell'array
 */
int contaOccorrenze(int A[], int n, int v) {
    int count = 0;
    // Conta il numero di volte che il valore di ricerca compare nell'array
    for (int i = 0; i < n; i++) {
        if (A[i] == v) {
            count++;
        }
    }
    return count;
}
`
	},
	{
		testo: `Scrivi la funzione <code>sommaInPosizioni</code> che accetta come argomenti un array di numeri, il numero di elementi,<br />
 un secondo array con elementi tra 0 e la lunghezza del primo array, la lunghezza del secondo array e restituisce la somma dei valori del primo array nelle posizioni specificate dal secondo array.`,
		prototipo: `int sommaInPosizioni(int A[], int nA, int P, int nP)`,
		soluzione: `/**
 * @brief Calcola la somma dei valori dell'array A nelle posizioni specificate dall'array P.
 * 
 * @param A Array di numeri interi.
 * @param nA Dimensione dell'array A.
 * @param P Array di interi compresi tra 0 e la lunghezza di A.
 * @param nP Dimensione dell'array P.
 * @return Somma dei valori di A nelle posizioni specificate da P.
 */
int sommaInPosizioni(int A[], int nA, int P[], int nP) {
    int somma = 0;
    for (int i = 0; i < nP; i++) {
        somma += A[P[i]];
    }
    return somma;
}
`
	},
	{
		testo: `Scrivi la funzione <code>trovaValore</code> che accetta come argomenti un array di numeri, la dimensione dell'array<br />
 e un valore, e restituisce la posizione in cui trova la prima occorrenza del valore oppure -1.`,
		prototipo: `int trovaValore(int A[], int n, int v)`,
		soluzione: `/**
 * @brief Restituisce la posizione della prima occorrenza del valore v nell'array A.
 * 
 * @param A Array di numeri interi.
 * @param n Dimensione dell'array A.
 * @param v Valore da cercare.
 * @return Posizione della prima occorrenza del valore v nell'array A, o -1 se non presente.
 */
int trovaValore(int A[], int n, int v) {
    for (int i = 0; i < n; i++) {
        if (A[i] == v) {
            return i;
        }
    }
    return -1;
}
`
	},
	{
		testo: `Scrivi la funzione <code>mappaQuadrato</code> che accetta come argomenti un array di numeri interi e la dimensione,<br />
 e aggiorna i valori dell'array sostituendoli con i loro quadrati`,
		prototipo: `void mappaQuadrato(int A[], int n)`,
		soluzione: `/**
 * @brief Aggiorna gli elementi dell'array A con i loro quadrati.
 * 
 * @param A Array di numeri interi.
 * @param n Dimensione dell'array A.
 */
void mappaQuadrato(int A[], int n) {
    for (int i = 0; i < n; i++) {
        A[i] = A[i] * A[i];
    }
}
`
	},
	{
		testo: `Scrivi la funzione <code>mappaCubo</code> che accetta come argomenti un array di numeri interi e la dimensione, e aggiorna<br />
 i valori dell'array sostituendoli con i loro cubi`,
		prototipo: `void mappaCubo(int A[], int n)`,
		soluzione: `/**
 * @brief Aggiorna gli elementi dell'array A con i loro cubi.
 * 
 * @param A Array di numeri interi.
 * @param n Dimensione dell'array A.
 */
void mappaCubo(int A[], int n) {
    for (int i = 0; i < n; i++) {
        A[i] = A[i] * A[i] * A[i];
    }
}
`
	},
	{
		testo: `Scrivi la funzione <stampa</code> che accetta come argomenti un array di numeri double e la dimensione,<br />
 e stampa i valori dell'array`,
		prototipo: `void stampa(double A[], int n)`,
		soluzione: `/**
 * @brief Stampa gli elementi dell'array A.
 * 
 * @param A Array di numeri double.
 * @param n Dimensione dell'array A.
 */
void stampa(double A[], int n) {
    cout << "{";
    if (n > 0)
    	cout << A[0];
    for (int i = 1; i < n; i++) {
        cout << ", " << A[i];
    }
    cout << "}" << endl;
}`
	},
	{
		testo: `Scrivi la funzione <code>prodotto</code> che accetta come argomenti un array di numeri interi e la dimensione,<br />
 e calcola il prodotto`,
		prototipo: `int prodotto(int A[], int n)`,
		soluzione: `/**
 * @brief Calcola il prodotto degli elementi dell'array A.
 * 
 * @param A Array di numeri interi.
 * @param n Dimensione dell'array A.
 * @return Prodotto degli elementi di A.
 */
int prodotto(int A[], int n) {
    int prod = 1;
    for (int i = 0; i < n; i++) {
        prod *= A[i];
    }
    return prod;
}
`
	},
	{
		testo: `Scrivi la funzione <code>contaMinoriDi</code> che accetta come argomenti un array di numeri interi, la dimensione<br />
 e un valore, e restituisce il numero di elementi aventi valore minore del terzo parametro`,
		prototipo: `int contaMinoriDi(int A[], int n, int v)`,
		soluzione: `/**
 * Conta gli elementi di un array di numeri interi minori di un dato valore.
 *
 * @param A array di numeri interi
 * @param n dimensione dell'array
 * @param v valore di riferimento
 * @return il numero di elementi di A aventi valore minore di v
 */
int contaMinoriDi(int A[], int n, int v) {
    int count = 0; // inizializza il contatore a zero
    for (int i = 0; i < n; i++) { // scorri l'array
        if (A[i] < v) { // se l'elemento corrente è minore di v
            count++; // incrementa il contatore
        }
    }
    return count; // restituisci il numero di elementi minori di v
}
`
	},
	{
		testo: `Scrivi la funzione <code>moltiplica</code> che accetta come argomenti un array di numeri interi, la dimensione e un valore,<br />
 e aggiorna gli elementi dell'array con il valore dell'elemento moltiplicato per il terzo parametro`,
		prototipo: `void moltiplica(int A[], int n, int v)`,
		soluzione: `/**
 * Moltiplica gli elementi di un array di numeri interi per un dato valore.
 *
 * @param A array di numeri interi
 * @param n dimensione dell'array
 * @param v valore di moltiplicazione
 */
void moltiplica(int A[], int n, int v) {
    for (int i = 0; i < n; i++) { // scorri l'array
        A[i] *= v; // moltiplica l'elemento corrente per v
    }
}
`
	},
	{
		testo: `Scrivi la funzione <code>prodotto_scalare</code> che accetta come argomenti due array e il numero di elementi e<br />
 restituisce< il prodotto scalare, ossia la somma dei prodotti degli elementi in posizione corrispondente`,
		prototipo: `int prodotto_scalare(const int v1[], const int v2[], const int n)`,
		soluzione: `/**
 * @brief Calcola il prodotto scalare tra due vettori di numeri interi
 * @param v1 Il primo vettore
 * @param v2 Il secondo vettore
 * @param n La lunghezza dei vettori
 * @return Il prodotto scalare dei due vettori
 */
int prodotto_scalare(const int v1[], const int v2[], const int n) {
    int prodotto = 0;
    for (int i = 0; i < n; i++) {
        prodotto += v1[i] * v2[i];
    }
    return prodotto;
}`
	},
	// FUNZIONI
	{
		prototipo: `double prezzo_scontato(double prezzo, int percentale_sconto)`,
		testo: `Scrivi a funzione <code>prezzo_scontato</code> che accetta come argomenti il prezzo e la percentuale<br /> di sconto e restituisce il prezzo scontato`,
		soluzione: ``
	},
	{
		prototipo: `double prezzo_ivato(double prezzo, int aliquota)`,
		testo: `Scrivi a funzione <code>prezzo_ivato</code> che accetta come argomenti il prezzo e l'aliquota IVA'<br /> e restituisce il prezzo maggiorato dell'IVA`,
		soluzione: ``
	},
	{
		prototipo: `double prezzo_scontato(double prezzo, int percentale_sconto)`,
		testo: `Scrivi a funzione <code>prezzo_scontato</code> che accetta come argomenti il prezzo e la percentuale<br /> di sconto e restituisce il prezzo scontato`,
		soluzione: ``
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
