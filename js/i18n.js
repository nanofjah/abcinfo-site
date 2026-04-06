/* ══════════════════════════════════════════════════════
   INTERNATIONALISATION — FR / EN
══════════════════════════════════════════════════════ */
const translations = {
  fr: {
    /* Logo */
    'logo-tagline': 'Service en informatique',

    /* Thème */
    'btn80': 'Années 80',
    'btn90': 'Années 90',

    /* Images */
    'img-caption': 'image générée par Google Nano Banana 2',

    /* CV */
    'cv-title':    'Ingénieur diplômé EPITA Paris',
    'cv-subtitle': 'Génie logiciel &amp; systèmes d\'informations',

    /* Divers */
    'hero-title-aria': 'Votre partenaire informatique à Genève',
    'cmd-title':   'Invite de commandes',
    'ci-bartitle': 'abcinfo.ch — contact',
    'ancien-site': 'Ancien site',
    'form-bar':    '&gt;_ formulaire de contact',

    /* Navigation */
    'nav-support':  'Support',
    'nav-dev':      'Développement',
    'nav-apropos':  'À propos',
    'nav-contact':  '&gt;_ Contact',

    /* Hero */
    'hero-badge':  'DEPUIS 25 ANS',
    'hero-sub':    'Support &amp; maintenance pour particuliers et entreprises.<br>Développement d\'applications web et mobile sur mesure.',
    'hero-cta1':   '[ DEVIS GRATUIT ]',
    'hero-cta2':   '&gt;_ DÉCOUVRIR',
    'hero-lines':  ['votre partenaire', 'informatique', 'à Genève'],

    /* Axes */
    'axes-label':       'Deux expertises, un seul interlocuteur',
    'axes-support-p':   'Dépannage, maintenance préventive, conseil et formation pour vos équipements PC &amp; Mac.',
    'axes-support-lnk': 'En savoir plus →',
    'axes-dev-p':       'Sites web, applications métier, apps mobiles — conçus sur mesure pour vos besoins.',
    'axes-dev-lnk':     'En savoir plus →',

    /* Support */
    'support-h2':   'Support &amp; Maintenance',
    'support-lead': 'Particuliers, petites entreprises, professions libérales, Abc info est là pour vous aider au quotidien dans l\'utilisation de votre outil informatique. Devis détaillés et gratuits, prestations garanties. Nous vous offrons un service de proximité efficace et bon marché.',
    'support-s1':   '<strong>Dépannage</strong><br><em>AbcInfo</em> intervient au plus vite pour dépanner et configurer vos systèmes informatiques (PC, Mac, Smartphone, Serveurs, etc).<br><span class="sl-sub">Devis gratuit · Facturé à la prestation · Tarifs transparents</span>',
    'support-s2':   '<strong>Maintenance</strong><br><em>AbcInfo</em> propose des formules personnalisées pour gérer vos besoins informatiques au quotidien.<br><span class="sl-sub">Support interactif · Délais garantis · Suivi personnalisé</span>',
    'support-s3':   '<strong>Déploiement</strong><br>Nouveau bureau, restructuration de parc informatique, migration vers le cloud : <em>AbcInfo</em> prend en charge l\'intégralité de votre projet, de l\'étude des besoins à la mise en service complète.<br><span class="sl-sub">Câblage réseau · Postes de travail · Serveurs · NAS · Imprimantes · Téléphonie · Accès internet · Sauvegardes · Documentation</span>',
    'support-s4':   '<strong>Conseil</strong><br><em>AbcInfo</em> vous apporte son expertise pour prendre les bonnes décisions.<br><span class="sl-sub">Définition des besoins · Conduite au changement (matériel &amp; logiciel) · Intégration de progiciels · Administration réseau · etc.</span>',
    'support-s5':   '<strong>Sécurité</strong><br>La sécurité numérique : la problématique technique de l\'entreprise. Nous vous aidons à mettre en place des procédures efficaces et à sensibiliser le personnel à cette problématique.',
    'support-s6':   '<strong>Intelligence artificielle</strong><br><em>AbcInfo</em> intègre les outils IA les plus récents dans vos workflows pour gagner en efficacité. Automatisation, traitement de documents, assistants métier — l\'IA au service de votre activité, sans jargon.<br><span class="sl-sub">Claude API · LLM · RAG · Agents IA · Automatisation · Intégration sur mesure</span>',
    'support-s7':   '<strong>Réseaux</strong><br>Configuration de réseaux (LAN, WAN, VLAN), Wi-Fi, firewall, NAT (translation d\'adresse), routage statique, Linux / Nginx.',
    'support-s8':   '<strong>Téléphonie</strong><br>Mise en place de centraux téléphoniques virtuels indépendants des opérateurs suisses.<br><span class="sl-sub">Téléphonie SIP · Linux · Asterisk · FreePBX · Mise en place de Trunks · Numéros DID · QoS voix · Softphones</span>',
    'support-btn':  'Demander une intervention',

    /* Dev */
    'dev-h2':   'Développement &amp; Applications',
    'dev-lead': '<em>AbcInfo</em> vous aide à concevoir et réaliser vos projets numériques : que ce soit sous forme de site web statique ou dynamique, d\'application web métier ou d\'app pour smartphone, nous intervenons sur toutes les phases du cycle de développement de votre projet.',
    'dev-s1':   '<strong>Conception et spécifications fonctionnelles</strong><br>La réussite d\'un projet numérique se joue dans la compréhension fine des besoins et des processus métiers. <em>AbcInfo</em> vous fait bénéficier de son expertise dans ce domaine.',
    'dev-s2':   '<strong>Réalisation et développement</strong><br><em>AbcInfo</em> code vos projets dans des technologies modernes et pérennes.',
    'dev-s3':   '<strong>Tests de validation et d\'intégration</strong><br><em>AbcInfo</em> effectue des batteries de tests automatisés pour valider fonctionnellement chaque outil développé. Des tests d\'intégration sont également réalisés lors du raccordement au système d\'information client, afin de minimiser les dysfonctionnements et les problèmes de compatibilité entre systèmes hétérogènes.',
    'dev-s4':   '<strong>Livraison, intégration et documentation</strong><br><em>AbcInfo</em> vous livre l\'outil réalisé et l\'intègre dans votre système d\'information. Une documentation complète vous est fournie, détaillant les flux de données et les processus associés.',
    'dev-s5':   '<strong>Garantie et suivi</strong><br><em>AbcInfo</em> vous offre 3 mois de garantie totale sur l\'outil livré, couvrant les vices cachés et les bogues techniques qui n\'auraient pas été détectés en amont.',
    'dev-s6':   '<strong>Sites web modernes</strong><br>Sites vitrines, e-commerce, responsive, rapides et bien référencés.',
    'dev-s7':   '<strong>Applications web métier</strong><br>Back-office, CRM, portails clients, gestion sur mesure.',
    'dev-s8':   '<strong>Applications mobiles</strong><br>Apps iOS &amp; Android natives (disponibles via les stores dédiés) ou PWA (Progressive Web App) pour une expérience app sans les obligations Google ou Apple.',
    'dev-s9':   '<strong>APIs &amp; intégrations</strong><br>Connexion de vos outils à des flux de données externes, automatisation de processus métiers. (Ex : flux financiers Bloomberg, intégration messagerie Telegram, flux données assurances IGB2B.)',
    'dev-s10':  '<strong>Intelligence artificielle</strong><br>Intégration d\'IA dans vos workflows (Claude API, LLM, RAG).',
    'dev-s11':  '<strong>Administration &amp; maintenance</strong><br><em>AbcInfo</em> peut gérer pour vous l\'hébergement de vos outils et en assurer la maintenance.',
    'dev-btn':  'Discuter de votre projet',

    /* Stats */
    'stat-1-label': 'années d\'expérience',
    'stat-2-label': 'zone d\'intervention + remote',
    'stat-3-label': 'délai d\'intervention garanti *',
    'stat-3-note':  '* selon contrat',
    'stat-4-label': 'indépendant — devis gratuit',

    /* À propos */
    'apropos-h2':   'Indépendant depuis 25 ans.',
    'apropos-lead': 'Une seule et unique dépendance : la satisfaction de nos clients.',
    'apropos-p1':   '<strong>Toujours à l\'écoute</strong><br><em>AbcInfo</em> évalue le degré d\'urgence de chaque demande et met tout en œuvre pour intervenir au plus vite — pannes, blocages, impossibilité de travailler : la réactivité est notre priorité.',
    'apropos-p2':   '<strong>Pas de partenariat revendeur</strong><br>Au fil des années, <em>AbcInfo</em> n\'a noué aucun partenariat commercial avec quelque enseigne que ce soit (Apple, Microsoft, Swisscom…). Nos choix sont dictés par la technique et le besoin effectif de nos clients.',
    'apropos-p3':   '<strong>Lien personnalisé</strong><br>Vous parlez directement à la personne qui fait le travail — pas à un commercial, pas à un chef de projet.',
    'apropos-p4':   '<strong>Qualité de service</strong><br><em>AbcInfo</em> accompagne nombre de ses clients depuis des années, et certains depuis plus de 20 ans : un système qui fonctionne !',

    /* Tech */
    'tech-label': 'Technologies',
    'tech-title': 'Stack moderne, choix adaptés',

    /* Contact */
    'contact-title':  'Parlons de vos projets',
    'ci-loc':         '# localisation',
    'ci-tel':         '# téléphone',
    'ci-email':       '# e-mail',
    'ci-dispo':       '# disponibilité',
    'ci-dispo-1':     'Lun–Ven 8h–18h',
    'ci-dispo-2':     'Urgences sur arrangement',
    'ci-zone':        '# zone d\'intervention',
    'ci-zone-1':      'Genève · Vaud · France voisine',
    'ci-zone-2':      'Support à distance (partout)',
    'form-societe':   'Société',
    'form-societe-ph':'Nom de votre entreprise',
    'form-prenom':    'Prénom *',
    'form-prenom-ph': 'Jean',
    'form-nom':       'Nom *',
    'form-nom-ph':    'Dupont',
    'form-email-lbl': 'E-mail *',
    'form-tel-lbl':   'Téléphone',
    'form-tel-ph':    '+41 79 000 00 00',
    'form-sujet':     'Sujet *',
    'form-opt-0':     '— Choisissez —',
    'form-opt-1':     'Support & Dépannage',
    'form-opt-2':     'Maintenance & Contrat',
    'form-opt-3':     'Création de site web',
    'form-opt-4':     'Application web sur mesure',
    'form-opt-5':     'Application mobile',
    'form-opt-6':     'Autre',
    'form-msg-lbl':   'Message *',
    'form-msg-ph':    'Décrivez votre besoin...',
    'form-required':  '* champs obligatoire',
    'form-submit':    'Envoyer le message',
    'form-success':   '✓ Message envoyé ! Je vous réponds dans les 24–48h.',
    'vcard-btn':      'Ajouter au carnet d\'adresses',

    /* Footer */
    'footer-desc':    '<em>AbcInfo</em> — service en informatique<br>conseil, support et développement',
    'footer-svc':     'Services',
    'footer-svc-2':   'Développement Web',
    'footer-svc-3':   'Applications Mobiles',
    'footer-svc-4':   'Technologies',
    'footer-contact': 'Contact',
    'footer-form':    'Formulaire de contact',
    'footer-zone':    'Zone',
    'footer-zone-2':  'France voisine',
    'footer-zone-3':  'Support à distance',
  },

  en: {
    /* Logo */
    'logo-tagline': 'IT Services',

    /* Thème */
    'btn80': '80s Style',
    'btn90': '90s Style',

    /* Images */
    'img-caption': 'image generated by Google Nano Banana 2',

    /* CV */
    'cv-title':    'Graduate Engineer EPITA Paris',
    'cv-subtitle': 'Software Engineering &amp; Information Systems',

    /* Divers */
    'hero-title-aria': 'Your IT partner in Geneva',
    'cmd-title':   'Command Prompt',
    'ci-bartitle': 'abcinfo.ch — contact',
    'ancien-site': 'Former site',
    'form-bar':    '&gt;_ contact form',

    /* Navigation */
    'nav-support':  'Support',
    'nav-dev':      'Development',
    'nav-apropos':  'About',
    'nav-contact':  '&gt;_ Contact',

    /* Hero */
    'hero-badge':  'FOR 25 YEARS',
    'hero-sub':    'Support &amp; maintenance for individuals and businesses.<br>Custom web and mobile application development.',
    'hero-cta1':   '[ FREE QUOTE ]',
    'hero-cta2':   '&gt;_ DISCOVER',
    'hero-lines':  ['your IT partner', 'in Geneva', ''],

    /* Axes */
    'axes-label':       'Two areas of expertise, one single point of contact',
    'axes-support-p':   'Troubleshooting, preventive maintenance, consulting and training for your PC &amp; Mac equipment.',
    'axes-support-lnk': 'Learn more →',
    'axes-dev-p':       'Websites, business apps, mobile apps — custom-built for your needs.',
    'axes-dev-lnk':     'Learn more →',

    /* Support */
    'support-h2':   'Support &amp; Maintenance',
    'support-lead': 'Individuals, small businesses, liberal professions — AbcInfo is here to help you every day with your IT tools. Detailed free quotes, guaranteed services. We offer an efficient and affordable local service.',
    'support-s1':   '<strong>Troubleshooting</strong><br><em>AbcInfo</em> responds as fast as possible to repair and configure your IT systems (PC, Mac, Smartphone, Servers, etc).<br><span class="sl-sub">Free quote · Billed per task · Transparent rates</span>',
    'support-s2':   '<strong>Maintenance</strong><br><em>AbcInfo</em> offers customised plans to manage your daily IT needs.<br><span class="sl-sub">Interactive support · Guaranteed deadlines · Personalised follow-up</span>',
    'support-s3':   '<strong>Deployment</strong><br>New office, IT infrastructure restructuring, cloud migration: <em>AbcInfo</em> handles your entire project from needs assessment to full commissioning.<br><span class="sl-sub">Network cabling · Workstations · Servers · NAS · Printers · Telephony · Internet · Backups · Documentation</span>',
    'support-s4':   '<strong>Consulting</strong><br><em>AbcInfo</em> brings its expertise to help you make the right decisions.<br><span class="sl-sub">Needs assessment · Change management (hardware &amp; software) · ERP integration · Network administration · etc.</span>',
    'support-s5':   '<strong>Security</strong><br>Digital security: the key technical challenge for businesses. We help you set up effective procedures and raise staff awareness.',
    'support-s6':   '<strong>Artificial Intelligence</strong><br><em>AbcInfo</em> integrates the latest AI tools into your workflows for greater efficiency. Automation, document processing, business assistants — AI at the service of your activity, without jargon.<br><span class="sl-sub">Claude API · LLM · RAG · AI Agents · Automation · Custom integration</span>',
    'support-s7':   '<strong>Networks</strong><br>Network configuration (LAN, WAN, VLAN), Wi-Fi, firewall, NAT, static routing, Linux / Nginx.',
    'support-s8':   '<strong>Telephony</strong><br>Setup of virtual phone systems independent of Swiss operators.<br><span class="sl-sub">SIP telephony · Linux · Asterisk · FreePBX · Trunk setup · DID numbers · Voice QoS · Softphones</span>',
    'support-btn':  'Request support',

    /* Dev */
    'dev-h2':   'Development &amp; Applications',
    'dev-lead': '<em>AbcInfo</em> helps you design and build your digital projects: whether as a static or dynamic website, a custom business web app, or a smartphone app, we cover all phases of your project\'s development cycle.',
    'dev-s1':   '<strong>Design and functional specifications</strong><br>The success of a digital project lies in a deep understanding of needs and business processes. <em>AbcInfo</em> brings its expertise in this area.',
    'dev-s2':   '<strong>Development and coding</strong><br><em>AbcInfo</em> codes your projects in modern and sustainable technologies.',
    'dev-s3':   '<strong>Validation and integration tests</strong><br><em>AbcInfo</em> runs automated test batteries to functionally validate each developed tool. Integration tests are also performed when connecting to the client\'s information system.',
    'dev-s4':   '<strong>Delivery, integration and documentation</strong><br><em>AbcInfo</em> delivers the completed tool and integrates it into your information system. Complete documentation is provided, detailing data flows and associated processes.',
    'dev-s5':   '<strong>Warranty and follow-up</strong><br><em>AbcInfo</em> offers a 3-month full warranty on the delivered tool, covering hidden defects and technical bugs not detected upstream.',
    'dev-s6':   '<strong>Modern websites</strong><br>Showcase sites, e-commerce, responsive, fast and well-referenced.',
    'dev-s7':   '<strong>Business web applications</strong><br>Back-office, CRM, client portals, custom management tools.',
    'dev-s8':   '<strong>Mobile applications</strong><br>Native iOS &amp; Android apps (available on dedicated stores) or PWA (Progressive Web App) for an app experience without Google or Apple constraints.',
    'dev-s9':   '<strong>APIs &amp; integrations</strong><br>Connecting your tools to external data streams, automating business processes. (e.g.: Bloomberg financial data, Telegram messaging integration, IGB2B insurance data.)',
    'dev-s10':  '<strong>Artificial Intelligence</strong><br>AI integration into your workflows (Claude API, LLM, RAG).',
    'dev-s11':  '<strong>Administration &amp; maintenance</strong><br><em>AbcInfo</em> can manage your tool hosting and ensure ongoing maintenance.',
    'dev-btn':  'Discuss your project',

    /* Stats */
    'stat-1-label': 'years of experience',
    'stat-2-label': 'coverage area + remote',
    'stat-3-label': 'guaranteed response time *',
    'stat-3-note':  '* subject to contract',
    'stat-4-label': 'independent — free quote',

    /* À propos */
    'apropos-h2':   'Independent for 25 years.',
    'apropos-lead': 'One and only dependency: the satisfaction of our clients.',
    'apropos-p1':   '<strong>Always listening</strong><br><em>AbcInfo</em> assesses the urgency of each request and does everything to respond as quickly as possible — breakdowns, blockages, inability to work: responsiveness is our priority.',
    'apropos-p2':   '<strong>No reseller partnerships</strong><br>Over the years, <em>AbcInfo</em> has not entered into any commercial partnership with any brand (Apple, Microsoft, Swisscom…). Our choices are driven by technical and actual client needs.',
    'apropos-p3':   '<strong>Personal relationship</strong><br>You speak directly to the person doing the work — not a salesperson, not a project manager.',
    'apropos-p4':   '<strong>Quality of service</strong><br><em>AbcInfo</em> has been supporting many of its clients for years, some for over 20 years: a system that works!',

    /* Tech */
    'tech-label': 'Technologies',
    'tech-title': 'Modern stack, tailored choices',

    /* Contact */
    'contact-title':  'Let\'s talk about your projects',
    'ci-loc':         '# location',
    'ci-tel':         '# phone',
    'ci-email':       '# e-mail',
    'ci-dispo':       '# availability',
    'ci-dispo-1':     'Mon–Fri 8am–6pm',
    'ci-dispo-2':     'Emergencies by arrangement',
    'ci-zone':        '# service area',
    'ci-zone-1':      'Geneva · Vaud · Neighboring France',
    'ci-zone-2':      'Remote support (anywhere)',
    'form-societe':   'Company',
    'form-societe-ph':'Your company name',
    'form-prenom':    'First name *',
    'form-prenom-ph': 'John',
    'form-nom':       'Last name *',
    'form-nom-ph':    'Smith',
    'form-email-lbl': 'E-mail *',
    'form-tel-lbl':   'Phone',
    'form-tel-ph':    '+41 79 000 00 00',
    'form-sujet':     'Subject *',
    'form-opt-0':     '— Choose —',
    'form-opt-1':     'Support & Troubleshooting',
    'form-opt-2':     'Maintenance & Contract',
    'form-opt-3':     'Website creation',
    'form-opt-4':     'Custom web application',
    'form-opt-5':     'Mobile application',
    'form-opt-6':     'Other',
    'form-msg-lbl':   'Message *',
    'form-msg-ph':    'Describe your need...',
    'form-required':  '* required fields',
    'form-submit':    'Send message',
    'form-success':   '✓ Message sent! I\'ll reply within 24–48h.',
    'vcard-btn':      'Add to contacts',

    /* Footer */
    'footer-desc':    '<em>AbcInfo</em> — IT services<br>consulting, support &amp; development',
    'footer-svc':     'Services',
    'footer-svc-2':   'Web Development',
    'footer-svc-3':   'Mobile Applications',
    'footer-svc-4':   'Technologies',
    'footer-contact': 'Contact',
    'footer-form':    'Contact form',
    'footer-zone':    'Area',
    'footer-zone-2':  'Neighboring France',
    'footer-zone-3':  'Remote support',
  }
};

let currentLang = localStorage.getItem('abcinfo-lang') || 'fr';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('abcinfo-lang', lang);

  const t = translations[lang];

  // Apply all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Apply placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Apply aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  // Hero typewriter — restart with correct lines
  restartTypewriter(t['hero-lines']);

  // Update lang buttons
  const btnFr = document.getElementById('btnFr');
  const btnEn = document.getElementById('btnEn');
  if (btnFr && btnEn) {
    const active = 'color:#ffffff;border-color:#ffffff;';
    const inactive = 'color:rgba(255,255,255,0.4);border-color:rgba(255,255,255,0.2);';
    btnFr.style.cssText = lang === 'fr' ? active : inactive;
    btnEn.style.cssText = lang === 'en' ? active : inactive;
  }
  const formLang = document.getElementById('formLang');
  if (formLang) formLang.value = lang;
}

function restartTypewriter(lines) {
  if (typeof window._restartTypewriter === 'function') window._restartTypewriter(lines);
}
