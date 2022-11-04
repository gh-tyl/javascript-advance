// init angularjs
const app = angular.module('firstApp', []);
// create controller
app.controller('foodCtrl', function ($scope) {
    // create foods array
    $scope.foods = ['Rice', 'Beans', 'Eggs', 'Chicken', 'Fish']
    // create a function to add food to the foods array
    $scope.addFood = function () {
        // add food to foods array
        $scope.foods.push($scope.newFood);
        // clear input field
        $scope.newFood = '';
    }
});

app.controller('stuCtrl', function ($scope) {
    // create a function to calculate the max, min, and average grade
    $scope.calcGrade = function () {
        console.log('calcGrade');
        let max = $scope.students[0].grade;
        let min = $scope.students[0].grade;
        let sum = 0;
        const cal = (value) => {
            // single line if statement
            if (value.grade > max) max = value.grade;
            if (value.grade < min) min = value.grade;
            sum += value.grade;
        }
        // loop through all students
        $scope.students.forEach(cal);
        $scope.avg = sum / $scope.students.length;
        $scope.max = max;
        $scope.min = min;
    }
    // create students array
    $scope.students = [
        {
            fname: 'Lucas',
            lname: 'Lucas',
            grade: 11
        },
        {
            fname: 'Mathew',
            lname: 'Mathew',
            grade: 21
        },
        {
            fname: 'Tina',
            lname: 'Tina',
            grade: 31
        },
        {
            fname: 'Tyler',
            lname: 'Tyler',
            grade: 41
        }
    ]
    $scope.calcGrade();
    // create a function to add student to the students array
    $scope.addStudent = function () {
        // add student to students array
        $scope.students.push(new stuObj($scope.fname, $scope.lname, $scope.grade));
        // clear input field
        $scope.fname = '';
        $scope.lname = '';
        $scope.grade = '';
        $scope.calcGrade();
    }
});

class stuObj {
    constructor(fname, lname, grade) {
        this.fname = fname;
        this.lname = lname;
        this.grade = grade;
    }
}
