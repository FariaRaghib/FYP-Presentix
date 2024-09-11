import service_1 from '../assets/Images/students-removebg-preview.png';
import service_2 from '../assets/Images/teachersnew-removebg-preview.png';
import service_3 from '../assets/Images/business-removebg-preview (2).png';
import vision_icon from '../assets/Images/vision-icon.png';
import mission_icon from '../assets/Images/mission-icon-png-28.jpg';
import value_icon from '../assets/Images/company-values-icon.jpg';
import "bootstrap-icons/font/bootstrap-icons.css";

import { faDashboard, faCog, faUpload, faUser } from '@fortawesome/free-solid-svg-icons';

export const pricing = [
    {
        title: "Basic Plan",
        price: '5$',
        Features: [
            '10 Videos Limitation',
            '24/7 Customer Support',
            '1 GB Storage',

        ]
    },
    {
        title: "Standard Plan",
        price: '10$',
        Features: [
            '100 Videos Limitation',
            '24/7 Customer Support',
            '10 GB Storage',
            'Integration with Apps',
        ]
    },
    {
        title: "Premium Plan",
        price: '15$',
        Features: [
            'Unlimited Videos Limitation',
            '24/7 Customer Support',
            '10 GB Storage',
            'Integration with Apps',
            'Collaboration Features',
   
        ]
    }

];

export const services = [
    {
        title: "Presentation Analysis",
        description: "AI-based testing for presentation analysis leverages advanced technologies such as Automated Speech Recognition (ASR), Natural Language Processing (NLP), and Computer Vision to evaluate various aspects of presentations. It automates tasks like transcribing spoken words, analyzing text content for sentiment and themes, assessing visual elements, and examining the overall structure of presentations. This innovative approach ensures efficient and thorough evaluation, providing insights into both verbal and visual components. With AI testing, presentations can be objectively analyzed for quality, coherence, and audience impact, streamlining the assessment process.",
        img: service_1,
    },
    {
        title: "Interview Assistant",
        description: "AI-based testing for presentation analysis leverages advanced technologies such as Automated Speech Recognition (ASR), Natural Language Processing (NLP), and Computer Vision to evaluate various aspects of presentations. It automates tasks like transcribing spoken words, analyzing text content for sentiment and themes, assessing visual elements, and examining the overall structure of presentations. This innovative approach ensures efficient and thorough evaluation, providing insights into both verbal and visual components. With AI testing, presentations can be objectively analyzed for quality, coherence, and audience impact, streamlining the assessment process.",
        img: service_2,
    },
    {
        title: "IELTS Preparation",
        description: "AI-based testing for presentation analysis leverages advanced technologies such as Automated Speech Recognition (ASR), Natural Language Processing (NLP), and Computer Vision to evaluate various aspects of presentations. It automates tasks like transcribing spoken words, analyzing text content for sentiment and themes, assessing visual elements, and examining the overall structure of presentations. This innovative approach ensures efficient and thorough evaluation, providing insights into both verbal and visual components. With AI testing, presentations can be objectively analyzed for quality, coherence, and audience impact, streamlining the assessment process.",
        img: service_3,
    },
];
export const about_main = [
    {
        title: "Our Vision",
        description: "At Presntix, our vision is to revolutionize the way people learn and interact with educational content. We strive to provide innovative solutions that enhance the learning experience, making it more engaging and accessible for everyone.",
        icon: vision_icon,
    },
    {
        title: "Mission Statement",
        description: "Our mission is to empower learners, educators, and professionals by leveraging cutting-edge technologies. We are committed to creating a positive impact on education through AI-driven tools, ensuring that individuals can develop their skills and reach their full potential.",
        icon : mission_icon,
     },
    {
        title: "Company Values",
        description: "Integrity, Innovation, and Inclusivity are the core values that guide us. We believe in maintaining the highest standards of integrity, fostering continuous innovation, and creating an inclusive environment that values diversity and promotes equal opportunities for all.",
        icon : value_icon,
    }
]

export const sidebar_menu = [

    {
        icon : "bi bi-speedometer2",
        menu_item : "Dashboard",
        link : "/dashboard"
    },
    {   
        icon : "bi bi-cloud-upload",
        menu_item : "Upload Video",
        link : "/dashboard/upload_video"
    },    
    {   
        icon : "bi bi-pie-chart",
        menu_item : "Results",
        link : "/dashboard/results"
    },    
    {   
        icon : "bi bi-person-gear",
        menu_item : "Account",
        link : "/dashboard/accountsettings"
    },
    {   
        icon : "bi bi-gear",
        menu_item : "Settings",
        link : "dashboard/settings"
    },

]

export const footer_menu_1 = [
    {
  title : "Quick Links",
  menu_items: [
    {
        menu_item : "Home",
        link : "/"
    },
    {
        menu_item : "Features",
        link : "/features"
    },    
    {
        menu_item : "Services",
        link : "/services"
    },    
    {
        menu_item : "Pricings",
        link : "/pricings"
    },
    {
        menu_item : "Contact",
        link : "/contact-us"
    },
    {
        menu_item : "About",
        link : "/about-us"
    },
]
}
]
