#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

bool isValueInArray(const vector<int> &array, int targetValue)
{
    for (int i = 0; i < array.size(); ++i)
    {
        if (array[i] == targetValue)
        {
            return true; // Value found in the array
        }
    }
    return false; // Value not found in the array
}

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n, m;
        cin >> n >> m;
        vector<int> posn;
        for (int i = 0; i < m; i++)
        {
            int a, b;
            cin >> a >> b;
            posn.push_back(a);
            posn.push_back(b);
        }
        bool possible = false;
        for (int i = 1; i <= n; i++)
        {
            if (!(isValueInArray(posn, i)))
            {
                possible = true;
                break;
            }
        }
        cout << (possible ? "YES" : "NO") << endl;
    }
    return 0;
}