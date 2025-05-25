// Project data
const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        summary: "An advanced e-commerce platform developed with Spring Boot and ReactJS, supporting ZaloPay integration, dynamic seller management, advanced search, real-time order tracking, and a fully responsive UI/UX. Optimized for performance, maintainability, and cloud deployment.",
        technologies: ["Java Spring Boot", "ReactJs", "Restful API", "JWT", "Spring data JPA", "MySQL", "ZaloPay", "Docker"],
        thumbnail: "projects/e-commerce/images/1.home.png",        
        gallery: [
            {
                image: "projects/e-commerce/images/1.home.png",
                caption: "Home page"
            },
            {
                image: "projects/e-commerce/images/2.detail.png",
                caption: "Product detail page"
            },
            {
                image: "projects/e-commerce/images/3.cart.png",
                caption: "Shopping cart"
            },
            {
                image: "projects/e-commerce/images/4.add-address.png",
                caption: "Add address page"
            },
            {
                image: "projects/e-commerce/images/5.checkout-page.png",
                caption: "Checkout page"
            },
            {
                image: "projects/e-commerce/images/6.payment-integration.png",
                caption: "Payment integration"
            },
            {
                image: "projects/e-commerce/images/7.pay-success.png",
                caption: "Payment success page"
            },
            {
                image: "projects/e-commerce/images/8.order-page.png",
                caption: "Order page after payment"
            },
            {
                image: "projects/e-commerce/images/9.seller-product-management.png",
                caption: "Seller product management"
            },
            {
                image: "projects/e-commerce/images/10.seller-add-product-modal.png",
                caption: "Seller add product modal"
            },
            {
                image: "projects/e-commerce/images/11.seller-approve.png",
                caption: "Seller approve order"
            },
            {
                image: "projects/e-commerce/images/12.seller-info.png",
                caption: "Seller information"
            },
            {
                image: "projects/e-commerce/images/13.admin-health-page.png",
                caption: "Admin health page"
            }
        ],
        github: "https://github.com/aqbtech/HCMUT-E_commerce",
        live: "https://hcmut-e-commerce.vercel.app/"
    },
    {
        id: 2,
        title: "Hospital Management System",
        summary: "Designed and developed a hospital management system from scratch as a software architect, focusing on requirement engineering, modular architecture, and SOLID principles. Applied Domain-Driven Design (DDD) and actor-action modeling to build high-cohesion, loosely coupled services with clear domain boundaries. Implemented a service-based architecture using Spring Boot, Spring Cloud, and React, with Docker to simulate cloud-native deployment. Integrated real-time collaboration features to enhance hospital staff coordination and operational efficiency.",
        technologies: ["Java Spring Boot", "Spring Cloud", "React", "MySQL", "JPA", "Eureka", "Docker"],
        thumbnail: "projects/hms/images/1.patient-info.png",
        gallery: [
            {
                image: "projects/hms/images/1.patient-info.png",
                caption: "Patient information"
            },
            {
                image: "projects/hms/images/2.book-appointment.png",
                caption: "Book appointment"
            },
            {
                image: "projects/hms/images/3.book-appointment-success.png",
                caption: "Book appointment success"
            },
            {
                image: "projects/hms/images/6.overview.jpg",
                caption: "Architecture topology overview"
            },
            {
                image: "projects/hms/images/7.tech.jpg",
                caption: "Architecture with tech stack"
            },
            {
                image: "projects/hms/images/8.module-view.png",
                caption: "Module view"
            },
            {
                image: "projects/hms/images/9.C&C.drawio.png",
                caption: "Component and connector view"
            },
            {
                image: "projects/hms/images/10.deploy.jpg",
                caption: "Allocation view in deployment diagram"
            }
        ],
        github: "https://github.com/aqbtech/hospital-management-system",
        live: "none"
    },
    {
        id: 3,
        title: "IoT watering",
        summary: "Implemented an IoT watering system using Java Spring Boot, React, and MySQL, with Docker for containerization and MQTT for real-time communication. The system features a dashboard for monitoring and controlling watering activities, a history page for tracking past events, and a device management page for adding and activating devices. The solution utilizes CoreIoT (ThinkBoard) for hardware integration and Server-send Events for real-time updates, providing a seamless user experience for managing and monitoring IoT devices.",
        technologies: ["Java Spring Boot", "React", "MySQL", "JPA", "Docker", "MQTT", "CoreIoT(ThinkBoard)", "Server-send Events"],
        thumbnail: "projects/iot-watering/images/4.dashboard.jpg",
        gallery: [
            {
                image: "projects/iot-watering/images/1.regis.jpg",
                caption: "Register page"
            },
            {
                image: "projects/iot-watering/images/2.login.jpg",
                caption: "Login page"
            },
            {
                image: "projects/iot-watering/images/3.listdvc.jpg",
                caption: "List device page"
            },
            {
                image: "projects/iot-watering/images/4.dashboard.jpg",
                caption: "Dashboard"
            },
            {
                image: "projects/iot-watering/images/5.history.jpg",
                caption: "History page"
            },
            {
                image: "projects/iot-watering/images/6.pumpActivate.jpg",
                caption: "Activate pump"
            },
            {
                image: "projects/iot-watering/images/7.pumpinac.jpg",
                caption: "Deactivate pump"
            },
            {
                image: "projects/iot-watering/images/8.KT.jpg",
                caption: "System architecture overview(module view)"
            }
        ],
        github: "https://github.com/aqbtech/iot-watering",
        live: "none"
    },
    {
        id: 4,
        title: "Student Smart Printing Service",
        summary: "Developed a student smart printing service using Java Spring Boot, React, and MySQL, with JPA for data persistence and integrated with HCMUT-SSO for authentication. The system features a user-friendly interface for document management, print configuration, and real-time printing status tracking. The solution utilizes Spring Boot for backend development, React for frontend implementation, and MySQL for database management, providing a seamless and efficient printing experience for students.",
        technologies: ["Java Spring Boot", "React", "MySQL", "JPA", "SSO"],
        thumbnail: "projects/ssps/images/1.home-page.png",
        gallery: [
            {
                image: "projects/ssps/images/1.home-page.png",
                caption: "Home page"
            },
            {
                image: "projects/ssps/images/2.user-home-page.png",
                caption: "User home page"
            },
            {
                image: "projects/ssps/images/3.user-document-page.png",
                caption: "User document list"
            },
            {
                image: "projects/ssps/images/4.document-upload-success.png",
                caption: "User document upload success"
            },
            {
                image: "projects/ssps/images/5.print-config.png",
                caption: "Print config"
            },
            {
                image: "projects/ssps/images/6.print-history.png",
                caption: "Print history"
            },
            {
                image: "projects/ssps/images/7.print-balance-minus.png",
                caption: "Print balance after printing"
            }
        ],
        github: "https://github.com/aqbtech/HCMUT_SSPS",
        live: "none"
    },
    {
        id: 5,
        title: "GPA calculator",
        summary: "A simple GPA calculator. Developed a lightweight web application to help HCMUT students calculate and analyze their GPA for academic planning.",
        technologies: ["Next.js", "TypeScript", "Bootstrap"],
        thumbnail: "projects/gpa-calculator/images/1.home-page.png",
        gallery: [
            {
                image: "projects/gpa-calculator/images/1.home-page.png",
                caption: "Home page"
            },
            {
                image: "projects/gpa-calculator/images/2.after-cal.png",
                caption: "Result page"
            },
            {
                image: "projects/gpa-calculator/images/3.choose-course-want-to-improve.png",
                caption: "Choose course want to improve"
            },
            {
                image: "projects/gpa-calculator/images/4.stimulate-improve.png",
                caption: "Result page after improve course"
            }
        ],
        github: "https://github.com/aqbtech/bk-cal-nextjs",
        live: "https://bk-cal-nextjs.vercel.app/"
    }
];

