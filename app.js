/* ════════════════════════════════════════════════════════════════
   CLOUDOPS ROADMAP - ENTERPRISE CURRICULUM DATA & ENGINE
   ════════════════════════════════════════════════════════════════ */

const STAGES = [
  {
    id: 1,
    levelNumber: 1,
    title: 'Phase 01: Systems & Networking Fundamentals',
    tagline: 'Linux Terminal, Networking Protocols, Git & Automation',
    dur: '3 Weeks',
    xpReward: 250,
    desc: 'Master the operating system foundation, networking layer, version control, and scripting language powering modern cloud infrastructure.',
    courses: [
      {
        provider: 'freeCodeCamp',
        title: 'Linux Operating System & Command Line Fundamentals',
        desc: 'Comprehensive introduction to terminal navigation, permissions, process management, users, and package tools.',
        url: 'https://www.youtube.com/watch?v=ROjZy1WbCIA',
        duration: '5h 00m',
        type: 'Masterclass',
        badge: 'Essential Core'
      },
      {
        provider: 'freeCodeCamp',
        title: 'Computer Networking Deep Dive (TCP/IP & OSI Model)',
        desc: 'Fundamentals of computer networks: IP addressing, subnet masking, DNS resolution, HTTP/S protocols, and routing.',
        url: 'https://www.youtube.com/watch?v=qiQR5rTSshw',
        duration: '9h 20m',
        type: 'Comprehensive Course',
        badge: 'Core Skill'
      },
      {
        provider: 'Traversy Media',
        title: 'Git & GitHub Version Control Architecture',
        desc: 'Repository initialization, commit history, branching models, pull request workflows, and remote syncing.',
        url: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc',
        duration: '1h 20m',
        type: 'Practical Guide',
        badge: 'Workflow'
      },
      {
        provider: 'Programming with Mosh',
        title: 'Python Scripting & Infrastructure Automation',
        desc: 'Core syntax, data structures, file handling, and API integration for automated operations.',
        url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
        duration: '6h 15m',
        type: 'Video Series',
        badge: 'Automation'
      }
    ],
    labs: [
      {
        name: 'The Linux Foundation Intro (edX)',
        desc: 'Official Linux Foundation introductory course with practical environment exercises.',
        url: 'https://www.edx.org/learn/linux/the-linux-foundation-introduction-to-linux',
        type: 'Official Course'
      },
      {
        name: 'OverTheWire: Bandit Terminal Wargame',
        desc: 'Interactive Linux command line security challenges to practice terminal commands.',
        url: 'https://overthewire.org/wargames/bandit/',
        type: 'Interactive Terminal'
      }
    ],
    lessons: [
      {
        id: 'l1-1', title: 'Linux Command Line & Operating System Architecture', type: 'video',
        channel: 'freeCodeCamp', duration: '5h', xp: 40,
        url: 'https://www.youtube.com/watch?v=ROjZy1WbCIA',
        tags: ['Linux', 'CLI', 'Operating Systems']
      },
      {
        id: 'l1-2', title: 'Git & GitHub Distributed Version Control', type: 'video',
        channel: 'Traversy Media', duration: '1.5h', xp: 30,
        url: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc',
        tags: ['Git', 'GitHub', 'Version Control']
      },
      {
        id: 'l1-3', title: 'Network Protocols, Subnetting & DNS Architecture', type: 'video',
        channel: 'freeCodeCamp', duration: '9h', xp: 50,
        url: 'https://www.youtube.com/watch?v=qiQR5rTSshw',
        tags: ['Networking', 'TCP/IP', 'DNS']
      },
      {
        id: 'l1-4', title: 'Python Fundamentals for System Automation', type: 'video',
        channel: 'Programming with Mosh', duration: '6h', xp: 40,
        url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
        tags: ['Python', 'Automation', 'Scripting']
      },
      {
        id: 'l1-5', title: 'Bash Shell Scripting & Server Automation', type: 'video',
        channel: 'TechWorld with Nana', duration: '2h', xp: 40,
        url: 'https://www.youtube.com/watch?v=e7BufAVwDiM',
        tags: ['Bash', 'Shell', 'Automation']
      }
    ]
  },
  {
    id: 2,
    levelNumber: 2,
    title: 'Phase 02: Multi-Cloud Infrastructure Core',
    tagline: 'AWS, Google Cloud Platform & Microsoft Azure Architecture',
    dur: '4 Weeks',
    xpReward: 350,
    desc: 'Understand primary cloud service paradigms: compute, object storage, virtual networks, identity & access management across AWS, GCP, and Azure.',
    courses: [
      {
        provider: 'freeCodeCamp & Andrew Brown',
        title: 'AWS Cloud Practitioner Architecture (CLF-C02)',
        desc: 'Full walkthrough of core AWS services: EC2, S3, IAM, VPC, RDS, Lambda, and cost management.',
        url: 'https://www.youtube.com/watch?v=SOTamWNgDKc',
        duration: '14h 00m',
        type: 'AWS Core Course',
        badge: 'Enterprise AWS'
      },
      {
        provider: 'Simplilearn / Google Cloud',
        title: 'Google Cloud Platform (GCP) Fundamentals',
        desc: 'Comprehensive overview of GCP services: Compute Engine, Cloud Storage, VPC, BigQuery, and IAM.',
        url: 'https://www.youtube.com/watch?v=IEEQzmFac9k',
        duration: '6h 30m',
        type: 'GCP Core Course',
        badge: 'GCP Complete'
      },
      {
        provider: 'Adam Marczak (Azure for Everyone)',
        title: 'Microsoft Azure Fundamentals AZ-900 Architecture',
        desc: 'Structural guide covering Azure Resource Manager, Virtual Networks, Blob Storage, and Azure AD.',
        url: 'https://www.youtube.com/watch?v=NPEsD6n9A_I',
        duration: '8h 15m',
        type: 'Azure Core Course',
        badge: 'Azure AZ-900'
      },
      {
        provider: 'Intellipaat',
        title: 'AWS Core Services Deep Dive (EC2, S3, IAM, VPC)',
        desc: 'Practical lab-heavy guide focusing directly on architectural service configuration.',
        url: 'https://www.youtube.com/watch?v=k1RI5locZE4',
        duration: '4h 00m',
        type: 'Lab Walkthrough',
        badge: 'Hands-On'
      }
    ],
    labs: [
      {
        name: 'AWS Skill Builder Official Hub',
        desc: '600+ official free digital courses and self-paced AWS learning modules.',
        url: 'https://explore.skillbuilder.aws/',
        type: 'Official Portal'
      },
      {
        name: 'Google Cloud Skills Boost',
        desc: 'Interactive GCP browser sandboxes and shareable skill credentials.',
        url: 'https://www.cloudskillsboost.google/',
        type: 'Hands-on Labs'
      },
      {
        name: 'Microsoft Learn Azure Sandbox',
        desc: 'Free interactive Azure browser sandboxes with no cost required.',
        url: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/',
        type: 'Sandbox Environment'
      }
    ],
    lessons: [
      {
        id: 'l2-1', title: 'AWS Cloud Practitioner Architecture & Services', type: 'video',
        channel: 'freeCodeCamp', duration: '14h', xp: 70,
        url: 'https://www.youtube.com/watch?v=SOTamWNgDKc',
        tags: ['AWS', 'Cloud Practitioner', 'CLF-C02']
      },
      {
        id: 'l2-2', title: 'AWS Core Services (EC2, S3, IAM, VPC Configuration)', type: 'video',
        channel: 'Intellipaat', duration: '4h', xp: 50,
        url: 'https://www.youtube.com/watch?v=k1RI5locZE4',
        tags: ['AWS', 'EC2', 'S3', 'IAM']
      },
      {
        id: 'l2-3', title: 'Microsoft Azure Architecture AZ-900 Fundamentals', type: 'video',
        channel: 'Adam Marczak', duration: '8h', xp: 60,
        url: 'https://www.youtube.com/watch?v=NPEsD6n9A_I',
        tags: ['Azure', 'AZ-900', 'Microsoft']
      },
      {
        id: 'l2-4', title: 'Google Cloud Platform (GCP) Compute Engine & VPC', type: 'video',
        channel: 'Simplilearn', duration: '6h', xp: 50,
        url: 'https://www.youtube.com/watch?v=IEEQzmFac9k',
        tags: ['GCP', 'Google Cloud', 'Compute']
      }
    ]
  },
  {
    id: 3,
    levelNumber: 3,
    title: 'Phase 03: Linux System Administration & Security',
    tagline: 'Sysadmin, Subnetting, Systemd & Remote Server Security',
    dur: '4 Weeks',
    xpReward: 400,
    desc: 'Configure systemd services, SSH key pairs, storage partitioning, firewall rules, and diagnostic network troubleshooting on enterprise servers.',
    courses: [
      {
        provider: 'Jeremy IT Lab',
        title: 'CCNA Enterprise Networking & Subnetting Series',
        desc: 'In-depth coverage of subnets, VLANs, routing tables, firewalls, and network interface troubleshooting.',
        url: 'https://www.youtube.com/watch?v=H8W9oMNSuwo',
        duration: '20h+ Series',
        type: 'Networking Course',
        badge: 'Networking Standard'
      },
      {
        provider: 'LearnLinuxTV',
        title: 'Enterprise Linux Server Administration Bootcamp',
        desc: 'Systemd, SSH key management, cron automation, LVM disk volumes, log analysis, and system security.',
        url: 'https://www.youtube.com/@LearnLinuxtv',
        duration: '8h 30m',
        type: 'Sysadmin Course',
        badge: 'Server Administration'
      },
      {
        provider: 'ThePrimeagen',
        title: 'Vim & Remote Command Line Efficiency',
        desc: 'Advanced command-line productivity: vim text editing, tmux session management, and remote execution.',
        url: 'https://www.youtube.com/watch?v=X6AR2RMB5tE',
        duration: '1h 45m',
        type: 'Productivity',
        badge: 'Remote Operations'
      }
    ],
    labs: [
      {
        name: 'SadServers: Linux Troubleshooting Scenarios',
        desc: 'Real interactive Linux server instances with broken configurations to diagnose and resolve.',
        url: 'https://sadservers.com/',
        type: 'Hands-on Debugging'
      },
      {
        name: 'Subnetting & CIDR Practice Exercises',
        desc: 'Interactive exercises for calculating IPv4/IPv6 CIDR ranges and subnet masks.',
        url: 'https://www.subnetting.net/',
        type: 'Interactive Drill'
      }
    ],
    lessons: [
      {
        id: 'l3-1', title: 'Linux Server Administration & Service Management', type: 'video',
        channel: 'LearnLinuxTV', duration: '8h', xp: 50,
        url: 'https://www.youtube.com/@LearnLinuxtv',
        tags: ['Linux', 'Sysadmin', 'Systemd']
      },
      {
        id: 'l3-2', title: 'Enterprise Networking & Subnet Masking (CCNA)', type: 'video',
        channel: 'Jeremy IT Lab', duration: '20h', xp: 70,
        url: 'https://www.youtube.com/watch?v=H8W9oMNSuwo',
        tags: ['Networking', 'Subnetting', 'CCNA']
      },
      {
        id: 'l3-3', title: 'TCP/IP, DNS, SSL & HTTP/S Protocol Analysis', type: 'video',
        channel: 'Professor Messer', duration: '3h', xp: 40,
        url: 'https://www.youtube.com/c/professormesser',
        tags: ['Protocols', 'DNS', 'Security']
      },
      {
        id: 'l3-4', title: 'Vim, Shell Customization & Remote SSH Ops', type: 'video',
        channel: 'ThePrimeagen', duration: '1.5h', xp: 30,
        url: 'https://www.youtube.com/watch?v=X6AR2RMB5tE',
        tags: ['Vim', 'SSH', 'CLI']
      }
    ]
  },
  {
    id: 4,
    levelNumber: 4,
    title: 'Phase 04: Containerization & CI/CD Pipelines',
    tagline: 'Docker, Kubernetes & Automated GitHub Actions Workflows',
    dur: '5 Weeks',
    xpReward: 500,
    desc: 'Package microservices into container images, manage multi-container applications with Docker Compose, and orchestrate containerized workloads with Kubernetes.',
    courses: [
      {
        provider: 'TechWorld with Nana',
        title: 'Docker Container Architecture & Operations',
        desc: 'Detailed breakdown of Dockerfiles, image layers, containers, volume persistence, networks, and compose.',
        url: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
        duration: '3h 10m',
        type: 'Container Course',
        badge: 'Docker Core'
      },
      {
        provider: 'TechWorld with Nana',
        title: 'Kubernetes Cluster Orchestration & Deployment',
        desc: 'Pods, Services, Ingress Controllers, ConfigMaps, Secrets, Deployments, and StatefulSets explained.',
        url: 'https://www.youtube.com/watch?v=X48VuDVv0do',
        duration: '4h 00m',
        type: 'Orchestration',
        badge: 'Kubernetes'
      },
      {
        provider: 'TechWorld with Nana',
        title: 'GitHub Actions Automated CI/CD Pipelines',
        desc: 'Build continuous integration pipelines to run tests, build container images, and publish to registries.',
        url: 'https://www.youtube.com/watch?v=R8_veQiYBjI',
        duration: '2h 15m',
        type: 'CI/CD Automation',
        badge: 'Automation'
      },
      {
        provider: 'TrainWithShubham',
        title: 'DevOps End-to-End Project Engineering',
        desc: 'Hands-on projects linking Git, Jenkins, Docker, and Cloud resources in production scenarios.',
        url: 'https://www.youtube.com/@trainwithshubham',
        duration: '40h Series',
        type: 'Project Series',
        badge: 'Portfolio Project'
      }
    ],
    labs: [
      {
        name: 'Play with Docker Sandbox',
        desc: 'Browser-based Docker terminal instance for running containers with zero setup.',
        url: 'https://labs.play-with-docker.com/',
        type: 'Browser Environment'
      },
      {
        name: 'Play with Kubernetes Cluster',
        desc: 'Browser-based multi-node Kubernetes cluster to practice kubectl commands live.',
        url: 'https://labs.play-with-k8s.com/',
        type: 'Browser Cluster'
      }
    ],
    lessons: [
      {
        id: 'l4-1', title: 'Docker Containers, Images & Compose Guide', type: 'video',
        channel: 'TechWorld with Nana', duration: '3h', xp: 50,
        url: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
        tags: ['Docker', 'Containers', 'Compose']
      },
      {
        id: 'l4-2', title: 'Kubernetes Cluster Architecture & Objects', type: 'video',
        channel: 'TechWorld with Nana', duration: '4h', xp: 60,
        url: 'https://www.youtube.com/watch?v=X48VuDVv0do',
        tags: ['Kubernetes', 'K8s', 'Orchestration']
      },
      {
        id: 'l4-3', title: 'GitHub Actions Continuous Integration & Delivery', type: 'video',
        channel: 'TechWorld with Nana', duration: '2h', xp: 50,
        url: 'https://www.youtube.com/watch?v=R8_veQiYBjI',
        tags: ['CI/CD', 'GitHub Actions', 'Pipelines']
      },
      {
        id: 'l4-4', title: 'Jenkins CI/CD Automation Fundamentals', type: 'video',
        channel: 'KodeKloud', duration: '5h', xp: 40,
        url: 'https://www.youtube.com/watch?v=pMO26j2OUME',
        tags: ['Jenkins', 'CI/CD', 'Builds']
      },
      {
        id: 'l4-5', title: 'Production Cloud Deployment Workflow', type: 'video',
        channel: 'TrainWithShubham', duration: '6h', xp: 60,
        url: 'https://www.youtube.com/@trainwithshubham',
        tags: ['Project', 'DevOps', 'Deploy']
      }
    ]
  },
  {
    id: 5,
    levelNumber: 5,
    title: 'Phase 05: Infrastructure as Code & Automation',
    tagline: 'Terraform (HCL), Ansible & CloudFormation',
    dur: '3 Weeks',
    xpReward: 400,
    desc: 'Replace manual console operations with reproducible code. Provision VPCs, load balancers, and compute instances declaratively using Terraform and Ansible.',
    courses: [
      {
        provider: 'freeCodeCamp & Sanjeev Thiyagarajan',
        title: 'Terraform Infrastructure Provisioning Masterclass',
        desc: 'HCL syntax, providers, state locking, variables, modules, and provisioning multi-region infrastructure.',
        url: 'https://www.youtube.com/watch?v=SLB_c_ayRMo',
        duration: '2h 30m',
        type: 'IaC Masterclass',
        badge: 'Terraform Standard'
      },
      {
        provider: 'freeCodeCamp',
        title: 'Ansible Configuration Management & Playbooks',
        desc: 'Inventory configuration, playbooks, YAML syntax, idempotency, and automated server provisioning.',
        url: 'https://www.youtube.com/watch?v=KuiAiQkNFKQ',
        duration: '1h 30m',
        type: 'Config Management',
        badge: 'Ansible'
      },
      {
        provider: 'Intellipaat',
        title: 'AWS CloudFormation Template Architecture',
        desc: 'Native AWS templating with CloudFormation stacks, change sets, nested templates, and parameters.',
        url: 'https://www.youtube.com/watch?v=Omppm_YcKok',
        duration: '2h 00m',
        type: 'CloudFormation',
        badge: 'AWS Native'
      }
    ],
    labs: [
      {
        name: 'HashiCorp Official Terraform Tutorials',
        desc: 'Interactive step-by-step guides with configuration samples and architecture diagrams.',
        url: 'https://developer.hashicorp.com/terraform/tutorials',
        type: 'Official Tutorials'
      },
      {
        name: 'LocalStack (Local AWS Cloud Emulator)',
        desc: 'Emulate AWS cloud APIs locally to test Terraform code with zero cloud costs.',
        url: 'https://localstack.cloud/',
        type: 'Local Emulator'
      }
    ],
    lessons: [
      {
        id: 'l5-1', title: 'Terraform Declarative Provisioning & State Management', type: 'video',
        channel: 'freeCodeCamp', duration: '2.5h', xp: 50,
        url: 'https://www.youtube.com/watch?v=SLB_c_ayRMo',
        tags: ['Terraform', 'HCL', 'IaC']
      },
      {
        id: 'l5-2', title: 'Ansible Playbooks & Configuration Automation', type: 'video',
        channel: 'freeCodeCamp', duration: '1.5h', xp: 40,
        url: 'https://www.youtube.com/watch?v=KuiAiQkNFKQ',
        tags: ['Ansible', 'YAML', 'Config']
      },
      {
        id: 'l5-3', title: 'AWS CloudFormation Stacks & Change Sets', type: 'video',
        channel: 'Intellipaat', duration: '2h', xp: 40,
        url: 'https://www.youtube.com/watch?v=Omppm_YcKok',
        tags: ['CloudFormation', 'AWS', 'IaC']
      }
    ]
  },
  {
    id: 6,
    levelNumber: 6,
    title: 'Phase 06: Enterprise Cloud Security & Observability',
    tagline: 'IAM Least Privilege, KMS Encryption, Prometheus & Grafana',
    dur: '3 Weeks',
    xpReward: 400,
    desc: 'Implement defense-in-depth security, Zero Trust access policies, cryptographic key rotation, and real-time observability metrics.',
    courses: [
      {
        provider: 'freeCodeCamp',
        title: 'Cloud Security Architecture & Zero Trust Framework',
        desc: 'Shared responsibility model, defense-in-depth, identity federation, encryption at rest/transit, and compliance.',
        url: 'https://www.youtube.com/watch?v=M988_fsOSWo',
        duration: '3h 15m',
        type: 'Security Architecture',
        badge: 'Zero Trust'
      },
      {
        provider: 'TechWorld with Nana',
        title: 'Prometheus & Grafana Enterprise Observability',
        desc: 'Metrics collection, PromQL queries, alerting rules, and customized Grafana monitoring dashboards.',
        url: 'https://www.youtube.com/watch?v=h4Sl21AKiDg',
        duration: '3h 00m',
        type: 'Observability',
        badge: 'Prometheus & Grafana'
      },
      {
        provider: 'TechWorld with Nana',
        title: 'Kubernetes & Cloud Security Best Practices',
        desc: 'Role-Based Access Control (RBAC), network policies, secrets encryption, and image vulnerability scanning.',
        url: 'https://www.youtube.com/watch?v=oBf5lrmquYI',
        duration: '1h 30m',
        type: 'SecOps',
        badge: 'K8s Security'
      }
    ],
    labs: [
      {
        name: 'AWS Well-Architected Security Labs',
        desc: 'Official hands-on exercises to configure IAM policies, KMS keys, and incident response.',
        url: 'https://wellarchitectedlabs.com/security/',
        type: 'Official Labs'
      },
      {
        name: 'Grafana Live Demo Sandbox',
        desc: 'Explore production metrics dashboards with live telemetry data.',
        url: 'https://play.grafana.org/',
        type: 'Live Playground'
      }
    ],
    lessons: [
      {
        id: 'l6-1', title: 'Cloud Security Architecture & Identity Governance', type: 'video',
        channel: 'freeCodeCamp', duration: '3h', xp: 50,
        url: 'https://www.youtube.com/watch?v=M988_fsOSWo',
        tags: ['Security', 'IAM', 'Governance']
      },
      {
        id: 'l6-2', title: 'Prometheus Metrics & Grafana Visual Dashboards', type: 'video',
        channel: 'TechWorld with Nana', duration: '3h', xp: 50,
        url: 'https://www.youtube.com/watch?v=h4Sl21AKiDg',
        tags: ['Observability', 'Prometheus', 'Grafana']
      },
      {
        id: 'l6-3', title: 'AWS IAM Policies, KMS Encryption & Security Groups', type: 'video',
        channel: 'Cloud Architecture Series', duration: '2h', xp: 40,
        url: 'https://www.youtube.com/results?search_query=AWS+Security+IAM+KMS+free+course',
        tags: ['AWS', 'IAM', 'KMS']
      },
      {
        id: 'l6-4', title: 'Kubernetes Role-Based Access Control (RBAC)', type: 'video',
        channel: 'TechWorld with Nana', duration: '1.5h', xp: 40,
        url: 'https://www.youtube.com/watch?v=oBf5lrmquYI',
        tags: ['K8s', 'RBAC', 'SecOps']
      }
    ]
  },
  {
    id: 7,
    levelNumber: 7,
    title: 'Phase 07: Architecture Capstone & Industry Certifications',
    tagline: 'Certification Preparation & Cloud Resume Portfolio Project',
    dur: '4 Weeks',
    xpReward: 750,
    desc: 'Synthesize your skills: Pass vendor certification exams, construct a production-ready portfolio project with CI/CD, and showcase your architecture.',
    courses: [
      {
        provider: 'freeCodeCamp & Andrew Brown',
        title: 'AWS CLF-C02 Full Practice Exam & Review',
        desc: 'Review questions, architectural patterns, and exam strategy to prepare for the certification exam.',
        url: 'https://www.youtube.com/watch?v=NhDYbskXRgc',
        duration: '14h Series',
        type: 'Exam Prep',
        badge: 'AWS Certified'
      },
      {
        provider: 'Microsoft Learn / Adam Marczak',
        title: 'Microsoft Azure AZ-900 Full Exam Prep',
        desc: 'Practice tests, architectural scenarios, and official study guides for Azure Fundamentals.',
        url: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/',
        duration: '8h Review',
        type: 'Azure Exam Prep',
        badge: 'Azure Certified'
      },
      {
        provider: 'KodeKloud',
        title: 'CKA Certified Kubernetes Administrator Practice Guide',
        desc: 'Command-line techniques and scenario drills for the hands-on Kubernetes performance exam.',
        url: 'https://www.youtube.com/watch?v=KVBON1lA9N8',
        duration: '15h Practice',
        type: 'CKA Prep',
        badge: 'CNCF CKA'
      },
      {
        provider: 'Cloud Resume Challenge (Forrest Brazeal)',
        title: 'Cloud Resume Architecture Capstone Project',
        desc: 'Deploy a static HTML site on AWS S3/CloudFront with DynamoDB view counter, Lambda API, and GitHub Actions CI/CD.',
        url: 'https://cloudresumechallenge.dev/',
        duration: 'Capstone Project',
        type: 'Portfolio Project',
        badge: 'Portfolio Capstone'
      }
    ],
    labs: [
      {
        name: 'AWS Free Tier Account Setup',
        desc: 'Deploy your capstone project using 12-month free tier AWS services.',
        url: 'https://aws.amazon.com/free/',
        type: 'Cloud Platform'
      },
      {
        name: 'GitHub Pages & Actions Environment',
        desc: 'Host project documentation and continuous delivery workflows for free.',
        url: 'https://pages.github.com/',
        type: 'Free Hosting'
      }
    ],
    lessons: [
      {
        id: 'l7-1', title: 'AWS Cloud Practitioner (CLF-C02) Certification Review', type: 'video',
        channel: 'freeCodeCamp', duration: '14h', xp: 80,
        url: 'https://www.youtube.com/watch?v=NhDYbskXRgc',
        tags: ['AWS', 'Certification', 'CLF-C02']
      },
      {
        id: 'l7-2', title: 'Microsoft Azure AZ-900 Certification Review', type: 'video',
        channel: 'Microsoft Learn', duration: '8h', xp: 70,
        url: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/',
        tags: ['Azure', 'AZ-900', 'Certification']
      },
      {
        id: 'l7-3', title: 'Google Cloud Digital Leader Certification Overview', type: 'video',
        channel: 'Google Cloud', duration: '10h', xp: 70,
        url: 'https://cloud.google.com/certification/cloud-digital-leader',
        tags: ['GCP', 'Digital Leader', 'Certification']
      },
      {
        id: 'l7-4', title: 'Certified Kubernetes Administrator (CKA) Terminal Drills', type: 'video',
        channel: 'KodeKloud', duration: '15h', xp: 80,
        url: 'https://www.youtube.com/watch?v=KVBON1lA9N8',
        tags: ['Kubernetes', 'CKA', 'Certification']
      },
      {
        id: 'l7-5', title: 'Deploy Cloud Resume Capstone Project to Production', type: 'project',
        channel: 'Portfolio Project', duration: 'Capstone', xp: 120,
        url: 'https://cloudresumechallenge.dev/',
        tags: ['Portfolio', 'Resume', 'Serverless', 'CI/CD']
      }
    ]
  }
];

