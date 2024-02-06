#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> checknums(int n, string s)
{
    int zeros, ones;
    for (int i = 0; i < n; i++)
    {
        if (s.at(i) == '0')
            zeros++;
        else if (s.at(i) == '1')
            ones++;
    }
    return {zeros, ones};
}

int more_zeros(int n, string s)
{
    int extra = 0;
    for (int i = 0; i < n - 1; i++)
    {
        if (s.at(i) != s.at(i + 1))
            extra++;
    }
    return extra;
}

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        string s;
        cin >> s;
        vector<int> count = checknums(n, s);
        if (count.at(0) > count.at(1))
        {
            cout << "YES";
        }
        else
        {
            int new_zeros = count.at(0) + more_zeros(n, s);
            count.at(0) = new_zeros;
            if (count.at(0) > count.at(1))
                cout << "YES";
            else
                cout << "NO";
        }
        cout << endl;
    }
    return 0;
}