# Atcoder

1. [https://atcoder.jp/contests/abc086/tasks/abc086_a](https://atcoder.jp/contests/abc086/tasks/abc086_a)

```
    <?php
    $array = explode(' ', fgets(STDIN));
    
    if(($array[0] * $array[1]) % 2 == 0){
    	echo 'Even';
    }else {
    	echo 'Odd';
    }
    ?>
```
2. [https://atcoder.jp/contests/abc081/tasks/abc081_a](https://atcoder.jp/contests/abc081/tasks/abc081_a)
```
    <?php
    	$word = fgets(STDIN);
    	echo substr_count($word, '1');
    ?>
```