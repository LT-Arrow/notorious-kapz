# Notorious Kapz

A responsive brand website for Notorious Kapz, built with HTML, CSS, and JavaScript for GitHub Pages. Hat illustrations and collection names are clearly labeled design concepts. No payments or personal data are collected.

## Preview

Run `python -m http.server 4173` in this directory, then open http://localhost:4173.

## Publish with GitHub Pages

Push this directory as a new repository. In Settings → Pages, choose Deploy from a branch, select `main` and `/ (root)`, then Save.

## Customize

Edit `index.html` for copy and product details, `style.css` for colors and layout, and `script.js` for collection filters and sharing. Replace concept illustrations with real product images when available.

## Stripe checkout

The order buttons link to the owner-provided live Stripe Payment Link. Verified public checkout: one Notorious Capz item, quantity 1, USD 85.00 total. No payment was made during verification. Product illustrations remain concepts and are not separate SKU choices.

In Stripe, enable Settings → Business → Customer emails → Successful payments for automatic emailed receipts. Also enable shipping-address collection in the Payment Link and configure a free shipping rate and supported shipping countries. Public checkout inspection did not show a shipping-address field; email receipt configuration cannot be verified from a public link. Verify both settings before fulfillment. Never put Stripe secret keys in this static website.
