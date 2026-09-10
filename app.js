/* ════════════════════════════════════════════════════════════════
   CLOUDQUEST - CANDY CRUSH STYLE ROADMAP & INTEGRATED COURSES
   ════════════════════════════════════════════════════════════════ */

const STAGES = [
  {
    id: 1,
    levelNumber: 1,
    title: 'Foundation Island',
    tagline: 'Linux, Networking, Git & Python Basics',
    emoji: '🌱',
    theme: 'amber',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    dur: '~3 weeks',
    xpReward: 250,
    desc: 'Before stepping into the clouds, master the terminal, networking, and scripting that powers every server on the planet!',
    courses: [
      {
        provider: 'freeCodeCamp',
        title: 'Linux for Beginners – Full 5-Hour Course',
        desc: 'Zero-to-hero terminal commands, directory navigation, file permissions, users, and package managers.',
        url: 'https://www.youtube.com/watch?v=ROjZy1WbCIA',
        duration: '5h 00m',
        type: 'Video Masterclass',
        badge: 'Essential'
      },
      {
        provider: 'freeCodeCamp',
        title: 'Computer Networking Full Course (TCP/IP & OSI)',
        desc: 'Understand how the internet works: IP addresses, subnets, DNS, HTTP/HTTPS, and routing protocols.',
        url: 'https://www.youtube.com/watch?v=qiQR5rTSshw',
        duration: '9h 20m',
        type: 'Full Course',
        badge: 'Core Skill'
      },
      {
        provider: 'Traversy Media',
        title: 'Git & GitHub Crash Course for Beginners',
        desc: 'Learn git init, commit, branching, merging, pull requests, and pushing code to remote repositories.',
        url: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc',
        duration: '1h 20m',
        type: 'Crash Course',
        badge: 'Quick Win'
      },
      {
        provider: 'Programming with Mosh',
        title: 'Python for Beginners – Full Course',
        desc: 'Fundamental programming concepts, scripting, automation, and API data handling.',
        url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
        duration: '6h 15m',
        type: 'Video Course',
        badge: 'Automation'
      }
    ],
    labs: [
      {
        name: 'The Linux Foundation Intro (Free edX)',
        desc: 'Official free Linux course with hands-on practice exercises.',
        url: 'https://www.edx.org/learn/linux/the-linux-foundation-introduction-to-linux',
        type: 'Free Course'
      },
      {
        name: 'OverTheWire: Bandit Wargame',
        desc: 'Gamified interactive Linux terminal challenges for beginners.',
        url: 'https://overthewire.org/wargames/bandit/',
        type: 'Interactive Game'
      }
    ],
    lessons: [
      {
        id: 'l1-1', title: 'Linux Basics & Essential Commands', type: 'video',
        channel: 'freeCodeCamp', duration: '5h', xp: 40,
        url: 'https://www.youtube.com/watch?v=ROjZy1WbCIA',
        alt: 'Search "Linux Full Course freeCodeCamp" on YouTube',
        tags: ['Linux', 'Terminal', 'CLI']
      },
      {
        id: 'l1-2', title: 'Git & GitHub Version Control', type: 'video',
        channel: 'Traversy Media', duration: '1.5h', xp: 30,
        url: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc',
        alt: 'Search "Git GitHub Crash Course Traversy" on YouTube',
        tags: ['Git', 'GitHub', 'Version Control']
      },
      {
        id: 'l1-3', title: 'Computer Networking (TCP/IP & DNS)', type: 'video',
        channel: 'freeCodeCamp', duration: '9h', xp: 50,
        url: 'https://www.youtube.com/watch?v=qiQR5rTSshw',
        alt: 'Search "Computer Networking Full Course freeCodeCamp" on YouTube',
        tags: ['Networking', 'TCP/IP', 'DNS']
      },
      {
        id: 'l1-4', title: 'Python Fundamentals for Automation', type: 'video',
        channel: 'Programming with Mosh', duration: '6h', xp: 40,
        url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
        alt: 'Search "Python Beginners Full Course Mosh" on YouTube',
        tags: ['Python', 'Scripting', 'Automation']
      },
      {
        id: 'l1-5', title: 'Bash Shell Scripting Hands-on', type: 'video',
        channel: 'TechWorldwithNana', duration: '2h', xp: 40,
        url: 'https://www.youtube.com/watch?v=e7BufAVwDiM',
        alt: 'Search "Bash Scripting Tutorial TechWorld with Nana" on YouTube',
        tags: ['Bash', 'Shell', 'Scripting']
      }
    ]
  },
  {
    id: 2,
    levelNumber: 2,
    title: 'Cloud Core Realm',
    tagline: 'AWS, Google Cloud & Microsoft Azure Tri-Course',
    emoji: '☁️',
    theme: 'rose',
    accentColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    dur: '~4 weeks',
    xpReward: 350,
    desc: 'The heart of your career! Master the Big 3 Cloud Providers — Amazon Web Services, Google Cloud Platform, and Microsoft Azure — with comprehensive video courses and free practice portals.',
    courses: [
      {
        provider: 'freeCodeCamp & Andrew Brown',
        title: 'AWS Certified Cloud Practitioner Full Course (CLF-C02)',
        desc: 'Complete 14-hour walkthrough of all AWS core services: EC2, S3, IAM, VPC, RDS, Lambda, and billing.',
        url: 'https://www.youtube.com/watch?v=SOTamWNgDKc',
        duration: '14h 00m',
        type: 'AWS Master Course',
        badge: '🔥 Top Pick for Jobs'
      },
      {
        provider: 'Simplilearn / Google Cloud',
        title: 'Google Cloud Platform (GCP) Complete Full Course',
        desc: 'Comprehensive introduction to GCP: Compute Engine, Cloud Storage, VPC, BigQuery, and IAM.',
        url: 'https://www.youtube.com/watch?v=IEEQzmFac9k',
        duration: '6h 30m',
        type: 'Google Cloud Course',
        badge: 'GCP Complete'
      },
      {
        provider: 'Adam Marczak (Azure for Everyone)',
        title: 'Microsoft Azure Fundamentals AZ-900 Full Course',
        desc: 'The highest-rated free Azure course on YouTube with clear animated visual diagrams and real Azure portal labs.',
        url: 'https://www.youtube.com/watch?v=NPEsD6n9A_I',
        duration: '8h 15m',
        type: 'Azure Master Course',
        badge: 'Azure AZ-900'
      },
      {
        provider: 'Intellipaat',
        title: 'AWS Core Services Deep Dive (EC2, S3, IAM, VPC)',
        desc: 'Practical lab-heavy guide focusing directly on the services you will be asked about in your first interview.',
        url: 'https://www.youtube.com/watch?v=k1RI5locZE4',
        duration: '4h 00m',
        type: 'AWS Lab Course',
        badge: 'Hands-On'
      }
    ],
    labs: [
      {
        name: 'AWS Skill Builder Free Hub',
        desc: '600+ official free AWS digital courses including AWS Cloud Quest game.',
        url: 'https://explore.skillbuilder.aws/',
        type: 'Official Free Portal'
      },
      {
        name: 'Google Cloud Skills Boost',
        desc: 'Interactive GCP browser sandboxes and shareable skill badges.',
        url: 'https://www.cloudskillsboost.google/',
        type: 'Hands-on Labs'
      },
      {
        name: 'Microsoft Learn Azure Sandbox',
        desc: 'Free interactive browser sandboxes with no credit card required.',
        url: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/',
        type: 'Free Sandbox'
      }
    ],
    lessons: [
      {
        id: 'l2-1', title: 'AWS Cloud Practitioner Full Course (14h)', type: 'video',
        channel: 'freeCodeCamp / Andrew Brown', duration: '14h', xp: 70,
        url: 'https://www.youtube.com/watch?v=SOTamWNgDKc',
        alt: 'Search "AWS Cloud Practitioner Full Course freeCodeCamp ExamPro" on YouTube',
        tags: ['AWS', 'Cloud Practitioner', 'CLF-C02']
      },
      {
        id: 'l2-2', title: 'AWS Core Architecture (EC2, S3, IAM, VPC)', type: 'video',
        channel: 'Intellipaat', duration: '4h', xp: 50,
        url: 'https://www.youtube.com/watch?v=k1RI5locZE4',
        alt: 'Search "AWS Tutorial for Beginners Intellipaat" on YouTube',
        tags: ['AWS', 'EC2', 'S3', 'IAM']
      },
      {
        id: 'l2-3', title: 'Microsoft Azure Fundamentals AZ-900 Masterclass', type: 'video',
        channel: 'Adam Marczak', duration: '8h', xp: 60,
        url: 'https://www.youtube.com/watch?v=NPEsD6n9A_I',
        alt: 'Search "Azure Fundamentals AZ-900 Adam Marczak" on YouTube',
        tags: ['Azure', 'AZ-900', 'Microsoft']
      },
      {
        id: 'l2-4', title: 'Google Cloud Platform (GCP) Full Course', type: 'video',
        channel: 'Simplilearn', duration: '6h', xp: 50,
        url: 'https://www.youtube.com/watch?v=IEEQzmFac9k',
        alt: 'Search "Google Cloud Platform Full Course Simplilearn" on YouTube',
        tags: ['GCP', 'Google Cloud', 'Compute Engine']
      }
    ]
  },
  {
    id: 3,
    levelNumber: 3,
    title: 'Linux & Networking Citadel',
    tagline: 'Sysadmin, Subnetting, Security & Vim',
    emoji: '🛡️',
    theme: 'emerald',
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    dur: '~4 weeks',
    xpReward: 400,
    desc: 'Elevate from a beginner to an engineer who can SSH into servers, troubleshoot connectivity issues, configure DNS, and diagnose logs with confidence.',
    courses: [
      {
        provider: 'Jeremy IT Lab',
        title: 'Free CCNA 200-301 Complete Video Course',
        desc: 'The best networking course on YouTube. Clear coverage of subnets, VLANs, routing, firewalls, and ports.',
        url: 'https://www.youtube.com/watch?v=H8W9oMNSuwo',
        duration: '20h+ Series',
        type: 'Networking Gold Standard',
        badge: 'CCNA Level'
      },
      {
        provider: 'LearnLinuxTV',
        title: 'Linux Administration Bootcamp & Server Guide',
        desc: 'Systemd, SSH keys, cron jobs, disk partitioning, log analysis, and system security.',
        url: 'https://www.youtube.com/@LearnLinuxtv',
        duration: '8h 30m',
        type: 'Sysadmin Masterclass',
        badge: 'Production Ready'
      },
      {
        provider: 'ThePrimeagen',
        title: 'Vim & Terminal Speed Mastery',
        desc: 'Never fear the remote command line again. Master vim, tmux, and rapid remote file editing.',
        url: 'https://www.youtube.com/watch?v=X6AR2RMB5tE',
        duration: '1h 45m',
        type: 'Productivity',
        badge: 'Must Have'
      }
    ],
    labs: [
      {
        name: 'SadServers: Troubleshooting Scenarios',
        desc: 'Real interactive Linux servers with broken configurations for you to diagnose and fix.',
        url: 'https://sadservers.com/',
        type: 'Hands-on Debugging'
      },
      {
        name: 'Subnetting Practice Quizzer',
        desc: 'Interactive drills to calculate IPv4 subnets and CIDR notation in seconds.',
        url: 'https://www.subnetting.net/',
        type: 'Skill Drill'
      }
    ],
    lessons: [
      {
        id: 'l3-1', title: 'Linux Server Administration Bootcamp', type: 'video',
        channel: 'LearnLinuxTV', duration: '8h', xp: 50,
        url: 'https://www.youtube.com/@LearnLinuxtv',
        alt: 'Search "LearnLinuxTV" on YouTube',
        tags: ['Linux', 'Admin', 'Server']
      },
      {
        id: 'l3-2', title: 'Networking Fundamentals & Subnetting (CCNA)', type: 'video',
        channel: 'Jeremy IT Lab', duration: '20h', xp: 70,
        url: 'https://www.youtube.com/watch?v=H8W9oMNSuwo',
        alt: 'Search "Jeremy IT Lab Free CCNA Course" on YouTube',
        tags: ['Networking', 'Subnetting', 'CCNA']
      },
      {
        id: 'l3-3', title: 'TCP/IP, DNS, SSL & HTTP Protocols', type: 'video',
        channel: 'Professor Messer', duration: '3h', xp: 40,
        url: 'https://www.youtube.com/c/professormesser',
        alt: 'Search "Professor Messer Network+ Course" on YouTube',
        tags: ['TCP/IP', 'DNS', 'Protocols']
      },
      {
        id: 'l3-4', title: 'Vim, Nano & SSH Remote Server Mastery', type: 'video',
        channel: 'ThePrimeagen', duration: '1.5h', xp: 30,
        url: 'https://www.youtube.com/watch?v=X6AR2RMB5tE',
        alt: 'Search "Vim Tutorial Beginners ThePrimeagen" on YouTube',
        tags: ['Vim', 'Terminal', 'SSH']
      }
    ]
  },
  {
    id: 4,
    levelNumber: 4,
    title: 'DevOps & Containers Dungeon',
    tagline: 'Docker, Kubernetes & GitHub Actions CI/CD',
    emoji: '🐳',
    theme: 'violet',
    accentColor: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    dur: '~5 weeks',
    xpReward: 500,
    desc: 'Modern cloud engineering is container-first. Package apps with Docker, orchestrate with Kubernetes, and automate deployments with CI/CD pipelines.',
    courses: [
      {
        provider: 'TechWorld with Nana',
        title: 'Docker Tutorial for Beginners – Complete Course',
        desc: 'Crystal clear animations explaining Dockerfiles, images, containers, volumes, networks, and docker-compose.',
        url: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
        duration: '3h 10m',
        type: 'Visual Masterclass',
        badge: '⭐ Beginner Gold'
      },
      {
        provider: 'TechWorld with Nana',
        title: 'Kubernetes Tutorial for Beginners [4 Hours]',
        desc: 'Pods, Services, Ingress, ConfigMaps, Secrets, Deployments, and StatefulSets explained simply.',
        url: 'https://www.youtube.com/watch?v=X48VuDVv0do',
        duration: '4h 00m',
        type: 'Orchestration Course',
        badge: 'High Demand'
      },
      {
        provider: 'TechWorld with Nana',
        title: 'GitHub Actions Full Course – Modern CI/CD',
        desc: 'Build automated pipelines that test code, build Docker images, and push them to cloud registries on every git push.',
        url: 'https://www.youtube.com/watch?v=R8_veQiYBjI',
        duration: '2h 15m',
        type: 'CI/CD Pipeline',
        badge: 'Essential Automation'
      },
      {
        provider: 'TrainWithShubham',
        title: 'DevOps Zero to Hero Bootcamp (Live Real Projects)',
        desc: 'Hands-on projects linking Git, Jenkins, Docker, and AWS together in real-world scenarios.',
        url: 'https://www.youtube.com/@trainwithshubham',
        duration: '40h Series',
        type: 'Project Series',
        badge: 'Hands-on Portfolio'
      }
    ],
    labs: [
      {
        name: 'Play with Docker (Free Browser Sandbox)',
        desc: 'Run a 4-hour full Docker sandbox right in your web browser with zero local installation.',
        url: 'https://labs.play-with-docker.com/',
        type: 'Browser Playground'
      },
      {
        name: 'Play with Kubernetes (Free Cluster)',
        desc: 'Free 4-hour 3-node Kubernetes cluster to practice kubectl commands live.',
        url: 'https://labs.play-with-k8s.com/',
        type: 'Browser Playground'
      }
    ],
    lessons: [
      {
        id: 'l4-1', title: 'Docker Containers & Compose Complete Guide', type: 'video',
        channel: 'TechWorldwithNana', duration: '3h', xp: 50,
        url: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
        alt: 'Search "Docker Tutorial for Beginners TechWorld with Nana" on YouTube',
        tags: ['Docker', 'Containers', 'Docker Compose']
      },
      {
        id: 'l4-2', title: 'Kubernetes Architecture & Core Objects', type: 'video',
        channel: 'TechWorldwithNana', duration: '4h', xp: 60,
        url: 'https://www.youtube.com/watch?v=X48VuDVv0do',
        alt: 'Search "Kubernetes Tutorial Full Course TechWorld with Nana" on YouTube',
        tags: ['Kubernetes', 'K8s', 'Orchestration']
      },
      {
        id: 'l4-3', title: 'GitHub Actions CI/CD Pipeline Automation', type: 'video',
        channel: 'TechWorldwithNana', duration: '2h', xp: 50,
        url: 'https://www.youtube.com/watch?v=R8_veQiYBjI',
        alt: 'Search "GitHub Actions Full Course TechWorld with Nana" on YouTube',
        tags: ['CI/CD', 'GitHub Actions', 'Pipelines']
      },
      {
        id: 'l4-4', title: 'Jenkins CI/CD Automation Fundamentals', type: 'video',
        channel: 'KodeKloud', duration: '5h', xp: 40,
        url: 'https://www.youtube.com/watch?v=pMO26j2OUME',
        alt: 'Search "Jenkins Full Course KodeKloud" on YouTube',
        tags: ['Jenkins', 'CI/CD', 'Builds']
      },
      {
        id: 'l4-5', title: 'Real-World DevOps Project Deployment', type: 'video',
        channel: 'TrainWithShubham', duration: '6h', xp: 60,
        url: 'https://www.youtube.com/@trainwithshubham',
        alt: 'Search "TrainWithShubham DevOps Bootcamp" on YouTube',
        tags: ['Project', 'AWS', 'Docker']
      }
    ]
  },
  {
    id: 5,
    levelNumber: 5,
    title: 'IaC Kingdom',
    tagline: 'Terraform, Ansible & CloudFormation',
    emoji: '🏗️',
    theme: 'orange',
    accentColor: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    dur: '~3 weeks',
    xpReward: 400,
    desc: 'Stop clicking buttons in cloud consoles! Professional cloud engineers declare infrastructure as code so environments can be created and destroyed in minutes.',
    courses: [
      {
        provider: 'freeCodeCamp & Sanjeev Thiyagarajan',
        title: 'Terraform Course – Automate Your AWS Infrastructure',
        desc: 'HCL syntax, providers, state management, variables, modules, and creating production VPCs and EC2 instances.',
        url: 'https://www.youtube.com/watch?v=SLB_c_ayRMo',
        duration: '2h 30m',
        type: 'IaC Masterclass',
        badge: 'Industry Standard'
      },
      {
        provider: 'freeCodeCamp',
        title: 'Ansible Full Course for Beginners',
        desc: 'Inventory files, playbooks, YAML syntax, idempotency, and automated server configuration.',
        url: 'https://www.youtube.com/watch?v=KuiAiQkNFKQ',
        duration: '1h 30m',
        type: 'Config Management',
        badge: 'Multi-Server'
      },
      {
        provider: 'Intellipaat',
        title: 'AWS CloudFormation Full Tutorial',
        desc: 'Native AWS templating with CloudFormation, stacks, change sets, and parameter handling.',
        url: 'https://www.youtube.com/watch?v=Omppm_YcKok',
        duration: '2h 00m',
        type: 'AWS Native IaC',
        badge: 'AWS Focus'
      }
    ],
    labs: [
      {
        name: 'HashiCorp Learn Terraform Tutorials',
        desc: 'Official interactive tutorials with code snippets and architecture explanations.',
        url: 'https://developer.hashicorp.com/terraform/tutorials',
        type: 'Official Tutorials'
      },
      {
        name: 'LocalStack (Free Local AWS)',
        desc: 'Run a mock AWS environment on your laptop to test Terraform code with $0 cloud bills.',
        url: 'https://localstack.cloud/',
        type: 'Local Sandbox'
      }
    ],
    lessons: [
      {
        id: 'l5-1', title: 'Terraform Fundamentals & AWS Provisioning', type: 'video',
        channel: 'freeCodeCamp', duration: '2.5h', xp: 50,
        url: 'https://www.youtube.com/watch?v=SLB_c_ayRMo',
        alt: 'Search "Terraform Tutorial freeCodeCamp" on YouTube',
        tags: ['Terraform', 'HCL', 'AWS']
      },
      {
        id: 'l5-2', title: 'Ansible Playbooks & Configuration Automation', type: 'video',
        channel: 'freeCodeCamp', duration: '1.5h', xp: 40,
        url: 'https://www.youtube.com/watch?v=KuiAiQkNFKQ',
        alt: 'Search "Ansible Full Course freeCodeCamp" on YouTube',
        tags: ['Ansible', 'YAML', 'Config']
      },
      {
        id: 'l5-3', title: 'AWS CloudFormation Stacks & Templates', type: 'video',
        channel: 'Intellipaat', duration: '2h', xp: 40,
        url: 'https://www.youtube.com/watch?v=Omppm_YcKok',
        alt: 'Search "AWS CloudFormation Tutorial Intellipaat" on YouTube',
        tags: ['CloudFormation', 'AWS', 'IaC']
      }
    ]
  },
  {
    id: 6,
    levelNumber: 6,
    title: 'Security & Monitoring Bastion',
    tagline: 'IAM, KMS, Prometheus, Grafana & CloudWatch',
    emoji: '🔐',
    theme: 'cyan',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    dur: '~3 weeks',
    xpReward: 400,
    desc: 'Protect and observe! Master the Principle of Least Privilege, cryptographic key management, threat detection, and real-time observability dashboards.',
    courses: [
      {
        provider: 'freeCodeCamp',
        title: 'Cloud Security Fundamentals & Architecture',
        desc: 'Shared responsibility model, defense-in-depth, zero trust, identity management, and compliance.',
        url: 'https://www.youtube.com/watch?v=M988_fsOSWo',
        duration: '3h 15m',
        type: 'Security Foundations',
        badge: 'Zero Trust'
      },
      {
        provider: 'TechWorld with Nana',
        title: 'Prometheus & Grafana Complete Monitoring Guide',
        desc: 'Metrics collection, PromQL queries, alerting rules, and gorgeous Grafana visual dashboards.',
        url: 'https://www.youtube.com/watch?v=h4Sl21AKiDg',
        duration: '3h 00m',
        type: 'Observability Course',
        badge: 'Production Monitoring'
      },
      {
        provider: 'TechWorld with Nana',
        title: 'Kubernetes & Cloud Security Best Practices',
        desc: 'Role-Based Access Control (RBAC), network policies, secret encryption, and container vulnerability scanning.',
        url: 'https://www.youtube.com/watch?v=oBf5lrmquYI',
        duration: '1h 30m',
        type: 'SecOps Focus',
        badge: 'K8s SecOps'
      }
    ],
    labs: [
      {
        name: 'AWS Well-Architected Security Labs',
        desc: 'Official hands-on walkthroughs to secure IAM, encryption, and incident response.',
        url: 'https://wellarchitectedlabs.com/security/',
        type: 'Self-Paced Labs'
      },
      {
        name: 'Grafana Play Sandbox',
        desc: 'Explore live, interactive production monitoring dashboards with real server metrics.',
        url: 'https://play.grafana.org/',
        type: 'Live Sandbox'
      }
    ],
    lessons: [
      {
        id: 'l6-1', title: 'Cloud Security Principles & Zero Trust', type: 'video',
        channel: 'freeCodeCamp', duration: '3h', xp: 50,
        url: 'https://www.youtube.com/watch?v=M988_fsOSWo',
        alt: 'Search "Cloud Security Fundamentals freeCodeCamp" on YouTube',
        tags: ['Security', 'IAM', 'Compliance']
      },
      {
        id: 'l6-2', title: 'Prometheus & Grafana Observability Dashboards', type: 'video',
        channel: 'TechWorldwithNana', duration: '3h', xp: 50,
        url: 'https://www.youtube.com/watch?v=h4Sl21AKiDg',
        alt: 'Search "Prometheus Grafana Tutorial TechWorld with Nana" on YouTube',
        tags: ['Monitoring', 'Prometheus', 'Grafana']
      },
      {
        id: 'l6-3', title: 'AWS IAM, KMS & VPC Security Groups', type: 'video',
        channel: 'CloudGuru / YouTube', duration: '2h', xp: 40,
        url: 'https://www.youtube.com/results?search_query=AWS+Security+IAM+KMS+free+course',
        alt: 'Search "AWS Security IAM KMS tutorial" on YouTube',
        tags: ['AWS', 'IAM', 'KMS']
      },
      {
        id: 'l6-4', title: 'Kubernetes RBAC & Network Security Policies', type: 'video',
        channel: 'TechWorldwithNana', duration: '1.5h', xp: 40,
        url: 'https://www.youtube.com/watch?v=oBf5lrmquYI',
        alt: 'Search "Kubernetes Security Best Practices" on YouTube',
        tags: ['K8s', 'RBAC', 'Security']
      }
    ]
  },
  {
    id: 7,
    levelNumber: 7,
    title: 'Certification Summit (FINAL BOSS)',
    tagline: 'Pass Your Exams & Land Your First Cloud Role',
    emoji: '👑',
    theme: 'gold',
    accentColor: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.5)',
    dur: '~4 weeks',
    xpReward: 750,
    desc: 'The grand finale! Pass your AWS or Azure certification exam, build 2 standout portfolio projects on GitHub, and start applying for Cloud Engineer, DevOps, and Sysadmin positions!',
    courses: [
      {
        provider: 'freeCodeCamp & Andrew Brown',
        title: 'AWS CLF-C02 Full Practice Exam & Cram',
        desc: 'Review questions, cheat sheets, and exam strategy to guarantee passing your first attempt.',
        url: 'https://www.youtube.com/watch?v=NhDYbskXRgc',
        duration: '14h Comprehensive',
        type: 'Exam Master',
        badge: '🎯 100% Free Pass Prep'
      },
      {
        provider: 'Microsoft Learn / Adam Marczak',
        title: 'Microsoft Azure AZ-900 Full Exam Prep',
        desc: 'Practice tests, mock scenarios, and free official training days that can provide exam discounts.',
        url: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/',
        duration: '8h Review',
        type: 'Azure Exam Prep',
        badge: 'Official Prep'
      },
      {
        provider: 'KodeKloud',
        title: 'CKA Certified Kubernetes Administrator Practice Guide',
        desc: 'Fast terminal tips and commands to conquer the hands-on Kubernetes performance exam.',
        url: 'https://www.youtube.com/watch?v=KVBON1lA9N8',
        duration: '15h Practice',
        type: 'CKA Certification',
        badge: 'High Value'
      },
      {
        provider: 'Cloud Resume Challenge (Forrest Brazeal)',
        title: 'Build Your Cloud Resume Project',
        desc: 'Deploy a static HTML resume in AWS S3/CloudFront with DynamoDB view counter, Lambda API, and GitHub Actions CI/CD.',
        url: 'https://cloudresumechallenge.dev/',
        duration: 'Capstone Project',
        type: 'Portfolio Masterpiece',
        badge: '🚀 Interview Clincher'
      }
    ],
    labs: [
      {
        name: 'AWS Free Tier 12-Month Account',
        desc: '750 hrs/mo EC2, 5GB S3, 25GB DynamoDB free to host your live portfolio project.',
        url: 'https://aws.amazon.com/free/',
        type: '1 Year Free Cloud'
      },
      {
        name: 'GitHub Pages Free Project Hosting',
        desc: 'Host your documentation and live portfolio sites free with your own custom domain.',
        url: 'https://pages.github.com/',
        type: 'Free Hosting'
      }
    ],
    lessons: [
      {
        id: 'l7-1', title: 'AWS Cloud Practitioner (CLF-C02) Full Exam Review', type: 'video',
        channel: 'freeCodeCamp / ExamPro', duration: '14h', xp: 80,
        url: 'https://www.youtube.com/watch?v=NhDYbskXRgc',
        alt: 'Search "AWS Cloud Practitioner CLF-C02 freeCodeCamp" on YouTube',
        tags: ['AWS', 'Certification', 'Exam']
      },
      {
        id: 'l7-2', title: 'Microsoft Azure AZ-900 Exam Practice Test', type: 'video',
        channel: 'Microsoft / Adam Marczak', duration: '8h', xp: 70,
        url: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/',
        alt: 'Visit Microsoft Learn for AZ-900 practice questions',
        tags: ['Azure', 'AZ-900', 'Certification']
      },
      {
        id: 'l7-3', title: 'Google Cloud Digital Leader Exam Overview', type: 'video',
        channel: 'Google Cloud Skills Boost', duration: '10h', xp: 70,
        url: 'https://cloud.google.com/certification/cloud-digital-leader',
        alt: 'Visit cloud.google.com/certification for Digital Leader free path',
        tags: ['GCP', 'Digital Leader', 'Certification']
      },
      {
        id: 'l7-4', title: 'Certified Kubernetes Administrator (CKA) Drills', type: 'video',
        channel: 'KodeKloud', duration: '15h', xp: 80,
        url: 'https://www.youtube.com/watch?v=KVBON1lA9N8',
        alt: 'Search "CKA Course KodeKloud" on YouTube',
        tags: ['Kubernetes', 'CKA', 'Certification']
      },
      {
        id: 'l7-5', title: 'Deploy Cloud Resume Challenge to GitHub & AWS', type: 'project',
        channel: 'Your Own Portfolio 🌟', duration: 'Project', xp: 120,
        url: 'https://cloudresumechallenge.dev/',
        alt: 'Follow the Cloud Resume Challenge instructions online',
        tags: ['Portfolio', 'Resume', 'GitHub', 'Job Ready']
      }
    ]
  }
];

