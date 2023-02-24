#include <iostream>
#include <cstdlib>
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

/** Mescola i valori dell'array
  * @param A l'array
  * @param n numero di elementi di A
  */
void mescola(int A[], int n) {
  int nscambi = n / 2;
  for (int i = 0; i < nscambi; ++i) {
    int j = rand() % (n - 1);
    scambia(A, i, j);
  }
}

/** Ordina gli elementi di A per inserimento
  *
  * @param A l'array
  * @param n numero di elementi di A
  */
void insertion_sort(int A[], int n) {
  for (int i = 1; i < n; ++i) {
    for (int j = i;
      j > 0 && A[j] < A[j - 1];
      --j)
      scambia(A, j, j - 1);
  }
}

int main() {
  int v[10];
  for (int i = 0; i < 10; ++i) v[i] = i;
  for (int i = 0; i < 10; ++i) {
    mescola(v, 10);
    stampa_array("Array non ordinato: ", v, 10);
    insertion_sort(v, 10);
    stampa_array("Array     ordinato: ", v, 10);    
    }
  return 0;
}