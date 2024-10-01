class Aereo extends Vehiculo{
    altMax = ""
    autonomia = ""

    constructor(id,nombre,apellido,edad,altMax,autonomia){
        super(id,nombre,apellido,edad)
        this.altMax = altMax
        this.autonomia = autonomia
    }

    modificarDatos(datos){
        super.modificarDatos(datos)
        this.altMax = datos.altMax
        this.autonomia = datos.autonomia
    }

    toString(){
        let s = super.toString()
        s += "\nAltura Maxima: " + this.altMax
        s += "\nAutonomia: " + this.autonomia

        return s
    }
    
    toJson(){
        return JSON.stringify(this)
    }
}

