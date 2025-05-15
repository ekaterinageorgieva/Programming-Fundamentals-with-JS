function empl(array) {

    let listOfEmployees = {};

    for (let employee of array) {
        listOfEmployees.name = employee;
        listOfEmployees.personalNumber = employee.length;

        console.log(`Name: ${listOfEmployees.name} -- Personal Number: ${listOfEmployees.personalNumber}`);
    }
}

empl(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);