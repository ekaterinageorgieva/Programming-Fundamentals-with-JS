function phonebook(input) {

    let phoneRegister = {};

    for (let line of input) {
        let tokens = line.split(' ');
        let name = tokens[0]
        let phone = tokens[1]

        phoneRegister[name] = phone;
    }

    for (let name in phoneRegister) {
        console.log(`${name} -> ${[phoneRegister[name]]}`);
    }

}

phonebook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])