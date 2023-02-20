#include <iostream>
using namespace std;

void stampa_array(string prologo, int A[], int n) {
  cout << prologo << ": [";
  if (n > 0) cout << A[0];
  for (int i = 1; i < n; ++i)
    cout << ", " << A[i];
  cout << "]\n";
}

int iminimo(int A[], int inizio, int n) {
  int imin = inizio;
  for (int i = inizio + 1; i < n; ++i)
    if (A[i] < A[imin]) imin = i;

  return imin;
}

void scambia(int A[], int i, int j) {
  int tmp = A[i];
  A[i] = A[j];
  A[j] = tmp;
}

void selection_sort(int A[], int n) {
  for (int i = 0; i < n - 1; ++i) {
    int imin = iminimo(A, i, n);
    scambia(A, i, imin);
  }
}

int main() {
  int v[10] = {7,8,2,3,4,5,3,5,4,5};
  stampa_array("Array non ordinato: ", v, 10);
  selection_sort(v, 10);
  stampa_array("Array     ordinato: ", v, 10);
  return 0;
}