export function formatPokemonName(name) {
    if (name.includes("♀")) {
        return name.replace("♀", "-f");
    } else if (name.includes("♂")) {
        return name.replace("♂", "-m");
    } else if (name.includes(". ")) {
        return name.replace(". ", "-");
    } else if (name.includes("'")) {
        return name.replace("'", "");
    } else {return name;}
}

export function formatDescription(description) {
    if (typeof description === 'string' && description.includes("")) {
        return description.replace("", " ");
    
    } else {return description;}
}
export function notnull(stat) {
    const newStat = "n/a";
    if (stat === null) {
        return newStat;
    } else {
        return stat;
    }
    
}
export function typeslower(type) {
    return toLowerCase(type);
}
  
export function waitFor(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export function convertGramsToKilograms(weight){   
    const newWeight = weight/10;
    return newWeight.toString();
}
export function convertCentimeterstoMeters(height){
    const newHeight = height/10
    return newHeight.toString();
}
export function convertid(id){
    return id.toString().padStart(3,"0");
}

export function multiply(count){
    const newCount = count*2;
    return newCount;
}

export function deleteId(id){
    const lastid = id;
    const newID = lastid.split("");
    const firstIndex = newID.findIndex(c=> c!=="0");
    return lastid.substring(firstIndex);
}