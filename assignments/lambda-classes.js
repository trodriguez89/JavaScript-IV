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
}





