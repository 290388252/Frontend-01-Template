function convertStringToNumber(str, hex = 10) {
  // 处理转换进制是否在2-36之间
  if (typeof hex !== "number" || hex < 2 || hex > 36) {
    return NaN;
  }

  let num = 0;
  let i = 0;

  // 这里要判断str亦即没有传入任何值时应返回0
  if (str) {
    const arr = String(str).split(""); // 防止要转换的值不是字符串
    while (i < arr.length && arr[i] !== ".") {
      const element = arr[i];
      num = num * hex;
      num += element.codePointAt(0) - "0".codePointAt(0);
      i++;
    }

    if (arr[i] === ".") {
      i++;
    }

    let decimal = 1;
    while (i < arr.length) {
      const element = arr[i];
      decimal = decimal / hex;
      num += (element.codePointAt(0) - "0".codePointAt(0)) * decimal;
      i++;
    }
  }

  return num;
}