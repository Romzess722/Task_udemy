/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */
  const myObject = {
    name: 'Ramaz',
    surname: 'Sahareishvili',
    favoriteNumber: 11
  }

  const {name, surname, favoriteNumber} = myObject

  const result = `My name is ${name} ${surname} and my favorite number is ${favoriteNumber}`
  console.log(result)