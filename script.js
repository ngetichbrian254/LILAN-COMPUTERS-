const WHATSAPP_NUMBER = "254707757736";

const inventory = [
  {
    id: 1,
    name: "HP EliteBook 850 G8",
    category: "business",
    badge: "CORE i7 11TH GEN",
    image: "elitebook-850.jpg",
    price: "Ksh 43,000",
    specs: [
      "11th Gen Intel Core i7 Processor",
      "16GB RAM | 256GB NVMe SSD",
      "15.6-inch Full HD Anti-Glare Display",
      "Tested & Reliable Business Build"
    ]
  },
  {
    id: 2,
    name: "HP EliteBook 1040 G6 x360",
    category: "touchscreen",
    badge: "TOUCH x360",
    image: "elitebook-1040.jpg",
    price: "Ksh 39,000",
    specs: [
      "8th Gen Intel Core i7 Processor",
      "16GB RAM | 256GB SSD",
      "14-inch 360° Convertible Touchscreen",
      "2-in-1 Laptop / Tablet Design"
    ]
  },
  {
    id: 3,
    name: "Apple MacBook Air A2179",
    category: "business",
    badge: "FREE BAG",
    image: "macbook-2729.jpg",
    price: "Ksh 49,999",
    specs: [
      "10th Gen Intel Core i5 Processor",
      "8GB RAM | 512GB SSD Storage",
      "Sleek Retina Display & macOS Ready",
      "Comes with Free Lilan Backpack"
    ]
  },
  {
    id: 4,
    name: "HP ProBook 450 G9",
    category: "budget",
    badge: "12TH GEN",
    image: "probook-450.jpg",
    price: "Ksh 35,000",
    specs: [
      "12th Gen Intel Core i5 Processor",
      "8GB RAM | 256GB SSD",
      "15.6-inch Display with Numeric Keypad",
      "Slim Aluminum Chassis"
    ]
  },
  {
    id: 5,
    name: "HP DESKTOP SET",
    category: "office",
    badge: "CORE i5 8TH GEN",
    image: "desktop.jpg",
    price: "Ksh 28,000",
    specs: [
      "8th Gen Intel Core i5 Processor",
      "8GB RAM | 500GB HDD",
      '19"-inch LED Monitor (Square)',
      "Includes Keyboard & Mouse"
    ]
  },
  {
    id: 6,
    name: "Lenovo ThinkPad T490",
    category: "business",
    badge: "CORE i5 8TH GEN",
    image: "thinkpad-490.jpg",
    price: "Ksh 29,000",
    specs: [
      "8th Gen Intel Core i5 Processor",
      "8GB RAM | 256GB SSD",
      "14-inch Full HD Display",
      "Durable Business Laptop with TrackPoint"
    ]
  },
  {
    id: 7,
    name: "Dell Latitude 5420",
    category: "business",
    badge: "CORE i5 11TH GEN",
    image: "delatitude.jpg",
    price: "Ksh 30,000",
    specs: [
      "11th Gen Intel Core i5 (11th Gen)",
      "8GB DDR4 RAM | 256GB SSD",
      "14-inch HD Display | Windows 11",
      "Lightweight, Portable & Durable"
    ]
  },
  {
    id: 8,
    name: "Kyocera ECOSYS FS-1025MFP",
    category: "office",
    badge: "3-IN-1 PRINTER",
    image: "ecosys-1025mpf.jpg",
    price: "Inquire Price",
    specs: [
      "3-in-1 Laser Printer (Print, Copy, Scan)",
      "Print Speed: 25 Pages per Minute",
      "250-Sheet Paper Capacity & Auto Duplex",
      "Ethernet Network Connectivity"
    ]
  },
  {
    id: 9,
    name: "Kyocera ECOSYS M2135dn",
    category: "office",
    badge: "35 PPM PRINTER",
    image: "ecosys-m2135dn.jpg",
    price: "Inquire Price",
    specs: [
      "A4 Monochrome Multifunction (Print, Scan, Copy)",
      "Fast 35 Pages Per Minute + Auto Duplex",
      "Automatic Document Feeder (ADF)",
      "Built-in Network Print Support"
    ]
  },
  {
    id: 10,
    name: "Kyocera ECOSYS MA4500x",
    category: "office",
    badge: "HEAVY DUTY",
    image: "ecosys-ma4500x.jpg",
    price: "Inquire Price",
    specs: [
      "A4 Monochrome Multifunction Printer",
      "Print, Scan, Copy with Duplex Print",
      "Automatic Document Feeder (ADF)",
      "Network Ready for Busy Offices"
    ]
  },
  {
    id: 11,
    name: "HP EliteBook 830 G8",
    category: "business",
    badge: "Touchscreen | CORE i7 10TH GEN",
    image: "elitebook-830g8.jpg",
    price: "Ksh 47,000",
    specs: [
      "10th Gen Intel Core i7 Processor",
      "16GB RAM | 512GB SSD",
      "15.6-inch Full HD Business Display",
      "Sleek & Durable Aluminum Chassis"
    ]
  },
  {
    id: 12,
    name: "HP EliteBook 630 G9",
    category: "business",
    badge: "CORE i5 12TH GEN",
    image: "elitebook-630.jpg",
    price: "Ksh 37,000",
    specs: [
      "12th Gen Intel Core i5 Processor",
      "8GB RAM | 256GB SSD",
      "13.3-inch Clear & Bright Display",
      "Ultra-Portable Business Laptop"
    ]
  },
  {
    id: 13,
    name: "HP EliteBook 830x360 G9",
    category: "business",
    badge: "Touchscreen | CORE i7 12TH GEN",
    image: "elitebook-830x360.jpg",
    price: "Ksh 57,000",
    specs: [
      "12th Gen Intel Core i7 Processor",
      "16GB RAM | 512GB SSD",
      "15.6-inch Full HD Touchscreen Display",
      "Sleek,Durable, Convertable keyboard & 360° Hinge"
    ]
  },
  {
    id: 14,
    name: "HP ZBook FIREFLY 14 G7",
    category: "business",
    badge: "PROFESSIONAL WORKSTATION",
    image: "zbook-34.jpg",
    price: "Ksh 35,000",
    specs: [
      "10th Gen Intel Core i7 Processor",
      "32GB RAM | 256GB SSD",
      "14-inch 4K Ultra HD Display",
      "Lightweigt, Durable & Professional Workstation"
    ]
  },
  {
    id: 15,
    name: "LENOVO THINKPAD X380 YOGA",
    category: "touchscreen",
    badge: "TOUCH x360",
    image: "thinkpad-x380yoga.jpg",
    price: "Ksh 32,000",
    specs: [
      "8th Gen Intel Core i5 Processor",
      "8GB RAM | 256GB SSD",
      "13.3-inch Touchscreen Display",
      "360° Hinge & Convertible Design"
    ]
  },
  {
    id: 16,
    name: "PRINTER INKS & TONERS",
    category: "printer inks",
    badge: "GENUINE & ORIGINAL",
    image: "printer-inks.jpg",
    price: "Inquire Price",
    specs: [
      "High-Quality Ink Cartridges",
      "Compatible with Multiple Printer Models",
      "Long-Lasting Print Quality"
    ] 
  },
  {
    id: 17,
    name: "Color LaserJet Pro 4203dw",
    category: "printers",
    badge: "COLOR LASER PRINTER",
    image: "laserjet-pro4203dw.jpg",
    price: "Ksh 57,000",
    specs: [
      "Color LaserJet Pro Printer",
      "Print Speed: 40 Pages per Minute",
      "Wireless & Ethernet Connectivity",
      "Automatic Duplex Printing & high performance"
    ]
  },
  {
    id: 18,
    name: "Surface Pro",
    category: "work & study",
    badge: "TOUCH x360",
    image: "surface-pro.jpg",
    price: "Ksh 22,000",
    specs: [
      "8th Gen Intel Core i5 Processor",
      "4GB RAM | 128GB SSD",
      "12.3-inch Touchscreen Display",
      "360° Hinge & Convertible Design"
    ]
  }

];

