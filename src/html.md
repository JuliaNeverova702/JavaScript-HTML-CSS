<p title="Всплывающая подсказка" class="lead"> Абзац с всплывающей подсказкой и классом </p>


## Маркированный список с вложенностью:
<ul>
  <li>Сходить в магазин
    <ul>
      <li>Купить молоко</li>
      <li>Купить хлеб</li>
    </ul>
  </li>
  <li>Пройти уроки на Code Basics </li>
</ul>

## Нумерованный список:
<ol>
  <li>Купить корм</li>
  <li>Сходить к Алексею</li>
  <li>Приготовить ужин</li>
</ol>

<p><b> Простое выделение текста </b></p>
<p><strong> Логическое выделение важного участка текста </strong></p>

<p><i> Простое выделение текста </i></p>
<p><em> Логическое выделение важного участка текста </em></p>


## Таблица с заголовком
<table>
  <caption>Ассортимент шоколада «Hexlet»</caption>
  <thead>
    <tr>
      <th>Вкусняшка</th>
      <th>Вес</th>
      <th>Цена</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Шоколад «Тота»</td>
      <td>100 грамм</td>
      <td>200 рублей</td>
    </tr>
    <tr>
      <td>Шоколад «Тота TeamLead»</td>
      <td>150 грамм</td>
      <td>500 рублей</td>
    </tr>
  </tbody>
</table>

## Таблица с объединением ячеек по горизонтали
<table>
  <thead>
    <tr>
      <th>Товар</th>
      <th>Цена</th>
      <th>Количество</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Чай</td>
      <td colspan="2">Нет на складе</td>
    </tr>
  </tbody>
</table>

## Таблица с объединением ячеек по вертикали
<table>
  <thead>
    <tr>
      <th>Сотрудник</th>
      <th>Зарплата</th>
      <th>Бонусы</th>
      <th>Менеджер</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Алексей Примадонин</td>
      <td>750$</td>
      <td>63$</td>
      <td rowspan="2">Кодовёнок Хекслетович</td>
    </tr>
    <tr>
      <td>Вениамин Редакторович</td>
      <td>1200$</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

<a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%BD%D0%B5%D0%BC%D0%BE%D0%BD%D0%B8%D0%BA%D0%B8_%D0%B2_HTML#%D0%A4%D0%BE%D1%80%D0%BC%D1%8B_%D1%87%D0%B8%D1%81%D0%B5%D0%BB"> Мнемоники в HTML </a>

## Тег на форматирование pre и вставка кода
<pre><code> 
  "use strict";
  let user_name = prompt('What is your name?', 'John');
  alert(`Your name is ${user_name}`);
</code></pre>