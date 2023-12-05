#include <iostream>
#include <math.h>
using namespace std;

int for1(int a, int b, int c)
{
    if (abs(b - c) % 2 == 0)
        return 1;
    return 0;
}

int for2(int a, int b, int c)
{
    if (abs(a - c) % 2 == 0)
        return 1;
    return 0;
}

int for3(int a, int b, int c)
{
    if (abs(a - b) % 2 == 0)
        return 1;
    return 0;
}

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int a, b, c;
        cin >> a >> b >> c;
        cout << for1(a, b, c) << " " << for2(a, b, c) << " " << for3(a, b, c) << " " << endl;
    }
    return 0;
}