#include <iostream>
using namespace std;

int ricerca(char A[], int n, char v) {
  for (char *p = A; *p != '\0'; ++p)
    if (*p == v) return (p - A);
  return -1;
}

int main() {

  char nome[] = "Francesco";
  
  int pos;
  pos = ricerca(nome, 9, 'e');
  cout << "La lettera 'e' e' in posizione " << pos << endl;
  
  return 0;
}