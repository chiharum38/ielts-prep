// api/delete-user.js — Server-side endpoint to permanently delete a Supabase auth user
// Only callable by the admin (verified via JWT token server-side)
const { createClient } = require('@supabase/supabase-js');

const ADMIN_EMAIL = 'chiharu.englishteach@gmail.com';

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing authorization token' });
  }
  const token = authHeader.replace('Bearer ', '');

  const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'Server not configured — add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to Vercel environment variables.' });
  }

  const adminClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false }
  });

  // Verify the caller's JWT and confirm they are the admin
  const { data: { user }, error: authError } = await adminClient.auth.getUser(token);
  if (authError || !user) return res.status(401).json({ error: 'Invalid or expired session. Please sign in again.' });
  if (user.email?.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
    return res.status(403).json({ error: 'Unauthorized: admin only.' });
  }

  const { userId } = req.body;
  if (!userId) return res.status(400).json({ error: 'userId is required' });
  if (userId === user.id) return res.status(400).json({ error: 'You cannot delete your own account.' });

  // Delete from auth.users — cascades to all data tables automatically
  const { error: deleteError } = await adminClient.auth.admin.deleteUser(userId);
  if (deleteError) return res.status(500).json({ error: deleteError.message });

  return res.status(200).json({ success: true });
};
