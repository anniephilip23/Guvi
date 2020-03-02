note = [2000,1000,500,200,100,50,20,10]
coin={1:5,2:2,3:1}
a = input()
list =[]
#no of digits in the input#
y = len(a)
for i in range(0,y):
    list1 = int(a[i])*10**(y-1-i)
    list.append(list1)
list3 =[]
for i in range(0,y):
    list1 = int(a[i])
    list.append(list3)
print(list)
print(list3)
x = len(note)
k =len(coin)
list4 =[]
while i < y:
    for j in note:
        if int(list[i]) >= j:
            den = j/list3[i]
            list3.append(den)
            break

        i = i + 1
print(list3)
print(list4)












