#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int sumOfDigits(int number)
{
    int sum = 0;
    while (number != 0)
    {
        sum += number % 10;
        number /= 10;
    }
    return sum;
}

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int x, k;
        cin >> x >> k;
        int num = x;
        while ((sumOfDigits(num) % k) > 0)
        {
            num++;
        }
        cout << num << endl;
    }
    return 0;
}