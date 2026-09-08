//object creation to store data 
const roleData = {

    frontend: {

        html: {
            importance: 20,
            requiredLevel: "intermediate",

            roadmap: {
                beginner: [
                    "HTML structure",
                    "Basic tags",
                    "Links & images",
                    "Lists",
                    "Tables",
                    "Basic forms",
                    "Attributes",
                    "id & class"
                ],

                intermediate: [
                    "Semantic HTML",
                    "Forms & validation",
                    "HTML5 media",
                    "Responsive images",
                    "DOM structure",
                    "data-* attributes"
                ]
            }
        },
        css: {
            importance: 20,
            requiredLevel: "intermediate",

            roadmap: {
                beginner: [
                    "Syntax & selectors",
                     "Colors backgrounds & text",
                     "Box model",
                     "Margin & padding",
                     "Borders",
                     "Width & height",
                     "Display",
                    "Basic positioning"
                ],

                intermediate: [
                    "Flexbox", 
                    "CSS Grid",
                    "Responsive design", 
                    "Media queries",
                    "Relative units",
                    "Pseudo-classes",
                    "Transitions & transforms",
                    "CSS variables"
                ]
            }
        },
        js: {
    importance: 30,
    requiredLevel: "advanced",

    roadmap: {
        beginner: [
            "Syntax",
            "Variables",
            "Data types",
            "Operators",
            "Conditions",
            "Loops",
            "Functions",
            "Arrays",
            "Objects",
            "Basic DOM",
            "Events"
        ],

        intermediate: [
            "DOM manipulation",
            "Event handling",
            "Forms & validation",
            "Array methods",
            "ES6+",
            "Destructuring & spread",
            "Template literals",
            "LocalStorage",
            "JSON",
            "Fetch API",
            "Promises & async/await",
            "Error handling"
        ],

        advanced: [
            "Closures",
            "Scope & hoisting",
            "this",
            "Event propagation",
            "Modules",
            "Advanced async JavaScript",
            "API integration",
            "Performance optimization",
            "Advanced DOM patterns"
        ]
    }
},
        react: {
    importance: 20,
    requiredLevel: "advanced",

    roadmap: {
        beginner: [
            "React basics & setup",
            "Components",
            "JSX",
            "Props",
            "State",
            "Events",
            "Conditional rendering",
            "Lists & keys"
        ],

        intermediate: [
            "Hooks",
            "Forms",
            "Component communication",
            "API integration",
            "React Router",
            "Context API",
            "Reusable components",
            "Loading & error handling"
        ],

        advanced: [
            "Custom hooks",
            "Advanced state management",
            "Performance optimization",
            "Code splitting",
            "Lazy loading",
            "Component architecture",
            "Error boundaries"
        ]
    }
},
        git: {
            importance: 5,
            requiredLevel: "beginner",

            roadmap: {
                beginner: [
                    "Git & GitHub basics",
            "Repositories",
            "init",
            "clone",
            "status",
            "add",
            "commit",
            "push",
            "pull"
                ]
            }
        },
        responsive: {
            importance: 5,
            requiredLevel: "intermediate",

            roadmap: {
                beginner: [
            "Responsive basics",
            "Viewport meta tag",
            "Relative units",
            "Basic media queries",
            "Flexible layouts",
            "Responsive images"
        ],

        intermediate: [
            "Mobile-first design",
            "Breakpoints",
            "Responsive Flexbox & Grid",
            "Fluid typography",
            "Responsive navigation",
            "Responsive forms"
        ]
            }
        }

    },
    ui: {

    html: {
        importance: 20,
        requiredLevel: "intermediate",
        roadmap: {
            // only levels up to requiredLevel
            beginner: [
            "HTML structure",
            "Basic tags",
            "Links & images",
            "Lists",
            "Basic forms",
            "Attributes"
        ],

        intermediate: [
            "Semantic HTML",
            "Forms & validation",
            "HTML5 media",
            "DOM structure",
            "Accessibility basics"
        ]
        }
    },

    css: {
        importance: 35,
        requiredLevel: "advanced",
        roadmap: {
            // only levels up to requiredLevel
            beginner: [
            "Selectors",
            "Colors & text",
            "Box model",
            "Margin & padding",
            "Borders",
            "Display"
        ],

        intermediate: [
            "Flexbox",
            "CSS Grid",
            "Responsive design",
            "Media queries",
            "Pseudo-classes",
            "Transitions & transforms",
            "CSS variables"
        ],

        advanced: [
            "Advanced Flexbox & Grid",
            "Complex responsive layouts",
            "Animations",
            "Specificity & cascade",
            "Maintainable component styling"
        ]
        }
    },

    js: {
        importance: 20,
        requiredLevel: "advanced",
        roadmap: {
            // only levels up to requiredLevel
            beginner: [
            "Variables",
            "Data types",
            "Operators",
            "Conditions",
            "Loops",
            "Functions",
            "Arrays & objects",
            "Basic DOM",
            "Events"
        ],

        intermediate: [
            "DOM manipulation",
            "Event handling",
            "Forms & validation",
            "Array methods",
            "ES6+",
            "Fetch API",
            "Promises & async/await"
        ],

        advanced: [
            "Modules",
            "Advanced asynchronous JavaScript",
            "Performance optimization"
        ]
        }
    },

    react: {
        importance:15 ,
        requiredLevel: "intermediate",
        roadmap: {
            // only levels up to requiredLevel
            beginner: [
            "React basics",
            "Components",
            "JSX",
            "Props",
            "State",
            "Events",
            "Conditional rendering",
            "Lists & keys"
        ],

        intermediate: [
            "Hooks",
            "Forms",
            "Component communication",
            "API integration",
            "React Router",
            "Reusable components"
        ]
        }
    },
    git: {
        importance: 2,
        requiredLevel: "beginner",
        roadmap: {
            // only levels up to requiredLevel
            beginner: [
            "Git & GitHub basics",
            "Repositories",
            "init",
            "clone",
            "status",
            "add",
            "commit",
            "push",
            "pull"
        ]
        }
    },

    responsive: {
        importance: 8,
        requiredLevel: "intermediate",
        roadmap: {
            // only levels up to requiredLevel
            beginner: [
            "Responsive basics",
            "Viewport meta tag",
            "Basic media queries",
            "Flexible layouts"
        ],

        intermediate: [
            "Mobile-first design",
            "Breakpoints",
            "Responsive Flexbox & Grid",
            "Fluid typography",
            "Responsive navigation"
        ]
        }
    }
},
web: {

    html: {
        importance: 15,
        requiredLevel: "intermediate",

        roadmap: {
            beginner: [
                "HTML structure",
                "Basic tags",
                "Links & images",
                "Lists",
                "Tables",
                "Forms"
            ],

            intermediate: [
                "Semantic HTML",
                "Form validation",
                "HTML5 media",
                "DOM structure"
            ]
        }
    },

    css: {
        importance: 10,
        requiredLevel: "intermediate",

        roadmap: {
            beginner: [
                "Selectors",
                "Colors & text",
                "Box model",
                "Display",
                "Positioning"
            ],

            intermediate: [
                "Flexbox",
                "Grid",
                "Responsive design",
                "Media queries",
                "Transitions"
            ]
        }
    },

    js: {
        importance: 20,
        requiredLevel: "advanced",

        roadmap: {
            beginner: [
                "Syntax",
                "Variables",
                "Data types",
                "Conditions",
                "Loops",
                "Functions",
                "Arrays & objects"
            ],

            intermediate: [
                "DOM",
                "Events",
                "Forms",
                "ES6+",
                "Fetch API",
                "Promises",
                "async/await",
                "Error handling"
            ],

            advanced: [
                "Modules",
                "Advanced async JavaScript",
                "Performance optimization"
            ]
        }
    },

    backend: {

    importance: 25,
    requiredLevel: "advanced",

    // General Backend Technology roadmap
    roadmap: {
        beginner: [
            "Backend fundamentals",
            "Client-server architecture",
            "HTTP basics"
        ],

        intermediate: [
            "Server-side programming",
            "Routing",
            "Middleware",
            "Authentication basics",
            "REST APIs"
        ],

        advanced: [
            "Application architecture",
            "Security basics",
            "Error handling",
            "Performance"
        ]
    },

    // Technology-specific roadmaps
    technologies: {

        node: {
            roadmap: {
                beginner: [
                    "Node.js runtime basics",
                    "npm & package.json",
                    "Modules",
                    "Built-in modules",
                    "Running a server"
                ],

                intermediate: [
                    "Express.js",
                    "Routing",
                    "Middleware",
                    "REST APIs",
                    "Request & response handling",
                    "Error handling"
                ],

                advanced: [
                    "Authentication & authorization",
                    "API security",
                    "Async patterns",
                    "Application structure",
                    "Performance optimization"
                ]
            }
        },

        java: {
            roadmap: {
                beginner: [
                    "Java syntax",
                    "Variables & data types",
                    "Conditions & loops",
                    "Methods",
                    "Classes & objects",
                    "Collections basics"
                ],

                intermediate: [
                    "OOP",
                    "Exception handling",
                    "Collections",
                    "Streams basics",
                    "Spring Boot basics",
                    "REST APIs"
                ],

                advanced: [
                    "Spring Boot architecture",
                    "Authentication & authorization",
                    "Database integration",
                    "API security",
                    "Performance"
                ]
            }
        },

        python: {
            roadmap: {
                beginner: [
                    "Python syntax",
                    "Variables & data types",
                    "Conditions & loops",
                    "Functions",
                    "Lists & dictionaries",
                    "Modules"
                ],

                intermediate: [
                    "OOP basics",
                    "Exception handling",
                    "Virtual environments",
                    "FastAPI basics",
                    "Routing",
                    "REST APIs"
                ],

                advanced: [
                    "Authentication",
                    "API security",
                    "Async programming",
                    "Application structure",
                    "Performance"
                ]
            }
        },

        php: {
            roadmap: {
                beginner: [
                    "PHP syntax",
                    "Variables",
                    "Conditions & loops",
                    "Functions",
                    "Arrays",
                    "Forms"
                ],

                intermediate: [
                    "OOP basics",
                    "Sessions & cookies",
                    "Database connectivity",
                    "Routing",
                    "REST APIs"
                ],

                advanced: [
                    "Authentication",
                    "Security basics",
                    "Application structure",
                    "Error handling",
                    "Performance"
                ]
            }
        }
    }
},

    database: {

    importance: 15,
    requiredLevel: "intermediate",

    // General Database roadmap
    roadmap: {

        beginner: [
            "Database basics",
            "Tables & records",
            "Primary keys",
            "Basic SQL"
        ],

        intermediate: [
            "CRUD",
            "SELECT & filtering",
            "Joins",
            "Relationships",
            "Indexes basics"
        ]
    },

    // Database-specific roadmaps
    technologies: {

        sql: {

            roadmap: {

                beginner: [
                    "Relational database basics",
                    "Tables & records",
                    "Primary & foreign keys",
                    "SELECT",
                    "WHERE",
                    "ORDER BY"
                ],

                intermediate: [
                    "INSERT, UPDATE, DELETE",
                    "Joins",
                    "GROUP BY & HAVING",
                    "Subqueries",
                    "CRUD",
                    "Indexes basics"
                ]
            }
        },


        oracle: {

            roadmap: {

                beginner: [
                    "Oracle database basics",
                    "Tables & records",
                    "Primary & foreign keys",
                    "Basic SQL",
                    "SELECT & filtering"
                ],

                intermediate: [
                    "CRUD operations",
                    "Joins",
                    "Subqueries",
                    "Constraints",
                    "Indexes",
                    "Views"
                ]
            }
        }

    }
},

    api: {

    importance: 10,
    requiredLevel: "intermediate",

    // General API roadmap
    roadmap: {

        beginner: [
            "API basics",
            "HTTP",
            "JSON",
            "Requests & responses"
        ],

        intermediate: [
            "REST",
            "HTTP methods",
            "Status codes",
            "Authentication"
        ]
    },

    // API-specific roadmaps
    technologies: {

        fastapi: {

            roadmap: {

                beginner: [
                    "API concepts",
                    "HTTP basics",
                    "JSON",
                    "FastAPI setup",
                    "Basic routes"
                ],

                intermediate: [
                    "Path & query parameters",
                    "Request bodies",
                    "Pydantic models",
                    "CRUD APIs",
                    "Dependency basics",
                    "Error handling"
                ]
            }
        },


        openapi: {

            roadmap: {

                beginner: [
                    "OpenAPI basics",
                    "API documentation",
                    "Paths",
                    "Operations",
                    "Parameters",
                    "Responses"
                ],

                intermediate: [
                    "Request/response schemas",
                    "Reusable components",
                    "Authentication schemes",
                    "Validation",
                    "API documentation"
                ]
            }
        }

    }
},

    git: {
        importance: 5,
        requiredLevel: "beginner",

        roadmap: {
            beginner: [
                "Repositories",
                "init",
                "clone",
                "add",
                "commit",
                "push",
                "pull"
            ]
        }
    }

},
javascript: {

    js: {
        importance: 40,
        requiredLevel: "advanced",

        roadmap: {
            beginner: [
                "Syntax",
                "Variables",
                "Data types",
                "Operators",
                "Conditions",
                "Loops",
                "Functions",
                "Arrays",
                "Objects",
                "DOM basics"
            ],

            intermediate: [
                "DOM manipulation",
                "Events",
                "Array methods",
                "Object methods",
                "ES6+",
                "Destructuring & spread",
                "JSON",
                "Fetch API",
                "Promises",
                "async/await",
                "Error handling"
            ],

            advanced: [
                "Closures",
                "Scope & hoisting",
                "this",
                "Event propagation",
                "Modules",
                "Advanced async JavaScript",
                "Performance optimization"
            ]
        }
    },


    html: {

        importance: 10,
        requiredLevel: "intermediate",

        roadmap: {

            beginner: [
                "HTML structure",
                "Common tags",
                "Links & images",
                "Lists",
                "Forms"
            ],

            intermediate: [
                "Semantic HTML",
                "Form validation",
                "DOM-ready structure",
                "HTML5 media"
            ]
        }
    },


    css: {

        importance: 15,
        requiredLevel: "intermediate",

        roadmap: {

            beginner: [
                "Selectors",
                "Colors & text",
                "Box model",
                "Display",
                "Basic positioning"
            ],

            intermediate: [
                "Flexbox",
                "Grid",
                "Responsive design",
                "Media queries",
                "Transitions"
            ]
        }
    },


    node: {

        importance: 15,
        requiredLevel: "intermediate",

        roadmap: {

            beginner: [
                "Node.js basics",
                "npm",
                "Modules",
                "Running JavaScript with Node.js"
            ],

            intermediate: [
                "File system basics",
                "HTTP server basics",
                "Express basics",
                "Routing",
                "Middleware",
                "REST APIs"
            ]
        }
    },


    api: {

        importance: 15,
        requiredLevel: "intermediate",

        // General API roadmap
        roadmap: {

            beginner: [
                "API basics",
                "HTTP basics",
                "Requests & responses",
                "JSON"
            ],

            intermediate: [
                "REST APIs",
                "HTTP methods",
                "Status codes",
                "Fetch API",
                "Authentication basics"
            ]
        },

        // API-specific roadmaps
        technologies: {

            fastapi: {

                roadmap: {

                    beginner: [
                        "API concepts",
                        "HTTP basics",
                        "JSON",
                        "FastAPI setup",
                        "Basic routes"
                    ],

                    intermediate: [
                        "Path & query parameters",
                        "Request bodies",
                        "Pydantic models",
                        "CRUD APIs",
                        "Dependency basics",
                        "Error handling"
                    ]
                }
            },


            openapi: {

                roadmap: {

                    beginner: [
                        "OpenAPI basics",
                        "API documentation",
                        "Paths",
                        "Operations",
                        "Parameters",
                        "Responses"
                    ],

                    intermediate: [
                        "Request/response schemas",
                        "Reusable components",
                        "Authentication schemes",
                        "Validation",
                        "API documentation"
                    ]
                }
            }

        }
    },


    git: {

        importance: 5,
        requiredLevel: "beginner",

        roadmap: {

            beginner: [
                "Repositories",
                "init",
                "clone",
                "status",
                "add",
                "commit",
                "push",
                "pull"
            ]
        }
    }

},
"web-ui": {
    uiux: {
        importance: 25,
        requiredLevel: "advanced",
        roadmap: {
            beginner: [
                "UI vs UX",
                "Design principles",
                "Visual hierarchy",
                "Layout basics",
                "User needs"
            ],
            intermediate: [
                "User flows",
                "Wireframes",
                "Information architecture",
                "Usability",
                "Design systems basics"
            ],
            advanced: [
                "UX research basics",
                "Usability testing",
                "Design systems",
                "Interaction design"
            ]
        }
    },

    figma: {
        importance: 20,
        requiredLevel: "advanced",
        roadmap: {
            beginner: [
                "Figma interface",
                "Frames",
                "Shapes",
                "Text",
                "Images",
                "Basic prototyping"
            ],
            intermediate: [
                "Components",
                "Variants",
                "Auto layout",
                "Styles",
                "Interactive prototypes"
            ],
            advanced: [
                "Design systems",
                "Advanced components",
                "Variables",
                "Prototype interactions"
            ]
        }
    },

    typography: {
        importance: 15,
        requiredLevel: "intermediate",
        roadmap: {
            beginner: [
                "Font families",
                "Font size",
                "Weight",
                "Line height",
                "Text alignment"
            ],
            intermediate: [
                "Type hierarchy",
                "Font pairing",
                "Spacing",
                "Readability",
                "Responsive typography"
            ]
        }
    },

    color: {
        importance: 15,
        requiredLevel: "intermediate",
        roadmap: {
            beginner: [
                "Color wheel",
                "Primary & secondary colors",
                "Warm & cool colors",
                "Basic color combinations"
            ],
            intermediate: [
                "Color palettes",
                "Contrast",
                "Color hierarchy",
                "Brand colors",
                "Accessibility contrast"
            ]
        }
    },

    responsive: {
        importance: 10,
        requiredLevel: "intermediate",
        roadmap: {
            beginner: [
                "Responsive basics",
                "Screen sizes",
                "Flexible layouts",
                "Basic breakpoints"
            ],
            intermediate: [
                "Mobile-first design",
                "Responsive grids",
                "Fluid layouts",
                "Responsive typography"
            ]
        }
    },

    prototyping: {
        importance: 15,
        requiredLevel: "intermediate",
        roadmap: {
            beginner: [
                "Prototype basics",
                "Screen linking",
                "Basic interactions"
            ],
            intermediate: [
                "Interactive flows",
                "Overlays",
                "Transitions",
                "Form interactions"
            ]
        }
    }
}

};