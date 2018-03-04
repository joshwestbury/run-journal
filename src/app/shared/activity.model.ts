export interface IActivity {
  id: number;
  name: string;
  comments?: string;
  date: Date;
  distance?: number;
  gpxData: string;
}
