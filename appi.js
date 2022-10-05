const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080



const fs = ('fs')
class Contenedor {
    constructor(nombreArchivos) {
        nombreArchivos = ""
        this.nombreArchivos = `./${nombreArchivos}.txt`
    }
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
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(productos, null, 2))

            return object.id
        } catch (erorr) {
            console.log()
        }

    }
}


const test = new Contenedor(`./productos`)



const randomFunction = (last) => {
    return parseInt(Math.random() * last) + 1
}

app.get('/productos', async(req, res) => {
    res.send(await ProductContenedor.getAll())
})

app.get('/productoRandom', (req, res) => {
    test.getAll()
    JSON.parse(lista)

    listaParse =>
        listaParse[randomFunction(listaParse.length)]

    (listaParse =>
        res.json(listaParse)
    )
})


app.get('./productosGuardados,', (req, res) => {

    res.json(test.save({
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
    }))
})


const server = app.listen(PORT, () => console.log(`Server escuchado en puerto ${PORT}`));





/*console.log(test.getAll())
console.log(test.save({
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
}))*/



//app.get('/', function(req, res, ) {
//  res.send({ mensaje: 'Hola mundo' })
//});


//const server = app.listen(PORT, () => {
//  console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
//})


//server.on("error", error => console.log(`Error en servidor ${error}`))