'''Write a program to find sum of all natural numbers between 1 to n.

positive test case :
input = 3
output = 6
negative test case :
input = 1.3
output = invalid literal for int() with base 10: '1.3'
'''
n = int(input())
list = []
i = 1
while i<=n :
    list.append(i)
    i=1+i
print(sum(list))



