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
        int n;
        cin >> n;

        vector<int> arr(n);
        for (int i = 0; i < n; i++)
        {
            cin >> arr[i];
        }

        sort(arr.begin(), arr.end());

        int largest = arr[n - 1];
        int flag = 0;

        vector<int> hasharr(1000000, 0);
        for (int i = 0; i < n; i++)
        {
            hasharr[arr[i]] += 1;
        }

        for (int i = 0; i < n; i++)
        {
            if (hasharr[i] == 0 && i <= largest)
            {
                flag++;
                break;
            }
        }

        for (int i = 0; i < n - 1; i++)
        {
            if (hasharr[i] < hasharr[i + 1])
            {
                flag++;
                break;
            }
        }

        if (flag > 0)
        {
            cout << "NO" << endl;
        }
        else
        {
            cout << "YES" << endl;
        }
    }

    return 0;
}
