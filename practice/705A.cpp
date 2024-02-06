#include <iostream>
#include <string>
#include <cmath>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    int n;
    cin >> n;
    string str = "";
    if (n)
        str += "I hate ";
    for (int i = 1; i < n; i++)
    {
        str += "that ";
        if (i % 2 == 0)
            str += "I hate ";
        else
            str += "I love ";
    }
    str += "it";
    cout << str;

    return 0;
}