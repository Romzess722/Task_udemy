/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
  const cars = [
    {
      carBrand: 'mersedes',
      price: 10000,
      isAvailableForSale: true
    },
    {
      carBrand: 'audi',
      price: 9000,
      isAvailableForSale: true
    },
    {
      carBrand: 'volvo',
      price: 8000,
      isAvailableForSale: true
    }
  ]

  const cars2 = {
    carBrand: 'toyota',
      price: 7000,
      isAvailableForSale: true
  } 

  cars.push(cars2)

  console.log(cars)