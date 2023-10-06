 let year = date.getFullYear();
 const date = new Date();
 const students = 
 [
    {
        firstName: "Dennis",
        lastName: "Unknown",
        DOB: 2007,
        graduated: false,
        age: function () {
            //subtract his DOC from current year
            return year - this.DOB;
        },
        siblings: [],
        spouse: null,
    },
    {
        firstName: "Hey",
        lastName: "Hen",
        DOB: 2006,
        graduated: false,
        age: function () {
            return year - this.DOB;
        },
        siblings: [],
        spouse: null,
    },
    {
        firstName: "Hello",
        lastName: "Lin",
        DOB: 2004,
        graduated: true,
        age: function () {
            return year - this.DOB;
        },
        siblings: [],
        spouse: null,
    },
];

students.forEach((student) => console.log(student.firstName))

 //let nums = [1, 2, 3, 4, 5];
 //()=> arrow functions auto return, this key word points global
 //access individual element from array/List index, starts at 0
 //console.log(nums[0]);
 //nums.forEach((el) => console.log(el));