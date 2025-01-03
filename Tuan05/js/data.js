function Student(id, fullname, age, email, score) {
    this.id = id;
    this.fullname = fullname;
    this.age = age;
    this.email = email;
    this.score = score;
    
    this.displayInfor = function() {
        console.log("Id: " + this.id);
        console.log("Full name: " + this.fullname);
        console.log("Age: " + this.age);
        console.log("Email: " + this.email);
        console.log("Score: " + this.score);
    }
    
    this.getResult = function() {
        return this.score >= 50 ? "Pass" : "Fail";
    }
}

let st1 = new Student("23703881", "Lam gia thinh", 20, "lamgiathinh05@gmail.com", 60);

st1.displayInfor();
console.log(st1.getResult());

let st2 = new Student("2000", "Huynh nguyen hoai nhi", 19, "huynhnguyenhoainhi@gmail.com", 29);
console.log(st2.displayInfor());
console.log("Result: " + st2.getResult());

let students = [st1, st2];
students.forEach(st => {
    st.displayInfor();
    console.log("Result: " + st.getResult());
})