
// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }


 
// Person.prototype.calculateAge = this.calculateAge = function(){
//     console.log(2016 - this.yearOfBirth)
//  };
// Person.prototype.lastName = 'Frod';
// var john = new Person('John', 1998, 'Teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(jane.lastName);

// var personProto = {
//     calculateAge: function(){
//         console.log(2016 - this.yearOfBirth)
//     }
// };




// var john = Object.create(personProto)
// john.name = 'Chibozor';
// john.age = '34';
// john.job = 'Teacher';

var years = [1990, 1988,1948,1938,1938];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el){
    return el >= 18;
};

function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (9.67 * el));
    }else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges  = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);

console.log(rates);


