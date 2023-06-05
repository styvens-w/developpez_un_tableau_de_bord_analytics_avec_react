export default class FormatChartData {
  // Variables locales pour les propriétés
  activityXAxis: number[];
  sessionsXAxis: string[];
  performanceLabels: string[];
  keyInfoName: string[];

  constructor() {
    /**
     * @property {Array<number>} activityXAxis Propriété de l'axe X du graphique à barres
     */
    this.activityXAxis = [1, 2, 3, 4, 5, 6, 7];

    /**
     * @property {Array<string>} sessionsXAxis Propriété de l'axe X du graphique en courbes
     */
    this.sessionsXAxis = ["L", "M", "M", "J", "V", "S", "D"];

    /**
     * @property {Array<string>} performanceLabels Propriété pour les différents axes du graphique radar
     */
    this.performanceLabels = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];

    /**
     * @property {Array<string>} keyInfoName Propriété pour les différentes infos clé
     */
    this.keyInfoName = ["Calories", "Protéines", "Glucides", "Lipides"];
  }

  /**
   * Renvoie un tableau formaté pour le graphique à barres
   * @param data
   * @returns {{name: string, kg: number, kCal: number}[]} Tableau des données pour le graphique à barres
   */
  setBarsFormattedData(data) {
    let dataValuesArray: {
      name: string,
      kg: number,
      kCal: number,
    }[] = [];

    for (let i in data) {
      const sessions = data[i];

      const { kilogram, calories } = sessions;

      dataValuesArray.push({
        name: this.activityXAxis[i].toString(),
        kg: kilogram,
        kCal: calories,
      });
    }

    return dataValuesArray;
  }

  /**
   * Renvoie un tableau formaté pour le graphique en courbes
   * @param data
   * @returns {{name: string, min: number}[]} Tableau des données pour le graphique en courbes
   */
  setLineFormattedData(data) {
    let dataValuesArray: {
      name: string,
      min: number,
    }[] = [];

    for (let i = 0; i < data?.length; i++) {
      const activity = data[i];

      const { day, sessionLength } = activity;

      dataValuesArray.push({
        name: this.sessionsXAxis[day - 1],
        min: sessionLength,
      });
    }

    return dataValuesArray;
  }

  /**
   * Renvoie un tableau formaté pour le graphique radar
   * @param data
   * @returns {{subject: string, grade: number, fullMark: number}[]} Tableau des données pour le graphique en radar
   */
  setRadarFormattedData(data) {
    let dataValuesArray: {
      subject: string,
      grade: number,
    }[] = [];

    for (let i = 0; i < data?.data.length; i++) {
      const performance = data.data[i];
      dataValuesArray.push({
        subject: this.performanceLabels[i],
        grade: performance.value,
      });
    }

    return dataValuesArray;
  }

  /**
   * Renvoie un tableau formaté pour le graphique de jauge
   * @param data
   * @returns {[{value: number}]} Tableau des données pour le graphique de jauge
   */
  setGaugeFormattedData(data) {
    return [{ value: data * 100 }];
  }

  /**
   * Renvoie un tableau formaté pour les infos clé
   * @param data
   * @returns {{name: string, value: string, icon: string}[]} Tableau des données pour les infos clé
   */
  setCardFormattedData(data) {
    let dataValuesArray: {
      name: string,
      value: string,
      icon: string,
    }[] = [];

    if (data) {
      for (let i = 0; i < Object.keys(data).length; i++) {
        const value = new Intl.NumberFormat("en-IN", {
          maximumSignificantDigits: 3,
        }).format(Object.values(data)[i].toString());

        const valueFormatted = `${value}${
          this.keyInfoName[i] === "Calories" ? "kCal" : "g"
        }`;

        dataValuesArray.push({
          name: this.keyInfoName[i],
          value: valueFormatted,
        });
      }
    }

    return dataValuesArray;
  }
}
