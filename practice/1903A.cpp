#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int check_sorted(vector<int> &arr, int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        if (arr[i] > arr[i + 1])
            return 0;
    }
    return 1;
}

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n, k;
        vector<int> nums;
        cin >> n >> k;
        for (int i = 0; i < n; i++)
        {
            int inp;
            cin >> inp;
            nums.push_back(inp);
        }
        if (k <= 1 && check_sorted(nums, n) != 1)
            cout << "NO";
        else
            cout << "YES";
        cout << endl;
    }
    return 0;
}