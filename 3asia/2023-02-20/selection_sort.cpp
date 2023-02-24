#include <iostream>
using namespace std;

/** Stampa un array di interi
  *
  * @param prologo Un testo da scrivere prima dell'array
  * @param A l'array
  * @param n numero di elementi di A
  */
void stampa_array(string prologo, int A[], int n) {
  cout << prologo << ": [";
  if (n > 0) cout << A[0];
  for (int i = 1; i < n; ++i)
    cout << ", " << A[i];
  cout << "]\n";
}

/** Trova l'indice del valore minimo in un array
  * a partire da una posizione
  *
  * @param A l'array
  * @param inizio la prima posizione in cui cercare
  * @param n numero di elementi di A
  * @return l'indice i tale che A[i] <= A[j], i <= j < n
  */
int iminimo(int A[], int inizio, int n) {
  int imin = inizio;
  for (int i = inizio + 1; i < n; ++i)
    if (A[i] < A[imin]) imin = i;

  return imin;
}

/** Scambia gli elementi in posizione i e j
  * da A = [...a_i...a_j....] a A = [...a_j...a_i....]
  *
  * @param A l'array
  * @param i un indice
  * @param j un altro indice
  */
void scambia(int A[], int i, int j) {
  int tmp = A[i];
  A[i] = A[j];
  A[j] = tmp;
}

/** Ordina gli elementi di A per selezione
  *
  * @param A l'array
  * @param n numero di elementi di A
  */
void selection_sort(int A[], int n) {
  for (int i = 0; i < n - 1; ++i) {
    int imin = iminimo(A, i, n);
    scambia(A, i, imin);
  }
}

int main() {
  int v[10] = {7,8,2,3,4,5,3,5,4,5};
  stampa_array("Array non ordinato: ", v, 10);
  selection_sort(v, 10);
  stampa_array("Array     ordinato: ", v, 10);
  return 0;
}