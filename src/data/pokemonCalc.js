const pokemonCalc = {
  title: "Battle calculation in Pokemon Red",
  html: (
    <div className="content">
      <p>move_accuracy * 255 * your_accuracy * opponet_evasion &gt; random_number_between_1_255</p>
      <p>
        same_tpe_attack_bonus * attack_effectivnes * ( random_number_between_217_255 / 255 ) * ( ( (
        ( 2 * your_level * critical_hit_modifyer ) / 5 + 2 ) * attack_power * ( your_attack_stat /
        opponent_defence_stat ) ) / 50 + 2 )
      </p>
      <p>rounded down</p>
    </div>
  ),
};
export default pokemonCalc;
