# mycomico_webkit
mycomico_webkit
<h2>用 Node-webkit 開發的 Comico 漫畫下載機</h2>
------------------------------------------------------<br>
<div align="center">
  <img src="snapshot/snapshot1.png">
  <br>
  執行畫面
</div>
<br>
<h3>開發動機：</h3>
一個愛看漫畫的朋友說如果寫的出來，要請吃響食天堂，所以就寫了~<br>
<br>
<h3>使用方法：</h3>
<ul>
<li>1、至 https://nwjs.io/ 下載 node-webkit 程式，Normal 或 SDK 版皆可</li>
<li>2、nwjs 解壓縮後，改目錄名稱成「nw」跟 run.bat 放一起</li>
<li>3、執行 run.bat (其實就是 nw\nw.exe source)</li>
<li>4、啟動後，畫面會自動打開 Comico 網頁，瀏覽到你想要看的漫畫，上面的「整部下載」按鈕就會變成可以點擊的狀況</li>
<li>5、如果只想抓單一回，就進到該回，「單回下載」的按鈕就可以點擊</li>
<li>6、下載後，檔案會自動存在 run.bat 目錄同一層的 DOWNLOAD 目錄</li>
<li>7、詳細的使用方式可以參考 snapshot/comico_downloader.mp4</li>
</ul>

<h3>程式說明：</h3>
<ul>
 <li>1、nw Node-webkit 核心，需自行下載 nwjs 解壓縮後改名成 nw</li>
 <li>2、source 目錄，下載機的程式原始檔，主要程式詳見 index.html</li>
 <li>3、source\node_modules，這程式主要相依 request，npm install request 後，就自己抓了一卡車的庫...~_~</li>
</ul>
<br>
<h3>License：</h3>
MIT License
<br><br>


<h3>F&Q：</h3>
1、能抓付費的漫畫嗎？<br>
Ans：不能，但也不是不行，只要你是正規的會員，在瀏覽器中登入身分後，付費後，應該就可以下載了。<br>
<br>
2、一次能同時抓多部漫畫嗎？<br>
Ans：目前沒有這個功能，你可以考慮多開視窗。<br>
<br>
3、抓整部時，可以選擇要抓的回數嗎？<br>
Ans：目前是從頭抓到尾，沒有這個功能，以後有閒再加<br>

