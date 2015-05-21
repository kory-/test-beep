ZGN(function()
{
  // 18番ピンで動作させます
  var Pin = '18';

  // TerminalのGPIOインスタンスを取得します
  var gpio = ZGN.term('1').gpio;
  var dute = 10000;

  // 調光の初期値を0に設定します
  var level = 0;

  // 指定ピンをPWMに設定
  gpio.pinMode(Pin, ZGN.PWM);

  // upボタンをクリック
  $(document).on('click', '#up', function() {
    level = level + 10; // levelを1上げる
    gpio.pwmWrite(Pin, level / dute); // デューティー比の設定

    $('#pwm').text(level/dute);
  });

  // dwonボタンをクリック
  $(document).on('click', '#down', function() {
    level = level <= 0 ? 0 : level - 10; // levelを1下げる
    gpio.pwmWrite(Pin, level / dute); // デューティー比の設定

    $('#pwm').text(level/dute);
  });

});