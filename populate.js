const Product = require('./models/Product');

// const products =[
//     {
//         "title": "avant-garde lamp",
//         "company": "Modenza",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//         "featured": true,
//         "publishedAt": "2023-08-10T10:07:44.157Z",
//         "category": "Kids",
//         "image": "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "17999",
//         "shipping": false,
//         "colors": [
//             "#33FF57",
//             "#3366FF"
//         ]
//     },
//     {
//         "title": "chic chair",
//         "company": "Luxora",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//         "featured": false,
//         "publishedAt": "2023-08-10T09:33:03.598Z",
//         "category": "Chairs",
//         "image": "https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "33999",
//         "shipping": true,
//         "colors": [
//             "#FF5733",
//             "#33FF57",
//             "#3366FF"
//         ]
//     },
//     {
//         "title": "coffee table",
//         "company": "Modenza",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//         "featured": true,
//         "publishedAt": "2023-08-02T14:32:05.491Z",
//         "category": "Tables",
//         "image": "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         "price": "17999",
//         "shipping": false,
//         "colors": [
//             "#FF5733",
//             "#FFFF00"
//         ]
//     },
//     {
//         "title": "comfy bed",
//         "company": "Homestead",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//         "featured": true,
//         "publishedAt": "2023-08-02T14:34:13.604Z",
//         "category": "Beds",
//         "image": "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "12999",
//         "shipping": false,
//         "colors": [
//             "#FF5733"
//         ]
//     },
//     {
//         "title": "contemporary sofa",
//         "company": "Comfora",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//         "featured": false,
//         "publishedAt": "2023-08-10T09:34:26.981Z",
//         "category": "Sofas",
//         "image": "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "15999",
//         "shipping": false,
//         "colors": [
//             "#FFFF00"
//         ]
//     },
//     {
//         "title": "cutting-edge bed",
//         "company": "Homestead",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//         "featured": false,
//         "publishedAt": "2023-08-10T10:09:01.135Z",
//         "category": "Beds",
//         "image": "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "8499",
//         "shipping": true,
//         "colors": [
//             "#FFFF00",
//             "#3366FF"
//         ]
//     },
//     {
//         "title": "futuristic shelves",
//         "company": "Luxora",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//         "featured": false,
//         "publishedAt": "2023-08-10T10:02:53.674Z",
//         "category": "Kids",
//         "image": "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "9499",
//         "shipping": true,
//         "colors": [
//             "#33FF57",
//             "#FFFF00"
//         ]
//     },
//     {
//         "title": "glass table",
//         "company": "Modenza",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//         "featured": false,
//         "publishedAt": "2023-08-10T10:10:48.858Z",
//         "category": "Tables",
//         "image": "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "15999",
//         "shipping": false,
//         "colors": [
//             "#FF5733",
//             "#3366FF"
//         ]
//     },
//     {
//         "title": "King Bed",
//         "company": "Homestead",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//         "featured": false,
//         "publishedAt": "2023-08-10T10:11:40.802Z",
//         "category": "Beds",
//         "image": "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "18999",
//         "shipping": true,
//         "colors": [
//             "#FF5733"
//         ]
//     },
//     {
//         "title": "Lounge Chair",
//         "company": "Luxora",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
//         "featured": false,
//         "publishedAt": "2023-08-10T10:13:31.792Z",
//         "category": "Chairs",
//         "image": "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "25999",
//         "shipping": false,
//         "colors": [
//             "#FF5733",
//             "#33FF57",
//             "#3366FF"
//         ]
//     }
// ]

