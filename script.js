const enemy_level = document.querySelector("#enemy-level");
const melee = document.querySelector("#melee");
const ranged = document.querySelector("#ranged");
const potential = document.querySelector("#potential");

const player_level = document.querySelector("#player-level");
const defense = document.querySelector("#defense");
const resistance_phisics = document.querySelector("#resistance-phisics");
const resistance_beam = document.querySelector("#resistance-beam");
const resistance_ether = document.querySelector("#resistance-ether");
const resistance_bolt = document.querySelector("#resistance-bolt");
const resistance_heat = document.querySelector("#resistance-heat");
const resistance_gravity = document.querySelector("#resistance-gravity");

const attack_type = document.querySelector("#attack-type");
const resistance_type = document.querySelector("#resistance-type");
const damage_scaling = document.querySelector("#damage-scaling");
const defense_scaling = document.querySelector("#defense-scaling");

const attack_buff = document.querySelector("#attack-buff");
const attack_debuff = document.querySelector("#attack-debuff");
const power_down = document.querySelector("#power-down");
const black_site = document.querySelector("#black-site");
const attack_buff_other1 = document.querySelector("#attack-buff-other1");
const attack_buff_other2 = document.querySelector("#attack-buff-other2");
const attack_buff_total = document.querySelector("#attack-buff-total");

const critical = document.querySelector("#critical");
const skell_defense = document.querySelector("#skell-defense");
const additive_multipliers_other1 = document.querySelector("#additive-multipliers-other1");
const additive_multipliers_other2 = document.querySelector("#additive-multipliers-other2");
const additive_multipliers_other3 = document.querySelector("#additive-multipliers-other3");
const additive_multipliers_total = document.querySelector("#additive-multipliers-total");

const offensive_stance = document.querySelector("#offensive-stance");
const defensive_stance = document.querySelector("#defensive-stance");
const strong_shield = document.querySelector("#strong-shield");
const landbank_support = document.querySelector("#landbank-support");
const aura_other = document.querySelector("#aura-other");
const aura_total = document.querySelector("#aura-total");

const resistance_base = document.querySelector("#resistance-base");
const resistance_buff = document.querySelector("#resistance-buff");
const resistance_debuff = document.querySelector("#resistance-debuff");
const resistance_aura = document.querySelector("#resistance-aura");
const resistance_other1 = document.querySelector("#resistance-other1");
const resistance_other2 = document.querySelector("#resistance-other2");
const resistance_other3 = document.querySelector("#resistance-other3");
const resistance_total = document.querySelector("#resistance-total");

const independent1 = document.querySelector("#independent1");
const independent2 = document.querySelector("#independent2");
const independent3 = document.querySelector("#independent3");
const independent4 = document.querySelector("#independent4");
const independent5 = document.querySelector("#independent5");
const independent6 = document.querySelector("#independent6");
const independent_total = document.querySelector("#independent-total");

const result1_1 = document.querySelector("#result1-1");
const result1_2 = document.querySelector("#result1-2");
const result1_3 = document.querySelector("#result1-3");
const result1_4 = document.querySelector("#result1-4");
const result1_5 = document.querySelector("#result1-5");
const result1_6 = document.querySelector("#result1-6");
const result1_7 = document.querySelector("#result1-7");
const result1_8 = document.querySelector("#result1-8");
const result1_9 = document.querySelector("#result1-9");

const result2_1 = document.querySelector("#result2-1");
const result2_2 = document.querySelector("#result2-2");
const result2_3 = document.querySelector("#result2-3");
const result2_4 = document.querySelector("#result2-4");
const result2_5 = document.querySelector("#result2-5");
const result2_6 = document.querySelector("#result2-6");
const result2_7 = document.querySelector("#result2-7");
const result2_8 = document.querySelector("#result2-8");
const result2_9 = document.querySelector("#result2-9");


function ValidationCheck (tag) {
    if (isNaN(tag.value) || tag.value === "") {
        tag.value = tag.defaultValue;
    };
};

function set_damage_scaling() {
    result1_4.textContent = damage_scaling.value + "%";
    return Number(damage_scaling.value);
};

function set_defense_scaling() {
    result1_7.textContent = defense_scaling.value + "%";
    return Number(defense_scaling.value);
};

function calc_attack_type() {
    if (attack_type.value === "melee") {
        result1_1.textContent = melee.value;
        return Number(melee.value);
    } else if (attack_type.value === "ranged") {
        result1_1.textContent = ranged.value;
        return Number(ranged.value);
    } else if (attack_type.value === "potential") {
        result1_1.textContent = potential.value;
        return Number(potential.value);
    };
};


function calc_resistance_type() {
    if (resistance_type.value === "phisics") {
        resistance_base.textContent = resistance_phisics.value;
        return Number(resistance_phisics.value);
    } else if (resistance_type.value === "beam") {
        resistance_base.textContent = resistance_beam.value;
        return Number(resistance_beam.value);
    } else if (resistance_type.value === "ether") {
        resistance_base.textContent = resistance_ether.value;
        return Number(resistance_ether.value);
    } else if (resistance_type.value === "bolt") {
        resistance_base.textContent = resistance_bolt.value;
        return Number(resistance_bolt.value);
    } else if (resistance_type.value === "heat") {
        resistance_base.textContent = resistance_heat.value;
        return Number(resistance_heat.value);
    } else if (resistance_type.value == "gravity") {
        resistance_base.textContent = resistance_gravity.value;
        return Number(resistance_gravity.value);
    };
};

