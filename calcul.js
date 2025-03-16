// Champ d'entrée
let input = document.getElementById('input');
let isOn = true; // Calculatrice active ou éteinte

function ajouterValeur(value) {
  if (isOn) {
    input.value += value;
  }
}

// Effacer uniquement l'entrée actuelle (dernier nombre ou caractère)
function effacerInput() {
  if (isOn && input.value.length > 0) {
    input.value = input.value.slice(0, -1);
  }
}

// Calcul
function Calculer() {
  if (isOn) {
    try {
      // Division par 0 impossible
      if (input.value.includes('/0')) {
        input.value = 'Erreur';
      } else {
        input.value = eval(input.value);
      }
    } catch (error) {
      input.value = 'Erreur';
    }
  }
}

// Changer le signe (+/-)
function toggleSign() {
  if (isOn && input.value) {
    input.value = parseFloat(input.value) * -1;
  }
}

// Racine carrée (√)
function calculateSquareRoot() {
  if (isOn && input.value) {
    const value = parseFloat(input.value);
    if (value >= 0) {
      input.value = Math.sqrt(value);
    } else {
      input.value = 'Erreur';
    }
  }
}

// Réinitialiser (AC)
function clearInput() {
  if (isOn) {
    input.value = "";
  }
}

// Activer/Désactiver la calculatrice (OFF)
function powerOff() {
  isOn = !isOn; // Changer l'état de la calculatrice

  if (!isOn) {
    input.value = "OFF";
    disableButtons(true); // Désactiver les boutons
  } else {
    input.value = ""; // Réinitialiser l'écran
    disableButtons(false); // Réactiver les boutons
  }
}

// Désactiver ou réactiver les boutons (sauf le bouton "OFF")
function disableButtons(disabled) {
  const buttons = document.querySelectorAll("button"); // Sélectionne tous les boutons
  buttons.forEach(button => {
    if (button.id !== "power-off") { // Laisser le bouton "OFF" activable
      button.disabled = disabled;
    }
  });
}
