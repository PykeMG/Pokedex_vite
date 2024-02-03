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
  
export function waitFor(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export function convertGramsToKilograms(weight){   
    return weight/10;
}
export function convertCentimeterstoMeters(height){
    return height/10;
}
export function convertid(id){
    return id.toString().padStart(3,"0");
}