# Contributing to SEMEAR

Thank you for your interest in contributing! Every contribution that helps the next person prepare for and pass their certification is welcome.

<br />

<div align="center">

<img src="https://img.shields.io/badge/PRs-welcome-7CFF6B?style=flat-square&labelColor=0F2027" alt="PRs welcome" />
<img src="https://img.shields.io/badge/brain%20dumps-0%25-7CFF6B?style=flat-square&labelColor=0F2027" alt="Zero brain dumps" />
<img src="https://img.shields.io/badge/license-MIT-5EEAD4?style=flat-square&labelColor=0F2027" alt="MIT license" />

</div>

<br />

---

## 💡 Ways to Contribute

- 🐛 **Report or fix an error**: Open an issue or submit a pull request with the correction and a link to the official documentation.
- 💡 **Share tips**: Exam day strategies, high-yield resources that worked for you, or clear technical analogies.
- 📝 **Practice questions**: Suggest realistic, scenario-based practice questions (with detailed explanations) for any certification.
- 🎓 **Add a new certification**: Follow the step-by-step guide below to add another certification to the hub.

---

## 🎓 Adding a New Certification

1. **Scaffold the exam directory** from the blank template:
   ```bash
   npm run nova -- <slug> "<Exam Title>"
   # example: npm run nova -- dp-203 "DP-203 | Azure Data Engineer Associate"
   ```
   *No Node installed? Simply duplicate [`certificacoes/_modelo/`](certificacoes/_modelo/) and rename `{{TITULO}}`.*

2. **Include domains and weights** directly from the provider's official study guide, along with the source URL and lookup date.
3. **Do not guess or assume numbers** (duration, passing score, pricing). Point directly to the official provider page.
4. **Register the exam** in the certifications table inside both `README.md` and `README.pt-BR.md`.

---

## 🛡️ Non-Negotiable Rule

> [!CAUTION]
> **Zero Brain Dumps.** Real exam questions leaked from test centers are strictly prohibited. Leaked questions violate candidate non-disclosure agreements (NDAs), put credentials at risk of revocation, and undermine genuine learning. Any pull request containing dump material will be closed immediately.

---

## 🔍 Before Submitting a Pull Request

Run the local integrity checks (Node 18+, zero external dependencies required):

```bash
npm run check
```

This automated script validates:
- Relative links and anchor tags (`#section`) point to existing headings.
- House typography rules (avoiding em-dashes and en-dashes: use commas, colons, or periods instead).
- Every certification adheres to the standard schema (`README.md`, `plano.md`, `erros.md`, `recursos.md`, `resumos/`).
- Bilingual symmetry for core method and prompt guides.

---

## 🤝 Community Culture

Be supportive and constructive. Everyone here is on a learning journey to advance their career.
