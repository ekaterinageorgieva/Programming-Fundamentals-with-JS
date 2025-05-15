function addressBook(input) {

    let addressRegister = {};

    for (const entry of input) {
        let [name, address] = entry.split(':');
        addressRegister[name] = address;
    }

    let sortedReg = Object.entries(addressRegister).sort((a, b) => a[0].localeCompare(b[0]));

    for (const line of sortedReg) {
        console.log(`${line[0]} -> ${line[1]}`);
    }

}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])