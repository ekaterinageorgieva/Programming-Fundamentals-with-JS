function solve(country) {
    let lang = "";
    if (country == "USA" || country == "England") {
        lang = "English";
    } else if (country == "Spain" || country == "Argentina" || country == "Mexico")
        lang = "Spanish";
    else { 
        lang = "unknown" 
    };

    console.log(lang);
};

solve("Spain");
solve("USA");
solve("Mexico");
solve("Germany");
solve("Argentina");
solve("England");