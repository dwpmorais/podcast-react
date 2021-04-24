export function convertDurationToTimeString(duration: number) {
    // Convertendo segundos em horas
    const hours = Math.floor(duration / 3600)
    // Convertendo segundos em minutos
    const minutes = Math.floor((duration % 3600) / 60)
    const seconds = duration % 60;

    const finalResult = [hours, minutes, seconds]
        // Se a hora for 1 hora ele vai adicionar o 0 com 2 digios
        .map(unit => String(unit).padStart(2, '0'))
        .join(':')

    return finalResult;
}