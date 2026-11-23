export const COMPANY_INFO = {
  name: 'VMPS Plumbing Services',
  shortName: 'VMPS',
  owner: 'Vishav Mohan',
  ownerRole: 'Founder / Owner & Technical Head',
  phoneDisplay: '+91 99157 25295',
  phoneHref: 'tel:+919915725295',
  whatsappNumber: '919915725295',
  whatsappHref: 'https://wa.me/919915725295',
  instagramHref: 'https://www.instagram.com/vmps.plumbing/',
  instagramHandle: '@vmps.plumbing',
  logoPath: '/assets/aistudio/image_a605b9fa.png',
  locations: ['Dera Bassi', 'Zirakpur', 'Mohali', 'Chandigarh'],
  regionSummary: 'Dera Bassi, Zirakpur, Mohali, Chandigarh & nearby Tricity areas',
};

export const IMAGES = {
  heroBathroom: '/src/assets/images/hero_plumbing_bathroom_1795452180698.jpg',
  kitchenPlumbing: '/src/assets/images/service_kitchen_plumbing_1795452180758.jpg',
  commercialWashroom: '/src/assets/images/service_commercial_washroom_1795452181428.jpg',
  pipeMaintenance: '/src/assets/images/service_pipe_maintenance_1795452181167.jpg',
  tankPump: '/src/assets/images/service_tank_pump_1795452181517.jpg',
};

export interface ServiceCategoryGroup {
  id: 'residential' | 'commercial' | 'repair';
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  items: {
    name: string;
    detail: string;
  }[];
}

