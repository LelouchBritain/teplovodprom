export interface IProduct {
  id: string;
  name: string;
  supplyNominal: number;
  supplyMinMax: string;
  pressure: number;
  pressureMinMax: string;
  consumption: number;
  diameter: string;
  price: string;
  image?: string;
}
