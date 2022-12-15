var twoSum = function(nums, target) {
    a = [0, 0];

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums [j] == target) {
                a = [j, i];
            }
        }
    }

    return a;
};


console.log(twoSum([2,7,11,15], 9));