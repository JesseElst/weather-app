export type Cities = {
  name: string;
  lon: string;
  lat: string;
};

export type Hourly = {
  time: number;
  temp: number;
  rain: number;
  wind: number;
  condition: string;
};

export type Charts = "temp" | "rain" | "wind";
