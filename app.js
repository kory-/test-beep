ZGN(function()
{
  // 18番ピンで動作させます
  var Pin = '18';

  // TerminalのGPIOインスタンスを取得します
  var gpio = ZGN.term('1').gpio;

  // 調光の初期値を0に設定します
  var level = 0;

  // 指定ピンをPWMに設定
  gpio.pinMode(Pin, ZGN.PWM);

  // upボタンをクリック
  $(document).on('click', '#up', function() {
    level = level + 1; // levelを1上げる
    gpio.pwmWrite(Pin, level); // デューティー比の設定

    $('#pwm').text(level);
  });

  // dwonボタンをクリック
  $(document).on('click', '#down', function() {
    level = level <= 0 ? 0 : level - 1; // levelを1下げる
    gpio.pwmWrite(Pin, level); // デューティー比の設定

    $('#pwm').text(level);
  });

});