// load projects
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'col-md-6 mb-4';
        
        projectElement.innerHTML = `
            <div class="project-card">
                <div class="project-image-container">
                    <div id="carousel-${project.id}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            ${project.gallery.map((_, index) => `
                                <button type="button" 
                                    data-bs-target="#carousel-${project.id}" 
                                    data-bs-slide-to="${index}" 
                                    class="${index === 0 ? 'active' : ''}"
                                    aria-label="Slide ${index + 1}">
                                </button>
                            `).join('')}
                        </div>
                        <div class="carousel-inner">
                            ${project.gallery.map((item, index) => `
                                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                    <a href="${item.image}" 
                                       data-fancybox="gallery-${project.id}"
                                       data-caption="${item.caption}">
                                        <img src="${item.image}" 
                                             class="d-block w-100" 
                                             alt="${item.caption}">
                                    </a>
                                </div>
                            `).join('')}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${project.id}" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-${project.id}" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="carousel-caption">
                        <p class="mb-0 text-muted"></p>
                    </div>
                </div>
                <div class="project-info">
                    <h3 class="h5 mb-3">${project.title}</h3>
                    <p class="mb-3">${project.summary}</p>
                    <div class="project-tech mb-3">
                        ${project.technologies.map(tech => 
                            `<span class="badge bg-light text-dark me-2 mb-2">${tech}</span>`
                        ).join('')}
                    </div>
                    <div class="project-links d-flex gap-2">
                        ${project.live && project.live !== "none" ? 
                            `<a href="${project.live}" target="_blank" 
                                class="btn btn-primary btn-sm">
                                <i class="fas fa-external-link-alt me-2"></i>Live Demo
                            </a>` : ''
                        }
                        ${project.github ? 
                            `<a href="${project.github}" target="_blank" 
                                class="btn btn-dark btn-sm">
                                <i class="fab fa-github me-2"></i>View Code
                            </a>` : ''
                        }
                    </div>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectElement);

        // Add caption update on slide change
        const carousel = projectElement.querySelector(`#carousel-${project.id}`);
        const captionElement = projectElement.querySelector('.carousel-caption p');
        
        carousel.addEventListener('slide.bs.carousel', event => {
            const nextCaption = project.gallery[event.to].caption;
            captionElement.textContent = nextCaption;
        });

        // Set initial caption
        captionElement.textContent = project.gallery[0].caption;
    });

    // Initialize Fancybox
    Fancybox.bind("[data-fancybox]", {
        // Custom options
        Carousel: {
            infinite: false,
        },
        Thumbs: {
            autoStart: false,
        },
    });
}

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Load projects
    loadProjects();
    
    // Handle contact form submission
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
    
        const form = e.target;
        const formData = new FormData(form);
    
        // Send data using Fetch API to Formsubmit
        fetch("https://formsubmit.co/ajax/tvnaquan@gmail.com", {
          method: "POST",
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        })
        .then(response => {
          if (response.ok) {
            document.getElementById("formStatus").innerHTML =
              `<div class="alert alert-success">✔️ Successfully sent! Thank you for your message.</div>`;
            form.reset();
          } else {
            return response.json().then(data => {
              throw new Error(data.message || "Sending failed");
            });
          }
        })
        .catch(error => {
          document.getElementById("formStatus").innerHTML =
            `<div class="alert alert-danger">❌ Error: ${error.message}</div>`;
        });
      });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Update active nav item on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

function updateActiveNavItem() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 10;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavItem);
window.addEventListener('load', updateActiveNavItem); 