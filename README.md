# 🧠 Neurodivergence Screening Tool

A premium, privacy-first, offline-capable web application for neurodivergence screening questionnaires. Designed to digitize cumbersome paper/PDF-based processes into a modern, interactive experience while maintaining 100% medical fidelity.

![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 Key Features

### 📋 Interactive Screening
- **5 Validated Tests**: Consolidated interface for ADHD, Autism, and broad neurodiversity screening.
- **Sectioned Navigation**: Long questionnaires are broken into logical sections for easier completion.
- **Visual Progress**: Real-time progress tracking for individual tests and overall screening status.
- **Smart Auto-Advance**: Automatically focuses on the next unanswered question for a seamless flow.

### 🔐 Privacy & Portability
- **100% Offline**: Runs entirely in the browser. No data ever leaves your device.
- **Local Storage**: Progress is persistent across browser sessions using `localStorage`.
- **Data Portability**: Full **Import/Export** functionality via JSON files for backups or cross-device transfer.
- **Patient Profiling**: Maintain a local profile (Name, DOB, Gender) to personalize reports.

### 📑 Clinical Readiness
- **Professional Reports**: Clean, printable layouts designed for sharing with healthcare providers.
- **Notes & Annotations**: Add specific context or examples to individual questions or entire sections—essential for clinical evaluations.
- **Deep Context**: Comprehensive background information for every test (history, scoring, validity) via integrated info modals.

---

## 📊 Included Screening Questionnaires

All questions are sourced directly from the original published research and clinical instruments.

| Test | Full Name | Focus | Items |
|------|-----------|-------|-------|
| **ADHD-RS-IV** | ADHD Rating Scale-IV | Adult ADHD Symptoms (DSM-IV) | 18 |
| **Wender Utah** | Wender Utah Rating Scale | Retrospective Childhood ADHD | 61 |
| **SASI** | Women's SASI | Female ADHD Phenotype / Masking | 159 |
| **AQ-50** | Autism Spectrum Quotient | Autistic Traits Assessment | 50 |
| **Aspie Quiz** | Aspie Quiz v5 | Broad Neurodiverse Traits | 119 |

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: [React 18](https://reactjs.org/) (Functional Components, Hooks)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React `useState` & `useMemo` with local storage synchronization.
- **Typography**: Inter & JetBrains Mono (via Google Fonts)

### Project Structure
```text
neuro_screening/
├── src/
│   ├── data/           # Screening questions and test metadata
│   ├── App.jsx         # Main application logic and components
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind directives and custom styles
├── public/             # Static assets
└── index.html          # HTML entry shell
```

---

## 🚀 Getting Started

### For Users
1. Download the latest release or clone the repository.
2. Open `index.html` in any modern web browser.
3. *Note: Running via a local server (see below) ensures better stability for browser storage.*

### For Developers
Ensure you have [Node.js](https://nodejs.org/) installed.

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## ⚠️ Important Disclaimer

**This is a screening tool, NOT a diagnostic instrument.**

- These questionnaires help explore traits and prepare for professional evaluation.
- High scores indicate a possible benefit from professional assessment but do not constitute a diagnosis.
- **Always consult with a qualified healthcare professional** (Psychologist, Psychiatrist, or GP) for a formal diagnosis.

---

## 🤝 Collaboration

Contributions are welcome! If you are interested in adding validated screening tests or improving the UI, please feel free to open a PR or Issue.

---
*Built to make neurodivergence screening accessible, manageable, and private.*
