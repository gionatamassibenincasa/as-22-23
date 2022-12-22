#include <iostream>
using namespace std;

int main() {
  int n;
  cout << "Immetti un numero intero: ";
  cin >> n;
  if (n % 2 == 0) {
    cout << n << " e' pari" << endl;
  } else {
    cout << n << " e' dispari" << endl;
  }
  return 0;
}