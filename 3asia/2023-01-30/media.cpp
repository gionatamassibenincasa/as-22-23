#include <iostream>
using namespace std;

double media(double A[], int n) {
  double somma = 0;
  for (int i = 0; i < n; ++i) {
    somma += A[i];
  }  
  return somma / n;
}

int main() {
  double voto[30];
  int n = 0;
  bool termina = false;

  cout << "Immetti -1 per terminare" << endl;
  while(n < 30 && !termina) {
    cout << "Immetti il voto n. " << (n + 1) << ": ";
    cin >> voto[n];
    if (voto[n] < 0)
        termina = true;
    else
      n++;
  }

  cout << "Immessi " << n << " voti." << endl;
  cout << "Il valor medio dei voti e': "
    << media(voto, n) << endl;
  return 0;
}