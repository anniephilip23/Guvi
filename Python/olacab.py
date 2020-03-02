rate ={"mini":10,"micro": 20,"share": 30}
cars ={"mini": 3,"micro": 3,"share": 3}
a = int(input("enter your start location: "))
b = int(input("enter your end location: "))
print("cab avilable are", cars.keys())
def fun(cab):
    y = rate.get(cab)
    d = b-a
    cost = y*d
    print("cab rate is Rs.", cost)
    i = cars.get(cab)
    while (i>0):
        print("Number of cabs avilable", cars)
        print("ur cab is booked")
        cars[cab] = i-1
        r = input("please enter yes if u want continue booking :")
        if r=="yes":
            i=i-1
        else:
            print("thank u for booking")
            break
    print(cab, "not avilable select some other car")
fun(input("enter your cab type: "))








