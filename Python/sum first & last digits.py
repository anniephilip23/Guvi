'''Write a program to find sum of first and last digit of a number.

positive test case :
input = 1234
output = 5
    
'''
n = int(input())
y= n%10
while n>=10:
    n = n/10
x = int(n)
print(x+y)





