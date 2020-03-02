negative oputput : guess the word with 4 lettes
now u can guess 7 letters one by one to find the word
enter ur aplabet:1
Ur guess is wrong, try the next letter
now u can guess 6 letters one by one to find the word
enter ur aplabet:345
Ur guess is wrong, try the next letter
now u can guess 5 letters one by one to find the word
enter ur aplabet:12345t
Ur guess is wrong, try the next letter
now u can guess 4 letters one by one to find the word
enter ur aplabet:23er
Ur guess is wrong, try the next letter
now u can guess 3 letters one by one to find the word
enter ur aplabet:345ft
Ur guess is wrong, try the next letter
now u can guess 2 letters one by one to find the word
enter ur aplabet:567y
Ur guess is wrong, try the next letter
now u can guess 1 letters one by one to find the word
enter ur aplabet:90de
Ur guess is wrong, try the next letter



list =['god','what','add','face']
import random
name = random.choice(list)
a =len(name)
print("guess the word with",a,"lettes")
life = a+3
while(life>0):
    print("now u can guess", life, "letters one by one to find the word")
    b = input("enter ur aplabet:")
    if b in name:
         print("ur guess is write")
         a = a-1
         if a==0:
             print("you have found the word",name)
             break
    else:
        print("Ur guess is wrong, try the next letter")








