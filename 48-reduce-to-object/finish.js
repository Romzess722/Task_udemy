/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 * ---------------------------------------------------
 * Щоб зформувати новий обьєкт і додати ключі динамічно котрі будуть = значенню категорії це можна
 * Зробити завдяки синтаксису [] quontsByCategories[product.category]
 */

const quantitiesByCategories = (products) =>{
  return products.reduce((byCategories, product) =>{
    const {quantity, category} = product//деструктурізація і присвоїти їм значення з обьєкта product
    

    byCategories[category] = (byCategories[category]  || 0) + quantity 

    return byCategories
  }, {})
}

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

// inputProducts.push({
//   title: 'Sport Watch',
//   price: 55,
//   quantity: 2,
//   category: 'Cars',
// })
console.log(quantitiesByCategories(inputProducts))
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
