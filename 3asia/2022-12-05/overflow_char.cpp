/* Scopo: dimostrare overflow e underflow */
#include <iostream>
using namespace std;

int main() {
  int i;
  char c1, c2, somma, differenza, prodotto;

  cout << "Immetti un valore c1 tra -128 e + 127: ";
  cin >> i;
  c1 = i;
  cout << "Immetti un valore c2 tra -128 e + 127: ";
  cin >> i;
  c2 = i;
  somma = c1 + c2;
  differenza = c1 - c2;
  prodotto = c1 * c2;
  cout << "c1 + c2 = " << int(somma) << endl;
  cout << "c1 - c2 = " << int(differenza) << endl;
  cout << "c1 * c2 = " << int(prodotto) << endl;

  return 0;
  }