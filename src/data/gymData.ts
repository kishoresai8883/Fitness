import { Program, Trainer, Testimonial, ScheduleItem, MembershipPlan, TransformationStory } from '../types';

export const GYM_INFO = {
  name: 'GYM FITNESS',
  subName: 'FITNESS STUDIO',
  tagline: 'Transform Your Body. Master Your Mind. Elevate Your Life.',
  phone: '+91 9876543210',
  phoneClean: '15553829000',
  whatsapp: '+91 9876543210',
  whatsappClean: '15553829000',
  whatsappMessage: 'Hi Gym/Fitness Studio! I would like to inquire about membership, programs, and claiming my 3-Day Free Trial Pass.',
  email: 'join@gym.com',
  address: 'Kukatpally, Hyderabad',
  googleMapsUrl: 'https://maps.google.com/?q=450+Athletic+Way+Metro+City',
  googleRating: 4.9,
  googleReviewCount: 482,
  hours: {
    weekdays: '5:00 AM – 11:00 PM',
    saturday: '6:00 AM – 9:00 PM',
    sunday: '7:00 AM – 8:00 PM'
  },
  amenities: [
    'Eleiko & Hammer Strength Barbells & Racks',
    'Custom Turf Sprint Track & Battle Rope Zone',
    'Infrared Sauna & Recovery Plunge Baths',
    'Luxury Locker Rooms with Rain Showers',
    'Smoothie & Protein Bar with Fresh Blends',
    'InBody 770 Clinical Body Composition Analyzer',
    'Free On-Site Covered Parking',
    'Complimentary Towel Service & High-Speed Wi-Fi'
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: 'heavy-strength',
    title: 'Power & Hypertrophy Lab',
    tagline: 'Build pure strength, sculpted muscle, and explosive power.',
    category: 'strength',
    description: 'Structured progressive overload training using Olympic platforms, Hammer Strength machines, and power racks.',
    fullDescription: 'Designed for men and women wanting to gain lean muscle, improve bone density, and increase strength safely under expert guidance. Every workout follows periodized training blocks to ensure continuous gains without plateauing.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800',
    intensity: 'High',
    duration: '60 Mins',
    caloriesBurned: '450 - 650 kcal',
    suitableFor: ['Beginners wanting proper barbell form', 'Intermediate lifters wanting hypertrophy', 'Athletes breaking through plateaus'],
    keyBenefits: ['Increased lean muscle mass', 'Enhanced metabolic rate', 'Stronger joints & bone density', 'Personalized lift tracking'],
    scheduleHighlights: 'Mon, Wed, Fri @ 6:00 AM, 12:00 PM, 6:00 PM'
  },
  {
    id: 'hiit-metcon',
    title: 'MetCon Burn & Conditioning',
    tagline: 'Torches calories, builds cardiovascular stamina, and ignites energy.',
    category: 'hiit',
    description: 'High-energy group intervals combining kettlebells, ski-ergs, rower sprints, and plyometrics for ultimate fat burn.',
    fullDescription: 'Our flagship heart-pounding class engineered to boost metabolism for up to 36 hours post-workout. Heart-rate monitored with real-time zone feedback so you train at your optimal threshold.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    intensity: 'Extreme',
    duration: '45 Mins',
    caloriesBurned: '600 - 850 kcal',
    suitableFor: ['Fat loss seekers', 'Endurance athletes', 'Busy professionals needing fast results'],
    keyBenefits: ['Maximum calorie expenditure', 'Improved VO2 max & stamina', 'Afterburn effect (EPOC)', 'Uplifting team atmosphere'],
    scheduleHighlights: 'Daily @ 7:00 AM, 5:30 PM & 6:30 PM'
  },
  {
    id: 'elite-1on1',
    title: '1-on-1 Elite Personal Coaching',
    tagline: 'Tailored 100% to your body, goals, schedule, and lifestyle.',
    category: 'coaching',
    description: 'Bespoke fitness programming, custom nutrition plans, daily accountability, and private coaching sessions.',
    fullDescription: 'Work directly with a master trainer who conducts InBody 3D body scans, movement screens, and crafts a bespoke roadmap. Includes custom meal guides, supplement protocols, and weekly check-ins.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    intensity: 'High',
    duration: '60 Mins',
    caloriesBurned: '500 - 700 kcal',
    suitableFor: ['Busy executives & parents', 'Injury recovery & postural correction', 'Fast-track body transformations'],
    keyBenefits: ['100% personalized workouts', 'Dedicated coach accountability', 'Custom macro & meal guidance', 'Accelerated results'],
    scheduleHighlights: 'By Appointment (Flexible 5:30 AM - 9:00 PM)'
  },
  {
    id: 'athletic-turf',
    title: 'Functional Turf & Agility',
    tagline: 'Move faster, jump higher, and build athletic endurance.',
    category: 'boxing',
    description: 'Sprint mechanics, battle ropes, sled pushes, and multi-directional drills on our 30-meter indoor turf track.',
    fullDescription: 'Train like a professional athlete regardless of your starting fitness level. Unlocks functional core stability, multi-planar movement, and explosive power that transfers to daily life.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800',
    intensity: 'High',
    duration: '50 Mins',
    caloriesBurned: '500 - 750 kcal',
    suitableFor: ['Recreational athletes', 'Functional fitness enthusiasts', 'Core & balance strengthening'],
    keyBenefits: ['Explosive agility & speed', 'Core resilience & balance', 'Lower risk of daily injuries', 'Full body athletic synergy'],
    scheduleHighlights: 'Tue, Thu @ 6:30 AM & 6:00 PM, Sat @ 9:00 AM'
  },
  {
    id: 'mobility-recovery',
    title: 'Mobility, Flow & Infrared Recovery',
    tagline: 'Decompress joints, relieve soreness, and restore movement flexibility.',
    category: 'mobility',
    description: 'Targeted myofascial release, dynamic yoga flow, active hip/spine opening, followed by infrared sauna sessions.',
    fullDescription: 'Essential for hard training lifters and desk workers alike. Fix tight hip flexors, rounded shoulders, and lower back stiffness while calming the nervous system for deeper restorative sleep.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800',
    intensity: 'Moderate',
    duration: '50 Mins',
    caloriesBurned: '200 - 350 kcal',
    suitableFor: ['Anyone experiencing joint tightness', 'Active recovery days', 'Stress relief & postural health'],
    keyBenefits: ['Painless joint motion range', 'Faster muscle repair', 'Reduced cortisol & stress', 'Improved posture'],
    scheduleHighlights: 'Mon, Wed, Sun @ 8:00 AM & 7:00 PM'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'marcus-vance',
    name: 'Sandeep',
    role: 'Head Strength Coach & Founder',
    certifications: ['CSCS Certified Strength & Conditioning Specialist', 'USA Weightlifting Level 2', 'Precision Nutrition L2'],
    specialties: ['Powerlifting & Hypertrophy', 'Body Recomposition', 'Athletic Development'],
    bio: '12+ years coaching over 1,500 clients from complete beginners to competitive powerlifters.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=400',
    yearsExperience: 12
  },
  {
    id: 'sarah-jenkins',
    name: 'Sruthi Reddy',
    role: 'Head of HIIT & Functional Metabolic Conditioning',
    certifications: ['ACE Certified Personal Trainer', 'CrossFit L2', 'Heart Rate Zone Specialist'],
    specialties: ['Fat Loss Conditioning', 'High Energy Group Fitness', 'Post-Partum Fitness'],
    bio: 'Passionate about helping women and men build unstoppable mental grit and explosive cardiovascular endurance.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=400',
    yearsExperience: 8
  },
  {
    id: 'david-ruiz',
    name: 'Roji Fernandez',
    role: 'Mobility & Injury Rehabilitation Specialist',
    certifications: ['Doctor of Physical Therapy (DPT)', 'NASM Corrective Exercise Specialist (CES)'],
    specialties: ['Lower Back & Shoulder Rehab', 'Spinal Mobility', 'Postural Alignment'],
    bio: 'Dedicated to helping lifters train pain-free and helping desk workers rebuild dynamic spinal resilience.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    yearsExperience: 10
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Murali Krishna',
    role: 'Software Architect & Father of 2',
    program: '1-on-1 Elite Coaching + MetCon',
    quote: 'Joining Gym changed everything. I dropped 28 lbs in 4 months without feeling starved. The coaches correct your form on every set, and the atmosphere makes you excited to wake up at 6 AM.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    resultMetric: 'Dropped 28 lbs & Lost 10% Body Fat',
    durationWithUs: 'Member for 8 Months'
  },
  {
    id: 'test-2',
    name: 'Priyanka Reddy',
    role: 'Marketing Director',
    program: 'Power & Hypertrophy Lab',
    quote: 'I used to be intimidated by weight rooms. Gym took me from zero experience to deadlifting 225 lbs with flawless technique. It is hands down the cleanest, most welcoming gym in Metro.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    resultMetric: 'Gained 7 lbs Lean Muscle, Squat +110 lbs',
    durationWithUs: 'Member for 1 Year'
  },
  {
    id: 'test-3',
    name: 'Ravi Kumar',
    role: 'Business Owners',
    program: 'MetCon Burn & Mobility Flow',
    quote: 'My wife and I workout together every morning. The community support is incredible. You do not just get equipment—you get a brotherhood and sisterhood that holds you accountable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    resultMetric: 'Combined 45 lbs Fat Lost & Energy Doubled',
    durationWithUs: 'Members for 6 Months'
  }
];

