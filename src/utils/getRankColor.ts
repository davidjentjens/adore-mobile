const getRankValue = (value: number): string => {
  switch (value) {
    case 1:
      return '#a58238';
    case 2:
      return '#5a5854';
    default:
      return '#65511b';
  }
};

export default getRankValue;
