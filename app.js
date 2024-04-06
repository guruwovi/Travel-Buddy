"use strict";

const SP_API_KEYS = ["ik2DO7MCeDQS_M6XPizhZyto3FoQ_ELhcwQ6iS0ydSE", "JcQQ-Mx43eh9Mb9rC4e87lBzIwkEHekgQaKWHbtr3eg"];

const cityData = {
    Almora: {
        description: 'Almora is a hill station in Uttarakhand, set on a 5 km long horse saddle shaped ridge. It is located at an altitude of 1638 meters (5,500 feet) above sea level and is spread across a 5 km ridge atop Kashaya Hill. The town is surrounded by thick forests of pine and fir trees. The snow-capped Himalayas in the background offer a view of the beautiful Nanda Devi, Trishul, and Panchchuli peaks.',
        languagesSpoken: ['Hindi', 'Kumaoni'],
        faqs: [
            {
                question: 'What is the best time to visit Almora?',
                answer: 'The best time to visit Almora is from March to May. The weather is pleasant during this time and the temperature ranges between 15°C to 30°C. This is the perfect time to explore the town and enjoy the scenic beauty.'
            },
            {
                question: 'What are the popular places to visit in Almora?',
                answer: 'The popular places to visit in Almora are Kasar Devi Temple, Lal Bazaar, Dwarahat Village, and Gobind Vallabh Pant Museum.'
            },
            {
                question: 'What are the famous dishes of Almora?',
                answer: 'The famous dishes of Almora are Bhaang Ki Khatai, Aloo Ke Gutke, Singal, and Kappa.'
            }
        ]
    },
    Dehradun: {
        description: 'Dehradun is the capital of Uttarakhand and is one of the most beautiful cities in India. It is located in the Doon Valley on the foothills of the Himalayas. The city is known for its pleasant climate, beautiful landscapes, and rich cultural heritage. Dehradun is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Garhwali'],
        faqs: [
            {
                question: 'What is the best time to visit Dehradun?',
                answer: 'The best time to visit Dehradun is from March to June and from September to November. The weather is pleasant during these months and the temperature ranges between 17°C to 35°C.'
            },
            {
                question: 'What are the popular places to visit in Dehradun?',
                answer: 'The popular places to visit in Dehradun are Robber\'s Cave, Sahastradhara, Mindrolling Monastery, Lacchiwala, Har Ki Dun, and Tapovan Temple.'
            },
            {
                question: 'What are the famous dishes of Dehradun?',
                answer: 'The famous dishes of Dehradun are Kandalee Ka Saag, Gahat Ki Dal, Aloo Ke Gutke, and Kafuli.'
            }
        ]
    },
    Haldwani: {
        description: 'Haldwani is a city in the Nainital district of Uttarakhand and is one of the largest cities in the Kumaon region. It is located at the foothills of the Himalayas and is known for its scenic beauty and pleasant climate. Haldwani is also an important commercial and educational hub in the region and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Kumaoni'],
        faqs: [
            {
                question: 'What is the best time to visit Haldwani?',
                answer: 'The best time to visit Haldwani is from March to May and from September to November. The weather is pleasant during these months and the temperature ranges between 15°C to 30°C.'
            },
            {
                question: 'What are the popular places to visit in Haldwani?',
                answer: 'The popular places to visit in Haldwani are Binsar Wildlife Sanctuary, Kainchi Dham, Naina Devi Temple, and Naukuchiatal Lake.'
            },
            {
                question: 'What are the famous dishes of Haldwani?',
                answer: 'The famous dishes of Haldwani are Bhatt Ki Churkani, Aloo Ke Gutke, Bhang Ki Chutney, and Kappa.'
            }
        ]
    },
    Haridwar: {
        description: 'Haridwar is one of the seven holiest places in India and is located in the state of Uttarakhand. It is situated on the banks of the Ganges River and is known for its spiritual significance and cultural heritage. Haridwar is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Garhwali'],
        faqs: [
            {
                question: 'What is the best time to visit Haridwar?',
                answer: 'The best time to visit Haridwar is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Haridwar?',
                answer: 'The popular places to visit in Haridwar are Har Ki Pauri, Chandi Devi Temple, Mansa Devi Temple, and Bharat Mata Mandir.'
            },
            {
                question: 'What are the famous dishes of Haridwar?',
                answer: 'The famous dishes of Haridwar are Aloo Puri, Kachori Sabzi, Jalebi, and Lassi.'
            }
        ]
    },
    Joshimath: {
        description: 'Joshimath is a small town in the Chamoli district of Uttarakhand and is located at an altitude of 1,890 meters (6,200 feet) above sea level. It is situated at the confluence of the Alaknanda and Dhauliganga rivers and is known for its scenic beauty and religious significance. Joshimath is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Garhwali'],
        faqs: [
            {
                question: 'What is the best time to visit Joshimath?',
                answer: 'The best time to visit Joshimath is from March to June and from September to November. The weather is pleasant during these months and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Joshimath?',
                answer: 'The popular places to visit in Joshimath are Auli, Nanda Devi National Park, Valley of Flowers, and Badrinath Temple.'
            },
            {
                question: 'What are the famous dishes of Joshimath?',
                answer: 'The famous dishes of Joshimath are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Kashipur: {
        description: 'Kashipur is a city in the Udham Singh Nagar district of Uttarakhand and is located at an altitude of 218 meters (715 feet) above sea level. It is situated on the banks of the Ramganga River and is known for its scenic beauty and historical significance. Kashipur is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Kumaoni'],
        faqs: [
            {
                question: 'What is the best time to visit Kashipur?',
                answer: 'The best time to visit Kashipur is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Kashipur?',
                answer: 'The popular places to visit in Kashipur are Garjiya Devi Temple, Corbett Falls, Jim Corbett National Park, and Dhangarhi Museum.'
            },
            {
                question: 'What are the famous dishes of Kashipur?',
                answer: 'The famous dishes of Kashipur are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Khatima: {
        description: 'Khatima is a city in the Udham Singh Nagar district of Uttarakhand and is located at an altitude of 298 meters (978 feet) above sea level. It is situated on the banks of the Sharda River and is known for its scenic beauty and historical significance. Khatima is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Kumaoni'],
        faqs: [
            {
                question: 'What is the best time to visit Khatima?',
                answer: 'The best time to visit Khatima is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Khatima?',
                answer: 'The popular places to visit in Khatima are Purnagiri Temple, Gangolihat, Champawat, and Nainital.'
            },
            {
                question: 'What are the famous dishes of Khatima?',
                answer: 'The famous dishes of Khatima are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Kotdwar: {
        description: 'Kotdwar is a city in the Pauri Garhwal district of Uttarakhand and is located at an altitude of 396 meters (1,299 feet) above sea level. It is situated on the banks of the Khoh River and is known for its scenic beauty and historical significance. Kotdwar is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Garhwali'],
        faqs: [
            {
                question: 'What is the best time to visit Kotdwar?',
                answer: 'The best time to visit Kotdwar is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Kotdwar?',
                answer: 'The popular places to visit in Kotdwar are Sidhbali Temple, Kanvashram, Durga Devi Temple, and Durga Devi Temple.'
            },
            {
                question: 'What are the famous dishes of Kotdwar?',
                answer: 'The famous dishes of Kotdwar are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Mussoorie: {
        description: 'Mussoorie is a hill station in Uttarakhand and is located at an altitude of 1,880 meters (6,170 feet) above sea level. It is situated on the foothills of the Himalayas and is known for its scenic beauty and pleasant climate. Mussoorie is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Garhwali'],
        faqs: [
            {
                question: 'What is the best time to visit Mussoorie?',
                answer: 'The best time to visit Mussoorie is from March to June and from September to November. The weather is pleasant during these months and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Mussoorie?',
                answer: 'The popular places to visit in Mussoorie are Kempty Falls, Gun Hill, Mall Road, and Lal Tibba.'
            },
            {
                question: 'What are the famous dishes of Mussoorie?',
                answer: 'The famous dishes of Mussoorie are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Nainital: {
        description: 'Nainital is a hill station in Uttarakhand and is located at an altitude of 2,084 meters (6,837 feet) above sea level. It is situated in the Kumaon region and is known for its scenic beauty and pleasant climate. Nainital is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Kumaoni'],
        faqs: [
            {
                question: 'What is the best time to visit Nainital?',
                answer: 'The best time to visit Nainital is from March to June and from September to November. The weather is pleasant during these months and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Nainital?',
                answer: 'The popular places to visit in Nainital are Naini Lake, Naina Devi Temple, Snow View Point, and Tiffin Top.'
            },
            {
                question: 'What are the famous dishes of Nainital?',
                answer: 'The famous dishes of Nainital are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Pantnagar: {
        description: 'Pantnagar is a town in the Udham Singh Nagar district of Uttarakhand and is located at an altitude of 243 meters (797 feet) above sea level. It is situated on the banks of the Gaula River and is known for its scenic beauty and historical significance. Pantnagar is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Kumaoni'],
        faqs: [
            {
                question: 'What is the best time to visit Pantnagar?',
                answer: 'The best time to visit Pantnagar is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Pantnagar?',
                answer: 'The popular places to visit in Pantnagar are Gaula River, Pantnagar University, Giri Sarovar, and Corbett Museum.'
            },
            {
                question: 'What are the famous dishes of Pantnagar?',
                answer: 'The famous dishes of Pantnagar are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Pauri: {
        description: 'Pauri is a town in the Pauri Garhwal district of Uttarakhand and is located at an altitude of 1,814 meters (5,951 feet) above sea level. It is situated on the banks of the Khoh River and is known for its scenic beauty and historical significance. Pauri is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Garhwali'],
        faqs: [
            {
                question: 'What is the best time to visit Pauri?',
                answer: 'The best time to visit Pauri is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Pauri?',
                answer: 'The popular places to visit in Pauri are Kyunkaleshwar Mahadev Temple, Jwalpa Devi Temple, Kandoliya Temple, and Doodhatoli.'
            },
            {
                question: 'What are the famous dishes of Pauri?',
                answer: 'The famous dishes of Pauri are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Purola: {
        description: 'Purola is a town in the Uttarkashi district of Uttarakhand and is located at an altitude of 1,524 meters (5,000 feet) above sea level. It is situated on the banks of the Tons River and is known for its scenic beauty and historical significance. Purola is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Garhwali'],
        faqs: [
            {
                question: 'What is the best time to visit Purola?',
                answer: 'The best time to visit Purola is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Purola?',
                answer: 'The popular places to visit in Purola are Har Ki Dun, Kedarkantha Peak, Rupin Pass, and Mori.'
            },
            {
                question: 'What are the famous dishes of Purola?',
                answer: 'The famous dishes of Purola are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Ramnagar: {
        description: 'Ramnagar is a city in the Nainital district of Uttarakhand and is located at an altitude of 345 meters (1,132 feet) above sea level. It is situated on the banks of the Kosi River and is known for its scenic beauty and historical significance. Ramnagar is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Kumaoni'],
        faqs: [
            {
                question: 'What is the best time to visit Ramnagar?',
                answer: 'The best time to visit Ramnagar is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Ramnagar?',
                answer: 'The popular places to visit in Ramnagar are Jim Corbett National Park, Garjiya Devi Temple, Corbett Falls, and Dhangarhi Museum.'
            },
            {
                question: 'What are the famous dishes of Ramnagar?',
                answer: 'The famous dishes of Ramnagar are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Ranikhet: {
        description: 'Ranikhet is a hill station in the Almora district of Uttarakhand and is located at an altitude of 1,869 meters (6,132 feet) above sea level. It is situated on the banks of the Kosi River and is known for its scenic beauty and historical significance. Ranikhet is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Kumaoni'],
        faqs: [
            {
                question: 'What is the best time to visit Ranikhet?',
                answer: 'The best time to visit Ranikhet is from March to June and from September to November. The weather is pleasant during these months and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Ranikhet?',
                answer: 'The popular places to visit in Ranikhet are Jhula Devi Temple, Mankameshwar Temple, Chaubatia Gardens, and Haidakhan Babaji Temple.'
            },
            {
                question: 'What are the famous dishes of Ranikhet?',
                answer: 'The famous dishes of Ranikhet are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Rishikesh: {
        description: 'Rishikesh is a city in the Dehradun district of Uttarakhand and is located at an altitude of 372 meters (1,220 feet) above sea level. It is situated on the banks of the Ganges River and is known for its spiritual significance and cultural heritage. Rishikesh is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Garhwali'],
        faqs: [
            {
                question: 'What is the best time to visit Rishikesh?',
                answer: 'The best time to visit Rishikesh is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Rishikesh?',
                answer: 'The popular places to visit in Rishikesh are Laxman Jhula, Triveni Ghat, Neelkanth Mahadev Temple, and The Beatles Ashram.'
            },
            {
                question: 'What are the famous dishes of Rishikesh?',
                answer: 'The famous dishes of Rishikesh are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Roorkee: {
        description: 'Roorkee is a city in the Haridwar district of Uttarakhand and is located at an altitude of 268 meters (879 feet) above sea level. It is situated on the banks of the Ganges River and is known for its scenic beauty and historical significance. Roorkee is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Garhwali'],
        faqs: [
            {
                question: 'What is the best time to visit Roorkee?',
                answer: 'The best time to visit Roorkee is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Roorkee?',
                answer: 'The popular places to visit in Roorkee are IIT Roorkee, Solani Aqueduct, Roorkee Cantonment, and Roorkee Group Museum & Archives.'
            },
            {
                question: 'What are the famous dishes of Roorkee?',
                answer: 'The famous dishes of Roorkee are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    'Srinagar Garhwal': {
        description: 'Srinagar Garhwal is a city in the Pauri Garhwal district of Uttarakhand and is located at an altitude of 560 meters (1,837 feet) above sea level. It is situated on the banks of the Alaknanda River and is known for its scenic beauty and historical significance. Srinagar Garhwal is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Garhwali'],
        faqs: [
            {
                question: 'What is the best time to visit Srinagar Garhwal?',
                answer: 'The best time to visit Srinagar Garhwal is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Srinagar Garhwal?',
                answer: 'The popular places to visit in Srinagar Garhwal are Kamleshwar Mahadev Temple, Dhari Devi Temple, Kanvashram, and Kandoliya Temple.'
            },
            {
                question: 'What are the famous dishes of Srinagar Garhwal?',
                answer: 'The famous dishes of Srinagar Garhwal are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    Uttarkashi: {
        description: 'Uttarkashi is a town in the Uttarkashi district of Uttarakhand and is located at an altitude of 1,165 meters (3,822 feet) above sea level. It is situated on the banks of the Bhagirathi River and is known for its scenic beauty and historical significance. Uttarkashi is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Garhwali'],
        faqs: [
            {
                question: 'What is the best time to visit Uttarkashi?',
                answer: 'The best time to visit Uttarkashi is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Uttarkashi?',
                answer: 'The popular places to visit in Uttarkashi are Vishwanath Temple, Nehru Institute of Mountaineering, Dayara Bugyal, and Maneri Dam.'
            },
            {
                question: 'What are the famous dishes of Uttarkashi?',
                answer: 'The famous dishes of Uttarkashi are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    },
    'Vikas Nagar': {
        description: 'Vikas Nagar is a town in the Dehradun district of Uttarakhand and is located at an altitude of 1,100 meters (3,609 feet) above sea level. It is situated on the banks of the Song River and is known for its scenic beauty and historical significance. Vikas Nagar is also a popular tourist destination and offers a wide range of attractions for visitors.',
        languagesSpoken: ['Hindi', 'Garhwali'],
        faqs: [
            {
                question: 'What is the best time to visit Vikas Nagar?',
                answer: 'The best time to visit Vikas Nagar is from October to March. The weather is pleasant during this time and the temperature ranges between 10°C to 25°C.'
            },
            {
                question: 'What are the popular places to visit in Vikas Nagar?',
                answer: 'The popular places to visit in Vikas Nagar are Lachhiwala, Malsi Deer Park, Sahastradhara, and Robber’s Cave.'
            },
            {
                question: 'What are the famous dishes of Vikas Nagar?',
                answer: 'The famous dishes of Vikas Nagar are Aloo Ke Gutke, Bhatt Ki Churkani, Kappa, and Singal.'
            }
        ]
    }
};

const uttarakhandCities = {
    Almora: ['Kasar Devi Temple', 'Lal Bazaar', 'Dwarahat Village', 'Gobind Vallabh Pant Museum'],
    Dehradun: ["Robber's Cave", 'Sahastradhara', 'Mindrolling Monastery', 'Lacchiwala', 'Har Ki Dun', 'Tapovan Temple'],
    Haldwani: ['Binsar Wildlife Sanctuary', 'Kainchi Dham', 'Naina Devi Temple', 'Naukuchiatal Lake'],
    Haridwar: ['Har Ki Pauri', 'Chandi Devi Temple', 'Mansa Devi Temple', 'Bharat Mata Mandir'],
    Joshimath: ['Auli', 'Nanda Devi National Park', 'Valley of Flowers', 'Badrinath Temple'],
    Kashipur: ['Garjiya Devi Temple', 'Corbett Falls', 'Jim Corbett National Park', 'Dhangarhi Museum'],
    Khatima: ['Purnagiri Temple', 'Gangolihat', 'Champawat', 'Nainital'],
    Kotdwar: ['Sidhbali Temple', 'Kanvashram', 'Durga Devi Temple', 'Durga Devi Temple'],
    Mussoorie: ['Kempty Falls', 'Gun Hill', 'Mall Road', 'Lal Tibba'],
    Nainital: ['Naini Lake', 'Naina Devi Temple', 'Snow View Point', 'Tiffin Top'],
    Pantnagar: ['Gaula River', 'Pantnagar University', 'Giri Sarovar', 'Corbett Museum'],
    Pauri: ['Kyunkaleshwar Mahadev Temple', 'Jwalpa Devi Temple', 'Kandoliya Temple', 'Doodhatoli'],
    Purola: ['Har Ki Dun', 'Kedarkantha Peak', 'Rupin Pass', 'Mori'],
    Ramnagar: ['Jim Corbett National Park', 'Garjiya Devi Temple', 'Corbett Falls', 'Dhangarhi Museum'],
    Ranikhet: ['Jhula Devi Temple', 'Mankameshwar Temple', 'Chaubatia Gardens', 'Haidakhan Babaji Temple'],
    Rishikesh: ['Laxman Jhula', 'Triveni Ghat', 'Neelkanth Mahadev Temple', 'The Beatles Ashram'],
    Roorkee: ['IIT Roorkee', 'Solani Aqueduct', 'Roorkee Cantonment', 'Roorkee Group Museum & Archives'],
    'Srinagar Garhwal': ['Kamleshwar Mahadev Temple', 'Dhari Devi Temple', 'Kanvashram', 'Kandoliya Temple'],
    Uttarkashi: ['Vishwanath Temple', 'Nehru Institute of Mountaineering', 'Dayara Bugyal', 'Maneri Dam'],
    'Vikas Nagar': ['Lachhiwala', 'Malsi Deer Park', 'Sahastradhara', 'Robber’s Cave']
};

// Get city from url params
const urlParams = new URLSearchParams(window.location.search);
const city = urlParams.get('city');


// Add Data to DOM
const cityDetails = cityData[city];

const cityNameEl = document.querySelector(".cityDrop p");
cityNameEl.textContent = city;

const aboutEl = document.querySelector(".about p");
aboutEl.textContent = cityDetails.description;

const langEl = document.querySelector(".langGroups");
langEl.innerHTML = "";
cityDetails.languagesSpoken.forEach((lang) => {
    langEl.insertAdjacentHTML("beforeend", `<li>${lang}</li>`);
})

const faqBox = document.querySelector(".faqBox");
faqBox.innerHTML = "";
cityDetails.faqs.forEach((faq) => {
    faqBox.insertAdjacentHTML("beforeend", `
    <div class="faqCard">
    <p class="question">
        ${faq.question}
    </p>
    <p class="answer">
        ${faq.answer}
    </p>
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M38.3175 1.32411C36.7037 -0.289679 34.0968 -0.289679 32.5244 1.32411L19.8623 13.9862L7.20022 1.32411C5.58643 -0.289679 2.97954 -0.289679 1.40712 1.32411C-0.206671 2.93791 -0.206671 5.50342 1.40712 7.11722L16.9657 22.6758C17.7519 23.462 18.7864 23.8758 19.8623 23.8758C20.9382 23.8758 22.014 23.462 22.7588 22.6758L38.3175 7.11722C39.9313 5.50342 39.9313 2.93791 38.3175 1.32411Z"
            fill="#363636" />
    </svg>
</div>
    `)
})

// ----------------------------------------------
// FAQ Toggle Functionality
const faqToggles = document.querySelectorAll(".faqCard svg");
faqToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
        toggle.classList.toggle("rotate");
        toggle.parentElement.classList.toggle("show");
    });
});

// ----------------------------------------------


// Insert Popular Places to Visit

async function getImageUrlFromUnsplash(query) {
    const API_KEY = "jbuFtvjvekr-JpTVuL-hOKF6_VfbvbuIFcAlV2bWlDQ";
    // const API_KEY = SP_API_KEYS[0];
    // const API_KEY = SP_API_KEYS[1];
    const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.urls.regular;
}

const popularPlaces = uttarakhandCities[city];
const pvBox = document.querySelector('.pvBox');
popularPlaces.forEach(async (place) => {
    let imgUrl = "";
    try {
        imgUrl = await getImageUrlFromUnsplash("Uttarakhand");
    }
    catch {
        imgUrl = "";
    }
    const pvCard = `<div class="pvCard">
                    <img src="${imgUrl}" alt="" class="img">
                    <div class="infoBox">
                        <div>
                            <p class="pclName">${place}</p>
                            <p class="address">${city}, Uttarakhand</p>
                        </div>
                        <img src="assets/wl.png" class="wishList">
                    </div>
                </div>`;

    pvBox.insertAdjacentHTML('beforeend', pvCard);
});
