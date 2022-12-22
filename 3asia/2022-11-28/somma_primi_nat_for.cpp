#include <iostream>
using namespace std;

int main() {
  int n, i, acc = 0;
  cout << "Immetti un numero intero: ";
  cin >> n;
  for (i = 0; i <= n; i++) {
    acc = acc + i;
  }
  cout << "1 + ... + " << n << " = " << acc << endl;
  return 0;
}