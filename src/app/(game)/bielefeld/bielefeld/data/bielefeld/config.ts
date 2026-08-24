import data from "./data/routes.json";

export const config = {
  id: "bielefeld",
  name: "Bielefeld",
  country: "Germany",
  // Startpunkt der Karte (Jahnplatz)
  center: [8.5323, 52.0228] as [number, number],
  // Zoom-Stufe, damit man die Stadt gut sieht
  zoom: 12.5,
  stationsCount: 11, // Anzahl der einzigartigen Stationen in deiner routes.json
  routes: data.routes,
};
