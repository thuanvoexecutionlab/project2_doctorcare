import { TOGGLE_DRAWER } from "./constants";

export const setDrawer = (payload) => ({
    type: TOGGLE_DRAWER,
    payload,
});