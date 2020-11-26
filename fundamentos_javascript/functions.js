function sumar(value){
    console.log(value)
}

sumar(4)


const sumar2 = value => {
    console.log(value)
}

sumar(3)

const sumar4 = value => {
    console.log(value)
}

sumar(4)

const sumar5 = (num1,num2) => num1+num2

const resultado = sumar5(1,2)

console.log(resultado)

const mensaje = nombre => ('hola soy '+ nombre)

const respuesta = mensaje('RIcardo')

console.log(respuesta)