document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculate-btn');
  
  if (calculateBtn) {
    calculateBtn.addEventListener('click', function() {
      // Retrieve input values
      const gender = document.getElementById('gender').value;
      const weight = parseFloat(document.getElementById('weight').value);
      const height = parseFloat(document.getElementById('height').value);
      const age = parseInt(document.getElementById('age').value);
      const activity = parseFloat(document.getElementById('activity').value);
      const surplus = parseInt(document.getElementById('surplus-target').value);

      if (!weight || !height || !age) {
        alert('Please fill in all valid measurements.');
        return;
      }

      // Mifflin-St Jeor BMR Equation
      let bmr = (10 * weight) + (6.25 * height) - (5 * age);
      if (gender === 'male') {
        bmr += 5;
      } else {
        bmr -= 161;
      }

      // Calculate Maintenance TDEE and Target Surplus
      const tdee = Math.round(bmr * activity);
      const targetCalories = tdee + surplus;

      // Macro estimates for clean bulk (Protein ~2.2g/kg, Fats ~25% calories, Rest Carbs)
      const proteinGrams = Math.round(weight * 2.2);
      const fatGrams = Math.round((targetCalories * 0.25) / 9);
      const carbGrams = Math.round((targetCalories - (proteinGrams * 4) - (fatGrams * 9)) / 4);

      // Render to DOM safely
      document.getElementById('res-tdee').innerText = `${tdee.toLocaleString()} kcal`;
      document.getElementById('res-surplus').innerText = `${targetCalories.toLocaleString()} kcal`;
      document.getElementById('res-protein').innerText = `${proteinGrams}g`;
      document.getElementById('res-carbs').innerText = `${carbGrams}g`;
      document.getElementById('res-fats').innerText = `${fatGrams}g`;
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculate-btn');
  
  if (calculateBtn) {
    calculateBtn.addEventListener('click', function() {
      // Retrieve input values
      const gender = document.getElementById('gender').value;
      const weight = parseFloat(document.getElementById('weight').value);
      const feet = parseFloat(document.getElementById('height-feet').value) || 0;
      const inches = parseFloat(document.getElementById('height-inches').value) || 0;
      const age = parseInt(document.getElementById('age').value);
      const activity = parseFloat(document.getElementById('activity').value);
      const surplus = parseInt(document.getElementById('surplus-target').value);

      if (!weight || !age) {
        alert('Please fill in all valid measurements.');
        return;
      }

      // Convert Feet & Inches to Total Centimeters (1 ft = 30.48 cm, 1 in = 2.54 cm)
      const totalInches = (feet * 12) + inches;
      const heightCm = totalInches * 2.54;

      // Mifflin-St Jeor BMR Equation (requires height in cm)
      let bmr = (10 * weight) + (6.25 * heightCm) - (5 * age);
      if (gender === 'male') {
        bmr += 5;
      } else {
        bmr -= 161;
      }

      // Calculate Maintenance TDEE and Target Surplus
      const tdee = Math.round(bmr * activity);
      const targetCalories = tdee + surplus;

      // Macro estimates for clean bulk
      const proteinGrams = Math.round(weight * 2.2);
      const fatGrams = Math.round((targetCalories * 0.25) / 9);
      const carbGrams = Math.round((targetCalories - (proteinGrams * 4) - (fatGrams * 9)) / 4);

      // Render to DOM safely
      document.getElementById('res-tdee').innerText = `${tdee.toLocaleString()} kcal`;
      document.getElementById('res-surplus').innerText = `${targetCalories.toLocaleString()} kcal`;
      document.getElementById('res-protein').innerText = `${proteinGrams}g`;
      document.getElementById('res-carbs').innerText = `${carbGrams}g`;
      document.getElementById('res-fats').innerText = `${fatGrams}g`;
    });
  }
});
// Example helper function to toggle active view
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.style.display = 'none');

  // Show requested target section
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}

// Event handler for navbar click
document.querySelector('#nutrition-nav-btn')?.addEventListener('click', () => {
  showSection('nutrition-section');
});
// Function to display the About section and hide others
function showAboutSection() {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.style.display = 'none');

  const aboutSection = document.getElementById('about-section');
  if (aboutSection) {
    aboutSection.style.display = 'block';
  }
}

// Event listener for navbar button click
document.querySelector('#about-nav-btn')?.addEventListener('click', () => {
  showAboutSection();
});
// Function to switch to the Help view
function showHelpSection() {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.style.display = 'none');

  const helpSection = document.getElementById('help-section');
  if (helpSection) {
    helpSection.style.display = 'block';
  }
}

// Attach event listener to Help navigation button
document.querySelector('#help-nav-btn')?.addEventListener('click', () => {
  showHelpSection();
});
