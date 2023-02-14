
document.querySelector('#numberButton').addEventListener("click", function(){
    //Etape 1 : acceder la la valeur tapée dans l'input
    let number = document.querySelector("#numberInput").value;
    //Etape 2 : Selectionner le tbody et le suprimmer si il existe.
    let oldTBody = document.querySelector('tbody');
    if(oldTBody){
        oldTBody.remove()
    }
    //Etape 3: Créer un nouveau tbody:
    let newTBody = document.createElement('tbody')

    //Etape 4 : Utiliser la boucle pour remplir le tbody:
    for(let i = 0; i <= 10; i++){
        //Créer la colonne pour l'opération
        let opCol = document.createElement("td");
        opCol.textContent = `${i} x ${number}`

        //Créer la colonne pour le résultat
        let resultCol = document.createElement("td")
        resultCol.textContent = i*number
        
        //Créer la ligne
        let ligne = document.createElement('tr')

        //ajouter les colonnes dans la ligne
        ligne.append(opCol, resultCol);

        //Ajouter la ligne au tbody
        newTBody.append(ligne);

    }
    document.querySelector('table').append(newTBody)
})