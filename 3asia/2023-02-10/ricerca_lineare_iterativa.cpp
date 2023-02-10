#include <iostream>
#include <string>
using namespace std;

/**
  * Cerca il valore @var v nell'array @var A
  * @param A un array di stringhe
  * @param n numero di elementi di A
  * @param v valore da cercare
  * @return l'indice i tale che A[i] = v,
  *          oppure -1 se v non è in A
  */
int ricerca_lineare(string A[], int n, string v) {
  for(int i = 0; i < n; ++i) {
    if (A[i] == v)
      return i;
  }
  return -1;
}

int main() {
  string utenti[] = {"Chiara", "Giulia", "Michela",
                      "Francesco", "Giacomo"};
  int pos = ricerca_lineare(utenti, 5, "Giulia");
  if (pos != -1)
    cout << "Giulia e' registrata in posizione "
          << pos << ".\n";
  else
    cout << "Giulia non e' un utente registrato\n";

  pos = ricerca_lineare(utenti, 5, "Filippo");
  if (pos != -1)
    cout << "Filippo e' registrata in posizione "
          << pos << ".\n";
  else
    cout << "Filippo non e' un utente registrato\n";

  return 0;
}