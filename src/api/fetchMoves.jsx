export async function fetchMove(moveName) {
    const response = await fetch(
        `https://pokeapi.co/api/v2/move/${moveName}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch Moves");
    }
    const result = await response.json();

    const desiredVersionGroup = "black-white";
    let flavorText = "";
    for (const entry of result.flavor_text_entries) {
        if (entry.language.name === 'en' && entry.version_group.name === desiredVersionGroup) {
            flavorText = entry.flavor_text;
            break;
        }
    }
    
    const move = {
        accuracy: result.accuracy,
        pp: result.pp,
        power: result.power,
        priority: result.priority,
        target: result.target.name,
        type: result.type.name,
        class: result.damage_class.name, 
        name: result.name,
      };

    if (result.effect_entries.length > 0) {
        move.effect = result.effect_entries[0].effect;
    } else {
        move.effect = "data missing";
    }
    if (flavorText) {
        move.description = flavorText;
    } else {
        move.description = "data missing"; 
    }

     return move;
}