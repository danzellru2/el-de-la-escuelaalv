
    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("search-input");
        const searchButton = document.getElementById("search-button");

        searchButton.addEventListener("click", function () {
            const searchText = searchInput.value;
            if (searchText === "clanclas rosas") {
                window.location.href = "rosas.html";
            } else {
                
                window.location.href = "rosas.html";
            }
            
            
    window.location.href = "resultados.html?q=" + searchText;
        });

        // También puedes hacer que la búsqueda se active cuando el usuario presione Enter en el campo de entrada.
        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                const searchText = searchInput.value;
                // Realiza aquí la acción de búsqueda.
                if (searchText === "clanclas rosas") {
                    // Redirige al usuario a la página deseada
                    window.location.href = "rosas.html";
                }  else {
                
                    window.location.href = "rosas.html";
                }
                
            }
        });
    });
    
  // Función para mostrar la ventana emergente la primera vez
  window.addEventListener("load", function () {
    if (!localStorage.getItem("popupShown")) {
        document.getElementById("overlay").style.display = "flex";
        localStorage.setItem("popupShown", "true");
    }
});

function closePopup() {
    document.getElementById("overlay").style.display = "none";
}