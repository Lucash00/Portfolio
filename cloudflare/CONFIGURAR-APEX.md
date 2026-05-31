# Redirigir lucas-moreno-dev.com → www.lucas-moreno-dev.com

## Diagnóstico

- `www.lucas-moreno-dev.com` resuelve a Cloudflare (188.114.x.x) y funciona.
- `lucas-moreno-dev.com` (apex) **no tiene registro DNS** (A/CNAME). El navegador no puede llegar al sitio; el middleware del repo no se ejecuta.

## Paso 1 — DNS (obligatorio)

1. [dash.cloudflare.com](https://dash.cloudflare.com) → zona **lucas-moreno-dev.com** → **DNS** → **Records**.
2. Comprueba que exista **www** (CNAME → `TU-PROYECTO.pages.dev`, proxy naranja activado).
3. **Añade el apex** si no existe:
   - **Type:** `CNAME`
   - **Name:** `@`
   - **Target:** el mismo `*.pages.dev` que usa **www** (p. ej. `portfolio.pages.dev`)
   - **Proxy status:** Proxied (nube naranja)
4. Guarda. Cloudflare aplana el CNAME en `@` automáticamente.

## Paso 2 — Custom domain en Pages

1. **Workers & Pages** → tu proyecto → **Custom domains**.
2. Debe estar **www.lucas-moreno-dev.com**.
3. **Add domain** → `lucas-moreno-dev.com` (sin www).
4. Espera a que el certificado SSL quede **Active** en ambos.

## Paso 3 — Redirección (elige una)

### A) Código (ya en el repo)

Tras deploy, `functions/_middleware.js` envía 301 de apex/http → `https://www...`

Vuelve a desplegar (push a Git o `npx wrangler pages deploy dist` desde la raíz del proyecto).

### B) Regla en Cloudflare (recomendado como respaldo)

**Rules** → **Redirect Rules** → **Create rule**

| Campo | Valor |
|--------|--------|
| Rule name | Apex to www |
| When | Custom filter: `(http.host eq "lucas-moreno-dev.com")` |
| Then | Static redirect → `https://www.lucas-moreno-dev.com` + **Preserve path and query string** |
| Status | 301 |

## Paso 4 — SSL

**SSL/TLS** → Overview → **Full (strict)**  
**Edge Certificates** → **Always Use HTTPS** = On

## Comprobar (espera 2–5 min tras DNS)

```bash
curl -I http://lucas-moreno-dev.com/
curl -I https://lucas-moreno-dev.com/
```

Debe aparecer `HTTP/1.1 301` y `location: https://www.lucas-moreno-dev.com/...`
