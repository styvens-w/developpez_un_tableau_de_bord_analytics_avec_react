export default class FormatChartData {
  //Local variables for the properties
  activityXAxis: number[];
  sessionsXAxis: string[];
  performanceLabels: string[];

  constructor() {
    /**
     * @property {Array<number>} activityXAxis Property for the X axis of the bars chart
     */
    this.activityXAxis = [1, 2, 3, 4, 5, 6, 7];

    /**
     * @property {Array<string>} sessionsXAxis Property for the X axis of the line chart
     */
    this.sessionsXAxis = ["L", "M", "M", "J", "V", "S", "D"];

    /**
     * @property {Array<string>} performanceLabels Property for the different axis of the radar chart
     */
    this.performanceLabels = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];

    this.keyInfoName = ["Calories", "Protéines", "Glucides", "Lipides"];
  }

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

  setRadarFormattedData(data) {
    let dataValuesArray: {
      subject: string,
      grade: number,
      fullMark: number,
    }[] = [];

    for (let i = 0; i < data?.data.length; i++) {
      const performance = data.data[i];
      dataValuesArray.push({
        subject: this.performanceLabels[i],
        grade: performance.value,
        fullMark: 250,
      });
    }

    return dataValuesArray;
  }

  setGaugeFormattedData(data) {
    return [{ value: data * 100 }];
  }

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
