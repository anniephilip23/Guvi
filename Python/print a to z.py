'''Write a program to print all alphabets from a to z. - using while loop
positive test case :
output = a b c d e f g h i j k l m n o p q r s t u v w x y z
'''
list =[]
i = 97
while i<123 :
    list.append(chr(i))
    i=i+1
print(*list, sep =" ")

