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
###  正则表达匹配String字符串直接量

```js
 /"(?:\\.|[^"])*"|'(?:\\.|[^'])*'/g
```
