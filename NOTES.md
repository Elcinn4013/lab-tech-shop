# Live URL

https://lab-tech-shop-gold.vercel.app/

# Design Notes

## Route

I created a new route at:

```text
/premium
```

using:

```text
app/premium/page.js
```

This route contains a mock payment form where users can upgrade to Premium and remove advertisements.

---

## Browser Storage Choice

I used:

```text
localStorage
```

to persist the premium status.

Reason:

* localStorage survives page refreshes.
* localStorage survives browser restarts.
* The premium flag remains available even when the user closes and reopens the site.

When the payment is completed, the application stores:

```javascript
localStorage.setItem("premium", "true");
```

---

## Server Components vs Client Components

### Client Components

#### app/premium/page.js

This component is a Client Component because it uses:

* useState
* useEffect
* localStorage

#### app/components/AdBanner.js

This component is also a Client Component because it reads the premium flag from localStorage and conditionally renders advertisements.

### Server Components

All other pages and components that do not require browser APIs, state management, or interactivity can remain Server Components.

### Advantages

Server Components:

* Reduced client-side JavaScript.
* Faster initial page load.
* Better performance.

Client Components:

* Access to browser APIs.
* Interactive UI.
* State management with React hooks.

---

## First Render / Hydration Problem

The server cannot access localStorage because localStorage only exists in the browser.

To avoid hydration mismatch issues, AdBanner initially renders nothing until the component has mounted.

After mounting:

1. The component reads the premium value from localStorage.
2. The premium state is updated.
3. Ads are shown or hidden accordingly.

This ensures the server-rendered output and client-rendered output stay consistent and prevents hydration warnings.

---

## Future Improvements

If I had another hour, I would add:

* Form validation.
* A "Restore Ads" button that clears the premium flag.
* Multiple premium plans (Monthly / Lifetime).
* A Premium badge in the navigation bar.
* Active navigation link highlighting using usePathname().
