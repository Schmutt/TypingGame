'use strict'

{
  function setWord() { //単語をセット
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0]; //単語の重複を防ぐ
    target.textContent = word;
    loc = 0;
  }

  const words = [
    'red',
    'blue',
    'pink',
  ]

  let word;
  let loc = 0; // 何番目の文字か？
  let startTime;
  let isPlaying = false; //ゲームをしていないとき

  const target = document.getElementById('target');
  
  


  document.addEventListener('click', () => {
    if(isPlaying === true) { //ゲームを始めたら
      return; //処理の中止  クリックしても何も反応しない
    }

    isPlaying = true; //ゲームをしているとき
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', e => {
    if(e.key !== word[loc]) { //打ったキーが不正解の時  メインとなる処理以外のケース
      return; //何もしない
    }

    //打ったキーが正しいときの処理↓  メインとなる処理
    loc++; 

    // 1:_ed
    // 2:__d
    // 3:___

    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if(loc === word.length) { //次の単語をセット
      if(words.length === 0) { //すべての単語が出た後の処理
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2); //タイムを計る
        const result = document.getElementById('result');
        result.textContent = `Finished ${elapsedTime} seconds`;
        return;
      }

      setWord();
    }
  });


}