/* ════════════════════════════════════════════════════════════════
   CLOUDOPS ROADMAP - CLEAN STUDENT-FIRST CURRICULUM ENGINE
   Structured Step-by-Step Learning · Single Video Lesson Flow
   No Blue · No Purple · No Emojis · No Icons · Mobile-First
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
    quickGuide: {
      goal: 'Learn how to operate Linux servers comfortably using the terminal, configure network routing, manage code with Git, and automate tasks with Python & Bash.',
      steps: [
        'Click "Watch Video Lesson" to learn the concepts through direct video walkthroughs.',
        'Launch the free interactive practice lab to practice the terminal commands yourself.',
        'Click "Mark Lesson as Completed" to earn your points and unlock the next phase.'
      ]
    },
    cheatsheets: [
      { title: 'Linux Command-Line Cheat Sheet (TLDR)', url: 'https://tldr.sh/', desc: 'Simplified, practical examples of everyday Linux terminal commands.' },
      { title: 'Git Official Cheat Sheet (GitHub)', url: 'https://training.github.com/downloads/github-git-cheat-sheet.pdf', desc: 'Quick reference for repository staging, branching, and remote syncing.' },
      { title: 'Subnetting IPv4 & CIDR Quick Chart', url: 'https://www.subnetting.net/Tutorial.aspx', desc: 'Visual subnet mask chart and IP address range cheat sheet.' }
    ],
    labs: [
      {
        name: 'OverTheWire: Bandit Practice Terminal',
        desc: 'Interactive Linux command line practice game. Connect via SSH to practice real terminal commands in a live Linux server.',
        url: 'https://overthewire.org/wargames/bandit/',
        type: 'Interactive Terminal',
        freeNote: '100% Free · No registration required'
      },
      {
        name: 'Subnetting.net Interactive Drills',
        desc: 'Practice engine for calculating network IP addresses, subnet masks, and available host ranges in real time.',
        url: 'https://www.subnetting.net/',
        type: 'Online Practice Tool',
        freeNote: '100% Free in Browser'
      },
      {
        name: 'GitHub Skills Interactive Playground',
        desc: 'Learn Git branching, pull requests, and merge conflict resolution directly within real GitHub repositories.',
        url: 'https://skills.github.com/',
        type: 'Interactive Repository',
        freeNote: 'Free with any GitHub Account'
      }
    ],
    lessons: [
      {
        id: 'l1-1',
        step: '01',
        title: 'Linux Command Line & Operating System Architecture',
        desc: 'Learn how to navigate the terminal, manage files and folders, configure user permissions, and monitor running processes.',
        channel: 'freeCodeCamp',
        duration: '5h 00m',
        xp: 50,
        url: 'https://www.youtube.com/watch?v=ROjZy1WbCIA',
        tags: ['Linux', 'Terminal', 'CLI'],
        objectives: [
          'Navigate directories (cd, ls, pwd, mkdir, rm) and manipulate files',
          'Inspect and manage file permissions with chmod, chown, and sudo',
          'Monitor active processes with ps, top, htop, and kill'
        ],
        lab: {
          name: 'OverTheWire Bandit (Levels 0 to 10)',
          url: 'https://overthewire.org/wargames/bandit/',
          actionText: 'Try Practice Lab',
          tip: 'Connect via SSH and solve the first 10 levels using navigation and file inspection commands.'
        }
      },
      {
        id: 'l1-2',
        step: '02',
        title: 'Git & GitHub Distributed Version Control',
        desc: 'Understand how developers save versions of their code, create branches for new features, and collaborate on GitHub.',
        channel: 'Traversy Media',
        duration: '1h 20m',
        xp: 40,
        url: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc',
        tags: ['Git', 'GitHub', 'Version Control'],
        objectives: [
          'Initialize repositories, stage changes, and create clear commit messages',
          'Create, switch, and merge Git branches locally and on GitHub',
          'Open Pull Requests, review code diffs, and resolve merge conflicts'
        ],
        lab: {
          name: 'GitHub Skills: First Day on GitHub',
          url: 'https://skills.github.com/',
          actionText: 'Try Practice Lab',
          tip: 'Complete the interactive GitHub course to practice branching and pull requests.'
        }
      },
      {
        id: 'l1-3',
        step: '03',
        title: 'Network Protocols, TCP/IP & Subnetting Architecture',
        desc: 'A friendly breakdown of how computers talk across the internet: IP addresses, packet routing, DNS resolution, and TCP handshakes.',
        channel: 'freeCodeCamp',
        duration: '9h 20m',
        xp: 60,
        url: 'https://www.youtube.com/watch?v=qiQR5rTSshw',
        tags: ['Networking', 'TCP/IP', 'DNS', 'Subnets'],
        objectives: [
          'Understand how data packets travel across the web using TCP and UDP',
          'Calculate IPv4 subnet ranges and understand how private networks work',
          'Trace what happens behind the scenes when you type a website name into a browser'
        ],
        lab: {
          name: 'Subnetting.net CIDR Practice',
          url: 'https://www.subnetting.net/',
          actionText: 'Try Practice Lab',
          tip: 'Practice calculating 10 subnet questions to understand how network addresses are divided.'
        }
      },
      {
        id: 'l1-4',
        step: '04',
        title: 'Python Scripting for System Automation',
        desc: 'Write simple Python scripts to automate repetitive tasks, read and write data files, and request information from web APIs.',
        channel: 'Programming with Mosh',
        duration: '6h 15m',
        xp: 50,
        url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
        tags: ['Python', 'Automation', 'Scripting'],
        objectives: [
          'Use core Python lists, dictionaries, and loops to process data',
          'Read and write files on disk and fetch information from web APIs',
          'Handle errors cleanly so your automation scripts run reliably'
        ],
        lab: {
          name: 'Exercism Python Exercises',
          url: 'https://exercism.org/tracks/python',
          actionText: 'Try Practice Lab',
          tip: 'Complete 3 beginner exercises focusing on file parsing and list operations.'
        }
      },
      {
        id: 'l1-5',
        step: '05',
        title: 'Bash Shell Scripting & Server Automation',
        desc: 'Automate Linux server maintenance by writing shell scripts that execute command chains and schedule them with crontab.',
        channel: 'TechWorld with Nana',
        duration: '2h 00m',
        xp: 50,
        url: 'https://www.youtube.com/watch?v=e7BufAVwDiM',
        tags: ['Bash', 'Shell', 'Crontab'],
        objectives: [
          'Write Bash scripts using variables, arguments, and conditional checks',
          'Chain multiple UNIX commands together using pipes (|)',
          'Schedule automated periodic scripts using Linux crontab'
        ],
        lab: {
          name: 'SadServers Live Terminal',
          url: 'https://sadservers.com/',
          actionText: 'Try Practice Lab',
          tip: 'Solve a beginner Linux troubleshooting scenario by inspecting logs in a live server terminal.'
        }
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
    desc: 'Understand the fundamental building blocks of modern cloud computing: virtual servers, cloud storage, isolated virtual networks, and user security across AWS, Azure, and Google Cloud.',
    quickGuide: {
      goal: 'Learn how to launch and connect cloud resources across Amazon Web Services, Microsoft Azure, and Google Cloud Platform.',
      steps: [
        'Click "Watch Video Lesson" to see how cloud servers, storage, and networks are configured.',
        'Use the free tier accounts or interactive practice labs to build live resources.',
        'Verify your cloud setup and mark each lesson completed to earn your points.'
      ]
    },
    cheatsheets: [
      { title: 'AWS Core Services Quick Reference', url: 'https://digitalcloud.training/aws-cheat-sheets/', desc: 'Summary of the most popular Amazon Web Services compute, storage, and network tools.' },
      { title: 'Azure Core Concepts Guide', url: 'https://learn.microsoft.com/en-us/azure/', desc: 'Official Microsoft documentation mapping Resource Groups to Virtual Networks.' },
      { title: 'Google Cloud Platform Cheatsheet', url: 'https://googlecloudcheatsheet.withgoogle.com/', desc: 'Every Google Cloud service explained in four simple words.' }
    ],
    labs: [
      {
        name: 'AWS Skill Builder Official Learning Hub',
        desc: 'Over 600 official free learning modules and video demonstrations directly from Amazon Web Services.',
        url: 'https://explore.skillbuilder.aws/',
        type: 'Free Digital Courses',
        freeNote: '100% Free · No credit card required for free modules'
      },
      {
        name: 'Microsoft Learn Azure Interactive Lab',
        desc: 'Temporary pre-configured Azure environments running directly in your browser. Launch resources with zero subscription costs.',
        url: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/',
        type: 'Free Browser Environment',
        freeNote: '100% Free · No Azure subscription needed'
      },
      {
        name: 'Google Cloud Skills Boost',
        desc: 'Interactive lab environments providing temporary credentials to real Google Cloud consoles.',
        url: 'https://www.cloudskillsboost.google/',
        type: 'Hands-on Lab Platform',
        freeNote: 'Includes free introductory tours and exercises'
      }
    ],
    lessons: [
      {
        id: 'l2-1',
        step: '01',
        title: 'AWS Cloud Architecture Core (CLF-C02)',
        desc: 'Learn about AWS global infrastructure: Regions, Availability Zones, virtual computers (EC2), file storage (S3), and security permissions (IAM).',
        channel: 'freeCodeCamp & Andrew Brown',
        duration: '14h 00m',
        xp: 80,
        url: 'https://www.youtube.com/watch?v=SOTamWNgDKc',
        tags: ['AWS', 'Cloud Practitioner', 'CLF-C02'],
        objectives: [
          'Understand how AWS Regions and Availability Zones protect against downtime',
          'Configure IAM users, groups, and multi-factor authentication (MFA)',
          'Launch a free Amazon EC2 Linux server and connect to it securely'
        ],
        lab: {
          name: 'AWS Free Tier Setup',
          url: 'https://aws.amazon.com/free/',
          actionText: 'Try Practice Lab',
          tip: 'Create your AWS account, configure a $0 budget alert, and launch a free t2.micro server.'
        }
      },
      {
        id: 'l2-2',
        step: '02',
        title: 'AWS Core Services: EC2, S3, IAM & Virtual Private Clouds (VPC)',
        desc: 'Hands-on walkthrough building an isolated Virtual Private Cloud (VPC), adding public and private subnets, and managing file storage with S3.',
        channel: 'Intellipaat',
        duration: '4h 00m',
        xp: 60,
        url: 'https://www.youtube.com/watch?v=k1RI5locZE4',
        tags: ['AWS', 'EC2', 'S3', 'VPC'],
        objectives: [
          'Create a secure private cloud network with public and private subnets',
          'Create Amazon S3 storage buckets with secure access permissions',
          'Configure firewall rules using Security Groups to protect servers'
        ],
        lab: {
          name: 'AWS Skill Builder: Cloud Practitioner Essentials',
          url: 'https://explore.skillbuilder.aws/',
          actionText: 'Try Practice Lab',
          tip: 'Complete the VPC and Networking module to visualize cloud packet routing.'
        }
      },
      {
        id: 'l2-3',
        step: '03',
        title: 'Microsoft Azure Architecture AZ-900 Fundamentals',
        desc: 'Learn the core architecture of Microsoft Azure: Resource Groups, Subscriptions, Virtual Networks, and Azure Virtual Machines.',
        channel: 'Adam Marczak',
        duration: '8h 15m',
        xp: 70,
        url: 'https://www.youtube.com/watch?v=NPEsD6n9A_I',
        tags: ['Azure', 'AZ-900', 'Microsoft'],
        objectives: [
          'Organize resources cleanly with Azure Resource Groups and Subscriptions',
          'Deploy Azure Virtual Machines and configure virtual networks',
          'Manage user permissions safely using Azure Role-Based Access Control'
        ],
        lab: {
          name: 'Microsoft Learn Free Azure Lab',
          url: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/',
          actionText: 'Try Practice Lab',
          tip: 'Launch the free Microsoft Learn practice lab to deploy a live Azure VM with zero cost.'
        }
      },
      {
        id: 'l2-4',
        step: '04',
        title: 'Google Cloud Platform (GCP) Compute Engine & VPC',
        desc: 'A step-by-step introduction to Google Cloud: virtual servers with Compute Engine, Cloud Storage buckets, and Google Cloud Shell.',
        channel: 'Simplilearn',
        duration: '6h 30m',
        xp: 60,
        url: 'https://www.youtube.com/watch?v=IEEQzmFac9k',
        tags: ['GCP', 'Google Cloud', 'Compute'],
        objectives: [
          'Navigate the Google Cloud Console and run commands in Cloud Shell',
          'Create Compute Engine virtual servers and attach persistent disk storage',
          'Configure Google Cloud IAM permissions according to least privilege'
        ],
        lab: {
          name: 'Google Cloud Skills Boost: Console Tour',
          url: 'https://www.cloudskillsboost.google/',
          actionText: 'Try Practice Lab',
          tip: 'Complete the free console tour to practice running commands in Google Cloud Shell.'
        }
      }
    ]
  },
  {
    id: 3,
    levelNumber: 3,
    title: 'Phase 03: Linux System Administration & Server Operations',
    tagline: 'Sysadmin, Subnetting, Systemd & Remote Server Security',
    dur: '4 Weeks',
    xpReward: 400,
    desc: 'Learn how professional systems engineers operate Linux servers in production: writing systemd service units, troubleshooting network drops, and hardening SSH remote access.',
    quickGuide: {
      goal: 'Manage production Linux servers like an enterprise systems engineer: keep services running automatically, diagnose networking drops, and harden SSH access.',
      steps: [
        'Click "Watch Video Lesson" to learn how production Linux servers manage services and storage.',
        'Use live interactive servers like SadServers to solve realistic broken server scenarios.',
        'Verify your fixes and mark each lesson completed to earn your points.'
      ]
    },
    cheatsheets: [
      { title: 'Systemd Commands Cheatsheet', url: 'https://learnlinux.tv/', desc: 'Essential commands: systemctl start, stop, enable, status, and journalctl log filters.' },
      { title: 'Wireshark Filter Display Cheatsheet', url: 'https://www.wireshark.org/docs/dfref/', desc: 'Filters for isolating web, DNS, and connection handshake issues.' },
      { title: 'Linux Troubleshooting Tools Guide', url: 'https://www.brendangregg.com/linuxperf.html', desc: 'Reference diagram for memory, disk, and CPU diagnosis tools.' }
    ],
    labs: [
      {
        name: 'SadServers: Broken Linux Scenarios',
        desc: 'Real live interactive Linux server instances with intentionally broken configurations. Diagnose logs and fix the service.',
        url: 'https://sadservers.com/',
        type: 'Interactive Debugging Terminal',
        freeNote: '100% Free · Direct in browser'
      },
      {
        name: 'LearnLinuxTV Guided Video Practice',
        desc: 'Practical follow-along exercises covering server user accounts, permissions, and disk mounting.',
        url: 'https://www.youtube.com/playlist?list=PLT98CR92P52c7QGZ5nQ72qYxT4f1yR54o',
        type: 'Guided Video Walkthrough',
        freeNote: '100% Free on YouTube'
      }
    ],
    lessons: [
      {
        id: 'l3-1',
        step: '01',
        title: 'Linux Server Administration & System Configuration',
        desc: 'Learn how to configure background daemon services using systemd, query system logs with journalctl, and manage disk partitions.',
        channel: 'freeCodeCamp',
        duration: '2h 15m',
        xp: 60,
        url: 'https://www.youtube.com/watch?v=sO4J59A1lnc',
        tags: ['Linux', 'Sysadmin', 'Systemd'],
        objectives: [
          'Create, enable, and manage custom systemd service units to keep apps running',
          'Query and filter system logs with journalctl -u service -f',
          'Inspect disk usage, partitions, and filesystems with df, du, and lsblk'
        ],
        lab: {
          name: 'SadServers: The Web Server is Down',
          url: 'https://sadservers.com/',
          actionText: 'Try Practice Lab',
          tip: 'Diagnose why Nginx failed to start by querying systemctl status and journalctl.'
        }
      },
      {
        id: 'l3-2',
        step: '02',
        title: 'Enterprise Networking & Routing Deep Dive (CCNA)',
        desc: 'Understand how enterprise networks segment traffic with VLANs, routing tables, and default gateways to ensure fast packet delivery.',
        channel: 'Jeremy IT Lab',
        duration: '20h+ Series',
        xp: 80,
        url: 'https://www.youtube.com/watch?v=H8W9oMNSuwo',
        tags: ['Networking', 'Subnetting', 'CCNA', 'Routing'],
        objectives: [
          'Read server routing tables and understand default gateway routes',
          'Understand how network segmentation isolates different departments',
          'Troubleshoot network connectivity drops using traceroute and ping'
        ],
        lab: {
          name: 'Subnetting.net Advanced Drill',
          url: 'https://www.subnetting.net/',
          actionText: 'Try Practice Lab',
          tip: 'Complete 10 variable length subnet practice drills to gain confidence.'
        }
      },
      {
        id: 'l3-3',
        step: '03',
        title: 'Network Protocol Analysis with Wireshark & TCP/IP',
        desc: 'Learn how to capture real network packets and inspect them to diagnose connectivity errors, slow responses, and DNS failures.',
        channel: 'freeCodeCamp',
        duration: '4h 00m',
        xp: 60,
        url: 'https://www.youtube.com/watch?v=IPvYh3-Vq58',
        tags: ['Networking', 'Wireshark', 'TCP/IP'],
        objectives: [
          'Capture live network traffic from terminal using tcpdump',
          'Inspect the TCP three-way handshake to see how connections establish',
          'Filter DNS query and response packets to identify resolution delays'
        ],
        lab: {
          name: 'Wireshark Packet Analysis Practice',
          url: 'https://www.wireshark.org/',
          actionText: 'Try Practice Lab',
          tip: 'Open a sample capture file in Wireshark to follow a live HTTP packet stream.'
        }
      },
      {
        id: 'l3-4',
        step: '04',
        title: 'Remote SSH Hardening & Terminal Efficiency',
        desc: 'Protect your remote servers against unauthorized logins by configuring SSH keypairs, disabling password login, and managing sessions with tmux.',
        channel: 'ThePrimeagen',
        duration: '1h 45m',
        xp: 50,
        url: 'https://www.youtube.com/watch?v=X6AR2RMB5tE',
        tags: ['SSH', 'Security', 'Tmux'],
        objectives: [
          'Create secure SSH keys and disable password-based root login',
          'Configure ~/.ssh/config to connect to servers with one simple alias',
          'Keep terminal sessions running in the background using tmux'
        ],
        lab: {
          name: 'SSH Key & Tmux Practice',
          url: 'https://sadservers.com/',
          actionText: 'Try Practice Lab',
          tip: 'Connect to a server terminal, start a tmux session, detach, and reconnect.'
        }
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
    desc: 'Package applications into lightweight container images with Docker, orchestrate multi-container workloads with Kubernetes, and automate testing and deployments with GitHub Actions.',
    quickGuide: {
      goal: 'Package applications inside Docker containers, deploy them to Kubernetes clusters, and automate your build and test pipeline on every Git commit.',
      steps: [
        'Click "Watch Video Lesson" to understand Docker containers and Kubernetes cluster architecture.',
        'Use Play with Docker and Play with Kubernetes in your browser to run live clusters without installing anything.',
        'Create an automated GitHub Actions pipeline to run tests automatically whenever code is pushed.'
      ]
    },
    cheatsheets: [
      { title: 'Docker CLI Quick Reference', url: 'https://docs.docker.com/get-started/docker_cheatsheet.pdf', desc: 'Essential commands: docker run, build, ps, exec, volumes, and networks.' },
      { title: 'Kubernetes Kubectl Cheatsheet', url: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/', desc: 'Authoritative guide for kubectl get, describe, apply, logs, and port-forward.' },
      { title: 'GitHub Actions Workflow Syntax', url: 'https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions', desc: 'Syntax for triggers, jobs, steps, matrix tests, and secrets.' }
    ],
    labs: [
      {
        name: 'Play with Docker Live Terminal',
        desc: 'Instant browser terminal with Docker pre-installed. Run containers, build images, and test Docker Compose stacks for free.',
        url: 'https://labs.play-with-docker.com/',
        type: 'Free Browser Environment',
        freeNote: '100% Free · Docker Hub login'
      },
      {
        name: 'Play with Kubernetes Multi-Node Cluster',
        desc: 'Browser-based multi-node Kubernetes cluster to practice kubectl commands, deploy pods, and test services live.',
        url: 'https://labs.play-with-k8s.com/',
        type: 'Free Interactive Cluster',
        freeNote: '100% Free · 4-hour live sessions'
      }
    ],
    lessons: [
      {
        id: 'l4-1',
        step: '01',
        title: 'Docker Containers, Images & Compose Architecture',
        desc: 'Learn how containers package code and dependencies so apps run identically anywhere: Dockerfiles, image layers, volumes, and Docker Compose.',
        channel: 'TechWorld with Nana',
        duration: '3h 10m',
        xp: 60,
        url: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
        tags: ['Docker', 'Containers', 'Compose'],
        objectives: [
          'Write a clean, optimized Dockerfile to package a web application',
          'Run, stop, inspect, and execute commands inside containers with docker exec',
          'Run multi-container applications (app + database) with docker-compose.yml'
        ],
        lab: {
          name: 'Play with Docker Practice',
          url: 'https://labs.play-with-docker.com/',
          actionText: 'Try Practice Lab',
          tip: 'Launch a container, run an Nginx web server on port 80, and view the web page in your browser.'
        }
      },
      {
        id: 'l4-2',
        step: '02',
        title: 'Kubernetes Cluster Architecture & Object Orchestration',
        desc: 'Understand how Kubernetes automatically manages, scales, and heals containers across server clusters: Pods, Deployments, and Services.',
        channel: 'TechWorld with Nana',
        duration: '4h 00m',
        xp: 80,
        url: 'https://www.youtube.com/watch?v=X48VuDVv0do',
        tags: ['Kubernetes', 'K8s', 'Pods'],
        objectives: [
          'Understand the Kubernetes Control Plane and Worker Nodes',
          'Deploy applications using declarative YAML files (kubectl apply -f)',
          'Expose application pods through Services and Ingress controllers'
        ],
        lab: {
          name: 'Play with Kubernetes Multi-Node Lab',
          url: 'https://labs.play-with-k8s.com/',
          actionText: 'Try Practice Lab',
          tip: 'Bootstrap a 2-node cluster and deploy a 3-replica web server deployment.'
        }
      },
      {
        id: 'l4-3',
        step: '03',
        title: 'GitHub Actions Continuous Integration & Delivery',
        desc: 'Build automated pipelines that automatically test code, build container images, and notify team members whenever code is pushed.',
        channel: 'TechWorld with Nana',
        duration: '2h 15m',
        xp: 60,
        url: 'https://www.youtube.com/watch?v=R8_veQiYBjI',
        tags: ['CI/CD', 'GitHub Actions', 'Pipelines'],
        objectives: [
          'Write a .github/workflows/ci.yml pipeline that runs on git push',
          'Run automated tests and build a Docker container inside the runner',
          'Store secret passwords and API tokens securely with GitHub Secrets'
        ],
        lab: {
          name: 'Create a GitHub Actions Pipeline',
          url: 'https://github.com/features/actions',
          actionText: 'Try Practice Lab',
          tip: 'Create a simple repository and write an automated workflow that runs tests on every push.'
        }
      },
      {
        id: 'l4-4',
        step: '04',
        title: 'Jenkins CI/CD Automation Fundamentals',
        desc: 'Understand enterprise CI/CD server architecture: Jenkins controller and agent nodes, declarative Jenkinsfiles, and build triggers.',
        channel: 'KodeKloud',
        duration: '5h 00m',
        xp: 60,
        url: 'https://www.youtube.com/watch?v=pMO26j2OUME',
        tags: ['Jenkins', 'CI/CD', 'Automation'],
        objectives: [
          'Understand the difference between Jenkins Controllers and distributed Agents',
          'Author a declarative Jenkinsfile with stages for build, test, and release',
          'Configure webhook triggers between Git repositories and Jenkins jobs'
        ],
        lab: {
          name: 'Dockerized Jenkins Setup',
          url: 'https://labs.play-with-docker.com/',
          actionText: 'Try Practice Lab',
          tip: 'Run a Jenkins container in Play with Docker and explore the automated dashboard.'
        }
      },
      {
        id: 'l4-5',
        step: '05',
        title: 'Production DevOps Engineering: End-to-End Deployment',
        desc: 'Put all the pieces together: connect code commit -> automated testing -> Docker image build -> cloud deployment with zero downtime.',
        channel: 'freeCodeCamp',
        duration: '2h 15m',
        xp: 80,
        url: 'https://www.youtube.com/watch?v=jSH03P3eJ6U',
        tags: ['DevOps', 'Deployment', 'Production'],
        objectives: [
          'Wire together Git commits, container builds, and cloud deployment',
          'Implement health checks for zero-downtime rolling updates',
          'Structure staging and production environment branches with approvals'
        ],
        lab: {
          name: 'DevOps Capstone Starter Repo',
          url: 'https://github.com/',
          actionText: 'Try Practice Lab',
          tip: 'Deploy a containerized web application with automated GitHub Actions testing and deployment.'
        }
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
    desc: 'Replace manual console clicking with clean, reproducible code. Provision cloud networks, servers, and storage declaratively using Terraform and Ansible.',
    quickGuide: {
      goal: 'Write code that creates and configures entire cloud environments automatically, so you can rebuild or duplicate your systems in minutes.',
      steps: [
        'Click "Watch Video Lesson" to learn Terraform syntax and state management.',
        'Use HashiCorp tutorials or local emulators to test your code without spending cloud money.',
        'Write an Ansible playbook to configure servers automatically, then mark your lesson completed.'
      ]
    },
    cheatsheets: [
      { title: 'Terraform CLI Commands Cheatsheet', url: 'https://developer.hashicorp.com/terraform/cli/commands', desc: 'terraform init, plan, apply, destroy, state, and fmt commands.' },
      { title: 'Ansible Playbook Quick Reference', url: 'https://docs.ansible.com/ansible/latest/collections/ansible/builtin/index.html', desc: 'Syntax for package installation, service management, and configuration files.' },
      { title: 'AWS CloudFormation Syntax Reference', url: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html', desc: 'Parameters, Resources, and Outputs template structure.' }
    ],
    labs: [
      {
        name: 'HashiCorp Official Terraform Tutorials',
        desc: 'Step-by-step interactive tutorials with downloadable configuration files and clear architecture diagrams.',
        url: 'https://developer.hashicorp.com/terraform/tutorials',
        type: 'Official Guided Tutorials',
        freeNote: '100% Free Documentation'
      },
      {
        name: 'LocalStack: Local Cloud Emulator',
        desc: 'Emulate AWS cloud APIs locally on your computer to test Terraform configurations with zero cloud costs.',
        url: 'https://localstack.cloud/',
        type: 'Local Cloud Emulator',
        freeNote: 'Free Community Edition'
      }
    ],
    lessons: [
      {
        id: 'l5-1',
        step: '01',
        title: 'Terraform Declarative Provisioning & State Management',
        desc: 'Learn HashiCorp Terraform: writing configuration files in HCL, running plans, applying changes, and understanding the terraform.tfstate file.',
        channel: 'freeCodeCamp & Sanjeev Thiyagarajan',
        duration: '2h 30m',
        xp: 70,
        url: 'https://www.youtube.com/watch?v=SLB_c_ayRMo',
        tags: ['Terraform', 'IaC', 'HashiCorp'],
        objectives: [
          'Understand the core workflow: terraform init, plan, apply, and destroy',
          'Learn how Terraform tracks real resources using the state file',
          'Create reusable infrastructure code using variables and modules'
        ],
        lab: {
          name: 'HashiCorp Terraform Get Started',
          url: 'https://developer.hashicorp.com/terraform/tutorials/aws-get-started',
          actionText: 'Try Practice Lab',
          tip: 'Provision a test cloud server and network using Terraform, then destroy it cleanly.'
        }
      },
      {
        id: 'l5-2',
        step: '02',
        title: 'Ansible Playbooks & Server Configuration Automation',
        desc: 'Automate server setup with Ansible: writing simple YAML playbooks to install software, start services, and configure settings across multiple servers.',
        channel: 'freeCodeCamp',
        duration: '1h 30m',
        xp: 50,
        url: 'https://www.youtube.com/watch?v=KuiAiQkNFKQ',
        tags: ['Ansible', 'Configuration', 'Automation'],
        objectives: [
          'Define server inventory files that list your target computers',
          'Write repeatable YAML playbooks to install packages and start services',
          'Execute playbooks over SSH without installing any agent software'
        ],
        lab: {
          name: 'Ansible Docker Testing',
          url: 'https://labs.play-with-docker.com/',
          actionText: 'Try Practice Lab',
          tip: 'Run Ansible in a container to configure two other container target nodes with a web server.'
        }
      },
      {
        id: 'l5-3',
        step: '03',
        title: 'AWS CloudFormation Stacks & Change Sets',
        desc: 'Write native AWS infrastructure templates in YAML or JSON to deploy cloud resources and preview changes with Change Sets.',
        channel: 'Intellipaat',
        duration: '2h 00m',
        xp: 50,
        url: 'https://www.youtube.com/watch?v=Omppm_YcKok',
        tags: ['CloudFormation', 'AWS', 'IaC'],
        objectives: [
          'Author CloudFormation templates declaring cloud storage, servers, and security groups',
          'Use Change Sets to preview modifications before updating live systems',
          'Understand automatic rollbacks when an infrastructure deployment fails'
        ],
        lab: {
          name: 'LocalStack CloudFormation Test',
          url: 'https://localstack.cloud/',
          actionText: 'Try Practice Lab',
          tip: 'Deploy a CloudFormation template to your local LocalStack endpoint with zero AWS cost.'
        }
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
    desc: 'Protect cloud systems against unauthorized access using Zero Trust principles, manage encryption keys, and monitor real-time server health with Prometheus & Grafana.',
    quickGuide: {
      goal: 'Secure cloud environments with least-privilege permissions, configure encryption, and build live monitoring dashboards to see system health.',
      steps: [
        'Click "Watch Video Lesson" to understand cloud security models and system metrics.',
        'Explore the live Grafana playground to see real production dashboards in action.',
        'Audit user permissions to practice least-privilege access, then mark the lesson completed.'
      ]
    },
    cheatsheets: [
      { title: 'AWS Security Pillar Best Practices', url: 'https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html', desc: 'Official guide covering identity, network protection, and data encryption.' },
      { title: 'PromQL (Prometheus Query) Reference', url: 'https://promlabs.com/promql-cheat-sheet/', desc: 'Syntax for calculating CPU usage, memory pressure, and request counts.' },
      { title: 'Kubernetes Permissions Reference', url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/', desc: 'Roles, ClusterRoles, and user binding definitions.' }
    ],
    labs: [
      {
        name: 'Grafana Live Production Dashboard',
        desc: 'Explore production Grafana dashboards populated with live real-time telemetry metrics, logs, and trace data.',
        url: 'https://play.grafana.org/',
        type: 'Live Interactive Dashboard',
        freeNote: '100% Free · No login required'
      },
      {
        name: 'AWS Well-Architected Security Labs',
        desc: 'Official hands-on lab guides for configuring secure access policies, encryption keys, and incident alerts.',
        url: 'https://wellarchitectedlabs.com/security/',
        type: 'Official Lab Guides',
        freeNote: 'Free architecture blueprints'
      }
    ],
    lessons: [
      {
        id: 'l6-1',
        step: '01',
        title: 'Cloud Security Architecture & Zero Trust Principles',
        desc: 'Learn the fundamentals of cloud security: the Shared Responsibility Model, defense-in-depth, continuous verification, and data encryption.',
        channel: 'freeCodeCamp',
        duration: '3h 15m',
        xp: 60,
        url: 'https://www.youtube.com/watch?v=M988_fsOSWo',
        tags: ['Security', 'Zero Trust', 'Compliance'],
        objectives: [
          'Understand what security tasks the cloud provider handles vs your responsibility',
          'Apply the principle of least privilege: give users only the exact access they need',
          'Design encryption strategies to protect data both stored on disk and in transit'
        ],
        lab: {
          name: 'AWS Well-Architected Security Blueprint',
          url: 'https://wellarchitectedlabs.com/security/',
          actionText: 'Try Practice Lab',
          tip: 'Follow the Identity & Access Management guide to audit security baselines.'
        }
      },
      {
        id: 'l6-2',
        step: '02',
        title: 'Prometheus & Grafana Enterprise Observability',
        desc: 'Learn how companies monitor cloud health: collecting server metrics, writing PromQL queries, and displaying visual graphs in Grafana.',
        channel: 'TechWorld with Nana',
        duration: '3h 00m',
        xp: 70,
        url: 'https://www.youtube.com/watch?v=h4Sl21AKiDg',
        tags: ['Observability', 'Prometheus', 'Grafana'],
        objectives: [
          'Configure Prometheus to scrape metrics from web applications and servers',
          'Write PromQL queries to measure CPU load, memory usage, and error rates',
          'Build custom Grafana visual dashboards with automated email or chat alerts'
        ],
        lab: {
          name: 'Grafana Live Demo Environment',
          url: 'https://play.grafana.org/',
          actionText: 'Try Practice Lab',
          tip: 'Navigate through production dashboards on play.grafana.org and inspect query panels.'
        }
      },
      {
        id: 'l6-3',
        step: '03',
        title: 'AWS IAM Deep Dive, Least Privilege & KMS Encryption',
        desc: 'Master granular permissions on AWS: writing JSON policy rules, configuring IAM Roles for applications, and managing encryption keys with KMS.',
        channel: 'Simplilearn',
        duration: '2h 30m',
        xp: 60,
        url: 'https://www.youtube.com/watch?v=xzxtuz3s-DI',
        tags: ['AWS', 'IAM', 'Encryption'],
        objectives: [
          'Write clear JSON policy rules with explicit allow and deny statements',
          'Attach secure IAM Roles to servers so you never need hardcoded passwords',
          'Manage cryptographic keys with AWS Key Management Service (KMS)'
        ],
        lab: {
          name: 'AWS IAM Policy Simulator',
          url: 'https://policysim.aws.amazon.com/',
          actionText: 'Try Practice Lab',
          tip: 'Test your custom JSON policy in the simulator to verify it denies unauthorized actions.'
        }
      },
      {
        id: 'l6-4',
        step: '04',
        title: 'Kubernetes Permissions & Cluster Security',
        desc: 'Secure container clusters: configure restricted ServiceAccounts, define Roles with specific verbs, and apply network policies.',
        channel: 'TechWorld with Nana',
        duration: '1h 30m',
        xp: 50,
        url: 'https://www.youtube.com/watch?v=oBf5lrmquYI',
        tags: ['Kubernetes', 'Security', 'RBAC'],
        objectives: [
          'Create restricted service accounts for applications and pipelines',
          'Author scoped Roles that permit only read or write access to specific pods',
          'Apply network policies to restrict unauthorized pod-to-pod communication'
        ],
        lab: {
          name: 'Play with Kubernetes Permissions Lab',
          url: 'https://labs.play-with-k8s.com/',
          actionText: 'Try Practice Lab',
          tip: 'Create a read-only ServiceAccount and verify it can list pods but cannot delete them.'
        }
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
    desc: 'Bring all your skills together: prepare for industry exams, build the Cloud Resume Challenge capstone project, and deploy a live portfolio to show employers.',
    quickGuide: {
      goal: 'Validate your knowledge by reviewing certification exams and building the famous Cloud Resume Challenge capstone to show on your CV.',
      steps: [
        'Watch the certification review masterclasses for AWS, Azure, or Google Cloud.',
        'Build and deploy the Cloud Resume Challenge: web frontend, serverless API, database, and CI/CD.',
        'Mark the capstone project completed to unlock the Senior Cloud Architect rank!'
      ]
    },
    cheatsheets: [
      { title: 'The Cloud Resume Challenge Step-by-Step Guide', url: 'https://cloudresumechallenge.dev/docs/the-challenge/aws/', desc: 'Official instructions: HTML, CSS, JavaScript, S3, CloudFront, DNS, Lambda, DynamoDB, and CI/CD.' },
      { title: 'AWS Official Exam Questions Guide', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/', desc: 'Authoritative breakdown of question formats and scoring domains.' },
      { title: 'Kubernetes CKA Exam Blueprint', url: 'https://github.com/cncf/curriculum', desc: 'Full syllabus for the Certified Kubernetes Administrator practical exam.' }
    ],
    labs: [
      {
        name: 'The Cloud Resume Challenge Project',
        desc: 'The gold standard cloud engineering portfolio project. Build serverless microservices with automated testing and continuous deployment.',
        url: 'https://cloudresumechallenge.dev/docs/the-challenge/aws/',
        type: 'Portfolio Capstone Project',
        freeNote: 'Can be built inside the AWS / Azure / GCP Free Tier'
      },
      {
        name: 'Killercoda Interactive Exam Drills',
        desc: 'Free browser-based scenarios matching real Certified Kubernetes Administrator (CKA) exam questions.',
        url: 'https://killercoda.com/',
        type: 'Interactive Exam Drills',
        freeNote: 'Free access to practice drills'
      }
    ],
    lessons: [
      {
        id: 'l7-1',
        step: '01',
        title: 'AWS Certified Cloud Practitioner (CLF-C02) Exam Review',
        desc: 'Comprehensive review of sample questions, architectural patterns, billing models, and exam strategy for the AWS CLF-C02 exam.',
        channel: 'freeCodeCamp & Andrew Brown',
        duration: '14h 00m',
        xp: 80,
        url: 'https://www.youtube.com/watch?v=NhDYbskXRgc',
        tags: ['AWS', 'Certification', 'Exam Review'],
        objectives: [
          'Review all core AWS domains: Cloud Concepts, Security, Technology, and Billing',
          'Practice solving real scenario-based multiple choice exam questions',
          'Understand AWS support plans, pricing models, and Cost Explorer tools'
        ],
        lab: {
          name: 'AWS Skill Builder Official Practice Test',
          url: 'https://explore.skillbuilder.aws/',
          actionText: 'Try Practice Lab',
          tip: 'Complete the free 20-question official practice test in AWS Skill Builder.'
        }
      },
      {
        id: 'l7-2',
        step: '02',
        title: 'Microsoft Azure AZ-900 Certification Review',
        desc: 'Focused study guide for Microsoft Azure Fundamentals: core architecture, governance tools, monitoring, and security services.',
        channel: 'Adam Marczak',
        duration: '8h 00m',
        xp: 70,
        url: 'https://www.youtube.com/watch?v=NPEsD6n9A_I',
        tags: ['Azure', 'AZ-900', 'Exam Review'],
        objectives: [
          'Review Azure architectural components: Subscriptions, Resource Groups, and Regions',
          'Study Azure security features: Defense in Depth, Microsoft Defender, and Key Vault',
          'Take the official practice assessment on Microsoft Learn'
        ],
        lab: {
          name: 'Microsoft Learn AZ-900 Free Assessment',
          url: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/',
          actionText: 'Try Practice Lab',
          tip: 'Aim for an 80%+ score on the official Microsoft Learn practice assessment.'
        }
      },
      {
        id: 'l7-3',
        step: '03',
        title: 'Google Cloud Digital Leader Certification Course',
        desc: 'Clear, comprehensive course for the Google Cloud Digital Leader exam: digital transformation, Google Cloud infrastructure, products, and cost controls.',
        channel: 'freeCodeCamp',
        duration: '6h 00m',
        xp: 70,
        url: 'https://www.youtube.com/watch?v=UGRbzEwtZzg',
        tags: ['GCP', 'Digital Leader', 'Exam Review'],
        objectives: [
          'Understand Google Cloud organization: Folders, Projects, and Resource access',
          'Review Google Cloud data tools (BigQuery, Looker, Cloud Storage)',
          'Master Google Cloud billing, committed use discounts, and budget alerts'
        ],
        lab: {
          name: 'Google Cloud Skills Boost Track',
          url: 'https://cloud.google.com/certification/cloud-digital-leader',
          actionText: 'Try Practice Lab',
          tip: 'Review the official GCP exam guide to ensure all domain topics are mastered.'
        }
      },
      {
        id: 'l7-4',
        step: '04',
        title: 'Certified Kubernetes Administrator (CKA) Terminal Drills',
        desc: 'Hands-on practical exam preparation: fast command-line techniques, imperative kubectl commands, troubleshooting broken nodes, and etcd backups.',
        channel: 'KodeKloud',
        duration: '15h 00m',
        xp: 90,
        url: 'https://www.youtube.com/watch?v=KVBON1lA9N8',
        tags: ['Kubernetes', 'CKA', 'Hands-on'],
        objectives: [
          'Generate Kubernetes manifests rapidly with kubectl run --dry-run=client -o yaml',
          'Backup and restore cluster state using etcdctl snapshot commands',
          'Troubleshoot failed kubelet services and inspect container logs'
        ],
        lab: {
          name: 'Killercoda Interactive CKA Scenarios',
          url: 'https://killercoda.com/',
          actionText: 'Try Practice Lab',
          tip: 'Complete the free Killercoda scenarios to prepare for live terminal questions.'
        }
      },
      {
        id: 'l7-5',
        step: '05',
        title: 'Deploy Cloud Resume Capstone Project to Production',
        desc: 'The ultimate proof of competence for employers: deploy a personal resume website on cloud storage with custom domain, HTTPS, serverless visitor counter, and automated CI/CD.',
        channel: 'Forrest Brazeal',
        duration: 'Capstone Project',
        xp: 150,
        url: 'https://cloudresumechallenge.dev/docs/the-challenge/aws/',
        tags: ['Portfolio', 'Capstone', 'Resume', 'Serverless'],
        objectives: [
          'Deploy a static HTML/CSS/JS frontend on cloud storage with HTTPS distribution',
          'Create a serverless visitor counter using Python/Node.js AWS Lambda and DynamoDB',
          'Automate tests and deployment using GitHub Actions on every git push'
        ],
        lab: {
          name: 'The Cloud Resume Challenge Blueprint',
          url: 'https://cloudresumechallenge.dev/docs/the-challenge/aws/',
          actionText: 'Start Capstone Challenge',
          tip: 'Follow the 16 steps of the Cloud Resume Challenge and link your live project URL in your resume!'
        }
      }
    ]
  }
];

/* ── INDUSTRY CERTIFICATIONS (NO USD, MEANINGFUL CAREER GUIDANCE) ── */
const CERTS = [
  {
    id: 'aws-clf',
    provider: 'Amazon Web Services',
    name: 'AWS Certified Cloud Practitioner (CLF-C02)',
    recommendedWhen: 'Take after completing Phase 02 (Multi-Cloud Infrastructure Core)',
    targetRoles: 'Junior Cloud Engineer, Cloud Support Associate, IT Consultant',
    studyTime: '2 to 3 weeks (about 45 minutes a day)',
    difficulty: 'Beginner Friendly',
    prereq: 'No coding or cloud background required',
    desc: 'The best first certification for beginners. It proves you understand how cloud computing works, key AWS services, basic security, and cloud billing concepts.',
    links: [
      { label: 'Free Video Guide ->', url: 'https://www.youtube.com/watch?v=NhDYbskXRgc', type: 'primary' },
      { label: 'Official Practice Test ->', url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials', type: 'secondary' }
    ]
  },
  {
    id: 'az-900',
    provider: 'Microsoft Azure',
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    recommendedWhen: 'Take after completing Phase 02 (Multi-Cloud Infrastructure Core)',
    targetRoles: 'Cloud Administrator, Helpdesk Engineer, Enterprise IT Specialist',
    studyTime: '2 to 3 weeks of steady prep',
    difficulty: 'Beginner Friendly',
    prereq: 'No coding or system administration background needed',
    desc: 'The essential starting credential for Microsoft cloud technologies. Teaches how Azure manages virtual computers, storage, networks, and secure company user accounts.',
    links: [
      { label: 'Free Video Guide ->', url: 'https://www.youtube.com/watch?v=NPEsD6n9A_I', type: 'primary' },
      { label: 'Official Practice Test ->', url: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/', type: 'secondary' }
    ]
  },
  {
    id: 'gcp-cdl',
    provider: 'Google Cloud Platform',
    name: 'Google Cloud Digital Leader',
    recommendedWhen: 'Take after completing Phase 02 (Multi-Cloud Infrastructure Core)',
    targetRoles: 'Cloud Associate, Technical Project Manager, Cloud Business Analyst',
    studyTime: '2 to 3 weeks of review',
    difficulty: 'Beginner Friendly',
    prereq: 'No technical prerequisites required',
    desc: 'Covers the core Google Cloud tools and capabilities in simple terms, focusing on how companies use Google servers, storage, data analysis, and security.',
    links: [
      { label: 'Free Video Guide ->', url: 'https://www.youtube.com/watch?v=UGRbzEwtZzg', type: 'primary' },
      { label: 'Official Exam Blueprint ->', url: 'https://cloud.google.com/certification/cloud-digital-leader', type: 'secondary' }
    ]
  },
  {
    id: 'aws-saa',
    provider: 'Amazon Web Services',
    name: 'AWS Solutions Architect Associate (SAA-C03)',
    recommendedWhen: 'Take after completing Phase 05 (Automation & IaC)',
    targetRoles: 'Cloud Architect, DevOps Engineer, Senior Infrastructure Specialist',
    studyTime: '6 to 8 weeks of hands-on practice',
    difficulty: 'Intermediate',
    prereq: 'Requires good understanding of Linux, VPC networking, and AWS basics',
    desc: 'The most respected associate certification in tech. Proves you can design reliable, secure, high-speed, and cost-efficient architectures on AWS.',
    links: [
      { label: 'Free Video Guide ->', url: 'https://www.youtube.com/watch?v=c3Cn4xYfxJY', type: 'primary' },
      { label: 'Official Practice Hub ->', url: 'https://explore.skillbuilder.aws/', type: 'secondary' }
    ]
  },
  {
    id: 'cka',
    provider: 'Linux Foundation / CNCF',
    name: 'Certified Kubernetes Administrator (CKA)',
    recommendedWhen: 'Take after completing Phase 04 (Containers & K8s)',
    targetRoles: 'Kubernetes Engineer, Platform Specialist, Site Reliability Engineer',
    studyTime: '6 to 8 weeks of terminal practice',
    difficulty: 'Hands-on Exam (Terminal Based)',
    prereq: 'Requires comfort with Docker containers and Linux command line',
    desc: 'A 100% practical, hands-on exam where you solve real terminal tasks: building clusters, deploying apps, configuring network policies, and fixing broken servers.',
    links: [
      { label: 'Free Video Guide ->', url: 'https://www.youtube.com/watch?v=KVBON1lA9N8', type: 'primary' },
      { label: 'Official Exam Syllabus ->', url: 'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/', type: 'secondary' }
    ]
  },
  {
    id: 'linux-plus',
    provider: 'Linux Foundation',
    name: 'LFCS Certified System Administrator',
    recommendedWhen: 'Take after completing Phase 03 (Linux Administration)',
    targetRoles: 'Linux System Administrator, DevOps Operations, Infrastructure Engineer',
    studyTime: '4 to 6 weeks of live terminal practice',
    difficulty: 'Hands-on Exam (Terminal Based)',
    prereq: 'Requires practical experience operating Linux from terminal',
    desc: 'Validates that you can manage real enterprise Linux servers: creating system services, storage partitioning, user permissions, and network troubleshooting.',
    links: [
      { label: 'Free Video Guide ->', url: 'https://www.youtube.com/playlist?list=PLT98CR92P52c7QGZ5nQ72qYxT4f1yR54o', type: 'primary' },
      { label: 'Official Exam Details ->', url: 'https://training.linuxfoundation.org/', type: 'secondary' }
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

    const node = document.createElement('div');
    node.className = `tree-node ${stats.isUnlocked ? 'unlocked' : 'locked'} ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`;
    node.dataset.stageId = stage.id;
    if (stats.isUnlocked) {
      node.onclick = () => openStageDrawer(stage.id);
      node.style.cursor = 'pointer';
    }

    let statusLabel = 'Locked';
    if (isCompleted) statusLabel = 'Completed';
    else if (isCurrent) statusLabel = 'In Progress';
    else if (stats.isUnlocked) statusLabel = 'Available';

    node.innerHTML = `
      <div class="tree-marker"></div>
      <div class="tree-content">
        <div class="tree-header">
          <span class="tree-phase-num">Phase 0${stage.id}</span>
          <span class="tree-status">${statusLabel}</span>
        </div>
        <h3 class="tree-title">${stage.title}</h3>
        <p class="tree-tagline">${stage.tagline}</p>
        <div class="tree-stats">
          <span class="tree-progress-text">${stats.done}/${stats.total} Lessons</span>
          <div class="tree-bar-wrap">
            <div class="tree-bar-fill" style="width: ${stats.pct}%"></div>
          </div>
          <span class="tree-sp">+${stage.xpReward} SP</span>
        </div>
      </div>
    `;
    container.appendChild(node);
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

  const headerPill = document.getElementById('drawerHeaderPill');
  if (headerPill) {
    headerPill.textContent = `PHASE 0${stage.id} · ${stage.dur}`;
  }

  renderStageDrawerContent(stage, stats);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // GSAP subtle entrance inside drawer
  if (typeof gsap !== 'undefined') {
    gsap.from('.drawer-header, .student-guide-card, .module-card', {
      opacity: 0,
      y: 16,
      duration: 0.35,
      stagger: 0.06,
      ease: 'power1.out',
      clearProps: 'transform,opacity'
    });
  }
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

  const isAllDone = stats.pct === 100;

  drawerBody.innerHTML = `
    <!-- DRAWER TOP HEADER -->
    <div class="drawer-header">
      <div class="drawer-badge-row">
        <span class="drawer-badge">PHASE 0${stage.id} · ${stage.dur}</span>
        <span class="drawer-sp-pill">+${stage.xpReward} SP Total</span>
      </div>
      <h2 class="drawer-title">${stage.title}</h2>
      <p class="drawer-desc">${stage.desc}</p>

      <!-- PHASE PROGRESS BAR -->
      <div class="drawer-progress-box">
        <div class="dpb-labels">
          <span><strong>${stats.done} of ${stats.total}</strong> Lessons Completed</span>
          <span class="dpb-pct">${Math.round(stats.pct)}%</span>
        </div>
        <div class="dpb-track">
          <div class="dpb-fill ${isAllDone ? 'complete' : ''}" style="width: ${stats.pct}%"></div>
        </div>
      </div>
    </div>

    <!-- STUDENT ACTION GUIDE (HOW TO STUDY) -->
    <div class="student-guide-card">
      <div class="sgc-header">
        <h4 class="sgc-title">How to Learn This Phase — 3 Simple Steps</h4>
        <p class="sgc-subtitle">${stage.quickGuide.goal}</p>
      </div>

      <!-- ZERO CONFUSION GUARANTEE -->
      <div class="sgc-clarity-callout">
        <span class="scc-badge">Simple Student Flow</span>
        <p class="scc-text">
          You do <strong>NOT</strong> have to take separate courses or search for extra videos. For every step below, simply watch the single curated video lesson, practice what you learned in the free practice lab, and mark it completed. That is all you need!
        </p>
      </div>

      <div class="sgc-steps">
        <div class="sgc-step-item">
          <span class="sgc-num">01</span>
          <div class="sgc-step-text">
            <strong>Watch Video Lesson</strong>
            <span>Watch the curated video lesson to understand how the tools work.</span>
          </div>
        </div>
        <div class="sgc-step-item">
          <span class="sgc-num">02</span>
          <div class="sgc-step-text">
            <strong>Try Practice Lab</strong>
            <span>Launch the free practice lab or terminal to test the commands yourself.</span>
          </div>
        </div>
        <div class="sgc-step-item">
          <span class="sgc-num">03</span>
          <div class="sgc-step-text">
            <strong>Mark Completed</strong>
            <span>Click "Mark Lesson as Completed" to track your progress and claim your points.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- DRAWER TAB BUTTONS (NO EMOJIS) -->
    <div class="drawer-tabs" role="tablist">
      <button class="dtab-btn active" role="tab" aria-selected="true" onclick="switchDrawerTab(event, 'dtab-lessons')">
        Curriculum Steps (${stats.done}/${stats.total})
      </button>
      <button class="dtab-btn" role="tab" aria-selected="false" onclick="switchDrawerTab(event, 'dtab-labs')">
        All Practice Labs (${stage.labs.length})
      </button>
      <button class="dtab-btn" role="tab" aria-selected="false" onclick="switchDrawerTab(event, 'dtab-cheats')">
        Study Cheatsheets (${stage.cheatsheets ? stage.cheatsheets.length : 3})
      </button>
    </div>

    <!-- TAB 1: CURRICULUM PATH -->
    <div class="dtab-pane active" id="dtab-lessons" role="tabpanel">
      <div class="stage-lessons-list">
        ${stage.lessons.map((lesson, idx) => {
          const isDone = state.completedLessons.includes(lesson.id);
          return `
            <div class="module-card ${isDone ? 'completed' : ''}" data-lesson-id="${lesson.id}">
              <!-- CARD HEADER -->
              <div class="module-card-header">
                <div class="module-step-badge">STEP ${lesson.step || ('0' + (idx + 1))}</div>
                <div class="module-status-pill ${isDone ? 'done' : 'pending'}">
                  ${isDone ? 'Status: Completed' : 'Status: Up Next'}
                </div>
              </div>

              <!-- TITLE & DESCRIPTION -->
              <h3 class="module-title">${lesson.title}</h3>
              <p class="module-desc">${lesson.desc}</p>

              <!-- OBJECTIVES CHECKLIST -->
              ${lesson.objectives && lesson.objectives.length ? `
                <div class="module-objectives-box">
                  <div class="mob-title">Key Skills to Practice:</div>
                  <ul class="mob-list">
                    ${lesson.objectives.map(obj => `<li>${obj}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}

              <!-- ACTION LINKS ROW -->
              <div class="module-actions-row">
                <!-- SINGLE VIDEO LESSON LINK -->
                <a href="${lesson.url}" target="_blank" rel="noopener" class="btn-module-video" title="Watch ${lesson.title}">
                  <span class="bvt-action">Watch Video Lesson -></span>
                  <span class="bvt-sub">${lesson.channel} · ${lesson.duration}</span>
                </a>

                <!-- HANDS-ON PRACTICE LAB LINK -->
                ${lesson.lab ? `
                  <a href="${lesson.lab.url}" target="_blank" rel="noopener" class="btn-module-lab" title="Practice in ${lesson.lab.name}">
                    <span class="blt-action">${lesson.lab.actionText || 'Try Practice Lab'} -></span>
                    <span class="blt-sub">${lesson.lab.name}</span>
                  </a>
                ` : ''}
              </div>

              <!-- COMPLETION TOGGLE BUTTON -->
              <div class="module-toggle-footer">
                <button 
                  class="btn-toggle-completion ${isDone ? 'is-done' : ''}" 
                  onclick="handleLessonToggle('${lesson.id}', ${lesson.xp}, ${stage.id})"
                  aria-pressed="${isDone}"
                >
                  <span class="btc-tag">${isDone ? '[Completed]' : '[ ]'}</span>
                  <span class="btc-label">
                    ${isDone ? 'Lesson Completed & Verified' : 'Mark Lesson as Completed'}
                  </span>
                  <span class="btc-reward">+${lesson.xp} SP</span>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- TAB 2: PRACTICE LABS -->
    <div class="dtab-pane" id="dtab-labs" role="tabpanel">
      <div class="drawer-labs-grid">
        ${stage.labs.map(lab => `
          <div class="stage-lab-card">
            <div class="slc-top">
              <span class="slc-type-badge">${lab.type}</span>
              ${lab.freeNote ? `<span class="slc-free-badge">${lab.freeNote}</span>` : ''}
            </div>
            <h4 class="slc-name">${lab.name}</h4>
            <p class="slc-desc">${lab.desc}</p>
            <a href="${lab.url}" target="_blank" rel="noopener" class="slc-link-btn">
              Launch Practice Environment ->
            </a>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- TAB 3: CHEATSHEETS & REFERENCE DOCS -->
    <div class="dtab-pane" id="dtab-cheats" role="tabpanel">
      <div class="drawer-cheats-grid">
        ${(stage.cheatsheets || []).map(ch => `
          <div class="stage-cheat-card">
            <h4 class="scc-name">${ch.title}</h4>
            <p class="scc-desc">${ch.desc}</p>
            <a href="${ch.url}" target="_blank" rel="noopener" class="scc-link">
              Open Reference Guide ->
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function switchDrawerTab(e, tabId) {
  document.querySelectorAll('.dtab-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.dtab-pane').forEach(p => p.classList.remove('active'));
  e.currentTarget.classList.add('active');
  e.currentTarget.setAttribute('aria-selected', 'true');
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
    const drawerPanel = document.querySelector('.stage-drawer-panel');
    const scrollPos = drawerPanel ? drawerPanel.scrollTop : 0;

    renderStageDrawerContent(stage, stats);

    if (drawerPanel) {
      drawerPanel.scrollTop = scrollPos;
    }

    if (stats.pct === 100) {
      showToast(`Phase 0${stage.id} fully completed! All modules verified.`, 'done-toast');
    }
  }

  renderRoadmap();
  updateDashboard();
}

/* ── DASHBOARD CALCULATIONS ── */
const LEVELS = [
  { min: 0, name: 'Cloud Foundation', next: 'Next Milestone: Systems Specialist at 200 SP' },
  { min: 200, name: 'Systems Specialist', next: 'Next Milestone: Cloud Practitioner at 500 SP' },
  { min: 500, name: 'Cloud Practitioner', next: 'Next Milestone: DevOps Engineer at 1000 SP' },
  { min: 1000, name: 'DevOps Engineer', next: 'Next Milestone: Infrastructure Architect at 1800 SP' },
  { min: 1800, name: 'Infrastructure Architect', next: 'Next Milestone: Senior Cloud Architect at 2500 SP' },
  { min: 2500, name: 'Senior Cloud Architect', next: 'Maximum Curriculum Rank Achieved' },
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

/* ── INDUSTRY CERTIFICATIONS (NO USD, REAL GUIDANCE) ── */
function renderCerts() {
  const grid = document.getElementById('certsGrid');
  if (!grid) return;

  grid.innerHTML = '';
  CERTS.forEach(cert => {
    const isEarned = state.earnedCerts.includes(cert.id);
    
    const row = document.createElement('div');
    row.className = `cert-row ${isEarned ? 'earned' : ''}`;
    
    row.innerHTML = `
      <div class="cert-row-main">
        <div class="cert-row-left">
          <div class="cert-row-icon">${isEarned ? '✓' : '✧'}</div>
          <div class="cert-row-info">
            <h3 class="cert-row-title">${cert.name}</h3>
            <p class="cert-row-vendor">${cert.provider || cert.vendor} · ${cert.recommendedWhen || cert.level}</p>
          </div>
        </div>
        <div class="cert-row-right">
          <button class="cert-row-btn ${isEarned ? 'btn-earned' : 'btn-ghost'}" data-cert-id="${cert.id}">
            ${isEarned ? 'Earned' : 'Mark Passed'}
          </button>
        </div>
      </div>
      <div class="cert-row-details">
        <p class="cert-row-desc">${cert.desc}</p>
        <div class="cert-meta-grid">
          <div class="cert-meta-item">
            <span class="cert-meta-label">Target Roles</span>
            <span class="cert-meta-val">${cert.targetRoles}</span>
          </div>
          <div class="cert-meta-item">
            <span class="cert-meta-label">Study Time</span>
            <span class="cert-meta-val">${cert.studyTime}</span>
          </div>
          <div class="cert-meta-item">
            <span class="cert-meta-label">Prerequisites</span>
            <span class="cert-meta-val">${cert.prereq}</span>
          </div>
        </div>
        <div class="cert-links">
          ${(cert.links || []).map(link => `
            <a href="${link.url}" target="_blank" rel="noopener" class="cert-link-btn ${link.type === 'primary' ? 'primary-link' : 'secondary-link'}">
              ${link.label}
            </a>
          `).join('')}
        </div>
      </div>
    `;
    grid.appendChild(row);
  });

  grid.querySelectorAll('.cert-row-btn').forEach(btn => {
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

/* ── GSAP DYNAMIC ANIMATIONS ── */
function initAnimations() {
  if (typeof gsap === 'undefined') return;

  // Hero section reveal
  gsap.from('.hero-badge, .hero-title, .hero-sub, .hero-cta, .hero-stats', {
    opacity: 0,
    y: 16,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out',
    clearProps: 'transform,opacity'
  });

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Analytics cards reveal
    gsap.from('.metric-card', {
      scrollTrigger: {
        trigger: '#analytics',
        start: 'top 88%',
        once: true
      },
      opacity: 0,
      y: 16,
      duration: 0.45,
      stagger: 0.06,
      ease: 'power2.out',
      clearProps: 'transform,opacity'
    });

    // Roadmap cards reveal
    gsap.from('.phase-card', {
      scrollTrigger: {
        trigger: '#roadmap',
        start: 'top 88%',
        once: true
      },
      opacity: 0,
      y: 18,
      duration: 0.45,
      stagger: 0.08,
      ease: 'power2.out',
      clearProps: 'transform,opacity'
    });

    // Certification cards reveal
    gsap.from('.cert-card', {
      scrollTrigger: {
        trigger: '#certifications',
        start: 'top 88%',
        once: true
      },
      opacity: 0,
      y: 18,
      duration: 0.45,
      stagger: 0.08,
      ease: 'power2.out',
      clearProps: 'transform,opacity'
    });
  }
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

/* ── SAKURA PETAL GENERATOR ── */
function initSakura() {
  const container = document.getElementById('sakura-container');
  if (!container) return;
  const numPetals = 40;
  for (let i = 0; i < numPetals; i++) {
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';
    const size = Math.random() * 8 + 6; // 6 to 14px
    petal.style.width = size + 'px';
    petal.style.height = (size * 1.4) + 'px';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 6 + 4) + 's'; // 4 to 10s
    petal.style.animationDelay = Math.random() * 5 + 's';
    
    // Add subtle variation to colors (some more pink, some more white)
    if (Math.random() > 0.6) {
      petal.style.background = '#ffebf0';
      petal.style.boxShadow = '0 0 8px #ffebf0';
    }
    
    container.appendChild(petal);
  }
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
  initAnimations();
  initSakura();

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
