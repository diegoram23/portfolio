const formName = document.getElementById('name')
const formBtn = document.getElementById('form-btn')
const formEmail = document.getElementById('email')
const formMessage = document.getElementById('message')


formBtn.addEventListener('click', (e) => {
    e.preventDefault()
    sendMail()
})

function sendMail() {
    let params = {
        name: formName.value,
        email: formEmail.value,
        message: formMessage.value
    }

    const serviceId = 'service_tknhlvn'
    const templateId = 'template_tqqozvc'

    emailjs.send(serviceId, templateId, params)
        .then(
            res => {
                formName.value = ''
                formEmail.value = ''
                formMessage.value = ''
                console.log(res);
                alert('message sent succesfully')
            })
        .catch(error => {
            console.log(error)
        })
}



