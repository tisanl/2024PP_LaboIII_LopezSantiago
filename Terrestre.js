class Terrestre extends Vehiculo{
    cantPue = ""
    cantRue = ""

    constructor(id,nombre,apellido,edad,cantPue,cantRue){
        super(id,nombre,apellido,edad)
        this.cantPue = cantPue
        this.cantRue = cantRue
    }

    modificarDatos(datos){
        super.modificarDatos(datos)
        this.cantPue = datos.cantPue
        this.cantRue = datos.cantRue
    }

    toString(){
        let s = super.toString()
        s += "\nCantidad de Puertas: " + this.cantPue
        s += "\nCant de Ruedas: " + this.cantRue

        return s
    }
    
    toJson(){
        return JSON.stringify(this)
    }
}