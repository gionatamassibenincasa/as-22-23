#include <iostream>
using namespace std;

/** Restituisce il valore minimo di A
  * @param A un array di interi
  * @param n il numero di elementi
  * @return il valore minimo
  * PRE-REQUISITO: n > 0
  */
int minimo(int A[], int n) {
  int min_corrente = A[0];
  for (int i = 1; i < n; ++i)
    if (A[i] < min_corrente)
      min_corrente = A[i];

  return min_corrente;
}

int main() {
  int voto[5] = {6, 3, 9, 5, 7};
 
  cout << "Voto minimo: " << minimo(voto, 5) << endl;
  
  return 0;
}