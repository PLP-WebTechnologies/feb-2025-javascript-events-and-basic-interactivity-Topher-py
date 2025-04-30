 // Click Button
 const btn = document.getElementById('toggleBtn');
 btn.addEventListener('click', () => {
   btn.classList.toggle('clicked');
   btn.innerText = btn.classList.contains('clicked') ? 'Clicked!' : 'Click Me';
 });

 // Keypress
 document.addEventListener('keypress', (e) => {
   console.log(`Key pressed: ${e.key}`);
 });

 // Double-click
 document.getElementById('secret').addEventListener('dblclick', () => {
   alert(' YOU ONLY FAIL WHEN YOU STOP TRYING🎉');
 });

 // Tabs
 document.querySelectorAll('.tab').forEach(tab => {
   tab.addEventListener('click', () => {
     document.querySelectorAll('.content').forEach(c => c.style.display = 'none');
     document.getElementById(tab.dataset.target).style.display = 'block';
     document.getElementById(tab.dataset.target).classList.add('fade-in');
   });
 });

 // Form Validation
 const form = document.getElementById('myForm');
 form.addEventListener('submit', (e) => {
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;
   const feedback = document.getElementById('feedback');
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!emailRegex.test(email)) {
     feedback.textContent = 'Invalid email format';
     e.preventDefault();
   } else if (password.length < 8) {
     feedback.textContent = 'Password must be at least 8 characters';
     e.preventDefault();
   } else {
     feedback.textContent = '';
   }
 });

 // Real-time password feedback
 document.getElementById('password').addEventListener('input', (e) => {
   const feedback = document.getElementById('feedback');
   feedback.textContent = e.target.value.length < 8 ? 'Password too short' : 'Looks good!';
 });