#include <iostream>
#include <string>
#include <cmath>
#include <vector>
#include <algorithm>
#include <limits.h>
using namespace std;

int main()
{
    int n, v;
    cin >> n >> v;
    int init = n < v ? n : v;
    if (n <= v)
    {
        cout << n - 1;
    }
    else
    {
        int req = 0;
        for (size_t i = 2; i < n - v + 1; i++)
        {
            req += i;
        }
        cout << req + init;
        return 0;
    }
}