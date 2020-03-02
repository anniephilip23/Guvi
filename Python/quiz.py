question = {1:"1. what is our national animal? \n a. mouse \n b.dog \n c.tiger",
            2:"2. what is our national bird? \n a. hen \n b.peacock \n c.crow",
            3:"3. what is our national flower? \n a. lotus \n b.Rose \n c.jasmine"}
answer ={1:'c',2:'b',3:'a'}
i=1
result= 0
a = len(question)
while (i<=a):
    print(question.get(i))
    ans = input("please enter the correct answer : ")
    if ans == answer.get(i):
        result = int(result) +10
        print("your answer is correct try the next question")
    else:
        print("your answer is wrong try the next question")
    i=i+1

print("your total score is : ", result)
