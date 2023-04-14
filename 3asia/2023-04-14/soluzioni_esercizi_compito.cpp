/**
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
}
/**
 * @brief Inverte l'ordine degli elementi di un array di interi.
 * @param A Array di interi.
 * @param n Dimensione dell'array.
 */
void inverti(int A[], int n) {
    for (int i = 0; i < n / 2; i++) {
        std::swap(A[i], A[n - i - 1]);
    }
}

/**
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

/**
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

/**
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

/**
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

/**
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

/**
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

/**
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

/**
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

/**
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

/**
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

/**
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

/**
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

/**
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

/**
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

/**
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

/**
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

/**
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
}
/**
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

/**
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

/**
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

/**
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
}



