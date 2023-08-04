/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  s: true,
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}


const sumObjectValues = (nums) => {
  return Object.values(nums).reduce((total, count) => typeof count === 'number' 
  ? total + count 
  : total, 0)
}
  // let sum = 0
  // Object.keys(nums).forEach((key) =>{
  //   console.log(nums[key])
  //   if(typeof nums[key] === 'number'){
  //     return sum += nums[key]
  //   }
  // })
  // return sum

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
