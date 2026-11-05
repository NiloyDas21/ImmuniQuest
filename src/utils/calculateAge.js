export function getAge(dob){
  const [year,month,day] = dob.split("-").map(Number);

  const birthDay = new Date(year,month-1,day)
  const today = new Date()

  let years = today.getFullYear()-birthDay.getFullYear();
  let months = today.getMonth()-birthDay.getMonth();
  let days = today.getDate()-birthDay.getDate();

  if(days<0){
    months--;
  }
  if(months<0){
    years--;
    //since if birth is 10 and today is 2(feb) months = -8; do months += 12 to get months = -8+12 = 4
    months += 12;
  }

  if(years === 0) return `${months} months`
  if(months === 0) return `${years} years`
  return `${years} years,${months} months`
}