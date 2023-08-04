/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */
class ExtendedArray extends Array{
  sum() {
    return this.reduce((aac, el) => aac =+ el, 0)
  }
  
  onlyNumbers() {
    return this.filter((element) => typeof element === 'number' )
  }
}

const firstExtendedArray = new ExtendedArray(2, 7)
firstExtendedArray.sum()
console.log(firstExtendedArray.sum())



const secondExtdArr = new ExtendedArray(2 , 0, 5, 'abc')
secondExtdArr.onlyNumbers()
console.log(secondExtdArr.onlyNumbers())

