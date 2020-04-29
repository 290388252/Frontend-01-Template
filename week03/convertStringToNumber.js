function convertStringToNumber(str, hex = 10) {
  // ����ת�������Ƿ���2-36֮��
  if (typeof hex !== "number" || hex < 2 || hex > 36) {
    return NaN;
  }

  let num = 0;
  let i = 0;

  // ����Ҫ�ж�str�༴û�д����κ�ֵʱӦ����0
  if (str) {
    const arr = String(str).split(""); // ��ֹҪת����ֵ�����ַ���
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