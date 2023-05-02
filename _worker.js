export default {
    async fetch(request, env) {
      let url = new URL(www.mtkej.cn,mtkej.cn);
      if (url.pathname.startsWith('/')) {
        url.hostname="www.mtkej.cn,mtkej.cn";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
