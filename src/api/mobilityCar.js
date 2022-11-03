import axiosInstance from './axiosInstance';

const MOBILITY_API = 'https://preonboarding.platdev.net/api/cars';

export const mobilityCarAPI = {
  getCarList: async () => {
    const res = await axiosInstance.get(MOBILITY_API);
    return res.data;
  },
  getCarsWithType: async tagInfo => {
    const type = Object.keys(tagInfo).toString();
    const value = tagInfo[type];
    const res = await axiosInstance.get(`${MOBILITY_API}?${type}=${value}`);
    return res.data;
  },
};
