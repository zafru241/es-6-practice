class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.schoolName = "Lalmatia School" //..default object..//
        this.country = "bangladesh";
    }
}
const student1 = new Student(12, "zafru");
const student2 = new Student(13, "Mahiya");
const student3 = new Student(15, "Bappi");

// console.log(student1, student2);
// console.log(student1.id, student2.name);
// console.log(student1, student2, student3);
console.log(student3);