export const HOME_SERVICE_CATEGORIES: ServiceCategoryGroup[] = [
  {
    id: 'residential',
    title: 'Residential Plumbing',
    summary:
      'Complete plumbing execution, sanitary installations, water supply lines, and renovations for homes, villas, and apartments.',
    image: IMAGES.heroBathroom,
    imageAlt: 'Modern residential bathroom plumbing and chrome mixer fittings',
    items: [
      {
        name: 'Complete Home Plumbing',
        detail: 'End-to-end internal water supply and drainage piping for new residences.',
      },
      {
        name: 'Bathroom Plumbing',
        detail: 'Concealed diverters, mixer lines, drainage slopes, and sanitary connections.',
      },
      {
        name: 'Kitchen Plumbing',
        detail: 'Sink traps, hot and cold water points, and utility outlet connections.',
      },
      {
        name: 'Water Supply Pipelines',
        detail: 'CPVC, PPR, and UPVC cold and hot water distribution layouts.',
      },
      {
        name: 'Drainage Systems',
        detail: 'Properly sloped floor traps, waste lines, and soil drainage piping.',
      },
      {
        name: 'Toilet Installation',
        detail: 'Wall-hung, floor-mounted, and concealed cistern toilet setup.',
      },
      {
        name: 'Washbasin Installation',
        detail: 'Countertop, pedestal, and under-counter basin and bottle-trap fitting.',
      },
      {
        name: 'Shower and Tap Fittings',
        detail: 'Overhead rain showers, hand showers, angle valves, and basin mixers.',
      },
      {
        name: 'Water Tank Installation',
        detail: 'Overhead and loft storage tanks with float valves and overflow lines.',
      },
      {
        name: 'Water Pump Installation',
        detail: 'Domestic booster pumps, motor connections, and non-return valves.',
      },
      {
        name: 'Pipe Leakage Detection',
        detail: 'Systematic inspection to locate concealed dampness and joint leaks.',
      },
      {
        name: 'Bathroom Renovation Plumbing',
        detail: 'Re-piping, pressure testing, and fixture upgrades during remodeling.',
      },
      {
        name: 'Kitchen Renovation Plumbing',
        detail: 'Relocating sink waste lines, RO water points, and dishwasher inlets.',
      },
      {
        name: 'Drain Cleaning',
        detail: 'Clearing blocked bathroom floor traps, kitchen sinks, and waste lines.',
      },
      {
        name: 'General Plumbing Repairs',
        detail: 'Prompt resolution for dripping taps, loose joints, and pressure drops.',
      },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Plumbing',
    summary:
      'Dependable plumbing installation and upkeep tailored for offices, retail showrooms, restaurants, cafes, and hospitality spaces.',
    image: IMAGES.commercialWashroom,
    imageAlt: 'Commercial office washroom with twin basins and chrome faucets',
    items: [
      {
        name: 'Office Plumbing',
        detail: 'Pantry lines, staff washrooms, and drinking water connections.',
      },
      {
        name: 'Shop Plumbing',
        detail: 'Compact utility plumbing, washbasins, and retail unit water lines.',
      },
      {
        name: 'Showroom Plumbing',
        detail: 'Clean customer washroom fittings and maintenance access layouts.',
      },
      {
        name: 'Restaurant Plumbing',
        detail: 'High-usage kitchen wash stations, grease-trap piping, and floor drains.',
      },
      {
        name: 'Cafe Plumbing',
        detail: 'Barista counter water inlets, filtration points, and sink drainage.',
      },
      {
        name: 'Hotel Maintenance Plumbing',
        detail: 'Scheduled checks and fixture repairs across guest washrooms.',
      },
      {
        name: 'Commercial Bathroom Installation',
        detail: 'Multi-cubicle sanitary ware, sensor faucets, and urinal flush systems.',
      },
      {
        name: 'Commercial Water Supply',
        detail: 'Main riser lines, manifold valves, and distribution balancing.',
      },
      {
        name: 'Commercial Drainage',
        detail: 'Heavy-duty waste pipes and inspection chamber connections.',
      },
      {
        name: 'Sanitary Fittings',
        detail: 'Durable commercial-grade taps, flush valves, and accessories.',
      },
      {
        name: 'Tank and Pump Maintenance',
        detail: 'Inspection of commercial storage tanks, valves, and booster pumps.',
      },
      {
        name: 'Commercial Pipeline Repairs',
        detail: 'Targeted joint replacement and leak isolation with minimal disruption.',
      },
    ],
  },
  {
    id: 'repair',
    title: 'Repair and Maintenance',
    summary:
      'Focused fault diagnosis, component replacement, and preventive servicing to keep water systems leak-free.',
    image: IMAGES.pipeMaintenance,
    imageAlt: 'Plumbing technician tightening a brass ball valve on water supply piping',
    items: [
      {
        name: 'Leakage Repairs',
        detail: 'Fixing exposed or concealed pipe leaks, elbow cracks, and valve drips.',
      },
      {
        name: 'Blocked Drain Cleaning',
        detail: 'Unclogging slow drains, sink traps, and main outlet lines.',
      },
      {
        name: 'Tap and Mixer Repairs',
        detail: 'Cartridge replacement, spindle servicing, and mixer alignment.',
      },
      {
        name: 'Flush Tank Repairs',
        detail: 'Siphon, inlet valve, and concealed cistern mechanism servicing.',
      },
      {
        name: 'Water Tank Maintenance',
        detail: 'Checking tank outlets, float switches, lids, and overflow connections.',
      },
      {
        name: 'Pump Maintenance',
        detail: 'Inspecting suction lines, foot valves, pressure gauges, and seals.',
      },
      {
        name: 'Pipeline Inspection',
        detail: 'Routine pressure and joint checks across exposed plumbing runs.',
      },
      {
        name: 'Emergency Plumbing Assistance',
        detail: 'Urgent isolation and repair support for active bursts and severe leaks.',
      },
    ],
  },
];

export const WHY_CHOOSE_VMPS = [
  {
    index: '01',
    title: 'Owner-Led Technical Supervision',
    description:
      'Every requirement is coordinated under direct supervision by founder Vishav Mohan for consistent accountability on site.',
  },
  {
    index: '02',
    title: 'Residential & Commercial Solutions',
    description:
      'Equipped to handle single-room renovations, complete home plumbing, retail shops, offices, and hospitality spaces.',
  },
  {
    index: '03',
    title: 'Clear Quotations',
    description:
      'Transparent, site-based scope breakdowns discussed upfront so you know the exact work planned before execution begins.',
  },
  {
    index: '04',
    title: 'Thorough Site Inspection',
    description:
      'On-site measurement of pipe routes, water pressure, and drainage levels before recommending materials or fittings.',
  },
  {
    index: '05',
    title: 'Quality-Focused Workmanship',
    description:
      'Clean pipe alignment, proper joint sealing, and pressure testing to reduce future seepage and maintenance issues.',
  },
  {
    index: '06',
    title: 'Dedicated Customer Support',
    description:
      'Direct communication via phone and WhatsApp for straightforward scheduling, follow-up checks, and AMC visits.',
  },
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Customer Enquiry',
    description: 'Reach out via phone call, WhatsApp, or our online quotation form.',
  },
  {
    step: '02',
    title: 'Requirement Discussion',
    description: 'Discuss the issue, property type, fittings, and preferred timeline.',
  },
  {
    step: '03',
    title: 'Site Inspection',
    description: 'On-site visit across Tricity to inspect existing lines and site conditions.',
  },
  {
    step: '04',
    title: 'Quotation and Approval',
    description: 'Receive a clear site-specific scope and quotation for your approval.',
  },
  {
    step: '05',
    title: 'Plumbing Work Execution',
    description: 'Neat installation or repair carried out with technical supervision.',
  },
  {
    step: '06',
    title: 'Testing and Handover',
    description: 'Flow, drainage slope, and leak-free pressure verification prior to handover.',
  },
];

