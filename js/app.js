/* eslint-disable no-unused-vars */


const name = prompt('What is your name?')
alert(`Hello ${name}!`)

const feedback = prompt('Do you love cheese as much as we do?')

function cheese(feedback, name) {
    if (feedback == yes) {
        return `That is excellent news ${name}! Welcome to Gusteau's...`
    } else if (feedback == no) {
        return `Oh no ${name}! Gusteau's will change your mind...`
    } else {
        return `Hmmmm I see... Welcome to ${name} Gasteau's...`
    }
}

const output = cheese(feedback, name)
console.log(output)

