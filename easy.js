// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

const typeOfExercise = exercise => () => console.log(`Todays Exercise: ${exercise}`);

 const run = typeOfExercise('running')
 run()
 const swim = typeOfExercise('swimming')
 swim()











