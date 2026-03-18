# 🔒 Security Guidelines

## ⚠️ IMPORTANT - Before Sharing or Deploying

### 🚨 Never Commit These Files:
- ❌ `.env` - Contains your OpenAI API key
- ❌ `.netlify/` - Local Netlify cache
- ❌ Any file with API keys or secrets

### ✅ Safe to Share:
- ✅ All source code in `src/`
- ✅ `netlify/functions/` - Server-side code (no secrets hardcoded)
- ✅ `.env.example` - Template without real keys
- ✅ Configuration files (`package.json`, `tsconfig.json`, etc.)

---

## 🔐 Security Features Implemented

### 1. **API Key Protection**
- OpenAI API key is stored in environment variables (`.env` locally, Netlify dashboard in production)
- **NEVER** exposed to the client-side code
- All LLM calls go through Netlify Functions (serverless backend)

### 2. **Rate Limiting**
- 5 questions per user per day
- Based on browser fingerprinting (FingerprintJS)
- Prevents API abuse and cost overruns

### 3. **Input Validation**
- Message length limits
- Sanitized inputs
- No code injection possible

### 4. **CORS Protection**
- Netlify Functions handle CORS properly
- Only accepts POST requests
- Validates request structure

---

## 🛡️ Best Practices

### Local Development:
1. Copy `.env.example` to `.env`
2. Add your real API key to `.env`
3. **NEVER** commit `.env` to git

### Production Deployment:
1. Set `OPENAI_API_KEY` in Netlify dashboard (Site Settings > Environment Variables)
2. Never hardcode secrets in code
3. Use Netlify's built-in secret management

### Sharing Code:
1. Always check `.gitignore` includes `.env`
2. Remove any hardcoded API keys before committing
3. Use `.env.example` to document required variables

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] `.env` is in `.gitignore`
- [ ] No API keys in source code
- [ ] Environment variables set in Netlify dashboard
- [ ] Rate limiting is active
- [ ] CORS is properly configured
- [ ] Error messages don't expose sensitive info

---

## 📞 Security Issues?

If you find a security vulnerability, please contact:
**matthieu.lc.forel@gmail.com**

Do NOT open a public issue for security concerns.

