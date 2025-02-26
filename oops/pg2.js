class Student{
    st_name
    st_rollno
    st_classdiv

    constructor(name , rollno, div){
    this.st_name = name
    this.st_rollno = rollno
    this.st_classdiv = div

    }
    display(num){
        // console.log(`student name is ${this.st_name}`);
        console.log(num);
        
    }
}
const stud1 = new Student('meera','21','B')
stud1.display(5)