// Kalkuler snittet:
// Lag en funksjon som tar i mot et array av nummere som parameter.
// Funksjonen skal returne gjennomsnittet av tallene i arrayet, og svaret skal kunne vises i console eller på en nettside


//Modell
const inputNumbers = [];

//View
updateView()
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
    <br/>
    <h1>Kalkuler Gjennomsnittet!</h1>
    <br>
    <h3>Numrene som skal kaluleres:</h3>
    <div>${inputNumbers}</div>
    <br>
    <input id="inputNumbers" onchange="userInputNumbers(this.valueAsNumber)" type="number">
    <br/>
    <button onclick="calculateNumbers()">Kalkuler gjennomsnittet:</button>
    <br/>
    <h3>Gjennomsnittet:</h3>
    <br/>
    <div>${calculateNumbers(inputNumbers)}</div>
    
    
    `;
    document.getElementById("inputNumbers").focus();
}

//Control
function userInputNumbers(value) {
    inputNumbers.push(value);
    updateView()
}

function calculateNumbers(inputNumbers) {
    let total = 0;
    let average = 0;
    for (let i = 0; i < inputNumbers.length; i++) {
        total += inputNumbers[i];
    }
    average = total / inputNumbers.length;
    console.log(total)
    return average

}

