const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    let array = [];
    for (let i = 0; i < letters[0].length; i++) {
      array.push([]);
    }
  
    for (let row = 0; row < letters.length; row++) {
      for (let col = 0; col < letters[row].length; col++) {
        array[col][row] = letters[row][col];
      }
      const connectedWord = array.map((ls) => ls.join(""));
      if (connectedWord.includes(word)) return true;
    }
    return false;
  };
  
  module.exports = wordSearch;
  