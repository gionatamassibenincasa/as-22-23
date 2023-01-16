/** Genera almeno 16.385 numeri in colonna, in modo da non permettere l'analisi
 * con M$ Excel  */
#include <ctime>
#include <fstream>
#include <iostream>
#include <random>

using namespace std;

int main() {
  // Distribuzione dei numeri nel file
  uniform_int_distribution<> dis(2, 97);
  mt19937 gen(time(0));
  // Numero di colonne
  uniform_int_distribution<> colDis(16385, 16385 + 50);
  ofstream out("dati.dat", ios::out);
  const int N = colDis(gen);
  out << dis(gen);
  for (int i = 0; i < N - 1; i++)
    out << " " << dis(gen);

  return 0;
}