export interface ServicePackage {
  id: string;
  name: string;
  tag: string;
  basis: string;
  features: string[];
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'basic-repair',
    name: 'Basic Plumbing Repair',
    tag: 'Quick Fault Resolution',
    basis: 'Inspection-based quotation',
    features: [
      'Tap repairs and cartridge checks',
      'Small leakage repairs and joint sealing',
      'Basic angle valve and connector fittings',
      'Minor domestic plumbing maintenance',
    ],
  },
  {
    id: 'bathroom-install',
    name: 'Bathroom Installation',
    tag: 'Renovation & New Setup',
    basis: 'Site-based quotation',
    features: [
      'Concealed and exposed bathroom plumbing',
      'Sanitary fittings and toilet mounting',
      'Washbasin and vanity trap installation',
      'Shower, diverter, and tap connections',
    ],
  },
  {
    id: 'complete-home',
    name: 'Complete Home Plumbing',
    tag: 'Full Residence Scope',
    basis: 'Site inspection quotation',
    features: [
      'Main and internal water supply connections',
      'All bathroom plumbing and sanitary points',
      'Kitchen plumbing and utility connections',
      'Complete soil and waste drainage lines',
    ],
  },
  {
    id: 'kitchen-plumbing',
    name: 'Kitchen Plumbing',
    tag: 'Modular & Utility Kitchens',
    basis: 'Site-based quotation',
    features: [
      'Kitchen sink and bottle-trap installation',
      'Hot, cold, and RO water connections',
      'Pillar and pull-out mixer tap installation',
      'Drain and appliance outlet connections',
    ],
  },
  {
    id: 'commercial-plumbing',
    name: 'Commercial Plumbing',
    tag: 'Offices, Shops & Cafes',
    basis: 'Custom site quotation',
    features: [
      'Office, shop, and showroom plumbing',
      'Commercial washrooms and urinal setups',
      'Water supply risers and drainage lines',
      'Pantry and kitchen plumbing support',
    ],
  },
  {
    id: 'amc-maintenance',
    name: 'AMC Maintenance',
    tag: 'Scheduled Upkeep',
    basis: 'Site-specific AMC proposal',
    features: [
      'Scheduled plumbing inspections',
      'Routine valve, tap, and fixture maintenance',
      'Water tank and pump inspection',
      'Drainage and visible leakage checks',
    ],
  },
];

export interface SampleGalleryItem {
  id: string;
  title: string;
  category: string;
  label: string;
  caption: string;
  image: string;
  alt: string;
}

/**
 * Easy-to-update gallery configuration.
 * Replace image paths with actual VMPS site photography as it becomes available.
 */
