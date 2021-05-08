<template>
  <div class="dashboard-operador">

    <h1>Técnico Dashboard</h1>

    <ul class="menu">
      <li>Tickets de ayuda</li>
      <ul>
        <li>Por Atender</li>
        <li>En proceso</li>
        <li>Terminadas</li>
        <li>Delegadas</li>
      </ul>
    </ul>

    <div class="">
      <h2>Tickets de atención</h2>
      <h3>Por Atender</h3>
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
                <td>15/05/2021 10:30</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>
                    <span><a href="">Atender</a></span> |
                    <span><a href="">Cancelar</a></span>
                </td>
            </tr>
            <tr>
                <td>Johnie Dolle</td>
                <td>Incidencia</td>
                <td>15/05/2021 10:30</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>
                    <span><a href="">Atender</a></span> |
                    <span><a href="">Cancelar</a></span>
                </td>
            </tr>
        </tbody>
      </table>
      <hr>
      <h3>En proceso</h3>
      <table>
        <thead>
          <tr>
            <td>Usuario</td>
            <td>Tipo</td>
            <td>Fecha recibida</td>
            <td>Fecha Atendida</td>
            <td>Descripción</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>Requerimiento</td>
                <td>15/05/2021 10:30</td>
                <td>15/05/2021 11:30</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>
                    <span><a href="">Terminar</a></span> |
                    <span><a href="">Delegar</a></span> |
                    <span><a href="">Cancelar</a></span>
                </td>
            </tr>
            <tr>
                <td>Johnie Dolle</td>
                <td>Incidencia</td>
                <td>15/05/2021 10:30</td>
                <td>15/05/2021 11:30</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>
                    <span><a href="">Terminar</a></span> |
                    <span><a href="">Delegar</a></span> |
                    <span><a href="">Cancelar</a></span>
                </td>
            </tr>
        </tbody>
      </table>
      <hr>
      <h3>Terminadas</h3>
      <table>
        <thead>
          <tr>
            <td>Usuario</td>
            <td>Tipo</td>
            <td>Fecha recibida</td>
            <td>Fecha Atendida</td>
            <td>Descripción</td>
            <td>Fecha terminada</td>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>Requerimiento</td>
                <td>15/05/2021 10:30</td>
                <td>15/05/2021 11:30</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>15/05/2021 13:30</td>
            </tr>
            <tr>
                <td>Johnie Dolle</td>
                <td>Incidencia</td>
                <td>15/05/2021 10:30</td>
                <td>15/05/2021 11:30</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>15/05/2021 13:30</td>
            </tr>
        </tbody>
      </table>
      <hr>
      <h3>Delegadas</h3>
      <table>
        <thead>
          <tr>
            <td>Usuario</td>
            <td>Tipo</td>
            <td>Fecha recibida</td>
            <td>Fecha Atendida</td>
            <td>Descripción</td>
            <td>Fecha Delegada</td>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>Requerimiento</td>
                <td>15/05/2021 10:30</td>
                <td>15/05/2021 11:30</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>15/05/2021 13:30</td>
            </tr>
            <tr>
                <td>Johnie Dolle</td>
                <td>Incidencia</td>
                <td>15/05/2021 10:30</td>
                <td>15/05/2021 11:30</td>
                <td>Lorem ipsum dolor sit amet.</td>
                <td>15/05/2021 13:30</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>