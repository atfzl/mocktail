import { xhook } from 'xhook';

xhook.enable();

xhook.before((request: any, cb: any) => {
  if (
    request.url.includes(
      '/popularsearch?channel=web&child_site_id=1&site_id=1&version=2&cat_tree=1',
    )
  ) {
    const data = {
      app_display_count: 15,
      keywords: [
        { text: 'foobarasdjasd' },
        { text: 'Mobile Recharge' },
        { text: 'Electricity Payment' },
        { text: 'Movie Tickets' },
        { text: 'Bus Ticket' },
        { text: 'Travel Dhamaka Sale' },
        { text: 'Buy Digital Gold' },
        { text: "Spencer's" },
        { text: 'Bazaar' },
        { text: 'Samsung Galaxy S10' },
      ],
    };

    cb({ data, status: 200, text: JSON.stringify(data) });

    window.postMessage({ source: 'atfzl', data: 'modified api call' }, '*');
  } else {
    cb();
  }
});