/* ── TARGET CERTIFICATIONS ── */
const CERTS = [
  {
    id: 'aws-clf',
    badge: '🟠', badgeClass: 'aws',
    provider: 'Amazon Web Services',
    name: 'AWS Cloud Practitioner (CLF-C02)',
    desc: 'The #1 entry-level cloud cert globally. Highly recommended for complete beginners.',
    difficulty: 'Beginner', cost: '~$100', duration: '1–2 months',
    freePrep: true,
    links: [
      { label: '📹 Free Video Course', url: 'https://www.youtube.com/watch?v=NhDYbskXRgc', type: 'primary' },
      { label: '📚 AWS Skill Builder', url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials', type: 'secondary' },
    ]
  },
  {
    id: 'az-900',
    badge: '🔵', badgeClass: 'azure',
    provider: 'Microsoft Azure',
    name: 'Azure Fundamentals (AZ-900)',
    desc: 'Microsoft cloud fundamentals cert. Look for free vouchers through Microsoft Virtual Training Days.',
    difficulty: 'Beginner', cost: '~$99 (Vouchers available)', duration: '2–4 weeks',
    freePrep: true,
    links: [
      { label: '📹 YouTube Prep', url: 'https://www.youtube.com/watch?v=NPEsD6n9A_I', type: 'primary' },
      { label: '📚 Microsoft Learn', url: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/', type: 'secondary' },
    ]
  },
  {
    id: 'gcp-cdl',
    badge: '🟢', badgeClass: 'gcp',
    provider: 'Google Cloud',
    name: 'Cloud Digital Leader',
    desc: 'Google Cloud foundational knowledge and business capabilities cert.',
    difficulty: 'Beginner', cost: 'Varies by region', duration: '2–4 weeks',
    freePrep: true,
    links: [
      { label: '📚 Google Cloud Skills', url: 'https://cloud.google.com/certification/cloud-digital-leader', type: 'primary' },
      { label: '📹 YouTube Prep', url: 'https://www.youtube.com/results?search_query=Google+Cloud+Digital+Leader+full+course', type: 'secondary' },
    ]
  },
  {
    id: 'aws-saa',
    badge: '🟠', badgeClass: 'aws',
    provider: 'Amazon Web Services',
    name: 'AWS Solutions Architect Associate',
    desc: 'The gold standard industry cert that opens up $80k–$130k+ job interviews.',
    difficulty: 'Intermediate', cost: '~$150', duration: '2–3 months',
    freePrep: true,
    links: [
      { label: '📹 Free Video Prep', url: 'https://www.youtube.com/watch?v=c3Cn4xYfxJY', type: 'primary' },
      { label: '📚 Official AWS Path', url: 'https://explore.skillbuilder.aws/', type: 'secondary' },
    ]
  },
  {
    id: 'cka',
    badge: '⚙️', badgeClass: 'k8s',
    provider: 'CNCF / Linux Foundation',
    name: 'Certified Kubernetes Administrator (CKA)',
    desc: '100% hands-on performance-based exam inside a real cluster. Huge career accelerator.',
    difficulty: 'Intermediate', cost: '~$395', duration: '2–3 months',
    freePrep: true,
    links: [
      { label: '📹 KodeKloud CKA Prep', url: 'https://www.youtube.com/watch?v=KVBON1lA9N8', type: 'primary' },
      { label: '📚 CNCF Official', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/', type: 'secondary' },
    ]
  },
  {
    id: 'linux-plus',
    badge: '🐧', badgeClass: 'linux',
    provider: 'CompTIA / Linux Foundation',
    name: 'Linux+ / LFCS Admin',
    desc: 'Validates real Linux command-line mastery and system administration expertise.',
    difficulty: 'Intermediate', cost: '~$200', duration: '1–2 months',
    freePrep: true,
    links: [
      { label: '📹 Free LFCS Prep', url: 'https://www.youtube.com/results?search_query=LFCS+exam+prep+free', type: 'primary' },
      { label: '📚 Linux Foundation', url: 'https://training.linuxfoundation.org/', type: 'secondary' },
    ]
  }
];

/* ══════════════════════════════════
   APP STATE & LOCALSTORAGE
══════════════════════════════════ */
let state = {
  completedLessons: [],
  earnedCerts: [],
  xp: 0,
  streak: 0,
  lastVisit: null,
  activeModalStage: null
};

function loadState() {
  try {
    const saved = localStorage.getItem('cloudquest_state');
    if (saved) state = { ...state, ...JSON.parse(saved) };
  } catch (e) {}
}

function saveState() {
  try {
    localStorage.setItem('cloudquest_state', JSON.stringify(state));
  } catch (e) {}
}

function getTotalLessons() {
  return STAGES.reduce((acc, s) => acc + s.lessons.length, 0);
}

function getStageStats(stageId) {
  const stage = STAGES.find(s => s.id === stageId);
  if (!stage) return { total: 0, done: 0, pct: 0, stars: 0, isUnlocked: false };
  const total = stage.lessons.length;
  const done = stage.lessons.filter(l => state.completedLessons.includes(l.id)).length;
  const pct = total > 0 ? (done / total) * 100 : 0;

  // Star calculation (Candy Crush 3-star mechanic)
  let stars = 0;
  if (pct >= 100) stars = 3;
  else if (pct >= 50) stars = 2;
  else if (pct > 0) stars = 1;

  // Unlock logic: Stage 1 is always unlocked.
  // Subsequent stages unlock if the previous stage is at least 50% completed (1+ stars)
  let isUnlocked = false;
  if (stage.id === 1) {
    isUnlocked = true;
  } else {
    const prevStage = STAGES.find(s => s.id === stage.id - 1);
    if (prevStage) {
      const prevDone = prevStage.lessons.filter(l => state.completedLessons.includes(l.id)).length;
      const prevPct = prevStage.lessons.length > 0 ? prevDone / prevStage.lessons.length : 0;
      isUnlocked = prevPct >= 0.5;
    }
  }

  return { total, done, pct, stars, isUnlocked };
}

/* ══════════════════════════════════
   STREAK TRACKING
══════════════════════════════════ */
function updateStreak() {
  const today = new Date().toDateString();
  if (!state.lastVisit) {
    state.streak = 1;
  } else {
    const last = new Date(state.lastVisit);
    const now = new Date();
    const diff = Math.floor((now - last) / 86400000);
    if (diff === 1) state.streak += 1;
    else if (diff > 1) state.streak = 1;
  }
  state.lastVisit = today;
  saveState();
}

/* ══════════════════════════════════
   RENDER CANDY CRUSH ROADMAP
══════════════════════════════════ */
function renderCandyMap() {
  const mapContainer = document.getElementById('candyTrailNodes');
  if (!mapContainer) return;
  mapContainer.innerHTML = '';

  // Determine current active level (the first unlocked stage that is not 100% finished)
  let currentActiveStageId = 1;
  for (const s of STAGES) {
    const st = getStageStats(s.id);
    if (st.isUnlocked && st.pct < 100) {
      currentActiveStageId = s.id;
      break;
    }
    if (st.isUnlocked && st.pct === 100) {
      currentActiveStageId = s.id; // if all done, final stage
    }
  }

  // Winding serpentine positions (X offset in percent for an organic curve)
  // Stage 1 (bottom) to Stage 7 (top)
  const xPositions = [50, 26, 74, 30, 70, 32, 50];

  STAGES.forEach((stage, idx) => {
    const stats = getStageStats(stage.id);
    const isCurrent = stage.id === currentActiveStageId;
    const isBoss = stage.id === 7;

    const nodeEl = document.createElement('div');
    nodeEl.className = `candy-level-wrap stage-${stage.theme} ${stats.isUnlocked ? 'unlocked' : 'locked'} ${stats.pct === 100 ? 'completed' : ''} ${isCurrent ? 'current-player' : ''} ${isBoss ? 'boss-level' : ''}`;
    nodeEl.dataset.stageId = stage.id;
    nodeEl.style.setProperty('--x-pos', `${xPositions[idx]}%`);

    // Generate stars HTML
    const star1 = stats.stars >= 1 ? 'gold' : 'empty';
    const star2 = stats.stars >= 2 ? 'gold' : 'empty';
    const star3 = stats.stars >= 3 ? 'gold' : 'empty';

    nodeEl.innerHTML = `
      ${isCurrent ? `
        <div class="player-avatar-marker" title="You are currently adventuring here!">
          <div class="player-speech-bubble">YOU ARE HERE!</div>
          <div class="avatar-head">🤠</div>
        </div>
      ` : ''}

      ${isBoss ? `<div class="boss-crown-badge">👑 FINAL BOSS</div>` : ''}

      <div class="candy-ribbon">
        <span class="ribbon-text">${stage.title}</span>
      </div>

      <button class="candy-node-btn" aria-label="Level ${stage.levelNumber}: ${stage.title}" onclick="openStageDrawer(${stage.id})">
        <div class="candy-inner-gloss"></div>
        <div class="node-level-num">
          ${stats.isUnlocked ? (stats.pct === 100 ? '✓' : stage.levelNumber) : '🔒'}
        </div>
        <div class="node-emoji-tag">${stage.emoji}</div>
      </button>

      <div class="node-stars-pedestal">
        <span class="candy-star ${star1}">★</span>
        <span class="candy-star mid ${star2}">★</span>
        <span class="candy-star ${star3}">★</span>
      </div>

      <div class="node-mini-progress">
        <div class="nmp-fill" style="width: ${stats.pct}%"></div>
      </div>
      <div class="node-quick-stats">
        <span>${stats.done}/${stats.total} Completed</span>
      </div>
    `;

    mapContainer.appendChild(nodeEl);
  });
}

/* ══════════════════════════════════
   STAGE DRAWER / MODAL
══════════════════════════════════ */
function openStageDrawer(stageId) {
  const stage = STAGES.find(s => s.id === stageId);
  if (!stage) return;

  const stats = getStageStats(stageId);
  if (!stats.isUnlocked) {
    showToast('🔒 Complete at least 50% of the previous level to unlock this stage!', 'xp-toast');
    return;
  }

  state.activeModalStage = stageId;
  const modal = document.getElementById('stageDrawerModal');
  if (!modal) return;

  renderStageDrawerContent(stage, stats);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStageDrawer() {
  const modal = document.getElementById('stageDrawerModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  state.activeModalStage = null;
}

function renderStageDrawerContent(stage, stats) {
  const drawerBody = document.getElementById('stageDrawerContent');
  if (!drawerBody) return;

  const star1 = stats.stars >= 1 ? 'gold' : 'empty';
  const star2 = stats.stars >= 2 ? 'gold' : 'empty';
  const star3 = stats.stars >= 3 ? 'gold' : 'empty';

  drawerBody.innerHTML = `
    <div class="drawer-banner theme-${stage.theme}">
      <div class="db-badge">LEVEL ${stage.levelNumber} · ${stage.dur} · 🌟 +${stage.xpReward} XP</div>
      <h2 class="db-title">${stage.emoji} ${stage.title}</h2>
      <p class="db-tagline">${stage.tagline}</p>
      <p class="db-desc">${stage.desc}</p>
      
      <div class="drawer-stats-row">
        <div class="ds-pill">
          <span class="ds-val">${stats.done} / ${stats.total}</span>
          <span class="ds-lbl">Lessons</span>
        </div>
        <div class="ds-pill">
          <span class="ds-val">${Math.round(stats.pct)}%</span>
          <span class="ds-lbl">Mastery</span>
        </div>
        <div class="ds-pill stars-pill">
          <span class="candy-star ${star1}">★</span>
          <span class="candy-star ${star2}">★</span>
          <span class="candy-star ${star3}">★</span>
          <span class="ds-lbl">${stats.stars}/3 Stars</span>
        </div>
      </div>
      <div class="drawer-progress-bar">
        <div class="dpb-fill" style="width: ${stats.pct}%"></div>
      </div>
    </div>

    <!-- TABS INSIDE STAGE -->
    <div class="drawer-tabs">
      <button class="dtab-btn active" onclick="switchDrawerTab(event, 'dtab-lessons')">
        ✅ Lesson Checklist (${stats.done}/${stats.total})
      </button>
      <button class="dtab-btn" onclick="switchDrawerTab(event, 'dtab-courses')">
        🎬 Full Master Courses (${stage.courses.length})
      </button>
      <button class="dtab-btn" onclick="switchDrawerTab(event, 'dtab-labs')">
        🧪 Hands-On Labs (${stage.labs.length})
      </button>
    </div>

    <!-- TAB 1: LESSON CHECKLIST -->
    <div class="dtab-pane active" id="dtab-lessons">
      <div class="drawer-section-hint">
        💡 Check off lessons as you watch to earn XP, level up, and unlock your next Candy Crush level!
      </div>
      <div class="stage-lessons-list">
        ${stage.lessons.map(lesson => {
          const isDone = state.completedLessons.includes(lesson.id);
          const icon = lesson.type === 'project' ? '🚀' : '📹';
          return `
            <div class="drawer-lesson-card ${isDone ? 'done' : ''}" data-lesson-id="${lesson.id}">
              <div class="dlc-checkbox" onclick="handleLessonToggle('${lesson.id}', ${lesson.xp}, ${stage.id})">
                ${isDone ? '✓' : ''}
              </div>
              <div class="dlc-content" onclick="handleLessonToggle('${lesson.id}', ${lesson.xp}, ${stage.id})">
                <div class="dlc-title">${lesson.title}</div>
                <div class="dlc-meta">${icon} ${lesson.channel} · ⏱️ ${lesson.duration} · <span class="dlc-xp">+${lesson.xp} XP</span></div>
                <div class="dlc-tags">
                  ${lesson.tags.map(t => `<span class="lesson-tag">${t}</span>`).join('')}
                </div>
              </div>
              <div class="dlc-action">
                <a href="${lesson.url}" target="_blank" rel="noopener" class="btn-watch" onclick="event.stopPropagation()">
                  Watch Video ▶
                </a>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- TAB 2: FULL COURSES (AWS, GCP, AZURE, ETC.) -->
    <div class="dtab-pane" id="dtab-courses">
      <div class="drawer-section-hint">
        🎓 Comprehensive full-length video courses hand-selected to take you from beginner to job-ready.
      </div>
      <div class="drawer-courses-grid">
        ${stage.courses.map(course => `
          <div class="stage-course-card">
            <div class="scc-header">
              <span class="scc-badge">${course.badge}</span>
              <span class="scc-dur">⏱️ ${course.duration}</span>
            </div>
            <h3 class="scc-title">${course.title}</h3>
            <div class="scc-provider">Provided by <strong>${course.provider}</strong></div>
            <p class="scc-desc">${course.desc}</p>
            <div class="scc-footer">
              <span class="scc-type">${course.type}</span>
              <a href="${course.url}" target="_blank" rel="noopener" class="scc-btn">
                Start Course 🚀
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 3: HANDS-ON LABS & SANDBOXES -->
    <div class="dtab-pane" id="dtab-labs">
      <div class="drawer-section-hint">
        🛠️ Practical cloud sandboxes and interactive playgrounds where you can run real commands with $0 cost.
      </div>
      <div class="drawer-labs-grid">
        ${stage.labs.map(lab => `
          <div class="stage-lab-card">
            <div class="slc-icon">🧪</div>
            <div class="slc-info">
              <div class="slc-type">${lab.type}</div>
              <h3 class="slc-name">${lab.name}</h3>
              <p class="slc-desc">${lab.desc}</p>
              <a href="${lab.url}" target="_blank" rel="noopener" class="slc-link">
                Open Free Lab ↗
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function switchDrawerTab(e, tabId) {
  document.querySelectorAll('.dtab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.dtab-pane').forEach(p => p.classList.remove('active'));
  e.currentTarget.classList.add('active');
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
}

function handleLessonToggle(lessonId, xp, stageId) {
  const idx = state.completedLessons.indexOf(lessonId);
  if (idx === -1) {
    state.completedLessons.push(lessonId);
    state.xp += xp;
    showToast(`⭐ +${xp} XP! Awesome progress! 🚀`, 'xp-toast');
    triggerConfetti();
  } else {
    state.completedLessons.splice(idx, 1);
    state.xp = Math.max(0, state.xp - xp);
  }
  saveState();

  // Re-render drawer content to update stats, progress and checkboxes
  const stage = STAGES.find(s => s.id === stageId);
  if (stage) {
    const stats = getStageStats(stageId);
    renderStageDrawerContent(stage, stats);
    if (stats.pct === 100) {
      showToast(`🎉 STAGE ${stage.levelNumber} FULLY MASTERED! 3 STARS EARNED! 🌟`, 'done-toast');
    }
  }

  // Update map and dashboard
  renderCandyMap();
  updateDashboard();
}

/* ══════════════════════════════════
   DASHBOARD UPDATE
══════════════════════════════════ */
const LEVELS = [
  { min: 0, name: '🌱 Cloud Seedling', next: 'Cloud Explorer at 200 XP' },
  { min: 200, name: '☁️ Cloud Explorer', next: 'Cloud Builder at 500 XP' },
  { min: 500, name: '🔧 Cloud Builder', next: 'Cloud Specialist at 1000 XP' },
  { min: 1000, name: '⚙️ Cloud Specialist', next: 'Cloud Architect at 1800 XP' },
  { min: 1800, name: '🏗️ Cloud Architect', next: 'Cloud Grandmaster at 2500 XP' },
  { min: 2500, name: '👑 Cloud Grandmaster', next: 'MAX LEVEL — Job Ready Hero! 🚀' },
];

function getLevel(xp) {
  let level = LEVELS[0];
  for (const l of LEVELS) {
    if (xp >= l.min) level = l;
  }
  return level;
}

function animateNumber(el, target) {
  if (!el) return;
  const current = parseInt(el.textContent) || 0;
  const diff = target - current;
  if (diff === 0) return;
  const steps = 25;
  let step = 0;
  const interval = setInterval(() => {
    step++;
    el.textContent = Math.round(current + (diff * step / steps));
    if (step >= steps) {
      el.textContent = target;
      clearInterval(interval);
    }
  }, 20);
}

function updateDashboard() {
  const total = getTotalLessons();
  const done = state.completedLessons.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const certsDone = state.earnedCerts.length;
  const level = getLevel(state.xp);

  // Total stars across all stages
  let totalStars = 0;
  STAGES.forEach(s => {
    totalStars += getStageStats(s.id).stars;
  });

  animateNumber(document.getElementById('totalXP'), state.xp);
  animateNumber(document.getElementById('xpCount'), state.xp);
  animateNumber(document.getElementById('completedCount'), done);
  animateNumber(document.getElementById('certCount'), certsDone);
  animateNumber(document.getElementById('streakCount'), state.streak);

  const starCountEl = document.getElementById('totalStarsCount');
  if (starCountEl) animateNumber(starCountEl, totalStars);

  const bar = document.getElementById('overallBar');
  if (bar) bar.style.width = pct + '%';
  const pctEl = document.getElementById('overallPct');
  if (pctEl) pctEl.textContent = pct + '%';

  const ln = document.getElementById('levelName');
  if (ln) ln.textContent = level.name;
  const nl = document.getElementById('nextLevel');
  if (nl) nl.textContent = level.next;
}

/* ══════════════════════════════════
   RENDER CERTIFICATIONS
══════════════════════════════════ */
function renderCerts() {
  const grid = document.getElementById('certsGrid');
  if (!grid) return;

  grid.innerHTML = CERTS.map(cert => {
    const isEarned = state.earnedCerts.includes(cert.id);
    return `
      <div class="cert-card ${isEarned ? 'earned' : ''}">
        <div class="cert-header">
          <div class="cert-badge ${cert.badgeClass}">${cert.badge}</div>
          <div class="cert-info">
            <div class="cert-provider">${cert.provider}</div>
            <div class="cert-name">${cert.name}</div>
          </div>
        </div>
        <div class="cert-desc">${cert.desc}</div>
        <div class="cert-meta">
          <span class="cert-pill">${cert.difficulty}</span>
          <span class="cert-pill">${cert.cost}</span>
          <span class="cert-pill">${cert.duration}</span>
          ${cert.freePrep ? '<span class="cert-pill free-pill">✅ Free Prep Included</span>' : ''}
        </div>
        <div class="cert-links">
          ${cert.links.map(l => `<a class="cert-link ${l.type}" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
        </div>
        <div class="cert-done">
          <button class="cert-mark-btn ${isEarned ? 'earned' : ''}" data-cert-id="${cert.id}">
            ${isEarned ? '🏆 Claimed & Earned!' : '✅ Mark as Passed (+200 XP)'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  grid.querySelectorAll('.cert-mark-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.certId;
      const idx = state.earnedCerts.indexOf(id);
      if (idx === -1) {
        state.earnedCerts.push(id);
        state.xp += 200;
        showToast('🏆 Certification verified! +200 XP! You are becoming unstoppable!', 'done-toast');
        triggerConfetti();
      } else {
        state.earnedCerts.splice(idx, 1);
        state.xp = Math.max(0, state.xp - 200);
      }
      saveState();
      renderCerts();
      updateDashboard();
    });
  });
}

/* ══════════════════════════════════
   TOAST SYSTEM
══════════════════════════════════ */
function showToast(msg, cls = '') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${cls}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.4s ease forwards';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ══════════════════════════════════
   CONFETTI CANNON
══════════════════════════════════ */
function triggerConfetti() {
  let canvas = document.getElementById('confetti-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    document.body.appendChild(canvas);
  }
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const colors = ['#f59e0b', '#ec4899', '#10b981', '#8b5cf6', '#f97316', '#06b6d4', '#fbbf24'];
  const particles = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: -10,
    r: Math.random() * 7 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 5,
    vy: Math.random() * 4 + 2,
    angle: Math.random() * 360,
    spin: (Math.random() - 0.5) * 0.25,
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r);
      ctx.restore();
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.spin;
      p.vy += 0.05;
    });
    frame++;
    if (frame < 130) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

/* ══════════════════════════════════
   GSAP ANIMATIONS
══════════════════════════════════ */
function initAnimations() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  // Floating hero doodles
  gsap.to('.f1', { y: -16, rotation: 6, duration: 4, yoyo: true, repeat: -1, ease: 'sine.inOut' });
  gsap.to('.f2', { y: -14, rotation: -8, duration: 5, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.8 });
  gsap.to('.f3', { y: -20, rotation: 5, duration: 6, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.4 });
  gsap.to('.f4', { y: -12, rotation: -6, duration: 4.5, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.2 });

  // Floating candy elements along the path
  gsap.to('.candy-cloud-1', { x: 25, duration: 8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
  gsap.to('.candy-cloud-2', { x: -30, duration: 9, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1 });
}

/* ══════════════════════════════════
   NAVBAR SCROLL
══════════════════════════════════ */
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ══════════════════════════════════
   PWA INSTALL
══════════════════════════════════ */
let deferredPrompt = null;

function initPWA() {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const banner = document.getElementById('pwaBanner');
    if (banner) banner.style.display = 'flex';
  });

  const installBtn = document.getElementById('installBtn');
  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        await deferredPrompt.userChoice;
        deferredPrompt = null;
      }
      const banner = document.getElementById('pwaBanner');
      if (banner) banner.style.display = 'none';
    });
  }

  const pwaClose = document.getElementById('pwaClose');
  if (pwaClose) {
    pwaClose.addEventListener('click', () => {
      const banner = document.getElementById('pwaBanner');
      if (banner) banner.style.display = 'none';
    });
  }
}

/* ══════════════════════════════════
   RESET PROGRESS
══════════════════════════════════ */
function initReset() {
  const btn = document.getElementById('resetBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (confirm('🗑️ Reset ALL cloud quest progress? This resets XP, stars, and unlocked levels!')) {
      state = {
        completedLessons: [],
        earnedCerts: [],
        xp: 0,
        streak: 0,
        lastVisit: null,
        activeModalStage: null
      };
      saveState();
      location.reload();
    }
  });
}

/* ══════════════════════════════════
   INIT
══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateStreak();
  renderCandyMap();
  renderCerts();
  initNavbar();
  initPWA();
  initReset();
  updateDashboard();

  // Close drawer on backdrop or escape
  const modal = document.getElementById('stageDrawerModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeStageDrawer();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeStageDrawer();
  });

  // GSAP animation hook
  const gsapCheck = setInterval(() => {
    if (typeof gsap !== 'undefined') {
      clearInterval(gsapCheck);
      initAnimations();
    }
  }, 100);
});

/* ── SERVICE WORKER REGISTER ── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
