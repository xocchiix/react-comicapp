const random = Math.round(Math.random() * 2384 + 1);
export const ApiFetch = async () => {
  let url = `http://xkcd.com/${random}/info.0.json`;

  const isFetch = await fetch(`http://cors-anywhere.herokuapp.com/${url}`);

  const data = await isFetch.json();

  return data;
};
