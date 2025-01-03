class Student {
    constructor(id, fullname, age, email, score) {
        this.id = id;
        this.fullname = fullname;
        this.age = age;
        this.email = email;
        this.score = score;
    }

    displayInfor = function () {
        console.log("Id: " + this.id);
        console.log("Full name: " + this.fullname);
        console.log("Age: " + this.age);
        console.log("Email: " + this.email);
        console.log("Score: " + this.score);
    }
    getResult = function () {
        return this.score >= 50 ? "Pass" : "Fail";
    }
    getId() {
        return this.id;
    }
    set setId(id) {
        this.id = id;
    }
    getFullName() {
        return this.fullname;
    }
    set setFullName(fullname) {
        this.fullname = fullname;
    }
}
let st1 = new Student("23703881", "Lam gia thinh", 20, "lamgiathinh05@gmail.com", 60);
let st2 = new Student("2000", "Huynh nguyen hoai nhi", 19, "huynhnguyenhoainhi@gmail.com", 29);
let students = [st1, st2];
students.forEach(st => {
    st.displayInfor();
    console.log(st.getResult());
})