export const currentDate = () => {
  const dateNow = new Date();
  return `${dateNow.getDay() < 10? 0 : ''}${dateNow.getDay()}/${dateNow.getMonth() < 10? 0 : ''}${dateNow.getMonth()+1}/${dateNow.getFullYear()}`
}