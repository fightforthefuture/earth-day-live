/* eslint-disable */

export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  if (process.env.NODE_ENV !== 'production') return

  /*
  ** The global site tag (gtag.js) is a JavaScript tagging framework.
  */
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-162257314-1', { 'optimize_id': 'GTM-TS3VMMV'});
}
