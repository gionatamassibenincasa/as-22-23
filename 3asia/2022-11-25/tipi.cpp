// Tipi.cpp (pag. 93)
#include <iostream>
using namespace std;

int main() {
  const string prologo = "Dimensione in byte del tipo '",
               epilogo = "': ";
  cout << prologo << "char" << epilogo << sizeof(char) << endl;
  cout << prologo << "bool" << epilogo << sizeof(bool) << endl;
  cout << prologo << "short int" << epilogo << sizeof(short int) << endl;
  cout << prologo << "int" << epilogo << sizeof(int) << endl;
  cout << prologo << "long int" << epilogo << sizeof(long int) << endl;
  cout << prologo << "long long int" << epilogo << sizeof(long long int) << endl;
  cout << prologo << "float" << epilogo << sizeof(float) << endl;
  cout << prologo << "double" << epilogo << sizeof(double) << endl;
  cout << prologo << "long double" << epilogo << sizeof(long double) << endl;
  
  return 0;
}