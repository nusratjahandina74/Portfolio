export const projects = [
  {
    title: "Petroil – Fuel Management Platform",
    thumbnail: "/projects/petroil.jpeg",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "End-to-end fuel ordering system",
      "Delivery tracking & inventory management",
      "Admin dashboard with real-time updates",
    ],
    challenge:
      "Designing a smooth order flow while keeping data consistent across users and admins.",
    solution:
      "Implemented structured APIs with role-based flows and optimized MongoDB queries for fast updates.",
    live: "https://petroil-tan.vercel.app/",
    github: "https://github.com/nusratjahandina74/Petroil_Project.git",
    featured: true,
  },
  {
    title: "PingLoop – Real-time Chat App",
    thumbnail: "/projects/pingloop.jpeg",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    features: [
      "Instant real-time messaging",
      "Typing indicator & online status",
      "Secure authentication system",
    ],
    challenge:
      "Handling real-time updates without breaking UI performance.",
    solution:
      "Used Socket.io with efficient state updates to ensure smooth and responsive chats.",
    live: "https://ping-loop-chatting-application.vercel.app",
    github: "https://github.com/nusratjahandina74/PingLoop_Chatting_Application.git",
    featured: true,
  },
  {
    title: "GBSKS – Organization Website",
    thumbnail: "/projects/gbsks.jpeg",
    tech: ["React", "Tailwind", "Firebase"],
    features: [
      "Organization profile & projects showcase",
      "Donation workflow with admin tracking",
      "Clean, responsive UI",
    ],
    challenge:
      "Creating a simple donation flow that non-technical users can easily understand.",
    solution:
      "Built a step-by-step UI with clear states and admin-side tracking for transparency.",
    live: "https://gbsks.vercel.app",
    github: "https://github.com/nusratjahandina74/GBSKS.git",
    featured: false,
  },
];
