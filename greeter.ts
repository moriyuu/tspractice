class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " +  lastName;
  }
}

interface Person {
  firstName: string;
  middleInitial: string;
  lastName: string;
}

function greeter(person: Person): string {
  return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}

// let user = { firstName: "Red", lastName: "Bull" };
const user: Person = new Student("Maximum", "the", "Holmon");

console.log(user)

document.body.innerHTML = greeter(user);
