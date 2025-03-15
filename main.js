/*
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ (mod) */
/*
let number1 = '4';
let number2 = '8';

let result = number1 + number2;
console.log('new number is', result);  //48
*/

/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าหรือเท่ากับ
<= น้อยกว่าหรือเท่ากับ */
/*
let number1 = 5;
let number2 = 3;

let condition = number1 == number2; // Boolean ค่าที่ได้จะเป็น true หรือ false
console.log('result of condition is',condition);
*/

/*if - else condition*/
// Code1
/*
let number1 = 5;
let number2 = 5;

if (number1 >= number2) {
    console.log('this is if');
} else {
    console.log('this is else');
}
*/
// Code2
/*
let number1 = 5;
let number2 = 5;

if (number1 > number2) {
    console.log('this is if');
} else if (number1 == number2) {
    console.log('this is else if');
} else {
    console.log('this is else');
}
*/

/* grade
>= 80 เป็นเกรด A
>= 70 เป็นเกรด B
>= 60 เป็นเกรด C
>= 50 เป็นเกรด D
< 50 เป็นเกรด F */
// code1
/*
let score = prompt('Enter your score: ');
console.log('your score is ' + score);
// if - else condition
if (score >= 80) {
    console.log('you are grade A');
} else if (score >= 70) {
    console.log('you are grade B');
} else if (score >= 60) {                    
    console.log('you are grade C');
} else if (score >= 50) {
    console.log('you are grade D');
} else {
    console.log('you are grade F');
}                               
*/
//code2
/*
let score = 65;

if (score >= 80) {
    console.log('you are grade A');
} else if (score >= 70 ) {
    console.log('you are grade B');
} else if (score >= 60 ){
    console.log('you are grade C');
}  else if (score >= 50 ) {
    console.log('you are grade D');
} else {
    console.log('you are grade F');
}
*/

/*
&& และ
|| หรือ
! นิเสธ หรือ ไม่ */
/*
let number1 = 5;
let number2 = 8;
// true || false = !(true) = false
let condition = number1 >= 3 && number2 >= 5;
console.log('result of condition', condition);

let age = 30;
let gender = 'male'
// true && true = true
if (age >= 20 && gender == 'male') {
    console.log('You are male adult');
}

let number = 5;

if (number % 2 != 0) {
    console.log('you are number');
}
*/

/* while loop , for */
/*
let counter = 0;
//while loop
console.log("while loop");
while (counter <= 10) { // true เช็คเงื่อนไข ถ้าเป็นจริง ถึงจะทำ
    console.log('while loop');
    counter = counter + 1; // บวกทีละ 1
    counter+=1 // บวกทีละ 1
    counter++ // บวกทีละ 1
}
//for loop
for (let counter = 0; counter < 10; counter++) {
    console.log('for loop');
}
*/

/*array*/
/*
let ages = [90, 60, 40, 45, 50];
console.log(ages);
//.sort() เรียงจากน้อยไปมาก
ages.sort();
console.log(ages);

let name_list = ['John', 'Bob', 'Alice', 'Mary'];
name_list.push('Mike');
console.log(name_list.length);
console.log(name_list[0]);
console.log(name_list[1]);  
console.log(name_list[2]);
//index คือตำแหน่งของข้อมูลใน array
for (let index = 0; index < name_list.length; index++) {
    console.log('names list',name_list[index]);
}
*/

/*.filter() , .forEach()*/
/*
let scores = [10, 20, 30, 40];
let newScortes = []

for (let index = 0; index < scores.length; index++) {
    console.log('scores', scores[index]);
    if (scores[index] >= 30) {
        newScortes.push(scores[index]);
        console.log('new scores', scores[index]);
    }
}
//.filter() กรองข้อมูล
newScortes = scores.filter((s) => {
    return s >= 20;
})
//.forEach() วนลูปข้อมูล
newScortes.forEach((ns) => {
    console.log('new_scores', ns);
});
*/

/* .map() */
// คูณข้อมูล
/*
scores[0] = scores[0] * 2;
scores[1] = scores[1] * 2;
scores[2] = scores[2] * 2;
scores[3] = scores[3] * 2;
scores[4] = scores[4] * 2;

//.map() คูณข้อมูล
scores = scores.map((s) => {
    return s + 2;
});

scores.forEach((s) => {
    console.log('scores', s);
});
*/

/* object */
/*
// ประกาศ object ชื่อ student ที่มี property ชื่อ name, age, grade
let student = [{
    name: 'John',
    age: 20,
    grade: 80
}, {
    name: 'Bob',
    age: 25,
    grade: 90
}];
// push-เพิ่มข้อมูล
student.push({
    name: 'Alice',
    age: 22,
    grade: 85
});
// pop-ลบข้อมูลตัวสุดท้าย
student.pop();
// length นับจำนวนข้อมูล
for (let index = 0; index < student.length; index++) {
    console.log('student number', (index + 1));
    console.log('student name', student[index].name);
    console.log('student age', student[index].age);
    console.log('student grade', student[index].grade);
}
*/

//object+array*
/*
let scores1 = 50
let scores2 = 90
let grade = ''
//ประกาศ function ชื่อ calculateGrade ที่รับค่า scores
function calculateGrade(scores) {
    if (scores >= 80) {
        grade = 'A'
    } else if (scores >= 70) {
        grade = 'B'
    } else if (scores >= 60) {
        grade = 'C'
    } else if (scores >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}

let student1 = calculateGrade(scores1)
let student2 = calculateGrade(scores2)
console.log('grade : ', scores1, student1)
console.log('grade : ', scores2, student2)
*/

/*arrow function*/
/*
let scores1 = 50
let scores2 = 90
let grade = ''

let calculateGrade = (scores) => {
    if (scores >= 80) {
        grade = 'A'
    } else if (scores >= 70) {
        grade = 'B'
    } else if (scores >= 60) {
        grade = 'C'
    } else if (scores >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}

let student1 = calculateGrade(scores1)
let student2 = calculateGrade(scores2)
console.log('grade : ', student1)
console.log('grade : ', student2)
*/

/*object function*/

/*
let students = [
    {
        name: 'John',
        score: 90,
        grade: 'A'
    },
    {
        name: 'Bob',
        score: 75,
        grade: 'B'
    },
    {
        name: 'Alice',
        score: 60,
        grade: 'C'
    }
]

let student = students.find((s) => {
    if (s.name == "John") {
        return true
    }
})

let doubleScore_student = students.map((s) => {
    s.score = s.score * 2
})

let highScore_student = students.filter((s) => {
    if (s.score > 80) {
        return true
    }
})

console.log('student : ', student)
console.log('highScore_student : ', highScore_student)
*/

/* ใช้ @media screen and (max-width: 768px) เพื่อกำหนด breakpoint
            ถ้า < 768px จะเปลี่ยนสีพื้นหลังเป็น lightgray 
            ถ้า > 768px จะเปลี่ยนสีพื้นหลังเป็น lightblue
           ใช้ @media screen and (min-width: 768px) เพื่อกำหนด breakpoint
            ถ้า < 768px จะเปลี่ยนสีพื้นหลังเป็น lightgray 
            ถ้า > 768px จะเปลี่ยนสีพื้นหลังเป็น lightblue 
        
            @media screen and (min-width: 768px) {
                .container {
                    background-color: lightblue;
                }
            }
*/
/*
const http = require('http');

const host = 'localhost';
const port = 8000; //port ที่ใช้ในการเปิดเว็บไซต์

// เมื่อเปิด เว็บไปที่ http://localhost:8000/ จะเรียกใช้งานฟังก์ชัน requestListener
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('My first server!');
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
*/