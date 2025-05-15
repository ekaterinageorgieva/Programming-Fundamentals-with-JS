function theatrePromotions(day, age) {
    let cost = ""
    if (day === 'Weekday') {
        if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
            cost = "12$";
        } else if (age > 18 && age <= 64) {
            cost = "18$";
        } else {
            cost = "Error"
        }

    } else if (day === 'Weekend') {
        if ((age >= 0 && age <= 18) || (age > 64 && age <= 122)) {
            cost = "15$";
        } else if (age > 18 && age <= 64) {
            cost = "20$";
        } else {
            cost = "Error"
        }

    } else if (day === 'Holiday') {
        if (age >= 0 && age <= 18) {
            cost = "5$";
        } else if (age > 18 && age <= 64) {
            cost = "12$";
        } else if (age > 64 && age <= 122) {
            cost = "10$";
        } else {
            cost = "Error"
        }
    }

    console.log(`${cost}`)
};

theatrePromotions('Holiday', 33);
theatrePromotions('Holiday', 18);
theatrePromotions('Holiday', -33);
theatrePromotions('Weekend', 33);
theatrePromotions('Weekday', 12);