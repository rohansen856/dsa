#include <iostream>
#include <string>
#include <cmath>
#include <vector>
#include <algorithm>
#include <limits.h>
#include <set>
#include <map>
#include <random>
#include <chrono>
using namespace std;
// Problem Code/Link:
// Codechef profile: @saubhagya0111
// Codeforces profile: @saubhagya011
#define fio ios_base::sync_with_stdio(0), cin.tie(0), cout.tie(0);
#define incr_loop(a, n) for (i = a; i < n; i++)
#define decr_loop(a, b) for (i = a; i > b; i--)
#define nested_incr_loop(a, b) for (int j = a; j < b; j++)
#define nested_decr_loop(a, b) for (int j = b; j > a; --j)
typedef long long ll;
#define pb push_back
#define ppb pop_back
#define MP make_pair
#define sort_all(v) sort(all(v));
#define PI 3.141592653589793238462
#define space cout << " ";
#define gcd(a, b) __gcd(a, b);
#define all(x) x.begin(), x.end()
#define in(x) cin >> x;
#define in2(x, y) cin >> x >> y;
#define in3(x, y, z) cin >> x >> y >> z;
#define out(x) cout << x;
#define out2(x, y) cout << x << " " << y;
#define out3(x, y, z) cout << x << " " << y << " " << z;
#define line cout << endl;
#define string_in(x) getline(cin, x)
#define f first
#define s second
typedef vector<int> vi;
typedef vector<char> vc;
typedef set<int> si;
typedef set<char> scr;
typedef set<string> sst;
typedef vector<ll> vll;
typedef vector<string> vs;
typedef map<int, int> mii;
typedef pair<int, int> pii;
mt19937_64 rang(chrono::high_resolution_clock::now().time_since_epoch().count());
/**************Debugger*************/
void _print(int a) { cerr << a; }
void _print(long long a) { cerr << a; }
void _print(bool a) { cerr << a; }
void _print(char a) { cerr << a; }
#ifndef ONLINE_JUDGE
#else
#endif
/************************************/
void solution();
/************************************/
// lcm
int lcm(int a, int b)
{
    return (a / __gcd(a, b)) * b;
}
vector<int> primeUpto(int limit)
{
    vector<bool> isPrime(limit + 1, true);
    vector<int> primes;
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers
    for (int i = 2; i * i <= limit; i++)
    {
        if (isPrime[i])
        {
            for (int j = i * i; j <= limit; j += i)
            {
                isPrime[j] = false;
            }
        }
    }
    // Collect the prime numbers
    for (int i = 2; i <= limit; i++)
    {
        if (isPrime[i])
        {
            primes.push_back(i);
        }
    }
    return primes;
}
/////////////////////-------------------------------
int main()
{
#ifndef ONLINE_JUDGE
    freopen("Error.txt", "w", stderr);
#endif
    fio;

    solution();
    return 0;
}
/************************************/
void solution()
{
    int t, count = 0;
    cin >> t;
    while (t--)
    {
        int a[3];
        cin >> a[0] >> a[1] >> a[2];
        if ((a[0] + a[1] + a[2]) > 1)
        {
            /* code */
            count++;
        }
    }
    out(count);
}
/************************************/
