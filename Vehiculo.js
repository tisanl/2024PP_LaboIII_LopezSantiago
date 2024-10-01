class Vehiculo{
    id = ""
    modelo = ""
    anoFab = ""
    velMax = ""

    constructor(id,modelo,anoFab,velMax){
        this.id = id
        this.modelo = modelo
        this.anoFab = anoFab
        this.velMax = velMax
    }

    modificarDatos(datos){
        this.modelo = datos.modelo
        this.anoFab = datos.anoFab
        this.velMax = datos.velMax
    }

    toString(){
        let s = "Id: " + this.id
        s += "\nModelo: " + this.modelo
        s += "\nAño de Fabricacion: " + this.anoFab
        s += "\nVelocidad Maxima: " + this.velMax

        return s
    }
    
    toJson(){
        return JSON.stringify(this)
    }
}
