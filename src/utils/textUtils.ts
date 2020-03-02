const shortenText = (str: string, maxLen: number, separator = ' ') => {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
};

const spongebobText = (str: string) => {
  let m = '';
  for (let i = 0; i < str.length; i++)
    m += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
  return m;
};

export { shortenText, spongebobText };
