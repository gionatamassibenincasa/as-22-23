// NOTE: it is recommended to use this even if you don't understand the following code.

#include <iostream>
#include <fstream>
// #include <vector>

using namespace std;

// input data
int K, N, R, T;
//vector<int> S;
int S_i;
long int somma;
int media;

int main() {
	// uncomment the following lines if you want to read/write from files
	ifstream cin("input.txt");
	ofstream cout("output.txt");

    cin >> K;
    for (int j=0; j<K; j++) {
        somma = 0;
        cin >> N >> R >> T;
        // S.resize(N);
        for (int i=0; i<N; i++) {
            // cin >> S[i];
          cin >> S_i;
          somma += S_i;
        }
        media = somma / N;
        // insert your code here
        if (media > R + T)
          cout << "Cheater" << endl; // print the result
        else 
          cout << "Innocent" << endl; // print the result
    }
    return 0;
}