let activeCategory = "all";

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const filterGroup = document.getElementById("filterGroup");
const bookingForm = document.getElementById("bookingForm");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const specsModal = document.getElementById("specsModal");
const closeModal = document.getElementById("closeModal");
const modalBadge = document.getElementById("modalBadge");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalSpecsList = document.getElementById("modalSpecsList");
const modalOrderBtn = document.getElementById("modalOrderBtn");

function buildWhatsAppUrl(message) {
  return `https://wa.me/254707757736?text=${encodeURIComponent(message)}`;
}

function renderCatalog(items) {
  productGrid.innerHTML = "";

  if (items.length === 0) {
    productGrid.innerHTML = `<p>No matching computers found. Message us on WhatsApp for incoming stock.</p>`;
    return;
  }

  items.forEach((product) => {
    const orderLink = buildWhatsAppUrl(
      `Hello Lilan Computers Kericho, I would like to inquire about the ${product.name} (${product.price}). Is it available and how can i get it?`
    );

    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="card-media">
        <span class="card-badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
        <div class="media-placeholder" style="display:none; color:#fff; text-align:center;">
          <strong>${product.name}</strong><br/>
          <span style="font-size:0.8rem; color:#00e600;">Verified Stock • Kericho</span>
        </div>
      </div>
      <div class="card-content">
        <div>
          <h3>${product.name}</h3>
          <ul class="card-specs">
            ${product.specs.slice(0, 3).map((spec) => `<li>• ${spec}</li>`).join("")}
          </ul>
        </div>
        <div class="card-footer">
          <span class="card-price">${product.price}</span>
          <div class="card-actions">
            <button type="button" class="btn-specs" data-id="${product.id}">Specs</button>
            <a href="${orderLink}" target="_blank" rel="noopener" class="btn btn-green">Order</a>
          </div>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

function applyFilters() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = inventory.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(term) ||
      item.specs.join(" ").toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });
  renderCatalog(filtered);
}

