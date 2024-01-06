import type { DaysData } from "@/types";
import { useEffect, useState } from "react";

type FetchResponse = {
  data: DaysData[] | null;
  errorMessage: string;
  isLoading: boolean;
};

export const useFetchDays = (location: string): FetchResponse => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<DaysData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchedData = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${location}&days=7`
        );
        const formatted = await fetchedData.json();
        const daysData = formatted.forecast.forecastday;
        const resultData = daysData.map((item: any) => {
          const date = new Date(item.date);
          const fullDate = date.toDateString();
          const year = fullDate.lastIndexOf(" ");
          const day = fullDate.substring(0, year);

          return {
            day: day,
            code: item.day.condition.code,
            minTemp: item.day.mintemp_c,
            maxTemp: item.day.maxtemp_c,
            rain: item.day.daily_chance_of_rain,
            condition: item.day.condition.text,
          };
        });
        setData(resultData);
        setErrorMessage("");
        setIsLoading(false);
      } catch (error) {
        setErrorMessage(`Error message: ${error}`);
      }
    };
    fetchData();
  }, [location]);

  return { isLoading, errorMessage, data };
};
