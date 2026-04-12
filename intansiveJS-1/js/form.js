document.addEventListener('DOMContentLoaded', () => {
  // записываем в nlist все тэги form
  const formsNList = document.querySelectorAll('form');
  
  // прозодимся по всем данным nlist и вешаем листенер для сбора данных 
  // (метод подходит для случая если формы однотипны или содержат одни и теже поля для применения валидации)
  formsNList.forEach(form => {
    form.addEventListener('submit', (event) =>{
      event.preventDefault()
      // считываем данные из формы (если нет необходимости данную переменную можно передать в fetch как body)
      // считывает в том числе и пустые значения. 
      const fData = new FormData(form)
      // сохраняет в объект fData класс формы (так можно добавить любую пару ключь - значение)
      fData.append('form', form.classList)

      // если необходимо дополнительно обработать объект fData и сохранить как объект
      // вариант 1 короткий (использунм метод formdata и его вывод преобразуем в объект соответствующим методом Object)
      // const data =  Object.fromEntries(fData.entries())

      // вариант2 (нагляден позволяет обработать данные при записи в data (валидация и т.п.)): 
      // 2.1 создаем переменную в которую будем сохранять значения полей формы
      const data = {}
      // 2.2 итерируем обект через цикл 
      for (const [name, value] of fData) {
        data[name] = value
      }

      // вариант 3 использование методов Array (предусматривает преобразование fData  в массив, с дальнейшей записью данныз в объект через reduce)
      // const data = [...fData.entries()].reduce((obj, [key, value]) => {
      //   obj[key] = value;
      //   return obj;
      // }, {});

      // отправляем значения на сервер и обрабатываем запрос (https://jsonplaceholder.typicode.com/guide/)
      fetch('https://jsonplaceholder.typicode.com/posts', 
        { method: 'POST',
          body: JSON.stringify(data),
          headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => {
        // проверяем что статус ответа сервера 
        if (response.ok) {        
          // есди запрос успешен то возвращем ответ (в данном случае объект с id записи)
          return response.json()
        } else {
          // если ошибка то возрацаем объект ошибки в catch
          throw new Error(response.status)
        }
      })
      .then((jsonData) => {
        console.log(jsonData);
        alert ('Данные успешно отправлены!')
      })
      .catch(error => {
        alert ('данные отправлены с ошибкой ' + error.message )
      })
      .finally (()=> {
        // сбрасываем форму
        form.reset()
      })
    })
  }) 

});