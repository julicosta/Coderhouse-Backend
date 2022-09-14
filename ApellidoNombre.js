class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }


    getFullName() {
        return `Mi nombre completo es ${this.nombre} ${this.apellido}`
    }


    addMascotas(mascotas) {
        return this.mascotas.push(mascotas)
    }


    countMascotas() {
        return `El usuario cuenta con ${this.mascotas.length} mascotas.`
    }


    addBook(nombre, autor) {
        const nuevoLibro1 = { nombre: nombre, autor: autor }
        this.libros.push(nuevoLibro1)
    }


    getBookNames() {
        return (this.libros)
    }
}


const usuario = new Usuario("Julian", "Costa")
console.log(usuario.getFullName())
usuario.addBook("Padre rico, padre pobre", "Robert T. Kiyosaki")
console.log(usuario.addMascotas("Perro"))
console.log(usuario.countMascotas())
console.log(usuario)