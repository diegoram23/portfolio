const formName = document.getElementById('name')
const formBtn = document.getElementById('form-btn')
const formEmail = document.getElementById('email')
const formMessage = document.getElementById('message')
const modal = document.getElementById('modal')
const modalBtn = document.getElementById('modal-btn')


formBtn.addEventListener('click', (e) => {
    e.preventDefault()
    sendMail()
})

const sendMail = () => {
    formBtn.disabled = true
        formBtn.textContent = 'Sending'

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
                messageSentModal()
            })
        .catch(error => {
            console.log(error)
        })
        formBtn.textContent = 'Send Message'
    formBtn.disabled = false
}

modalBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

const messageSentModal = () => {
    modal.style.display = 'inline'
}

