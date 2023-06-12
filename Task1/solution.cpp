#include <bits/stdc++.h>
using namespace std;

#define Abu_Hamza ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
#define what_is(x) cerr << #x << " is " << x << endl;
#define all(v) (v).begin(), (v).end()
#define sz(v) ((int)((v).size()))
#define clr(v, d) memset(v, d, sizeof(v))
#define rep(i, v) for (int i = 0; i < sz(v); ++i)
#define repa(x, v) for (auto x : v)
#define lp(i, n) for (int i = 0; i < (int)(n); ++i)
#define lpi(i, j, n) for (int i = (j); i < (int)(n); ++i)
#define lpd(i, j, n) for (int i = (j); i >= (int)(n); --i)
#define tr(container, it) for (typeof(container.begin()) it = container.begin(); it != container.end(); it++)
#define o_o ;
#define endl '\n'
#define F first
#define S second
#define pb push_back
#define eps 1e-9
#define yes cout << "YES" << endl;
#define no cout << "NO" << endl;

typedef long long ll;
typedef vector<bool> vb;
typedef vector<int> vi;
typedef vector<ll> vl;
typedef vector<double> vd;
typedef vector<string> vs;
typedef queue<int> qi;
typedef deque<int> di;
typedef set<int> si;
typedef pair<int, int> pii;
typedef pair<int, ll> pil;
typedef pair<ll, int> pli;
typedef pair<ll, ll> pll;
typedef vector<pii> vii;
typedef vector<pli> vli;
typedef vector<pil> vil;
typedef vector<pll> vll;
typedef map<string, int> msi;

void solve();
double getDistance(pair<double, double> point1, pair<double, double> point2);

int main()
{
    Abu_Hamza

        // #ifndef ONLINE_JUDGE
        // 	freopen("input.txt", "r", stdin);
        // 	freopen("error.txt", "w", stderr);
        // 	freopen("output.txt", "w", stdout);
        // #endif

        int tt = 1;
    // cin >> tt;
    while (tt--)
    {
        solve();
    }

    cerr << "time taken : " << (float)clock() / CLOCKS_PER_SEC << " secs" << endl;
    return EXIT_SUCCESS o_o
}

double getDistance(pair<double, double> point1, pair<double, double> point2)
{
    double x_diff = point2.first - point1.first;
    double y_diff = point2.second - point1.second;
    return sqrt(x_diff * x_diff + y_diff * y_diff);
}

void solve()
{

    vector<pair<double, double>> houses = {
        {1.5, 2.0},
        {2.0, 1.0},
        {1.5, 5.0},
        {3.5, 3.0},
        {1.5, 1.0},
    };
    int p1, p2, n;
    cout << "enter how many unweell persons: ";
    cin >> n;
    if (n == 1)
    {
        cin >> p1;
        double minDis = 1e6, unwillDis = 0.0;
        unwillDis = getDistance(make_pair(0.0, 0.0), houses[p1 - 1]);
        int per1 = 4;
        lp(i, 5)
        {
            if (i + 1 != p1)
            {
                double Dis = getDistance(make_pair(0.0, 0.0), houses[i]);
                if (Dis < unwillDis and Dis < minDis)
                {
                    minDis = Dis;
                    per1 = i + 1;
                }
            }
        }
        cout << "the person who will drive is " << per1 << endl;
    }
    else
    {
        cin >> p1 >> p2;

        double minDis = 1e6, combinedDis = 0.0;
        combinedDis = getDistance(make_pair(0.0, 0.0), houses[p1 - 1]) + getDistance(make_pair(0.0, 0.0), houses[p1 - 1]);
        int per2;
        lp(i, 5)
        {
            if (i + 1 != p1 and i + 1 != p2)
            {
                double Dis = getDistance(make_pair(0.0, 0.0), houses[i]);
                if (Dis + combinedDis < minDis)
                {
                    minDis = Dis + combinedDis;
                    per2 = i + 1;
                }
            }
        }
        cout << "the person who will drive them is " << per2 << endl;
    }
}