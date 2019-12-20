const isHasMajorVowelHarmony = (word) => {
  const hardVowels = ['a','ı','o','u'];
  const softVowels = ['e','i','ö','ü'];
  
  const hardVowelIncluded = word.split('').some(c => hardVowels.includes(c));  // split is required since some method
  const softVowelIncluded = word.split('').some(c => softVowels.includes(c));  // comes from Array.prototype. (word is not array)
  
  return !(hardVowelIncluded && softVowelIncluded);
}


export default isHasMajorVowelHarmony;
