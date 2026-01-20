const cleanAlphaNumeric = (str: string) => {
  return str.toUpperCase().replace(/[^A-Z0-9]/g, "");
};

export default cleanAlphaNumeric;
