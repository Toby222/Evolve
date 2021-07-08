import { global, breakdown } from './vars.js';
import { deepClone, adjustCosts, messageQueue } from './functions.js';
import { races } from './races.js';
import { craftCost, tradeRatio, atomic_mass, tradeBuyPrice, tradeSellPrice } from './resources.js';
import { actions, checkTechRequirements, checkAffordable } from './actions.js';
import { fuel_adjust, int_fuel_adjust } from './space.js';
import { f_rate } from './industry.js';
import { armyRating } from './civics.js';
import { alevel } from './achieve.js';
import { loc } from './locale.js';

export function enableDebug(){
    if (global.settings.expose){
        window.evolve = {
            actions: actions,
            races: races,
            tradeRatio: tradeRatio,
            craftCost: craftCost(),
            atomic_mass: atomic_mass,
            f_rate: f_rate,
            checkTechRequirements: checkTechRequirements,
            checkAffordable: checkAffordable,
            adjustCosts: adjustCosts,
            armyRating: armyRating,
            tradeBuyPrice: tradeBuyPrice,
            tradeSellPrice: tradeSellPrice,
            fuel_adjust: fuel_adjust,
            int_fuel_adjust: int_fuel_adjust,
            alevel: alevel,
            messageQueue: messageQueue,
            loc: loc,
            updateDebugData: updateDebugData,
            global: {},
            breakdown: {},
        };
    }
}

export function updateDebugData(){
    if (global.settings.expose){
        window.evolve.global = global;
        window.evolve.craftCost = craftCost(),
        window.evolve.breakdown = breakdown;
    }
}