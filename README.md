#MathGraph

javascript と canvas を使って 数学のグラフを表示するページ。

This is the file to draw graphs with javascript and HTML5.  
You can use in offline because this is consisted by only one html file.

##Feature
Explicit Function  
Parametric Function

##Future
Implicit Function  
Locus  
Polar Coordinates  
3-dimentional graph  

## Generate Math equation from input value (入力値からの数式生成)
Using javascript which was output from http://jscc.phorward-software.com/jscc/jscc.html
with the following input.  
下の定義を使って http://jscc.phorward-software.com/jscc/jscc.html から出力したコードを使う。

    /~ --- Token definitions --- ~/
    
    /~ Characters to be ignored ~/
    !   ' |\t' ;
    
    /~ Non-associative tokens ~/
        '\('
        '\)'
        '\{'
        '\}'
        '\['
        '\]'
        '\|'
        '\x'                            X
        '[0-9]+'                        INT   [* %match = parseInt( %match ); *]
        '[0-9]+\.[0-9]*|[0-9]*\.[0-9]+' FLOAT [* %match = parseFloat( %match ); *]
        'pi'                            PI
        'e'                             E
        'arcsin'
        'arccos'
        'arctan'
        'sin'
        'cos'
        'tan'
        'log'
        'exp'
        ;
    
    /~ Left-associative tokens, lowest precedence ~/
    <  '\+'
       '\-';
    
    <  '\*'
       '/';
    
    < 'arcsin'
      'arccos'
      'arctan'
      'sin'
      'cos'
      'tan'
      'log'
      'exp';
    
    >  '^'
       '\*\*';
    
    ##
    
    /~ --- Grammar specification --- ~/
    
    p:      f              [* alert( %1 ); *]
            ;
    
    f:      f '+' f        [* %% = %1.toString() + '+' + %3.toString(); *]
            | f '-' f      [* %% = %1.toString() + '-' + %3.toString(); *]
            | f '*' f      [* %% = %1.toString() + '*' + %3.toString(); *]
            | f f          [* %% = %1.toString() + '*' + %2.toString(); *]
            | f '/' f      [* %% = %1.toString() + '/' + %3.toString(); *]
            | '-' f &'*'   [* %% = '(-1)*' + %2.toString(); *]
            | '\[' f '\]'  [* %% = 'Math.floor(' + %2.toString() + ')'; *]
            | '{' f '}'    [* %% = '(' + %2.toString() + ')'; *]
            | '(' f ')'    [* %% = '(' + %2.toString() + ')'; *]
            | f '^' f      [* %% = 'Math.pow(' + %1.toString() + ',' + %3.toString() + ')'; *]
            | f '\*\*' f   [* %% = 'Math.pow(' + %1.toString() + ',' + %3.toString() + ')'; *]
            | '|' f '|'    [* %% = 'Math.abs(' + %2.toString() + ')'; *]
            | 'arcsin' f   [* %% = 'Math.asin(' + %2.toString() + ')'; *]
            | 'arccos' f   [* %% = 'Math.acos(' + %2.toString() + ')'; *]
            | 'arctan' f   [* %% = 'Math.atan(' + %2.toString() + ')'; *]
            | 'sin' f      [* %% = 'Math.sin(' + %2.toString() + ')'; *]
            | 'cos' f      [* %% = 'Math.cos(' + %2.toString() + ')'; *]
            | 'tan' f      [* %% = 'Math.tan(' + %2.toString() + ')'; *]
            | 'exp' f      [* %% = 'Math.exp(' + %2.toString() + ')'; *]
            | 'log' f      [* %% = 'Math.log(' + %2.toString() + ')'; *]
            | INT
            | FLOAT
            | PI           [* %% = 'Math.PI'; *]
            | E            [* %% = 'Math.E'; *]
            | X
            ;
