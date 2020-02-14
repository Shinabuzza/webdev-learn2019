function replaceString(str, sourceStr, replaceStr) {
  // str - произвольная строка
  // sourceStr - искомая строка
  // replaceStr - строка на которую мы меняем искомую строку
  if (typeof str === 'string' && typeof sourceStr === 'string' && typeof replaceStr === 'string' && str.indexOf(sourceStr) >= 0) {
    str = str.slice(0, str.indexOf(sourceStr)) + replaceStr + str.slice(str.indexOf(sourceStr) + sourceStr.length, str.length);
    return str;
  }

  return null;
}
