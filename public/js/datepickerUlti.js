/**
 *
 * Date picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
(function($) {
    var DatePickerUlti = function() {
        var ids = {},
            views = {
                years: 'datepickerUltiViewYears',
                months: 'datepickerUltiViewMonths',
                days: 'datepickerUltiViewDays'
            },
            tpl = {
                wrapper: '<div class="datepickerUlti datepickerUltinoselect"><div class="datepickerUltiBorderT" /><div class="datepickerUltiBorderB" /><div class="datepickerUltiBorderL" /><div class="datepickerUltiBorderR" /><div class="datepickerUltiBorderTL" /><div class="datepickerUltiBorderTR" /><div class="datepickerUltiBorderBL" /><div class="datepickerUltiBorderBR" /><div class="datepickerUltiContainer"><table cellspacing="0" cellpadding="0"><tbody><tr></tr></tbody></table></div></div>',
                head: [
                    '<td>',
                    '<table cellspacing="0" cellpadding="0">',
                    '<thead>',
                    '<tr>',
                    '<th class="datepickerUltiGoPrev"><a href="javascript:void(0)"><span><%=prev%></span></a></th>',
                    '<th colspan="6" class="datepickerUltiMonth"><a href="javascript:void(0)"><span></span></a></th>',
                    '<th class="datepickerUltiGoNext"><a href="javascript:void(0)"><span><%=next%></span></a></th>',
                    '</tr>',
                    '<tr class="datepickerUltiDoW">',
                    '<th><span><%=week%></span></th>',
                    '<th><span><%=day1%></span></th>',
                    '<th><span><%=day2%></span></th>',
                    '<th><span><%=day3%></span></th>',
                    '<th><span><%=day4%></span></th>',
                    '<th><span><%=day5%></span></th>',
                    '<th><span><%=day6%></span></th>',
                    '<th><span><%=day7%></span></th>',
                    '</tr>',
                    '</thead>',
                    '</table></td>'
                ],
                space: '<td class="datepickerUltiSpace"><div></div></td>',
                days: [
                    '<tbody class="datepickerUltiDays">',
                    '<tr>',
                    '<th class="datepickerUltiWeek"><a href="javascript:void(0)"><span><%=weeks[0].week%></span></a></th>',
                    '<td class="<%=weeks[0].days[0].classname%>"><a href="javascript:void(0)"><span><%=weeks[0].days[0].text%></span></a></td>',
                    '<td class="<%=weeks[0].days[1].classname%>"><a href="javascript:void(0)"><span><%=weeks[0].days[1].text%></span></a></td>',
                    '<td class="<%=weeks[0].days[2].classname%>"><a href="javascript:void(0)"><span><%=weeks[0].days[2].text%></span></a></td>',
                    '<td class="<%=weeks[0].days[3].classname%>"><a href="javascript:void(0)"><span><%=weeks[0].days[3].text%></span></a></td>',
                    '<td class="<%=weeks[0].days[4].classname%>"><a href="javascript:void(0)"><span><%=weeks[0].days[4].text%></span></a></td>',
                    '<td class="<%=weeks[0].days[5].classname%>"><a href="javascript:void(0)"><span><%=weeks[0].days[5].text%></span></a></td>',
                    '<td class="<%=weeks[0].days[6].classname%>"><a href="javascript:void(0)"><span><%=weeks[0].days[6].text%></span></a></td>',
                    '</tr>',
                    '<tr>',
                    '<th class="datepickerUltiWeek"><a href="javascript:void(0)"><span><%=weeks[1].week%></span></a></th>',
                    '<td class="<%=weeks[1].days[0].classname%>"><a href="javascript:void(0)"><span><%=weeks[1].days[0].text%></span></a></td>',
                    '<td class="<%=weeks[1].days[1].classname%>"><a href="javascript:void(0)"><span><%=weeks[1].days[1].text%></span></a></td>',
                    '<td class="<%=weeks[1].days[2].classname%>"><a href="javascript:void(0)"><span><%=weeks[1].days[2].text%></span></a></td>',
                    '<td class="<%=weeks[1].days[3].classname%>"><a href="javascript:void(0)"><span><%=weeks[1].days[3].text%></span></a></td>',
                    '<td class="<%=weeks[1].days[4].classname%>"><a href="javascript:void(0)"><span><%=weeks[1].days[4].text%></span></a></td>',
                    '<td class="<%=weeks[1].days[5].classname%>"><a href="javascript:void(0)"><span><%=weeks[1].days[5].text%></span></a></td>',
                    '<td class="<%=weeks[1].days[6].classname%>"><a href="javascript:void(0)"><span><%=weeks[1].days[6].text%></span></a></td>',
                    '</tr>',
                    '<tr>',
                    '<th class="datepickerUltiWeek"><a href="javascript:void(0)"><span><%=weeks[2].week%></span></a></th>',
                    '<td class="<%=weeks[2].days[0].classname%>"><a href="javascript:void(0)"><span><%=weeks[2].days[0].text%></span></a></td>',
                    '<td class="<%=weeks[2].days[1].classname%>"><a href="javascript:void(0)"><span><%=weeks[2].days[1].text%></span></a></td>',
                    '<td class="<%=weeks[2].days[2].classname%>"><a href="javascript:void(0)"><span><%=weeks[2].days[2].text%></span></a></td>',
                    '<td class="<%=weeks[2].days[3].classname%>"><a href="javascript:void(0)"><span><%=weeks[2].days[3].text%></span></a></td>',
                    '<td class="<%=weeks[2].days[4].classname%>"><a href="javascript:void(0)"><span><%=weeks[2].days[4].text%></span></a></td>',
                    '<td class="<%=weeks[2].days[5].classname%>"><a href="javascript:void(0)"><span><%=weeks[2].days[5].text%></span></a></td>',
                    '<td class="<%=weeks[2].days[6].classname%>"><a href="javascript:void(0)"><span><%=weeks[2].days[6].text%></span></a></td>',
                    '</tr>',
                    '<tr>',
                    '<th class="datepickerUltiWeek"><a href="javascript:void(0)"><span><%=weeks[3].week%></span></a></th>',
                    '<td class="<%=weeks[3].days[0].classname%>"><a href="javascript:void(0)"><span><%=weeks[3].days[0].text%></span></a></td>',
                    '<td class="<%=weeks[3].days[1].classname%>"><a href="javascript:void(0)"><span><%=weeks[3].days[1].text%></span></a></td>',
                    '<td class="<%=weeks[3].days[2].classname%>"><a href="javascript:void(0)"><span><%=weeks[3].days[2].text%></span></a></td>',
                    '<td class="<%=weeks[3].days[3].classname%>"><a href="javascript:void(0)"><span><%=weeks[3].days[3].text%></span></a></td>',
                    '<td class="<%=weeks[3].days[4].classname%>"><a href="javascript:void(0)"><span><%=weeks[3].days[4].text%></span></a></td>',
                    '<td class="<%=weeks[3].days[5].classname%>"><a href="javascript:void(0)"><span><%=weeks[3].days[5].text%></span></a></td>',
                    '<td class="<%=weeks[3].days[6].classname%>"><a href="javascript:void(0)"><span><%=weeks[3].days[6].text%></span></a></td>',
                    '</tr>',
                    '<tr>',
                    '<th class="datepickerUltiWeek"><a href="javascript:void(0)"><span><%=weeks[4].week%></span></a></th>',
                    '<td class="<%=weeks[4].days[0].classname%>"><a href="javascript:void(0)"><span><%=weeks[4].days[0].text%></span></a></td>',
                    '<td class="<%=weeks[4].days[1].classname%>"><a href="javascript:void(0)"><span><%=weeks[4].days[1].text%></span></a></td>',
                    '<td class="<%=weeks[4].days[2].classname%>"><a href="javascript:void(0)"><span><%=weeks[4].days[2].text%></span></a></td>',
                    '<td class="<%=weeks[4].days[3].classname%>"><a href="javascript:void(0)"><span><%=weeks[4].days[3].text%></span></a></td>',
                    '<td class="<%=weeks[4].days[4].classname%>"><a href="javascript:void(0)"><span><%=weeks[4].days[4].text%></span></a></td>',
                    '<td class="<%=weeks[4].days[5].classname%>"><a href="javascript:void(0)"><span><%=weeks[4].days[5].text%></span></a></td>',
                    '<td class="<%=weeks[4].days[6].classname%>"><a href="javascript:void(0)"><span><%=weeks[4].days[6].text%></span></a></td>',
                    '</tr>',
                    '<tr>',
                    '<th class="datepickerUltiWeek"><a href="javascript:void(0)"><span><%=weeks[5].week%></span></a></th>',
                    '<td class="<%=weeks[5].days[0].classname%>"><a href="javascript:void(0)"><span><%=weeks[5].days[0].text%></span></a></td>',
                    '<td class="<%=weeks[5].days[1].classname%>"><a href="javascript:void(0)"><span><%=weeks[5].days[1].text%></span></a></td>',
                    '<td class="<%=weeks[5].days[2].classname%>"><a href="javascript:void(0)"><span><%=weeks[5].days[2].text%></span></a></td>',
                    '<td class="<%=weeks[5].days[3].classname%>"><a href="javascript:void(0)"><span><%=weeks[5].days[3].text%></span></a></td>',
                    '<td class="<%=weeks[5].days[4].classname%>"><a href="javascript:void(0)"><span><%=weeks[5].days[4].text%></span></a></td>',
                    '<td class="<%=weeks[5].days[5].classname%>"><a href="javascript:void(0)"><span><%=weeks[5].days[5].text%></span></a></td>',
                    '<td class="<%=weeks[5].days[6].classname%>"><a href="javascript:void(0)"><span><%=weeks[5].days[6].text%></span></a></td>',
                    '</tr>',
                    '</tbody>'
                ],
                months: [
                    '<tbody class="<%=className%>">',
                    '<tr>',
                    '<td colspan="2"><a href="javascript:void(0)"><span><%=data[0]%></span></a></td>',
                    '<td colspan="2"><a href="javascript:void(0)"><span><%=data[1]%></span></a></td>',
                    '<td colspan="2"><a href="javascript:void(0)"><span><%=data[2]%></span></a></td>',
                    '<td colspan="2"><a href="javascript:void(0)"><span><%=data[3]%></span></a></td>',
                    '</tr>',
                    '<tr>',
                    '<td colspan="2"><a href="javascript:void(0)"><span><%=data[4]%></span></a></td>',
                    '<td colspan="2"><a href="javascript:void(0)"><span><%=data[5]%></span></a></td>',
                    '<td colspan="2"><a href="javascript:void(0)"><span><%=data[6]%></span></a></td>',
                    '<td colspan="2"><a href="javascript:void(0)"><span><%=data[7]%></span></a></td>',
                    '</tr>',
                    '<tr>',
                    '<td colspan="2"><a href="javascript:void(0)"><span><%=data[8]%></span></a></td>',
                    '<td colspan="2"><a href="javascript:void(0)"><span><%=data[9]%></span></a></td>',
                    '<td colspan="2"><a href="javascript:void(0)"><span><%=data[10]%></span></a></td>',
                    '<td colspan="2"><a href="javascript:void(0)"><span><%=data[11]%></span></a></td>',
                    '</tr>',
                    '</tbody>'
                ]
            },
            defaults = {
                flat: false,
                starts: 1,
                prev: '&#9664;',
                next: '&#9654;',
                lastSel: false,
                mode: 'single',
                view: 'days',
                calendars: 1,
                format: 'Y-m-d',
                position: 'bottom',
                eventName: 'click',
                onRender: function() { return {}; },
                onChange: function() { return true; },
                onShow: function() { return true; },
                onBeforeShow: function() { return true; },
                onHide: function() { return true; },
                locale: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    weekMin: 'wk'
                }
            },
            fill = function(el) {
                var options = $(el).data('datepicker');
                var cal = $(el);
                var currentCal = Math.floor(options.calendars / 2),
                    date, data, dow, month, cnt = 0,
                    week, days, indic, indic2, html, tblCal;
                cal.find('td>table tbody').remove();
                for (var i = 0; i < options.calendars; i++) {
                    date = new Date(options.current);
                    date.addMonths(-currentCal + i);
                    tblCal = cal.find('table').eq(i + 1);
                    switch (tblCal[0].className) {
                        case 'datepickerUltiViewDays':
                            dow = formatDate(date, 'B, Y');
                            break;
                        case 'datepickerUltiViewMonths':
                            dow = date.getFullYear();
                            break;
                        case 'datepickerUltiViewYears':
                            dow = (date.getFullYear() - 6) + ' - ' + (date.getFullYear() + 5);
                            break;
                    }
                    tblCal.find('thead tr:first th:eq(1) span').text(dow);
                    dow = date.getFullYear() - 6;
                    data = {
                        data: [],
                        className: 'datepickerUltiYears'
                    }
                    for (var j = 0; j < 12; j++) {
                        data.data.push(dow + j);
                    }
                    html = tmpl(tpl.months.join(''), data);
                    date.setDate(1);
                    data = { weeks: [], test: 10 };
                    month = date.getMonth();
                    var dow = (date.getDay() - options.starts) % 7;
                    date.addDays(-(dow + (dow < 0 ? 7 : 0)));
                    week = -1;
                    cnt = 0;
                    while (cnt < 42) {
                        indic = parseInt(cnt / 7, 10);
                        indic2 = cnt % 7;
                        if (!data.weeks[indic]) {
                            week = date.getWeekNumber();
                            data.weeks[indic] = {
                                week: week,
                                days: []
                            };
                        }
                        data.weeks[indic].days[indic2] = {
                            text: date.getDate(),
                            classname: []
                        };
                        if (month != date.getMonth()) {
                            data.weeks[indic].days[indic2].classname.push('datepickerUltiNotInMonth');
                        }
                        if (date.getDay() == 0) {
                            data.weeks[indic].days[indic2].classname.push('datepickerUltiSunday');
                        }
                        if (date.getDay() == 6) {
                            data.weeks[indic].days[indic2].classname.push('datepickerUltiSaturday');
                        }
                        var fromUser = options.onRender(date);
                        var val = date.valueOf();
                        if (fromUser.selected || options.date == val || $.inArray(val, options.date) > -1 || (options.mode == 'range' && val >= options.date[0] && val <= options.date[1])) {
                            data.weeks[indic].days[indic2].classname.push('datepickerUltiSelected');
                        }
                        if (fromUser.disabled) {
                            data.weeks[indic].days[indic2].classname.push('datepickerUltiDisabled');
                        }
                        //need to add your classNames here
                        if (fromUser.className) {
                            data.weeks[indic].days[indic2].classname.push(fromUser.className);
                        }
                        if (fromUser.className2) {
                            data.weeks[indic].days[indic2].classname.push(fromUser.className2);
                        }
                        if (fromUser.className3) {
                            data.weeks[indic].days[indic2].classname.push(fromUser.className3);
                        }
                        if (fromUser.className4) {
                            data.weeks[indic].days[indic2].classname.push(fromUser.className4);
                        }
                        //need to add your ClassNames here that reflect what is written on app.js
                        data.weeks[indic].days[indic2].classname = data.weeks[indic].days[indic2].classname.join(' ');
                        cnt++;
                        date.addDays(1);
                    }
                    html = tmpl(tpl.days.join(''), data) + html;
                    data = {
                        data: options.locale.monthsShort,
                        className: 'datepickerUltiMonths'
                    };
                    html = tmpl(tpl.months.join(''), data) + html;
                    tblCal.append(html);
                }
            },
            parseDate = function(date, format) {
                if (date.constructor == Date) {
                    return new Date(date);
                }
                var parts = date.split(/\W+/);
                var against = format.split(/\W+/),
                    d, m, y, h, min, now = new Date();
                for (var i = 0; i < parts.length; i++) {
                    switch (against[i]) {
                        case 'd':
                        case 'e':
                            d = parseInt(parts[i], 10);
                            break;
                        case 'm':
                            m = parseInt(parts[i], 10) - 1;
                            break;
                        case 'Y':
                        case 'y':
                            y = parseInt(parts[i], 10);
                            y += y > 100 ? 0 : (y < 29 ? 2000 : 1900);
                            break;
                        case 'H':
                        case 'I':
                        case 'k':
                        case 'l':
                            h = parseInt(parts[i], 10);
                            break;
                        case 'P':
                        case 'p':
                            if (/pm/i.test(parts[i]) && h < 12) {
                                h += 12;
                            } else if (/am/i.test(parts[i]) && h >= 12) {
                                h -= 12;
                            }
                            break;
                        case 'M':
                            min = parseInt(parts[i], 10);
                            break;
                    }
                }
                return new Date(
                    y === undefined ? now.getFullYear() : y,
                    m === undefined ? now.getMonth() : m,
                    d === undefined ? now.getDate() : d,
                    h === undefined ? now.getHours() : h,
                    min === undefined ? now.getMinutes() : min,
                    0
                );
            },
            formatDate = function(date, format) {
                var m = date.getMonth();
                var d = date.getDate();
                var y = date.getFullYear();
                var wn = date.getWeekNumber();
                var w = date.getDay();
                var s = {};
                var hr = date.getHours();
                var pm = (hr >= 12);
                var ir = (pm) ? (hr - 12) : hr;
                var dy = date.getDayOfYear();
                if (ir == 0) {
                    ir = 12;
                }
                var min = date.getMinutes();
                var sec = date.getSeconds();
                var parts = format.split(''),
                    part;
                for (var i = 0; i < parts.length; i++) {
                    part = parts[i];
                    switch (parts[i]) {
                        case 'a':
                            part = date.getDayName();
                            break;
                        case 'A':
                            part = date.getDayName(true);
                            break;
                        case 'b':
                            part = date.getMonthName();
                            break;
                        case 'B':
                            part = date.getMonthName(true);
                            break;
                        case 'C':
                            part = 1 + Math.floor(y / 100);
                            break;
                        case 'd':
                            part = (d < 10) ? ("0" + d) : d;
                            break;
                        case 'e':
                            part = d;
                            break;
                        case 'H':
                            part = (hr < 10) ? ("0" + hr) : hr;
                            break;
                        case 'I':
                            part = (ir < 10) ? ("0" + ir) : ir;
                            break;
                        case 'j':
                            part = (dy < 100) ? ((dy < 10) ? ("00" + dy) : ("0" + dy)) : dy;
                            break;
                        case 'k':
                            part = hr;
                            break;
                        case 'l':
                            part = ir;
                            break;
                        case 'm':
                            part = (m < 9) ? ("0" + (1 + m)) : (1 + m);
                            break;
                        case 'M':
                            part = (min < 10) ? ("0" + min) : min;
                            break;
                        case 'p':
                        case 'P':
                            part = pm ? "PM" : "AM";
                            break;
                        case 's':
                            part = Math.floor(date.getTime() / 1000);
                            break;
                        case 'S':
                            part = (sec < 10) ? ("0" + sec) : sec;
                            break;
                        case 'u':
                            part = w + 1;
                            break;
                        case 'w':
                            part = w;
                            break;
                        case 'y':
                            part = ('' + y).substr(2, 2);
                            break;
                        case 'Y':
                            part = y;
                            break;
                    }
                    parts[i] = part;
                }
                return parts.join('');
            },
            extendDate = function(options) {
                if (Date.prototype.tempDate) {
                    return;
                }
                Date.prototype.tempDate = null;
                Date.prototype.months = options.months;
                Date.prototype.monthsShort = options.monthsShort;
                Date.prototype.days = options.days;
                Date.prototype.daysShort = options.daysShort;
                Date.prototype.getMonthName = function(fullName) {
                    return this[fullName ? 'months' : 'monthsShort'][this.getMonth()];
                };
                Date.prototype.getDayName = function(fullName) {
                    return this[fullName ? 'days' : 'daysShort'][this.getDay()];
                };
                Date.prototype.addDays = function(n) {
                    var a = this.getTimezoneOffset() * 60000;
                    this.setDate(this.getDate() + n);
                    var b = this.getTimezoneOffset() * 60000;
                    if (a != b) {
                        this.setTime(this.getTime() + (b - a));
                    }
                    this.tempDate = this.getDate();
                };
                Date.prototype.addMonths = function(n) {
                    if (this.tempDate == null) {
                        this.tempDate = this.getDate();
                    }
                    this.setDate(1);
                    this.setMonth(this.getMonth() + n);
                    this.setDate(Math.min(this.tempDate, this.getMaxDays()));
                };
                Date.prototype.addYears = function(n) {
                    if (this.tempDate == null) {
                        this.tempDate = this.getDate();
                    }
                    this.setDate(1);
                    this.setFullYear(this.getFullYear() + n);
                    this.setDate(Math.min(this.tempDate, this.getMaxDays()));
                };
                Date.prototype.getMaxDays = function() {
                    var tmpDate = new Date(Date.parse(this)),
                        d = 28,
                        m;
                    m = tmpDate.getMonth();
                    d = 28;
                    while (tmpDate.getMonth() == m) {
                        d++;
                        tmpDate.setDate(d);
                    }
                    return d - 1;
                };
                Date.prototype.getFirstDay = function() {
                    var tmpDate = new Date(Date.parse(this));
                    tmpDate.setDate(1);
                    return tmpDate.getDay();
                };
                Date.prototype.getWeekNumber = function() {
                    var tempDate = new Date(this);
                    tempDate.setDate(tempDate.getDate() - (tempDate.getDay() + 6) % 7 + 3);
                    var dms = tempDate.valueOf();
                    tempDate.setMonth(0);
                    tempDate.setDate(4);
                    return Math.round((dms - tempDate.valueOf()) / (604800000)) + 1;
                };
                Date.prototype.getDayOfYear = function() {
                    var now = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0);
                    var then = new Date(this.getFullYear(), 0, 0, 0, 0, 0);
                    var time = now - then;
                    return Math.floor(time / 24 * 60 * 60 * 1000);
                };
            },
            layout = function(el) {
                var options = $(el).data('datepicker');
                var cal = $('#' + options.id);
                if (!options.extraHeight) {
                    var divs = $(el).find('div');
                    options.extraHeight = divs.get(0).offsetHeight + divs.get(1).offsetHeight;
                    options.extraWidth = divs.get(2).offsetWidth + divs.get(3).offsetWidth;
                }
                var tbl = cal.find('table:first').get(0);
                var width = tbl.offsetWidth;
                var height = tbl.offsetHeight;
                cal.css({
                    width: width + options.extraWidth + 'px',
                    height: height + options.extraHeight + 'px'
                }).find('div.datepickerUltiContainer').css({
                    width: width + 'px',
                    height: height + 'px'
                });
            },
            click = function(ev) {
                if ($(ev.target).is('span')) {
                    ev.target = ev.target.parentNode;
                }
                var el = $(ev.target);
                if (el.is('a')) {
                    ev.target.blur();
                    if (el.hasClass('datepickerUltiDisabled')) {
                        return false;
                    }
                    var options = $(this).data('datepicker');
                    var parentEl = el.parent();
                    var tblEl = parentEl.parent().parent().parent();
                    var tblIndex = $('table', this).index(tblEl.get(0)) - 1;
                    var tmp = new Date(options.current);
                    var changed = false;
                    var fillIt = false;
                    if (parentEl.is('th')) {
                        if (parentEl.hasClass('datepickerUltiWeek') && options.mode == 'range' && !parentEl.next().hasClass('datepickerUltiDisabled')) {
                            var val = parseInt(parentEl.next().text(), 10);
                            tmp.addMonths(tblIndex - Math.floor(options.calendars / 2));
                            if (parentEl.next().hasClass('datepickerUltiNotInMonth')) {
                                tmp.addMonths(val > 15 ? -1 : 1);
                            }
                            tmp.setDate(val);
                            options.date[0] = (tmp.setHours(0, 0, 0, 0)).valueOf();
                            tmp.setHours(23, 59, 59, 0);
                            tmp.addDays(6);
                            options.date[1] = tmp.valueOf();
                            fillIt = true;
                            changed = true;
                            options.lastSel = false;
                        } else if (parentEl.hasClass('datepickerUltiMonth')) {
                            tmp.addMonths(tblIndex - Math.floor(options.calendars / 2));
                            switch (tblEl.get(0).className) {
                                case 'datepickerUltiViewDays':
                                    tblEl.get(0).className = 'datepickerUltiViewMonths';
                                    el.find('span').text(tmp.getFullYear());
                                    break;
                                case 'datepickerUltiViewMonths':
                                    tblEl.get(0).className = 'datepickerUltiViewYears';
                                    el.find('span').text((tmp.getFullYear() - 6) + ' - ' + (tmp.getFullYear() + 5));
                                    break;
                                case 'datepickerUltiViewYears':
                                    tblEl.get(0).className = 'datepickerUltiViewDays';
                                    el.find('span').text(formatDate(tmp, 'B, Y'));
                                    break;
                            }
                        } else if (parentEl.parent().parent().is('thead')) {
                            switch (tblEl.get(0).className) {
                                case 'datepickerUltiViewDays':
                                    options.current.addMonths(parentEl.hasClass('datepickerUltiGoPrev') ? -1 : 1);
                                    break;
                                case 'datepickerUltiViewMonths':
                                    options.current.addYears(parentEl.hasClass('datepickerUltiGoPrev') ? -1 : 1);
                                    break;
                                case 'datepickerUltiViewYears':
                                    options.current.addYears(parentEl.hasClass('datepickerUltiGoPrev') ? -12 : 12);
                                    break;
                            }
                            fillIt = true;
                        }
                    } else if (parentEl.is('td') && !parentEl.hasClass('datepickerUltiDisabled')) {
                        switch (tblEl.get(0).className) {
                            case 'datepickerUltiViewMonths':
                                options.current.setMonth(tblEl.find('tbody.datepickerUltiMonths td').index(parentEl));
                                options.current.setFullYear(parseInt(tblEl.find('thead th.datepickerUltiMonth span').text(), 10));
                                options.current.addMonths(Math.floor(options.calendars / 2) - tblIndex);
                                tblEl.get(0).className = 'datepickerUltiViewDays';
                                break;
                            case 'datepickerUltiViewYears':
                                options.current.setFullYear(parseInt(el.text(), 10));
                                tblEl.get(0).className = 'datepickerUltiViewMonths';
                                break;
                            default:
                                var val = parseInt(el.text(), 10);
                                tmp.addMonths(tblIndex - Math.floor(options.calendars / 2));
                                if (parentEl.hasClass('datepickerUltiNotInMonth')) {
                                    tmp.addMonths(val > 15 ? -1 : 1);
                                }
                                tmp.setDate(val);
                                switch (options.mode) {
                                    case 'multiple':
                                        val = (tmp.setHours(0, 0, 0, 0)).valueOf();
                                        if ($.inArray(val, options.date) > -1) {
                                            $.each(options.date, function(nr, dat) {
                                                if (dat == val) {
                                                    options.date.splice(nr, 1);
                                                    return false;
                                                }
                                            });
                                        } else {
                                            options.date.push(val);
                                        }
                                        break;
                                    case 'range':
                                        if (!options.lastSel) {
                                            options.date[0] = (tmp.setHours(0, 0, 0, 0)).valueOf();
                                        }
                                        val = (tmp.setHours(23, 59, 59, 0)).valueOf();
                                        if (val < options.date[0]) {
                                            options.date[1] = options.date[0] + 86399000;
                                            options.date[0] = val - 86399000;
                                        } else {
                                            options.date[1] = val;
                                        }
                                        options.lastSel = !options.lastSel;
                                        break;
                                    default:
                                        options.date = tmp.valueOf();
                                        break;
                                }
                                break;
                        }
                        fillIt = true;
                        changed = true;
                    }
                    if (fillIt) {
                        fill(this);
                    }
                    if (changed) {
                        options.onChange.apply(this, prepareDate(options));
                    }
                }
                return false;
            },
            prepareDate = function(options) {
                var tmp;
                if (options.mode == 'single') {
                    tmp = new Date(options.date);
                    return [formatDate(tmp, options.format), tmp, options.el];
                } else {
                    tmp = [
                        [],
                        [], options.el
                    ];
                    $.each(options.date, function(nr, val) {
                        var date = new Date(val);
                        tmp[0].push(formatDate(date, options.format));
                        tmp[1].push(date);
                    });
                    return tmp;
                }
            },
            getViewport = function() {
                var m = document.compatMode == 'CSS1Compat';
                return {
                    l: window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
                    t: window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
                    w: window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
                    h: window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
                };
            },
            isChildOf = function(parentEl, el, container) {
                if (parentEl == el) {
                    return true;
                }
                if (parentEl.contains) {
                    return parentEl.contains(el);
                }
                if (parentEl.compareDocumentPosition) {
                    return !!(parentEl.compareDocumentPosition(el) & 16);
                }
                var prEl = el.parentNode;
                while (prEl && prEl != container) {
                    if (prEl == parentEl)
                        return true;
                    prEl = prEl.parentNode;
                }
                return false;
            },
            show = function(ev) {
                var cal = $('#' + $(this).data('datepickerId'));
                if (!cal.is(':visible')) {
                    var calEl = cal.get(0);
                    fill(calEl);
                    var options = cal.data('datepicker');
                    options.onBeforeShow.apply(this, [cal.get(0)]);
                    var pos = $(this).offset();
                    var viewPort = getViewport();
                    var top = pos.top;
                    var left = pos.left;
                    var oldDisplay = $.css(calEl, 'display');
                    cal.css({
                        visibility: 'hidden',
                        display: 'block'
                    });
                    layout(calEl);
                    switch (options.position) {
                        case 'top':
                            top -= calEl.offsetHeight;
                            break;
                        case 'left':
                            left -= calEl.offsetWidth;
                            break;
                        case 'right':
                            left += this.offsetWidth;
                            break;
                        case 'bottom':
                            top += this.offsetHeight;
                            break;
                    }
                    if (top + calEl.offsetHeight > viewPort.t + viewPort.h) {
                        top = pos.top - calEl.offsetHeight;
                    }
                    if (top < viewPort.t) {
                        top = pos.top + this.offsetHeight + calEl.offsetHeight;
                    }
                    if (left + calEl.offsetWidth > viewPort.l + viewPort.w) {
                        left = pos.left - calEl.offsetWidth;
                    }
                    if (left < viewPort.l) {
                        left = pos.left + this.offsetWidth
                    }
                    cal.css({
                        visibility: 'visible',
                        display: 'block',
                        top: top + 'px',
                        left: left + 'px'
                    });
                    if (options.onShow.apply(this, [cal.get(0)]) != false) {
                        cal.show();
                    }
                    $(document).on('mousedown', { cal: cal, trigger: this }, hide);
                }
                return false;
            },
            hide = function(ev) {
                if (ev.target != ev.data.trigger && !isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
                    if (ev.data.cal.data('datepicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
                        ev.data.cal.hide();
                    }
                    $(document).unbind('mousedown', hide);
                }
            };
        return {
            init: function(options) {
                options = $.extend({}, defaults, options || {});
                extendDate(options.locale);
                options.calendars = Math.max(1, parseInt(options.calendars, 10) || 1);
                options.mode = /single|multiple|range/.test(options.mode) ? options.mode : 'single';
                return this.each(function() {
                    if (!$(this).data('datepicker')) {
                        options.el = this;
                        if (options.date.constructor == String) {
                            options.date = parseDate(options.date, options.format);
                            options.date.setHours(0, 0, 0, 0);
                        }
                        if (options.mode != 'single') {
                            if (options.date.constructor != Array) {
                                options.date = [options.date.valueOf()];
                                if (options.mode == 'range') {
                                    options.date.push(((new Date(options.date[0])).setHours(23, 59, 59, 0)).valueOf());
                                }
                            } else {
                                for (var i = 0; i < options.date.length; i++) {
                                    options.date[i] = (parseDate(options.date[i], options.format).setHours(0, 0, 0, 0)).valueOf();
                                }
                                if (options.mode == 'range') {
                                    options.date[1] = ((new Date(options.date[1])).setHours(23, 59, 59, 0)).valueOf();
                                }
                            }
                        } else {
                            options.date = options.date.valueOf();
                        }
                        if (!options.current) {
                            options.current = new Date();
                        } else {
                            options.current = parseDate(options.current, options.format);
                        }
                        options.current.setDate(1);
                        options.current.setHours(0, 0, 0, 0);
                        //var id = 'datepicker_' + parseInt(Math.random() * 1000), cnt;
                        var id = 'datepicker_ulti', cnt;
                        options.id = id;
                        $(this).data('datepickerId', options.id);
                        var cal = $(tpl.wrapper).attr('id', id).on('click', click).data('datepicker', options);
                        if (options.className) {
                            cal.addClass(options.className);
                        }
                        var html = '';
                        for (var i = 0; i < options.calendars; i++) {
                            cnt = options.starts;
                            if (i > 0) {
                                html += tpl.space;
                            }
                            html += tmpl(tpl.head.join(''), {
                                week: options.locale.weekMin,
                                prev: options.prev,
                                next: options.next,
                                day1: options.locale.daysMin[(cnt++) % 7],
                                day2: options.locale.daysMin[(cnt++) % 7],
                                day3: options.locale.daysMin[(cnt++) % 7],
                                day4: options.locale.daysMin[(cnt++) % 7],
                                day5: options.locale.daysMin[(cnt++) % 7],
                                day6: options.locale.daysMin[(cnt++) % 7],
                                day7: options.locale.daysMin[(cnt++) % 7]
                            });
                        }
                        cal
                            .find('tr:first').append(html)
                            .find('table').addClass(views[options.view]);
                        fill(cal.get(0));
                        if (options.flat) {
                            cal.appendTo(this).show().css('position', 'relative');
                            layout(cal.get(0));
                        } else {
                            cal.appendTo(document.body);
                            $(this).on(options.eventName, show);
                        }
                    }
                });
            },
            showPicker: function() {
                return this.each(function() {
                    if ($(this).data('datepickerId')) {
                        show.apply(this);
                    }
                });
            },
            hidePicker: function() {
                return this.each(function() {
                    if ($(this).data('datepickerId')) {
                        $('#' + $(this).data('datepickerId')).hide();
                    }
                });
            },
            setDate: function(date, shiftTo) {
                return this.each(function() {
                    if ($(this).data('datepickerId')) {
                        var cal = $('#' + $(this).data('datepickerId'));
                        var options = cal.data('datepicker');
                        options.date = date;
                        if (options.date.constructor == String) {
                            options.date = parseDate(options.date, options.format);
                            options.date.setHours(0, 0, 0, 0);
                        }
                        if (options.mode != 'single') {
                            if (options.date.constructor != Array) {
                                options.date = [options.date.valueOf()];
                                if (options.mode == 'range') {
                                    options.date.push(((new Date(options.date[0])).setHours(23, 59, 59, 0)).valueOf());
                                }
                            } else {
                                for (var i = 0; i < options.date.length; i++) {
                                    options.date[i] = (parseDate(options.date[i], options.format).setHours(0, 0, 0, 0)).valueOf();
                                }
                                if (options.mode == 'range') {
                                    options.date[1] = ((new Date(options.date[1])).setHours(23, 59, 59, 0)).valueOf();
                                }
                            }
                        } else {
                            options.date = options.date.valueOf();
                        }
                        if (shiftTo) {
                            options.current = new Date(options.mode != 'single' ? options.date[0] : options.date);
                        }
                        fill(cal.get(0));
                    }
                });
            },
            getDate: function(formated) {
                if (this.length() > 0) {
                    return prepareDate($('#' + $(this).data('datepickerId')).data('datepicker'))[formated ? 0 : 1];
                }
            },
            clear: function() {
                return this.each(function() {
                    if ($(this).data('datepickerId')) {
                        var cal = $('#' + $(this).data('datepickerId'));
                        var options = cal.data('datepicker');
                        if (options.mode != 'single') {
                            options.date = [];
                            fill(cal.get(0));
                        }
                    }
                });
            },
            fixLayout: function() {
                return this.each(function() {
                    if ($(this).data('datepickerId')) {
                        var cal = $('#' + $(this).data('datepickerId'));
                        var options = cal.data('datepicker');
                        if (options.flat) {
                            layout(cal.get(0));
                        }
                    }
                });
            }
        };
    }();
    $.fn.extend({
        DatePickerUlti: DatePickerUlti.init,
        DatePickerUltiHide: DatePickerUlti.hidePicker,
        DatePickerUltiShow: DatePickerUlti.showPicker,
        DatePickerUltiSetDate: DatePickerUlti.setDate,
        DatePickerUltiGetDate: DatePickerUlti.getDate,
        DatePickerUltiClear: DatePickerUlti.clear,
        DatePickerUltiLayout: DatePickerUlti.fixLayout
    });
})(jQuery);

(function() {
    var cache = {};

    this.tmpl = function tmpl(str, data) {
        // Figure out if we're getting a template, or if we need to
        // load the template - and be sure to cache the result.
        var fn = !/\W/.test(str) ?
            cache[str] = cache[str] ||
            tmpl(document.getElementById(str).innerHTML) :

            // Generate a reusable function that will serve as a template
            // generator (and which will be cached).
            new Function("obj",
                "var p=[],print=function(){p.push.apply(p,arguments);};" +

                // Introduce the data as local variables using with(){}
                "with(obj){p.push('" +

                // Convert the template into pure JavaScript
                str
                .replace(/[\r\t\n]/g, " ")
                .split("<%").join("\t")
                .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                .replace(/\t=(.*?)%>/g, "',$1,'")
                .split("\t").join("');")
                .split("%>").join("p.push('")
                .split("\r").join("\\'") +
                "');}return p.join('');");

        // Provide some basic currying to the user
        return data ? fn(data) : fn;
    };
})();