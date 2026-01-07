function travelInfo(input) {
    
    let countries = {};

    for (let row of input) {
        
        let currentRow = row.split( ' > ');
        let country = currentRow[0];
        let town = currentRow[1];
        let price = Number(currentRow[2]);

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
        }
        if (!countries[country].hasOwnProperty(town)) {
            countries[country][town] = price;
        }
        if (countries[country][town] > price) {
            countries[country][town] = price
        }
    }

    let keys = Object.keys(countries);
    keys.sort((a,b) => a.localeCompare(b));

    for (let item of keys) {
        let sortedTowns = Object.entries(countries[item]);
        sortedTowns.sort((a, b) => a[1] - b[1])
        
        let result = [];
        for (let town of sortedTowns) {
            result.push(town.join(' -> '))
        }
        console.log(`${item} -> ${result.join(' ')}`);
    }
};


travelInfo([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);