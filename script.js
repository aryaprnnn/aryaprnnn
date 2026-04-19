// 1 DATA DATABASE 
const portfolioData = {
    role: "Full-stack Developer &<br><span class='blue-text'>Illustrative Designer</span>",
    myPhoto: "./img/photo.png", 
    aboutDesc: "I am I Komang Arya Yoga Pramana, a $age-year-old <span class='blue-text'><strong>Software Engineering Technology</strong></span> student at Bali State Polytechnic. I focus my expertise on <span class='blue-text'><strong>Laravel</strong></span> and <span class='blue-text'><strong>Flutter</strong></span>, as well as working as a <span class='blue-text'><strong>Digital Illustrator</strong></span>. I believe that technology is not just about lines of code, but about creating purposeful solutions wrapped in compelling design aesthetics. Combining technical precision with effective communication is my core strength in every project I undertake.",
    stats: {
        yearExp: 3,
        projectDone: 12,
        happyClient: 5
    },
    skills: {
        tech: [
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", category: "Mobile Framework" },
            { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", category: "Web Framework" },
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Web Fundamental" },
            { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Web Fundamental" },
            { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", category: "Programming Language" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Programming Language" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "Programming Language" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Programming Language" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", category: "Database" },
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", category: "Cloud Infrastructure" },
        ],
        creative: [
            { name: "Photoshop", icon: "img/Photoshop.png", category: "Image Editing" },
            { name: "Illustrator", icon: "img/Illustrator.png", category: "Vector Design" },
            { name: "After Effects", icon: "img/AfterEffect.png", category: "Motion Graphics" },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "UI/UX Design" },
            { name: "Ibis Paint", icon: "img/IbisPaint.png", category: "Digital Illustration" },
            { name: "PixelLab", icon: "img/PixelLab.png", category: "Typography & Layout" },
            { name: "Canva", icon: "img/Canva.png", category: "Graphic Design" },
            { name: "Alight Motion", icon: "img/AlightMotion.png", category: "Mobile Motion Design" },
            { name: "CapCut", icon: "img/CapCut.png", category: "Video Editing" },
        ]
    },
    experience: [
        {
            period: "2024 - Present",
            role: "Technical Staff",
            organization: "Robotics Student Activity Unit (UKM Robotika)",
            company: "Bali State Polytechnic",
            desc: "Collaborated with team members to develop and prototype simple robots using Arduino, and contributed to technology development initiatives within the campus.",
            skills: [
            "Arduino",
            "Teamwork",
            "Prototyping"]
        },
        {
            period: "2023 - 2024",
            role: "Swimming Club Leader",
            organization: "Swimming Extracurricular",
            company: "SMAN 1 Sukawati",
            desc: "Led extracurricular activities by organizing regular training sessions, managing members, and coordinating participation in local competitions.",
            skills: [
            "Leadership",
            "Management",
            "Coordination"]
        }
    ],
    projects: [
        {
            title: "ARtifact Museum",
            category: "development",
            desc: "An immersive web platform featuring Augmented Reality for historical artifacts.",
            long_desc: "An innovative digital project that integrates 3D GLB models into a Laravel environment. It allows users to interactively explore Balinese artifacts through AR features directly from their browser, creating a modern digital museum experience.",
            img: "img/ARtifact Museum.png",
            award: "",
            tech: [
            "Laravel",
            "Blade",
            "3D Model-viewer",
            "Taildwind"
            ],
        },
        {
            title: "Tanam Kebaikan, Tuai Kedamaian",
            category: "design",
            desc: "Philosophical digital poster; 1st Place Winner at DSP XV.",
            long_desc: "A champion project that combines the philosophical depth of traditional Balinese script with modern digital illustration techniques. This poster conveys a strong moral message through harmonious color composition and visuals.",
            img: "img/Tanam Kebaikan, Tuai Kedamaian.png",
            award: "1st Place Winner",
            tech: [
                "Ibis Paint",
                "Adobe Illustrator",
            ],
        },
        {
            title: "Beda Masa Satu Cerita",
            category: "design",
            desc: "Visual narrative design exploring the link between history and the present",
            long_desc: "An illustrative work visualizing how stories and values from the past remain relevant today. By utilizing contrasting colors to distinguish two different timelines, this project successfully earned 3rd Place in the design competition held by Suska FM.",
            img: "img/BedaMasaSatuCerita.png",
            award: "3rd Place Winner",
            tech: [
            "Ibis Paint",
            "Adobe Illustrator",
            ],
        },
        {
            title: "Rwa Bhineda Digital",
            category: "design",
            desc: "Philosophical digital poster for the Invention 2025 competition",
            long_desc: "A visual work exploring the concept of universal balance (Rwa Bhineda) through the fusion of traditional cultural elements and contemporary digitalization techniques, specifically designed to meet national competition aesthetic standards.",
            img: "img/Rwa Bhineda Digital.png",
            award: "",
            tech: [
                "Ibis Paint",
            "Adobe Illustrator",
            ],
        },
        {
            title: "JNT Express Illustration Competition",
            category: "design",
            desc: "Creative illustration for the J&T Express design competition.",
            long_desc: "A visual experiment blending modern logistics elements with a dynamic digital illustration style. Developed using Ibis Paint to create a communicative composition that aligns with the brand identity.",
            img: "img/JNTExpressIllustrationCompetition.png",
            award: "",
            tech: [
                "Ibis Paint",
                "Adobe Illustrator",
                "PixelLab"
            ],
        },
        {
            title: "Ukir Integritas Pemuda Untuk Bangsa Berdaya",
            category: "design",
            desc: "Motivational poster focused on nationalism and youth integrity.",
            long_desc: "A visual communication design aimed at inspiring Indonesian youth. It utilizes bold graphic elements to symbolize strength and integrity as the nation's pillars.",
            img: "img/UkirIntegritasPemudaUntukBangsaBerdaya.png",
            award: "",
            tech: [
                "Ibis Paint",
                "PixelLab",
            ],
        },
        {
            title: "Pantulan Jiwa; Beda Masa Satu Rasa",
            category: "design",
            desc: "A reflective design poster highlighting the continuity of emotion across generations.",
            long_desc: "A design project illustrating how emotional connections remain unchanged through different eras. It focuses on detailed coloring techniques to create a nostalgic yet fresh atmosphere.",
            img: "img/PantulanJiwaBedaMasaSatuRasa.png",
            award: "",
            tech: [
                "Ibis Paint",
            ],
        },
        {
            title: "Dewi Saraswati",
            category: "design",
            desc: "Digital illustration honoring the Goddess of Knowledge and Art.",
            long_desc: "A visual representation of Goddess Saraswati in a modern digital style. This project focuses on the precision of traditional iconography combined with smooth digital shading techniques.",
            img: "img/DewiSaraswati.jpeg",
            award: "",
            tech: [
                "Ibis Paint",
                "PixelLab",
            ],
        },
        {
            title: "Vastraharan Draupadi",
            category: "design",
            desc: "Narrative digital illustration with an epic mythological theme.",
            long_desc: "An illustration piece depicting a classic fragment of the 'Vastraharan Draupadi' story. It emphasizes facial expressions and visual dramatization using Ibis Paint to bring traditional folklore to life in a digital format.",
            img: "img/VastraharanDraupadi.jpeg",
            award: "",
            tech: [
            "Ibis Paint",
            "PixelLab",
            ],
        },
        {
            title: "Class Identity Design",
            category: "design",
            desc: "Visual identity (logo) design for a class organization.",
            long_desc: "The creation of a logo representing solidarity and the unique characteristics of class members, prioritizing readability and distinct shapes as a symbol of shared identity. The name 'PASPADA' is a meaningful acronym for 'Pasukan Mipa Dua,' serving as a bold statement of unity and the collective strength of the group.",
            img: "img/ClassLogo.png",
            award: "",
            tech: [
            "Ibis Paint",
            "Adobe Illustrator",
            "PixelLab"
            ],
        },
        {
            title: "T-shirt Design",
            category: "design",
            desc: "Logo and T-shirt merchandise design for a swimming club.",
            long_desc: "Designing a sporty and dynamic visual identity, subsequently applied to apparel. This design considers technical printing aspects without compromising the aesthetic of the illustration.",
            img: "img/SwimmingClubT-shirt.png",
            award: "",
            tech: [
            "Ibis Paint",
            "PixelLab",
            "Canva"
            ],
        },
        {
            title: "Swimming Club Logo",
            category: "design",
            desc: "Visual identity branding for a swimming community.",
            long_desc: "Development of a logo emphasizing elements of water and speed. The primary focus was on logo flexibility for various media applications, from stickers to community banners.",
            img: "img/SwimmingClubLogo.jpeg",
            award: "",
            tech: [
            "Ibis Paint",
            "PixelLab",
            ],
        },
        {
            title: "The 37th PNB Graduation Logo",
            category: "design",
            desc: "Official logo for the 37th Graduation Ceremony of Politeknik Negeri Bali.",
            long_desc: "Creating a formal visual identity for a major ceremonial event. The design merges the number '37' with academic and local elements, providing an elegant yet celebratory feel for the graduates.",
            img: "img/LogoForGraduationOfPNB.png",
            award: "",
            tech: [
            "Adobe Illustrator",
            "PixelLab"
            ],
        },
        {
            title: "Guwang",
            category: "design",
            desc: "Digital illustration inspired by local wisdom or iconography of the Guwang area.",
            long_desc: "A digital art project documenting or responding to the unique visual characteristics of Guwang. It relies on intricate line work and rich coloring to strengthen its sense of locality.",
            img: "img/Guwang.png",
            award: "",
            tech: [
            "Ibis Paint",
            "PixelLab",
            ],
        },
        {
            title: "Balinese Logo",
            category: "design",
            desc: "Logo design exploration based on Balinese ornaments and philosophy.",
            long_desc: "A logo design study utilizing characteristic Balinese visual elements, such as traditional carvings and detailed mask faces (tapel), digitally processed to produce a strong and character-driven visual identity.",
            img: "img/BalineseLogo.png",
            award: "",
            tech: [
            "Ibis Paint",
            "Adobe Illustrator",
            "PixelLab"
            ],
        },
    ]
};

// ==========================================
// 2. FUNGSI RENDER (Memasukkan data ke HTML)
// ==========================================
function initPortfolio() {
    // Hero & About
    const birthYear = 2006; // Ganti sesuai tahun lahir
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    
    // Pakai innerHTML agar <br> dan tag HTML tetap tampil
    document.getElementById('role-text').innerHTML = portfolioData.role;
    document.getElementById('about-desc').innerHTML = portfolioData.aboutDesc.replace('$age', age);
    document.getElementById('my-photo').src = portfolioData.myPhoto;

    // Stats (Set target untuk animasi counter)
    document.getElementById('stat-year').setAttribute('data-target', portfolioData.stats.yearExp);
    document.getElementById('stat-projects').setAttribute('data-target', portfolioData.stats.projectDone);
    document.getElementById('stat-clients').setAttribute('data-target', portfolioData.stats.happyClient);

    // Render Skills
    const techSkillsContainer = document.getElementById('tech-skills-container');
    const creativeSkillsContainer = document.getElementById('creative-skills-container');
    if (techSkillsContainer) {
        techSkillsContainer.innerHTML = portfolioData.skills.tech.map(s => `
            <div class="skill-card reveal">
                <div class="icon-box"><img src="${s.icon}" alt="${s.name}"></div>
                <div class="skill-info">
                    <h4>${s.name}</h4>
                    <p>${s.category || ''}</p>
                </div>
            </div>
        `).join('');
    }
    if (creativeSkillsContainer) {
        creativeSkillsContainer.innerHTML = portfolioData.skills.creative.map(s => `
            <div class="skill-card reveal">
                <div class="icon-box"><img src="${s.icon}" alt="${s.name}"></div>
                <div class="skill-info">
                    <h4>${s.name}</h4>
                    <p>${s.category || ''}</p>
                </div>
            </div>
        `).join('');
    }

    // Render Experience
    const expContainer = document.getElementById('experience-container');
    expContainer.innerHTML = portfolioData.experience.map(exp => `
        <div class="exp-card reveal">
            <div class="exp-time">${exp.period}</div>
            <div class="exp-info">
                <h4>${exp.role}</h4>
                <h5>${exp.organization}</h5>
                <h6>${exp.company}</h6>
                <p>${exp.desc}</p>
                <div class="exp-tags">
                    ${exp.skills.map(sk => `<span class="skill-tag">${sk}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // Render Projects
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = portfolioData.projects.map((p, idx) => `
        <div class="project-item reveal" data-category="${p.category}" 
             onclick="openProjectDetail(${idx})">
            <img src="${p.img}" class="project-img">
            ${p.award && p.award.length > 0 ? `<span class='award-badge'>${p.award}</span>` : ''}
            <div class="project-overlay">
                <span class="category-tag">${p.category}</span>
                <h4 class="project-title">${p.title}</h4>
                <span class="view-project">View Project →</span>
            </div>
        </div>
    `).join('');
}

// ==========================================
// 3. LOGIKA INTERAKTIF (Theme, Scroll, Modal)
// ==========================================

// --- 3D HOVER EFFECT (Untuk Foto) ---
function initPhotoHover() {
    const photoCard = document.getElementById('photo-card');
    if (!photoCard) return;

    const spotlight = photoCard.querySelector('.spotlight');

    photoCard.addEventListener('mousemove', (e) => {
        const rect = photoCard.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        
        const px = x / rect.width;
        const py = y / rect.height;
        
        const tiltX = (py - 0.5) * -15; 
        const tiltY = (px - 0.5) * 15;          
        
        photoCard.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        if(spotlight) {
            spotlight.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255, 0.4) 0%, rgba(255,255,255, 0.1) 40%, rgba(255,255,255, 0) 80%)`;
        }
    });

    photoCard.addEventListener('mouseleave', () => {
        photoCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        photoCard.style.transition = 'transform 0.5s ease-out';
        setTimeout(() => { photoCard.style.transition = 'transform 0.1s ease-out'; }, 500);
    });
}

// --- FILTER PROJECT ---
function renderProjects(filterValue = 'all') {
    const container = document.getElementById('project-container');
    if (!container) return;
    
    container.innerHTML = '';

    portfolioData.projects.forEach((project, index) => {
        if (filterValue !== 'all' && project.category !== filterValue) return;

        const card = document.createElement('div');
        card.className = 'project-item reveal active';
        card.setAttribute('data-category', project.category);
        
        card.onclick = () => openProjectDetail(index);

        card.innerHTML = `
            <img src="${project.img}" class="project-img">
            
            ${project.award ? `<div class="award-badge">${project.award}</div>` : ''}

            <div class="project-overlay">
                <div class="category-tag">${project.category}</div>
                <h3 class="project-title">${project.title}</h3>
                <div class="view-project">View Project →</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            
            renderProjects(filterValue);
        });
    });
}

