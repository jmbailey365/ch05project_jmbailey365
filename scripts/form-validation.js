// Josh Bailey — 10/04/2025

/* <p><strong>checkMissing()</strong>:
Counts how many inputs with class "required" are empty.
Updates the #missing-count message accordingly and returns the count.</p> */
function checkMissing() {
  const required = document.querySelectorAll('.required');
  let missing = 0;

  required.forEach(el => {
    const val = (el.value ?? '').toString().trim();
    if (val.length === 0) missing++;
  });

  const msg = document.getElementById('missing-count');
  if (!msg) return missing;

  if (missing > 0) {
    msg.textContent = `${missing} required field${missing === 1 ? '' : 's'} missing.`;
  } else {
    msg.textContent = 'All required fields are complete.';
  }

  return missing;
}

/* <p><strong>validateEmail()</strong>:
Checks whether the email field has at least 8 characters.
Adds/removes the "invalid" class to toggle a red border.
Returns true if valid, false otherwise.</p> */
function validateEmail() {
  const email = document.getElementById('email');
  if (!email) return false;

  const ok = email.value.trim().length >= 8;
  email.classList.toggle('invalid', !ok);
  return ok;
}

/* <p><strong>handleSubmit()</strong>:
Runs both checkMissing() and validateEmail() when the submit button is clicked.
Blocks “submission” with an alert if anything is incomplete/invalid.</p> */
function handleSubmit() {
  const missing = checkMissing();
  const emailOK = validateEmail();

  if (missing > 0 || !emailOK) {
    alert('Please complete all required fields and ensure the email is at least 8 characters.');
    return; // Block submission
  }

  // Demo success path (since we’re not actually submitting anywhere)
  alert('Form is valid and ready to submit!');
}

// --- Wire up events once DOM is ready ---
document.addEventListener('DOMContentLoaded', () => {
  // Click handler for the input[type="button"]
  const btn = document.getElementById('submit-btn');
  if (btn) btn.addEventListener('click', handleSubmit);

  // Optional: live feedback while typing
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('input', checkMissing);
  }
});
