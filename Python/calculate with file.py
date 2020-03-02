txt = open("calculator.txt","a+")

print("1.for add enter 1 \n 2.for sub enter 2 \n 3.for mul enter 3 \n 4.for div enter 4")
i=1
while (i>=1):
    operation = int(input(" what operation you want to do : "))
    txt.write("The operation chosen is %d\n" %operation)
    a = int(input(" enter your first number : "))
    txt.write("The first number : %d\n" %a)
    b = int(input(" enter your second number : "))
    txt.write("The second number : %d\n" %b)

    def add(a, b):
        x = a + b
        print(x)
        txt.write("output of add is %d\n" %x)

    def sub(a, b):
        x = a - b
        print(x)
        txt.write("output of sub is %d\n" % x)
    def mul(a, b):
        x = a * b
        print(x)
        txt.write("output of mul is %d\n" % x)
    def div(a, b):
        x = a / b
        print(x)
        txt.write("output of div is %d\n" % x)
    if operation ==1:
        add(a,b)
    elif operation ==2:
        sub(a,b)
    elif operation ==3:\
        mul(a,b)
    elif operation ==4:
        div(a,b)
    z = input ("do want to continue enter yes : ")
    if z=="yes" :
        i = i+1
    else :
        print("thank u")
        break







