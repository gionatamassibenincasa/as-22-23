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

void es_02(void) {
  double l, P, A;
  cout << "Immetti il lato del quadrato: ";
  cin >> l;
  P = l * 4;
  A = l * l;
  cout << "P: " << P << endl;
  cout << "A: " << A << endl;
}

void es_03(void) {
  double r, P, A;
  cout << "Immetti il raggio del cerchio: ";
  cin >> r;
  P = r * M_PI;
  A = r * r * M_PI;
  cout << "P: " << P << endl;
  cout << "A: " << A << endl;
}
void es_04(void) {
  int a, b, tmp;
  cout << "Immetti a: ";
  cin >> a;
  cout << "Immetti b: ";
  cin >> b;
  tmp = a;
  a = b;
  b = tmp;
  cout << "a: " << a << endl;
  cout << "b: " << b << endl;
}
void es_05(void) {
  double c1, c2, ip;
  cout << "Immetti la misura di un cateto: ";
  cin >> c1;
  cout << "Immetti la misura dell'altr cateto: ";
  cin >> c2;
  ip = sqrt(c1 * c1 + c2 * c2);
  cout << "Ipotenusa: " << ip << endl;
}
void es_06(void) {}
void es_07(void) {}
void es_08(void) {}
void es_09(void) {}
void es_10(void) {}
void es_11(void) {}
void es_12(void) {}

int main() {
  struct esercizio_t {
    char testo[255];
    void (*f)(void);
  };
  esercizio_t esercizi[]{
      {"1. Calcola il doppio di un numero fornito da tastiera", es_01},
      {"2. Dato il lato, trova il perimetro e l'area di un quadrato", es_02},
      {"3. Dato il raggio, calcola la circonferenza e l'area di un cerchio",
       es_03},
      {"4. Scambia il contenuto di due variabili", es_04},
      {"5. Calcola l'ipotenusa di un triangolo rettangolo dati i cateti",
       es_05},
      {"6. Data l'età di tre persone, calcola l'eta' media", es_06},
      {"7. In quali casi il programma termina per un errore in fase di "
       "esecuzione?",
       es_07},
      {"8. Trova gli errori lessicali e sintattici", es_08},
      {"9. Dati due punti fornisci le coordinate del punto medio", es_09},
      {"10. Dati due punti scrivere l'equazione della retta passante per essi",
       es_10},
      {"11. Dati prezzo e percentuale di sconto, scrivi il prezzo scontato",
       es_11},
      {"12. Dato il valore di un deposito bancario e il tasso di interesse "
       "annuo, calcola l'interesse maturato dopo 25 giorni",
       es_12}};

  for (int i = 0; i < sizeof(esercizi) / sizeof(esercizio_t); ++i) {
    cout << esercizi[i].testo << endl;
    esercizi[i].f();
    cout << endl << endl;
  }

  return 0;
}