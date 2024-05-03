function btn_cv() {
    Swal.fire({
        showConfirmButton: false, // Para no mostrar el botón "OK"
        html: `

        <a href="CVYRVIN_2024.pdf" download="CurriculimVitae_Yrvin.pdf"><button class="btn_cv_download">Descargar CV</button></a>
        <img src="foto_cv.png" style="max-width: 100%; height: auto;">
    `
    });
}
