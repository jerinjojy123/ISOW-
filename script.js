const properties = [

{
    id:1,
    title:"Premium DTCP Plot",
    city:"Chennai",
    primeLocation:"OMR",
    price:500,
    displayPrice:"5 Cr",
    area:"2400 Sqft",
    image:"images/land1.jpg",
	Cn:"" ,
    description:"DTCP approved residential plot near OMR IT Corridor."
},

{
    id:2,
    title:"Luxury Villa Plot",
    city:"Chennai",
    primeLocation:"ECR",
    price:1200,
    displayPrice:"12 Cr",
    area:"7200 Sqft",
    image:"images/land2.jpg",
    description:"Beach-side villa plot with excellent road access."
},

{
    id:3,
    title:"Commercial Corner Land",
    city:"Coimbatore",
    primeLocation:"RS Puram",
    price:850,
    displayPrice:"8.5 Cr",
    area:"5000 Sqft",
    image:"images/land3.jpg",
    description:"Prime commercial property in the heart of RS Puram."
},

{
    id:4,
    title:"IT Corridor Investment Land",
    city:"Coimbatore",
    primeLocation:"Saravanampatti",
    price:300,
    displayPrice:"3 Cr",
    area:"3600 Sqft",
    image:"images/land4.jpg",
    description:"Excellent investment opportunity near IT parks."
},

{
    id:5,
    title:"Premium Residential Plot",
    city:"Madurai",
    primeLocation:"KK Nagar",
    price:150,
    displayPrice:"1.5 Cr",
    area:"2400 Sqft",
    image:"images/land5.jpg",
    description:"Ready-to-build residential plot in a premium area."
},

{
    id:6,
    title:"Main Road Commercial Site",
    city:"Madurai",
    primeLocation:"Mattuthavani",
    price:650,
    displayPrice:"6.5 Cr",
    area:"6000 Sqft",
    image:"images/land6.jpg",
    description:"Commercial land near bus stand and shopping complexes."
},

{
    id:7,
    title:"Luxury Gated Community Plot",
    city:"Bangalore",
    primeLocation:"Whitefield",
    price:900,
    displayPrice:"9 Cr",
    area:"4800 Sqft",
    image:"images/land7.jpg",
    description:"Premium plot inside a gated community."
},

{
    id:8,
    title:"Tech Park Adjacent Property",
    city:"Bangalore",
    primeLocation:"Electronic City",
    price:2000,
    displayPrice:"20 Cr",
    area:"1 Acre",
    image:"images/land8.jpg",
    description:"Perfect for commercial development near IT companies."
},

{
    id:9,
    title:"Premium Investment Property",
    city:"Hyderabad",
    primeLocation:"Gachibowli",
    price:2500,
    displayPrice:"25 Cr",
    area:"2 Acres",
    image:"images/land9.jpg",
    description:"High appreciation land near Financial District."
},

{
    id:10,
    title:"Luxury Commercial Plot",
    city:"Hyderabad",
    primeLocation:"Hitech City",
    price:3500,
    displayPrice:"35 Cr",
    area:"3 Acres",
    image:"images/land10.jpg",
    description:"Premium commercial property suitable for offices and malls."
}

];

localStorage.setItem(
"properties",
JSON.stringify(properties)
);

displayProperties(properties);

function displayProperties(list){

const container =
document.getElementById("properties");

container.innerHTML="";

list.forEach(p=>{

container.innerHTML += `

<div class="card">

<span class="featured">
Featured
</span>

<img src="${p.image}" alt="${p.title}">

<div class="card-content">

<h3>${p.title}</h3>
<h5>ID: ${p.id}</h5>
<p>📍${p.primeLocation}, ${p.city}</p>

<p>💰 ₹${p.displayPrice}</p>

<p>📏 ${p.area}</p>

<button onclick="viewProperty(${p.id})">
View Details
</button>

</div>

</div>

`;

});

}

const primeLocations = {

    Chennai: [
        "Anna Nagar",
        "ECR",
        "OMR",
        "Porur",
        "Siruseri",
        "Velachery"
    ],

    Coimbatore: [
        "Peelamedu",
        "RS Puram",
        "Saravanampatti",
        "Vadavalli"
    ],

    Madurai: [
        "KK Nagar",
        "Mattuthavani",
        "Otthakadai",
        "Thirunagar"
    ],

    Bangalore: [
        "Electronic City",
        "Koramangala",
        "Sarjapur Road",
        "Whitefield"
    ],

    Hyderabad: [
        "Gachibowli",
        "Hitech City",
        "Kokapet"
    ]
};

function updatePrimeLocations() {

    const city =
        document.getElementById("cityFilter").value;

    const primeDropdown =
        document.getElementById("primeLocationFilter");

    primeDropdown.innerHTML =
        '<option value="">All Prime Locations</option>';

    if (city && primeLocations[city]) {

        primeLocations[city].forEach(location => {

            primeDropdown.innerHTML +=
                `<option value="${location}">
                    ${location}
                </option>`;

        });

    }
}
function viewProperty(id){

localStorage.setItem(
"selectedProperty",
id
);

window.location.href="property.html";

}
function filterProperties() {

    let filtered = properties;

    const city =
        document.getElementById("cityFilter").value;

    const primeLocation =
        document.getElementById("primeLocationFilter").value;

    const price =
        document.getElementById("priceFilter").value;

    // City Filter
    if (city) {
        filtered = filtered.filter(
            p => p.city === city
        );
    }

    // Prime Location Filter
    if (primeLocation) {
        filtered = filtered.filter(
            p => p.primeLocation === primeLocation
        );
    }

    // Price Filter
    if (price) {

        if (price === "2000+") {

            filtered = filtered.filter(
                p => p.price > 2000
            );

        } else {

            filtered = filtered.filter(
                p => p.price <= Number(price)
            );

        }
    }

    displayProperties(filtered);
}

function searchProperty(){

const search =
document.getElementById("searchInput")
.value.toLowerCase();

const filtered =
properties.filter(p =>
(
    p.city.toLowerCase().includes(search) ||
    p.primeLocation.toLowerCase().includes(search)
)
.includes(search)
);

displayProperties(filtered);

}
function loadLocations() {

    const datalist =
        document.getElementById("locationsList");

    datalist.innerHTML = "";

    Object.keys(primeLocations).forEach(city => {

        datalist.innerHTML += `
            <option value="${city}">
        `;

        primeLocations[city].forEach(location => {

            datalist.innerHTML += `
                <option value="${location}">
            `;

        });

    });

}

loadLocations();
function searchProperty() {

    const search =
        document.getElementById("searchInput")
        .value
        .trim();

    let selectedCity = "";
    let selectedPrimeLocation = "";

    // Check City
    Object.keys(primeLocations).forEach(city => {

        if (
            city.toLowerCase() ===
            search.toLowerCase()
        ) {

            selectedCity = city;

        }

        primeLocations[city].forEach(location => {

            if (
                location.toLowerCase() ===
                search.toLowerCase()
            ) {

                selectedCity = city;
                selectedPrimeLocation = location;

            }

        });

    });

    document.getElementById("cityFilter").value =
        selectedCity;

    updatePrimeLocations();

    document.getElementById(
        "primeLocationFilter"
    ).value = selectedPrimeLocation;

    filterProperties();
}
