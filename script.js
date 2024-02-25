// Konstruktorfunktion för Color
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// Metoder på Color-objektets prototyp för att konvertera färgen
Color.prototype.rgb = function() {
    return `rgb(${this.r},${this.g},${this.b})`;
};

Color.prototype.hex = function() {
    const hexR = this.r.toString(16).padStart(2, '0');
    const hexG = this.g.toString(16).padStart(2, '0');
    const hexB = this.b.toString(16).padStart(2, '0');
    return `#${hexR}${hexG}${hexB}`;
};

Color.prototype.rgba = function(alpha) {
    return `rgba(${this.r},${this.g},${this.b},${alpha})`;
};


// Skapa en instans av Color
const myColor = new Color(0, 128, 255); 
const myColor1 = new Color(100, 122, 255); 
const myColor2 = new Color(200, 102, 255); 

console.log(myColor);
// Hämta ett element på sidan
const colorExampleElement = document.getElementById('colorExample');
const colorExampleElement1 = document.getElementById('colorExample1');
const colorExampleElement2 = document.getElementById('colorExample2');

//  Använda Color-metoderna för att ändra bakgrundsfärgen
colorExampleElement.style.backgroundColor = myColor.rgb();
colorExampleElement1.style.backgroundColor = myColor1.rgb();
colorExampleElement2.style.backgroundColor = myColor2.rgb();