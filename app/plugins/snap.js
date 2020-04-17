export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  if (process.env.NODE_ENV !== 'production') return
  /*
  ** Include SnapChat Script
  */
  (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
  {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
    a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
    r.src=n;var u=t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r,u);})(window,document,
    'https://sc-static.net/scevent.min.js');

  snaptr('init', '6c9a0c27-bc3f-4e9e-8934-27ab4fb603d2', {
    'user_email': '__INSERT_USER_EMAIL__'
  });

  snaptr('track', 'PAGE_VIEW');
}
