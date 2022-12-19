#include <iostream>
using namespace std;

/** Ricerca lineare, valore da cercare: 3
  * @param n lunghezza dell'array
  * @param v array
  * @return l'indice i del primo elemento di v tale che v[i] = 3
  */
int find(int n, int v[]) {
  for (int i = 0; i < n; i++) {if (v[i] == 3) return i;}
  return -1;
}

/** Restituisce il minimo tra 60 e 5 volte la parte intera superiore dell'argomento diviso per 5
  * @param n un numero
  * @return min(60, 5 * ceil(n / 5))
  */
int increase(int n) {
  int k = 0;
  for (int i = 0; i < 12; i++)
    if (k < n)
      k += 5;

  return k;
}

int main() {
  cout << "FIND" << endl << "====" << endl;
  int v[8] {2, 9, 0, 0, 9, 3, 8, 3};
  cout << find(8, v) << endl << endl;
  cout << "INCREASE" << endl << "========" << endl;
  int k = 0;
  for (int i = 1; i < 66; i++) {
    if (i == increase(i)) {
      cout << "increase (" << i << ") = " << increase(i) << endl;
      k++;
    }
  }
  cout << "Il numero di valori per cui i == increase(i) e' "<< k << endl << endl;

  return 0;
}