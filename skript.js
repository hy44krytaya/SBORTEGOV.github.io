//элементы игры
const screen = document. querySelector('.screen');
const ship = document. querySelector('.spaceship');
const startBtn = document.getElementsByTagName('start')
const scoreElement = document.getElementsById('score')
const mesageElement = document.getElementsById('message')

//настройки игры
Let score = 0
Let shipPosition = 50;
const tags = ['<div>','<p>','<img>','<хех>' ]

// обработик движения корабля
document .addEventListener('keydown', function(e) {
	if (e.key === 'Arrowleft' && shipPosition > 5)
{
   shipPosition -=5;
   }
   if (e.key === 'ArowwRight' && shipPosition < 95) {
   	 shipPosition += 5;
   	}
   	//обновления позиций коробля
   	ship.style.left = shipPosition + '%';
   });