// --- TEMA (Dark/Light) ---
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
}

function updateIcon(theme) {
    const iconContainer = document.getElementById('theme-icon');
    if (!iconContainer) return;
    if (theme == 'dark') {
        iconContainer.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    } else {
        iconContainer.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
}

// --- ANIMASI COUNTER ---
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');
            const inc = target / 50;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 40);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
};

// --- REVEAL ON SCROLL ---
const revealElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('stats-row')) animateCounters();
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .stats-row').forEach(el => observer.observe(el));
};

// --- MODAL SYSTEM ---
// Modal detail project
function openProjectDetail(idx) {
    const p = portfolioData.projects[idx];
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modal-body');
    const techTags = p.tech.map(t => `<span class="skill-tag">${t}</span>`).join('');
    modalBody.innerHTML = `
        <div style="text-align: left;">
            <span class="blue-text" style="font-weight:800; text-transform:uppercase;">${p.category}</span>
            <h2 style="margin: 10px 0 5px 0;">${p.title}</h2>
            ${p.award && p.award.length > 0 ? `<span class='award-badge-modal'>${p.award}</span>` : ''}
            <img src="${p.img}" style="width: 100%; border-radius: 15px; margin: 18px 0 20px 0;">
            <h5 style="font-size: 1.1rem;">About Project</h5>
            <p style="margin-bottom: 20px;">${p.long_desc || p.desc}</p>
            <h5 style="font-size: 1.1rem;">Technologies</h5>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">${techTags}</div>
        </div>
    `;
    modal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
}

