#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        vector<string> targ;
        int res = 0;
        int len = 10;
        while (len--)
        {
            string s;
            cin >> s;
            targ.push_back(s);
        }
        for (int i = 1; i <= 5; i++)
        {
            for (int j = 1; j <= 10; j++)
            {
                if (targ[i][j] == 'X')
                    res += i;
            }
        }
        for (int i = 6; i <= 10; i++)
        {
            for (int j = 1; j <= 10; j++)
            {
                if (targ[i][j] == 'X')
                    res += (11 - i);
            }
        }
        cout << res << endl;
    }
    return 0;
}