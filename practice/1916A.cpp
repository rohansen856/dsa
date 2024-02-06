#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

using namespace std;
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n, k;
        cin >> n >> k;
        long long num, prod = 1;
        for (int i = 0; i < n; i++)
        {
            cin >> num;
            prod = prod * num;
        }
        if (2023 % prod == 0)
        {
            cout << "YES" << endl;
            cout << (2023 / prod) << " ";

            for (int i = 1; i < k; i++)
            {
                cout << 1 << " ";
            }
            cout << endl;
        }
        else
        {
            cout << "NO" << endl;
        }
    }
}