function closeProjectDetail() {
    document.getElementById('projectModal').classList.remove('modal-active');
    document.body.style.overflow = 'auto';
}

// Tutup modal dengan tombol Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectDetail();
    }
});

// Tutup modal jika klik di luar modal
document.getElementById('projectModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectDetail();
    }
});


// --- UPDATE JALANKAN SEMUA ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Tema
    let savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        // Default to system preference
        savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    // 2. Navbar - Hamburger menu toggle untuk mobile
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        function checkMobileNav() {
            if (window.innerWidth <= 600) {
                hamburger.style.display = 'flex';
                navMenu.classList.remove('active');
            } else {
                hamburger.style.display = 'none';
                navMenu.classList.add('active');
            }
        }
        
        // Toggle menu saat hamburger diklik
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });
        
        // Tutup menu saat link diklik
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 600) {
                    navMenu.classList.remove('active');
                }
            });
        });
        
        // Tutup menu jika klik di luar navbar
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 600 && navMenu.classList.contains('active')) {
                if (!e.target.closest('.floating-nav')) {
                    navMenu.classList.remove('active');
                }
            }
        });
        
        // Check saat resize dan saat load
        window.addEventListener('resize', checkMobileNav);
        checkMobileNav();
    }

    // 3. Render Data
    renderProjects();
    initPortfolio();

    // 4. Fitur Interaktif
    initPhotoHover();
    initProjectFilter();
    revealElements();
});