# Formulario de contacto en producción

El formulario ya no usa FormSubmit.co (servicio inestable / error 521). Envía los mensajes con **Web3Forms** desde la función `functions/api/contact.js`.

## Configuración única (5 minutos)

### 1. Crear cuenta en Web3Forms

1. Entra en [https://web3forms.com](https://web3forms.com)
2. Crea un formulario con el correo **lucas.moreno.dev@gmail.com**
3. Copia la **Access Key**

### 2. Añadir la clave en Cloudflare Pages

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → proyecto **portfolio**
2. **Settings** → **Environment variables**
3. Añade (Production y Preview):

   | Variable | Valor |
   |----------|--------|
   | `WEB3FORMS_ACCESS_KEY` | tu access key de Web3Forms |

4. **Save** y vuelve a desplegar (nuevo deploy desde Git o `wrangler pages deploy dist`)

### 3. Probar en producción

1. Abre `https://www.lucas-moreno-dev.com/#contacto`
2. Envía un mensaje de prueba
3. Revisa la bandeja de **lucas.moreno.dev@gmail.com** (y spam)

## Desarrollo local

`astro dev` no ejecuta las Pages Functions. Para probar el envío en local:

```bash
npm run build
npx wrangler pages dev dist
```

Crea un archivo `.dev.vars` en la raíz del proyecto (no lo subas a Git):

```
WEB3FORMS_ACCESS_KEY=tu_access_key_aqui
```

## Opcional: restringir dominio en Web3Forms

En el panel de Web3Forms puedes limitar envíos solo desde `www.lucas-moreno-dev.com`.
