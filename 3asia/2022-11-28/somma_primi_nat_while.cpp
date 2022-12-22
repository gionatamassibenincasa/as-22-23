#include <iostream>
using namespace std;

int main() {
  int n, i = 1, acc = 0;
  cout << "Immetti un numero intero: ";
  cin >> n;
  while (i <= n) {
    acc = acc + i;
    i = i + 1;
  }
  cout << "1 + ... + " << n << " = " << acc << endl;
  return 0;
}