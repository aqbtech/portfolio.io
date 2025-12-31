export interface Project {
    id: number;
    slug: string;
    title: string;
    summary: string;
    technologies: string[];
    thumbnail: string;
    gallery: { image: string; caption: string }[];
    github: string;
    live: string | null;
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "e-commerce-platform",
        title: "E-commerce Platform",
        summary: "An advanced e-commerce platform developed with Spring Boot and ReactJS, supporting ZaloPay integration, dynamic seller management, advanced search, real-time order tracking, and a fully responsive UI/UX. Optimized for performance, maintainability, and cloud deployment.",
        technologies: ["Java Spring Boot", "ReactJs", "Restful API", "JWT", "Spring data JPA", "MySQL", "ZaloPay", "Docker"],
        thumbnail: "/projects/e-commerce/images/1.home.png",
        gallery: [
            { image: "/projects/e-commerce/images/1.home.png", caption: "Home page" },
            { image: "/projects/e-commerce/images/2.detail.png", caption: "Product detail page" },
            { image: "/projects/e-commerce/images/3.cart.png", caption: "Shopping cart" },
            { image: "/projects/e-commerce/images/4.add-address.png", caption: "Add address page" },
            { image: "/projects/e-commerce/images/5.checkout-page.png", caption: "Checkout page" },
            { image: "/projects/e-commerce/images/6.payment-integration.png", caption: "Payment integration" },
            { image: "/projects/e-commerce/images/7.pay-success.png", caption: "Payment success page" },
            { image: "/projects/e-commerce/images/8.order-page.png", caption: "Order page after payment" },
            { image: "/projects/e-commerce/images/9.seller-product-management.png", caption: "Seller product management" },
            { image: "/projects/e-commerce/images/10.seller-add-product-modal.png", caption: "Seller add product modal" },
            { image: "/projects/e-commerce/images/11.seller-approve.png", caption: "Seller approve order" },
            { image: "/projects/e-commerce/images/12.seller-info.png", caption: "Seller information" },
            { image: "/projects/e-commerce/images/13.admin-health-page.png", caption: "Admin health page" }
        ],
        github: "https://github.com/aqbtech/HCMUT-E_commerce",
        live: "https://hcmut-e-commerce.vercel.app/"
    },
    {
        id: 2,
        slug: "hospital-management-system",
        title: "Hospital Management System",
        summary: "Designed and developed a hospital management system from scratch as a software architect, focusing on requirement engineering, modular architecture, and SOLID principles. Applied Domain-Driven Design (DDD) and actor-action modeling to build high-cohesion, loosely coupled services with clear domain boundaries.",
        technologies: ["Java Spring Boot", "Spring Cloud", "React", "MySQL", "JPA", "Eureka", "Docker"],
        thumbnail: "/projects/hms/images/1.patient-info.png",
        gallery: [
            { image: "/projects/hms/images/1.patient-info.png", caption: "Patient information" },
            { image: "/projects/hms/images/2.book-appointment.png", caption: "Book appointment" },
            { image: "/projects/hms/images/3.book-appointment-success.png", caption: "Book appointment success" },
            { image: "/projects/hms/images/6.overview.jpg", caption: "Architecture topology overview" },
            { image: "/projects/hms/images/7.tech.jpg", caption: "Architecture with tech stack" },
            { image: "/projects/hms/images/8.module-view.png", caption: "Module view" },
            { image: "/projects/hms/images/9.C&C.drawio.png", caption: "Component and connector view" },
            { image: "/projects/hms/images/10.deploy.jpg", caption: "Allocation view in deployment diagram" }
        ],
        github: "https://github.com/aqbtech/hospital-management-system",
        live: null
    },
    {
        id: 3,
        slug: "iot-watering-system",
        title: "IoT Watering System",
        summary: "Implemented an IoT watering system using Java Spring Boot, React, and MySQL, with Docker for containerization and MQTT for real-time communication. The system features a dashboard for monitoring and controlling watering activities, a history page for tracking past events, and a device management page.",
        technologies: ["Java Spring Boot", "React", "MySQL", "JPA", "Docker", "MQTT", "CoreIoT", "SSE"],
        thumbnail: "/projects/iot-watering/images/4.dashboard.jpg",
        gallery: [
            { image: "/projects/iot-watering/images/1.regis.jpg", caption: "Register page" },
            { image: "/projects/iot-watering/images/2.login.jpg", caption: "Login page" },
            { image: "/projects/iot-watering/images/3.listdvc.jpg", caption: "List device page" },
            { image: "/projects/iot-watering/images/4.dashboard.jpg", caption: "Dashboard" },
            { image: "/projects/iot-watering/images/5.history.jpg", caption: "History page" },
            { image: "/projects/iot-watering/images/6.pumpActivate.jpg", caption: "Activate pump" },
            { image: "/projects/iot-watering/images/7.pumpinac.jpg", caption: "Deactivate pump" },
            { image: "/projects/iot-watering/images/8.KT.jpg", caption: "System architecture overview" }
        ],
        github: "https://github.com/aqbtech/iot-watering",
        live: null
    },
    {
        id: 4,
        slug: "student-smart-printing-service",
        title: "Student Smart Printing Service",
        summary: "Developed a student smart printing service using Java Spring Boot, React, and MySQL, with JPA for data persistence and integrated with HCMUT-SSO for authentication. The system features a user-friendly interface for document management, print configuration, and real-time printing status tracking.",
        technologies: ["Java Spring Boot", "React", "MySQL", "JPA", "SSO"],
        thumbnail: "/projects/ssps/images/1.home-page.png",
        gallery: [
            { image: "/projects/ssps/images/1.home-page.png", caption: "Home page" },
            { image: "/projects/ssps/images/2.user-home-page.png", caption: "User home page" },
            { image: "/projects/ssps/images/3.user-document-page.png", caption: "User document list" },
            { image: "/projects/ssps/images/4.document-upload-success.png", caption: "User document upload success" },
            { image: "/projects/ssps/images/5.print-config.png", caption: "Print config" },
            { image: "/projects/ssps/images/6.print-history.png", caption: "Print history" },
            { image: "/projects/ssps/images/7.print-balance-minus.png", caption: "Print balance after printing" }
        ],
        github: "https://github.com/aqbtech/HCMUT_SSPS",
        live: null
    },
    {
        id: 5,
        slug: "gpa-calculator",
        title: "GPA Calculator",
        summary: "A simple GPA calculator. Developed a lightweight web application to help HCMUT students calculate and analyze their GPA for academic planning.",
        technologies: ["Next.js", "TypeScript", "Bootstrap"],
        thumbnail: "/projects/gpa-calculator/images/1.home-page.png",
        gallery: [
            { image: "/projects/gpa-calculator/images/1.home-page.png", caption: "Home page" },
            { image: "/projects/gpa-calculator/images/2.after-cal.png", caption: "Result page" },
            { image: "/projects/gpa-calculator/images/3.choose-course-want-to-improve.png", caption: "Choose course to improve" },
            { image: "/projects/gpa-calculator/images/4.stimulate-improve.png", caption: "Result after improvement" }
        ],
        github: "https://github.com/aqbtech/bk-cal-nextjs",
        live: "https://bk-cal-nextjs.vercel.app/"
    }
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}
