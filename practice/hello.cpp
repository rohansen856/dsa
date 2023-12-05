#include <iostream>
#include <math.h>
#include <vector>
using namespace std;

int main()
{

    int t;
    cin >> t;
    while (t--)
    {
        int n, x;
        cin >> n >> x;
        vector<int> a;
        a.push_back(0);
        int maxim = -1;

        for (int i = 1; i < n + 1; i++)
        {
            int temp;
            cin >> temp;
            a.push_back(temp);
            maxim = max(maxim, (a[i] - a[i - 1]));
        }

        int d = 2 * (x - a[n]);
        maxim = (d > maxim) ? d : maxim;

        cout << maxim << endl;
    }

    return 0;
}