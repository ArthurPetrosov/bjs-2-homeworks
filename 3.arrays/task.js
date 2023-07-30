const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(el => el.gender === gender).reduce((accum, averageAge, index, arrayLength) => accum + averageAge.age / arrayLength.length, 0);
    return result 
};