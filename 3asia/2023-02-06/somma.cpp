#include <iostream>
using namespace std;

/** Restituisce la somma dei valori di A
  * @param A un array di interi
  * @param n il numero di elementi
  * @return la somma di tutti i valori
  * PRE-REQUISITO: n > 0
  */
int somma(int A[], int n) {
  int acc = A[0];
  for (int i = 1; i < n; ++i)
    acc = acc + A[i];

  return acc;
}

int main() {
  int voto[5] = {6, 3, 9, 5, 7};
 
  cout << "Somma dei voti: " << somma(voto, 5) << endl;
  
  return 0;
}