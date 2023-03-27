/** Dopo aver caricato un array di 10 numeri interi,
    raddoppia il valore delle prime 3 componenti e
    stampa il contenuto
*/
#include <iostream>
using namespace std;

void stampa(int A[], int n) {
  cout << "{";
  if (n > 0) cout << A[0];
  for (int i = 1; i <  n; ++i) cout << ", " << A[i];
  cout << "}" << endl;
}

void raddoppia(int A[], int n) {
  for(int i = 0; i < n; ++i) A[i] *= 2;
}

int main () {
  // Dichiarazione di un array di 10 interi
  int A[10];
  // Popolamento
  for (int indice = 0; indice < 10; ++indice)
    A[indice] = indice + 1;
  cout << "A: ";
  stampa(A, 10);
  cout << "Raddopia (A, 3)" << endl;
  raddoppia(A, 3);
  cout << "A: ";
  stampa(A, 10);
  return 0;
}