#include <iostream>
#include <math.h>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int main()
{
    int t;
    vector<int> a;
    cin >> t;
    while (t--)
    {
        int k;
        cin >> k;
        a.push_back(abs(k));
    }
    sort(a.begin(), a.end());
    cout << (a[0]);
    return 0;
}