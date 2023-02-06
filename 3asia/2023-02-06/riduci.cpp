#include <iostream>
using namespace std;

/** Restituisce la somma dei valori di A
  * @param A un array di interi
  * @param n il numero di elementi
  * @return la somma di tutti i valori
  * PRE-REQUISITO: n > 0
  */
int riduci(int A[], int n, int (*f)(int a, int b)) {
  int acc = A[0];
  for (int i = 1; i < n; ++i)
    acc = f(acc, A[i]);

  return acc;
}

int piu (int a, int b) {
  return a + b;
}

int minore (int a, int b) {
  if (a <= b) return a;
  return b;
}

int maggiore (int a, int b) {
  if (a >= b) return a;
  return b;
}

int main() {
  int voto[5] = {6, 3, 9, 5, 7};
 
  cout << "Somma dei voti: " << riduci(voto, 5, piu) << endl;
  cout << "Voto minimo: " << riduci(voto, 5, minore) << endl;
  cout << "Voto massimo: " << riduci(voto, 5, maggiore) << endl;
  
  return 0;
}