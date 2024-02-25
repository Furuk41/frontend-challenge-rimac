import { IPlan, IResultPlanes, IUserApi } from "../types.d";

export const getUserData = async (): Promise<IUserApi> => {
  const response = await fetch(
    "https://rimac-front-end-challenge.netlify.app/api/user.json"
  );
  const responseJson = await response.json();
  return responseJson;
};

export const getPlanes = async (): Promise<IPlan[]> => {
  const response = await fetch(
    "https://rimac-front-end-challenge.netlify.app/api/plans.json"
  );
  const responseJson = (await response.json()) as IResultPlanes;

  const planesPosition = [0, 1, 3];
  const filteredPlanes = responseJson.list.filter((_, index) =>
    planesPosition.includes(index)
  );

  return filteredPlanes;
};
