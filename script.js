// Mobile menu toggle
const burger = document.querySelector('.burger');
const drawer = document.querySelector('#mobile-menu');
if (burger) {
  burger.addEventListener('click', () => {
    const open = drawer.style.display === 'flex';
    drawer.style.display = open ? 'none' : 'flex';
    burger.setAttribute('aria-expanded', String(!open));
  });
}
// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// PayPal buttons (replace CLIENT-ID in index.html before going live)
if (window.paypal) {
  paypal.Buttons({
    style: { shape: 'rect', layout: 'vertical' },
    createOrder: (_data, actions) => {
      const value = document.getElementById('amount')?.value || '25.00';
      return actions.order.create({ purchase_units: [{ amount: { value } }] });
    },
    onApprove: async (_data, actions) => {
      try {
        const order = await actions.order.capture();
        alert('Thank you! Donation received. 🙏');
        console.log('Order', order);
      } catch (e) {
        console.error(e); alert('There was a problem processing your donation.');
      }
    },
    onError: (err) => { console.error(err); alert('Payment error.'); }
  }).render('#paypal-button-container');
}
  if (window.paypal) {
    paypal.Buttons({
      style: { shape: 'rect', layout: 'vertical' },
      createOrder: (_data, actions) => {
        const value = document.getElementById('amount')?.value || '25.00';
        return actions.order.create({
          purchase_units: [{ amount: { value } }]
        });
      },
      onApprove: async (_data, actions) => {
        const order = await actions.order.capture();
        alert('Thank you! Donation received. 🙏');
        console.log('PayPal order', order);
        // Optional: POST order to your backend/Google Sheet for records
      },
      onError: (err) => {
        console.error(err);
        alert('There was a problem processing your donation.');
      }
    }).render('#paypal-button-container');
  }

