#include <fstream>
#include <iostream>
#include <string>
using namespace std;

double conteggio(ifstream &in) {
  int conta = 0;
  while (true) {
    int numero;
    in >> numero;
    if (in.eof()) {
      // Se non ci sono altri numeri, esci dal ciclo
      break;
    }
    // qui il numero è disponibile
    conta++;
  }
  return conta;
}

double contaMultipli5(ifstream &in) {
  int conta = 0;
  while (true) {
    int numero;
    in >> numero;
    if (in.eof()) {
      // Se non ci sono altri numeri, esci dal ciclo
      break;
    }
    // qui il numero è disponibile
    if (numero % 5 == 0)
      conta++;
  }
  return conta;
}

double contaSeMin25Mag75(ifstream &in) {
  int conta = 0;
  while (true) {
    int numero;
    in >> numero;
    if (in.eof()) {
      // Se non ci sono altri numeri, esci dal ciclo
      break;
    }
    // qui il numero è disponibile
    if (numero <= 25 || numero >= 75)
      conta++;
  }
  return conta;
}

double somma(ifstream &in) {
  long long int conta = 0;
  while (true) {
    int numero;
    in >> numero;
    if (in.eof()) {
      // Se non ci sono altri numeri, esci dal ciclo
      break;
    }
    // qui il numero è disponibile
    conta += numero;
  }
  return conta;
}

double media(ifstream &in) {
  int conta = 0;
  long long int somma = 0;
  while (true) {
    int numero;
    in >> numero;
    if (in.eof()) {
      // Se non ci sono altri numeri, esci dal ciclo
      break;
    }
    // qui il numero è disponibile
    conta++;
    somma += numero;
  }
  return static_cast<double>(somma) / conta;
}

double minimo(ifstream &in) {
  int m = 201;
  while (true) {
    int numero;
    in >> numero;
    if (in.eof()) {
      // Se non ci sono altri numeri, esci dal ciclo
      break;
    }
    // qui il numero è disponibile
    if (numero < m)
      m = numero;
  }
  return m;
}

double massimo(ifstream &in) {
  int m = -1;
  while (true) {
    int numero;
    in >> numero;
    if (in.eof()) {
      // Se non ci sono altri numeri, esci dal ciclo
      break;
    }
    // qui il numero è disponibile
    if (numero > m)
      m = numero;
  }
  return m;
}

double sommaPari(ifstream &in) {
  long long int sommaP = 0;
  while (true) {
    int numero;
    in >> numero;
    if (in.eof()) {
      // Se non ci sono altri numeri, esci dal ciclo
      break;
    }
    // qui il numero è disponibile
    if (numero % 2 == 0)
      sommaP += numero;
  }
  return sommaP;
}

double maggioriMenoMinori50(ifstream &in) {
  long long int sommaMagUg50 = 0, sommaMin50 = 0;
  while (true) {
    int numero;
    in >> numero;
    if (in.eof()) {
      // Se non ci sono altri numeri, esci dal ciclo
      break;
    }
    // qui il numero è disponibile
    if (numero >= 50)
      sommaMagUg50 += numero;
    else
      sommaMin50 += numero;
  }
  return sommaMagUg50 - sommaMin50;
}

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