a, b  = input().split()
a = int(a)
b = int(b)
c =list(int(x) for x in input().split())[:a]
if b in c:
	print("yes")
else:
	print("no")
