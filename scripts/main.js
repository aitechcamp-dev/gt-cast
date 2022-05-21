let mySwiper = new Swiper('.swiper', {
  // 以下にオプションを設定
  loop: true, //最後に達したら先頭に戻る
  speed: 2000,
  autoplay: {
    delay: 3000,
  },


});
let artSwiper = new Swiper('.swiper-art', {
  // 以下にオプションを設定
  loop: true, //最後に達したら先頭に戻る
  speed: 1000,
  autoplay: {
    delay: 3000, // スライドが切り替わるまでの表示時間(ミリ秒)
    stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
    disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
  },

  slidesPerView: 3,
});