# HydraTrack 🌊⚡ | Hyderabad Flood & Gridlock Civic Radar

> **Predict Gridlock. Outsmart Floods.**  
> A civic intelligence web application designed to track urban waterlogging depths, storm-drain bottlenecks, and traffic crawl speeds across Hyderabad's IT corridor (Hitec City, Gachibowli, Madhapur, Financial District) in high-definition telemetry.

[![GitHub Pages Ready](https://img.shields.io/badge/GitHub%20Pages-Ready-2ea44f?logo=github)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](https://opensource.org/licenses/MIT)
[![Civic Tech](https://img.shields.io/badge/Civic%20Tech-Hyderabad-0ea5e9.svg)](https://hyderabad.telangana.gov.in/)
[![Theme](https://img.shields.io/badge/Theme-Navy%20%2F%20Slate%20%2B%20Amber%20Badges-0a0f1d.svg)]()

---

## 🌟 Highlights & Key Features

- **🌙 Dark-Mode Civic UI**: Custom palette with deep navy/slate backgrounds (`#060a12`, `#0a0f1d`, `#111b33`) and high-contrast amber alert badges (`#f59e0b`).
- **🚨 Hero Section**: Featuring the *"Predict Gridlock. Outsmart Floods."* mission headline, live active sensor counters, delay estimates, and civic advisories.
- **🗺️ Live Interactive Map Preview (Leaflet.js & CartoDB Dark Matter)**:
  - Spatial telemetry tracking key IT hotspots (Cyber Towers, Bio-Diversity Park Underpass, Mindspace, Tolichowki, Gachibowli ORR, Durgam Cheruvu, Kondapur, Khajaguda, Wipro Circle).
  - Custom pulsing radar indicators (`radar-pulse-high`, `radar-pulse-moderate`, `radar-pulse-clear`).
  - Glowing hazard radius zones and rich popups with bypass routes.
  - "Pin on Radar" integration directly linked from the status table.
- **🏛️ 3-Column Civic Engineering Stack**:
  1. **Hydrological IoT Sensor Mesh**: Ultrasonic water depth transducers along storm-water drains (nalas) and underpasses.
  2. **Predictive Gridlock Modeling**: Real-time traffic velocity correlation with hyper-local rainfall telemetry.
  3. **Verified GHMC & DRF Dispatch**: Geotagged citizen reports routed to municipal de-watering pump squads.
- **📊 Interactive IT Corridor Status Table**:
  - Live instant search across junctions, corridors, and sensor IDs.
  - Risk filter pills: *All*, *Critical Flooded*, *Waterlogged*, *Clear & Moving*.
  - Details for water levels (cm/ft), traffic speeds, delay estimations, drainage status, and alternate bypass suggestions.
- **📢 Citizen Hazard Reporting Modal**:
  - Instant crowd-reporting form for commuters to report water depth and stalled traffic.
  - Emits interactive toast alerts and updates live counts.
- **☎️ Emergency Helplines**:
  - Direct dial cards for GHMC Disaster Control (040-21111111), Cyberabad Traffic SOS (8500411111), Police (100 / 112), and DRF Pumping Squads.

---

## 🚀 Quick Start (Run Locally)

This project has **zero build dependencies** and can be run immediately in any modern web browser or lightweight HTTP server.

### Option 1: Direct File Open
Simply double-click `index.html` or open it with your browser:
```bash
# On Windows PowerShell
Start-Process index.html
```

### Option 2: Using Python HTTP Server
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option 3: Using Node / npx
```bash
npx serve .
```

---

## 📦 Deployment Options to GitHub & the Web

Choose the method that works best for you:

### 🌟 Option 1: Automated CI/CD via GitHub Actions (Recommended)
This repository includes a pre-configured [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) workflow:
1. Push your repository to GitHub.
2. Go to **Settings** &rarr; **Pages** on GitHub.
3. Under **Source**, change the dropdown from *"Deploy from a branch"* to **"GitHub Actions"**.
4. That's it! Every future `git push` automatically tests and deploys your updates with zero manual steps.

---

### 🖱️ Option 2: Browser Upload (Zero Terminal / No Git Commands)
If you do not want to use terminal commands:
1. Open [github.com/new](https://github.com/new) and create a repository called `hyderabad-flood-traffic-tracker`.
2. On the empty repo setup page, click the **"uploading an existing file"** link.
3. Open your local folder (`C:\Users\sahit\.gemini\antigravity\scratch\hyderabad-flood-traffic-tracker`) in Windows File Explorer.
4. Drag and drop all files (`index.html`, `style.css`, `app.js`, `README.md`, etc.) directly into the browser window.
5. Click **Commit changes**.
6. Go to **Settings** &rarr; **Pages**, select **Deploy from a branch** &rarr; `main`, and click **Save**.

---

### 🖥️ Option 3: GitHub Desktop (Visual GUI App)
If you prefer a visual desktop program:
1. Download & open [GitHub Desktop](https://desktop.github.com/).
2. Click **File** &rarr; **Add Local Repository...** (or press `Ctrl+O`).
3. Select the folder: `C:\Users\sahit\.gemini\antigravity\scratch\hyderabad-flood-traffic-tracker`.
4. Click **Publish repository** to push it to your GitHub profile.
5. In GitHub repository settings, enable **Pages**!

---

### ⚡ Option 4: Deploy with Vercel or Netlify (Linked to GitHub)
If you want custom domain support and instant edge preview URLs:
- **Vercel**: Go to [vercel.com/new](https://vercel.com/new), select your GitHub repository, leave settings as static/root, and click **Deploy**.
- **Netlify**: Go to [app.netlify.com/start](https://app.netlify.com/start), import your GitHub repo, and click **Deploy Site**.

---

## 📁 Project Structure

```
hyderabad-flood-traffic-tracker/
├── index.html        # Main civic dashboard layout, Hero, Leaflet container & modals
├── style.css         # Dark theme styles, pulsing radar animations, and Leaflet overrides
├── app.js            # IT corridor dataset, Leaflet map logic, table filtering & reporting
├── README.md         # Documentation & GitHub deployment instructions
├── LICENSE           # MIT License
└── .gitignore        # Git ignore rules for system and editor files
```

---

## 📍 Monitored IT Corridor Junctions

| Junction | Corridor | Normal Flow | Alert Threshold |
|---|---|---|---|
| **Cyber Towers Junction** | Hitec City Main Rd | 35 km/h | > 30 cm water depth |
| **Bio-Diversity Park Underpass** | Old Mumbai Highway | 45 km/h | > 40 cm (Underpass closure) |
| **Mindspace IT Park / Inorbit** | Vittal Rao Nagar | 30 km/h | > 35 cm water depth |
| **Tolichowki Flyover Base** | Shaikpet - Gachibowli Spine | 40 km/h | > 40 cm water depth |
| **Gachibowli ORR Junction** | Gachibowli - Financial Dist | 50 km/h | > 25 cm water depth |
| **Durgam Cheruvu Cable Bridge Incline** | Jubilee Hills Rd 45 | 40 km/h | > 20 cm water depth |
| **Madhapur 100ft Road** | Ayyappa Society | 30 km/h | > 25 cm water depth |
| **Khajaguda Junction** | Care Hospital Link | 45 km/h | Designated Diversion Corridor |
| **Kondapur RTA Junction** | Miyapur Main Road | 35 km/h | > 20 cm water depth |
| **Wipro Circle** | Financial District / ISB | 50 km/h | > 15 cm water depth |

---

## 🤝 Civic Contribution & Attribution

- **Map Data**: [OpenStreetMap](https://www.openstreetmap.org/) & [CartoDB](https://carto.com/) Dark Matter
- **Iconography**: [Lucide Icons](https://lucide.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Spatial Engine**: [Leaflet.js](https://leafletjs.com/)

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
