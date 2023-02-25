<!--QUESTION4-->
QUES:What are the different ways you can clone an object? Give examples for each of them.

ANS:

1) Using Object.assign

Example: const person1 = {

                fname: "Ade",

                age: 20,
};

const moreInfo = Object.assign({}, person1);

2) Using spread syntax 

Example: const moreInfo2 = { ...person1 };

3) Using the method JSON.parse(JSON.stringify())

const moreInfo3 = JSON.parse;
