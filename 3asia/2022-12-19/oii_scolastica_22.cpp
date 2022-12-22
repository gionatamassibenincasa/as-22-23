#include <iostream>
using namespace std;

/** Scambia x e y
 * @param x (riferimenti)
 * @param y (riferimenti)
 */
void scambia(int &x, int &y) {
  int t = x;
  x = y;
  y = t;
}

/** Ricerca lineare, valore da cercare: 3
 * @param n lunghezza dell'array
 * @param v array
 * @return l'indice i del primo elemento di v tale che v[i] = 3

 */
int find(int n, int v[]) {
  for (int i = 0; i < n; i++) {
    if (v[i] == 3)
      return i;
  }
  return -1;
}

/** Ricerca del mediano
 * @param a
 * @param b
 * @param c
 * @return il valore mediano tra i tre argomenti
 */
int median(int a, int b, int c) {
  if (a > b)
    scambia(a, b);
  // a_1 = min(a, b); b_1 = max(a, b)
  if (b > c)
    scambia(b, c);
  // b_2 = min(b_1, c) = min(max(a, b), c), c_2 = max(max(a, b), c) -> c = MAX
  if (a > b)
    scambia(a, b);
  // a_3 = min(a_2, b2) = min(min(a, b), min(max(a, b), c)) -> a = MIN, b_3 =
  // mediano!
  return b;
}

/** Restituisce il minimo tra 60 e 5 volte la parte intera superiore
 * dell'argomento diviso per 5
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

/** Stampa in ordine lessicografico.
  * Es: print_numbers(21, 0) produce 0, 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 20, 21, 3, 4, 5, 6, 7, 8, 9
 */
void print_numbers(int n, int x) {
  if (x > n)
    return;
  cout << x << endl;
  for (int i = 0; i < 10; i++)
    if (x != 0 || i != 0)
      print_numbers(n, 10 * x + i);
}

int main() {
  cout << "FIND" << endl << "====" << endl;
  int v[8]{2, 9, 0, 0, 9, 3, 8, 3};
  cout << find(8, v) << endl << endl;
  cout << "INCREASE" << endl << "========" << endl;
  int k = 0;
  for (int i = 1; i < 66; i++) {
    if (i == increase(i)) {
      cout << "increase (" << i << ") = " << increase(i) << endl;
      k++;
    }
  }
  cout << "Il numero di valori per cui i == increase(i) e' " << k << endl
       << endl;

  cout << "MEDIAN" << endl << "======" << endl;
  // test con  le permutazione di [1, 2, 3]
  int abc[3][6]{{1, 1, 2, 2, 3, 3}, {2, 3, 1, 3, 1, 2}, {3, 2, 3, 1, 2, 1}};

  bool mediano_corretto = true;
  for (int j = 0; j < 6; j++)
    if (median(abc[0][j], abc[1][j], abc[2][j]) != 2) {
      cerr << "Errore nell'algoritmo di ricerca del mediano" << endl;
      mediano_corretto = false;
    }

    if (mediano_corretto) {
      cout << "MEDIANO: OK" << endl;
    }

    
    print_numbers(121, 0);

  return 0;
}