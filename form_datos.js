class Form_datos{
    form = ""
    select = ""

    constructor(id,idSelect){
        this.form = document.getElementById(id)
        this.select = document.getElementById(idSelect)
    }

    ocultar(){
        this.form.style.display = "none"
    }

    mostrar(){
        this.form.style.display = "block"
        this.form.style.display = "block"
        this.select.value = 0
    }
}