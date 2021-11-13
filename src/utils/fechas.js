export const getMonthAndYearByMilisecond = (miliseconds) => {
  const date = new Date(miliseconds);
  const options = { month: 'long', year: 'numeric' };
  date.toLocaleDateString('es-ES', options);
  return date.toLocaleDateString('es-ES', options);
}