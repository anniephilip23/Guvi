N, k = [int(x) for x in input().split()]
a = list(int(x) for x in input().split())[:N]
if (1 <= N, k <= 100000):
    i = k
    while i>0:
        a.insert(0,a[N-1])
        a.pop(N)
        i -=1
listToStr = ' '.join(map(str, a))
print(listToStr)