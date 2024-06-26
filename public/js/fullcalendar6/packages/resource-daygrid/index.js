import { createPlugin } from '@fullcalendar/core/index.js';
import premiumCommonPlugin from '@fullcalendar/premium-common/index.js';
import resourcePlugin from '@fullcalendar/resource/index.js';
import dayGridPlugin from '@fullcalendar/daygrid/index.js';
import { ResourceDayTableView } from './internal.js';
import '@fullcalendar/core/internal.js';
import '@fullcalendar/core/preact.js';
import '@fullcalendar/daygrid/internal.js';
import '@fullcalendar/resource/internal.js';

var index = createPlugin({
    name: '@fullcalendar/resource-daygrid',
    premiumReleaseDate: '2022-11-22',
    deps: [
        premiumCommonPlugin,
        resourcePlugin,
        dayGridPlugin,
    ],
    initialView: 'resourceDayGridDay',
    views: {
        resourceDayGrid: {
            type: 'dayGrid',
            component: ResourceDayTableView,
            needsResourceData: true,
        },
        resourceDayGridDay: {
            type: 'resourceDayGrid',
            duration: { days: 1 },
        },
        resourceDayGridWeek: {
            type: 'resourceDayGrid',
            duration: { weeks: 1 },
        },
        resourceDayGridMonth: {
            type: 'resourceDayGrid',
            duration: { months: 1 },
            // TODO: wish we didn't have to C&P from dayGrid's file
            monthMode: true,
            fixedWeekCount: true,
        },
    },
});

export { index as default };
