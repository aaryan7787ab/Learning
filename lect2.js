//Check age every year and tell when the person becomes adult

function person(fullname, startAge, startYear) {
  let name = fullname;
  let age = startAge;
  let year = startYear;

  while (age <= 50) {
    if (age >= 18) {
      console.log(
        `Name: ${name}
Age: ${age}
Current Year: ${year}
result: ${name} is Adult Now
        `,
      );
      break;
    } else {
      console.log(`${name} age is : ${age}
        Result: Not Adult`);
    }
    age++;
    year++;
  }
}

// driving system eligibility system

function system(fullName, birthYear, currentYear) {
  let year = currentYear - birthYear;

  if (year >= 18) {
    console.log(`${fullName} is Eligible for the Licnese `);
    return;
  } else {
    let age = 18 - year;
    let newage = currentYear + age;
    console.log(`${fullName} is Not  Eligible for the Licnese .
 In  ${newage} year you will be Eligible for license`);
  }
}
