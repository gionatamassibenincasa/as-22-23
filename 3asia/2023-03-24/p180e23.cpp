#include <iostream>
using namespace std;

int maggioreDi5(int A[], int n) {
  int contatore = 0;
  for (int i = 0; i < n; ++i) {
    if (A[i] > 5) contatore++;
  }

  return contatore;
}

int main() {
  int A[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  cout << "Il numero di elementi aventi valore > 5 è: "
       << maggioreDi5(A, 10) << endl;
  return 0;
}