export const SAMPLE_GALLERY: SampleGalleryItem[] = [
  {
    id: 'sample-bathroom',
    title: 'Modern Bathroom Fixture & Concealed Piping',
    category: 'Residential Bathroom',
    label: 'Illustrative Work · Sample Image',
    caption:
      'Example layout showing clean wall-mounted mixer fittings, rain shower positioning, and ceramic vanity installation.',
    image: IMAGES.heroBathroom,
    alt: 'Illustrative sample image of modern bathroom plumbing and sanitary fixtures',
  },
  {
    id: 'sample-kitchen',
    title: 'Modular Kitchen Sink & Under-Counter Connections',
    category: 'Kitchen Plumbing',
    label: 'Illustrative Work · Sample Image',
    caption:
      'Example setup of stainless sink plumbing, hot/cold supply lines, and compact trap alignment inside cabinetry.',
    image: IMAGES.kitchenPlumbing,
    alt: 'Illustrative sample image of modular kitchen sink and under-counter plumbing lines',
  },
  {
    id: 'sample-commercial',
    title: 'Commercial Washroom & Multi-Basin Setup',
    category: 'Commercial Plumbing',
    label: 'Illustrative Work · Sample Image',
    caption:
      'Example washroom installation suited for offices, restaurants, showrooms, and commercial properties.',
    image: IMAGES.commercialWashroom,
    alt: 'Illustrative sample image of commercial washroom double washbasin plumbing',
  },
  {
    id: 'sample-manifold',
    title: 'Supply Manifold & Brass Valve Workmanship',
    category: 'Pipeline & Repair',
    label: 'Illustrative Work · Sample Image',
    caption:
      'Example of tidy pipe spacing, isolation ball valves, and secure mechanical joints for reliable water control.',
    image: IMAGES.pipeMaintenance,
    alt: 'Illustrative sample image of technician installing brass valve on CPVC and copper manifold',
  },
  {
    id: 'sample-tank-pump',
    title: 'Overhead Water Tank & Booster Pump Layout',
    category: 'Tank & Pump Work',
    label: 'Illustrative Work · Sample Image',
    caption:
      'Example terrace water tank connection featuring check valves, pressure gauge, and domestic booster pump.',
    image: IMAGES.tankPump,
    alt: 'Illustrative sample image of rooftop overhead water tank and pressure booster pump setup',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What plumbing services does VMPS offer?',
    answer:
      'VMPS Plumbing Services provides residential and commercial plumbing, including complete home plumbing, bathroom and kitchen installations, water supply pipelines, drainage systems, sanitary fittings, tank and pump work, leakage repairs, and Annual Maintenance Contracts (AMC).',
  },
  {
    question: 'Does VMPS provide residential plumbing?',
    answer:
      'Yes. We serve homeowners, villa owners, and apartment residents for new plumbing installations, bathroom and kitchen renovations, pipe leakage detection, and day-to-day plumbing repairs.',
  },
  {
    question: 'Does VMPS handle commercial plumbing?',
    answer:
      'Yes. We support shops, offices, showrooms, restaurants, cafes, hotels, and commercial properties with washroom installations, pantry plumbing, water supply connections, drainage upkeep, and maintenance support.',
  },
  {
    question: 'Can I request a bathroom installation quotation?',
    answer:
      'Yes. You can use our Get a Quote page or message us on WhatsApp at +91 99157 25295 to schedule a site inspection and receive a quotation tailored to your bathroom layout and fittings.',
  },
  {
    question: 'Does VMPS provide kitchen plumbing?',
    answer:
      'Yes. We handle kitchen sink installation, hot and cold mixer tap connections, RO water inlet points, trap and waste line alignment, and kitchen renovation re-piping.',
  },
  {
    question: 'Does VMPS provide leakage repair?',
    answer:
      'Yes. We inspect and repair leaking pipes, dripping taps, faulty mixers, flush tank cisterns, and dampness caused by loose joints or damaged lines.',
  },
  {
    question: 'Does VMPS offer monthly maintenance?',
    answer:
      'Yes. We offer monthly, quarterly, and annual plumbing maintenance plans (AMC) tailored to residential societies, commercial buildings, offices, shops, and hospitality venues.',
  },
  {
    question: 'How can I book a site inspection?',
    answer:
      'You can request a site inspection by calling +91 99157 25295, sending your location and details on WhatsApp, or submitting the Get a Quote form with your preferred inspection date.',
  },
  {
    question: 'Which areas does VMPS serve?',
    answer:
      'We serve Dera Bassi, Zirakpur, Mohali, Chandigarh, and nearby areas across the Tricity region.',
  },
  {
    question: 'How can I contact VMPS?',
    answer:
      'You can call us directly at +91 99157 25295, chat with us on WhatsApp using https://wa.me/919915725295, follow @vmps.plumbing on Instagram, or submit an enquiry on our Contact Us page.',
  },
];

