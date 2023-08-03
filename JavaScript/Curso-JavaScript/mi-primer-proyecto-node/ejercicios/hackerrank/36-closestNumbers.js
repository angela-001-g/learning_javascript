function closestNumbers(arr) {
    arr.sort((a, b) => a - b);
    let diferencia = arr[1] - arr[0];
    let resultado = [arr[0], arr[1]];

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] < diferencia) {
            resultado = [arr[i], arr[i + 1]];
            diferencia = arr[i + 1] - arr[i];
        } else if (arr[i + 1] - arr[i] === diferencia) {
            resultado = [...resultado, arr[i], arr[i + 1]];
        }
    }

    return resultado;
}