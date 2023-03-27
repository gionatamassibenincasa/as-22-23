/**
Creare un programma in C++ che:
  (a) dichiara un array di 30 elementi interi,
  (b) popola l'array con numeri multipli di 3 {0, 3, 6, ..., 87},
  (c) stampa i valori dell'array,
  (d) modica tutti i valori sostituendoli con il resto della divisione per 6,
  (e) stampa nuovamente l'array.
  */

#include <iostream>
using namespace std;

void stampa_array(int A[], int n) {
  cout << "{";
  if (n > 0)
    cout << A[0];
  for (int i = 1; i < n; ++i)
    cout << ", " << A[i];
  cout << "}" << endl;
}

// modica tutti i valori sostituendoli con il resto della divisione per 6
void aggiornaValori(int A[], int n) {
  for (int i = 0; i < n; ++i)
    A[i] = A[i] % 6;
}

int main() {
  const int N = 30;
  // a) dichiara un array di 30 elementi interi
  int A[N];
  // b) popola l'array con numeri multipli di 3 {0, 3, 6, ..., 87}
  for (int i = 0; i < N; ++i)
    A[i] = 3 * i;
  // c) stampa i valori dell'array
  stampa_array(A, N);
  // d) modica tutti i valori sostituendoli con il resto della divisione per 6
  aggiornaValori(A, N);
  // e) stampa nuovamente l'array
  stampa_array(A, N);
  
  return 0;
}