searchInput.addEventListener("input", applyFilters);

filterGroup.addEventListener("click", (e) => {
  if (!e.target.classList.contains("filter-pill")) return;
  document.querySelectorAll(".filter-pill").forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
  activeCategory = e.target.dataset.category;
  applyFilters();
});

productGrid.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn-specs")) return;
  const productId = Number(e.target.dataset.id);
  const product = inventory.find((p) => p.id === productId);
  if (!product) return;

  modalBadge.textContent = product.badge;
  modalTitle.textContent = product.name;
  modalPrice.textContent = product.price;
  modalSpecsList.innerHTML = product.specs.map((s) => `<li>✔️ ${s}</li>`).join("");
  modalOrderBtn.href = buildWhatsAppUrl(
    `Hello Lilan Computers Kericho, I want to reserve the ${product.name} (${product.price}).`
  );
  specsModal.classList.add("open");
});

closeModal.addEventListener("click", () => specsModal.classList.remove("open"));
specsModal.addEventListener("click", (e) => {
  if (e.target === specsModal) specsModal.classList.remove("open");
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("custName").value.trim();  
  const phone = document.getElementById("custPhone").value.trim();
  const service = document.getElementById("serviceType").value;
  const msg = document.getElementById("custMsg").value.trim();

  const formattedMessage =
    `Hello Lilan Computers Kericho,\n` +
    `*Name:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Service:* ${service}\n` +
    `*Details:* ${msg}`;

  window.open(buildWhatsAppUrl(formattedMessage), "_blank", "noopener");
});

renderCatalog(inventory);


