#include <iostream>
using namespace std;
int main()
{
    int t;
    cin >> t;
    cout << (t / 5) + (t % 5 > 0 ? 1 : 0) << endl;
    return 0;
}