export const DETAILED_SERVICES_PAGE_SECTIONS = [
  {
    code: 'A',
    id: 'residential-plumbing',
    title: 'Residential Plumbing',
    image: IMAGES.heroBathroom,
    imageAlt: 'Residential bathroom plumbing and sanitary installation',
    intro:
      'Thoughtful, leak-free plumbing execution for independent houses, villas, and residential apartments across Dera Bassi, Zirakpur, Mohali, and Chandigarh.',
    services: [
      'Complete Home Plumbing & New Piping',
      'Bathroom & Toilet Plumbing',
      'Kitchen & Utility Area Plumbing',
      'CPVC / UPVC / PPR Water Supply Pipelines',
      'Drainage & Soil Waste Lines',
      'Bathroom & Kitchen Renovation Plumbing',
    ],
    benefits: [
      'Correct pipe sizing for steady water pressure',
      'Proper drainage slopes to prevent water logging and odour',
      'Clean execution supervised by founder Vishav Mohan',
    ],
  },
  {
    code: 'B',
    id: 'commercial-plumbing',
    title: 'Commercial Plumbing',
    image: IMAGES.commercialWashroom,
    imageAlt: 'Commercial washroom and multi-basin plumbing setup',
    intro:
      'Practical plumbing installation, fixture upgrades, and scheduled upkeep built for daily commercial footfall in offices, retail shops, restaurants, and hotels.',
    services: [
      'Office & Corporate Pantry Plumbing',
      'Shop & Retail Showroom Washrooms',
      'Restaurant & Cafe Kitchen Sink & Drain Lines',
      'Hotel Guest Bathroom Maintenance Plumbing',
      'Commercial Water Supply & Riser Lines',
      'Commercial Drainage & Inspection Points',
    ],
    benefits: [
      'Planned work schedules that respect business hours',
      'Accessible isolation valves for easier future servicing',
      'Consistent maintenance support for high-usage washrooms',
    ],
  },
  {
    code: 'C',
    id: 'installation-services',
    title: 'Installation Services',
    image: IMAGES.kitchenPlumbing,
    imageAlt: 'Kitchen sink, tap, and under-counter water line installation',
    intro:
      'Accurate fitting and alignment of sanitary ware, kitchen sinks, overhead water tanks, and pressure booster pumps without damaging tiles or cabinetry.',
    services: [
      'Toilet (Wall-Hung, Floor-Mounted & Concealed Cistern) Installation',
      'Washbasin, Vanity & Bottle-Trap Installation',
      'Shower Panel, Rain Shower & Concealed Diverter Fittings',
      'Kitchen Sink, Mixer Tap & Water Purifier Points',
      'Overhead Water Tank Installation & Float Valves',
      'Domestic Water Pump & Pressure Booster Setup',
    ],
    benefits: [
      'Precision levelling and watertight sealing on fixtures',
      'Compatible fittings tested under working pressure',
      'Neat pipe routing inside cabinets and terrace spaces',
    ],
  },
  {
    code: 'D',
    id: 'repair-and-maintenance',
    title: 'Repair and Maintenance',
    image: IMAGES.pipeMaintenance,
    imageAlt: 'Technician tightening brass valve on residential supply manifold',
    intro:
      'Methodical fault finding and lasting repairs for leaks, blockages, low pressure, and worn-out plumbing fittings across residential and commercial properties.',
    services: [
      'Concealed & Exposed Pipe Leakage Repairs',
      'Blocked Floor Drain & Kitchen Sink Cleaning',
      'Tap, Mixer Cartridge & Angle Valve Repairs',
      'Flush Tank & Concealed Cistern Servicing',
      'Water Tank Outlet & Pump Valve Repairs',
      'Pipeline Pressure & Joint Inspection',
    ],
    benefits: [
      'Focus on fixing root causes rather than temporary patches',
      'Honest assessment of repair versus replacement options',
      'Direct communication and clear site-based estimates',
    ],
  },
  {
    code: 'E',
    id: 'amc-services',
    title: 'AMC Services',
    image: IMAGES.tankPump,
    imageAlt: 'Overhead water tank and booster pump system maintained under AMC',
    intro:
      'Structured Monthly, Quarterly, and Annual Maintenance Contracts designed to keep residential societies, offices, shops, and hospitality venues running smoothly.',
    services: [
      'Scheduled Preventive Plumbing Inspections',
      'Overhead & Underground Water Tank Checks',
      'Booster Pump, Valve & Pressure Gauge Checks',
      'Visible Leakage & Joint Condition Audits',
      'Drainage Flow & Trap Clearing Checks',
      'Washroom Fixture & Flush Mechanism Upkeep',
    ],
    benefits: [
      'Catch minor drips and worn seals before major seepage occurs',
      'Custom site-specific AMC scopes tailored to your property size',
      'Single point of contact for recurring facility plumbing needs',
    ],
  },
];

export const AMC_SCOPE_ITEMS = [
  {
    title: 'Plumbing Inspections',
    description: 'Scheduled walkthroughs of exposed supply lines, angle valves, traps, and sanitary joints.',
  },
  {
    title: 'Water Tank Checks',
    description: 'Inspection of overhead tank fittings, float valves, overflow pipes, lids, and outlet unions.',
  },
  {
    title: 'Pump Checks',
    description: 'Operational checks on booster pumps, suction lines, check valves, and pressure gauges.',
  },
  {
    title: 'Leakage Inspections',
    description: 'Early identification of dripping taps, cistern overflows, and minor dampness near wet areas.',
  },
  {
    title: 'Drainage Checks',
    description: 'Routine verification of floor traps, balcony drains, sink outlets, and waste flow.',
  },
  {
    title: 'Routine Maintenance',
    description: 'Minor tightening, washer/cartridge servicing, and preventive upkeep agreed in your AMC scope.',
  },
  {
    title: 'Commercial Property Support',
    description: 'Consistent plumbing maintenance plans tailored for offices, shops, cafes, restaurants, and societies.',
  },
];
