document.addEventListener('DOMContentLoaded', () => {
    contact_form_validations()
})

function contact_form_validations() {
    const $form = document.querySelector(".contact-form"),
        $inputs = document.querySelectorAll(".contact-form [required]");
    console.log($inputs)

    //Mensaje de error 
    $inputs.forEach((input) => {
        const $span = document.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span);
    });

    //Validación inputs - Evento keyup
    document.addEventListener("keyup", (e) => {
        if (e.target.matches('.contact-form [required]')) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;

            //Si tiene patrón
            if (pattern && $input.value !== "") {
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                    ? document.getElementById($input.name).classList.add("is-active")
                    : document.getElementById($input.name).classList.remove("is-active")
            }

            //Si no tiene patrón
            if (!pattern) {
                return $input.value === ""
                    ? document.getElementById($input.name).classList.add("is-active")
                    : document.getElementById($input.name).classList.remove("is-active")
            }
        }
    });

    //Evento submit
    document.addEventListener("submit", (e) => {
        e.preventDefault();
        // alert("Enviando formulario");

        const $loader = document.querySelector(".contact-form-loader"),
            $response = document.querySelector(".contact-form-response");

        $loader.classList.remove("none");

        setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();

            setTimeout(() => $response.classList.add("none"), 3000);
        }, 3000);
    });

}
