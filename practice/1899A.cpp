#include <iostream>
using namespace std;

int main()
{
    int T;
    cin >> T;
    while (T--)
    {
        int t;
        cin >> t;
        cout << (((t % 3) != 0) ? "First" : "Second") << endl;
    }

    return 0;
}