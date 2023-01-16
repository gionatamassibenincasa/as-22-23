#include <fstream>
#include <iostream>
#include <string>
using namespace std;

double conteggio(ifstream &in) {
  while (true) {
    int numero;
    in >> numero;
    if (in.eof()) {
      // Se non ci sono altri numeri, esci dal ciclo
      break;
    }
    // qui il numero è disponibile
  }
  return 0;
}

double contaMultipli5(ifstream &in) { return 0; }

double contaSeMin25Mag75(ifstream &in) { return 0; }

double somma(ifstream &in) { return 0; }

double media(ifstream &in) { return 0; }

double minimo(ifstream &in) { return 0; }

double massimo(ifstream &in) { return 0; }

double sommaPari(ifstream &in) { return 0; }

double maggioriMenoMinori50(ifstream &in) { return 0; }

int main() {
  struct Esercizi {
    string descrizione;
    double (*funzione)(ifstream &);
  };
  Esercizi tabellaEsercizi[]{
      {"Esercizio n. 1 -- Conteggio: ", conteggio},
      {"Esercizio n. 2 -- ContaMultipli5: ", contaMultipli5},
      {"Esercizio n. 3. -- ContaSeMin25Mag75: ", contaSeMin25Mag75},
      {"Esercizio n. 4. -- Sommma: ", somma},
      {"Esercizio n. 5. -- Media: ", media},
      {"Esercizio n. 6. -- Minimo: ", minimo},
      {"Esercizio n. 7. -- Massimo: ", massimo},
      {"Esercizio n. 8. -- SommaPari: ", sommaPari},
      {"Esercizio n. 9. -- maggioriMenoMinori50: ", maggioriMenoMinori50}};
  const string filename = "dati.dat";
  ifstream in(filename, ios::in);
  if (!in.good()) {
    cerr << "Non trovo il file " << filename << endl;
    cerr << "Sicuro di averlo copiato?" << endl;
    return 1;
  }

  for (int i = 0; i < sizeof(tabellaEsercizi) / sizeof(Esercizi); i++) {
    in.seekg(0, ios::beg);
    Esercizi &esercizio = tabellaEsercizi[i];
    cout << esercizio.descrizione << esercizio.funzione(in) << endl;
    in.clear();
  }

  return 0;
}