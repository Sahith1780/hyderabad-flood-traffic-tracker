// HydraTrack - Hyderabad Civic Flood & Gridlock Radar
// Data model & interactive logic for IT Corridor Hotspots

const IT_JUNCTIONS_DATA = [
  {
    id: 'bio-diversity',
    name: 'Bio-Diversity Park Junction & Underpass',
    corridor: 'Old Mumbai Highway / Gachibowli',
    coords: [17.4308, 78.3683],
    waterLevel: '1.8 ft (55 cm)',
    waterDepthValue: 55,
    trafficSpeed: '4 km/h',
    trafficDelay: '+45 min',
    severity: 'high', // high | moderate | clear
    statusText: 'Severe Inundation & Closed Underpass',
    alternateRoute: 'Divert via Khajaguda Main Road or ORR Phase 1',
    sensorId: 'HYD-IOT-09',
    lastUpdated: '2 mins ago',
    drainStatus: 'Submerged (2 DRF Pumps active)'
  },
  {
    id: 'cyber-towers',
    name: 'Cyber Towers Junction',
    corridor: 'Hitec City Main Road / Madhapur',
    coords: [17.4504, 78.3808],
    waterLevel: '1.2 ft (36 cm)',
    waterDepthValue: 36,
    trafficSpeed: '7 km/h',
    trafficDelay: '+35 min',
    severity: 'high',
    statusText: 'Waterlogged near Shilparamam curve',
    alternateRoute: 'Use HITEX Backroad towards Kondapur',
    sensorId: 'HYD-IOT-03',
    lastUpdated: '1 min ago',
    drainStatus: 'Slow runoff via storm drain'
  },
  {
    id: 'mindspace',
    name: 'Mindspace IT Park / Inorbit Mall Junction',
    corridor: 'Vittal Rao Nagar / Madhapur',
    coords: [17.4384, 78.3815],
    waterLevel: '1.4 ft (42 cm)',
    waterDepthValue: 42,
    trafficSpeed: '6 km/h',
    trafficDelay: '+40 min',
    severity: 'high',
    statusText: 'Severe choke near Inorbit exit ramp',
    alternateRoute: 'Bypass via Knowledge City interior link',
    sensorId: 'HYD-IOT-07',
    lastUpdated: '3 mins ago',
    drainStatus: 'Back-surge from Durgam Cheruvu overflow'
  },
  {
    id: 'tolichowki',
    name: 'Tolichowki Flyover & Shaikpet Incline',
    corridor: 'Mehdipatnam - Gachibowli Spine',
    coords: [17.4087, 78.4112],
    waterLevel: '1.6 ft (48 cm)',
    waterDepthValue: 48,
    trafficSpeed: '5 km/h',
    trafficDelay: '+50 min',
    severity: 'high',
    statusText: 'Heavy water accumulation at flyover base',
    alternateRoute: 'Use Langar Houz - Narsingi link road',
    sensorId: 'HYD-IOT-14',
    lastUpdated: 'Just now',
    drainStatus: 'Pumps clearing low-lying culvert'
  },
  {
    id: 'gachibowli-orr',
    name: 'Gachibowli ORR Junction & Flyover',
    corridor: 'Gachibowli - Financial District',
    coords: [17.4401, 78.3489],
    waterLevel: '0.7 ft (21 cm)',
    waterDepthValue: 21,
    trafficSpeed: '18 km/h',
    trafficDelay: '+18 min',
    severity: 'moderate',
    statusText: 'Moderate pooling on left lane towards stadium',
    alternateRoute: 'Stick to center elevated lanes of flyover',
    sensorId: 'HYD-IOT-11',
    lastUpdated: '4 mins ago',
    drainStatus: 'Drainage functioning steady'
  },
  {
    id: 'durgam-cheruvu',
    name: 'Durgam Cheruvu Cable Bridge Incline',
    corridor: 'Jubilee Hills Rd 45 to Inorbit',
    coords: [17.4338, 78.3888],
    waterLevel: '0.5 ft (15 cm)',
    waterDepthValue: 15,
    trafficSpeed: '14 km/h',
    trafficDelay: '+22 min',
    severity: 'moderate',
    statusText: 'Slow movement ascending from cable bridge',
    alternateRoute: 'Use Road No. 36 via Peddamma Gudi',
    sensorId: 'HYD-IOT-05',
    lastUpdated: '5 mins ago',
    drainStatus: 'Adequate runoff to lake canal'
  },
  {
    id: 'madhapur-100ft',
    name: 'Madhapur 100ft Road / Ayyappa Society',
    corridor: 'Madhapur - Kondapur Corridor',
    coords: [17.4475, 78.3912],
    waterLevel: '0.8 ft (24 cm)',
    waterDepthValue: 24,
    trafficSpeed: '12 km/h',
    trafficDelay: '+25 min',
    severity: 'moderate',
    statusText: 'Puddling near petrol bunk & Metro Pillar 12',
    alternateRoute: 'Divert through Kavuri Hills internal grid',
    sensorId: 'HYD-IOT-04',
    lastUpdated: '6 mins ago',
    drainStatus: 'Active municipal clearing'
  },
  {
    id: 'khajaguda',
    name: 'Khajaguda Junction & Care Hospital Rd',
    corridor: 'Khajaguda - Manikonda Link',
    coords: [17.4172, 78.3719],
    waterLevel: '0.2 ft (6 cm)',
    waterDepthValue: 6,
    trafficSpeed: '32 km/h',
    trafficDelay: '+5 min',
    severity: 'clear',
    statusText: 'Road clear; functioning as primary bypass',
    alternateRoute: 'Clear bypass recommended for Bio-Diversity traffic',
    sensorId: 'HYD-IOT-15',
    lastUpdated: '2 mins ago',
    drainStatus: 'All channels flowing clear'
  },
  {
    id: 'kondapur-rta',
    name: 'Kondapur RTA Junction & Hafeezpet Rd',
    corridor: 'Kondapur - Miyapur Main Rd',
    coords: [17.4645, 78.3582],
    waterLevel: '0.3 ft (9 cm)',
    waterDepthValue: 9,
    trafficSpeed: '28 km/h',
    trafficDelay: '+8 min',
    severity: 'clear',
    statusText: 'No major flooding; light bumper-to-bumper queue',
    alternateRoute: 'Normal transit corridor',
    sensorId: 'HYD-IOT-02',
    lastUpdated: '7 mins ago',
    drainStatus: 'Culvert unobstructed'
  },
  {
    id: 'wipro-circle',
    name: 'Wipro Circle (Financial District)',
    corridor: 'ISB Road / Financial District',
    coords: [17.4206, 78.3421],
    waterLevel: '0.1 ft (3 cm)',
    waterDepthValue: 3,
    trafficSpeed: '35 km/h',
    trafficDelay: '+4 min',
    severity: 'clear',
    statusText: 'Normal flow with standard office hour transit',
    alternateRoute: 'Free flow towards Waverock & Kokapet',
    sensorId: 'HYD-IOT-18',
    lastUpdated: '3 mins ago',
    drainStatus: 'Open catchment clear'
  }
];

