/** Dopo aver caricato un array di 10 numeri interi,
    stampa il prodotto delle componenti
*/
#include <iostream>
using namespace std;

void stampa(int A[], int n) {
  cout << "{";
  if (n > 0) cout << A[0];
  for (int i = 1; i <  n; ++i) cout << ", " << A[i];
  cout << "}" << endl;
}

/** Calcola il prodotto delle n compomenti dell'array A
  * @param A l'array di numeri interi
  * @param n lunghezza dell'array
  * @return il prodotto A[0] * A[1] * ... * A[n-1]
  */
int produttoria(int A[], int n) {
  int risultato = 1;
  for (int i = 0; i < n; ++i)
    risultato *= A[i];
  
  return risultato;
}

int main () {
  // Dichiarazione di un array di 10 interi
  int A[10];
  // Popolamento
  for (int indice = 0; indice < 10; ++indice)
    A[indice] = indice + 1;
  stampa(A, 10);
  cout << "Il prodotto dei numeri presenti in A vale: "
       << produttoria(A, 10)
       << endl;
  return 0;
}