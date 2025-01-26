const elements = [
    // Period 1
    { atomicNumber: 1, symbol: "H", name: "Hydrogen", group: "Nonmetals", gridArea: "h" },
    { atomicNumber: 2, symbol: "He", name: "Helium", group: "Noble Gases", gridArea: "he" },
  
    // Period 2
    { atomicNumber: 3, symbol: "Li", name: "Lithium", group: "Alkali Metals", gridArea: "li" },
    { atomicNumber: 4, symbol: "Be", name: "Beryllium", group: "Alkaline Earth Metals", gridArea: "be" },
    { atomicNumber: 5, symbol: "B", name: "Boron", group: "Metalloids", gridArea: "b" },
    { atomicNumber: 6, symbol: "C", name: "Carbon", group: "Nonmetals", gridArea: "c" },
    { atomicNumber: 7, symbol: "N", name: "Nitrogen", group: "Nonmetals", gridArea: "n" },
    { atomicNumber: 8, symbol: "O", name: "Oxygen", group: "Nonmetals", gridArea: "o" },
    { atomicNumber: 9, symbol: "F", name: "Fluorine", group: "Halogens", gridArea: "f" },
    { atomicNumber: 10, symbol: "Ne", name: "Neon", group: "Noble Gases", gridArea: "ne" },
  
    // Period 3
    { atomicNumber: 11, symbol: "Na", name: "Sodium", group: "Alkali Metals", gridArea: "na" },
    { atomicNumber: 12, symbol: "Mg", name: "Magnesium", group: "Alkaline Earth Metals", gridArea: "mg" },
    { atomicNumber: 13, symbol: "Al", name: "Aluminum", group: "Post-transition Metals", gridArea: "al" },
    { atomicNumber: 14, symbol: "Si", name: "Silicon", group: "Metalloids", gridArea: "si" },
    { atomicNumber: 15, symbol: "P", name: "Phosphorus", group: "Nonmetals", gridArea: "p" },
    { atomicNumber: 16, symbol: "S", name: "Sulfur", group: "Nonmetals", gridArea: "s" },
    { atomicNumber: 17, symbol: "Cl", name: "Chlorine", group: "Halogens", gridArea: "cl" },
    { atomicNumber: 18, symbol: "Ar", name: "Argon", group: "Noble Gases", gridArea: "ar" },
  
    // Period 4
    { atomicNumber: 19, symbol: "K", name: "Potassium", group: "Alkali Metals", gridArea: "k" },
    { atomicNumber: 20, symbol: "Ca", name: "Calcium", group: "Alkaline Earth Metals", gridArea: "ca" },
    { atomicNumber: 21, symbol: "Sc", name: "Scandium", group: "Transition Metals", gridArea: "sc" },
    { atomicNumber: 22, symbol: "Ti", name: "Titanium", group: "Transition Metals", gridArea: "ti" },
    { atomicNumber: 23, symbol: "V", name: "Vanadium", group: "Transition Metals", gridArea: "v" },
    { atomicNumber: 24, symbol: "Cr", name: "Chromium", group: "Transition Metals", gridArea: "cr" },
    { atomicNumber: 25, symbol: "Mn", name: "Manganese", group: "Transition Metals", gridArea: "mn" },
    { atomicNumber: 26, symbol: "Fe", name: "Iron", group: "Transition Metals", gridArea: "fe" },
    { atomicNumber: 27, symbol: "Co", name: "Cobalt", group: "Transition Metals", gridArea: "co" },
    { atomicNumber: 28, symbol: "Ni", name: "Nickel", group: "Transition Metals", gridArea: "ni" },
    { atomicNumber: 29, symbol: "Cu", name: "Copper", group: "Transition Metals", gridArea: "cu" },
    { atomicNumber: 30, symbol: "Zn", name: "Zinc", group: "Transition Metals", gridArea: "zn" },
    { atomicNumber: 31, symbol: "Ga", name: "Gallium", group: "Post-transition Metals", gridArea: "ga" },
    { atomicNumber: 32, symbol: "Ge", name: "Germanium", group: "Metalloids", gridArea: "ge" },
    { atomicNumber: 33, symbol: "As", name: "Arsenic", group: "Metalloids", gridArea: "as" },
    { atomicNumber: 34, symbol: "Se", name: "Selenium", group: "Nonmetals", gridArea: "se" },
    { atomicNumber: 35, symbol: "Br", name: "Bromine", group: "Halogens", gridArea: "br" },
    { atomicNumber: 36, symbol: "Kr", name: "Krypton", group: "Noble Gases", gridArea: "kr" },
  
    // Period 5
    { atomicNumber: 37, symbol: "Rb", name: "Rubidium", group: "Alkali Metals", gridArea: "rb" },
    { atomicNumber: 38, symbol: "Sr", name: "Strontium", group: "Alkaline Earth Metals", gridArea: "sr" },
    { atomicNumber: 39, symbol: "Y", name: "Yttrium", group: "Transition Metals", gridArea: "y" },
    { atomicNumber: 40, symbol: "Zr", name: "Zirconium", group: "Transition Metals", gridArea: "zr" },
    { atomicNumber: 41, symbol: "Nb", name: "Niobium", group: "Transition Metals", gridArea: "nb" },
    { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", group: "Transition Metals", gridArea: "mo" },
    { atomicNumber: 43, symbol: "Tc", name: "Technetium", group: "Transition Metals", gridArea: "tc" },
    { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", group: "Transition Metals", gridArea: "ru" },
    { atomicNumber: 45, symbol: "Rh", name: "Rhodium", group: "Transition Metals", gridArea: "rh" },
    { atomicNumber: 46, symbol: "Pd", name: "Palladium", group: "Transition Metals", gridArea: "pd" },
    { atomicNumber: 47, symbol: "Ag", name: "Silver", group: "Transition Metals", gridArea: "ag" },
    { atomicNumber: 48, symbol: "Cd", name: "Cadmium", group: "Transition Metals", gridArea: "cd" },
    { atomicNumber: 49, symbol: "In", name: "Indium", group: "Post-transition Metals", gridArea: "in" },
    { atomicNumber: 50, symbol: "Sn", name: "Tin", group: "Post-transition Metals", gridArea: "sn" },
    { atomicNumber: 51, symbol: "Sb", name: "Antimony", group: "Metalloids", gridArea: "sb" },
    { atomicNumber: 52, symbol: "Te", name: "Tellurium", group: "Metalloids", gridArea: "te" },
    { atomicNumber: 53, symbol: "I", name: "Iodine", group: "Halogens", gridArea: "i" },
    { atomicNumber: 54, symbol: "Xe", name: "Xenon", group: "Noble Gases", gridArea: "xe" },
  
    // Period 6
    { atomicNumber: 55, symbol: "Cs", name: "Cesium", group: "Alkali Metals", gridArea: "cs" },
    { atomicNumber: 56, symbol: "Ba", name: "Barium", group: "Alkaline Earth Metals", gridArea: "ba" },
    { atomicNumber: 57, symbol: "La", name: "Lanthanum", group: "Lanthanides", gridArea: "la" },
    { atomicNumber: 58, symbol: "Ce", name: "Cerium", group: "Lanthanides", gridArea: "ce" },
    { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", group: "Lanthanides", gridArea: "pr" },
    { atomicNumber: 60, symbol: "Nd", name: "Neodymium", group: "Lanthanides", gridArea: "nd" },
    { atomicNumber: 61, symbol: "Pm", name: "Promethium", group: "Lanthanides", gridArea: "pm" },
    { atomicNumber: 62, symbol: "Sm", name: "Samarium", group: "Lanthanides", gridArea: "sm" },
    { atomicNumber: 63, symbol: "Eu", name: "Europium", group: "Lanthanides", gridArea: "eu" },
    { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", group: "Lanthanides", gridArea: "gd" },
    { atomicNumber: 65, symbol: "Tb", name: "Terbium", group: "Lanthanides", gridArea: "tb" },
    { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", group: "Lanthanides", gridArea: "dy" },
    { atomicNumber: 67, symbol: "Ho", name: "Holmium", group: "Lanthanides", gridArea: "ho" },
    { atomicNumber: 68, symbol: "Er", name: "Erbium", group: "Lanthanides", gridArea: "er" },
    { atomicNumber: 69, symbol: "Tm", name: "Thulium", group: "Lanthanides", gridArea: "tm" },
    { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", group: "Lanthanides", gridArea: "yb" },
    { atomicNumber: 71, symbol: "Lu", name: "Lutetium", group: "Lanthanides", gridArea: "lu" },
    { atomicNumber: 72, symbol: "Hf", name: "Hafnium", group: "Transition Metals", gridArea: "hf" },
    { atomicNumber: 73, symbol: "Ta", name: "Tantalum", group: "Transition Metals", gridArea: "ta" },
    { atomicNumber: 74, symbol: "W", name: "Tungsten", group: "Transition Metals", gridArea: "w" },
    { atomicNumber: 75, symbol: "Re", name: "Rhenium", group: "Transition Metals", gridArea: "re" },
    { atomicNumber: 76, symbol: "Os", name: "Osmium", group: "Transition Metals", gridArea: "os" },
    { atomicNumber: 77, symbol: "Ir", name: "Iridium", group: "Transition Metals", gridArea: "ir" },
    { atomicNumber: 78, symbol: "Pt", name: "Platinum", group: "Transition Metals", gridArea: "pt" },
    { atomicNumber: 79, symbol: "Au", name: "Gold", group: "Transition Metals", gridArea: "au" },
    { atomicNumber: 80, symbol: "Hg", name: "Mercury", group: "Transition Metals", gridArea: "hg" },
    { atomicNumber: 81, symbol: "Tl", name: "Thallium", group: "Post-transition Metals", gridArea: "tl" },
    { atomicNumber: 82, symbol: "Pb", name: "Lead", group: "Post-transition Metals", gridArea: "pb" },
    { atomicNumber: 83, symbol: "Bi", name: "Bismuth", group: "Post-transition Metals", gridArea: "bi" },
    { atomicNumber: 84, symbol: "Po", name: "Polonium", group: "Metalloids", gridArea: "po" },
    { atomicNumber: 85, symbol: "At", name: "Astatine", group: "Metalloids", gridArea: "at" },
    { atomicNumber: 86, symbol: "Rn", name: "Radon", group: "Noble Gases", gridArea: "rn" },
  
    // Period 7
    { atomicNumber: 87, symbol: "Fr", name: "Francium", group: "Alkali Metals", gridArea: "fr" },
    { atomicNumber: 88, symbol: "Ra", name: "Radium", group: "Alkaline Earth Metals", gridArea: "ra" },
    { atomicNumber: 89, symbol: "Ac", name: "Actinium", group: "Actinides", gridArea: "ac" },
    { atomicNumber: 90, symbol: "Th", name: "Thorium", group: "Actinides", gridArea: "th" },
    { atomicNumber: 91, symbol: "Pa", name: "Protactinium", group: "Actinides", gridArea: "pa" },
    { atomicNumber: 92, symbol: "U", name: "Uranium", group: "Actinides", gridArea: "u" },
    { atomicNumber: 93, symbol: "Np", name: "Neptunium", group: "Actinides", gridArea: "np" },
    { atomicNumber: 94, symbol: "Pu", name: "Plutonium", group: "Actinides", gridArea: "pu" },
    { atomicNumber: 95, symbol: "Am", name: "Americium", group: "Actinides", gridArea: "am" },
    { atomicNumber: 96, symbol: "Cm", name: "Curium", group: "Actinides", gridArea: "cm" },
    { atomicNumber: 97, symbol: "Bk", name: "Berkelium", group: "Actinides", gridArea: "bk" },
    { atomicNumber: 98, symbol: "Cf", name: "Californium", group: "Actinides", gridArea: "cf" },
    { atomicNumber: 99, symbol: "Es", name: "Einsteinium", group: "Actinides", gridArea: "es" },
    { atomicNumber: 100, symbol: "Fm", name: "Fermium", group: "Actinides", gridArea: "fm" },
    { atomicNumber: 101, symbol: "Md", name: "Mendelevium", group: "Actinides", gridArea: "md" },
    { atomicNumber: 102, symbol: "No", name: "Nobelium", group: "Actinides", gridArea: "no" },
    { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", group: "Actinides", gridArea: "lr" },
    { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", group: "Transition Metals", gridArea: "rf" },
    { atomicNumber: 105, symbol: "Db", name: "Dubnium", group: "Transition Metals", gridArea: "db" },
    { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", group: "Transition Metals", gridArea: "sg" },
    { atomicNumber: 107, symbol: "Bh", name: "Bohrium", group: "Transition Metals", gridArea: "bh" },
    { atomicNumber: 108, symbol: "Hs", name: "Hassium", group: "Transition Metals", gridArea: "hs" },
    { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", group: "Transition Metals", gridArea: "mt" },
    { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", group: "Transition Metals", gridArea: "ds" },
    { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", group: "Transition Metals", gridArea: "rg" },
    { atomicNumber: 112, symbol: "Cn", name: "Copernicium", group: "Transition Metals", gridArea: "cn" },
    { atomicNumber: 113, symbol: "Nh", name: "Nihonium", group: "Post-transition Metals", gridArea: "nh" },
    { atomicNumber: 114, symbol: "Fl", name: "Flerovium", group: "Post-transition Metals", gridArea: "fl" },
    { atomicNumber: 115, symbol: "Mc", name: "Moscovium", group: "Post-transition Metals", gridArea: "mc" },
    { atomicNumber: 116, symbol: "Lv", name: "Livermorium", group: "Post-transition Metals", gridArea: "lv" },
    { atomicNumber: 117, symbol: "Ts", name: "Tennessine", group: "Halogens", gridArea: "ts" },
    { atomicNumber: 118, symbol: "Og", name: "Oganesson", group: "Noble Gases", gridArea: "og" },
  ];
  
  const periodicTable = document.getElementById("periodicTable");
const searchInput = document.getElementById("searchInput");
const elementDetails = document.getElementById("elementDetails");
const elementSymbol = document.getElementById("elementSymbol");
const elementName = document.getElementById("elementName");
const elementNumber = document.getElementById("elementNumber");
const elementGroup = document.getElementById("elementGroup");

let selectedElement = null;

// Populate the periodic table with the correct layout
function populateTable() {
  periodicTable.innerHTML = ""; // Clear table before repopulating

  elements.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("element");
    div.dataset.atomicNumber = element.atomicNumber;
    div.dataset.group = element.group;
    div.style.gridArea = element.gridArea; // Assign the grid-area dynamically
    div.innerHTML = `<strong>${element.symbol}</strong><br>${element.atomicNumber}`;
    periodicTable.appendChild(div);

    // Add click event to toggle selection
    div.addEventListener("click", () => {
      if (selectedElement === element) {
        unselectElement();
      } else {
        displayElementDetails(element);
        highlightGroup(element.group);
        selectedElement = element;
      }
    });
  });
}

// Display element details
function displayElementDetails(element) {
  elementDetails.classList.remove("hidden");
  elementSymbol.textContent = element.symbol;
  elementName.textContent = element.name;
  elementNumber.textContent = element.atomicNumber;
  elementGroup.textContent = element.group;

  // Highlight the selected element
  document.querySelectorAll(".element").forEach((el) => {
    el.classList.remove("selected");
  });
  const selectedEl = document.querySelector(
    `.element[data-atomic-number="${element.atomicNumber}"]`
  );
  selectedEl.classList.add("selected");
}

// Unselect the current element and remove highlights
function unselectElement() {
  document.querySelectorAll(".element").forEach((el) => {
    el.classList.remove("selected");
    el.classList.remove("highlight");
  });
  elementDetails.classList.add("hidden");
  selectedElement = null;
}

// Highlight all elements in the same group
function highlightGroup(group) {
  document.querySelectorAll(".element").forEach((el) => {
    el.classList.remove("highlight");
    if (el.dataset.group === group) {
      el.classList.add("highlight");
    }
  });
}

// Search for elements
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll(".element").forEach((el) => {
    const symbol = el.querySelector("strong").textContent.toLowerCase();
    const atomicNumber = el.dataset.atomicNumber;
    const name = elements.find(
      (e) => e.atomicNumber === parseInt(atomicNumber)
    ).name.toLowerCase();

    if (
      symbol.includes(query) ||
      atomicNumber.includes(query) ||
      name.includes(query)
    ) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
});

// Initialize the table
populateTable();

  