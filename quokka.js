
function normalize(dateString) {
  /* 

    First of we'll need to create some sort of storage to hold our substrings,
    in this case, it would make perfect sense to use an array.

  */

  const storage = [];

  /*
    Perfect, now we have an array that'll act as our storage. What's next?
    In JavaScript, we have the ability to access each character by their index
    which means that if we would like to get the second letter from the word "hey"
    i'd do that by typing "hey"[1]. Does that mean we have the ability to iterate
    through each character? Yup!

    Let's continue with constructing a for loop.
    
    ? NOTE: the letter "e" has an index of 1 since index is zero-based
  */

  /*
    for ('initialExpression'; 'conditionExpression'; 'incrementExpression') {

    }

    1. initialExpression: 

    Initializes one or more loop counters, usually declared
    as a variable such as "let i = 0;"

    2. conditionExpression: 

    The condition expression could be seen as a guard, the guard's only,
    but highly important job (in our case) is to make sure that the loop
    will execute the right amount of times, not too many, not too few.
    We would like to execute the loop exactly 10 times, why 10? Because 
    our date string consists of 7 numbers and 3 hyphens.
    
    Our condition may look like this: "i < 10;", that's work, until 
    approx 8000 years from now when our string will be 11 characters instead of 10, 
    and to avoid that, we'll specify our condition as "i < dateString.length"

    TL:DR The loop will execute each time the condition is met.

    3. incrementExpression:

    Pretty straight forward, it increments our initialExpression
    by a given number which is usually 1. -  "i++"

    _______________________________

    Now out loop might look something like this

  */

  for (let i = 0; i < dateString.length; i++) {
    /* 
    
      Remember what i explained earlier about how we
      are able to access each character by their index?
      Let's put that into practice.

    */

    const strAtCurrentIndex = dateString[i]

    /*
      first iteration: dateString[i] = '2'
      second iteration: dateString[i] = '0'
      third iteration: dateString[i] = '-'

      etc etc etc..
    */


    /*
      I saw that you used an if statement inside
      your solution so i guess you got a basic 
      understanding of how one works, here's a
      recap: An if statement could be seen as the conditionExpression
      inside the for loop, it essentially acts as a guard 
      that checks if some value equals some other value, if so,
      execute the code inside the curly braces else
      execute the code inside the else block. - (if we specified one)

    */

    if (strAtCurrentIndex === '-') {
      storage.push('/') // .push is a built in method that 'pushes' a value on to an array.
    } else {
      storage.push(strAtCurrentIndex)
    }
  }

  /*
    let's explain the if statement and it's content in pseudo code.

    If(character at index i inside dateString is equal to an hyphen) {
      add/push a slash instead of the hyphen to our storage array
    } else {
      add/push the current character to out storage array
    }

    That's it(?) There's just once simple snippet of code that's missing

    for it to behave like we intended, that's the almighty "return" statement!
    we'll need to make sure that we place it outside of the loop, else it'll 
    return for every iteration and that'll be a big yikes
  */

  return storage.join('')

  /* 

    .join('') glues the array together, our array essentially goes from
    this: ['2','0','/','0','5','/','2','0','1','7']
    to this: 20/05/2017
  */
}

const normalizedDate = normalize("20-05-2017")

console.log(normalizedDate) // 20/05/2017