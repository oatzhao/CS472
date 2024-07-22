//Exercise1
String.prototype.filter=function (bannedWords){
    let wordsArray = this.split(' ');
    let  filteredArray = wordsArray.filter(word => !bannedWords.includes(word));
    return filteredArray.join(' ');
}
console.log("This house is not nice!".filter(['not']));

//Exercise2
Array.prototype.bubbleSort=function (){
    let len=this.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-1-i;j++){
            if(this[j]>this[j+1]){
                let temp=this[j];
                this[j]=this[j+1];
                this[j+1]=temp;
            }
        }
    }
    return this;
}

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

//Exercise3
function Person(name){
    this.name=name;
}

function Teacher(name){
    Person.call(this, name);
}

Teacher.prototype=Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;

Teacher.prototype.teach = function (subject){
    console.log(`${this.name} is now teaching ${subject}.`);
};

const teacher1=new Teacher('John');
teacher1.teach('CS')

//Person prototype object
const pProto={
    init: function (name){
        this.name = name;
    }
};

const teacherProto = Object.create(pProto);

teacherProto.teach = function (subject){
    console.log(`${this.name} is now teaching ${subject}`)
}

function createTeacher(name){
    const teacher = Object.create(teacherProto)
    teacher.init(name);
    return teacher ;
}
const teacher2 = createTeacher('Jane');
teacher2.teach('Science')

//Exercise4
//Using Object Prototype Approach
const personProto = {
    init: function(name, age) {
        this.name = name;
        this.age = age;
    },
    greeting: function() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    },
    salute: function() {
        console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
    }
};

const studentProto = Object.create(personProto);
studentProto.init = function(name, age, major) {
    personProto.init.call(this, name, age);
    this.major = major;
};
studentProto.greeting = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

const professorProto = Object.create(personProto);
professorProto.init = function(name, age, department) {
    personProto.init.call(this, name, age);
    this.department = department;
};
professorProto.greeting = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

const student = Object.create(studentProto);
student.init('Alice', 20, 'Computer Science');
student.greeting();
student.salute();

const professor = Object.create(professorProto);
professor.init('Dr. Smith', 45, 'Physics');
professor.greeting();
professor.salute();



//Using Function Constructor Approach
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function() {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function() {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
};

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.greeting = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

const studentNew = new Student('Alice', 20, 'Computer Science');
studentNew.greeting();
studentNew.salute();

const professorNew = new Professor('Dr. Smith', 45, 'Physics');
professorNew.greeting();
professorNew.salute();























