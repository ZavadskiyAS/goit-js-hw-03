"use strict";
// // Напиши функцию findBestEmployee(employees),
// // которая принимает объект сотрудников и возвращает имя
// // самого продуктивного (который выполнил больше всех задач). 
// // Сотрудники и кол-во выполненых задач содержатся как свойства 
// // объекта в формате "имя":"кол-во задач".

const findBestEmployee = function(employees) {
    const values = Object.values(employees);
    const max = Math.max(...values);
    for (const key in employees) {
       // console.log(key);
       // console.log(employees[key]);
      if (employees[key] === max) {
        return key;
      }
    }
};
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux


// //=================================================================================



// const findBestEmployee = function(employees) {
//     let name;
//     let max = 0;
//     const bestEmployeeArr = Object.entries(employees);
//     for (const [employee, task] of bestEmployeeArr) {
//       if (max < task) {
//         max = task;
//         name = employee;
//       }
//     }
//     return name;
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence
  
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
  
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux