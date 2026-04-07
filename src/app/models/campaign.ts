export interface Campaign {
  id: string;
  name: string;
  createdAt: Date;
  lastPlayedAt: Date;
  tokens?: any[];
  mapBackgroundImage?: string | null;
}
