function city(cityInf) {
    // for (let key in cityInf) {
    //   console.log(`${key} -> ${cityInf[key]}`);
    // }

    for (let [key, value] of Object.entries(cityInf)) {
        console.log(`${key} -> ${value}`);
      }
      
  }
  

city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
