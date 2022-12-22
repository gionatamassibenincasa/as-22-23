#include <iostream>
using namespace std;

int main()
{
  char c1 = 0x30,
       c2 = 0x31,
       c3;
  int r;

  cout << "0x30 " << c1 << endl;
  cout << "0x31 " << c2 << endl;
  cout << "0x30 " << 0x30 << endl;
  cout << "La dimensione di un char è " << sizeof(char) << " byte" << endl;
  cout << "La dimensione di c1 è " << sizeof c1 << " byte" << endl;
  c3 = c1 + c2;
  cout << "Il carattere ottenuto da c1 + c2 è: " << c3 << endl;
  cout << "Il numero ottenuto da c1 + c2 è: " << c1 + c2 << endl;
  c3 = '}';
  r = c3;
  cout << "La rappresentazione come numero di " << c3 << " è: " << r << endl;
  c1 = 23;
  c2 = 7;
  cout << "c1 - c2 = " << c1 - c2 << endl;
  cout << "c1 * c2 = " << c1 * c2 << endl;
  cout << "c1 / c2 = " << c1 / c2 << " (quoziente, intero)" << endl;
  cout << "c1 % c2 = " << c1 % c2 << " (resto, intero)" <<  endl;
  
  return 0;
}
