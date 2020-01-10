<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="https://bezdpa-redir.ru/js/jquery.touchSwipe.min.js"></script>
<script>
  $(function() { 
 //Enable swiping...
 $("body").swipe( {
 //Генерируем обработчик swipe для всех направлений
 swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
 $(this).text("Вы перелистнули " + direction + " сторону" ); 
 },
 //threshold – расстояние сдвига контейнера, при котором срабатывает событие. По умолчанию — 75px, установите значение в 0 для теста!
 threshold:0
 });
});
  </script>