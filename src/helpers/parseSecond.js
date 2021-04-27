export default (number) => {
  const minutes = ~~(number / 60);
  const seconds = number - minutes * 60;
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
