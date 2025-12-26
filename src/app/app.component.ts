import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'naveen-portfolio';
  private revealObserver?: IntersectionObserver;
  scrollProgress = 0;

  metrics = [
    { label: 'Experience', value: '4.5 yrs' },
    { label: 'Projects delivered', value: '20+' },
    { label: 'Teams led', value: '5 devs' },
  ];

  focusAreas = [
    {
      title: 'Front-end engineering',
      description: 'Angular and React dashboards for healthcare, ERP, travel, and commerce.',
      bullets: [
        'Crafting reusable UI libraries and component kits for mainframe and ERP apps',
        'State management with NgRx/Redux plus accessibility-first patterns',
        'Performance tuning and page-load optimizations',
      ],
    },
    {
      title: 'Backend & data',
      description: 'Node/Express services with SQL/NoSQL for product and analytics workloads.',
      bullets: [
        'RESTful APIs with validation, logging, and auth for healthcare and commerce',
        'MySQL and MongoDB modeling, ORM/ODM usage, and query optimization',
        'Integrations: Stripe, Web3 APIs, and third-party services',
      ],
    },
    {
      title: 'Delivery & operations',
      description: 'Cloud deployments, CI/CD, and runbooks that keep releases on track.',
      bullets: [
        'Cloud deployments for Node apps with health checks and monitoring',
        'Feature flags, staged rollouts, and debugging in production',
        'Collaboration with cross-functional teams for faster delivery',
      ],
    },
  ];

  experience = [
    {
      company: 'G2 Technology and Solutions',
      role: 'Senior Software Engineer',
      period: 'Dec 2024 - Present',
      location: 'Hybrid',
      outcomes: [
        'Developing Angular dashboards for healthcare applications with performant data views.',
        'Built NoSQL integrations and APIs for healthcare products using Next.js and Node.',
        'Experimenting with Lit-based components for modular UI delivery.',
      ],
      tools: ['Angular', 'Next.js', 'Node.js', 'MongoDB', 'Lit', 'SCSS'],
    },
    {
      company: 'Vishnu Prasad Research Center',
      role: 'Associate Full Stack Developer',
      period: 'Jul 2023 - Dec 2024',
      location: 'Hybrid',
      outcomes: [
        'Built Angular dashboards for mainframe apps and React e-commerce sites.',
        'Developed ERP components with MySQL ORM layers and Node.js APIs.',
        'Shipped travel app features with modern booking and itinerary flows.',
      ],
      tools: ['Angular', 'React', 'Node.js', 'MySQL', 'ORMs', 'SCSS'],
    },
    {
      company: 'Infosys Limited',
      role: 'Senior System Engineer',
      period: 'Sep 2022 - Apr 2023',
      location: 'On-site',
      outcomes: [
        'Developed Angular libraries for mainframe applications used in US banking.',
        'Researched and recommended upgrades for web properties to improve stability.',
        'Trained and operated within mainframe stream disciplines.',
      ],
      tools: ['Angular', 'TypeScript', 'Mainframe', 'Jasmine', 'CI/CD'],
    },
    {
      company: 'Sparkout Tech Solutions',
      role: 'Associate Full Stack Developer',
      period: 'Feb 2022 - Aug 2022',
      location: 'Hybrid',
      outcomes: [
        'Delivered cloud-deployed Node.js apps with React dashboards for crypto and data products.',
        'Integrated blockchain/crypto APIs and secured deployments with monitoring.',
        'Collaborated with engineers and researchers to design efficient systems.',
      ],
      tools: ['Node.js', 'React', 'Cloud', 'Web3.js', 'Docker'],
    },
    {
      company: 'IONSTAR India Pvt Ltd',
      role: 'Full Stack Developer',
      period: 'May 2020 - Oct 2021',
      location: 'On-site',
      outcomes: [
        'Built MEAN stack applications and interactive dashboards.',
        'Developed Node.js backends and REST abstractions feeding Angular/React UIs.',
        'Aggregated consumer data from multiple systems into unified views.',
      ],
      tools: ['Angular', 'Node.js', 'Express', 'MongoDB', 'React'],
    },
  ];

  projects = [
    {
      title: 'Healthcare Analytics Dashboard',
      type: 'Product',
      summary: 'Responsive Angular dashboard surfacing KPIs for care teams with secure data views.',
      stack: ['Angular', 'Nx', 'Node.js', 'MongoDB'],
      outcomes: [
        'Built role-based modules with lazy loading and shared UI kit.',
        'Implemented REST API with audit logging and request validation.',
      ],
      link: 'https://example.com/health-dashboard',
      repo: 'https://github.com/example/health-dashboard',
    },
    {
      title: 'Commerce Experience Toolkit',
      type: 'Case study',
      summary: 'Reusable React components and APIs powering multi-brand storefronts.',
      stack: ['React', 'Redux Toolkit', 'Node.js', 'MySQL'],
      outcomes: [
        'Created design-system driven components for carts, checkout, and product detail.',
        'Optimized SSR + caching to cut TTFB and improve SEO scores.',
      ],
      link: 'https://example.com/commerce',
      repo: 'https://github.com/example/commerce-toolkit',
    },
    {
      title: 'Smart Surveillance Console',
      type: 'Prototype',
      summary: 'AI-enabled monitoring console with alerting, device health, and review workflows.',
      stack: ['Angular', 'Express', 'Python', 'Edge AI'],
      outcomes: [
        'Integrated ML inference results with real-time alert feeds.',
        'Shipped responsive layouts with keyboard-first navigation and a11y checks.',
      ],
      link: 'https://example.com/surveillance',
      repo: 'https://github.com/example/surveillance-console',
    },
  ];

  skillGroups = [
    {
      title: 'Frontend',
      items: ['Angular 6+', 'React', 'Redux Toolkit', 'TypeScript', 'RxJS', 'HTML5', 'SCSS', 'Accessibility-first UI'],
    },
    {
      title: 'Backend & APIs',
      items: ['Node.js', 'Express.js', 'REST', 'Auth & JWT', 'Logging & Monitoring', 'Feature flags'],
    },
    {
      title: 'Data & Cloud',
      items: ['MongoDB', 'MySQL', 'ORM/ODM', 'Caching', 'CI/CD', 'Cloud deployments'],
    },
    {
      title: 'Quality',
      items: ['Jest', 'Cypress', 'Storybook', 'Performance profiling', 'Lighthouse'],
    },
  ];

  story = [
    'Started in MEAN stacks building dashboards and automations for fast-moving teams.',
    'Grew into full-stack ownership across Angular/React frontends and Node/Express APIs.',
    'Now focused on predictable delivery: clean architecture, testing, and observable releases.',
  ];

  contactLinks = [
    { label: 'Email', href: 'mailto:naveen2426kumar@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
  ];

  testimonials = [
    {
      name: 'Priya Raman',
      title: 'Product Director, Bluewave',
      quote: 'Naveen owns features end-to-end, from Angular UI to Node APIs and production deployment.',
    },
    {
      name: 'Leo Martin',
      title: 'Engineering Manager, Northbridge',
      quote: 'He ships reliable dashboards and services and keeps stakeholders looped in with clear updates.',
    },
  ];

  currentFocus = [
    { title: 'Healthcare dashboards', detail: 'Building responsive Angular views over secure health data.' },
    { title: 'E-commerce & ERP', detail: 'React + Node stacks with strong data models and performance.' },
    { title: 'Cloud reliability', detail: 'Smoother deployments with monitoring and faster incident resolution.' },
  ];

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
      this.revealObserver?.observe(el);
    });

    this.updateScrollProgress();
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onWindowScroll(): void {
    this.updateScrollProgress();
  }

  private updateScrollProgress(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop || 0;
    const scrollable = (doc.scrollHeight || 0) - window.innerHeight;
    const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
    this.scrollProgress = Math.min(Math.max(progress, 0), 100);
  }
}
