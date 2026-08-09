/**
 * POST /api/contact — envío de correo vía Web3Forms (clave en WEB3FORMS_ACCESS_KEY).
 * Sustituye FormSubmit.co, que en producción devolvía 521 / fallos de CORS.
 */
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

export async function onRequestPost(context) {
  const accessKey = context.env?.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("[contact] Falta WEB3FORMS_ACCESS_KEY en Cloudflare Pages");
    return jsonResponse({ success: false, error: "SERVICE_NOT_CONFIGURED" }, 503);
  }

  try {
    const formData = await context.request.formData();

    if (formData.get("_gotcha")) {
      return jsonResponse({ success: true });
    }

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      return jsonResponse({ success: false, error: "MISSING_FIELDS" }, 400);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return jsonResponse({ success: false, error: "INVALID_EMAIL" }, 400);
    }

    const upstream = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `[Portfolio] ${subject}`,
        from_name: name,
        email,
        replyto: email,
        phone: phone || undefined,
        message: [
          `Nombre: ${name}`,
          `Email: ${email}`,
          phone ? `Teléfono: ${phone}` : null,
          "",
          "Mensaje:",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    const payload = await upstream.json().catch(() => ({}));

    if (!upstream.ok || payload.success !== true) {
      console.error("[contact] Web3Forms error:", upstream.status, payload);
      return jsonResponse({ success: false, error: "UPSTREAM_FAILED" }, 502);
    }

    return jsonResponse({ success: true });
  } catch (error) {
    console.error("[contact]", error);
    return jsonResponse({ success: false, error: "INTERNAL_ERROR" }, 500);
  }
}

export async function onRequest(context) {
  if (context.request.method === "POST") {
    return onRequestPost(context);
  }

  if (context.request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Accept",
      },
    });
  }

  return new Response(null, { status: 405 });
}
