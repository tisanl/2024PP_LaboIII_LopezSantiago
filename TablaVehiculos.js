class TablaVehiculos{
    tabla = ""
    header = ""
    body = ""
    columnasChecked = ""

    //============================= Constructor =====================================//
    constructor(id_tablaVehiculos,id_header,id_body,columnasChecked){
        this.tabla = document.getElementById(id_tablaVehiculos)
        this.header = document.getElementById(id_header)
        this.body = document.getElementById(id_body)
        this.columnasChecked = columnasChecked
    }

    //====================== Funciones para dibujar =================================//
    dibujarTabla(arrayVehiculos){
        this.limpiarTabla()
        this.dibujarHeader()
        this.dibujarBody(arrayVehiculos)
    }

    dibujarHeader(){
        let fila = document.createElement("tr")
        fila.id = "header"

        let columnasChecked = this.obtenerColumnasChecked()

        if(columnasChecked.id){
            let celda = document.createElement("th")
            celda.appendChild(document.createTextNode("Id"))
            fila.appendChild(celda)
        }

        if(columnasChecked.modelo){
            let celda = document.createElement("th")
            celda.appendChild(document.createTextNode("Modelo"))
            fila.appendChild(celda)
        }

        if(columnasChecked.anoFab){
            let celda = document.createElement("th")
            celda.appendChild(document.createTextNode("Año de Fabricacion"))
            fila.appendChild(celda)
        }

        if(columnasChecked.velMax){
            let celda = document.createElement("th")
            celda.appendChild(document.createTextNode("Velocidad Maxima"))
            fila.appendChild(celda)
        }

        if(columnasChecked.altMax){
            let celda = document.createElement("th")
            celda.appendChild(document.createTextNode("Altura Maxima"))
            fila.appendChild(celda)
        }

        if(columnasChecked.autonomia){
            let celda = document.createElement("th")
            celda.appendChild(document.createTextNode("Autonomia"))
            fila.appendChild(celda)
        }

        if(columnasChecked.cantPue){
            let celda = document.createElement("th")
            celda.appendChild(document.createTextNode("Cantidad de Puertas"))
            fila.appendChild(celda)
        }

        if(columnasChecked.cantRue){
            let celda = document.createElement("th")
            celda.appendChild(document.createTextNode("Cantidad de Ruedas"))
            fila.appendChild(celda)
        }
        
        this.header.appendChild(fila)
    }

    dibujarBody(arrayVehiculos){
        let contador = 0
        for(let vehiculo of arrayVehiculos){
            let fila = document.createElement("tr")
            fila.id = contador

            let columnasChecked = this.obtenerColumnasChecked()

            if(columnasChecked.id){
                let celda = document.createElement("td")
                celda.appendChild(document.createTextNode(vehiculo.id))
                fila.appendChild(celda)
            }

            if(columnasChecked.modelo){
                let celda = document.createElement("td")
                celda.appendChild(document.createTextNode(vehiculo.modelo))
                fila.appendChild(celda)
            }

            if(columnasChecked.anoFab){
                let celda = document.createElement("td")
                celda.appendChild(document.createTextNode(vehiculo.anoFab))
                fila.appendChild(celda)
            }

            if(columnasChecked.velMax){
                let celda = document.createElement("td")
                celda.appendChild(document.createTextNode(vehiculo.velMax))
                fila.appendChild(celda)
            }

            if(columnasChecked.altMax){
                let celda = document.createElement("td")
                if(!vehiculo.hasOwnProperty("altMax")) celda.appendChild(document.createTextNode("----"))
                else celda.appendChild(document.createTextNode(vehiculo.altMax))
                fila.appendChild(celda)
            }

            if(columnasChecked.autonomia){
                let celda = document.createElement("td")
                if(!vehiculo.hasOwnProperty("autonomia")) celda.appendChild(document.createTextNode("----"))
                else celda.appendChild(document.createTextNode(vehiculo.autonomia))
                fila.appendChild(celda)
            }

            if(columnasChecked.cantPue){
                let celda = document.createElement("td")
                if(!vehiculo.hasOwnProperty("cantPue")) celda.appendChild(document.createTextNode("----"))
                else celda.appendChild(document.createTextNode(vehiculo.cantPue))
                fila.appendChild(celda)
            }

            if(columnasChecked.cantRue){
                let celda = document.createElement("td")
                if(!vehiculo.hasOwnProperty("cantRue")) celda.appendChild(document.createTextNode("----"))
                else celda.appendChild(document.createTextNode(vehiculo.cantRue))
                fila.appendChild(celda)
            }

            contador ++
            this.body.appendChild(fila)
        }
    }

    limpiarTabla(){
        this.header.innerHTML = '';
        this.body.innerHTML = '';
    }

    //========================= Funciones varias ====================================//
    obtenerColumnasChecked(){
        return {
            "id" : this.columnasChecked.id.checked,
            "modelo" : this.columnasChecked.modelo.checked,
            "anoFab" : this.columnasChecked.anoFab.checked,
            "velMax" : this.columnasChecked.velMax.checked,
            "altMax" : this.columnasChecked.altMax.checked,
            "autonomia" : this.columnasChecked.autonomia.checked,
            "cantPue" : this.columnasChecked.cantPue.checked,
            "cantRue" : this.columnasChecked.cantRue.checked
        }
    }
}