function calc_attackbuff_total() {
    var total = (
        100 +
        Number(attack_buff.value) +
        Number(attack_debuff.value) +
        Number(power_down.value) +
        Number(black_site.value) +
        Number(attack_buff_other1.value) +
        Number(attack_buff_other2.value)
    );
    attack_buff_total.textContent = String(total) + "%";
    result1_2.textContent = String(total) + "%";
    return total;
};

function calc_additive_multiplier_total() {
    var total = (
        100 +
        (critical.checked ? 25 : 0) +
        Number(skell_defense.value) +
        Number(additive_multipliers_other1.value) +
        Number(additive_multipliers_other2.value) +
        Number(additive_multipliers_other3.value)
    );
    additive_multipliers_total.textContent = String(total) + "%";
    result2_2.textContent = String(total) + "%";
    return total;
};

function calc_aura_total() {
    var total = (
        100 +
        Number(offensive_stance.value) +
        Number(defensive_stance.value) +
        Number(strong_shield.value) +
        Number(landbank_support.value) +
        Number(aura_other.value)
    );
    aura_total.textContent = String(total) + "%";
    result2_3.textContent = String(total) + "%";
    return total;
};

function calc_resistance_total() {
    var total = (
        calc_resistance_type() +
        Number(resistance_buff.value) +
        Number(resistance_debuff.value) +
        Number(resistance_aura.value) +
        Number(resistance_other1.value) +
        Number(resistance_other2.value) +
        Number(resistance_other3.value)
    );
    resistance_total.textContent = String(total);
    result2_4.textContent = String(total);
    return total;
};

function calc_level_difference() {
    var difference = 100 + 12 * Math.max(Math.min(60, Number(enemy_level.value)) - Math.min(60, Number(player_level.value)), 0);
    result2_5.textContent = String(difference) + "%";
    return difference;
}

function calc_independent_total() {
    var total =(
        100 *
        ((100 + Number(independent1.value)) / 100) *
        ((100 + Number(independent2.value)) / 100) *
        ((100 + Number(independent3.value)) / 100) *
        ((100 + Number(independent4.value)) / 100) *
        ((100 + Number(independent5.value)) / 100) *
        ((100 + Number(independent6.value)) / 100)
    );
    independent_total.textContent = String(Math.floor(total)) + "%";
    result2_6.textContent = String(Math.floor(total)) + "%";
    return total;
};

function main() {
    ValidationCheck(enemy_level);
    ValidationCheck(melee);
    ValidationCheck(ranged);
    ValidationCheck(potential);
    ValidationCheck(player_level);
    ValidationCheck(defense);
    ValidationCheck(resistance_phisics);
    ValidationCheck(resistance_beam);
    ValidationCheck(resistance_ether);
    ValidationCheck(resistance_bolt);
    ValidationCheck(resistance_heat);
    ValidationCheck(resistance_gravity);
    ValidationCheck(damage_scaling);
    ValidationCheck(defense_scaling);
    ValidationCheck(attack_buff_other1);
    ValidationCheck(attack_buff_other2);
    ValidationCheck(additive_multipliers_other1);
    ValidationCheck(additive_multipliers_other2);
    ValidationCheck(additive_multipliers_other3);
    ValidationCheck(aura_other);
    ValidationCheck(resistance_other1);
    ValidationCheck(resistance_other2);
    ValidationCheck(resistance_other3);
    ValidationCheck(independent1);
    ValidationCheck(independent2);
    ValidationCheck(independent3);
    ValidationCheck(independent4);
    ValidationCheck(independent5);
    ValidationCheck(independent6);

    var damage_scaling_n = set_damage_scaling();
    var defense_scaling_n = set_defense_scaling();
    var power_n = calc_attack_type();
    var defense_n = Number(defense.value);
    var attack_buff_total_n = calc_attackbuff_total();
    var additive_multipliers_total_n = calc_additive_multiplier_total();
    var aura_total_n = calc_aura_total();
    var resistance_total_n = calc_resistance_total();
    var level_difference_n = calc_level_difference();
    var independent_total_n = calc_independent_total();

    var result1_3_n = power_n * (attack_buff_total_n / 100);
    result1_3.textContent = String(Math.floor(result1_3_n));
    var result1_5_n = result1_3_n * (damage_scaling_n / 100);
    result1_5.textContent = String(Math.floor(result1_5_n));
    result1_6.textContent = String(Math.floor(defense_n));
    var result1_8_n = defense_n * (defense_scaling_n / 100);
    result1_8.textContent = String(Math.floor(result1_8_n));
    var result1_9_n = result1_5_n - result1_8_n;
    result1_9.textContent = String(Math.floor(result1_9_n));
    result2_1.textContent = String(Math.floor(result1_9_n));

    var final_result = (
        result1_9_n *
        (additive_multipliers_total_n / 100) *
        (aura_total_n / 100) *
        ((100 - resistance_total_n) / 100) *
        (level_difference_n / 100) *
        (independent_total_n / 100)
    );
    final_result = Math.max(1, final_result);
    result2_7.textContent = Math.floor(final_result);
    result2_8.textContent = Math.floor(final_result * 1.025);
    result2_9.textContent = Math.floor(final_result * 1.05);
};

var inputs = document.querySelectorAll("input, select");
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", main);
};
