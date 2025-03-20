document.addEventListener('DOMContentLoaded', function() {
    // Hämtar triggern och dropdown-menyn
    const dropdownTrigger = document.getElementById('dropdown-trigger');
    const dropdownMenu = document.getElementById('dropdown-menu');
  
    // Toggle dropdown-menyn när du klickar på "Om mig"
    dropdownTrigger.addEventListener('click', function(event) {
      event.preventDefault(); // Förhindrar att länken navigerar bort
      dropdownMenu.classList.toggle('hidden'); // Visa/dölj menyn
    });
  
    // Stänger dropdown om användaren klickar utanför
    document.addEventListener('click', function(event) {
      if (!dropdownTrigger.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
      }
    });
  });
  