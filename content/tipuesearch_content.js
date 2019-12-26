var tipuesearch = {"pages": [{'title': 'About', 'text': '放大   回復   Hello   For Loop   Mass_Spring_Damping \n  內建放入的 Dart 原始碼  \n \n 倉儲\xa0 https://github.com/40823225/cp2019 \n Dart\xa0 https://dartpad.dartlang.org/?id=d546cffc84c95439c18ff2030a518292 \n', 'tags': '', 'url': 'About.html'}, {'title': 'work', 'text': '\n', 'tags': '', 'url': 'work.html'}, {'title': 'w3', 'text': '原始碼 \n void main () {\n   print("一直用不好是在哈囉");\n} \n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w6', 'text': '原始碼 \n int i;\nint sum;\n \nmain(){\n  sum = 0;\n  for(i=1;i <= 10 ;i++){\n    sum += i;\n    print("$sum");\n  }\n  print(\'sum = $sum\');\n} \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '原始碼: \n // 下列 Dart 程式, 利用 Runge Kutta 迭代運算法, 解常微分方程式\n// 設 t 為時間, x 則設為物體的位移\n// 假設要解 F=ma 的單一質量加上彈簧 (常數為 k) 與黏滯阻尼 (常數為 b)\n// f 為沿位移方向的施力\n// dx/dt = v, dv/dt = (f-kx-bv)/m\n// dx / dt = (t - x)/2, 起始值 t0=0, x0=1, 求 t=2 時的 x 值\n//\n// 已知起始值 t0 與 x0 後, 可以利用下列 rungeKutta 函式, 以\n// h 為每步階增量值, 求 dxdt 常微分方程式任一 t 的對應值 x\n// 定義函式 rungeKutta, 共有四個輸入變數\n// 物體質量\nconst num m = 1;\n// 對質量的施力 f\nconst num f = 0.0;\n// 彈簧係數\nconst num k = 1;\n// 阻尼係數\nconst num b = 1;\n\n// 呼叫運算時, 需要起始時間, 終點時間, 位移起始值與速度起始值, 增量 h\nrungeKutta(t0, x0, v0, t, h) {\n  // 利用步階增量值 h 與 t 的起始及終點值\n  // 計算需要迭代的次數 n\n  int n = ((t - t0) / h).toInt();\n  // 宣告 x 為雙浮點數, 且設為起始值 x0\n  double x = x0;\n  // 宣告 v 為雙浮點數, 且設為起始值 v0\n  double v = v0;\n\n  // 模擬運算前, 列出起始條件\n  // 只列到小數點第三位, 時間、位移與速度以 \\t  隔開, \\t 代表插入 tab 符號, 可將資料複製到 Excel 進行繪圖\n  print("${t0.toStringAsFixed(3)} \\t ${x.toStringAsFixed(3)} \\t ${v.toStringAsFixed(3)}");\n\n  // 利用已知的 t0, x0, t 終點值與步階增量值 h, 迭代求 x 對應值\n  // 索引值 i 將每次增量 1, 從 i=1 執行 for 環圈至 i=n\n  for (int i = 1; i <= n; i++) {\n   /   // 將此階段的 t 與 x 值代入 dxdt 與 dvdt 函式求下列四個浮點變數值\n  / 因為必須兩個函式耦合, 必須同時計算\n    double xk1 = h * dxdt(t0, x, v);\n    double vk1 = h * dvdt(t0, x, v);\n    double xk2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);\n    double vk2 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);\n    double xk3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);\n    double vk3 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);\n    double xk4 = h * dxdt(t0 + h, x + xk3, v + vk3);\n    double vk4 = h * dvdt(t0 + h, x + xk3, v + vk3);\n    // 利用上述四個變數值求此步階增量後的對應 x 值\n    x = x + (1.0 / 6.0) * (xk1 + 2 * xk2 + 2 * xk3 + xk4);\n    v = v + (1.0 / 6.0) * (vk1 + 2 * vk2 + 2 * vk3 + vk4);\n    // 每次 for 迴圈執行最後, 準備計算下一個步階增量後的 x 對應值\n    // t 起始值配合步階增量值 h, 進行增量\n    t0 = t0 + h;\n    // 列出各模擬運算時間點所得到的結果\n    // 只列到小數點第三位, 時間、位移與速度以 \\t  隔開, \\t 代表插入 tab 符號, 可將資料複製到 Excel 進行繪圖\n  print("${t0.toStringAsFixed(3)} \\t ${x.toStringAsFixed(3)} \\t ${v.toStringAsFixed(3)}");\n  }\n\n  // 完成 for 迴圈迭代後, 傳回與 t 終點值對應的 x 值\n  return [x, v];\n}\n\n// 將微分方程式 "dx / dt = v" 定義為 dxdt 函式\ndxdt(t, x, v) {\n  return v;\n}\n\n// dx/dt = v, dv/dt = (f-kx-bv)/m\ndvdt(t, x, v) {\n  return (f - k * x - b * v) / m;\n}\n\n// 定義 main() 主函式內容, 目的在利用 rungeKutta 函式\n// 解常微分方程式\nmain() {\n// Driver method\n// num 資料型別可以是整數或雙浮點數\n  num t0 = 0;\n  num x0 = 1;\n  num v0 = 0;\n  num t = 5;\n  double h = 0.1;\n  rungeKutta(t0, x0, v0, t, h);\n}\n \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w11', 'text': '純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping    temperature \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': '新增 " 攝氏與華氏自動判別" 的按鈕 \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping    Temperature   CF_change \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '純 Dart 程式 \n Temp1 \n Html 程式 \n Temp2    內建放入的 Dart 原始碼  \n 放大   回復 \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '\n \n import \'dart:html\';\nimport \'dart:math\' as Math;\n \nCanvasElement canvas;\nCanvasRenderingContext2D ctx;\nint flag_w = 300;\nint flag_h = 200;\nnum circle_x = flag_w / 4;\nnum circle_y = flag_h / 4;\n \nvoid main() {\n  canvas = querySelector(\'#canvas\');\n  ctx = canvas.getContext(\'2d\');\n \n  drawROC(ctx);\n  querySelector("#roc").onClick.listen((e) => drawROC(ctx));\n  querySelector("#usa").onClick.listen((e) => drawUSA(ctx));\n  querySelector("#button").onClick.listen((e) => clearCanvas());\n}\n \nvoid drawUSA(ctx){\n  // 請畫出美國國旗\n  ctx.clearRect(0, 0, flag_w, flag_h);\n  ctx.font = "30px Arial";\n  ctx.strokeStyle = \'rgb(255, 0, 0)\';\n  ctx.strokeText("請畫出美國國旗", flag_w/6, flag_w/4);\n}\n \nvoid drawROC(ctx){\n  // 先畫滿地紅\n  ctx.clearRect(0, 0, flag_w, flag_h);\n  ctx.fillStyle = \'rgb(255, 0, 0)\';\n  ctx.fillRect(0, 0, flag_w, flag_h);\n  // 再畫青天\n  ctx.fillStyle = \'rgb(0, 0, 150)\';\n  ctx.fillRect(0, 0, flag_w / 2, flag_h / 2);\n  // 畫十二道光芒白日\n  ctx.beginPath();\n  num star_radius = flag_w / 8;\n  num angle = 0;\n  for (int i = 0; i < 25; i++) {\n    angle += 5 * Math.pi * 2 / 12;\n    num toX = circle_x + Math.cos(angle) * star_radius;\n    num toY = circle_y + Math.sin(angle) * star_radius;\n    // 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i != 0)\n      ctx.lineTo(toX, toY);\n    else\n      ctx.moveTo(toX, toY);\n  }\n  ctx.closePath();\n  // 將填色設為白色\n  ctx.fillStyle = \'#fff\';\n  ctx.fill();\n  // 白日:藍圈\n  ctx.beginPath();\n  ctx.arc(circle_x, circle_y, flag_w * 17 / 240, 0, Math.pi * 2, true);\n  ctx.closePath();\n  // 填色設為藍色\n  ctx.fillStyle = \'rgb(0, 0, 149)\';\n  ctx.fill();\n  // 白日:白心\n  ctx.beginPath();\n  ctx.arc(circle_x, circle_y, flag_w / 16, 0, Math.pi * 2, true);\n  ctx.closePath();\n  // 填色設為白色\n  ctx.fillStyle = \'#fff\';\n  ctx.fill();\n}\n \nvoid clearCanvas(){\n  ctx.clearRect(0, 0, flag_w, flag_h);\n} \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow   Temp 1 \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery   temp2 \n Flutter 程式 \n Flutter0   Flutter1   Flutter2   Flutter3 \n 放大   回復 \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '\n \n \n 學員名單 URL:   每組人數:      \n \n  ##############################  \n 設一乙亂數分組 \n  footer  \n \n \n  Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.  \n \n \n  for footer  \n \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w16查驗考試', 'text': '倉儲: https://github.com/40823225/cp2019/ \n 網頁: https://40823225.github.io/cp2019/content/About.html \n 影片', 'tags': '', 'url': 'w16查驗考試.html'}]};