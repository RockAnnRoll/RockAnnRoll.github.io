document.addEventListener('DOMContentLoaded', function () {  
  const toggleButton = document.getElementById('theme-toggle'); 
  const html = document.documentElement; 
  const sunIcon = document.getElementById('sun-icon');  
  const moonIcon = document.getElementById('moon-icon');  

  // Funktion för att uppdatera ikonerna baserat på det valda temat
  function updateIcons() {
    if (html.classList.contains('dark')) {  // Om klassen 'dark' finns på <html>
      sunIcon.classList.remove('hidden');  // Gör sol-ikonen synlig
      moonIcon.classList.add('hidden');  // Döljer måne-ikonen
    } else {  // Om klassen 'dark' inte finns på <html>
      sunIcon.classList.add('hidden');  // Döljer sol-ikonen
      moonIcon.classList.remove('hidden');  // Gör måne-ikonen synlig
    }
  }

  // Kontrollera om temat är sparat i localStorage
  if (localStorage.getItem('theme') === 'dark') {  // Om temat är mörkt
    html.classList.add('dark');  // Klassen 'dark' läggs till på <html>
  }

  updateIcons();  

  //  Växla mellan tema när knappen klickas
  toggleButton.addEventListener('click', () => {  // När knappen klickas
    html.classList.toggle('dark');  // Växla mellan mörkt och ljust tema

    // Spara det valda temat i localStorage
    if (html.classList.contains('dark')) {  // Om det är mörkt 
      localStorage.setItem('theme', 'dark');  // Spara som 'dark'
    } else {  // Om det är ljust 
      localStorage.setItem('theme', 'light');  // Spara som 'light'
    }

    updateIcons();  
  });

  // För hamburgermenyn
  const menuToggle = document.getElementById('menu-toggle');  
  const mobileMenu = document.getElementById('mobile-menu');  

  if (menuToggle && mobileMenu) {  // Om både knappen och menyn finns
    menuToggle.addEventListener('click', () => {  // När  hamburgermenyn klickas på
      mobileMenu.classList.toggle('hidden');  // Dölja/visa menyn 
    });
  }
});
