class Calculadora{
    constructor(previusOprandTexElement,currentOprandTexElement){
        this.previusOprandTexElement = previusOprandTexElement
        this.currentOprandTexElement = currentOprandTexElement
        this.clear()
    }

    clear(){
        this.currentOprand = ""
        this.previusOprand = ""
        this.operation = undefined
    }

    delete(){

    }
    appendNumeber(numero){
        this.currentOprand = numero
    }

    chooseOperation(operation){

    }
    compute(){

    }
    updateDispley(){
    this.currentOprandTexElement.innerText = this.currentOprand
    }

}

const numberButtons = document.querySelectorAll("[data-numero]")
const operacionButtons = document.querySelectorAll("[data-operation]")
const equalsButtons = document.querySelector("[data-equals]")
const delateButtons = document.querySelector("[data-delate]")
const clearButtons = document.querySelector("[data-clear]")
const previusOprandTexElement = document.querySelector("[data-previos-oprerand]")
const currentOprandTexElement = document.querySelector("[data-current-oprerand]")


const calculadora = new Calculadora(previusOprandTexElement,currentOprandTexElement)

numberButtons.forEach(
    button => {
        button.addEventListener("click", () =>{
            calculadora.appendNumeber(button.innerText)
            calculadora.updateDispley()
        })
    }

)