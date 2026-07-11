import {
    FaReact,
    FaNodeJs,
    FaStripe,
    FaAws,
    FaGithub,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiExpress,
    SiMongodb,
    SiRedux,
    SiTailwindcss,
    SiRazorpay,
    SiChartdotjs,
    SiMui,
} from "react-icons/si";

export const projects = [
    {
        id: 1,

        featured: true,

        title: "Maruhi Jewellery",

        slug: "maruhi-jewellery",

        category: "Full Stack E-Commerce",

        shortDescription:
            "A premium jewellery e-commerce platform with secure authentication, Stripe payments, wishlist, product management, and an admin dashboard.",

        description:
            "Built a production-ready MERN e-commerce application with secure authentication, Stripe payment integration, wishlist functionality, order management, product filtering, and a modern responsive UI. Designed reusable components and optimized API performance for a seamless shopping experience.",

        image: "/projects/maruhi.png",

        demo: "https://your-demo-link.com",

        github: "https://github.com/yourusername/maruhi",

        year: "2026",

        duration: "3 Months",

        role: "Full Stack Developer",

        color: "#22d3ee",

        technologies: [
            {
                name: "React",
                icon: FaReact,
            },
            {
                name: "Redux Toolkit",
                icon: SiRedux,
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
            },
            {
                name: "Node.js",
                icon: FaNodeJs,
            },
            {
                name: "Express.js",
                icon: SiExpress,
            },
            {
                name: "MongoDB",
                icon: SiMongodb,
            },
            {
                name: "Stripe",
                icon: FaStripe,
            },
        ],

        features: [
            "Authentication & Authorization",
            "Stripe Payment Integration",
            "Wishlist",
            "Cart Management",
            "Order Tracking",
            "Admin Dashboard",
            "Responsive Design",
            "REST APIs",
        ],
    },

    {
        id: 2,

        featured: false,

        title: "ShaAvi Polyclinic",

        slug: "shaavi-polyclinic",

        category: "Healthcare Management",

        shortDescription:
            "A complete healthcare management platform for hospitals and clinics.",

        description:
            "Developed a comprehensive hospital management application featuring appointment scheduling, doctor management, patient records, inventory, billing, Razorpay payment integration, revenue sharing, and settlement reports.",

        image: "/projects/shaavi.png",

        demo: "",

        github: "",

        year: "2025",

        duration: "8 Months",

        role: "Full Stack Developer",

        color: "#8b5cf6",

        technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Razorpay", icon: SiRazorpay },
        ],

        features: [
            "Doctor Management",
            "Patient Management",
            "Appointments",
            "Billing",
            "Inventory",
            "Revenue Sharing",
            "Settlement Reports",
            "Role-Based Access",
        ],
    },

    {
        id: 3,

        featured: false,

        title: "Lupin Foundation MIS",

        slug: "lupin-foundation-mis",

        category: "Enterprise MIS",

        shortDescription:
            "Management Information System for monitoring CSR initiatives and reporting.",

        description:
            "Built dashboards, analytics, approval workflows, PDF reports, Excel exports, and role-based access for enterprise users.",

        image: "/projects/lupin.png",

        demo: "",

        github: "",

        year: "2025",

        duration: "6 Months",

        role: "Full Stack Developer",

        color: "#10b981",

        technologies: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Chart.js", icon: SiChartdotjs },
        ],

        features: [
            "Dashboard",
            "MIS Reports",
            "Approval Workflow",
            "Analytics",
            "PDF Export",
            "Excel Export",
            "Role Management",
        ],
    },

    {
        id: 4,

        featured: false,

        title: "Kedia Advisory",

        slug: "kedia-advisory",

        category: "Admin Dashboard",

        shortDescription:
            "Business administration portal with analytics and reporting.",

        description:
            "Created an admin dashboard for managing users, reports, analytics, and internal business workflows with responsive UI components.",

        image: "/projects/kedia.png",

        demo: "",

        github: "",

        year: "2024",

        duration: "4 Months",

        role: "Frontend Developer",

        color: "#f97316",

        technologies: [
            { name: "React", icon: FaReact },
            { name: "Material UI", icon: SiMui },
            { name: "Node.js", icon: FaNodeJs },
        ],

        features: [
            "Dashboard",
            "Analytics",
            "Charts",
            "Responsive UI",
            "Role Management",
        ],
    },

    {
        id: 5,

        featured: false,

        title: "King Ridge Capital",

        slug: "king-ridge-capital",

        category: "Corporate Website",

        shortDescription:
            "A modern investment advisory website with responsive design and optimized performance.",

        description:
            "Developed a responsive corporate website using Next.js with SEO optimization, reusable UI components, and smooth animations.",

        image: "/projects/kingridge.png",

        demo: "",

        github: "",

        year: "2024",

        duration: "2 Months",

        role: "Frontend Developer",

        color: "#3b82f6",

        technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: FaReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],

        features: [
            "SEO Optimized",
            "Responsive",
            "Reusable Components",
            "Fast Performance",
        ],
    },

    {
        id: 6,

        featured: false,

        title: "Una Ecosystems",

        slug: "una-ecosystems",

        category: "Business Platform",

        shortDescription:
            "Business management platform with admin portal and operational dashboards.",

        description:
            "Designed and developed modules for administration, reporting, dashboards, and business workflow management.",

        image: "/projects/una.png",

        demo: "",

        github: "",

        year: "2024",

        duration: "5 Months",

        role: "Frontend Developer",

        color: "#ec4899",

        technologies: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "MongoDB", icon: SiMongodb },
            { name: "AWS", icon: FaAws },
        ],

        features: [
            "Admin Portal",
            "Dashboard",
            "Reports",
            "Authentication",
            "Cloud Storage",
        ],
    },
];

export const sectionContent = {
    badge: "FEATURED WORK",

    title: "Projects That Turn Ideas Into Reality",

    subtitle:
        "From enterprise dashboards and healthcare platforms to modern e-commerce solutions, these projects demonstrate my experience in building scalable, performant, and user-centric web applications using modern technologies.",
};