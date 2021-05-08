<template>
  <div class="dashboard-operador">

    <h1>Admin Dashboard</h1>

    <ul class="menu">
      <li>Solicitudes</li>
      <ul>
        <li>Recibidas</li>
        <li>Asignadas</li>
        <li>Terminadas</li>
      </ul>
      <li>Operadores</li>
      <ul>
        <li>Activos</li>
        <li>Gestionar</li>
        <li>Valoración</li>
      </ul>
    </ul>

    <div class="">
      <h2>Solicitudes Recibidas</h2>
      <table>
        <thead>
          <tr>
            <td>Usuario</td>
            <td>Tipo</td>
            <td>Fecha recibida</td>
            <td>Descripción</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>Requerimiento</td>
                <td>15/05/2021</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>
                    <span><a href="">Asignar Técnico</a></span> |
                    <span><a href="">Cancelar</a></span>
                </td>
            </tr>
            <tr>
                <td>Johnie Dolle</td>
                <td>Incidencia</td>
                <td>08/05/2021</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>
                    <span><a href="">Asignar Técnico</a></span> |
                    <span><a href="">Cancelar</a></span>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>