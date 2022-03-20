function test (name) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Hola')
			resolve(name) // Si no hay ningún error se ejecuta el contenido de .then
			reject() // si falla se muestra el contenido de .catch
		}, 1000)
	})
}


test('Toni')
.then((name) => {
	console.logg(name)
})
.catch(error => {  // Podemos pasarle como parámetro el nombre que queramos
	console.log(error) // Y lo invocamos para captar el error ( mostrarlo en la consola )
})