# 🚀 Student Profile CI/CD Project

A modern **Next.js student profile application** integrated with **CI/CD using GitHub Actions** and **Docker multi-stage builds**.

---

## 👤 Student Information

* **Name:** Nabeel Nizam
* **Student ID:** *(2341720155)*
* **Tech Interests:** Software Development

---

## 🌐 Live Demo

🔗 [https://nabeel-portof.vercel.app/](https://nabeel-portof.vercel.app/)

---

## 🛠️ Tech Stack

* ⚡ Next.js (App Router)
* 🐳 Docker (Multi-stage build)
* 🔁 GitHub Actions (CI/CD)
* ☁️ Vercel (Deployment)
* 📩 Resend API (Contact Form)

---

## 📦 Features

* ✨ Personal student profile homepage
* 📄 Sections: Hero, About, Projects, Contact
* 📬 Contact form with email integration
* 🧪 Automated lint & build checks on Pull Request
* 🐳 Dockerized application for production

---

## 🔁 CI/CD Workflow

### ✅ Pull Request

* Run ESLint
* Build Next.js application
* Build Docker image (test only)

### 🚀 Merge to Main

* Build Docker image
* Push image to Docker Hub

---

## 🐳 Docker

### Build Image

```bash
docker build -t nabeelniz234/student-profile-ci:latest .
```

### Run Container

```bash
docker run -p 3000:3000 nabeelniz234/student-profile-ci:latest
```

### Docker Hub

🔗 [https://hub.docker.com/r/nabeelniz234/student-profile-ci](https://hub.docker.com/r/nabeelniz234/student-profile-ci)

---

## ⚙️ Environment Variables

Create `.env.local`:

```env
RESEND_API_KEY=your_api_key_here
```

---

## 📂 Project Structure

```
.
├── app/
├── public/
├── components/
├── .github/
│   └── workflows/
├── Dockerfile
├── package.json
└── next.config.ts
```

---

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

---

## 📌 Best Practices Applied

* ✔ Feature branch workflow
* ✔ Pull Request for all changes
* ✔ Clean commit messages
* ✔ CI/CD integration
* ✔ Docker multi-stage build

---

## 📬 Submission Links

* 🔗 GitHub Repository: [https://github.com/NabeelNizam/PortofolioNabeel](https://github.com/NabeelNizam/PortofolioNabeel)
* 🐳 Docker Hub: [https://hub.docker.com/r/nabeelniz234/student-profile-ci](https://hub.docker.com/r/nabeelniz234/student-profile-ci)

---

## ⭐ Notes

This project is built as part of a DevOps/Cloud assignment focusing on:

* CI/CD automation
* Containerization
* Modern web development practices

---

## 🙌 Author

**Nabeel Nizam**
GitHub: [https://github.com/NabeelNizam](https://github.com/NabeelNizam)

---

> Built with passion 🚀
