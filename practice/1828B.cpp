#include <iostream>
#include <string>
#include <cmath>
#include <math.h>
#include <vector>
#include <algorithm>
#include <limits.h>
using namespace std;

int gcd(int a, int b)
{
    while (b != 0)
    {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n, l;
        cin >> n;
        int ans = 0;
        for (int i = 1; i <= n; i++)
        {
            cin >> l;
            ans = gcd(abs(l - i), ans);
        }
        cout << ans << endl;
    }

    return 0;
}