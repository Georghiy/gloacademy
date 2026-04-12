const readform = (formEl) => {
    const formData = new FormData(formEl),
        formName = formEl.classList.value.replace("form ", ""),
        data = {}
    ;
    formData.append('formName', formName)

    for(let [key, value] of formData) {
        data[key] = value
    }
    return data
}

const sendform = (formData, formEl) => {

    fetch('https://dummyjson.com/posts/add', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(response => {
        if(response.ok) {            
           return response.json()
        } else {
            throw new Error(response.status)
        }
    }).then(resData => {
        console.log(resData)
        alert('Данные успешно отправлены!')
    }).catch(error => {
        alert ('данные отправлены с ошибкой ' + error.message )
    }).finally(()=>{
        console.log(1)
        formEl.reset()
    })   
}

export default function form(formEl) {
    const formData = readform(formEl)
    sendform(formData, formEl)   
}