   <p align="center">
    <img src="https://github.com/6aldej/ImagesForProjects/blob/master/CrypCat/logo.png" alt="logo"/>
   </p>
   
  🕹Данное приложение предназначено для отслеживания курса криптовалют.
  
  🌍Деплой готового приложения на **Heroku:** <https://crypcat.herokuapp.com/>.  
  
  📚Приложение написано на **React JS** с применением библиотек: **React Router, Axios.**  
  
  💻📱Приложение оптимизировано для экранов компьютеров, телефонов и планшетов.
 
 ## Функционал приложения 🎢
 
 На главной странице приложения находится конвертер криптовалют. 💱
 
 На данный момент пользователю доступны 2 криптовалюты: bitcoin и ethereum. Пользватель может конвертировать их
 в доллары USD, рубли RUB, биткоины BTC и эфириумы ETH.
 
 Ниже конвертера находится список избранных криптовалют, который можно редактировать. Для удаления криптовалюты необходимо нажать на ❌, а для добавления имеется кнопка
 **Add coin**. На данный момент пользователь может выбирать криптовалюту только из прдставленного списка.
 
 В поле каждой монеты отображается текущая цена в долларах USD и процент изменения цены за 24 часа. Если цена упала значение будет отображаться красным цветом с символом "▾", 
 если поднялась - зеленым цветом и символом "▴".
 
 Для сохранения списка избранных криптовалют используется **Local Storage**.
 
 <p align="center">
    <img src="https://github.com/6aldej/ImagesForProjects/blob/master/CrypCat/1.png" alt="1"/>
  </p>
  
  При нажатие на криптовалюту из списка пользователь перейдет на страницу подробной информации о криптовалюте. 
  
  📈На данной странице будет отображаться график изменения цены. 
  Есть три режима отображения графика: за 24 часа, за 7 дней и за год.
  
  Под графиков находится дополнительная инфармации о криптовалюте.
   
  <p align="center">
    <img src="https://github.com/6aldej/ImagesForProjects/blob/master/CrypCat/2.png" alt="2"/>
  </p>

 ## Установка приложения 🚀

    git clone https://github.com/6aldej/CrypCat
    cd CrypCat
    npm install
    npm start
