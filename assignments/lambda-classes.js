// CODE here for your Lambda Classes
class Person{
    constructor(atts){
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(intsAtts){
        super(intsAtts)
        this.specialty = intsAtts.specialty;
        this.favLanguage = intsAtts.favLanguage;
        this.catchPhrase = intsAtts.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentAtts){
        super(studentAtts)
        this.previousBackground = studentAtts.previousBackground;
        this.className = studentAtts.className;
        this.favSubjects = studentAtts.favSubjects;
    }
    listsSubjects(){ // a method that logs out all of the student's favoriteSubjects one by one
            this.favSubjects.forEach(function(subjects) {
              return console.log(subjects);
            })
    
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(pmAtts){
        super(pmAtts)
        this.gradClassName = pmAtts.gradClassName;
        this.favInstructor = pmAtts.favInstructor;
    }
     standUp(slackChannel){ // a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
     }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

//Person Objects
const tom = new Person ({
    name: "Thomas",
    location: "Salinas",
    age: 29,

})

const teresa = new Person ({
    name: "Teresa",
    location: "Salinas",
    age: 25,
    
})
// Instructor Objects
const sean = new Instructor ({
    name: "Sean",
    location: "Greenfield",
    age: 29,
    specialty: "CSS",
    favLanguage: "CSS",
    catchPhrase: "Everybody gets one"
})

const tony = new Instructor ({
    name: "Tony",
    location: "Soledad",
    age: 66,
    specialty: "JavaScript",
    favLanguage: "JavaScript",
    catchPhrase: "Good enough is not good enough"
})

// Student Objects
const rachel = new Student ({
    name: "Rachel",
    location: "South Carolina",
    age: 21,
    previousBackground: "College Student",
    className: "WEB 25",
    favSubjects: ["HTML", "CSS"]
})

const tina = new Student ({
    name: "Tina",
    location: "Seattle",
    age: 37,
    previousBackground: "Cook",
    className: "WEB 25",
    favSubjects: ["CSS", "JavaScript"]
})
// Project Manager Objects
const alisa = new ProjectManager ({
    name: "Alisa",
    location: "New York",
    age: 28,
    specialty: "Whatever you need it to be",
    favLanguage: "C++",
    catchPhrase: "With great power, comes great responsibility",
    gradClassName: "WEB 1",
    favInstructor: "Dr. Who"
})

const jeremy = new ProjectManager ({
    name: "Jeremy",
    location: "Alaska",
    age: 105,
    specialty: "I'm a floater",
    favLanguage: "Java",
    catchPhrase: "May the Force be with you",
    gradClassName: "WEB 103506",
    favInstructor: "Dr. Seuss"
})

console.log(tom.speak());
console.log(sean.demo("Arrays"));
console.log(rachel.speak());
console.log(tony.grade(tina, "C++"));
console.log(rachel.listsSubjects());
console.log(rachel.sprintChallenge("FlexBox"));
console.log(jeremy.standUp("Web25 Help"));
console.log(alisa.debugsCode(tina, "Python"));



