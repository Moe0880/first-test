module.exports = sumAll


function sumAll(nums) {
  var total = 0

  while (nums.length) {
    total += nums.pop()
  }

  return total
}



