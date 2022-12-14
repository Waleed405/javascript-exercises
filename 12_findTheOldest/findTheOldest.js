const findTheOldest = function(people) {
    let oldest = {};
    let oldestAge = 0;
    people.forEach(person => {
        let age;
        if(person.yearOfDeath == undefined) {
            age = (new Date()).getFullYear() - person.yearOfBirth;
        }
        else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if(age > oldestAge) {
            oldest = person;
            oldestAge = age;
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
