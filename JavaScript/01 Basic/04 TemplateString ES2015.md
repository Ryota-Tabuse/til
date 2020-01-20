# 04.TemplateString[ES2015]

# テンプレート文字列

・文字列への変数の埋め込みができるように
・複数行（改行を含む）文字列が書きやすくなった

・「`」バッククォートで文字列をくくる
・\${変数名}を埋め込む

    let name = '鈴木';
    let beforeString   = 'こんにちは' + name + 'さん。\nきょうもいい天気ですね。'
    console.log(beforeString);

    let templateString = `こんにちは、${1+1}さん。
    きょうもいい天気ですね。`;
    console.log(templateString );

↓

    "こんにちは、鈴木さん。
    きょうもいい天気ですね。"
