console.log('1 Inicio de programa');

setTimeout(() => {
    console.log('5 Primer timeout');
}, 3000);

setTimeout(() => {
    console.log('3 segundo timeout');
}, 0);

setTimeout(() => {
    console.log('4 tercer timeout');
}, 0);

console.log('2 Fin de programa');