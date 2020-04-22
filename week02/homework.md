###  UTF8 Encoding 

```
function encodeUTF(text) {
    const code = encodeURIComponent(text);
    const bytes = [];
    for (let i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else bytes.push(c.charCodeAt(0));
    }
    return bytes;
}
```
### Number正则匹配字面量
- 整数

```
/^-?\\d+$/
```
- 浮点数

```
/^(-?\\d+)(\\.\\d+)?$/
```

- 二进制数

```
/^[01]+$/
```

- 八进制数

```
/^[0-7]+$/
```

- 十六进制数

```
/(^0x[a-f0-9]{1,2}$)|(^0X[A-F0-9]{1,2}$)|(^[A-F0-9]{1,2}$)|(^[a-f0-9]{1,2}$)/
```
```
/(^-?\\d+$)|(^(-?\\d+)(\\.\\d+)?$)|(^[01]+$)|(^[0-7]+$)|((^0x[a-f0-9]{1,2}$)|(^0X[A-F0-9]{1,2}$)|(^[A-F0-9]{1,2}$)|(^[a-f0-9]{1,2}$))/
```
###  写一个正则表达式，匹配所有的String字符串直接量，单引号和双引号

```js
/[\u0021-\u007E]{6,16}|[\x21-\x7E]{6,16}|(['"])(?:(?!\1).)*?\1/g
```