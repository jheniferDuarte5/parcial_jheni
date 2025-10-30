document.addEventListener("DOMContentLoaded", () => {
  const formEmpleado = document.getElementById("formEmpleado");
  const tablaEmpleado = document.getElementById("tablaEmpleado").querySelector("tbody");
  const totalNomina = document.getElementById("totalNomina");
  const empleados = [];

  // Mostrar el div para agregar empleado
  window.crearEmpleado = function() {
    document.getElementById('divAgregarEmpleado').style.display = 'block';
  };

  // Evento de envío del formulario
  formEmpleado.addEventListener("submit", function(e) {
    e.preventDefault();

    // Crear empleado
    const empleado = new Empleado(
      document.getElementById("cc").value,
      document.getElementById("nombresyApellidos").value,
      document.getElementById("direccion").value,
      document.getElementById("email").value,
      document.getElementById("telefono").value,
      document.getElementById("sueldoBase").value,
      document.getElementById("tipoEmpleado").value,
      document.getElementById("tipoBonificacion").value
    );

    empleados.push(empleado);

    // Agregar fila a la tabla
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${empleados.length}.</td>
      <td>${empleado.cc}</td>
      <td>${empleado.nombresyApellidos}</td>
      <td>${empleado.direccion}</td>
      <td>${empleado.email}</td>
      <td>${empleado.telefono}</td>
      <td>${empleado.sueldoBase.toLocaleString()}</td>
      <td>${empleado.tipoEmpleado}</td>
      <td>${empleado.tipoBonificacion}</td>
      <td>${empleado.saldoTotal.toLocaleString()}</td>
    `;
    tablaEmpleado.appendChild(fila);

    // Calcular total de nómina
    const total = empleados.reduce((sum, emp) => sum + emp.saldoTotal, 0);
    totalNomina.textContent = `Total Nómina: $${total.toLocaleString()}`;

    formEmpleado.reset();
  });
});
