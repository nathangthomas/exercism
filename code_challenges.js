// Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const distinct = (value, index, self) => {
    return self.indexOf(value) === index;
}

var twoSum = function(nums, target) {
    indexes = []
    nums.forEach((number, index) =>{
        nums.forEach((num, i) => {

            if (number + num == target && index != i) {
                indexes.push(index);
                indexes.push(i);
            }
        });

    });
    return(indexes.filter(distinct));
};

// -----------------------------------------------------------------------------


// CHECK AGE // CALCULATE AGE

function checkAge(birthY, currentY) {
  age = calculateAge(birthY, currentY);

  if (age < 18) {
    console.log(`Access Denied —— You are only ${age}.`);
  } else if (age >= 18){
    console.log (`Access Granted! —— Age: ${age}`);
  } else {
    console.log("Your age cannot be accurately determined. Please try again.");
  };
}


function calculateAge(birthY, currentY) {
  age = currentY - birthY;
  return age;
};

checkAge(1986, 2020);
checkAge(2005, 2020);
