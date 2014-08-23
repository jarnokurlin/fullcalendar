fcViews.agenda2Day = Agenda2DayView;

function Agenda2DayView(element, calendar) {
    var t = this;


    // exports
    t.render = render;


    // imports
    AgendaView.call(t, element, calendar, 'agenda2Day');
    var opt = t.opt;
    var renderAgenda = t.renderAgenda;
    var formatDates = calendar.formatDates;



    function render(date, delta) {
        if (delta) {
            addDays(date, delta * 2);
        }
        var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 2) % 2));
        var end = addDays(cloneDate(start), 2);
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
        renderAgenda(weekends ? 2 : 0);
    }
}


