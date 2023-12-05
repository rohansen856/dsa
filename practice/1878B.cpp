#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    vector<int> arr;
    arr.push_back(2);
    arr.push_back(3);
    int ind = 2;
    for (int i = arr[1] + 1; i < 1000; i++)
    {
        if (((3 * i) % (arr[ind - 1] + arr[ind - 2])) != 0)
        {
            arr.push_back(i);
            ind++;
        }
    }
    int t;
    cin >> t;
    while (t--)
    {
        int k;
        cin >> k;
        for (int i = 0; i < k; i++)
        {
            cout << arr[i] << " ";
        }
        cout << endl;
    }

    return 0;
}