// const products = [
//     {
//         "title": "Minimalist Shelves",
//         "company": "Artifex",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...",
//         "featured": false,
//         "publishedAt": "2023-08-10T09:31:45.900Z",
//         "category": "Kids",
//         "image": "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "43999",
//         "shipping": false,
//         "colors": [
//             "#FF5733",
//             "#FFFF00"
//         ]
//     },
//     {
//         "title": "modern sofa",
//         "company": "Comfora",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...",
//         "featured": false,
//         "publishedAt": "2023-08-02T14:25:28.344Z",
//         "category": "Sofas",
//         "image": "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//         "price": "29999",
//         "shipping": false,
//         "colors": [
//             "#FF5733",
//             "#33FF57",
//             "#FFFF00"
//         ]
//     },
//     {
//         "title": "modern table",
//         "company": "Modenza",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...",
//         "featured": false,
//         "publishedAt": "2023-08-08T14:02:33.536Z",
//         "category": "Tables",
//         "image": "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "38999",
//         "shipping": true,
//         "colors": [
//             "#33FF57",
//             "#3366FF"
//         ]
//     },
//     {
//         "title": "reclining sofa",
//         "company": "Comfora",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...",
//         "featured": false,
//         "publishedAt": "2023-08-10T10:06:01.438Z",
//         "category": "Sofas",
//         "image": "https://images.pexels.com/photos/4316737/pexels-photo-4316737.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "32999",
//         "shipping": false,
//         "colors": [
//             "#FF5733",
//             "#33FF57",
//             "#3366FF",
//             "#FFFF00"
//         ]
//     },
//     {
//         "title": "Sectional Sofa",
//         "company": "Comfora",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...",
//         "featured": false,
//         "publishedAt": "2023-08-10T10:14:16.909Z",
//         "category": "Sofas",
//         "image": "https://images.pexels.com/photos/4857775/pexels-photo-4857775.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "35999",
//         "shipping": true,
//         "colors": [
//             "#FF5733",
//             "#33FF57",
//             "#3366FF",
//             "#FFFF00"
//         ]
//     },
//     {
//         "title": "sleek bed",
//         "company": "Homestead",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...",
//         "featured": false,
//         "publishedAt": "2023-08-10T09:30:28.763Z",
//         "category": "Beds",
//         "image": "https://images.pexels.com/photos/16869701/pexels-photo-16869701/free-photo-of-modern-luxury-real-estate-property-interior-bedroom.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "53999",
//         "shipping": true,
//         "colors": [
//             "#FFFF00",
//             "#3366FF"
//         ]
//     },
//     {
//         "title": "sleek chair",
//         "company": "Luxora",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...",
//         "featured": false,
//         "publishedAt": "2023-08-01T11:15:39.281Z",
//         "category": "Chairs",
//         "image": "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "19999",
//         "shipping": false,
//         "colors": [
//             "#FF5733",
//             "#33FF57",
//             "#3366FF",
//             "#FFFF00"
//         ]
//     },
//     {
//         "title": "streamlined table",
//         "company": "Modenza",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...",
//         "featured": false,
//         "publishedAt": "2023-08-10T09:36:09.688Z",
//         "category": "Tables",
//         "image": "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "20999",
//         "shipping": true,
//         "colors": [
//             "#FF5733",
//             "#3366FF"
//         ]
//     },
//     {
//         "title": "stylish bed",
//         "company": "Homestead",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...",
//         "featured": false,
//         "publishedAt": "2023-08-10T10:01:23.986Z",
//         "category": "Beds",
//         "image": "https://images.pexels.com/photos/6758398/pexels-photo-6758398.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "16999",
//         "shipping": true,
//         "colors": [
//             "#FF5733"
//         ]
//     },
//     {
//         "title": "Toy Shelf",
//         "company": "Luxora",
//         "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...",
//         "featured": false,
//         "publishedAt": "2023-08-10T10:12:30.599Z",
//         "category": "Kids",
//         "image": "https://images.pexels.com/photos/3932929/pexels-photo-3932929.jpeg?auto=compress&cs=tinysrgb&w=1600",
//         "price": "7999",
//         "shipping": false,
//         "colors": [
//             "#33FF57",
//             "#FFFF00"
//         ]
//     }
// ];

const products = [
    {
        "title": "velvet sofa",
        "company": "Luxora",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...",
        "featured": false,
        "publishedAt": "2023-08-10T10:04:28.969Z",
        "category": "Chairs",
        "image": "https://images.pexels.com/photos/4916510/pexels-photo-4916510.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "price": "28999",
        "shipping": true,
        "colors": [
            "#FF5733",
            "#33FF57",
            "#FFFF00"
        ]
    },
    {
        "title": "wooden shelves",
        "company": "Artifex",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...",
        "featured": false,
        "publishedAt": "2023-08-02T14:36:46.122Z",
        "category": "Kids",
        "image": "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "price": "11999",
        "shipping": true,
        "colors": [
            "#33FF57",
            "#3366FF"
        ]
    }
]



const populateProducts = async(req,res)=>{
    let i;
    for(i=0;i<products.length;i++){
        const product = await Product.create(products[i]);
    }
    console.log("Completed");
}

module.exports = populateProducts;