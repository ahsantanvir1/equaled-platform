# 🔐 How to Create a GitHub Personal Access Token (PAT)

## Step-by-Step Guide

### Step 1: Go to GitHub Token Settings

1. **Go to:** https://github.com/settings/tokens
2. Or navigate: GitHub → Your Profile (top-right) → Settings → Developer settings → Personal access tokens → Tokens (classic)

### Step 2: Generate New Token

1. Click **"Generate new token"** → **"Generate new token (classic)"**
2. **Note:** Give it a descriptive name like: `EqualEd Project - Cursor AI`
3. **Expiration:** Choose:
   - **90 days** (recommended for projects)
   - **No expiration** (if you want it permanent)

### Step 3: Select Permissions (Scopes)

**Select these permissions:**

#### ✅ Required Permissions:

- ✅ **repo** (Full control of private repositories)
  - ✅ repo:status
  - ✅ repo_deployment
  - ✅ public_repo
  - ✅ repo:invite
  - ✅ security_events

- ✅ **workflow** (Update GitHub Action workflows)

- ✅ **write:packages** (Upload packages to GitHub Package Registry)

- ✅ **delete:packages** (Delete packages from GitHub Package Registry)

**Minimum Required:**
- ✅ **repo** (all sub-options)

### Step 4: Generate Token

1. Scroll down and click **"Generate token"**
2. **⚠️ IMPORTANT:** Copy the token immediately - you won't see it again!
3. It will look like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 5: Save Token Securely

- Save it in a password manager
- Or store it in a secure note
- **Never commit it to git!**

---

## 🚀 After Creating Token

Once you have the token, I can:

1. ✅ Push code to GitHub automatically
2. ✅ Create commits at each step
3. ✅ Create repositories
4. ✅ Manage branches
5. ✅ Set up CI/CD workflows

**Just share the token with me and I'll handle everything!**

---

## 🔒 Security Best Practices

1. **Never share tokens publicly**
2. **Use different tokens for different projects**
3. **Revoke tokens when done**
4. **Set expiration dates**
5. **Use fine-grained tokens** (newer option) for more control

---

## 📝 Quick Reference

**Token Settings URL:** https://github.com/settings/tokens  
**Required Scope:** `repo` (full access)  
**Token Format:** `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

## ✅ What I'll Do With Your Token

Once you provide the token, I will:

1. ✅ Create the GitHub repository
2. ✅ Push all your code
3. ✅ Set up the repository as public
4. ✅ Configure branch protection (optional)
5. ✅ Set up automatic deployments
6. ✅ Commit and push future changes automatically

**Ready when you are!** 🚀

