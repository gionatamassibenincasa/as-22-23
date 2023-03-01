/**
 * @file metodo_di_erone.cpp
 * @author Gionata Massi (gionata.massi@savoiabenincasa.it)
 * @brief Calcolo della radice quadrata mediante il Metodo di Erone di
 * Alessandria.
 *
 * Il programma ha lo scopo di illustrare l'astrazione mediante
 * funzioni
 *
 * @version 0.1
 * @date 2022-12-12
 *
 * @copyright Copyright (c) 2022
 * Il programma è un adattamento di quello presente in SICP
 * https://sourceacademy.org/sicpjs/1.1.7
 */
#include <iostream>
using namespace std;

// Prototipi
double radq(double);
double radq_iterazione(double, double);
bool sufficientemente_accurata(double, double, double);
double valore_assoluto(double);
double quadrato(double);
double migliora_stima(double, double);
double valor_medio(double, double);

int main() {
  double x;
  cout << "Immetti il numero di cui estrarre la radice quadrata: ";
  cin >> x;
  cout << "radq(" << x << ") = " << radq(x) << endl;

  return 0;
}

/** Estrae la radice quadrata del radicando
 *
 * @param radicando Il radicando
 * @return un'approssimazione della radice quadrata
 */
double radq(double radicando) { return radq_iterazione(radicando, 1.0); }

/** Esegue il processo di approssimazione della radice quadrata
 *
 * @param radicando Il radicando
 * @param stima Una stima della radice quadrata
 * @return La migliore stima della radice quadrata
 */
double radq_iterazione(double radicando, double stima) {
  return (sufficientemente_accurata(stima, radicando, 5E-7))
             ? stima
             : radq_iterazione(radicando, migliora_stima(stima, radicando));
}

/** Determina se la stima è sufficientemente accurata
 *
 * @param stima La stima
 * @param radicando Il radicando
 * @param tolleranza La tolleranza che determina la qualità della stima
 * @return vero se la stima è sufficientemente accurata nel rispetto della
 * tolleranza
 */
bool sufficientemente_accurata(double stima, double radicando,
                               double tolleranza) {
  return valore_assoluto(quadrato(stima) - radicando) <= tolleranza;
}

/** Valore assoluto, detto anche modulo, di un numero reale
 *
 * @param x
 * @return |x|
 */
double valore_assoluto(double x) { return (x >= 0) ? x : -x; }

/** Restituisce la seconda potenza di un numero
 *
 * @param x Il numero
 * @return $x^2$
 */
double quadrato(double x) { return x * x; }

/** Migliora la stima della radice quadrata del radicando
 *
 * @param stima La stima
 * @param radicando Il radicando
 * @return una nuova stima
 */
double migliora_stima(double stima, double radicando) {
  return valor_medio(stima, radicando / stima);
}

/** Determina il valore medio tra due numeri
 *
 * @param x Il primo numero
 * @parm y Il secondo numero
 * @return Il valor medio tra x e y
 */
double valor_medio(double x, double y) { return (x + y) / 2; }
