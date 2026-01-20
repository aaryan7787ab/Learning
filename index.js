// loops 
// for loop 

let name=" aryan bhardwaj ";
for ( let i= 1; i<=5;i++){
    console.log([i],name);

};

// for each

let name = "aryan";
let fullname = Array.from(name);

fullname.forEach((Element) => {
  console.log(Element);
});

//for in loop
let num = [1, 2, 34, 56, 78, 9];

for (let i in num) {
  console.log(num[i]);
}
