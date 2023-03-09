export const formatNumber = (arg: number): string => {
    return new Intl.NumberFormat('en-US').format(arg);
};