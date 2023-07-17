const stripHtmlFromText = (text) => {
    const regex = /<[^>]+>/g;
    return text.replace(regex, "");
  };
  
  module.exports = {
    stripHtmlFromText,
  };
  