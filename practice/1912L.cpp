#include <iostream>
#include <string>

using namespace std;

int main()
{
    int n, res = -1;
    cin >> n;
    string s;
    cin >> s;

    for (int i = 0; i < n - 1; i++)
    {
        int L1 = 0, L2 = 0;
        int O1 = 0, O2 = 0;
        for (int j = 0; j <= i; j++)
        {
            if (s.at(j) == 'L')
                L1++;
            else if (s.at(j) == 'O')
                O1++;
        }
        for (int k = i + 1; k < n; k++)
        {
            if (s.at(k) == 'L')
                L2++;
            else if (s.at(k) == 'O')
                O2++;
        }
        if ((L1 != L2) && (O1 != O2))
        {
            res = i + 1;
            cout << res;
            return 0;
        }
    }
    cout << res;
    return 0;
}
