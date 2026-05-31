/**
 * Cloudflare Pages: redirige el dominio apex y HTTP al canonical https://www.
 * Requiere que lucas-moreno-dev.com y www.lucas-moreno-dev.com estén en
 * Pages → Custom domains del mismo proyecto.
 */
const CANONICAL_HOST = "www.lucas-moreno-dev.com";

export async function onRequest(context) {
  const requestUrl = new URL(context.request.url);
  const needsWww = requestUrl.hostname === "lucas-moreno-dev.com";
  const needsHttps = requestUrl.protocol === "http:";

  if (needsWww || needsHttps) {
    requestUrl.hostname = CANONICAL_HOST;
    requestUrl.protocol = "https:";
    return Response.redirect(requestUrl.toString(), 301);
  }

  return context.next();
}
