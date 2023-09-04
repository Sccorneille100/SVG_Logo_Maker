class SVG {
    constructor() {
        this.text = "";
        this.shape = "";
    }
    render() {
    }
    setText(text, color) {
    const textX = 150; 
    const textY = 115; 
    this.text = `<text x="${textX}" y="${textY}" fill="${color}" text-anchor="middle" font-size="40" dominant-baseline="middle">${text}</text>`;
    }
    setShape(shape) {
        this.shape = shape.render()
    }
}

module.exports = SVG;