let mapInstance = null;
let mapMarkers = [];
let mapCircles = [];
let activeFilter = 'all';
let searchQuery = '';

// DOM Elements
const tableBody = document.getElementById('junctions-table-body');
const tableCount = document.getElementById('table-count');
const tableEmptyState = document.getElementById('table-empty-state');
const junctionSearchInput = document.getElementById('junction-search');
const filterButtons = document.querySelectorAll('.table-filter-btn');
const reportModal = document.getElementById('report-modal');
const openReportBtn = document.getElementById('open-report-modal');
const closeReportBtn = document.getElementById('close-report-modal');
const cancelReportBtn = document.getElementById('cancel-report-btn');
const hazardReportForm = document.getElementById('hazard-report-form');
const toastContainer = document.getElementById('toast-container');
const recenterMapBtn = document.getElementById('recenter-map-btn');
const filterAllMarkersBtn = document.getElementById('filter-all-markers');
const filterFloodedMarkersBtn = document.getElementById('filter-flooded-markers');
const refreshDataBtn = document.getElementById('refresh-data-btn');

// Initialize Map
function initMap() {
  const hyderabadCenter = [17.435, 78.374];
  
  mapInstance = L.map('hyd-map', {
    center: hyderabadCenter,
    zoom: 13,
    zoomControl: true,
    attributionControl: false
  });

  // Dark Matter tiles by CartoDB (High Performance & Sleek Slate Tone)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd',
  }).addTo(mapInstance);

  // Add Custom Attribution
  L.control.attribution({ position: 'bottomleft' })
    .addAttribution('&copy; <a href="https://carto.com/" class="text-slate-400">CARTO</a> | Hyderabad Civic Telemetry')
    .addTo(mapInstance);

  renderMapMarkers();
}

