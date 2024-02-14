import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TypeCapsule from './TypeCapsule'
import TypeMultiply from './TypeMultiply'
import {multiply} from '../utils/utils'

const Weaknesses = ({name, title}) => {
  const [weaknesses, setWeaknesses] = useState([]);

  useEffect(() => {
    const fetchWeaknesses = async () => {
      try {
        const weaknessesData = await getWeaknesses(name);
        setWeaknesses(weaknessesData);
      } catch (error) {
        console.error('Error fetching weaknesses:', error);
      }
    };

    fetchWeaknesses();
  }, []);

  const getWeaknesses = async (name) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokemon data');
      }
      const data = await response.json();
      const types = data.types.map((type) => type.type.name);
      const weaknessesData = await fetchWeaknessesData(types);
      return weaknessesData;
    } catch (error) {
      console.error('Error fetching weaknesses:', error);
      return [];
    }
  };

  const fetchWeaknessesData = async (types) => {
    try {
      const weaknessesMap = new Map();
      for (const type of types) {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        if (!response.ok) {
          throw new Error('Failed to fetch weaknesses data');
        }
        const data = await response.json();
        const damageRelations = data.damage_relations;
        const doubleDamageFrom = damageRelations.double_damage_from.map((type) => type.name);
        const halfDamageFrom = damageRelations.half_damage_from.map((type) => type.name);
        const noDamageFrom = damageRelations.no_damage_from.map((type) => type.name);

        for (const weakness of doubleDamageFrom) {
          if (!halfDamageFrom.includes(weakness) && !noDamageFrom.includes(weakness)) {
            weaknessesMap.set(weakness, (weaknessesMap.get(weakness) || 0) + 1);
          }
        }
      }
      // Eliminar debilidades que son fortalezas del segundo tipo
      for (const type1 of types) {
        for (const type2 of types) {
          if (type1 !== type2) {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type2}`);
            if (!response.ok) {
              throw new Error('Failed to fetch weaknesses data');
            }
            const data = await response.json();
            const damageRelations = data.damage_relations;
            const halfDamageFrom = damageRelations.half_damage_from.map((type) => type.name);
            const noDamageFrom = damageRelations.no_damage_from.map((type) => type.name);
            for (const weakness of halfDamageFrom) {
              if (!noDamageFrom.includes(weakness) && weaknessesMap.has(weakness)) {
                const immuneToType1 = noDamageFrom.includes(type1);
                if (!immuneToType1) {
                  weaknessesMap.delete(weakness);
                }
              }
            }
          }
        }
      }
      for (const type1 of types) {
        for (const type2 of types) {
          if (type1 !== type2) {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type2}`);
            if (!response.ok) {
              throw new Error('Failed to fetch weaknesses data');
            }
            const data = await response.json();
            const damageRelations = data.damage_relations;
            const noDamageFrom = damageRelations.no_damage_from.map((type) => type.name);
            for (const weakness of noDamageFrom) {
              if (weaknessesMap.has(weakness)) {
                weaknessesMap.delete(weakness);
              }
            }
          }
        }
      }

      return Array.from(weaknessesMap.entries());
    } catch (error) {
      console.error('Error fetching weaknesses data:', error);
      return [];
    }
  };

  return (
    <div className="w-full">
      <h2 className='text-zinc-950 pb-1 text-xl font-bold'>{title}</h2>
      <ul className='flex justify-start mt-4 flex-wrap gap-4'>
        {weaknesses.map(([weakness, count], index) => (
          <li key={index}>
             <TypeMultiply type={weakness} multiply={multiply(count)}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

Weaknesses.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Weaknesses;