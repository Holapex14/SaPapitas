document.addEventListener("DOMContentLoaded", () => {
    const listado = document.getElementById("cliente-listado");
    if (listado) {
      fetch("http://localhost/tu_ruta/backend/clientes.php")
        .then(res => res.json())
        .then(clientes => {
          clientes.forEach(cliente => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${cliente.nombre}</strong> - ${cliente.fecha_cita} ${cliente.hora_cita}<br>${cliente.motivo}`;
            listado.appendChild(div);
          });
        })
        .catch(err => {
          listado.innerHTML = "Error al cargar los clientes.";
          console.error(err);
        });
    }
  
    const form = document.getElementById("cliente-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        fetch("http://localhost/tu_ruta/backend/clientes.php", {
          method: "POST",
          body: formData
        })
        .then(res => res.text())
        .then(response => {
          alert("Cliente guardado.");
          window.location.href = "index.html";
        })
        .catch(err => console.error(err));
      });
    }
  });
  