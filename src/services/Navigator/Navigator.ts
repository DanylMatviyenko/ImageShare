import { createRef } from 'react';

export const navigationRef = createRef<any>();

const navigate = (name: string, params?: object) => {
    navigationRef.current?.navigate(name, params);
}
const goBack = () => {
    navigationRef.current?.goBack();
}
export const Navigator = {
    navigate,
    goBack
}