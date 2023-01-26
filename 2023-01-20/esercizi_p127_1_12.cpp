#include <cmath>
#include <iostream>
#define USE_MATH_DEFINES

using namespace std;

void es_01(void) {
  double n;
  cout << "Immetti un numero: ";
  cin >> n;
  cout << 2 * n << endl;
}

int main() {
  struct esercizio_t {
    char testo[255];
    void (*f)(void);
  };
  esercizio_t esercizi[]{
      {"1. Calcola il doppio di un numero fornito da tastiera", es_01}};

  for (int i = 0; i < sizeof(esercizi) / sizeof(esercizio_t); ++i) {
    cout << esercizi[i].testo << endl;
    esercizi[i].f();
  }

  return 0;
}