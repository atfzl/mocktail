xhook.enable();

// xhook.before((request, cb) => {
//   window.request = request;

//   console.log(request, request instanceof Request);

//   if (request instanceof Request) {
//     cb(new Response({ foo: 'bar' }));
//   } else {
//     cb({
//       status: 200,
//       data: { foo: 'bar' },
//     });
//   }
// });

xhook.after((request, response, cb) => {
  cb(new Response('asds', { status: 401 }));
});
fetch(
  'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-600w-747646759.jpg',
).then(console.log);

// $.get('https://jsonplaceholder.typicode.com/todos/2');

// {
//   // 1. Create a new XMLHttpRequest object
//   let xhr = new XMLHttpRequest();

//   // 2. Configure it: GET-request for the URL /article/.../load
//   xhr.open(
//     'GET',
//     'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-600w-747646759.jpg',
//   );
//   // 3. Send the request over the network
//   xhr.send();

//   // 4. This will be called after the response is received
//   xhr.onload = function() {
//     // show the result
//     console.log('Done', xhr.response, xhr); // responseText is the server
//   };
// }
