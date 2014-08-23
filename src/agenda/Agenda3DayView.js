fcViews.agenda3Day = Agenda3DayView;

function Agenda3DayView(element, calendar) {
    var t = this;


    // exports
    t.render = render;


    // imports
    AgendaView.call(t, element, calendar, 'agenda3Day');
    var opt = t.opt;
    var renderAgenda = t.renderAgenda;
    var formatDates = calendar.formatDates;



    function render(date, delta) {
        if (delta) {
            addDays(date, delta * 3);
        }
        var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 3) % 3));
        var end = addDays(cloneDate(start), 3);
        var visStart = cloneDate(start);
        var visEnd = cloneDate(end);
        var weekends = opt('weekends');
        if (!weekends) {
            skipWeekend(visStart);
            skipWeekend(visEnd, -1, true);
        }
        t.title = formatDates(
            visStart,
            addDays(cloneDate(visEnd), -1),
            opt('titleFormat')
        );
        t.start = start;
        t.end = end;
        t.visStart = visStart;
        t.visEnd = visEnd;
        renderAgenda(weekends ? 3 : 1);
    }
}


