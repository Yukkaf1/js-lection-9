//  console.log("Hallo Lection 9");

 const logMessege = () => {
     console.log('Лог вызова callback через 3 сек');
 }

 console.log('До вызова setTimeout');

setTimeout(() => {
    console.log('внутри callback для setTimeout');
}, 2000);

console.log('после вызова setTimeout');
