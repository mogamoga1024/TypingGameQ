
const questionList = [
    { text: "りんご", typingText: new TypingText("りんご") },
    { text: "バナナ", typingText: new TypingText("バナナ") },
    { text: "オレンジ", typingText: new TypingText("オレンジ") },
    { text: "いちご", typingText: new TypingText("いちご") },
    { text: "ブドウ", typingText: new TypingText("ブドウ") },
    { text: "パイナップル", typingText: new TypingText("パイナップル") },
    { text: "みかん", typingText: new TypingText("みかん") },
    { text: "レモン", typingText: new TypingText("レモン") },
    { text: "メロン", typingText: new TypingText("メロン") },
    { text: "スイカ", typingText: new TypingText("スイカ") },
    { text: "トマト", typingText: new TypingText("トマト") },
    { text: "きゅうり", typingText: new TypingText("きゅうり") },
    { text: "キャベツ", typingText: new TypingText("キャベツ") },
    { text: "レタス", typingText: new TypingText("レタス") },
    { text: "ほうれん草", typingText: new TypingText("ほうれんそう") },
    { text: "かぼちゃ", typingText: new TypingText("かぼちゃ") },
    { text: "じゃがいも", typingText: new TypingText("じゃがいも") },
    { text: "さつまいも", typingText: new TypingText("さつまいも") },
    { text: "玉ねぎ", typingText: new TypingText("たまねぎ") },
    { text: "にんじん", typingText: new TypingText("にんじん") },
    { text: "大根", typingText: new TypingText("だいこん") },
    { text: "しいたけ", typingText: new TypingText("しいたけ") },
    { text: "まいたけ", typingText: new TypingText("まいたけ") },
    { text: "しめじ", typingText: new TypingText("しめじ") },
    { text: "えのき", typingText: new TypingText("えのき") },
    { text: "なす", typingText: new TypingText("なす") },
    { text: "ピーマン", typingText: new TypingText("ピーマン") },
    { text: "トウモロコシ", typingText: new TypingText("トウモロコシ") },
    { text: "ブロッコリー", typingText: new TypingText("ブロッコリー") },
    { text: "カリフラワー", typingText: new TypingText("カリフラワー") },
    { text: "もやし", typingText: new TypingText("もやし") },
    { text: "にら", typingText: new TypingText("にら") },
    { text: "ねぎ", typingText: new TypingText("ねぎ") },
    { text: "セロリ", typingText: new TypingText("セロリ") },
    { text: "パセリ", typingText: new TypingText("パセリ") },
    { text: "アスパラガス", typingText: new TypingText("アスパラガス") },
    { text: "オクラ", typingText: new TypingText("オクラ") },
    { text: "ズッキーニ", typingText: new TypingText("ズッキーニ") },
    { text: "ごぼう", typingText: new TypingText("ごぼう") },
    { text: "れんこん", typingText: new TypingText("れんこん") },
    { text: "枝豆", typingText: new TypingText("えだまめ") },
    { text: "小松菜", typingText: new TypingText("こまつな") },
    { text: "三つ葉", typingText: new TypingText("みつば") },
    { text: "春菊", typingText: new TypingText("しゅんぎく") },
    { text: "山芋", typingText: new TypingText("やまいも") },
    { text: "とうがん", typingText: new TypingText("とうがん") },
    { text: "鯖（サバ）", typingText: new TypingText("さば") },
    { text: "鰯（イワシ）", typingText: new TypingText("いわし") },
    { text: "鮭（サケ）", typingText: new TypingText("さけ") },
    { text: "鯛（タイ）", typingText: new TypingText("たい") },
    { text: "ブリ", typingText: new TypingText("ブリ") },
    { text: "タコ", typingText: new TypingText("タコ") },
    { text: "イカ", typingText: new TypingText("イカ") },
    { text: "アサリ", typingText: new TypingText("アサリ") },
    { text: "ハマグリ", typingText: new TypingText("ハマグリ") },
    { text: "シジミ", typingText: new TypingText("シジミ") },
    { text: "カニ", typingText: new TypingText("カニ") },
    { text: "エビ", typingText: new TypingText("エビ") },
    { text: "ウニ", typingText: new TypingText("ウニ") },
    { text: "カキ", typingText: new TypingText("カキ") },
    { text: "ホタテ", typingText: new TypingText("ホタテ") },
    { text: "鶏肉", typingText: new TypingText("とりにく") },
    { text: "牛肉", typingText: new TypingText("ぎゅうにく") },
    { text: "豚肉", typingText: new TypingText("ぶたにく") },
    { text: "羊肉", typingText: new TypingText("ようにく") },
    { text: "馬肉", typingText: new TypingText("ばにく") },
    { text: "鹿肉", typingText: new TypingText("しかにく") },
    { text: "カモ肉", typingText: new TypingText("カモにく") },
    { text: "鶉（ウズラ）", typingText: new TypingText("うずら") },
    { text: "納豆", typingText: new TypingText("なっとう") },
    { text: "うなぎ", typingText: new TypingText("うなぎ") },
    { text: "たらこ", typingText: new TypingText("たらこ") },
    { text: "いくら", typingText: new TypingText("いくら") },
    { text: "数の子", typingText: new TypingText("かずのこ") },
    { text: "筍（タケノコ）", typingText: new TypingText("たけのこ") },
    { text: "ワカメ", typingText: new TypingText("ワカメ") },
    { text: "昆布", typingText: new TypingText("こんぶ") },
    { text: "のり", typingText: new TypingText("のり") },
    { text: "ひじき", typingText: new TypingText("ひじき") },
    { text: "サバ缶", typingText: new TypingText("サバかん") },
    { text: "ツナ缶", typingText: new TypingText("ツナかん") },
    { text: "うずら卵", typingText: new TypingText("うずらたまご") },
    { text: "鳥の唐揚げ", typingText: new TypingText("どりのからあげ") },
    { text: "天ぷら", typingText: new TypingText("てんぷら") },
    { text: "すき焼き", typingText: new TypingText("すきやき") },
    { text: "鍋物", typingText: new TypingText("なべもの") },
    { text: "味噌汁", typingText: new TypingText("みそしる") },
    { text: "煮物", typingText: new TypingText("にもの") },
    { text: "焼き魚", typingText: new TypingText("やきざかな") },
    { text: "焼肉", typingText: new TypingText("やきにく") },
    { text: "牛丼", typingText: new TypingText("ぎゅうどん") },
    { text: "寿司", typingText: new TypingText("すし") },
    { text: "さしみ", typingText: new TypingText("さしみ") },
    { text: "ラーメン", typingText: new TypingText("ラーメン") },
    { text: "うどん", typingText: new TypingText("うどん") },
    { text: "そば", typingText: new TypingText("そば") },
    { text: "パスタ", typingText: new TypingText("パスタ") },
    { text: "カレーライス", typingText: new TypingText("カレーライス") },
    { text: "ピザ", typingText: new TypingText("ピザ") },
    { text: "ハンバーガー", typingText: new TypingText("ハンバーガー") },
];

function createRandomQuestionList(count) {
    const tmpQuestionList = [...questionList];
    const randomQuestionList = [];

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * tmpQuestionList.length);
        const question = tmpQuestionList.splice(randomIndex, 1)[0];
        randomQuestionList.push(question);
    }
    
    return randomQuestionList;
}
