/*
interface UserPreferences {}

const getPreferences = (): UserPreferences | null => {
  try {
    const storedPreferences = localStorage.getItem('userPreferences');
    return storedPreferences
      ? (JSON.parse(storedPreferences) as UserPreferences)
      : null;
  } catch (error) {
    console.error('Failed to fetch from local storage:', error);
    return null;
  }
};
*/
