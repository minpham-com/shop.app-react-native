import { getItem, removeItem, setItem } from '@/core/utils';

const TOKEN = 'token';

export const getToken = () => getItem<any>(TOKEN);
export const removeToken = () => removeItem(TOKEN);
export const setToken = (value: any) => setItem<any>(TOKEN, value);
