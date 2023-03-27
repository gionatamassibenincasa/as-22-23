/* Calcolare il prodotto scalare di due array dati.
 *  Il prodotto scalare è definito come:
 *  a . b = somma per i che va da 0 a n - 1 di a[i]*b[i]
 */

#include <iostream>
using namespace std;

int prodotto_scalare(const int A[], const int B[], const int n) {
  int acc = 0;
  for (int i = 0; i < n; ++i)
    acc += A[i] * B[i];
  
  return acc;
}

int main() {
  const int n = 5;
  const int a[n] = {1, 2, 0, -1, -2};
  const int b[n] = {-2, -1, 100, -2, -1};
  int c = prodotto_scalare(a, b, n);
  cout << "a.b = " << c << endl;
  
  return 0;
}