#include <iostream>
#include <string>
#include <cmath>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        long long n, sum = 0;
        cin >> n;
        for (int i = 0; i < n; i++)
        {
            int num;
            cin >> num;
            sum += num;
        }
        if (ceil(sqrt(sum)) == floor(sqrt(sum)))
            cout << "YES" << endl;
        else
            cout << "NO" << endl;
    }
}