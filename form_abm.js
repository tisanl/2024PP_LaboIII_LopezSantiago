class Form_abm{
    form = ""
    txt_id = ""
    txt_modelo = ""
    lbl_error_modelo = ""
    txt_anoFab = ""
    lbl_error_anoFab = ""
    txt_velMax = ""
    lbl_error_velMax = ""
    select_tipo = ""
    txt_altMax = ""
    lbl_error_altMax = ""
    txt_autonomia = ""
    lbl_error_autonomia = ""
    txt_cantPue = ""
    lbl_error_cantPue = ""
    txt_cantRue = ""
    lbl_error_cantRue = ""
    campo_aereo = ""
    campo_terrestre = ""
    btn_guardar = ""
    btn_eliminar = ""
    btn_cancelar = ""

    //============================= Constructor =====================================//
    constructor(elementosFormAbm){
        this.form = elementosFormAbm.form
        this.txt_id = elementosFormAbm.txt_id
        this.txt_modelo = elementosFormAbm.txt_modelo
        this.lbl_error_modelo = elementosFormAbm.lbl_error_modelo
        this.txt_anoFab = elementosFormAbm.txt_anoFab
        this.lbl_error_anoFab = elementosFormAbm.lbl_error_anoFab
        this.txt_velMax = elementosFormAbm.txt_velMax
        this.lbl_error_velMax = elementosFormAbm.lbl_error_velMax
        this.select_tipo = elementosFormAbm.select_tipo
        this.txt_altMax = elementosFormAbm.txt_altMax
        this.lbl_error_altMax = elementosFormAbm.lbl_error_altMax
        this.txt_autonomia = elementosFormAbm.txt_autonomia
        this.lbl_error_autonomia = elementosFormAbm.lbl_error_autonomia
        this.txt_cantPue = elementosFormAbm.txt_cantPue
        this.lbl_error_cantPue = elementosFormAbm.lbl_error_cantPue
        this.txt_cantRue = elementosFormAbm.txt_cantRue
        this.lbl_error_cantRue = elementosFormAbm.lbl_error_cantRue
        this.campo_aereo = elementosFormAbm.campo_aereo
        this.campo_terrestre = elementosFormAbm.campo_terrestre
        this.btn_guardar = elementosFormAbm.btn_guardar
        this.btn_eliminar = elementosFormAbm.btn_eliminar
        this.btn_cancelar = elementosFormAbm.btn_cancelar
    }

    //=================== Agregar / modificar vehiculo ==============================//
    completarFormulario(vehiculo){
        this.campo_aereo.style.display = "none"
        this.campo_terrestre.style.display = "none"
        this.select_tipo.disabled = true

        this.txt_id.value = vehiculo.id
        this.txt_modelo.value = vehiculo.modelo
        this.txt_anoFab.value = vehiculo.anoFab
        this.txt_velMax.value = vehiculo.velMax

        if(vehiculo instanceof Aereo){
            this.txt_altMax.value = vehiculo.altMax
            this.txt_autonomia.value = vehiculo.autonomia
            this.select_tipo.value = 1
            this.campo_aereo.style.display = "block"
        }
        else if(vehiculo instanceof Terrestre){
            this.txt_cantPue.value = vehiculo.cantPue
            this.txt_cantRue.value = vehiculo.cantRue
            this.select_tipo.value = 2
            this.campo_terrestre.style.display = "block"
        }
    }

    validarFormulario(){
        let todoOk = true

        // Validacion del modelo
        let modelo = validarNoVacio(this.txt_modelo.value)
        if(!modelo){
            this.lbl_error_modelo.textContent = "Este campo no puede quedar vacio"
            todoOk = false
        } else this.lbl_error_modelo.textContent = ""

        // Validacion del año de fabricacion
        let anoFab = validarNumeroMinMax(this.txt_anoFab.value,1885,2024)
        if(anoFab == -1){
            this.lbl_error_anoFab.textContent = "Hay un error con el dato"
            todoOk = false
        } 
        else if(anoFab == -2){
            this.lbl_error_anoFab.textContent = "El año de Fabricacion no puede ser menor a 1885 ni mayor a 2024"
            todoOk = false
        } 
        else this.lbl_error_anoFab.textContent = ""

        // Validacion de la velocidad maxima
        let velMax = validarNumeroMin(this.txt_velMax.value,1)
        if(velMax == -1){
            this.lbl_error_velMax.textContent = "Hay un error con el dato"
            todoOk = false
        } 
        else if(velMax == -2){
            this.lbl_error_velMax.textContent = "La Velocidad Maxima debe ser mayor a 0"
            todoOk = false
        } 
        else this.lbl_error_velMax.textContent = ""

        // Validacion campos aereo
        let altMax = ""
        let autonomia = ""
        if(this.select_tipo.value == 1){
            // Validacion alutra maxima
            altMax = validarNumeroMin(this.txt_altMax.value,1)
            if(altMax == -1){
                this.lbl_error_altMax.textContent = "Hay un error con el dato"
                todoOk = false
            } 
            else if(altMax == -2){
                this.lbl_error_altMax.textContent = "La Altura Maxima debe ser mayor a 0"
                todoOk = false
            } 
            else this.lbl_error_altMax.textContent = ""

            // Validacion autonomia
            autonomia = validarNumeroMin(this.txt_autonomia.value,1)
            if(autonomia == -1){
                this.lbl_error_autonomia.textContent = "Hay un error con el dato"
                todoOk = false
            } 
            else if(autonomia == -2){
                this.lbl_error_autonomia.textContent = "La Autonomia debe ser mayor a 0"
                todoOk = false
            } 
            else this.lbl_error_autonomia.textContent = ""
        }

        // Validacion campos terrestre
        let cantPue = ""
        let cantRue = ""
        if(this.select_tipo.value == 2){
            // Validacion cantidad de puertas
            cantPue = validarNumeroMin(this.txt_cantPue.value,0)
            if(cantPue == -1){
                this.lbl_error_cantPue.textContent = "Hay un error con el dato"
                todoOk = false
            } 
            else if(cantPue == -2){
                this.lbl_error_cantPue.textContent = "La Cantidad de Puertas debe ser igual o mayor a 0"
                todoOk = false
            } 
            else this.lbl_error_cantPue.textContent = ""
            
            // Validacion cantidad de ruedas
            cantRue = validarNumeroMin(txt_cantRue.value,1)
            if(cantRue == -1){
                this.lbl_error_cantRue.textContent = "Hay un error con el dato"
                todoOk = false
            } 
            else if(cantRue == -2){
                this.lbl_error_cantRue.textContent = "La Cantidad de Ruedas debe ser mayor a 0"
                todoOk = false
            } 
            else this.lbl_error_cantRue.textContent = ""
        }        

        if(todoOk){
            let datos = {
                "id" : this.txt_id.value,
                "modelo" : modelo,
                "anoFab" : anoFab,
                "velMax" : velMax,
                "select_tipo" : this.select_tipo.value,
            }
            if(this.select_tipo.value == 1){
                datos["altMax"] = altMax
                datos["autonomia"] = autonomia
            }
            else if(this.select_tipo.value == 2){
                datos["cantPue"] = cantPue
                datos["cantRue"] = cantRue
            }

            return datos

        } else return false
    }

    modificarLista(grupoVehiculos, datos){
        if(datos.id != ""){
            let vehiculo = grupoVehiculos.buscarPorId(datos.id)
            vehiculo.modificarDatos(datos)
        }
        else{
            let vehiculo = ""
            if(this.select_tipo.value == 1){
                vehiculo = new Aereo(grupoVehiculos.obtenerNuevoId(),
                                    datos.modelo,
                                    datos.anoFab,
                                    datos.velMax,
                                    datos.altMax,
                                    datos.autonomia)
            }
            else if(this.select_tipo.value == 2){
                vehiculo = new Terrestre(grupoVehiculos.obtenerNuevoId(),
                                    datos.modelo,
                                    datos.anoFab,
                                    datos.velMax,
                                    datos.cantPue,
                                    datos.cantRue)
            }
            grupoVehiculos.add(vehiculo)
        }
        this.select_tipo.disabled = false
    }

    elimnarDeLista(grupoVehiculos){
        let vehiculo = grupoVehiculos.buscarPorId(this.txt_id.value)
        grupoVehiculos.delete(vehiculo)
        this.select_tipo.disabled = false
    }

    //========================= Funciones varias ===================================//
    limpiarFormulario(){
        this.txt_id.value = ""
        this.txt_modelo.value = ""
        this.lbl_error_modelo.innerText = ""
        this.txt_anoFab.value = ""
        this.lbl_error_anoFab.innerText = ""
        this.txt_velMax.value = ""
        this.lbl_error_velMax.innerText = ""
        this.select_tipo.value = 1
        this.txt_altMax.value = ""
        this.lbl_error_altMax.innerText = ""
        this.txt_autonomia.value = ""
        this.lbl_error_autonomia.innerText = ""
        this.txt_cantPue.value = ""
        this.lbl_error_cantPue.innerText = ""
        this.txt_cantRue.value = ""
        this.lbl_error_cantRue.innerText = ""
    }

    ocultar(){
        this.form.style.display = "none"
    }

    mostrar(){
        this.form.style.display = "block"
        this.select_tipo.value = 1
        this.campo_aereo.style.display = "block"
        this.campo_terrestre.style.display = "none"
    }
}