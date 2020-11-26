// template string

const numero = (num,num2) => {
    return `el numero es: ${num + num2}`
}

const numero2 = (num,num2) => (
     `el numero es: ${num + num2}`
)

const resultado = numero(2,2)
console.log(resultado)