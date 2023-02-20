#include <iostream>
using namespace std;

/** Ricerca binaria su array di interi
  * @param A array di interi
  * @param sx estremo di sinistra del sottoinsieme dell'array
  *           nel quale cercare il valore v
  * @param dx estremo di destra del sottoinsieme dell'array
  *           nel quale cercare il valore v
  * @param v valore intero da cercare
  * @return l'indice i tale che A[i] == v,
            oppure -1 se non esiste v in A
  */
int ricerca_binaria(int A[], int sx, int dx, int v) {
  if (sx >= dx)
    return -1;
  //! centro dell'intervallo di indici sx e dx
  int cx = (sx + dx) / 2;
  if (A[cx] == v)
    return cx;
  if (A[cx] > v)
    return ricerca_binaria(A, sx, cx, v);
  return ricerca_binaria(A, cx + 1, dx, v);
}

int main() {
  int numeriOrdinati[10] {0, 2, 2, 3, 4, 6, 6, 8, 9, 9};
  int pos;
  pos = ricerca_binaria (numeriOrdinati, 0, 10, 0);
  cout << "Il valore 0 e' in posizione " << pos << endl;
  pos = ricerca_binaria (numeriOrdinati, 0, 10, 1);
  cout << "Il valore 1 e' in posizione " << pos << endl;
  pos = ricerca_binaria (numeriOrdinati, 0, 10, 3);
  cout << "Il valore 3 e' in posizione " << pos << endl;
  return 0; 
}