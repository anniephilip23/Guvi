'''Write a program to find sum of all even numbers between 1 to n.

positive test case :
input = 4
output = 6
negative test case :
input = 1.3
output = invalid literal for int() with base 10: '1.3'
'''
n = int(input())
list =[]
i = 1
while i<=n :
    y = i%2
    if y==0:
        list.append(i)
    i=1+i
print(sum(list))



