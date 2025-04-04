<<<<<<< HEAD
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const mongourl = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
    await mongoose.connect(mongourl);
}

main()
    .then((res) => {
        console.log("DATABASE CONNECTED SUCCESSFULLY")
    })
    .catch((err) => {
        console.log("There is something err " + err)
    });


let user1 = new Listing({
    title: "Taj residency",
    description: "fabulous hotels chains in india",
    image: {
        url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
        filename: "listing[image]",
    },
    geometry: { type: 'Point', coordinates: [ 72.88261000,19.07283000] },
    price: 1000,
    location: "Mumbai",
    owner: '66b1c83da4c0292e37d00095',
    category:"rooms",
    country: "India",

})
user1.save();
Listing.insertMany([
    {
        title: "Taj Mahal",
        description: "On the scenic banks of Gomti River, Taj Mahal Lucknow Gomti Nagar provides stylish rooms in downtown Lucknow. ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 80.92313000 ,26.83928000] },
        price: 1000,
        location: " LUCKNOW",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"rooms",
    },
    {
        title: " Saraca Hotel",
        description: "Featuring a bar, Saraca Hotel Lucknow is located in Lucknow in the Uttar Pradesh region, 4.7 km from Lucknow University and 2.9 km from Lucknow Junction Railway Station.. ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [80.92313000 ,26.83928000] },
        price: 1000,
        location: " LUCKNOW",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"iconiccities",
    },
    {
        title: " The St. Regis  Resort",
        description: "The St. Regis Goa Resort offers a luxury experience in South Goa, India, set amidst 49 acres of lush greenery ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 74.12399600,15.29932650] },
        price: 1000,
        location: "Goa",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"iconiccities",
    },
    {
        title: " The Oberoi Rajvilas",
        description: "The Oberoi Rajvilas Jaipur offers unique 5-star accommodation in Jaipur City ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 76.00000000  ,27.00000000] },
        price: 1000,
        location: "Jaipur",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"mountains",
    },
    {
        title: "IIDM ECO RESORT",
        description: "Situated in Lucknow, 11 km from Lucknow University, IIDM ECO RESORT features accommodation with a garden, free private parking, a shared lounge and a terrace ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [80.92313000 ,26.83928000] },
        price: 1000,
        location: " LUCKNOW",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"mountains",
    },
    {
        title: "The Imperial",
        description: "Located 1 km from New Delhi's City Centre and Business District, Hotel Imperial offers an outdoor pool and health club ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [77.10249020 ,28.70405920 ] },
        price: 1000,
        location: "Delhi",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"castle",
    },
    {
        title: " The Oberoi Amarvilas Agra",
        description: "Just 600 metres from the Taj Mahal, The Oberoi Amarvilas Agra boasts luxurious 5-star accommodation with a flat-screen TV. ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 78.01667000,27.18333000] },
        price: 1000,
        location: "Agra",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"castle",
    },
    {
        title: "Raffles Udaipur",
        description: "Raffles Udaipur features an outdoor swimming pool, fitness centre, a bar and garden in Lakāwās. ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 73.77000000,24.33000000] },
        price: 1000,
        location: "Udaipur",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"amazingpools",
    },
    {
        title: " Ginger House Museum Hotel",
        description: " Located in Cochin 1 km from Fort Cochin, The Museum Hotel features free WiFi access and free private parking.  ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 76.26022000 ,9.93988000] },
        price: 1000,
        location: "Cochin",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"amazingpools",
    },
    {
        title: " Storii By ITC Hotels",
        description: "Set in Dharamshala, 13 km from HPCA Stadium, Storii By ITC Hotels, Amoha Retreat Dharamshala offers accommodation with a garden, free private parking, a restaurant and a bar.",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 76.32013000,32.22006000] },
        price: 1000,
        location: "Dharmshala",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"camping",
    },
    {
        title: " Larisa Resort",
        description: " Offering an outdoor pool and a restaurant, La Ri Sa Resort is located 15.4 km from Manali. Free WiFi access is available in this resort.",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [77.17481000,32.25740000] },
        price: 1000,
        location: "Manali",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"camping",
    },
    {
        title: " The Grand Imperial - Heritage Hotel",
        description: "Situated in the heart of medieval Agra, Grand Imperial, a heritage hotel offers luxury accommodation with spa facilities, conference facilities and beautiful gardens, ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [78.01667000,27.18333000] },
        price: 1000,
        location: "Agra",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"farms",
    },
    {
        title: " Evolve Back",
        description: "  Offering a spa centre and hot tub, Evolve Back Hampi is located just 4 km from the UNESCO World Heritage Site of Hampi.",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [76.46030000,15.33520000] },
        price: 1000,
        location: "Hampi",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"farms",
    },
    {
        title: " The Taj Mahal Palace",
        description: " Built in 1903, the iconic Taj Mahal Palace stands majestically opposite the Gateway of India, overlooking the Arabian Sea.",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [72.88261000,19.07283000] },
        price: 1000,
        location: "Mumbai",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"arcticpools",
    },
    {
        title: " The Panoramic Getaway",
        description: "Offering two rooftop heated swimming pools separate for adults and families, two restaurants  ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [77.059723,10.089167] },
        price: 1000,
        location: "Munnar",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"arcticpools",
    },
    {
        title: " The Leela Palace",
        description: "Unwind in the lap of luxury at The Leela Palace Bengaluru Nestled amid lush gardens spread across 7 acres, ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [77.59369000, 12.97194000] },
        price: 1000,
        location: "Bengaluru",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"rooms",
    },
    {
        title: "BrijRama Palace",
        description: " Situated on its own ghat, BrijRama Palace – A Heritage Hotel was built in the 18th Century ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [83.01041000 ,25.31668000 ] },
        price: 1000,
        location: "Varansi",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"iconiccities",
    },
    {
        title: " Ranjit's Svaasa",
        description: "Housed in one of Amritsar's oldest mansions, Ranjit's Svaasa, a 200 year old Heritage Boutique Haveli is a luxurious spa retreat located just off Mall Road. ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [74.84000000,31.67000000] },
        price: 1000,
        location: "Amritsar",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"mountains",
    },
    {
        title: "  JW Marriott Goa",
        description: "JW Marriott Goa has an outdoor swimming pool, garden, a terrace and bar in Vagator. A hot tub and a car rental service are available for guests.",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 74.12399600,15.29932650] },
        price: 1000,
        location: "Vagator",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"castle",
    },
    {
        title: " The St. Regis",
        description: " Embodying the 110-year-old legacy of John Jacob Astor IV, our 5-star hotel in South Mumbai made its debut as the first St. Regis hotel in India.",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [72.88261000,19.07283000] },
        price: 1000,
        location: "Mumbai",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"farms",
    },
])
    .then((res) => {
        console.log("data is successfully added.")
    })
    .catch((err) => {
        console.log("there is error.")
=======
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const mongourl = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
    await mongoose.connect(mongourl);
}

main()
    .then((res) => {
        console.log("DATABASE CONNECTED SUCCESSFULLY")
    })
    .catch((err) => {
        console.log("There is something err " + err)
    });


let user1 = new Listing({
    title: "Taj residency",
    description: "fabulous hotels chains in india",
    image: {
        url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
        filename: "listing[image]",
    },
    geometry: { type: 'Point', coordinates: [ 72.88261000,19.07283000] },
    price: 1000,
    location: "Mumbai",
    owner: '66b1c83da4c0292e37d00095',
    category:"rooms",
    country: "India",

})
user1.save();
Listing.insertMany([
    {
        title: "Taj Mahal",
        description: "On the scenic banks of Gomti River, Taj Mahal Lucknow Gomti Nagar provides stylish rooms in downtown Lucknow. ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 80.92313000 ,26.83928000] },
        price: 1000,
        location: " LUCKNOW",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"rooms",
    },
    {
        title: " Saraca Hotel",
        description: "Featuring a bar, Saraca Hotel Lucknow is located in Lucknow in the Uttar Pradesh region, 4.7 km from Lucknow University and 2.9 km from Lucknow Junction Railway Station.. ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [80.92313000 ,26.83928000] },
        price: 1000,
        location: " LUCKNOW",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"iconiccities",
    },
    {
        title: " The St. Regis  Resort",
        description: "The St. Regis Goa Resort offers a luxury experience in South Goa, India, set amidst 49 acres of lush greenery ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 74.12399600,15.29932650] },
        price: 1000,
        location: "Goa",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"iconiccities",
    },
    {
        title: " The Oberoi Rajvilas",
        description: "The Oberoi Rajvilas Jaipur offers unique 5-star accommodation in Jaipur City ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 76.00000000  ,27.00000000] },
        price: 1000,
        location: "Jaipur",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"mountains",
    },
    {
        title: "IIDM ECO RESORT",
        description: "Situated in Lucknow, 11 km from Lucknow University, IIDM ECO RESORT features accommodation with a garden, free private parking, a shared lounge and a terrace ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [80.92313000 ,26.83928000] },
        price: 1000,
        location: " LUCKNOW",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"mountains",
    },
    {
        title: "The Imperial",
        description: "Located 1 km from New Delhi's City Centre and Business District, Hotel Imperial offers an outdoor pool and health club ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [77.10249020 ,28.70405920 ] },
        price: 1000,
        location: "Delhi",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"castle",
    },
    {
        title: " The Oberoi Amarvilas Agra",
        description: "Just 600 metres from the Taj Mahal, The Oberoi Amarvilas Agra boasts luxurious 5-star accommodation with a flat-screen TV. ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 78.01667000,27.18333000] },
        price: 1000,
        location: "Agra",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"castle",
    },
    {
        title: "Raffles Udaipur",
        description: "Raffles Udaipur features an outdoor swimming pool, fitness centre, a bar and garden in Lakāwās. ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 73.77000000,24.33000000] },
        price: 1000,
        location: "Udaipur",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"amazingpools",
    },
    {
        title: " Ginger House Museum Hotel",
        description: " Located in Cochin 1 km from Fort Cochin, The Museum Hotel features free WiFi access and free private parking.  ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 76.26022000 ,9.93988000] },
        price: 1000,
        location: "Cochin",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"amazingpools",
    },
    {
        title: " Storii By ITC Hotels",
        description: "Set in Dharamshala, 13 km from HPCA Stadium, Storii By ITC Hotels, Amoha Retreat Dharamshala offers accommodation with a garden, free private parking, a restaurant and a bar.",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 76.32013000,32.22006000] },
        price: 1000,
        location: "Dharmshala",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"camping",
    },
    {
        title: " Larisa Resort",
        description: " Offering an outdoor pool and a restaurant, La Ri Sa Resort is located 15.4 km from Manali. Free WiFi access is available in this resort.",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [77.17481000,32.25740000] },
        price: 1000,
        location: "Manali",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"camping",
    },
    {
        title: " The Grand Imperial - Heritage Hotel",
        description: "Situated in the heart of medieval Agra, Grand Imperial, a heritage hotel offers luxury accommodation with spa facilities, conference facilities and beautiful gardens, ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [78.01667000,27.18333000] },
        price: 1000,
        location: "Agra",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"farms",
    },
    {
        title: " Evolve Back",
        description: "  Offering a spa centre and hot tub, Evolve Back Hampi is located just 4 km from the UNESCO World Heritage Site of Hampi.",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [76.46030000,15.33520000] },
        price: 1000,
        location: "Hampi",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"farms",
    },
    {
        title: " The Taj Mahal Palace",
        description: " Built in 1903, the iconic Taj Mahal Palace stands majestically opposite the Gateway of India, overlooking the Arabian Sea.",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [72.88261000,19.07283000] },
        price: 1000,
        location: "Mumbai",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"arcticpools",
    },
    {
        title: " The Panoramic Getaway",
        description: "Offering two rooftop heated swimming pools separate for adults and families, two restaurants  ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [77.059723,10.089167] },
        price: 1000,
        location: "Munnar",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"arcticpools",
    },
    {
        title: " The Leela Palace",
        description: "Unwind in the lap of luxury at The Leela Palace Bengaluru Nestled amid lush gardens spread across 7 acres, ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [77.59369000, 12.97194000] },
        price: 1000,
        location: "Bengaluru",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"rooms",
    },
    {
        title: "BrijRama Palace",
        description: " Situated on its own ghat, BrijRama Palace – A Heritage Hotel was built in the 18th Century ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [83.01041000 ,25.31668000 ] },
        price: 1000,
        location: "Varansi",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"iconiccities",
    },
    {
        title: " Ranjit's Svaasa",
        description: "Housed in one of Amritsar's oldest mansions, Ranjit's Svaasa, a 200 year old Heritage Boutique Haveli is a luxurious spa retreat located just off Mall Road. ",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [74.84000000,31.67000000] },
        price: 1000,
        location: "Amritsar",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"mountains",
    },
    {
        title: "  JW Marriott Goa",
        description: "JW Marriott Goa has an outdoor swimming pool, garden, a terrace and bar in Vagator. A hot tub and a car rental service are available for guests.",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [ 74.12399600,15.29932650] },
        price: 1000,
        location: "Vagator",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"castle",
    },
    {
        title: " The St. Regis",
        description: " Embodying the 110-year-old legacy of John Jacob Astor IV, our 5-star hotel in South Mumbai made its debut as the first St. Regis hotel in India.",
        image: {
            url: "https://th.bing.com/th/id/OIP.vWx26V215U2-E-cH2Bvk4AHaE8?rs=1&pid=ImgDetMain",
            filename: "listing[image]",
        },
        geometry: { type: 'Point', coordinates: [72.88261000,19.07283000] },
        price: 1000,
        location: "Mumbai",
        owner: '66b1c83da4c0292e37d00095',
        country: "India",
        category:"farms",
    },
])
    .then((res) => {
        console.log("data is successfully added.")
    })
    .catch((err) => {
        console.log("there is error.")
>>>>>>> d158775 (Added my project folder)
    })