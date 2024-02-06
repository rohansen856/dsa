#include <iostream>
#include <string>
#include <cmath>
#include <vector>
#include <algorithm>
#include <limits.h>
using namespace std;

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        string s, ans = "";
        cin >> s;
        for (int i = 1; i < n;)
        {
            if (s[i + 2] == 'a' || s[i + 2] == 'e')
            {
                ans += (s[i - 1]);
                ans += (s[i]);
                i += 2;
            }
            else
            {
                ans += (s[i - 1]);
                ans += (s[i]);
                if ((i + 1) < n)
                    ans += (s[i + 1]);
                i += 3;
            }
            if (i < n)
                ans += ".";
        }
        cout << ans << endl;
    }

    return 0;
}