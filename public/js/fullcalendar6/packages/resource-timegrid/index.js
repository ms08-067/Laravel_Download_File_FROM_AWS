import { createPlugin } from '@fullcalendar/core/index.js';
import premiumCommonPlugin from '@fullcalendar/premium-common/index.js';
import resourcePlugin from '@fullcalendar/resource/index.js';
import timeGridPlugin from '@fullcalendar/timegrid/index.js';
import { ResourceDayTimeColsView } from './internal.js';
import '@fullcalendar/resource-daygrid/index.js';
import '@fullcalendar/core/internal.js';
import '@fullcalendar/core/preact.js';
import '@fullcalendar/timegrid/internal.js';
import '@fullcalendar/resource/internal.js';
import '@fullcalendar/resource-daygrid/internal.js';

var index = createPlugin({
    name: '@fullcalendar/resource-timegrid',
    premiumReleaseDate: '2022-11-22',
    deps: [
        premiumCommonPlugin,
        resourcePlugin,
        timeGridPlugin,
    ],
    initialView: 'resourceTimeGridDay',
    views: {
        resourceTimeGrid: {
            type: 'timeGrid',
            component: ResourceDayTimeColsView,
            needsResourceData: true,
        },
        resourceTimeGridDay: {
            type: 'resourceTimeGrid',
            duration: { days: 1 },
        },
        resourceTimeGridWeek: {
            type: 'resourceTimeGrid',
            duration: { weeks: 1 },
        },
    },
});

export { index as default };
