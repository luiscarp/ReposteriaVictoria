// calendario.js
document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendario');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        select: function(info) {
            // Aquí puedes agregar la lógica para permitir al usuario hacer reservas en la fecha seleccionada.
            const fechaSeleccionada = info.start;
            // Puedes guardar esta fecha en una base de datos o realizar otras acciones.
            console.log('Fecha seleccionada:', fechaSeleccionada);
        },
        events: [
            // Aquí puedes cargar eventos de disponibilidad desde tu base de datos.
            // Por ahora, usaremos eventos de ejemplo:
            { title: 'Disponible', start: '2023-09-15' },
            { title: 'Disponible', start: '2023-09-20' },
            { title: 'Ocupado', start: '2023-09-25' },
        ],
        dayCellContent: function(e) {
            // Puedes personalizar la apariencia de cada día aquí.
            const dayDate = e.date.toISOString().slice(0, 10);
            const reservasDisponibles = calendar.getEvents().filter(event => event.start.toISOString().slice(0, 10) === dayDate).length;
            if (reservasDisponibles > 0) {
                e.dayNumberText = 'Disponible';
            }
            // Cambia el color de fondo según tu paleta de colores.
            e.dayEl.style.backgroundColor = 'var(--tw-bg-pink-300)';
        },
    });
    calendar.render();
});
