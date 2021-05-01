import data from "../assets/activities.json";

class StorageService {
  constructor() {
    this.activities = data;
    this.activity_is_set = false;
  }

  /**
   * Récupération et mise en place des données de l'activité
   * @param {string} startChipId
   */
  setActivity(start_chip_id) {
    this.activity = this.activities.filter(
      (activity) => activity.start_chip_id === start_chip_id
    )[0];
    localStorage.activity_id = this.activity.activity_id;

    this.active_chips = [];
    localStorage.active_chips = JSON.stringify([]);

    this.activity_is_set = true;
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
    this.active_chips = JSON.parse(localStorage.active_chips);

    this.activity_is_set = true;
  }

  /**
   * Découverte d'une nouvelle puce
   * @param {string} chip_id
   */
  discoverChip(chip_id) {
    if (this.activity_is_set) {
      this.active_chips.push(chip_id);
      localStorage.active_chips = JSON.parse(this.active_chips);
    } else {
      throw new Error("Set activity before discover new chip");
    }
  }
}

export default new StorageService();
