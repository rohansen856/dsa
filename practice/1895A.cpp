#include <iostream>
#include <math.h>
using namespace std;

int main()
{
    int T;
    cin >> T;
    while (T--)
    {
        int x, y, k;
        cin >> x >> y >> k;
        if (y > x)
        {
            if ((x + k) >= y)
                cout << y << endl;
            else
                cout << y + (y - (x + k)) << endl;
        }
        else
            cout << x << endl;
    }
    return 0;
}