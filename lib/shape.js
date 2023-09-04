class shape {

}
// render the circle shape
class Circle {
    value= `circle cx="150" cy="115" r="80" `  
}
// render the triangle shape
class Triangle {
    value= `polygon points="150, 18 244, 182 56, 182" `

}
// render the square shape
class Square {
   value =  `<rect x="73" y="40" width="160" height="160" fill="${this.color}"/>`
}

module.exports = {Triangle, Square, Circle};