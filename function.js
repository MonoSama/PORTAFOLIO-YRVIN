

function btn_cv() {
    Swal.fire({
        showConfirmButton: false, // Para no mostrar el botón "OK"
        html: `

        <a href="Curriculim vitae - Pachas Yrvin.pdf" download="Curriculim vitae - Pachas Yrvin.pdf"><button class="btn_cv_download">Descargar CV</button></a>
        <img src="foto_cv.jpg" style="max-width: 100%; height: auto;">
    `
    });
}



