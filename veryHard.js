// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a    back-end developer".
// See next page…
// 4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
// 5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
// 8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?

class Person2{
    constructor(name, job, age){
        this.name2 = name;
        this.job2 = job;
        this.age2 = age
    }

    exercise2(){
        console.log("Running is fun! - said no one ever");
    }
    
    fetchJob2(){
        console.log(this.name2 + " is a " + this.job2);
    }

}

const person2 = new Person2 ("Brad", "backend developer")
person2.exercise2()
person2.fetchJob2()

class Programmer extends Person2 { // extends = created a subclass 
    constructor(name, job, age, languages) {
      super(name, job, age);  // super allows subclass to access properties and methods form Programmer class 
      this.languages = languages;
      this.busy = true;  // change to false to see if he can accept work or not 
    }
  
    completeTask() {
      this.busy = false;
    }
  
    acceptNewTask() {
      this.busy = true;
    }
  
    offerNewTask() {
      if (this.busy === true) {
        console.log(`${this.name2} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name2} would love to take on a new responsibility.`);
      }
    }
  
    learnLanguage(language) {
      this.languages.push(language);
    }
  
    listLanguages() {
      console.log(`${this.name2} knows these languages: ${this.languages.join(', ')}.`);
    }
  }

const programmer1 = new Programmer('Mark', 'frontend developer', 30, ['JavaScript']);

programmer1.fetchJob2(); // Mark is a frontend developer


programmer1.exercise2(); // Running is fun! - said no one ever

programmer1.completeTask();
console.log(programmer1.busy) // False which now makes him available to take on a new responsibility

programmer1.offerNewTask(); // Mark would love to take on a new responsibility.

programmer1.learnLanguage('React'); // adding a new language 

programmer1.listLanguages(); // Mark knows these languages =: JavaScript, React 




