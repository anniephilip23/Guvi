print ("1.add \n 2.sub \n 3.mul \n 4.div")
i=1
while (i>=1):
    operation = input(" what operation you want to do : ")
    a = int(input(" enter your first number : "))
    b = int(input(" enter your second number : "))

    def add(a, b):
        x = a + b
        print(x)

    def sub(a, b):
        x = a - b
        print(x)
    def mul(a, b):
        x = a * b
        print(x)
    def div(a, b):
        x = a / b
        print(x)
    if operation =='add':
        add(a,b)
    elif operation =='sub':
        sub(a,b)
    elif operation =='mul':\
        mul(a,b)
    elif operation =='div':
        div(a,b)
    z = input ("do want to continue enter yes : ")
    if z=="yes" :
        i = i+1
    else :
        print("thank u")
        break







