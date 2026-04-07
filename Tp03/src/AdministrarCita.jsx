function AdministrarCita({Mascota,Dueno,Fecha,Hora,Sintomas},id) {
    return (

        <div class="cita">

            <p />Mascota: <span />{cita.Mascota}
            <p />Dueño: <span />{cita.Dueno}
            <p />Fecha: <span />{cita.Fecha}
            <p />Hora: <span />{cita.Hora}
            <p />Sintomas: <span />{cita.Sintomas}
            <button className="button eliminar u-full-width">
                Eliminar
            </button>

        </div>

    )

}


export default AdministrarCita