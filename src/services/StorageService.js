import data from "../assets/activities.json";

class StorageService {
  constructor() {
    this.activities = data;
  }

  /**
   * Récupération et mise en place des données de l'activité
   * @param {string} startChipId
   */
  setActivity(start_chip_id) {
    const activity = this.activities.filter(
      (activity) => activity.start_chip_id === start_chip_id
    );
    if (activity.length > 0) {
      this.activity = activity[0];
      localStorage.activity_id = this.activity.activity_id;

      this.active_chips = [];
      localStorage.active_chips = JSON.stringify([]);
    } else {
      throw new Error("Cette puce n'est pas une puce de départ !");
    }
  }

  /**
   * Récupération du titre de l'activité en cours si elle existe
   */
  isActiveActivity() {
    if (localStorage.activity_id) {
      this.temp_activity = this.activities.filter(
        (activity) => activity.activity_id === localStorage.activity_id
      )[0];
      return this.temp_activity.name;
    } else {
      return "";
    }
  }

  confirmActiveActivity() {
    this.activity = this.temp_activity;
    delete this.temp_activity;
    this.active_chips = JSON.parse(localStorage.active_chips);
  }

  /**
   * Découverte d'une nouvelle puce
   * @param {string} chip_id
   */
  discoverChip(chip_id) {
    if (this.activity) {
      if (this.activity.start_chip_id !== chip_id) {
        const chipData = this.activity.chips.filter(
          (chip) => chip.id === chip_id
        );
        if (chipData.length > 0) {
          console.log(this.active_chips);
          console.log(chip_id);
          if (!this.active_chips.includes(chip_id)) {
            this.active_chips.push(chip_id);
            localStorage.active_chips = JSON.stringify(this.active_chips);
          }
          console.log(this.active_chips);
        } else {
          throw new Error("Cette puce ne fait pas partie de votre parcours !");
        }
      } else {
        throw new Error(
          "Pour recommencer votre parcours, rendez-vous dans les paramètres !"
        );
      }
    } else {
      throw new Error("Commencez une activité avant de jouer !");
    }
  }

  getChipData(chip_id) {
    return this.activity.chips.filter((chip) => (chip.id === chip_id))[0];
  }

  /**
   * Récupération de toutes les puces actives
   */
  getActiveChips() {
    return this.activity.chips.filter((chip) =>
      this.active_chips.includes(chip.id)
    );
  }

  /**
   * Récupération de toutes les puces non découvertes
   */
  getUndiscoveredChips() {
    return this.activity.chips.filter(
      (chip) => !this.active_chips.includes(chip.id)
    );
  }

  /**
   * Reset de la mémoire
   */
  reset() {
    localStorage.clear();
  }
}

export default new StorageService();
