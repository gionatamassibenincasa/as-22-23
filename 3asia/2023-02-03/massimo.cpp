#include <iostream>
using namespace std;

/** Restituisce il valore massimo di A
  * @param A un array di interi
  * @param n il numero di elementi
  * @return il massimo
  * PRE-REQUISITO: n > 0
  */
int massimo(int A[], int n) {
  int max_corrente = A[0];
  for (int i = 1; i < n; ++i)
    if (A[i] > max_corrente)
      max_corrente = A[i];

  return max_corrente;
}

int main() {
  int voto[5] = {4, 5, 9, 8, 10};
  cout << "&voto: " << voto << endl;
  for(int i = 0; i < 5; ++i) {
    cout << "&voto[" << i << "]: " << &voto[i] << endl;    
  }

  cout << "Voto massimo: " << massimo(voto, 5) << endl;
  
  return 0;
}