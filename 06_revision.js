/*
1.[2,4,6]
2.20
3.2
4.true
5.true
6.Rahul
7.[30,40,50]
8.30
9.B)
10.C)
11.B)
12.D)
13.B)
14.B)
15.B)
*/

//Q16.

const students = [
  {name:"A", marks:65},
  {name:"B", marks:82},
  {name:"C", marks:90}
];

const ans1 = students.find(student => student.marks > 80)
console.log(ans1.name);

//Q17.

const tech = ["HTML","CSS","React","Node"];
console.log(tech.findIndex(tech => tech === "React"))

//Q18.

const arr = [5,8,-2,10];
console.log(arr.some(num => num < 0))

//Q19.

const studentss = [
    {name:"A",marks:65},
    {name:"B",marks:52},
    {name:"C",marks:38}
];

console.log(studentss.every(stud => stud > 40))

//Q20.

const employees = [
    {name:"Bijoy", salary:45000, active:true},
    {name:"Rahul", salary:30000, active:false},
    {name:"Aman", salary:60000, active:true},
    {name:"Riya", salary:55000, active:true}
];

const result = employees
                .filter(employee => employee.active && employee.salary>50000)
                .map(employee => employee.name)

console.log(result)