// Render Leaflet Markers
function renderMapMarkers(onlyFlooded = false) {
  // Clear existing markers
  mapMarkers.forEach(m => mapInstance.removeLayer(m));
  mapCircles.forEach(c => mapInstance.removeLayer(c));
  mapMarkers = [];
  mapCircles = [];

  const items = onlyFlooded 
    ? IT_JUNCTIONS_DATA.filter(j => j.severity === 'high' || j.severity === 'moderate')
    : IT_JUNCTIONS_DATA;

  items.forEach(junction => {
    // Determine marker class
    let markerClass = 'radar-pulse-clear';
    let circleColor = '#10b981';
    let circleRadius = 250;

    if (junction.severity === 'high') {
      markerClass = 'radar-pulse-high';
      circleColor = '#f43f5e';
      circleRadius = 550;
    } else if (junction.severity === 'moderate') {
      markerClass = 'radar-pulse-moderate';
      circleColor = '#f59e0b';
      circleRadius = 380;
    }

    // Leaflet DivIcon for pulsing radar ring
    const customIcon = L.divIcon({
      className: 'custom-radar-pin',
      html: `<div class="${markerClass}"></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    // Add glowing hazard radius zone
    const hazardCircle = L.circle(junction.coords, {
      color: circleColor,
      fillColor: circleColor,
      fillOpacity: junction.severity === 'high' ? 0.22 : 0.12,
      weight: 1.2,
      radius: circleRadius
    }).addTo(mapInstance);
    mapCircles.push(hazardCircle);

    // Marker
    const marker = L.marker(junction.coords, { icon: customIcon }).addTo(mapInstance);

    // Popup Content
    const popupHtml = `
      <div class="text-slate-100 text-xs font-sans min-w-[220px]">
        <div class="flex items-center justify-between gap-2 border-b border-slate-700/80 pb-2 mb-2">
          <span class="font-bold text-sm text-white">${junction.name}</span>
          ${getBadgeHtml(junction.severity)}
        </div>
        <div class="space-y-1.5 text-[11px]">
          <div class="flex justify-between">
            <span class="text-slate-400">Flood Depth:</span>
            <span class="font-mono font-semibold text-amber-300">${junction.waterLevel}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Traffic Speed:</span>
            <span class="font-mono font-semibold text-slate-200">${junction.trafficSpeed} (${junction.trafficDelay})</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Drain Status:</span>
            <span class="text-slate-300">${junction.drainStatus}</span>
          </div>
        </div>
        <div class="mt-2.5 pt-2 border-t border-slate-800 text-[10px] text-slate-400">
          <strong class="text-amber-400/90">Bypass:</strong> ${junction.alternateRoute}
        </div>
        <div class="mt-2 text-[9px] text-slate-500 font-mono">
          Sensor: ${junction.sensorId} &bull; Updated ${junction.lastUpdated}
        </div>
      </div>
    `;

    marker.bindPopup(popupHtml, { maxWidth: 300 });
    marker.junctionId = junction.id;
    mapMarkers.push(marker);
  });
}

// Helper to return badge HTML
function getBadgeHtml(severity) {
  if (severity === 'high') {
    return `<span class="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase badge-rose-alert inline-flex items-center gap-1">
      <span class="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span> Critical Flood
    </span>`;
  } else if (severity === 'moderate') {
    return `<span class="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase badge-amber-alert inline-flex items-center gap-1">
      <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Waterlogged
    </span>`;
  } else {
    return `<span class="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase badge-emerald-alert inline-flex items-center gap-1">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Clear / Moving
    </span>`;
  }
}

// Render Table Rows
function renderTable() {
  const filtered = IT_JUNCTIONS_DATA.filter(item => {
    // Risk filter
    const matchesFilter = (activeFilter === 'all') || (item.severity === activeFilter);
    
    // Search query
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.corridor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.statusText.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  tableCount.textContent = filtered.length;

  if (filtered.length === 0) {
    tableBody.innerHTML = '';
    tableEmptyState.classList.remove('hidden');
    return;
  }

  tableEmptyState.classList.add('hidden');

  tableBody.innerHTML = filtered.map(item => {
    // Water level color
    const waterClass = item.severity === 'high' 
      ? 'text-rose-400 font-bold' 
      : item.severity === 'moderate' 
      ? 'text-amber-400 font-medium' 
      : 'text-emerald-400 font-medium';

    // Velocity badge
    const speedClass = item.severity === 'high' 
      ? 'text-rose-400' 
      : item.severity === 'moderate' 
      ? 'text-amber-300' 
      : 'text-slate-200';

    return `
      <tr class="hover:bg-slate-800/40 transition-colors group">
        <!-- Junction & Corridor -->
        <td class="py-4 px-4 sm:px-6">
          <div class="font-bold text-white text-sm group-hover:text-amber-400 transition-colors flex items-center gap-2">
            <span>${item.name}</span>
          </div>
          <div class="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
            <span>${item.corridor}</span>
            <span class="text-slate-600">&bull;</span>
            <span class="text-slate-500 font-mono text-[10px]">${item.sensorId}</span>
          </div>
        </td>

        <!-- Water Depth -->
        <td class="py-4 px-4 whitespace-nowrap">
          <div class="font-mono text-sm ${waterClass}">${item.waterLevel}</div>
          <div class="text-[11px] text-slate-500">${item.drainStatus}</div>
        </td>

        <!-- Traffic Velocity -->
        <td class="py-4 px-4 whitespace-nowrap">
          <div class="font-mono text-sm ${speedClass}">${item.trafficSpeed}</div>
          <div class="text-[11px] text-rose-400 font-medium">${item.trafficDelay} delay</div>
        </td>

        <!-- Alert Severity -->
        <td class="py-4 px-4 whitespace-nowrap">
          ${getBadgeHtml(item.severity)}
        </td>

        <!-- Alternate Route -->
        <td class="py-4 px-4 hidden lg:table-cell text-xs text-slate-300 max-w-xs">
          <span class="text-slate-400 font-medium">Bypass:</span> ${item.alternateRoute}
        </td>

        <!-- Action / Map Pin -->
        <td class="py-4 px-4 text-right whitespace-nowrap">
          <button 
            onclick="focusJunctionOnMap('${item.id}')" 
            class="px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-amber-500 text-slate-300 hover:text-navy-950 border border-slate-700 hover:border-amber-500 text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-sm"
            title="Locate on Map"
          >
            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
            <span>Pin on Radar</span>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  // Re-run Lucide icons
  lucide.createIcons();
}

// Focus and pan map to junction
window.focusJunctionOnMap = function(junctionId) {
  const item = IT_JUNCTIONS_DATA.find(j => j.id === junctionId);
  if (!item || !mapInstance) return;

  // Scroll to map
  const mapElement = document.getElementById('live-map');
  mapElement.scrollIntoView({ behavior: 'smooth' });

  // Pan map and open popup
  mapInstance.flyTo(item.coords, 15, {
    animate: true,
    duration: 1.2
  });

  const marker = mapMarkers.find(m => m.junctionId === junctionId);
  if (marker) {
    setTimeout(() => {
      marker.openPopup();
    }, 1200);
  }
};

// Toast Notification
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  const isError = type === 'error';
  const borderCol = isError ? 'border-rose-500/50' : 'border-amber-500/50';
  const textCol = isError ? 'text-rose-300' : 'text-amber-300';
  const iconName = isError ? 'alert-triangle' : 'check-circle';

  toast.className = `p-4 rounded-xl bg-navy-900/95 border ${borderCol} shadow-2xl backdrop-blur-md flex items-center gap-3 text-sm text-slate-100 max-w-sm pointer-events-auto transition-all duration-300 transform translate-y-2 opacity-0`;
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-5 h-5 ${textCol} shrink-0"></i>
    <div class="leading-snug">${message}</div>
  `;

  toastContainer.appendChild(toast);
  lucide.createIcons();

  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  // Auto remove
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Setup Event Listeners
function setupEvents() {
  // Search input
  junctionSearchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderTable();
  });

  // Table filter pills
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.className = 'table-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-navy-900 text-slate-300 border border-slate-700 hover:text-white transition-all';
      });
      btn.className = 'table-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-navy-950 border border-amber-500 transition-all';
      
      activeFilter = btn.getAttribute('data-filter');
      renderTable();
    });
  });

  // Map Filter Buttons
  filterAllMarkersBtn.addEventListener('click', () => {
    filterAllMarkersBtn.classList.replace('bg-navy-950', 'bg-slate-800');
    filterAllMarkersBtn.classList.add('text-white');
    filterFloodedMarkersBtn.classList.replace('bg-amber-500', 'bg-navy-950');
    filterFloodedMarkersBtn.classList.replace('text-navy-950', 'text-amber-400');
    renderMapMarkers(false);
  });

  filterFloodedMarkersBtn.addEventListener('click', () => {
    filterFloodedMarkersBtn.className = 'px-3 py-1.5 rounded-md text-xs font-semibold bg-amber-500 text-navy-950 border border-amber-500 shadow-sm';
    filterAllMarkersBtn.className = 'px-3 py-1.5 rounded-md text-xs font-semibold bg-navy-950 text-slate-300 border border-slate-700 hover:text-white transition-colors';
    renderMapMarkers(true);
  });

  recenterMapBtn.addEventListener('click', () => {
    mapInstance.flyTo([17.435, 78.374], 13);
  });

  // Modal Controls
  openReportBtn.addEventListener('click', () => {
    reportModal.classList.remove('hidden');
  });

  closeReportBtn.addEventListener('click', () => {
    reportModal.classList.add('hidden');
  });

  cancelReportBtn.addEventListener('click', () => {
    reportModal.classList.add('hidden');
  });

  // Form Submission
  hazardReportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const junctionName = document.getElementById('modal-junction-select').value;
    const waterLevel = document.getElementById('modal-water-level').value;
    const trafficState = document.getElementById('modal-traffic-state').value;
    const notes = document.getElementById('modal-notes').value.trim();

    // Increment stats
    const reportsElem = document.getElementById('stat-reports');
    if (reportsElem) {
      reportsElem.textContent = parseInt(reportsElem.textContent, 10) + 1;
    }

    reportModal.classList.add('hidden');
    hazardReportForm.reset();

    showToast(`<strong>Report Logged!</strong> Citizen report for <em>${junctionName}</em> verified and dispatched to GHMC DRF unit.`, 'success');

    // Dynamically update existing or add temporary row
    const existing = IT_JUNCTIONS_DATA.find(j => j.name.toLowerCase().includes(junctionName.toLowerCase()));
    if (existing) {
      existing.lastUpdated = 'Just now (Verified Citizen Report)';
      if (waterLevel.includes('Waist') || waterLevel.includes('Knee')) {
        existing.severity = 'high';
        existing.waterLevel = waterLevel.split(' ')[0] + ' Level';
      }
      renderTable();
      renderMapMarkers();
    }
  });

  // Refresh Button
  refreshDataBtn.addEventListener('click', () => {
    refreshDataBtn.classList.add('opacity-50');
    setTimeout(() => {
      refreshDataBtn.classList.remove('opacity-50');
      showToast('Live telemetry mesh refreshed from IMD radar and GHMC sensors.', 'success');
      renderTable();
    }, 600);
  });
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderTable();
  setupEvents();
});
