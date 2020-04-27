"use strict";
// Напиши функцию countTotalSalary(employees)
// принимающую объект зарплат. Функция считает
// общую сумму зарплаты работников и возращает
// ее. Каждое поле объекта, передаваемого в
// функцию, имеет вид "имя":"зарплата".

const countTotalSalary = function(employees) {
  const values = Object.values(employees);
  console.log(values);

  let total = 0;

  for (const value of values) {
    total += value;
  }
  return total;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400

//===================================================================================

// const countTotalSalary = function(employees) {
//     let total = 0;
  
//     for (const employee in employees) {
//       total += employees[employee];
//     }
//     return total;
//   };
  
// //   /*
// //    * Вызовы функции для проверки работоспособности твоей реализации.
// //    */
//   console.log(countTotalSalary({})); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80,
//     }),
//   ); // 330
  
//   console.log(
//     countTotalSalary({
//       kiwi: 200,
//       lux: 50,
//       chelsy: 150,
//     }),
//   ); // 400