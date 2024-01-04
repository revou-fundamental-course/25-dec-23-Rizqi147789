function calculateTriangle() {
    // Get values from the form
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    // Validate input
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert('Please enter valid positive numbers for all sides.');
        return;
    }

    // Calculate area and perimeter
    var s = (sideA + sideB + sideC) / 2;
    var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
    var perimeter = sideA + sideB + sideC;

    // Display result
    document.getElementById('result').innerHTML = `<p>Luas Segitiga: ${area.toFixed(2)}</p>
                                                    <p>Keliling Segitiga: ${perimeter.toFixed(2)}</p>`;
}
