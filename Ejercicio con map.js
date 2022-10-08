var array = [{ nombre: 'TV LCD', price: 100}, { nombre: 'Computadora', price: 500 }]
var nuevoArray = array.map(({nombre})=>{ 
  return [nombre];
});;
console.log (nuevoArray);