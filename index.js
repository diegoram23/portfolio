import { data } from './projectsData.js'

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

/*------------------------------------ Pop up Modal Functions --------------------------- */

modalBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

const messageSentModal = () => {
    modal.style.display = 'inline'
}

/*------------------------------------- Render Projects -------------------------------- */
const projectsContainer = document.getElementById('projects-container')

const getProjectsHtml = () => {
    let projectsHtml = ''
    data.forEach(project => {
        projectsHtml += `
        <div class="project-img">
        <h3>${project.title}</h3>
        <a target="_blank" href="${project.liveLink}"><img src="${project.coverPhoto}"
                alt="${project.altTag}"></a>
    </div>
    <div class="project-info">
        <p class='project-text'>${project.projectText} </p>
        <span><a target="_blank" href="${project.liveLink}">LIVE APP</a></span>
        <span><a target="_blank" href="${project.codeLink}">SOURCE CODE</a></span>
    </div>
        `
    })
    return projectsHtml
}

const renderProjectsHtml = () => {
    projectsContainer.innerHTML = getProjectsHtml()
}

renderProjectsHtml()