export const TRANSFORMATION_STORIES: TransformationStory[] = [
  {
    id: 'trans-1',
    name: 'Venkat Naidu',
    age: 34,
    goal: 'Weight Loss & Muscle Recomposition',
    achievement: '-32 lbs Fat, +6 lbs Lean Muscle',
    timeframe: '16 Weeks',
    beforeImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
    afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400',
    quote: 'I tried 3 different commercial gyms before finding Apex. The tailored guidance made all the difference.',
    trainer: 'Coach Marcus'
  },
  {
    id: 'trans-2',
    name: 'Jessica',
    age: 29,
    goal: 'Core Strength & Athletic Endurance',
    achievement: 'Dropped 4 Dress Sizes, Completed First Marathon',
    timeframe: '24 Weeks',
    beforeImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400',
    afterImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400',
    quote: 'The group energy keeps me coming back 5 days a week. My energy levels are at an all-time high!',
    trainer: 'Coach Sarah'
  }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  // Monday
  { id: 's1', time: '06:00 AM', classTitle: 'Power & Hypertrophy Lab', instructor: 'Marcus Vance', category: 'strength', room: 'Iron Zone 1', day: 'Mon', spotsLeft: 3 },
  { id: 's2', time: '07:15 AM', classTitle: 'MetCon Burn & HIIT', instructor: 'Sarah Jenkins', category: 'hiit', room: 'Turf Arena', day: 'Mon', spotsLeft: 2 },
  { id: 's3', time: '12:00 PM', classTitle: 'Lunchtime Express Power', instructor: 'Marcus Vance', category: 'strength', room: 'Iron Zone 2', day: 'Mon', spotsLeft: 5 },
  { id: 's4', time: '05:30 PM', classTitle: 'MetCon Burn & Conditioning', instructor: 'Sarah Jenkins', category: 'hiit', room: 'Turf Arena', day: 'Mon', spotsLeft: 1 },
  { id: 's5', time: '07:00 PM', classTitle: 'Mobility & Decompression', instructor: 'David Ruiz', category: 'mobility', room: 'Recovery Studio', day: 'Mon', spotsLeft: 6 },

  // Tuesday
  { id: 's6', time: '06:30 AM', classTitle: 'Functional Turf & Agility', instructor: 'Sarah Jenkins', category: 'boxing', room: 'Turf Arena', day: 'Tue', spotsLeft: 4 },
  { id: 's7', time: '08:00 AM', classTitle: 'Powerlifting Fundamentals', instructor: 'Marcus Vance', category: 'strength', room: 'Iron Zone 1', day: 'Tue', spotsLeft: 4 },
  { id: 's8', time: '05:30 PM', classTitle: 'MetCon Burn & HIIT', instructor: 'Sarah Jenkins', category: 'hiit', room: 'Turf Arena', day: 'Tue', spotsLeft: 2 },
  { id: 's9', time: '06:45 PM', classTitle: 'Spine & Joint Mobility Flow', instructor: 'David Ruiz', category: 'mobility', room: 'Recovery Studio', day: 'Tue', spotsLeft: 8 },

  // Wednesday
  { id: 's10', time: '06:00 AM', classTitle: 'Power & Hypertrophy Lab', instructor: 'Marcus Vance', category: 'strength', room: 'Iron Zone 1', day: 'Wed', spotsLeft: 2 },
  { id: 's11', time: '07:15 AM', classTitle: 'MetCon Burn & Conditioning', instructor: 'Sarah Jenkins', category: 'hiit', room: 'Turf Arena', day: 'Wed', spotsLeft: 4 },
  { id: 's12', time: '05:30 PM', classTitle: 'Functional Turf & Agility', instructor: 'Sarah Jenkins', category: 'boxing', room: 'Turf Arena', day: 'Wed', spotsLeft: 3 },
  { id: 's13', time: '07:00 PM', classTitle: 'Infrared Stretch & Sauna Flow', instructor: 'David Ruiz', category: 'mobility', room: 'Recovery Studio', day: 'Wed', spotsLeft: 5 },

  // Thursday
  { id: 's14', time: '06:30 AM', classTitle: 'Functional Turf & Agility', instructor: 'Sarah Jenkins', category: 'boxing', room: 'Turf Arena', day: 'Thu', spotsLeft: 3 },
  { id: 's15', time: '12:00 PM', classTitle: 'Lunchtime Express Power', instructor: 'Marcus Vance', category: 'strength', room: 'Iron Zone 2', day: 'Thu', spotsLeft: 6 },
  { id: 's16', time: '06:00 PM', classTitle: 'MetCon Extreme Burn', instructor: 'Sarah Jenkins', category: 'hiit', room: 'Turf Arena', day: 'Thu', spotsLeft: 1 },

  // Friday
  { id: 's17', time: '06:00 AM', classTitle: 'Power & Hypertrophy Lab', instructor: 'Marcus Vance', category: 'strength', room: 'Iron Zone 1', day: 'Fri', spotsLeft: 4 },
  { id: 's18', time: '07:15 AM', classTitle: 'MetCon Burn & HIIT', instructor: 'Sarah Jenkins', category: 'hiit', room: 'Turf Arena', day: 'Fri', spotsLeft: 5 },
  { id: 's19', time: '05:30 PM', classTitle: 'Friday Night Shred & Beats', instructor: 'Sarah Jenkins', category: 'hiit', room: 'Main Floor', day: 'Fri', spotsLeft: 2 },

  // Saturday
  { id: 's20', time: '08:00 AM', classTitle: 'Weekend Heavy Lifting Clinic', instructor: 'Marcus Vance', category: 'strength', room: 'Iron Zone 1', day: 'Sat', spotsLeft: 4 },
  { id: 's21', time: '09:30 AM', classTitle: 'MetCon Saturday Team Battle', instructor: 'Sarah Jenkins', category: 'hiit', room: 'Turf Arena', day: 'Sat', spotsLeft: 2 },
  { id: 's22', time: '11:00 AM', classTitle: 'Mobility & Recovery Reset', instructor: 'David Ruiz', category: 'mobility', room: 'Recovery Studio', day: 'Sat', spotsLeft: 7 },

  // Sunday
  { id: 's23', time: '09:00 AM', classTitle: 'Sunday Sweat & Core', instructor: 'Sarah Jenkins', category: 'hiit', room: 'Turf Arena', day: 'Sun', spotsLeft: 5 },
  { id: 's24', time: '10:30 AM', classTitle: 'Full Body Mobility & Plunge', instructor: 'David Ruiz', category: 'mobility', room: 'Recovery Studio', day: 'Sun', spotsLeft: 8 }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'day-pass',
    name: '3-Day Free Trial',
    priceMonthly: 0,
    priceAnnualMonthly: 0,
    tagline: 'Experience Apex with zero commitment or payment.',
    features: [
      'Full Gym Floor & Eleiko Platforms',
      'Attend 2 Unlimited Group Classes',
      'InBody 3D Body Scan included',
      '1-on-1 Coach Consultation',
      'Locker room & Sauna access'
    ],
    ctaText: 'Claim Free 3-Day Pass'
  },
  {
    id: 'all-access',
    name: 'All-Access Club Membership',
    priceMonthly: 79,
    priceAnnualMonthly: 65,
    popular: true,
    tagline: 'Our most popular plan for consistent athletes.',
    features: [
      'Unlimited 24/7 Gym Floor Access',
      'Unlimited Group Classes (MetCon, Strength, Turf)',
      'Monthly InBody Progress Body Scans',
      'Infrared Sauna & Cold Recovery Plunge',
      'Complimentary Guest Pass (1 / Month)',
      'No Long-Term Lock-In Contract'
    ],
    ctaText: 'Join All-Access Membership'
  },
  {
    id: 'vip-coaching',
    name: 'VIP Elite Coaching Package',
    priceMonthly: 199,
    priceAnnualMonthly: 169,
    tagline: 'Accelerated results with dedicated 1-on-1 coaching.',
    features: [
      'Everything in All-Access Club Membership',
      '8 Private 1-on-1 Coaching Sessions / Mo',
      'Customized Nutrition & Macro Meal Protocol',
      '24/7 WhatsApp Direct Access to Your Coach',
      'Customized Mobility & Injury Prevention Plan',
      'Free Apex Performance Apparel & Shaker Pack'
    ],
    ctaText: 'Start VIP Elite Coaching'
  }
];

export const FAQS = [
  {
    question: 'How do I claim my 3-Day Free Trial Pass?',
    answer: 'Simply click any "Claim Free Pass" or "Book Trial" button on the site, fill out your name, phone number, and preferred time, and our team will instantly text/call you with your digital entry code.'
  },
  {
    question: 'Are there any hidden sign-up fees or long-term contracts?',
    answer: 'No hidden fees whatsoever. All our memberships operate on a transparent month-to-month basis with simple 30-day cancellation terms. We earn your membership every single month.'
  },
  {
    question: 'I am a beginner. Will I feel overwhelmed or lost?',
    answer: 'Not at all! Every single new member receives a complimentary 1-on-1 orientation and movement scan with a certified coach. Our group class instructors actively modify every exercise to suit your current fitness level.'
  },
  {
    question: 'What are your busiest hours and parking availability?',
    answer: 'Peak hours are 6:30 AM - 8:00 AM and 5:30 PM - 7:00 PM. We have a private 80-space covered parking garage directly attached to the club with 2 hours free validation.'
  },
  {
    question: 'What should I bring for my first visit?',
    answer: 'Bring a water bottle, comfortable athletic shoes, and workout clothing. We provide towels, lockable digital lockers, rain showers, and premium body care products.'
  }
];
