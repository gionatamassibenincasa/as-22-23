// Somma.cpp: somma di due numeri
#include <iostream>
using namespace std;
int main() {
  int a, b, s;
  cout << "Immetti un numero: ";
  cin >> a;
  cout << "Immetti un numero: ";
  cin >> b;
  s = a + b;
  cout << "La somma di " << a
       << " e " << b << " e' pari a " 
       << s << endl;
  return 0;
}
