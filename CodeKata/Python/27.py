a, b =input().split()
a = int(a)
b = int(b)
c= list(int(x) for x in input().split())[:a]
d= c.count(b)
if d>0:
	print(d-1)
else:
	print('-1')
