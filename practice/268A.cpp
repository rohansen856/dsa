#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int T, res = 0;
    vector<vector<int>> cols;
    cin >> T;
    int t = T;
    while (T--)
    {
        int i, j;
        cin >> i >> j;
        cols.push_back({i, j});
    }
    for (int i = 0; i < t; i++)
    {
        for (int j = i + 1; j < t; j++)
        {
            if (cols[i][0] == cols[j][1])
                res++;
            if (cols[i][1] == cols[j][0])
                res++;
        }
    }
    cout << res;

    return 0;
}