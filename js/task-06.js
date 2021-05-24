const input = document.querySelector('#validation-input');

const onInputBlur = (event) => {
    return event.currentTarget.value.length === Number(input.dataset.length)
        ? input.classList.add('valid')
        : input.classList.remove('valid') || input.classList.add('invalid');
 }
input.addEventListener('blur', onInputBlur)
