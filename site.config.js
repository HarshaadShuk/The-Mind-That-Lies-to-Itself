/*
 * SITE CONFIGURATION — the only file you need to edit to go live.
 * Every "Get this eBook" button, the price, the download button and
 * the support links read from here. See README.md for details.
 *
 * Everything in this file is PUBLIC (it is sent to every visitor's
 * browser). Never put API keys, webhook secrets or passwords here.
 */
window.SITE_CONFIG = {
  productTitle: "The Mind That Lies to Itself",
  productSubtitle:
    "Why intelligent people defend beliefs against the evidence, and how to catch your own mind in the act",

  // Selling price in rupees, as a number (e.g. 299). null = price hidden.
  priceINR: 99,

  // OPTIONAL genuine discount. Only shown when BOTH this and priceINR are
  // set and this value is higher than priceINR. Leave null otherwise.
  compareAtPriceINR: null,

  // Your payment gateway's hosted checkout / payment-link URL.
  // While it still contains "YOUR-", buttons will NOT navigate anywhere.
  paymentCheckoutUrl: "https://rzp.io/rzp/nrLGMto",

  // Where the thank-you page's download button points.
  // Default: the PDF shipped in /assets (publicly reachable once deployed).
  ebookDownloadUrl: "assets/The-Mind-That-Lies-to-Itself.pdf",
  ebookFileName: "The-Mind-That-Lies-to-Itself.pdf",

  // Your public site address, no trailing slash (used in docs/links).
  siteUrl: "https://YOUR-DOMAIN.com",

  // Contact for payment / download questions. null = support links hidden.
  supportEmail: null,

  // OPTIONAL policy pages. null = link hidden in the footer.
  privacyPolicyUrl: null,
  termsUrl: null,
  refundPolicyUrl: null,

  // Footer copyright holder (e.g. your name). null = "© 2026".
  copyrightHolder: null,

  // OPTIONAL analytics. Leave null. See README "Analytics".
  analytics: { gaMeasurementId: null }
};

/* Analytics hook. Every tracked moment calls trackEvent(name, data).
 * Event names: page_view_sales, cta_click, checkout_redirect,
 * checkout_not_configured, page_view_thank_you, download_click,
 * download_not_configured. A cta_click is NOT a sale. */
window.trackEvent = function (name, data) {
  try {
    if (typeof window.gtag === "function") window.gtag("event", name, data || {});
    else if (Array.isArray(window.dataLayer)) window.dataLayer.push(Object.assign({ event: name }, data || {}));
  } catch (e) {}
};

window.isConfigured = function (value) {
  return typeof value === "string" && value.trim() !== "" && value.indexOf("YOUR-") === -1;
};

window.dispatchEvent(new Event("siteconfig"));
