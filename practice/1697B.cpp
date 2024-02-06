#include <iostream>
#include <string>
#include <cmath>
#include <vector>
#include <algorithm>
using namespace std;
#define ll long long

/************************************/
void solution()
{
    ll n, q;
    cin >> n >> q;
    ll arr[n];
    for (ll i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    sort(arr, arr + n);
    ll hasharr[n] = {0};
    for (ll i = 1; i <= n; i++)
    {
        hasharr[i] = hasharr[i - 1] + arr[i - 1];
    }

    for (ll i = 0; i < q; i++)
    {
        ll x, y;
        cin >> x >> y;
        ll ans = 0;
        ans = hasharr[n - x + y] - hasharr[n - x];
        cout << ans << endl;
    }
}
/************************************/

int main()
{
#ifndef ONLINE_JUDGE
    freopen("Error.txt", "w", stderr);
#endif
    solution();
    return 0;
}