l1 = [3, 1, 4, 2, 5]
l1.sort(reverse=True)
print(l1)

l2 = [3, 1, 4, 2, 5]
for a in l2:
    a= a**2
    print(a)
***************************************************************
l3 = [
    (105, "d"),
    (21, "z"),
    (0, "v")
]
for atuple in l3:
    print(atuple)
****************************************************************

l = [
    {
        "color": "red",
        "value": "#f00"
    },
    {
        "color": "green",
        "value": "#0f0"
    },
    {
        "color": "blue",
        "value": "#00f"
    }
]
for adictnory in l:
    print(adictnory.values())

*********************************************************
py = {'Python': 'Rocks', 'inferior': ['java', 'cobol']}
print(py.get('inferior'))

***************************************************************

prices = {'apple': 0.40, 'banana': 0.50}
my_purchase = {
    'apple': 1,
    'banana': 6}
y= prices.get('apple')*my_purchase.get('apple')
z= prices.get('banana')*my_purchase.get('banana')
x =y+z
print(x)