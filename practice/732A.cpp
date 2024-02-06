#include <iostream>
#include <string>
#include <cmath>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int a, b, shovel = 0;
    cin >> a >> b;
    for (int i = 1; i < 1000; i++)
    {
        shovel++;
        if (((i * a) % 10 == b) || ((i * a) % 10 == 0))
            break;
    }
    cout << shovel;
    return 0;
}