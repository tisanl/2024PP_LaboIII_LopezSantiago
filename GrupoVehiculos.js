class GrupoVehiculos{
    listaVehiculos = []
    listaVehiculosEnUso = []
    ultimoId = ""

    //============================= Constructor =====================================//
    constructor(data){
        data = JSON.parse(data)
        this.listaVehiculos = data.map(GrupoVehiculos.crearInstanciaVehiculo)
        this.listaVehiculosEnUso = this.listaVehiculos
        this.ultimoId = this.obtenerUltimoId()
    }

    //========================= Funciones varias ===================================//
    filtrarLista(filtro){
        if(filtro == 0) this.listaVehiculosEnUso =  this.listaVehiculos
        else this.listaVehiculosEnUso = this.listaVehiculos.filter((vehiculo)=>{
            if(filtro == 1 && vehiculo instanceof Aereo) return true
            else if(filtro == 2 && vehiculo instanceof Terrestre) return true
        },filtro)
    }

    sortLista(atributo){
        if(atributo == "Año de Fabricacion") atributo = "anoFab"
        else if(atributo == "Año de Fabricacion") atributo = "anoFab"
        else if(atributo == "Velocidad Maxima") atributo = "velMax"
        else if(atributo == "Altura Maxima") atributo = "altMax"
        else if(atributo == "Cantidad de Puertas") atributo = "cantPue"
        else if(atributo == "Cantidad de Ruedas") atributo = "cantRue"
        else atributo = atributo.toLowerCase()
        this.listaVehiculosEnUso = this.listaVehiculosEnUso.sort((v1,v2)=>{
            if(v1[atributo] > v2[atributo]) return 1
            else if(v2[atributo] == undefined || v1[atributo] < v2[atributo]) return -1
            else return 0 
        })
    }

    calcularVelMax(){
        let acumulador = this.listaVehiculosEnUso.reduce((acumulador,vehiculo)=>{
            return acumulador + vehiculo.velMax
        }, 0)
        return (acumulador / this.listaVehiculosEnUso.length).toFixed(2)
    }

    buscarPorId(id){
        for(let vehiculo of this.listaVehiculosEnUso){
            if(id == vehiculo.id){
                return vehiculo
            }
        }
    }

    add(vehiculo){
        this.listaVehiculos.push(vehiculo)
    }

    delete(vehiculo){
        for(let i = 0; i < this.listaVehiculos.length; i++){
            if(this.listaVehiculos[i] === vehiculo){
                this.listaVehiculos.splice(i,1)
                break
            }
        }
        
    }

    //========================= Funciones archivo ==================================//
    static crearInstanciaVehiculo(diccionario){
        if(diccionario.hasOwnProperty("altMax") && diccionario.hasOwnProperty("autonomia")){
            return new Aereo(diccionario.id,
                                diccionario.modelo,
                                diccionario.anoFab,
                                diccionario.velMax,
                                diccionario.altMax,
                                diccionario.autonomia)
        }
        else if(diccionario.hasOwnProperty("cantPue") && diccionario.hasOwnProperty("cantRue")){
            return new Terrestre(diccionario.id,
                                    diccionario.modelo,
                                    diccionario.anoFab,
                                    diccionario.velMax,
                                    diccionario.cantPue,
                                    diccionario.cantRue)
        }
        else{
            return new vehiculo(diccionario.id,
                                diccionario.modelo,
                                diccionario.anoFab,
                                diccionario.velMax,)
        }
    }

    obtenerUltimoId(){
        return this.listaVehiculos.reduce((id,vehiculo)=>{
            if(vehiculo.id > id) return vehiculo.id
            else return id
        },-1)
    }

    obtenerNuevoId(){
        this.ultimoId += 1
        return this.ultimoId
    }
}