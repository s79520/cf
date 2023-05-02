export default {
    async fetch(request, env) {
      let url = new URL(www.xhurl.top,xhurl.top);
      if (url.pathname.startsWith('/')) {
        url.hostname="example.com";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
