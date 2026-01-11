/**
 * Calculates the human-equivalent age of a pet.
 * Based on the AVMA and recent scientific logarithmic models.
 * * @param {number} age - The actual age of the pet in years.
 * @param {string} type - 'dog' or 'cat'.
 * @param {string} size - Optional for dogs: 'small', 'medium', 'large'. Defaults to 'medium'.
 * @returns {number} - The human equivalent age.
 */
function calculatePetAge(age, type, size = 'medium') {
  if (age < 0) return 0;

  // CAT LOGIC
  // Year 1 = 15, Year 2 = +9, Year 3+ = +4 per year
  if (type.toLowerCase() === 'cat') {
    if (age === 0) return 0;
    if (age === 1) return 15;
    if (age === 2) return 24;
    return 24 + ((age - 2) * 4);
  }

  // DOG LOGIC
  if (type.toLowerCase() === 'dog') {
    // First year is roughly 15 for all sizes
    if (age === 0) return 0;
    if (age === 1) return 15;
    
    // Second year is +9 for all sizes (Total 24)
    if (age === 2) return 24;

    // Year 3+ diverges by size
    // Small: +4/year, Medium: +5/year, Large: +6/year (simplified average)
    let multiplier = 5; 
    if (size === 'small') multiplier = 4;
    if (size === 'large') multiplier = 6;

    return 24 + ((age - 2) * multiplier);
  }

  return null; // Invalid type
}

module.exports = calculatePetAge;