/* ── TARGET VENDOR CERTIFICATIONS ── */
const CERTS = [
  {
    id: 'aws-clf',
    provider: 'Amazon Web Services',
    name: 'AWS Certified Cloud Practitioner (CLF-C02)',
    desc: 'Foundational entry certification validating overall understanding of the AWS Cloud platform, core services, and security model.',
    difficulty: 'Foundational', cost: '~$100 USD', duration: '1–2 Months',
    freePrep: true,
    links: [
      { label: 'Free Video Course', url: 'https://www.youtube.com/watch?v=NhDYbskXRgc', type: 'primary' },
      { label: 'AWS Skill Builder', url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials', type: 'secondary' }
    ]
  },
  {
    id: 'az-900',
    provider: 'Microsoft Azure',
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    desc: 'Validates foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
    difficulty: 'Foundational', cost: '~$99 USD', duration: '2–4 Weeks',
    freePrep: true,
    links: [
      { label: 'YouTube Masterclass', url: 'https://www.youtube.com/watch?v=NPEsD6n9A_I', type: 'primary' },
      { label: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/', type: 'secondary' }
    ]
  },
  {
    id: 'gcp-cdl',
    provider: 'Google Cloud Platform',
    name: 'Google Cloud Digital Leader',
    desc: 'Validates knowledge of Google Cloud core products, services, tools, features, and enterprise use cases.',
    difficulty: 'Foundational', cost: '~$99 USD', duration: '2–4 Weeks',
    freePrep: true,
    links: [
      { label: 'Google Cloud Path', url: 'https://cloud.google.com/certification/cloud-digital-leader', type: 'primary' },
      { label: 'YouTube Course', url: 'https://www.youtube.com/results?search_query=Google+Cloud+Digital+Leader+full+course', type: 'secondary' }
    ]
  },
  {
    id: 'aws-saa',
    provider: 'Amazon Web Services',
    name: 'AWS Solutions Architect Associate (SAA-C03)',
    desc: 'Industry-standard certification validating architectural expertise in designing resilient, high-performing, and secure AWS workloads.',
    difficulty: 'Associate', cost: '~$150 USD', duration: '2–3 Months',
    freePrep: true,
    links: [
      { label: 'Free Video Prep', url: 'https://www.youtube.com/watch?v=c3Cn4xYfxJY', type: 'primary' },
      { label: 'Official AWS Path', url: 'https://explore.skillbuilder.aws/', type: 'secondary' }
    ]
  },
  {
    id: 'cka',
    provider: 'CNCF / Linux Foundation',
    name: 'Certified Kubernetes Administrator (CKA)',
    desc: 'Hands-on performance-based exam demonstrating competence in Kubernetes installation, configuration, and cluster management.',
    difficulty: 'Intermediate', cost: '~$395 USD', duration: '2–3 Months',
    freePrep: true,
    links: [
      { label: 'KodeKloud CKA Guide', url: 'https://www.youtube.com/watch?v=KVBON1lA9N8', type: 'primary' },
      { label: 'CNCF Official', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/', type: 'secondary' }
    ]
  },
  {
    id: 'linux-plus',
    provider: 'Linux Foundation',
    name: 'LFCS Certified System Administrator',
    desc: 'Validates system administration expertise to configure, manage, and troubleshoot Linux systems in enterprise deployments.',
    difficulty: 'Intermediate', cost: '~$250 USD', duration: '1–2 Months',
    freePrep: true,
    links: [
      { label: 'Free Prep Resources', url: 'https://www.youtube.com/results?search_query=LFCS+exam+prep+free', type: 'primary' },
      { label: 'Linux Foundation', url: 'https://training.linuxfoundation.org/', type: 'secondary' }
    ]
  }
];

/* ── APP STATE & STORAGE ENGINE ── */
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
    const saved = localStorage.getItem('cloudops_roadmap_state') || localStorage.getItem('cloudquest_state');
    if (saved) state = { ...state, ...JSON.parse(saved) };
  } catch (e) {}
}

function saveState() {
  try {
    localStorage.setItem('cloudops_roadmap_state', JSON.stringify(state));
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

  let stars = 0;
  if (pct >= 100) stars = 3;
  else if (pct >= 50) stars = 2;
  else if (pct > 0) stars = 1;

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

/* ── RENDER ROADMAP TIMELINE ── */
function renderRoadmap() {
  const container = document.getElementById('candyTrailNodes');
  if (!container) return;
  container.innerHTML = '';

  let currentActiveStageId = 1;
  for (const s of STAGES) {
    const st = getStageStats(s.id);
    if (st.isUnlocked && st.pct < 100) {
      currentActiveStageId = s.id;
      break;
    }
    if (st.isUnlocked && st.pct === 100) {
      currentActiveStageId = s.id;
    }
  }

  STAGES.forEach((stage) => {
    const stats = getStageStats(stage.id);
    const isCurrent = stage.id === currentActiveStageId;
    const isCompleted = stats.pct === 100;

    const card = document.createElement('div');
    card.className = `phase-card ${stats.isUnlocked ? 'unlocked' : 'locked'} ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`;
    card.dataset.stageId = stage.id;

    let statusLabel = 'Locked';
    if (isCompleted) statusLabel = 'Completed';
    else if (isCurrent) statusLabel = 'In Progress';
    else if (stats.isUnlocked) statusLabel = 'Available';

    card.innerHTML = `
      <div class="phase-node-indicator">
        ${isCompleted ? '✓' : (stats.isUnlocked ? stage.id : '🔒')}
      </div>
      <div class="phase-content-card" onclick="openStageDrawer(${stage.id})">
        <div class="phase-header-row">
          <span class="phase-tag">PHASE 0${stage.id} · ${stage.dur}</span>
          <span class="phase-status-badge">${statusLabel}</span>
        </div>
        <h3 class="phase-title">${stage.title}</h3>
        <p class="phase-tagline">${stage.tagline}</p>
        <div class="phase-meta-row">
          <span>${stats.done} of ${stats.total} Modules Completed</span>
          <div class="phase-mini-bar">
            <div class="pmb-fill" style="width: ${stats.pct}%"></div>
          </div>
          <span>+${stage.xpReward} SP</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

/* ── PHASE DRAWER / MODAL ── */
function openStageDrawer(stageId) {
  const stage = STAGES.find(s => s.id === stageId);
  if (!stage) return;

  const stats = getStageStats(stageId);
  if (!stats.isUnlocked) {
    showToast('Complete at least 50% of the previous phase to unlock this module.', 'xp-toast');
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

  drawerBody.innerHTML = `
    <div class="drawer-header">
      <div class="drawer-badge">PHASE 0${stage.id} · DURATION: ${stage.dur} · +${stage.xpReward} SKILL POINTS</div>
      <h2 class="drawer-title">${stage.title}</h2>
      <p class="drawer-desc">${stage.desc}</p>
    </div>

    <!-- DRAWER TAB BUTTONS -->
    <div class="drawer-tabs">
      <button class="dtab-btn active" onclick="switchDrawerTab(event, 'dtab-lessons')">
        Lesson Checklist (${stats.done}/${stats.total})
      </button>
      <button class="dtab-btn" onclick="switchDrawerTab(event, 'dtab-courses')">
        Full Masterclasses (${stage.courses.length})
      </button>
      <button class="dtab-btn" onclick="switchDrawerTab(event, 'dtab-labs')">
        Hands-On Labs (${stage.labs.length})
      </button>
    </div>

    <!-- TAB 1: LESSON CHECKLIST -->
    <div class="dtab-pane active" id="dtab-lessons">
      <div class="stage-lessons-list">
        ${stage.lessons.map(lesson => {
          const isDone = state.completedLessons.includes(lesson.id);
          return `
            <div class="drawer-lesson-card ${isDone ? 'done' : ''}" data-lesson-id="${lesson.id}">
              <div class="dlc-checkbox" onclick="handleLessonToggle('${lesson.id}', ${lesson.xp}, ${stage.id})">
                ${isDone ? '✓' : ''}
              </div>
              <div class="dlc-content" onclick="handleLessonToggle('${lesson.id}', ${lesson.xp}, ${stage.id})">
                <div class="dlc-title">${lesson.title}</div>
                <div class="dlc-meta">${lesson.channel} · ${lesson.duration} · <span class="dlc-xp">+${lesson.xp} SP</span></div>
                <div class="dlc-tags">
                  ${lesson.tags.map(t => `<span class="lesson-tag">${t}</span>`).join('')}
                </div>
              </div>
              <div class="dlc-action">
                <a href="${lesson.url}" target="_blank" rel="noopener" class="btn-watch" onclick="event.stopPropagation()">
                  Watch Video ↗
                </a>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- TAB 2: FULL MASTERCLASSES -->
    <div class="dtab-pane" id="dtab-courses">
      <div class="drawer-courses-grid">
        ${stage.courses.map(course => `
          <div class="stage-course-card">
            <div class="scc-header">
              <span class="scc-badge">${course.badge}</span>
              <span class="scc-dur">${course.duration}</span>
            </div>
            <h4 class="scc-title">${course.title}</h4>
            <p class="scc-desc">${course.desc}</p>
            <a href="${course.url}" target="_blank" rel="noopener" class="scc-btn">
              Start Masterclass ↗
            </a>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 3: HANDS-ON LABS -->
    <div class="dtab-pane" id="dtab-labs">
      <div class="drawer-labs-grid">
        ${stage.labs.map(lab => `
          <div class="stage-lab-card">
            <h4 class="slc-name">${lab.name}</h4>
            <p class="slc-desc">${lab.desc}</p>
            <a href="${lab.url}" target="_blank" rel="noopener" class="slc-link">
              Open Lab Environment ↗
            </a>
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
    showToast(`+${xp} Skill Points earned!`, 'xp-toast');
  } else {
    state.completedLessons.splice(idx, 1);
    state.xp = Math.max(0, state.xp - xp);
  }
  saveState();

  const stage = STAGES.find(s => s.id === stageId);
  if (stage) {
    const stats = getStageStats(stageId);
    renderStageDrawerContent(stage, stats);
    if (stats.pct === 100) {
      showToast(`Phase 0${stage.id} fully completed! All modules verified.`, 'done-toast');
    }
  }

  renderRoadmap();
  updateDashboard();
}

/* ── DASHBOARD CALCULATIONS ── */
const LEVELS = [
  { min: 0, name: 'Cloud Foundation', next: 'Next: Systems Specialist at 200 SP' },
  { min: 200, name: 'Systems Specialist', next: 'Next: Cloud Practitioner at 500 SP' },
  { min: 500, name: 'Cloud Practitioner', next: 'Next: DevOps Engineer at 1000 SP' },
  { min: 1000, name: 'DevOps Engineer', next: 'Next: Infrastructure Architect at 1800 SP' },
  { min: 1800, name: 'Infrastructure Architect', next: 'Next: Senior Cloud Architect at 2500 SP' },
  { min: 2500, name: 'Senior Cloud Architect', next: 'Max Curriculum Rank Achieved' },
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
  const steps = 20;
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

  let totalMilestones = 0;
  STAGES.forEach(s => {
    totalMilestones += getStageStats(s.id).stars;
  });

  animateNumber(document.getElementById('totalXP'), state.xp);
  animateNumber(document.getElementById('spCount'), state.xp);
  animateNumber(document.getElementById('completedCount'), done);
  animateNumber(document.getElementById('certCount'), certsDone);
  animateNumber(document.getElementById('streakCount'), state.streak);

  const starCountEl = document.getElementById('totalStarsCount');
  if (starCountEl) animateNumber(starCountEl, totalMilestones);

  const bar = document.getElementById('overallBar');
  if (bar) bar.style.width = pct + '%';
  const pctEl = document.getElementById('overallPct');
  if (pctEl) pctEl.textContent = pct + '%';

  const ln = document.getElementById('levelName');
  if (ln) ln.textContent = level.name;
  const nl = document.getElementById('nextLevel');
  if (nl) nl.textContent = level.next;
}

/* ── CERTIFICATION PORTAL ── */
function renderCerts() {
  const grid = document.getElementById('certsGrid');
  if (!grid) return;

  grid.innerHTML = CERTS.map(cert => {
    const isEarned = state.earnedCerts.includes(cert.id);
    return `
      <div class="cert-card ${isEarned ? 'earned' : ''}">
        <div>
          <div class="cert-provider">${cert.provider}</div>
          <h3 class="cert-name">${cert.name}</h3>
          <p class="cert-desc">${cert.desc}</p>
          <div class="cert-meta">
            <span class="cert-pill">${cert.difficulty}</span>
            <span class="cert-pill">${cert.cost}</span>
            <span class="cert-pill">${cert.duration}</span>
          </div>
        </div>
        <div>
          <div class="cert-links">
            ${cert.links.map(l => `<a class="cert-link ${l.type}" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join('')}
          </div>
          <button class="cert-mark-btn ${isEarned ? 'earned' : ''}" data-cert-id="${cert.id}">
            ${isEarned ? '✓ Claimed & Verified' : 'Mark as Passed (+200 SP)'}
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
        showToast('Certification claimed! +200 Skill Points added.', 'done-toast');
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

/* ── TOAST MESSAGING ── */
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

/* ── NAVBAR SCROLL ENGINE ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ── PWA INSTALL ENGINE ── */
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

/* ── RESET PROGRESS ── */
function initReset() {
  const btn = document.getElementById('resetBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (confirm('Reset all progress data? This will clear lesson completions and reset Skill Points.')) {
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

/* ── INITIALIZATION ── */
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  updateStreak();
  renderRoadmap();
  renderCerts();
  initNavbar();
  initPWA();
  initReset();
  updateDashboard();

  const modal = document.getElementById('stageDrawerModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeStageDrawer();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeStageDrawer();
  });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
