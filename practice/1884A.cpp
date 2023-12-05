#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int x, k;
        cin >> x >> k;
        if (x < k)
        {
            cout << k << endl;
            continue;
        }
        int num = x;
        vector<int> res;
        while (num >= 10)
        {
            numArr.push_back(num % 10);
            cout << num % 10;
            num /= 10;
        }
        while(num)
    }
    return 0;
}