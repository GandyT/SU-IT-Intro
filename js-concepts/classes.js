class Student {
    constructor(name, gpa) {
        this.name = name;
        this.gpa = gpa;
    }

    speak() {
        console.log(`Hi my name is ${this.name}`)
    }
}

const student = new Student("Randy", 80)
console.log(student)
student.speak()