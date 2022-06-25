export const debounce = (func: Function, timeout: number = 1500) => {
    let timer: any;

    return function (...args: any) {
        clearTimeout(timer)
        // @ts-ignore
        timer = setTimeout(() => func.apply(this, args), timeout)
    }
}