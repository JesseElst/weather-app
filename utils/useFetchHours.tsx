import type { HourlyData } from "@/types";
import { useEffect, useState } from "react";

type FetchResponse = {
  data: HourlyData[] | null;
  errorMessage: string;
  isLoading: boolean;
};

export const useFetchHours = (location: string): FetchResponse => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<HourlyData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchedData = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${location}&hourly=24`
        );
        const formatted = await fetchedData.json();
        const hourlyData = formatted.forecast.forecastday[0].hour;
        const resultData = hourlyData.map((item: any) => {
          const date = new Date(item.time);
          const time = date.getHours();
          return {
            time: time,
            temp: item.temp_c,
            wind: item.wind_kph,
            rain: item.precip_mm,
            condition: item.condition.text,
          };
        });
        setData(resultData);
        setIsLoading(false);
        setErrorMessage("");
      } catch (error) {
        setErrorMessage(`Error message: ${error}`);
      }
    };
    fetchData();
  }, [location]);

  return { isLoading, errorMessage, data };
};
