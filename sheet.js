document.addEventListener('DOMContentLoaded',function(){
    // selectionner les elements HTML  color-box et change-color-btn
     var colorBox = document.getElementById('color-box')
     console.log(colorBox);
     var changeColorBoxBtn = document.getElementById("change-color-btn")
   
      // fonction pour generer une color aleatoire
     function getRandomColor () {
        var letters ='0123456789ABCDEF';
        let color = "#"
        for (let i = 0; i <=5 ; i++) {
           color = color + letters[Math.floor(Math.random()*16)]        
        }
        return color;
     }
      // Ajouter un ecouteur d'evenement au boutton
      changeColorBoxBtn?.addEventListener("click", function () {
       // changer la couleur de background de div  color-box

      if (colorBox) {
          colorBox.style.background = getRandomColor()
      }
      }
      )
   })