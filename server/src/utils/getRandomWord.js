import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

/**
 * Converts a string representation of boolean to actual boolean value.
 * 
 * @param {string} str - The string representation of boolean ("true" or "false").
 * @returns {boolean} - Returns true or false based on the string input.
 */
function stringToBool(str) {
  // Convert to lower case to handle case insensitivity
  const lowerCaseStr = str.toLowerCase();
  
  // Use a conditional check or ternary operator
  if (lowerCaseStr === 'true') {
    return true;
  } else if (lowerCaseStr === 'false') {
    return false;
  } else {
    // Optionally handle invalid input (e.g., throw an error or return a default value)
    throw new Error('Invalid boolean string input');
  }
}

/**
 * Checks if a word has any repeated letters.
 * 
 * @param {string} word - The word to check.
 * @param {string} bool - repeated allowed.
 * @returns {boolean} - Returns true if the word has repeated letters, false otherwise.
 */
function hasRepeatedLetters(word, bool) {
  const letterCounts = {};
  word.toLowerCase();

  for (let letter of word) {
    if (letterCounts[letter]) {
      if(Boolean(bool)){
        return true; // Letter is repeated
      }else{
        return false; // Letter is repeated
      }
    }
    letterCounts[letter] = 1; // Mark letter as seen
  }
  if(bool){
    return false; // Letter is repeated
  }else{
    return true; // Letter is repeated
  }
}

/**
 * Checks if a word contains any number or special characters except letters.
 * 
 * @param {string} word - The word to check.
 * @returns {boolean} - Returns true if the word contains numbers or special characters, false otherwise.
 */
function hasNumberOrSpecialChar(word) {
  const pattern = /[^a-zA-Z]/; // Regular expression to match any character that is not a letter
  return pattern.test(word);
}

/**
 * Selects a random word based on specified criteria.
 * 
 * @param {number} letterCount - The length of the word.
 * @param {boolean} repeated - If the word should have repeated letters.
 * @returns {Promise<string>} - Returns a promise that resolves to a random word.
 */
const getRandomWord = async (letterCount, repeated) => {
  try {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
    
      const filePath = path.resolve(__dirname,'..','data', 'words.txt');
      const data = await readFile(filePath, 'utf8');
      const lines = data.split('\n');

      const res = lines.filter(element => {
        return !hasNumberOrSpecialChar(element) && 
               element.length === letterCount && 
               hasRepeatedLetters(element, stringToBool(repeated));
      });
  
      if (res.length === 0) {
        throw new Error(`No words found with length ${letterCount} and repeated=${repeated}`);
      }

      const randomIndex = Math.floor(Math.random() * res.length);
      return res[randomIndex];
  } catch (error) {
      console.error('Error reading file:', error);
      throw error;
  } 
};

export default getRandomWord;