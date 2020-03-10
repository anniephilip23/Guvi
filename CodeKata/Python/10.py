def comp(a):
    flag = 1
    for i in range(2,a//2):
        if a % i == 0:
            flag = 0      
            return flag
    return flag
                   
                   
a = int(input())
b = comp(a)
if b:
	print("no")
else:
	print("yes")
