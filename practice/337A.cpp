#include <iostream>
#include <string>
#include <cmath>
#include <vector>
#include <algorithm>
#include <limits.h>
using namespace std;

int main()
{
    int n, m;
    cin >> n >> m;
    vector<int> f(m);
    for (int i = 0; i < n; i++)
    {
        cin >> f[i];
    }
    sort(f.begin(), f.end());
    int min_diff = INT_MAX;
    for (int i = 0; i <= m - n; i++)
    {
        int diff = f[i + n - 1] - f[i];
        min_diff = min(min_diff, diff);
    }
    cout << min_diff;

    return 0;
}