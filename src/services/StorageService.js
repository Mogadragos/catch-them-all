import data from "../assets/activities.json";

class StorageService {
    constructor() {
        this.activities = data;
        this.activityIsSet = false;
    }

    /** 
     * Récupération et mise en place des données de l'activité
     * @param {string} startChipId 
     */
    setActivity(startChipId) {
        console.log(localStorage);

        this.activity = this.activities[startChipId];

        if(localStorage.activity_id !== this.activity.activity_id) {
            localStorage.activity_id = this.activity.activity_id;
            localStorage.activeChips = [];
        }

        this.activityIsSet = true;
    }

    discoverChip(chip_id) {
        console.log(localStorage.activeChips);
        localStorage.activeChips.push(this.activity.chips[chip_id]);
        console.log(localStorage.activeChips);
    }
}

export default new StorageService();