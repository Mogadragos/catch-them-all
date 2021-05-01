import data from "../assets/activities.json";

type Activity = {
    start_chip_id: string,
    activity_id: string,
    name : string,
    chips: Object
  };

class StorageService {
    activities: Object;
    activityIsSet: boolean;
    activity: Activity;
    active_chips: Array<Object>;

    constructor() {
        this.activities = data;
        this.activityIsSet = false;
    }

    /** 
     * Récupération et mise en place des données de l'activité
     * @param {string} startChipId 
     */
    setActivity(start_chip_id: string) {

        this.activity = this.activities[start_chip_id];

        if(localStorage.activity_id !== this.activity.activity_id) {
            localStorage.activity_id = this.activity.activity_id;
            this.active_chips = [];
            localStorage.active_chips = JSON.stringify([]);
        } else {
            this.active_chips = JSON.parse(localStorage.active_chips);
        }

        this.activityIsSet = true;
    }

    /** 
     * Découverte d'une nouvelle puce
     * @param {string} chip_id 
     */
    discoverChip(chip_id: string) {
        if(this.activityIsSet) {
            console.log(localStorage.active_chips);
            localStorage.active_chips.push(this.activity.chips[chip_id]);
            console.log(localStorage.active_chips);
        } else {
            throw "Set activity before discover new chip";
        }
    }
}

export default new StorageService();