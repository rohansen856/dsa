#include <iostream>
#include <math.h>
#include <vector>
#include <string>
using namespace std;

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        int res = 0;
        n--;
        while (n--)
        {
            int k;
            cin >> k;
            res += k;
        }
        cout << res * (-1) << endl;
    }
    return 0;
}