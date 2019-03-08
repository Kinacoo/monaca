var num;
// optionのvalueを取得
function chackValue() {
	num = document.resource.seiza.selectedIndex;
	//	星座ネームList
	var seiname = ['未選択', 'おひつじ座', 'おうし座', 'ふたご座', 'かに座', 'しし座', 'おとめ座', 'てんびん座', 'さそり座', 'いて座', 'やぎ座', 'みずがめ座', 'うお座'];
	//0以外の時星座をseinameから同じ星座を取り出す0の時シークレットをだす
	if (num != 0) {
		//		console.log(seiname[num]);
	} else {
		console.log("蛇使い座");
	}
	//メッセージList
	var mes = ['今日は一日ラッキーな日！AreYouReady?', '今日はアンラッキー(..)自らの欲望で身を滅ぼしそう…', '今日は午後からラッキーな日！午前を耐え抜こう！！', '今日はあなたの恋人が他の誰かのものになるかも？！', '今日はとてもラッキーな日！よっしゃラッキー！文春砲に気を付けよう', 'ハイパーでムテキな一日になるでしょう', 'ライジングでアルティメットな一日', '今日は願いが叶うかも！望みをいいましょう', '学校のみんなと友達になろう', '戦わなければ生き残れない！今日は何事も臆せずチャレンジしよう'];
	//配列から乱数でメッセージを選ぶ
	var u = Math.floor(Math.random() * mes.length);
	//	console.log(mes[u]);
	//ラッキーアイテムList
	var item = ['仮面ライダーキッズ', 'ライドウォッチ', 'アストロスイッチ', 'オーメダル', 'ライドブッカー', 'ガイアメモリ', 'ウィザードリング', 'ロックシード', 'ゴースト眼魂', 'シフトカー', 'ガシャット', 'フルボトル', '豆腐', 'カブトゼクター', 'ギギのうでわ', 'エビフライ', '辛味噌'];
	//配列から乱数でラッキーアイテムを選ぶ
	var lu = Math.floor(Math.random() * item.length);
	//	console.log(item[lu]);
	//星座を選ぶとボタンが表示する
	if (num != 0) {
		var btn = document.getElementById("btn");
		btn.style.display = "block";

		//		idを取得
		var outputSeiza = document.getElementById("outputSeiza");
		var outputMes = document.getElementById("outputMes");
		var outputItem = document.getElementById("outputItem");

		//		テキストを出力
		outputSeiza.textContent = seiname[num];
		outputMes.textContent = mes[u];
		outputItem.textContent = item[lu];
	}

}
//ボタンを押したときに出力画面を切り替える
function changeOutput() {
	var output = document.getElementById("output");
	output.style.display = "none";
	var result = document.getElementById("result");
	result.style.display = "block";

}
