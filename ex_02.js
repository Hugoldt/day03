
function findHousing (housingToFind, housingList){ 
    let a=0
      while (a < housingList.length){
        if (housingToFind.toLowerCase() === housingList[a].toLowerCase()) {
            return [a,housingList[a]]
        }
        a++
        }
        return null 
    }


//Use console.log to debug you're code ! It is very useful
console.log("I'm debugging")

//Some code to display your function output: (you must modify it but /!\ do not deliver it /!\ ). Only deliver your function
 displayResult(findHousing("igloo", ["Flat", "House", "Hut", "House", "Igloo"]))