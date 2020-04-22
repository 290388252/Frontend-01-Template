# 每周总结可以写在这里
 ## js 语言设计

 ### 编程语言通识

 #### 语言按语法分类

    1. 非形式语言
      中文，英文
    2. 形式语言（乔姆斯基谱系）
      0型： 无限制文法
      1型： 上下文相关文法
      2型： 上下文无关文法
      3型： 正则文法

 ### 一般命令式编程语言构成
  1. Atom
     - Identifier
     - Literal
  2. Expression
     - Atom
     - Operator
     - Punctuator
  3. Statement
     - Expression
     - Keyword
     - Punctuator
  4. Structure
     - Function
     - Class
     - Process
     - Namespace
  5. Program
     - Program
     - Mould
     - Package
     - Library
 ###  分类所知道的编程语言（都是图灵完备语言，没有什么高低之分）

 - python 动态强类型 

 - java 静态强类型
 - JavaScript 动态弱类型    
 ## 词法和类型

### Atom 词

### whiteSpace

可查阅 unicode [space列表](https://www.fileformat.info/info/unicode/category/Zs/list.htm)

- Tab：制表符（打字机时代：制表时隔开数字很方便）
- VT：纵向制表符
- FF: FormFeed
- SP: Space
- NBSP: NO-BREAK SPACE（和 SP 的区别在于不会断开、不会合并）
- ...

### LineTerminator 换行符

- LF: Line Feed `\n`
- CR: Carriage Return `\r`
- ...

### Comment 注释

### Token 记号：一切有效的东西

- Punctuator: 符号 比如 `> = < }`
- Keywords：比如 `await`、`break`... 不能用作变量名，但像 getter 里的 `get`就是个例外
  - Future reserved Keywords: `eum`
- IdentifierName：标识符，可以以字母、_ 或者 $ 开头，代码中用来标识**[变量](https://developer.mozilla.org/en-US/docs/Glossary/variable)、[函数](https://developer.mozilla.org/en-US/docs/Glossary/function)、或[属性](https://developer.mozilla.org/en-US/docs/Glossary/property)**的字符序列
  - 变量名：不能用 Keywords
  - 属性：可以用 Keywords
- Literal: 直接量
  - Number
    - 存储 Uint8Array、Float64Array
    - 各种进制的写法
      - 二进制0b
      - 八进制0o
      - 十进制0x
    - 实践
      - 比较浮点是否相等：Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON
      - 如何快捷查看一个数字的二进制：(97).toString(2)
  - String
    - Character
    - Code Point
    - Encoding
      - Unicode编码 - UTF
        - utf-8 可变长度 （控制位的用处）
    - Grammar
      - `''`、`""`、``` `
  - Boolean
  - Null
  - Undefined