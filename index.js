class ProductManager {
    constructor(){
        this.products = [];
    }

    getProduct(){
        return this.products;
    }
    addProduct(title, description, price, thumbnail, code, stock){

        const codigoExiste = this.products.some((producto) => producto.code === code)
            if(codigoExiste){
                console.log(`El codigo ${code} esta repetido, por lo que no se añadió el producto ${title}`)
            } else {
                const productoId = this.products.length + 1
                const producto = {
                    title, 
                    description, 
                    price, 
                    thumbnail, 
                    code, 
                    stock, 
                    id: productoId
                }
                const valoresProducto = Object.values(producto);
                const valoresVacios = valoresProducto.includes(undefined)
                    if (valoresVacios){
                        console.log(`El producto ${producto.title} no se añadio porque al menos uno de sus campos esta vacio`)
                    }else{
                        this.products.push(producto)
                        console.log(`El producto ${producto.title} ha sido añadido correctamente`)
                    }
            }
    }
    

    getProductById(id){
        const productoExiste = this.products.find((producto) => producto.id === id)
        !productoExiste ?   console.log("Not Found")    :   console.log(productoExiste)
    }
}


//TESTING

const productos = new ProductManager

console.log(productos.getProduct())

productos.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

console.log(productos.getProduct())

productos.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

productos.getProductById(0)

productos.getProductById(1)






