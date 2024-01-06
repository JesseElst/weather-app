export type Cities = {
  name: string;
  lon: string;
  lat: string;
};

export type HourlyData = {
  time: number;
  temp: number;
  rain: number;
  wind: number;
  condition: string;
};

export type DaysData = {
  day: string;
  minTemp: number;
  maxTemp: number;
  rain: number;
  condition: string;
};

export type Charts = "temp" | "rain" | "wind";
