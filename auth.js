/* ============================================================
   Auth - Supabase Login & Register
   ============================================================ */

function showError(msg) {
    const el = document.getElementById('authError');
    el.textContent = msg;
    el.classList.add('show');
    document.getElementById('authSuccess').classList.remove('show');
}

function showSuccess(msg) {
    const el = document.getElementById('authSuccess');
    el.textContent = msg;
    el.classList.add('show');
    document.getElementById('authError').classList.remove('show');
}

function hideMessages() {
    document.getElementById('authError').classList.remove('show');
    document.getElementById('authSuccess').classList.remove('show');
}

function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    hideMessages();

    if (tab === 'login') {
        document.querySelectorAll('.auth-tab')[0].classList.add('active');
        document.getElementById('loginForm').classList.add('active');
    } else {
        document.querySelectorAll('.auth-tab')[1].classList.add('active');
        document.getElementById('registerForm').classList.add('active');
    }
}

async function handleLogin(e) {
    e.preventDefault();
    hideMessages();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const btn = document.getElementById('loginBtn');

    if (!supabaseClient) {
        showError('Supabase not configured. Please add your credentials in supabase-config.js');
        return;
    }

    btn.disabled = true;
    btn.textContent = 'Logging in...';

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    btn.disabled = false;
    btn.textContent = 'Login';

    if (error) {
        showError(error.message);
        return;
    }

    showSuccess('Login successful! Redirecting...');
    localStorage.setItem('user', JSON.stringify(data.user));
    const name = data.user.user_metadata?.name || data.user.email.split('@')[0];
    localStorage.setItem('userName', name);
    setTimeout(() => { window.location.href = 'index.html'; }, 1000);
}

async function handleRegister(e) {
    e.preventDefault();
    hideMessages();

    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirm = document.getElementById('registerConfirm').value;
    const btn = document.getElementById('registerBtn');

    if (password !== confirm) {
        showError('Passwords do not match!');
        return;
    }

    if (password.length < 6) {
        showError('Password must be at least 6 characters!');
        return;
    }

    if (!supabaseClient) {
        showError('Supabase not configured. Please add your credentials in supabase-config.js');
        return;
    }

    btn.disabled = true;
    btn.textContent = 'Creating account...';

    const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: { data: { name } }
    });

    btn.disabled = false;
    btn.textContent = 'Create Account';

    if (error) {
        showError(error.message);
        return;
    }

    if (data.user && data.user.identities && data.user.identities.length === 0) {
        showError('An account with this email already exists!');
        return;
    }

    showSuccess('Account created! Check your email to confirm, then login.');
    setTimeout(() => switchTab('login'), 2000);
}

async function handleGoogleLogin() {
    if (!supabaseClient) {
        showError('Supabase not configured. Please add your credentials in supabase-config.js');
        return;
    }

    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + '/index.html' }
    });

    if (error) showError(error.message);
}

// Check if already logged in
(async () => {
    if (!supabaseClient) return;
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session) {
        localStorage.setItem('user', JSON.stringify(session.user));
        window.location.href = 'index.html';
    }
})();
