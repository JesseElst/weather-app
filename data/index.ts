import type { Cities } from "@/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const CITY_LIST: Cities[] = [
  { name: "Amsterdam", lat: "52.377956", lon: "4.897070" },
  { name: "New York", lat: "40.730610", lon: "-73.935242" },
  { name: "Berlin", lat: "52.520008", lon: "13.404954" },
] as const;

export type Icons = {
  [key: number]: keyof typeof MaterialCommunityIcons.glyphMap;
};

export const WEATHER_ICONS: Icons = {
  1000: "weather-sunny",
  1003: "weather-cloudy",
  1006: "weather-cloudy-alert",
  1009: "weather-hail",
  1030: "weather-fog",
  1063: "weather-lightning",
  1066: "weather-partly-cloudy",
  1069: "weather-partly-cloudy",
  1072: "weather-partly-rainy",
  1087: "weather-partly-snowy",
  1114: "weather-partly-rainy",
  1117: "weather-pouring",
  1135: "weather-rainy",
  1147: "weather-snowy",
  1150: "weather-cloudy",
  1153: "weather-cloudy-alert",
  1168: "weather-fog",
  1171: "weather-hail",
  1180: "weather-hazy",
  1183: "weather-lightning",
  1186: "weather-partly-cloudy",
  1189: "weather-partly-cloudy",
  1192: "weather-partly-rainy",
  1195: "weather-partly-snowy",
  1198: "weather-partly-rainy",
  1201: "weather-pouring",
  1204: "weather-rainy",
  1207: "weather-snowy",
  1210: "weather-sunny",
  1213: "weather-cloudy",
  1216: "weather-cloudy-alert",
  1219: "weather-fog",
  1222: "weather-hail",
  1225: "weather-hazy",
  1237: "weather-lightning",
  1240: "weather-partly-cloudy",
  1243: "weather-partly-cloudy",
  1246: "weather-partly-rainy",
  1249: "weather-partly-snowy",
  1252: "weather-partly-rainy",
  1255: "weather-pouring",
  1258: "weather-rainy",
  1261: "weather-snowy",
  1264: "weather-sunny",
  1273: "weather-cloudy",
  1276: "weather-cloudy-alert",
  1279: "weather-fog",
  1282: "weather-hail",
} as const;
