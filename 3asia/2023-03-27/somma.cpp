/* Dati due array aventi la stessa dimensione,
 * calcolare in un terzo array la somma dei due
 */

#include <iostream>
using namespace std;

void somma(int addendo1[], int addendo2[], int somma[], int n) {
  for (int i = 0; i < n; ++i)
    somma[i] = addendo1[i] + addendo2[i];
}

void stampa_array(int A[], const int n) {
  cout << "{";
  if (n > 0) cout << A[0];
  for (int i = 1; i < n; ++i) cout << ", " << A[i];
  cout << "}" << endl;
}

int main() {
  const int N = 5;
  int a[N] = { 1, 2, 3, 4, 5};
  int b[N] = {10, 9, 8, 7, 6};
  int c[N];
  cout << "a: ";
  stampa_array(a, N);
  cout << "b: ";
  stampa_array(b, N);
  cout << "c: ";
  stampa_array(c, N);
  somma(a, b, c, N);
  cout << "c: ";
  stampa_array(c, N);
  
  return 0;
}

