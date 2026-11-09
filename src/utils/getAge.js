function getAge(dob) {
    const [year, month, day] = dob.split("-").map(Number);

    const birthday = new Date(year, month - 1, day);
    const today = new Date();

    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();

    if (days < 0) {
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years === 0) return `${months} months`;
    if (months === 0) return `${years} years`;

    return `${years} years, ${months} months`;
  }

export default getAge;