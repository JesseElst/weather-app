import type { Cities } from "@/types";

export const CITY_LIST: Cities[] = [
  { name: "Amsterdam", lat: "52.377956", lon: "4.897070" },
  { name: "New York", lat: "40.730610", lon: "-73.935242" },
  { name: "Berlin", lat: "52.520008", lon: "13.404954" },
] as const;
