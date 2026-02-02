# 🧠 Neurodivergence Screening Tool

A free, offline, privacy-first web application for neurodivergence screening questionnaires. This tool was created to digitize cumbersome PDF-based screening processes, making them easier to complete and manage.

## Why This Tool Was Created

This tool was developed to solve a practical problem: filling out neurodivergence screening questionnaires as static PDFs is difficult and cumbersome. 

I created this web app to:
- **Convert PDFs to Interactive Forms**: Transform traditional paper-based/PDF questionnaires into a modern, user-friendly web interface.
- **Maintain Fidelity**: The questions and tests are implemented exactly as found in the original research sources, with no changes to the text or structure.
- **Enable Easier Completion**: Features like auto-saving and progress tracking make it easier to complete lengthy questionnaires at your own pace.
- **Provide Local Privacy**: All data is stored locally in your browser. This tool does not send your sensitive health information to any server.

## Included Screening Questionnaires

This tool consolidates 5 established screening tools into a single interface. All questions are sourced directly from the original published tests.

| Test | Questions | Description |
|------|-----------|-------------|
| **ADHD-RS-IV** | 87 | ADHD Rating Scale-IV with Adult Prompts (DuPaul et al., 1998) |
| **Wender Utah** | 61 | WURS-25 Childhood ADHD Retrospective Scale (Ward, Wender, et al., 1993) |
| **SASI** | 159 | Women's ADHD Self-Assessment Symptom Inventory (Nadeau & Quinn) |
| **Autism Quotient** | 50 | AQ-50 (Simon Baron-Cohen et al., 2001) |
| **Aspie Quiz v5** | 119 | Comprehensive neurodiverse/neurotypical trait assessment (Leif Ekblad) |

## Features

- **Interactive UI**: Clean, organized interface for navigating hundreds of questions.
- **Auto-Save**: Progress is automatically saved to your browser's local storage.
- **Notes & Annotations**: Add notes for specific questions or entire sections—useful for providing context to healthcare providers.
- **Printable Reports**: Generate professional-looking PDF reports of your completed tests to share with clinicians.
- **Test Information**: Detailed background on each test, including its history, scoring methods, and validity (accessible via the ℹ️ icon).
- **100% Offline**: Runs entirely in the browser. No internet connection required after the initial load.

## Getting Started

### Option 1: Just Open the File
Download the project and open `index.html` directly in any modern web browser.

### Option 2: Run a Local Server
For the best experience (ensuring `localStorage` works correctly in all browsers), run a simple local server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx serve .
```

## Privacy

**Your data never leaves your device.** This application uses browser local storage only. There is no database, no tracking, and no telemetry.

## Important Disclaimer

⚠️ **This is a screening tool, NOT a diagnostic instrument.**

- These questionnaires are intended to help you explore your traits and prepare for professional evaluation.
- High scores indicate a possible benefit from professional assessment but do not constitute a diagnosis.
- Always consult with a qualified healthcare professional (Psychologist, Psychiatrist, or GP) for a formal diagnosis.
- This app is a digital conversion of existing tests; the creator of this app did not develop the tests themselves.

## Collaboration

I welcome collaboration for others who wish to add related validated screening tests to this tool.

---
*Built to make neurodivergence screening accessible and manageable.*
