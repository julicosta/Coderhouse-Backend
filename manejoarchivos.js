const fs = ('fs')
class Contenedor {
    constructor(nombreArchivo) {
        this.filePath = `./AAA./desafioo2./${nombreArchivo}.json`
    }
    static count = 0
    async getAll() {
        try {
            const file = await fs.promises.readFile(this.filePath, "utf8")
            const productos = JSON.parse(file)

            return productos
        } catch (error) {
            console.log(error)
            if (error.code === "ENOENT") {
                await fs.promises.writeFile(this.filePath, JSON.stringify([], null, 3))
                return []
            }

        }
    }
    async save(object) {
        try {
            const productos = await this.getAll()
            const id =
                productos.length === 0 ? 1 : productos[productos.length - 1].id + 1
            object.id = id
            productos.push(object)
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(producto, null, 2))

            return object.id
        } catch (erorr) {
            console.log(error)
        }

    }
    async getById(id) {
            try {
                const productos = await this.getAll()
                const findId = productos.find((producto) => producto.id == id)
                if (!findId) return null
            } catch (error) {

            }
        }
        //productos.forEach(producto => {
        //    if (producto.id == id) {
        //          console.log(`\n el producto seleccionado es: ${producto.title} \n su id es: ${producto.id} \n su precio es: $${producto.price}`)
        //        } else {
        //
        //      }
        //    })
        //  }

    async deleteById(id) {

        try {
            const productos = await this.getAll()

            const item = productos.find((prod) => prod.id == id)
            if (!productos) return "Producto no encontrado"
            const fitrarProductos = productos.filter((prod) => prod.id != id)
            await fs.promises.writeFile(
                this.filePath, JSON.stringify(fitrarProductos, null, 3)
            )
        } catch (error) {
            console.log(error)
        }
    }
    async deleteAll() {
        try {
            await fs.promises.writeFile(this.filePath, JSON.stringify([], null, 3))
        } catch (error) {
            console.log(error)
        }
    }
}

const test = new Contenedor(`./archivo.txt`)
test.getAll()
test.save({
    id: "0",
    title: "lays",
    thumbnail: "emptyurl"
}, {
    id: "1",
    title: "cheetos",
    thumbnail: "emptyurl"
}, {
    id: "2",
    title: "doritos",
    thumbnail: "emptyurl"
})
test.getById(0);
test.deleteById();
test.deleteAll();