export type Session = {
    id: number;
    weekday: string;
    date: string;
    showtimes: [
      {
        name: string;
        id: number;
      }
    ];
};

export type Showtimes = [
  {
    name: string;
    id: number;
  }
];
