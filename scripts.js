document.getElementById("btn").addEventListener("click", addtache);

const table =[];
  // Sélectionne l'élément <ul> avec l'ID "tachelist1"
  const tacheList1 = document.getElementById("tachelist")


  // Sélectionne l'élément <ul> avec l'ID "tachelist2"
  const tacheList2 = document.getElementById("tachelist2");
// Charger les tâches depuis le localStorage au démarrage
function addtache(){
    const inputtache = document.getElementById("inputtache");
    const tachetext = inputtache.value.trim();

    if ( tachetext === "") {
        alert("Veuillez entrer une tâche !");
            return;
    }
    if ( table.includes(tachetext)){
        alert("la tache est deja existe")
        return;
    }

    table.push(tachetext);
    const tacheItem = document.createElement("li");
    
    tacheItem.classList.add ("tache_item") ;
    tacheItem.innerText = tachetext;
    // Bouton de suppression
     const deleteBtn = document.createElement("btn_S");
     deleteBtn.classList.add("btn_Supp");
     deleteBtn.innerText = "Supprimer";
     deleteBtn.onclick = function () {
     tacheItem.remove();
    };
    
     // Bouton de validation
    const valideBtn = document.createElement("btn_valide") ;
    valideBtn.classList.add("btn_valide");
    valideBtn.innerText = "Valider";
    valideBtn.onclick = function () {
      
        // Crée un nouvel élément <li>
        const newTachItem = document.createElement("li");
        // Ajoute du texte au nouvel élément <li>       
        newTachItem.textContent = tachetext;
        
        
        // Ajoute l'élément <li> à l'intérieur de la liste <ul>
        
        tacheList2.appendChild(newTachItem);
        tacheList1.removeChild(tacheItem);


        // boutton en cours
        const encoursBtn = document.createElement('button')    ;
        encoursBtn.classList.add('btn_encours');
        encoursBtn.innerText = "En Cours";
        encoursBtn.onclick = function (){
            
            tacheList2.removeChild(newTachItem);
            tacheList1.appendChild(tacheItem);
        }
        
             // Bouton de supprimer 2

        const deleteBtn2 = document.createElement("btn_S2");
        deleteBtn2.classList.add("btn_Supp2");
        deleteBtn2.innerText = "Supprimer";
        deleteBtn2.onclick = function () {
        newTachItem.remove();
     }

        newTachItem.appendChild(encoursBtn);
        newTachItem.appendChild(deleteBtn2);

    }
    
        tacheList1.appendChild(tacheItem);
        // Ajoute le bouton de suppression à la tâche
         tacheItem.appendChild(deleteBtn);
       // Ajoute le bouton de validation à la tâche
       tacheItem.appendChild(valideBtn);
     // Vide le champ de saisie
     inputtache.value = "";

}