import { xhook } from 'xhook';

xhook.enable();

xhook.after((request, response, cb) => {
  if (
    request.url.includes(
      '/popularsearch?channel=web&child_site_id=1&site_id=1&version=2&cat_tree=1',
    )
  ) {
    const data = JSON.stringify({
      app_display_count: 15,
      keywords: [
        { text: 'Atif Neha' },
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
    });
    response.data = data;
    response.text = data;

    window.postMessage({ source: 'atfzl', data: 'modified api call' }, '*');
  }

  cb(response);
});
