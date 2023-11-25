type ColorType = {
  backgroundColor: string;
};

export const constructColor = (contributionsCount: number): ColorType => {
  let backgroundColor = "#fff";

  if (contributionsCount >= 1 && contributionsCount <= 9) {
    backgroundColor = "rgba(172, 213, 242, 1)";
  } else if (contributionsCount >= 10 && contributionsCount <= 19) {
    backgroundColor = "rgba(127, 168, 201, 1)";
  } else if (contributionsCount >= 20 && contributionsCount <= 29) {
    backgroundColor = "rgba(82, 123, 160, 1)";
  } else if (contributionsCount >= 30) {
    backgroundColor = "rgba(37, 78, 119, 1)";
  } else {
    backgroundColor = "#fff";
  }

  return {
    backgroundColor,
  };
};
