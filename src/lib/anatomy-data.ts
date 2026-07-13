/**
 * anatomy-data.ts
 * --------------------------------------------------------------------------
 * Knowledge backbone for the 3D Human Anatomy Platform.
 *
 * All content is medically reviewed for educational accuracy at a
 * pre-clinical / undergraduate medical-school level. It is intended for
 * learning and reference only and is NOT a substitute for professional
 * medical advice.
 *
 * Pure data module — no React, no runtime imports beyond TypeScript types.
 * --------------------------------------------------------------------------
 */

// ============================================================================
// CORE INTERFACES
// ============================================================================

export interface Organ {
  id: string;
  name: string;
  latinName: string;
  weight?: string;
  overview: string;
  location: string;
  function: string;
  bloodSupply: string;
  nerveSupply: string;
  clinicalImportance: string;
  commonDiseases: string[];
  // ---- Optional medical-grade enrichment (Task 2c) ----
  relationships?: string;       // spatial/functional relationships to neighboring structures (1-2 sentences)
  imaging?: string;             // how it appears on imaging (X-ray/CT/MRI/US) — 1 sentence
  clinicalNote?: string;        // a surgical or clinical pearl (1 sentence)
  histology?: string;           // tissue-level description (1 sentence)
  quizRef?: number;             // index (0-based) into quizQuestions that relates to this organ, or undefined
}

export interface BodySystem {
  id: string;
  name: string;
  latinName: string;
  icon: string;
  color: string;
  tagline: string;
  description: string;
  organs: Organ[];
  funFact: string;
  stats: { label: string; value: string }[];
  // ---- Optional medical-grade enrichment (Task 2c) ----
  layers?: string[];            // dissection layer names for this system
  imagingModality?: string;     // preferred imaging modality, e.g. "CT", "MRI", "Ultrasound", "X-ray"
}

export interface Disease {
  id: string;
  name: string;
  systemId: string;
  cause: string;
  symptoms: string[];
  diagnosis: string;
  treatment: string;
  prognosis: string;
}

export interface MicroscopeLevel {
  id: string;
  name: string;
  scale: string;
  description: string;
  color: string;
}

export interface EducationMode {
  id: string;
  name: string;
  icon: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface ViewportMode {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface DissectionLayer {
  id: string;          // "skin" | "fascia" | "muscle" | "organs" | "skeleton"
  name: string;        // display name
  depth: number;       // 0 (outermost) .. 4 (innermost)
  description: string; // what this layer contains anatomically
  color: string;       // realistic tissue hex color
  opacity: number;     // default opacity 0..1
}

export interface AnatomicalLandmark {
  id: string;
  name: string;
  systemId: string;
  position: [number, number, number];
}

// ============================================================================
// BODY SYSTEMS
// ============================================================================

export const bodySystems: BodySystem[] = [
  // --------------------------------------------------------------------------
  {
    id: "skeletal",
    name: "Skeletal System",
    latinName: "Systema Skeletale",
    icon: "Bone",
    color: "#e8e0d0",
    tagline: "The living scaffold that carries us through life.",
    description:
      "The skeletal system forms the rigid internal framework of the human body, composed of 206 bones at adulthood along with cartilage, ligaments, and joints. Beyond mechanical support, it protects vital organs, anchors muscles for movement, stores minerals, and houses the red bone marrow where blood cells are produced.",
    funFact:
      "Babies are born with about 270 cartilaginous bones that fuse into 206 — and the smallest, the stapes in the middle ear, is barely 3 mm long.",
    stats: [
      { label: "Bones", value: "206" },
      { label: "Joints", value: "360+" },
      { label: "% Body Weight", value: "~15%" },
      { label: "New Bone / Year", value: "~10%" },
    ],
    layers: ["Skin", "Subcutaneous tissue", "Deep fascia", "Muscle", "Bone"],
    imagingModality: "X-ray",
    organs: [
      {
        id: "skull",
        name: "Skull",
        latinName: "Cranium",
        weight: "~700 g",
        overview:
          "The skull is the bony skeleton of the head, formed by 22 bones divided into the neurocranium (which encases the brain) and the viscerocranium (which forms the face). Most bones are joined by immovable fibrous joints called sutures.",
        location:
          "Superior portion of the axial skeleton, resting on the vertebral column at the atlanto-occipital joint.",
        function:
          "Protects the brain and special sense organs, provides attachment for muscles of mastication and facial expression, and forms the upper airway and oral cavity.",
        bloodSupply:
          "Supplied by branches of the external carotid (middle meningeal, maxillary) and internal carotid (ophthalmic) arteries.",
        nerveSupply:
          "Innervated by the trigeminal (V), facial (VII), glossopharyngeal (IX), and vagus (X) nerves.",
        clinicalImportance:
          "Skull fractures risk epidural hematomas via middle meningeal artery tears and can compress cranial nerves at foraminal exits.",
        commonDiseases: [
          "Skull Fracture",
          "Craniosynostosis",
          "Osteomyelitis",
          "Basilar Invagination",
        ],
        relationships:
          "Sits atop the vertebral column at the atlanto-occipital joint; houses and protects the brain, eyes, ears, nasal cavity, and oral cavity, and articulates with the mandible at the temporomandibular joint.",
        imaging:
          "CT is preferred for fractures and surgical planning; MRI better evaluates intracranial contents, meninges, and soft tissues.",
        clinicalNote:
          "Battle sign (bruising behind the ear) and raccoon eyes indicate a basilar skull fracture with potential cavernous sinus injury.",
        histology:
          "Flat bones with three layers: outer and inner compact bone tables sandwiching diploic trabecular bone that houses red marrow.",
        quizRef: 0,
      },
      {
        id: "vertebral-column",
        name: "Vertebral Column",
        latinName: "Columna Vertebralis",
        weight: "~2 kg",
        overview:
          "A flexible column of 33 vertebrae — 7 cervical, 12 thoracic, 5 lumbar, 5 sacral (fused), and 4 coccygeal (fused) — separated by fibrocartilaginous intervertebral discs.",
        location: "Central axis of the body, extending from the skull to the coccyx.",
        function:
          "Protects the spinal cord, supports the head and trunk, transmits weight to the pelvis, and provides flexible attachment points for ribs and muscles.",
        bloodSupply:
          "Segmental supply from vertebral, ascending cervical, intercostal, and lumbar arteries via segmental medullary and radicular branches.",
        nerveSupply:
          "Recurrent meningeal nerves (sinuvertebral nerves) from spinal nerves supply the discs, ligaments, and meninges.",
        clinicalImportance:
          "Disc herniation typically posterolaterally compresses the exiting nerve root below the affected level, causing radiculopathy.",
        commonDiseases: [
          "Herniated Disc",
          "Scoliosis",
          "Spinal Stenosis",
          "Vertebral Compression Fracture",
        ],
        relationships:
          "Forms the central axis surrounding the spinal cord; articulates with the skull at C1 superiorly and the pelvis at the sacroiliac joints inferiorly, with ribs attaching at T1–T12.",
        imaging:
          "MRI is preferred for disc herniation, cord compression, and ligamentous injury; CT defines bony canal and fracture detail.",
        clinicalNote:
          "Lumbar puncture is performed at the L3–L4 or L4–L5 interspace, safely below the conus medullaris which ends at L1–L2.",
        histology:
          "Vertebrae are short bones with an outer cortical shell of compact bone over a trabecular marrow-filled interior; intervertebral discs are fibrocartilage with a gelatinous nucleus pulposus.",
      },
      {
        id: "rib-cage",
        name: "Rib Cage",
        latinName: "Cavea Thoracis",
        overview:
          "A bony cartilaginous cage formed by 12 pairs of ribs, the sternum, and thoracic vertebrae. Ribs 1–7 are true, 8–10 false, and 11–12 floating.",
        location: "Anterior thorax, extending from T1 to T12 vertebrae.",
        function:
          "Protects the heart, lungs, and great vessels while expanding during respiration to drive ventilation.",
        bloodSupply:
          "Supplied by the intercostal arteries (posterior from aorta, anterior from internal thoracic) and subclavian branches.",
        nerveSupply:
          "Intercostal nerves (T1–T11) and subcostal nerve (T12) provide segmental innervation.",
        clinicalImportance:
          "Flail chest — three or more segmental fractures in adjacent ribs — causes paradoxical chest wall motion and respiratory failure.",
        commonDiseases: [
          "Rib Fracture",
          "Flail Chest",
          "Costochondritis",
          "Pectus Excavatum",
        ],
      },
      {
        id: "femur",
        name: "Femur",
        latinName: "Os Femoris",
        weight: "~290 g (paired)",
        overview:
          "The longest, heaviest, and strongest bone in the human body, the femur forms the skeleton of the thigh and articulates with the acetabulum at the hip and the tibia at the knee.",
        location: "Thigh, between the hip joint and knee joint.",
        function:
          "Bears the entire weight of the body during standing and gait, provides attachment for powerful locomotor muscles, and stores marrow.",
        bloodSupply:
          "Crucially dependent on the medial and lateral circumflex femoral arteries and the artery of the ligamentum teres for the femoral head.",
        nerveSupply:
          "Nerves to the surrounding thigh compartments: femoral, obturator, and sciatic nerves.",
        clinicalImportance:
          "Femoral neck fractures in the elderly risk avascular necrosis of the head due to disruption of the circumflex blood supply.",
        commonDiseases: [
          "Femoral Neck Fracture",
          "Avascular Necrosis",
          "Femoral Stress Fracture",
          "Osteosarcoma",
        ],
        relationships:
          "Articulates proximally with the acetabulum of the pelvis and distally with the tibia and patella at the knee; the femoral head receives blood via the ligamentum teres and circumflex arteries.",
        imaging:
          "Plain radiographs in two planes diagnose most fractures; MRI detects occult stress fractures and early avascular necrosis before collapse.",
        clinicalNote:
          "A shortened, externally rotated leg in an elderly patient after a fall is classic for femoral neck fracture and requires urgent orthopedic management.",
        histology:
          "Typical long bone: thick cortical compact bone diaphysis with a medullary cavity, and trabecular metaphyseal and epiphyseal bone housing red and yellow marrow.",
      },
      {
        id: "pelvis",
        name: "Pelvis",
        latinName: "Pelvis",
        weight: "~1.5 kg",
        overview:
          "A basin-shaped ring formed by the two hip bones (ilium, ischium, pubis), the sacrum, and the coccyx. It transfers weight from the spine to the lower limbs and supports the pelvic viscera.",
        location: "Inferior trunk, between the abdomen and lower limbs.",
        function:
          "Transmits body weight to the lower limbs, protects pelvic organs, anchors pelvic floor muscles, and forms the birth canal in females.",
        bloodSupply:
          "Internal iliac, external iliac, ovarian/testicular, and median sacral arteries.",
        nerveSupply:
          "Lumbosacral plexus (L1–S4) including obturator, sciatic, pudendal, and sacral nerves.",
        clinicalImportance:
          "Pelvic fractures can cause life-threatening hemorrhage from the rich presacral venous plexus and internal iliac branches.",
        commonDiseases: [
          "Pelvic Fracture",
          "Hip Osteoarthritis",
          "Pelvic Floor Dysfunction",
          "Sacral Insufficiency Fracture",
        ],
        relationships:
          "Connects the axial skeleton via the sacrum to the lower limbs at the hip joints; supports the bladder, rectum, and reproductive organs, and forms the birth canal.",
        imaging:
          "CT is the gold standard for pelvic fractures and sacral injuries; MRI assesses pelvic floor disorders and soft-tissue pathology.",
        clinicalNote:
          "Application of a pelvic binder at the level of the greater trochanters can be life-saving in unstable pelvic fractures by reducing pelvic volume and tamponade bleeding.",
        histology:
          "Flat bones with thin cortices and abundant trabecular marrow; the sacrum encloses the sacral canal containing nerve roots.",
      },
      {
        id: "humerus",
        name: "Humerus",
        latinName: "Humerus",
        overview:
          "The single long bone of the arm, articulating proximally with the scapula at the glenohumeral joint and distally with the radius and ulna at the elbow.",
        location: "Arm, between shoulder and elbow.",
        function:
          "Acts as a lever for upper limb movement, transmits forces between shoulder and forearm, and anchors major arm muscles.",
        bloodSupply:
          "Profunda brachii (artery of the arm), plus circumflex humeral and brachial arterial branches.",
        nerveSupply:
          "Musculocutaneous, radial, median, and ulnar nerves lie in close proximity, especially around the spiral groove.",
        clinicalImportance:
          "Midshaft fractures commonly injure the radial nerve in the spiral groove, causing wrist drop.",
        commonDiseases: [
          "Humeral Shaft Fracture",
          "Radial Nerve Palsy",
          "Proximal Humeral Fracture",
          "Supracondylar Fracture",
        ],
      },
      {
        id: "sternum",
        name: "Sternum",
        latinName: "Sternum",
        weight: "~70 g",
        overview:
          "A flat elongated bone in the anterior chest wall divided into the manubrium, body, and xiphoid process. It is a primary site for cardiopulmonary resuscitation and bone marrow biopsy.",
        location: "Anterior midline of the thorax, articulating with clavicles and ribs 1–7.",
        function:
          "Forms the anterior anchor of the rib cage and protects mediastinal structures including the heart.",
        bloodSupply:
          "Internal thoracic arteries via perforating branches and the pericardiophrenic artery.",
        nerveSupply:
          "Anterior intercostal nerves from T1–T7.",
        clinicalImportance:
          "Sternal fractures from blunt trauma indicate high-energy injury and are associated with cardiac and pulmonary contusions.",
        commonDiseases: [
          "Sternal Fracture",
          "Pectus Carinatum",
          "Sternal Osteomyelitis",
          "Sternal Non-Union",
        ],
      },
      {
        id: "clavicle",
        name: "Clavicle",
        latinName: "Clavicula",
        overview:
          "The only long bone to lie horizontally, the S-shaped clavicle connects the upper limb to the trunk and is the most commonly fractured bone in the body.",
        location: "Between the sternum (medially) and the acromion of the scapula (laterally).",
        function:
          "Braces the shoulder, transmits forces from the upper limb to the axial skeleton, and serves as a muscle attachment site.",
        bloodSupply:
          "Branches of the suprascapular, thoracoacromial, and internal thoracic arteries.",
        nerveSupply:
          "Supraclavicular nerves (C3–C4) for sensation; no muscles attach solely to it.",
        clinicalImportance:
          "Midshaft fractures are most common and present with a drooped shoulder and palpable deformity.",
        commonDiseases: [
          "Clavicle Fracture",
          "Acromioclavicular Separation",
          "Sternoclavicular Dislocation",
          "Clavicular Osteomyelitis",
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    id: "muscular",
    name: "Muscular System",
    latinName: "Systema Musculare",
    icon: "Dumbbell",
    color: "#c0392b",
    tagline: "Over 600 muscles turn thought into motion.",
    description:
      "The muscular system comprises more than 600 skeletal muscles that produce movement, maintain posture, generate heat, and stabilize joints. Each muscle is a bundled organ of contractile fibers under voluntary or involuntary control.",
    funFact:
      "The masseter is the strongest muscle by force generated on a surface area basis — your bite can exert up to 90 kg of force.",
    stats: [
      { label: "Muscles", value: "600+" },
      { label: "% Body Mass", value: "~40%" },
      { label: "Strongest (force)", value: "Masseter" },
      { label: "Largest", value: "Gluteus Maximus" },
    ],
    layers: ["Skin", "Subcutaneous tissue", "Deep fascia", "Skeletal muscle", "Bone"],
    imagingModality: "MRI",
    organs: [
      {
        id: "deltoid",
        name: "Deltoid",
        latinName: "Musculus Deltoideus",
        weight: "~200 g",
        overview:
          "A thick, triangular muscle covering the shoulder that gives it its rounded contour. It has three distinct heads — anterior, middle, and posterior — each contributing to different movements of the arm.",
        location: "Lateral aspect of the shoulder, draping the glenohumeral joint.",
        function:
          "Anterior head flexes and medially rotates the arm; middle head abducts; posterior head extends and laterally rotates the arm.",
        bloodSupply:
          "Posterior circumflex humeral artery and deltoid branch of the thoracoacromial artery.",
        nerveSupply:
          "Axillary nerve (C5–C6), making it a key clinical landmark for axillary nerve integrity.",
        clinicalImportance:
          "Axillary nerve injury after shoulder dislocation causes deltoid paralysis and anesthesia over the 'regimental badge' patch.",
        commonDiseases: [
          "Deltoid Strain",
          "Axillary Nerve Palsy",
          "Calcific Tendinitis",
          "Frozen Shoulder",
        ],
        relationships:
          "Overlies the glenohumeral joint and the axillary nerve passing through the quadrangular space; the cephalic vein runs in the deltopectoral groove medially.",
        imaging:
          "Ultrasound and MRI evaluate rotator cuff and deltoid tears; ultrasound guides intramuscular injections and aspiration.",
        clinicalNote:
          "Intramuscular injections target the mid-deltoid, 2–3 finger-breadths below the acromion, to avoid the axillary nerve and circumflex vessels.",
        histology:
          "Multipennate skeletal muscle: fibers organized into fascicles bounded by epimysium, perimysium, and endomysium of connective tissue.",
      },
      {
        id: "biceps-brachii",
        name: "Biceps Brachii",
        latinName: "Musculus Biceps Brachii",
        overview:
          "A two-headed fusiform muscle of the anterior arm. The long head originates at the supraglenoid tubercle and the short head at the coracoid process, converging to insert on the radial tuberosity.",
        location: "Anterior compartment of the arm.",
        function:
          "Flexes the elbow and powerfully supinates the forearm; assists in shoulder flexion and stabilization.",
        bloodSupply:
          "Branches of the brachial artery, especially the bicipital and superior ulnar collateral arteries.",
        nerveSupply:
          "Musculocutaneous nerve (C5–C6).",
        clinicalImportance:
          "Long head rupture produces the classic 'Popeye sign' — a bulging muscle belly retracted distally.",
        commonDiseases: [
          "Biceps Tendon Rupture",
          "Proximal Biceps Tendinitis",
          "SLAP Tear",
          "Bicipital Tendinopathy",
        ],
        relationships:
          "Long head tendon runs through the bicipital groove and intracapsular space of the shoulder; the musculocutaneous nerve passes deep between the biceps and brachialis.",
        imaging:
          "MRI best visualizes the long head tendon and SLAP tears; ultrasound dynamically assesses tendon subluxation and rupture.",
        clinicalNote:
          "The biceps reflex tests the musculocutaneous nerve (C5–C6) and is part of the standard neurological exam.",
        histology:
          "Bipennate skeletal muscle with two heads of origin converging on a common distal tendon inserting on the radial tuberosity.",
      },
      {
        id: "pectoralis-major",
        name: "Pectoralis Major",
        latinName: "Musculus Pectoralis Major",
        weight: "~430 g",
        overview:
          "A large, fan-shaped chest muscle with clavicular, sternocostal, and abdominal heads that converge on the intertubercular sulcus of the humerus.",
        location: "Anterior thoracic wall, superficial to pectoralis minor.",
        function:
          "Adducts and medially rotates the arm; the clavicular head flexes, and the sternocostal head extends the flexed arm.",
        bloodSupply:
          "Pectoral branch of thoracoacromial, internal thoracic perforators, and lateral thoracic arteries.",
        nerveSupply:
          "Medial and lateral pectoral nerves (C5–T1).",
        clinicalImportance:
          "Pectoralis major rupture occurs in weightlifters during eccentric bench press, requiring surgical repair to restore strength.",
        commonDiseases: [
          "Pectoralis Major Rupture",
          "Poland Syndrome",
          "Costoclavicular Syndrome",
          "Pectoralis Strain",
        ],
      },
      {
        id: "rectus-abdominis",
        name: "Rectus Abdominis",
        latinName: "Musculus Rectus Abdominis",
        overview:
          "The paired vertical strap muscles of the anterior abdominal wall, segmented by three transverse tendinous intersections giving the 'six-pack' appearance.",
        location: "Anterior abdominal wall, enclosed in the rectus sheath on either side of the linea alba.",
        function:
          "Flexes the trunk, compresses the abdomen to aid in defecation, urination, and forced expiration, and stabilizes the pelvis.",
        bloodSupply:
          "Superior epigastric (continuation of internal thoracic) and inferior epigastric (external iliac) arteries.",
        nerveSupply:
          "Thoracoabdominal nerves T7–T12, segmentally.",
        clinicalImportance:
          "Rectus sheath hematomas can mimic acute abdominal pathology; the linea alba is a common surgical access plane.",
        commonDiseases: [
          "Rectus Diastasis",
          "Rectus Sheath Hematoma",
          "Abdominal Hernia",
          "Rectus Strain",
        ],
        relationships:
          "Enclosed in the rectus sheath formed by the aponeuroses of the external oblique, internal oblique, and transversus abdominis; the linea alba separates the two bellies.",
        imaging:
          "Ultrasound evaluates rectus sheath hematomas and diastasis; CT assesses hernias, abscesses, and abdominal wall pathology.",
        clinicalNote:
          "Midline laparotomy through the avascular linea alba minimizes bleeding and avoids injuring segmental nerves and vessels.",
        histology:
          "Strap-like parallel skeletal muscle fibers segmented by three transverse tendinous intersections anchored to the anterior rectus sheath.",
      },
      {
        id: "quadriceps",
        name: "Quadriceps Femoris",
        latinName: "Musculus Quadriceps Femoris",
        weight: "~2 kg (paired)",
        overview:
          "The four-headed extensor of the knee — vastus medialis, lateralis, intermedius, and rectus femoris — converging into the quadriceps tendon that envelops the patella.",
        location: "Anterior compartment of the thigh.",
        function:
          "Powerful knee extension; the rectus femoris also flexes the hip. Vital for gait, stairs, and rising from sitting.",
        bloodSupply:
          "Branches of the femoral and profunda femoris arteries (lateral and medial circumflex femoral).",
        nerveSupply:
          "Femoral nerve (L2–L4).",
        clinicalImportance:
          "Quadriceps tendon rupture in older adults causes inability to actively extend the knee and requires urgent repair.",
        commonDiseases: [
          "Quadriceps Tendon Rupture",
          "Patellofemoral Pain Syndrome",
          "Quadriceps Strain",
          "Myositis Ossificans",
        ],
        relationships:
          "Converges into the quadriceps tendon that envelops the patella and continues as the patellar ligament to the tibial tuberosity; the femoral nerve lies deep between the rectus femoris and vastus intermedius.",
        imaging:
          "MRI is preferred for tendon ruptures, muscle strains, and patellofemoral assessment; ultrasound dynamically evaluates the patellar ligament.",
        clinicalNote:
          "The patellar reflex (L2–L4) tests femoral nerve integrity and quadriceps function; an absent reflex suggests upper or lower motor neuron lesion.",
        histology:
          "Four skeletal muscle bellies (vastus medialis, lateralis, intermedius, and rectus femoris) converging on a common tendon.",
      },
      {
        id: "gastrocnemius",
        name: "Gastrocnemius",
        latinName: "Musculus Gastrocnemius",
        overview:
          "A two-headed superficial calf muscle that, with the soleus, forms the triceps surae. Its tendinous continuation is the Achilles tendon inserting on the calcaneus.",
        location: "Superficial posterior compartment of the leg.",
        function:
          "Plantarflexes the ankle, flexes the knee, and propels gait; the key muscle for push-off during walking and jumping.",
        bloodSupply:
          "Medial and lateral sural branches of the popliteal artery.",
        nerveSupply:
          "Tibial nerve (S1–S2).",
        clinicalImportance:
          "Medial head rupture presents as 'tennis leg' — sudden calf pain mimicking deep vein thrombosis.",
        commonDiseases: [
          "Achilles Tendinopathy",
          "Tennis Leg",
          "Gastrocnemius Strain",
          "Achilles Tendon Rupture",
        ],
      },
      {
        id: "gluteus-maximus",
        name: "Gluteus Maximus",
        latinName: "Musculus Gluteus Maximus",
        weight: "~750 g",
        overview:
          "The largest and most superficial of the gluteal muscles, forming the bulk of the buttock and uniquely developed in humans for upright posture.",
        location: "Posterior gluteal region, superficial to gluteus medius.",
        function:
          "Extends and laterally rotates the hip; powerfully extends the trunk from the flexed position during climbing and rising.",
        bloodSupply:
          "Superior and inferior gluteal arteries, with the inferior being the dominant supply.",
        nerveSupply:
          "Inferior gluteal nerve (L5–S2).",
        clinicalImportance:
          "Intramuscular injections target the superolateral quadrant to avoid the sciatic nerve and inferior gluteal vessels.",
        commonDiseases: [
          "Gluteal Bursitis",
          "Piriformis Syndrome",
          "Hamstring Origin Tendinopathy",
          "Sacroiliac Dysfunction",
        ],
      },
      {
        id: "trapezius",
        name: "Trapezius",
        latinName: "Musculus Trapezius",
        overview:
          "A large, triangular superficial muscle of the upper back with descending, transverse, and ascending parts that together resemble a trapezoid when paired.",
        location: "Posterior neck and upper thorax, from occipital bone to T12.",
        function:
          "Elevates, retracts, and depresses the scapula; rotates the glenoid superiorly and supports the weight of the upper limb.",
        bloodSupply:
          "Transverse cervical and dorsal scapular arteries (and occipital branch for the upper fibers).",
        nerveSupply:
          "Spinal accessory nerve (CN XI) for motor; C2–C4 for proprioception.",
        clinicalImportance:
          "Accessory nerve injury during cervical lymph node biopsy results in shoulder droop and inability to elevate the arm above horizontal.",
        commonDiseases: [
          "Trapezius Strain",
          "Accessory Nerve Palsy",
          "Myofascial Pain Syndrome",
          "Thoracic Outlet Syndrome",
        ],
        relationships:
          "Spans from the occipital bone and spinous processes of C7–T12 to the lateral clavicle, acromion, and scapular spine; the spinal accessory nerve (CN XI) crosses the posterior triangle of the neck.",
        imaging:
          "MRI evaluates muscle strains and atrophy; ultrasound can localize the accessory nerve in the posterior triangle.",
        clinicalNote:
          "CN XI injury during cervical lymph node biopsy causes trapezius palsy with shoulder droop and inability to elevate the arm above 90°.",
        histology:
          "Triangular skeletal muscle with descending, transverse, and ascending fibers bounded by standard epimysial, perimysial, and endomysial connective tissue layers.",
        quizRef: 2,
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    id: "nervous",
    name: "Nervous System",
    latinName: "Systema Nervosum",
    icon: "Brain",
    color: "#f1c40f",
    tagline: "The body's command network — electricity made flesh.",
    description:
      "The nervous system integrates sensory input, coordinates motor output, and underlies cognition, emotion, and homeostasis. It is divided into the central nervous system (brain and spinal cord) and peripheral nervous system (cranial and spinal nerves).",
    funFact:
      "The human brain generates about 20 watts of power — enough to dimly light a bulb — while comprising just 2% of body weight.",
    stats: [
      { label: "Neurons", value: "~86 billion" },
      { label: "Brain Weight", value: "~1.4 kg" },
      { label: "Nerve Conduction", value: "120 m/s" },
      { label: "Cranial Nerves", value: "12 pairs" },
    ],
    layers: ["Skin", "Subcutaneous tissue", "Skull/Vertebrae", "Meninges", "Nervous tissue"],
    imagingModality: "MRI",
    organs: [
      {
        id: "cerebrum",
        name: "Cerebrum",
        latinName: "Cerebrum",
        weight: "~1.1 kg",
        overview:
          "The largest part of the brain, divided into two hemispheres connected by the corpus callosum and partitioned into four lobes: frontal, parietal, temporal, and occipital.",
        location: "Supratentorial cranial cavity, occupying most of the cranial vault.",
        function:
          "Houses higher cognition, voluntary motor control, sensory perception, language, memory, and emotional processing.",
        bloodSupply:
          "Anterior (ACA), middle (MCA), and posterior (PCA) cerebral arteries forming the Circle of Willis.",
        nerveSupply:
          "Internally by intrinsic networks of glutamatergic, GABAergic, and modulatory neurons; sensation via the meninges from the trigeminal nerve.",
        clinicalImportance:
          "Stroke in MCA territory causes contralateral face and arm weakness with sensory loss and, in the dominant hemisphere, aphasia.",
        commonDiseases: [
          "Ischemic Stroke",
          "Glioblastoma",
          "Alzheimer Disease",
          "Epilepsy",
        ],
        relationships:
          "Sits above the brainstem and cerebellum in the anterior and middle cranial fossae; the two hemispheres are connected by the corpus callosum, with basal ganglia and diencephalon deep within.",
        imaging:
          "MRI is preferred for stroke, tumors, demyelination, and cortical anatomy; CT is faster for acute hemorrhage screening.",
        clinicalNote:
          "MCA territory stroke causes contralateral face and arm weakness with sensory loss, and aphasia if the dominant hemisphere is affected.",
        histology:
          "Six-layered neocortex of pyramidal and stellate neurons overlying white matter tracts; glia outnumber neurons roughly three to one.",
      },
      {
        id: "cerebellum",
        name: "Cerebellum",
        latinName: "Cerebellum",
        weight: "~150 g",
        overview:
          "A cauliflower-shaped structure dorsal to the pons and medulla, comprising a vermis and two hemispheres. Despite only 10% of brain volume, it contains over half of all neurons.",
        location: "Posterior cranial fossa, beneath the tentorium cerebelli.",
        function:
          "Coordinates voluntary movement, balance, posture, and motor learning by comparing intended with actual movement.",
        bloodSupply:
          "Superior, anterior inferior, and posterior inferior cerebellar arteries (SCA, AICA, PICA).",
        nerveSupply:
          "Connected via the three cerebellar peduncles; intrinsic Purkinje and granule cell networks.",
        clinicalImportance:
          "Cerebellar lesions produce ipsilateral ataxia, dysmetria (past-pointing), intention tremor, and dysarthric speech.",
        commonDiseases: [
          "Cerebellar Stroke",
          "Ataxia",
          "Medulloblastoma",
          "Cerebellar Herniation",
        ],
        relationships:
          "Lies posterior to the pons and medulla in the posterior cranial fossa beneath the tentorium cerebelli; connected to the brainstem via the superior, middle, and inferior cerebellar peduncles.",
        imaging:
          "MRI is the modality of choice for evaluating cerebellar strokes, tumors, atrophy, and malformations such as Chiari.",
        clinicalNote:
          "Finger-to-nose and heel-to-shin testing assesses ipsilateral cerebellar coordination; dysmetria and intention tremor localize to the affected hemisphere.",
        histology:
          "Three-layered cortex (molecular, Purkinje, granular cell) overlying deep white matter and nuclei; contains more than half of all brain neurons.",
      },
      {
        id: "brainstem",
        name: "Brainstem",
        latinName: "Truncus Encephali",
        weight: "~70 g",
        overview:
          "The stalk-like structure continuous with the spinal cord, comprising the midbrain, pons, and medulla oblongata. It contains nuclei of cranial nerves III–XII.",
        location: "Central core of the brain between the diencephalon and spinal cord.",
        function:
          "Relays signals between cerebrum and spinal cord, controls vital autonomic functions including respiration and cardiovascular tone, and houses cranial nerve nuclei.",
        bloodSupply:
          "Vertebral and basilar arteries with their paramedian, short circumferential, and long circumferential branches.",
        nerveSupply:
          "Contains nuclei of cranial nerves III–XII and the reticular activating system.",
        clinicalImportance:
          "Brainstem stroke is life-threatening; locked-in syndrome follows basilar artery occlusion with preserved consciousness but quadriplegia.",
        commonDiseases: [
          "Brainstem Stroke",
          "Locked-In Syndrome",
          "Central Herniation",
          "Pontine Hemorrhage",
        ],
        relationships:
          "Continuous with the spinal cord inferiorly at the foramen magnum and the diencephalon superiorly; cranial nerves III–XII emerge from its ventral and lateral surfaces.",
        imaging:
          "MRI is essential for localizing brainstem strokes, tumors, and demyelination; CT is limited by posterior fossa beam-hardening artifacts.",
        clinicalNote:
          "Cushing triad (hypertension, bradycardia, irregular respiration) signals rising intracranial pressure and impending brainstem herniation — an emergency.",
        histology:
          "Mixed gray matter (cranial nerve nuclei, reticular formation) traversed by ascending and descending white matter tracts across the midbrain, pons, and medulla.",
      },
      {
        id: "spinal-cord",
        name: "Spinal Cord",
        latinName: "Medulla Spinalis",
        weight: "~30 g",
        overview:
          "A cylindrical bundle of nervous tissue extending from the medulla at the foramen magnum to the conus medullaris at L1–L2 in adults. It gives rise to 31 pairs of spinal nerves.",
        location: "Within the vertebral canal, surrounded by the three meningeal layers.",
        function:
          "Conveys sensory, motor, and autonomic signals between the brain and body, and mediates spinal reflexes.",
        bloodSupply:
          "Anterior spinal artery (anterior 2/3) and paired posterior spinal arteries (posterior 1/3), reinforced by radicular arteries.",
        nerveSupply:
          "Organized into dorsal (sensory) and ventral (motor) roots forming 31 spinal nerve pairs.",
        clinicalImportance:
          "Anterior spinal artery syndrome causes bilateral motor and pain/temperature loss with preserved dorsal column sensation.",
        commonDiseases: [
          "Spinal Cord Injury",
          "Syringomyelia",
          "Multiple Sclerosis",
          "Amyotrophic Lateral Sclerosis",
        ],
        relationships:
          "Travels within the vertebral canal from the foramen magnum to the conus medullaris at L1–L2, giving off 31 pairs of spinal nerves via the dorsal and ventral roots through intervertebral foramina.",
        imaging:
          "MRI is essential to evaluate cord compression, syrinx, demyelination, and trauma; CT best defines the bony spinal canal.",
        clinicalNote:
          "The cord ends at L1–L2 as the conus medullaris — lumbar punctures below this level avoid cord injury and sample the cauda equina.",
        histology:
          "Butterfly-shaped central gray matter (anterior motor and posterior sensory horns) surrounded by ascending and descending white matter tracts in funiculi.",
      },
      {
        id: "medulla",
        name: "Medulla Oblongata",
        latinName: "Medulla Oblongata",
        overview:
          "The most caudal portion of the brainstem, continuous with the spinal cord. It contains vital autonomic centers and decussation of the corticospinal tracts.",
        location: "Inferior brainstem, just above the foramen magnum.",
        function:
          "Controls respiration, heart rate, and blood pressure; relays signals; and houses nuclei of CN IX, X, XI, and XII.",
        bloodSupply:
          "Vertebral arteries, anterior spinal artery, and posterior inferior cerebellar artery (PICA).",
        nerveSupply:
          "Contains cranial nerve nuclei IX–XII and the nucleus of the solitary tract.",
        clinicalImportance:
          "Lateral medullary (Wallenberg) syndrome from PICA occlusion causes ipsilateral facial and contralateral body sensory loss with ataxia.",
        commonDiseases: [
          "Wallenberg Syndrome",
          "Medial Medullary Syndrome",
          "Respiratory Center Failure",
          "Arnold-Chiari Malformation",
        ],
      },
      {
        id: "hypothalamus",
        name: "Hypothalamus",
        latinName: "Hypothalamus",
        weight: "~4 g",
        overview:
          "A small but pivotal diencephalic structure forming the floor and walls of the third ventricle. It is the master regulator of homeostasis and the hormonal axis.",
        location: "Inferior diencephalon, below the thalamus, forming the floor of the third ventricle.",
        function:
          "Regulates body temperature, hunger, thirst, sleep–wake cycles, autonomic output, and pituitary hormone release via the hypophyseal portal system.",
        bloodSupply:
          "Branches of the anterior cerebral, posterior communicating, and posterior cerebral arteries.",
        nerveSupply:
          "Reciprocal connections with the limbic system, brainstem, and autonomic centers; itself controls the pituitary.",
        clinicalImportance:
          "Craniopharyngiomas compressing the hypothalamus cause growth failure, diabetes insipidus, and visual field defects.",
        commonDiseases: [
          "Craniopharyngioma",
          "Diabetes Insipidus",
          "Hypothalamic Hamartoma",
          "Prader-Willi Syndrome",
        ],
      },
      {
        id: "optic-nerve",
        name: "Optic Nerve",
        latinName: "Nervus Opticus",
        overview:
          "The second cranial nerve (CN II), a myelinated sensory tract of approximately 1.2 million retinal ganglion cell axons that is technically part of the central nervous system.",
        location: "From the retina through the optic canal to the optic chiasm.",
        function:
          "Conveys visual information from the retina to the lateral geniculate nucleus and pretectal nuclei.",
        bloodSupply:
          "Ophthalmic artery branches: central retinal artery and posterior ciliary arteries.",
        nerveSupply:
          "It is itself a CNS tract, ensheathed by meninges and surrounded by cerebrospinal fluid.",
        clinicalImportance:
          "Papilledema on fundoscopy reflects raised intracranial pressure transmitted along the subarachnoid sheath.",
        commonDiseases: [
          "Optic Neuritis",
          "Papilledema",
          "Glaucoma",
          "Anterior Ischemic Optic Neuropathy",
        ],
      },
      {
        id: "vagus-nerve",
        name: "Vagus Nerve",
        latinName: "Nervus Vagus",
        overview:
          "The tenth cranial nerve (CN X), the longest and most widely distributed cranial nerve, providing parasympathetic output to most thoracic and abdominal viscera.",
        location: "From the medulla through the jugular foramen into the neck, thorax, and abdomen.",
        function:
          "Provides parasympathetic supply to the heart, lungs, and gastrointestinal tract; mediates the baroreceptor reflex, swallowing, and phonation.",
        bloodSupply:
          "Meningeal, auricular, and nodose ganglion branches from the posterior meningeal, occipital, and ascending pharyngeal arteries.",
        nerveSupply:
          "Contains afferent, efferent, and parasympathetic fibers; nuclei in the medulla (nucleus ambiguus, dorsal motor nucleus).",
        clinicalImportance:
          "Unilateral vagal injury causes hoarseness from recurrent laryngeal nerve palsy; vagal stimulation is used to treat refractory epilepsy.",
        commonDiseases: [
          "Vocal Cord Paralysis",
          "Gastroparesis",
          "Vasovagal Syncope",
          "Vagal Schwannoma",
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    id: "cardiovascular",
    name: "Cardiovascular System",
    latinName: "Systema Cardiovasculare",
    icon: "Heart",
    color: "#e74c3c",
    tagline: "A pump, a network, and a river of life.",
    description:
      "The cardiovascular system comprises the heart, blood, and a vast vascular tree estimated at 100,000 km in length. It delivers oxygen and nutrients to tissues, removes waste, and transports hormones, immune cells, and heat throughout the body.",
    funFact:
      "Your heart beats around 100,000 times per day, pumping roughly 7,500 liters of blood — enough to fill about 40 bathtubs daily.",
    stats: [
      { label: "Heart Rate", value: "60–100 bpm" },
      { label: "Blood Vessels", value: "~100,000 km" },
      { label: "Cardiac Output", value: "~5 L/min" },
      { label: "Blood Volume", value: "~5 L" },
    ],
    layers: ["Skin", "Subcutaneous tissue", "Deep fascia", "Muscle", "Heart/Vessels"],
    imagingModality: "CT",
    organs: [
      {
        id: "heart",
        name: "Heart",
        latinName: "Cor",
        weight: "~300 g",
        overview:
          "A four-chambered muscular pump located in the middle mediastinum. Its walls — epicardium, myocardium, and endocardium — contract in a precisely timed cycle driven by the intrinsic conduction system.",
        location: "Middle mediastinum, behind the sternum, level T5–T8.",
        function:
          "Pumps deoxygenated blood to the lungs via the pulmonary circulation and oxygenated blood to the body via the systemic circulation.",
        bloodSupply:
          "Right and left coronary arteries arising from the aortic sinuses, drained by the coronary sinus and cardiac veins.",
        nerveSupply:
          "Autonomic innervation by sympathetic cardiac nerves (accelerator) and the vagus nerve (depressor), plus the intrinsic SA and AV nodes.",
        clinicalImportance:
          "Occlusion of a coronary artery causes myocardial infarction; the left anterior descending is colloquially the 'widow-maker'.",
        commonDiseases: [
          "Myocardial Infarction",
          "Heart Failure",
          "Atrial Fibrillation",
          "Infective Endocarditis",
        ],
        relationships:
          "Lies in the middle mediastinum between the lungs, with the diaphragm below and great vessels above; the pericardium anchors it via sternopericardial and vertebropericardial ligaments.",
        imaging:
          "Echocardiography is first-line for function and valves; CT coronary angiography visualizes coronary stenosis; MRI assesses function, viability, and tissue characterization.",
        clinicalNote:
          "Chest pain with ST elevation on ECG is treated as STEMI — immediate reperfusion by primary PCI or thrombolysis is lifesaving.",
        histology:
          "Three layers: outer epicardium (visceral pericardium with coronary vessels), thick myocardium of branching cardiac muscle cells joined by intercalated discs, and inner endocardium.",
      },
      {
        id: "aorta",
        name: "Aorta",
        latinName: "Aorta",
        weight: "~100 g",
        overview:
          "The largest artery in the body, originating from the left ventricle. It is divided into ascending, arch, thoracic, and abdominal segments.",
        location: "From the left ventricle, arching over the left main bronchus, descending through the diaphragm to bifurcate at L4.",
        function:
          "Conducts oxygenated blood from the heart to all systemic arteries; the elastic recoil maintains diastolic pressure and coronary flow.",
        bloodSupply:
          "Nourished by vasa vasorum from intercostal, lumbar, and visceral branches.",
        nerveSupply:
          "Sympathetic fibers from the cardiac and splanchnic plexuses provide vasomotor control.",
        clinicalImportance:
          "Aortic dissection — a tear in the intima — causes tearing chest/back pain and risks catastrophic rupture or malperfusion.",
        commonDiseases: [
          "Aortic Dissection",
          "Aortic Aneurysm",
          "Coarctation of the Aorta",
          "Aortic Stenosis",
        ],
        relationships:
          "Originates from the left ventricle, arches over the left main bronchus and pulmonary artery, then descends through the diaphragm to bifurcate at L4 into the common iliac arteries.",
        imaging:
          "CT angiography is the gold standard for dissection, aneurysm, and rupture; transesophageal echo is used in unstable patients.",
        clinicalNote:
          "Stanford type A dissection (ascending aorta) requires emergent surgical repair; type B is often managed medically with blood pressure control.",
        histology:
          "Largest elastic artery with intima, thick media of elastic lamellae and smooth muscle, and adventitia containing the vasa vasorum that nourish the outer wall.",
      },
      {
        id: "coronary-arteries",
        name: "Coronary Arteries",
        latinName: "Arteriae Coronariae",
        overview:
          "The first branches of the aorta — left (LCA) and right (RCA) — that supply the myocardium. The LCA divides into the left anterior descending and circumflex arteries.",
        location: "Epicardial surface of the heart, within the atrioventricular and interventricular grooves.",
        function:
          "Deliver oxygenated blood to the myocardium; the LAD supplies the anterior wall, the RCA the inferior wall, and the LCx the lateral wall.",
        bloodSupply:
          "Receive their own microvascular supply via vasa vasorum of the arterial wall.",
        nerveSupply:
          "Sympathetic and parasympathetic fibers mediate vasomotor tone, with metabolic autoregulation dominating control.",
        clinicalImportance:
          "Atherosclerotic plaque rupture here causes acute coronary syndromes and is the leading cause of death worldwide.",
        commonDiseases: [
          "Atherosclerosis",
          "Myocardial Infarction",
          "Coronary Artery Spasm",
          "Coronary Artery Dissection",
        ],
        relationships:
          "Course over the epicardial surface in the atrioventricular and interventricular grooves; the LAD runs in the anterior interventricular groove and the PDA in the posterior interventricular groove.",
        imaging:
          "Invasive coronary angiography is the gold standard; CT coronary angiography is a non-invasive alternative for screening intermediate-risk patients.",
        clinicalNote:
          "Acute proximal LAD occlusion causes the 'widow-maker' anterior MI — emergent PCI is critical to salvage myocardium.",
        histology:
          "Medium muscular arteries with internal and external elastic laminae; atherosclerosis begins with endothelial dysfunction and subintimal lipid deposition (fatty streaks).",
        quizRef: 1,
      },
      {
        id: "pulmonary-artery",
        name: "Pulmonary Artery",
        latinName: "Truncus Pulmonalis",
        overview:
          "The only artery in the adult that carries deoxygenated blood. It arises from the right ventricle and bifurcates into the right and left pulmonary arteries beneath the aortic arch.",
        location: "Anterior mediastinum, from the right ventricle to the lung hila.",
        function:
          "Transports deoxygenated blood to the pulmonary capillaries for gas exchange, the only artery carrying venous blood.",
        bloodSupply:
          "Nourished by bronchial and vasa vasorum vessels.",
        nerveSupply:
          "Sympathetic fibers from the cardiac plexus modulate pulmonary vasomotor tone.",
        clinicalImportance:
          "Pulmonary embolism — obstruction by an embolus — is a leading cause of sudden death and presents with dyspnea and hypoxia.",
        commonDiseases: [
          "Pulmonary Embolism",
          "Pulmonary Hypertension",
          "Patent Ductus Arteriosus",
          "Pulmonary Stenosis",
        ],
        relationships:
          "Arises from the right ventricle, passes upward and to the left, and bifurcates under the aortic arch into the right and left pulmonary arteries entering the lung hila.",
        imaging:
          "CT pulmonary angiography is the gold standard for pulmonary embolism; ventilation-perfusion scanning is used when contrast is contraindicated.",
        clinicalNote:
          "It is the only artery in the adult that carries deoxygenated blood — a key exception tested in clinical and basic science exams.",
        histology:
          "Elastic artery with thinner walls than the aorta; vasa vasorum supply the adventitia, and the wall accommodates the lower pressures of the pulmonary circulation.",
        quizRef: 4,
      },
      {
        id: "superior-vena-cava",
        name: "Superior Vena Cava",
        latinName: "Vena Cava Superior",
        overview:
          "A large valveless vein formed by the union of the left and right brachiocephalic veins. It drains blood from the upper half of the body into the right atrium.",
        location: "Superior mediastinum, to the right of the ascending aorta.",
        function:
          "Returns deoxygenated blood from the head, neck, upper limbs, and upper thorax to the right atrium.",
        bloodSupply:
          "Vasa vasorum from pericardiophrenic and bronchial arteries.",
        nerveSupply:
          "Sympathetic fibers from the cardiac plexus.",
        clinicalImportance:
          "External compression, classically by a lung tumor, causes superior vena cava syndrome with facial and upper limb edema.",
        commonDiseases: [
          "Superior Vena Cava Syndrome",
          "Central Venous Thrombosis",
          "Catheter-Related Stenosis",
        ],
      },
      {
        id: "carotid-artery",
        name: "Carotid Artery",
        latinName: "Arteria Carotis Communis",
        overview:
          "The paired common carotid arteries bifurcate at the level of C4 into the internal carotid (supplying the brain) and external carotid (supplying the face and neck).",
        location: "Lateral neck within the carotid sheath, beside the internal jugular vein and vagus nerve.",
        function:
          "Supplies the brain (internal) and structures of the face, scalp, and neck (external); the bifurcation houses the carotid sinus and body.",
        bloodSupply:
          "Supplies blood itself; its wall nourished by vasa vasorum.",
        nerveSupply:
          "Carotid sinus (baroreceptor) and carotid body (chemoreceptor) innervated by the glossopharyngeal nerve.",
        clinicalImportance:
          "Carotid bifurcation is a prime site of atherosclerosis; emboli here cause transient ischemic attacks and stroke.",
        commonDiseases: [
          "Carotid Stenosis",
          "Carotid Dissection",
          "Stroke",
          "Carotid Body Tumor",
        ],
      },
      {
        id: "capillaries",
        name: "Capillaries",
        latinName: "Vasa Capillaria",
        overview:
          "The smallest blood vessels — 5–10 µm in diameter — forming a vast network where gas, nutrient, and waste exchange occurs between blood and tissues.",
        location: "Throughout every tissue, between arterioles and venules.",
        function:
          "Site of diffusion of oxygen, carbon dioxide, nutrients, and waste; total surface area estimated at 600–1000 m².",
        bloodSupply:
          "Supplied by postcapillary venules and arterioles; themselves the exchange endpoint.",
        nerveSupply:
          "Precapillary sphincters respond to local metabolic autoregulation rather than direct innervation.",
        clinicalImportance:
          "Capillary leak underlies septic shock, anaphylaxis, and burns; loss of capillary integrity drives edema.",
        commonDiseases: [
          "Capillary Leak Syndrome",
          "Diabetic Microangiopathy",
          "Systemic Capillary Leak Syndrome",
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    id: "respiratory",
    name: "Respiratory System",
    latinName: "Systema Respiratorium",
    icon: "Wind",
    color: "#16a085",
    tagline: "The 20,000-breath-a-day engine of oxygen.",
    description:
      "The respiratory system delivers oxygen to the blood and removes carbon dioxide through a series of branching airways ending in 300–500 million alveoli. It also phonates, smells, and helps maintain acid–base balance.",
    funFact:
      "If unfolded flat, the alveolar surface of your lungs would cover roughly the area of a tennis court — about 70 m².",
    stats: [
      { label: "Breaths / Day", value: "~23,000" },
      { label: "Alveoli", value: "~480 million" },
      { label: "Surface Area", value: "~70 m²" },
      { label: "Tidal Volume", value: "~500 mL" },
    ],
    layers: ["Skin", "Subcutaneous tissue", "Muscle", "Pleura", "Lung parenchyma"],
    imagingModality: "X-ray",
    organs: [
      {
        id: "nasal-cavity",
        name: "Nasal Cavity",
        latinName: "Cavitas Nasi",
        overview:
          "A paired, air-filled space lined by respiratory and olfactory mucosa, divided by the nasal septum and bounded by three turbinate bones that warm, humidify, and filter inspired air.",
        location: "Center of the face, between the orbits and above the hard palate.",
        function:
          "Warms, humidifies, and filters air; houses olfactory receptors; resonates the voice; and drains the paranasal sinuses.",
        bloodSupply:
          "Branches of the maxillary, facial, and ophthalmic arteries — Kiesselbach's plexus on the anterior septum is the source of most nosebleeds.",
        nerveSupply:
          "Trigeminal nerve (V1, V2) for general sensation; olfactory nerve (CN I) for smell.",
        clinicalImportance:
          "Epistaxis is most often anterior at Kiesselbach's plexus and managed with pressure or cautery; chronic obstruction can indicate deviated septum.",
        commonDiseases: [
          "Epistaxis",
          "Allergic Rhinitis",
          "Deviated Septum",
          "Sinusitis",
        ],
      },
      {
        id: "trachea",
        name: "Trachea",
        latinName: "Trachea",
        weight: "~30 g",
        overview:
          "A 10–12 cm fibrocartilaginous tube held open by 16–20 C-shaped cartilage rings, lined by pseudostratified ciliated columnar epithelium.",
        location: "Anterior mediastinum, from the cricoid cartilage (C6) to the carina (T4/5).",
        function:
          "Conducts air to and from the lungs; its cartilage rings prevent collapse while the posterior membrane allows food passage during swallowing.",
        bloodSupply:
          "Inferior thyroid and bronchial arteries.",
        nerveSupply:
          "Vagus nerve (parasympathetic secretion and bronchoconstriction) and sympathetic fibers (bronchodilation).",
        clinicalImportance:
          "Tracheostomy is performed at levels 2–4 to secure an airway; foreign body aspiration preferentially enters the right main bronchus.",
        commonDiseases: [
          "Tracheitis",
          "Tracheal Stenosis",
          "Foreign Body Aspiration",
          "Tracheomalacia",
        ],
        relationships:
          "Lies anterior to the esophagus in the neck and superior mediastinum; bifurcates at the carina (T4–T5) into the right (more vertical) and left main bronchi.",
        imaging:
          "CT visualizes tracheal stenosis, tumors, and malacia; bronchoscopy allows direct visualization, biopsy, and foreign-body removal.",
        clinicalNote:
          "Emergency cricothyroidotomy provides a surgical airway at the cricothyroid membrane when orotracheal intubation is impossible.",
        histology:
          "C-shaped hyaline cartilage rings with a posterior smooth muscle (trachealis) wall; lined by pseudostratified ciliated columnar epithelium with goblet cells.",
      },
      {
        id: "bronchi",
        name: "Bronchi",
        latinName: "Bronchi",
        overview:
          "The conducting airways that branch from the tracheal bifurcation into the right and left main bronchi, then lobar, segmental, and subsegmental branches down to terminal bronchioles.",
        location: "Within the lungs, branching through the hilum into each lobe.",
        function:
          "Distribute air through 23 generations of branching to reach the respiratory zone; mucociliary clearance protects against pathogens.",
        bloodSupply:
          "Bronchial arteries from the aorta provide oxygenated blood to the airway walls.",
        nerveSupply:
          "Pulmonary plexus (vagal parasympathetic and sympathetic fibers).",
        clinicalImportance:
          "Asthma involves reversible bronchoconstriction; chronic bronchitis is defined by productive cough for ≥3 months over 2 consecutive years.",
        commonDiseases: [
          "Asthma",
          "Chronic Bronchitis",
          "Bronchiectasis",
          "Bronchogenic Carcinoma",
        ],
      },
      {
        id: "left-lung",
        name: "Left Lung",
        latinName: "Pulmo Sinister",
        weight: "~450 g",
        overview:
          "The left lung has two lobes — superior and inferior — separated by the oblique fissure, and features the cardiac notch to accommodate the heart's left ventricle.",
        location: "Left thoracic cavity, surrounding the heart laterally and posteriorly.",
        function:
          "Performs gas exchange via its alveolar surface; the left lung is slightly smaller than the right due to the heart's position.",
        bloodSupply:
          "Deoxygenated blood via the left pulmonary artery; oxygenated wall supply via the bronchial arteries.",
        nerveSupply:
          "Pulmonary plexus (vagal parasympathetic and sympathetic fibers); visceral pleura is insensitive.",
        clinicalImportance:
          "The left lung has 8 bronchopulmonary segments and is the typical site of aspiration in right-sided lying patients.",
        commonDiseases: [
          "Pneumonia",
          "Lung Cancer",
          "Pulmonary Embolism",
          "Tuberculosis",
        ],
        relationships:
          "Sits in the left pleural cavity with the heart in its cardiac notch and the aortic arch above; the left main bronchus and pulmonary vessels enter at the hilum.",
        imaging:
          "Chest X-ray is the first-line modality; CT evaluates nodules, masses, consolidation, and interstitial disease; PET-CT assesses metabolic activity.",
        clinicalNote:
          "The left lung has two lobes (superior and inferior) separated by the oblique fissure, and is smaller than the right to accommodate the heart.",
        histology:
          "The bronchial tree branches 23 times to reach alveolar ducts and sacs; the visceral pleura of mesothelium and connective tissue covers its surface.",
      },
      {
        id: "right-lung",
        name: "Right Lung",
        latinName: "Pulmo Dexter",
        weight: "~500 g",
        overview:
          "The larger of the two lungs, with three lobes — superior, middle, and inferior — divided by horizontal and oblique fissures, and 10 bronchopulmonary segments.",
        location: "Right thoracic cavity.",
        function:
          "Provides the larger share of gas exchange; the right main bronchus is shorter, wider, and more vertical, predisposing to aspiration.",
        bloodSupply:
          "Right pulmonary artery (functional) and bronchial arteries (nutritive).",
        nerveSupply:
          "Right pulmonary plexus surrounding the right main bronchus.",
        clinicalImportance:
          "Aspirated material and inhaled foreign bodies preferentially lodge in the right lower lobe due to airway geometry.",
        commonDiseases: [
          "Pneumonia",
          "Aspiration Pneumonitis",
          "Mesothelioma",
          "Pulmonary Edema",
        ],
        relationships:
          "Sits in the right pleural cavity; the right main bronchus is shorter, wider, and more vertical than the left — favoring aspiration of foreign material.",
        imaging:
          "Chest X-ray and CT are the mainstays; bedside ultrasound detects pleural effusion and pneumothorax (BLUE protocol).",
        clinicalNote:
          "Aspirated material and inhaled foreign bodies preferentially lodge in the right lower lobe bronchus due to its vertical geometry.",
        histology:
          "Three lobes (superior, middle, inferior) divided by horizontal and oblique fissures, with 10 bronchopulmonary segments each with its own segmental bronchus and artery.",
      },
      {
        id: "alveoli",
        name: "Alveoli",
        latinName: "Alveoli Pulmonis",
        overview:
          "Thin-walled, cup-shaped sacs (~0.2 mm diameter) where gas exchange occurs. Their walls are lined by type I pneumocytes for diffusion, type II pneumocytes producing surfactant, and alveolar macrophages.",
        location: "Terminal ends of the respiratory bronchioles and alveolar ducts.",
        function:
          "Provide an enormous surface (~70 m²) and an ultrathin blood–air barrier for rapid oxygen and CO₂ exchange.",
        bloodSupply:
          "Dense capillary networks from the pulmonary arteries.",
        nerveSupply:
          "Minimally innervated; response is via local chemical and mechanical signals rather than direct nerves.",
        clinicalImportance:
          "Surfactant deficiency causes neonatal respiratory distress syndrome; alveolar destruction is the hallmark of emphysema.",
        commonDiseases: [
          "Emphysema",
          "Neonatal Respiratory Distress Syndrome",
          "Acute Respiratory Distress Syndrome",
          "Pulmonary Fibrosis",
        ],
        relationships:
          "Terminal air spaces wrapped in dense pulmonary capillary networks; the blood–air barrier of type I pneumocyte, fused basement membrane, and capillary endothelium is only 0.2–2.5 µm thick.",
        imaging:
          "High-resolution CT shows the 'honeycomb' pattern of pulmonary fibrosis and the hyperlucency of emphysematous destruction.",
        clinicalNote:
          "Surfactant deficiency in premature infants causes neonatal respiratory distress syndrome; exogenous surfactant replacement is lifesaving.",
        histology:
          "Type I pneumocytes (gas exchange), type II pneumocytes (surfactant production), and alveolar macrophages (phagocytosis) line the ~0.2 mm cup-shaped sacs.",
      },
      {
        id: "diaphragm",
        name: "Diaphragm",
        latinName: "Diaphragma",
        weight: "~250 g",
        overview:
          "The dome-shaped primary muscle of inspiration, separating the thoracic and abdominal cavities. It has peripheral muscular fibers converging on a central tendon.",
        location: "Between the thoracic and abdominal cavities, attaching to the lower ribs, sternum, and lumbar vertebrae.",
        function:
          "Contracts to flatten and descend, increasing thoracic volume during inspiration; also contributes to esophageal and venous return functions.",
        bloodSupply:
          "Pericardiophrenic, musculophrenic, superior phrenic, and inferior phrenic arteries.",
        nerveSupply:
          "Right and left phrenic nerves (C3–C5) — 'C3, 4, 5 keeps the diaphragm alive'.",
        clinicalImportance:
          "Diaphragmatic paralysis from phrenic nerve injury causes paradoxical respiration and breathlessness, especially when supine.",
        commonDiseases: [
          "Diaphragmatic Hernia",
          "Phrenic Nerve Palsy",
          "Eventration",
          "Hiccups (Singultus)",
        ],
      },
      {
        id: "pleura",
        name: "Pleura",
        latinName: "Pleura",
        overview:
          "A thin serous membrane forming a closed sac around each lung, with a visceral layer adherent to the lung and a parietal layer lining the thoracic wall; the potential pleural space contains a few milliliters of lubricating fluid.",
        location: "Lining the thoracic cavity and covering each lung.",
        function:
          "Reduces friction during respiration and couples lung expansion to chest wall movement via surface tension of pleural fluid.",
        bloodSupply:
          "Parietal pleura from intercostal and internal thoracic arteries; visceral pleura from bronchial arteries.",
        nerveSupply:
          "Parietal pleura is pain-sensitive via intercostal and phrenic nerves; visceral pleura is insensitive.",
        clinicalImportance:
          "Air in the pleural space (pneumothorax) uncouples the lung from the chest wall and causes collapse; tension pneumothorax is life-threatening.",
        commonDiseases: [
          "Pneumothorax",
          "Pleural Effusion",
          "Pleuritis",
          "Mesothelioma",
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    id: "digestive",
    name: "Digestive System",
    latinName: "Systema Digestorium",
    icon: "Stomach",
    color: "#d35400",
    tagline: "A 9-meter journey from bite to building block.",
    description:
      "The digestive system breaks food into absorbable molecules through a continuous tube from mouth to anus, aided by accessory organs including the liver, gallbladder, and pancreas. It also houses the gut microbiome and a major portion of the immune system.",
    funFact:
      "The gut microbiome contains roughly 100 trillion microbes — about 10 times more bacterial cells than you have human cells.",
    stats: [
      { label: "GI Tract Length", value: "~9 m" },
      { label: "Transit Time", value: "24–72 h" },
      { label: "Surface Area", value: "~32 m²" },
      { label: "Gut Microbes", value: "~100 trillion" },
    ],
    layers: ["Skin", "Subcutaneous tissue", "Muscle", "Peritoneum", "GI tract/Viscera"],
    imagingModality: "CT",
    organs: [
      {
        id: "tongue",
        name: "Tongue",
        latinName: "Lingua",
        weight: "~70 g",
        overview:
          "A muscular hydrostat covered in mucosa, anchored to the floor of the mouth and containing taste buds within papillae. Its intrinsic and extrinsic muscles allow remarkable dexterity.",
        location: "Oral cavity, occupying the floor of the mouth.",
        function:
          "Manipulates food during mastication, forms the bolus, initiates swallowing, houses taste receptors, and shapes speech.",
        bloodSupply:
          "Lingual artery (a branch of the external carotid) with venous drainage to the lingual vein.",
        nerveSupply:
          "Hypoglossal nerve (CN XII) for motor; lingual nerve (CN V3) for general sensation; chorda tympani (CN VII) for taste anteriorly; glossopharyngeal (CN IX) posteriorly.",
        clinicalImportance:
          "Hypoglossal palsy causes the tongue to deviate TOWARD the affected side on protrusion; oral cancer often arises on the lateral tongue.",
        commonDiseases: [
          "Oral Squamous Cell Carcinoma",
          "Geographic Tongue",
          "Glossitis",
          "Hypoglossal Palsy",
        ],
      },
      {
        id: "esophagus",
        name: "Esophagus",
        latinName: "Esophagus",
        weight: "~50 g",
        overview:
          "A 25-cm muscular tube lined by non-keratinized stratified squamous epithelium that conveys food from the pharynx to the stomach using peristalsis.",
        location: "Posterior mediastinum, from the pharynx (C6) through the diaphragm to the cardia of the stomach (T11).",
        function:
          "Transports the food bolus to the stomach via primary and secondary peristaltic waves; the lower esophageal sphincter prevents reflux.",
        bloodSupply:
          "Inferior thyroid, esophageal, bronchial, left gastric, and left phrenic arteries — segmental supply with poor anastomosis.",
        nerveSupply:
          "Vagus nerve and sympathetic trunks forming the esophageal plexus.",
        clinicalImportance:
          "Chronic acid reflux (GERD) can cause Barrett's esophagus, a premalignant metaplasia predisposing to adenocarcinoma.",
        commonDiseases: [
          "GERD",
          "Barrett's Esophagus",
          "Esophageal Cancer",
          "Achalasia",
        ],
      },
      {
        id: "stomach",
        name: "Stomach",
        latinName: "Gaster",
        weight: "~150 g empty",
        overview:
          "A J-shaped reservoir divided into cardia, fundus, body, antrum, and pylorus. Its glandular mucosa contains parietal, chief, G, and mucous cells producing acid, pepsin, gastrin, and mucus.",
        location: "Left upper quadrant, beneath the left hemidiaphragm.",
        function:
          "Stores and mechanically churns food, mixes it with gastric acid and pepsin to begin protein digestion, and regulates release into the duodenum.",
        bloodSupply:
          "Left and right gastric, left and right gastro-omental, and short gastric arteries — all derived from the celiac trunk.",
        nerveSupply:
          "Anterior and posterior vagal trunks (parasympathetic) and sympathetic fibers from the celiac plexus.",
        clinicalImportance:
          "Helicobacter pylori infection causes chronic gastritis and peptic ulcer disease and is a Class I gastric carcinogen.",
        commonDiseases: [
          "Peptic Ulcer Disease",
          "Gastric Cancer",
          "Gastritis",
          "Gastroesophageal Reflux Disease",
        ],
        relationships:
          "Lies in the left upper quadrant connecting the esophagus at the cardia to the duodenum at the pylorus; the lesser sac lies posterior to it and the greater omentum hangs from its greater curvature.",
        imaging:
          "Upper endoscopy directly visualizes the mucosa for ulcers and tumors; CT evaluates tumor staging, perforation, and obstruction.",
        clinicalNote:
          "Coffee-ground emesis suggests upper GI bleeding requiring urgent endoscopy; a rigid abdomen signals perforation with free air.",
        histology:
          "Mucosa with gastric pits leading to glands containing parietal (acid/intrinsic factor), chief (pepsinogen), G (gastrin), and mucous cells; rugae allow expansion.",
      },
      {
        id: "liver",
        name: "Liver",
        latinName: "Hepar",
        weight: "~1.5 kg",
        overview:
          "The largest internal organ and largest gland in the body, organized into hexagonal lobules around central veins. It performs over 500 functions and receives both portal venous and hepatic arterial blood.",
        location: "Right upper quadrant, beneath the right hemidiaphragm.",
        function:
          "Metabolizes carbohydrates, lipids, and proteins; synthesizes plasma proteins and clotting factors; detoxifies drugs and toxins; stores glycogen, vitamins, and iron; and produces bile.",
        bloodSupply:
          "Dual supply — ~75% portal vein (nutrient-rich) and ~25% hepatic artery (oxygen-rich); drained by hepatic veins to the IVC.",
        nerveSupply:
          "Hepatic nerve plexus from the celiac plexus and vagus nerve.",
        clinicalImportance:
          "Cirrhosis — end-stage fibrosis — causes portal hypertension, ascites, varices, and hepatic encephalopathy.",
        commonDiseases: [
          "Cirrhosis",
          "Hepatitis",
          "Hepatocellular Carcinoma",
          "Non-Alcoholic Fatty Liver Disease",
        ],
        relationships:
          "Occupies the right upper quadrant beneath the diaphragm; the portal triad (portal vein, hepatic artery, bile duct) enters at the porta hepatis, and hepatic veins drain to the IVC.",
        imaging:
          "Ultrasound is first-line for liver lesions; contrast CT and MRI characterize masses; elastography quantifies fibrosis non-invasively.",
        clinicalNote:
          "The liver's dual blood supply (portal vein and hepatic artery) makes it relatively resistant to ischemia but susceptible to portal hypertension in cirrhosis.",
        histology:
          "Hexagonal lobules with a central vein and peripheral portal triads; plates of hepatocytes separated by sinusoids lined by fenestrated endothelium and Kupffer cells.",
      },
      {
        id: "gallbladder",
        name: "Gallbladder",
        latinName: "Vesica Biliaris",
        weight: "~50 g",
        overview:
          "A pear-shaped reservoir lying under the liver that stores and concentrates bile produced by the liver. It releases bile into the duodenum via the cystic and common bile ducts in response to cholecystokinin.",
        location: "Inferior surface of the liver, in the gallbladder fossa.",
        function:
          "Concentrates bile up to 10-fold and ejects it into the duodenum to emulsify dietary fats.",
        bloodSupply:
          "Cystic artery, typically a branch of the right hepatic artery.",
        nerveSupply:
          "Celiac plexus (sympathetic), vagus (parasympathetic), and right phrenic nerve (sensory, explaining referred shoulder pain).",
        clinicalImportance:
          "Gallstones may obstruct the cystic duct (biliary colic, cholecystitis) or common bile duct (obstructive jaundice, pancreatitis).",
        commonDiseases: [
          "Cholelithiasis",
          "Acute Cholecystitis",
          "Biliary Colic",
          "Gallstone Pancreatitis",
        ],
      },
      {
        id: "pancreas",
        name: "Pancreas",
        latinName: "Pancreas",
        weight: "~100 g",
        overview:
          "A retroperitoneal gland with dual exocrine and endocrine functions. Acinar cells secrete digestive enzymes, while the islets of Langerhans secrete insulin, glucagon, and other hormones.",
        location: "Retroperitoneum, crossing L1–L2, behind the stomach.",
        function:
          "Exocrine: secretes trypsinogen, lipase, amylase, and bicarbonate into the duodenum. Endocrine: regulates blood glucose via insulin (β-cells) and glucagon (α-cells).",
        bloodSupply:
          "Splenic, pancreaticoduodenal, and gastroduodenal arteries, all branches of the celiac trunk and SMA.",
        nerveSupply:
          "Celiac and superior mesenteric plexuses; vagal parasympathetic input.",
        clinicalImportance:
          "Acute pancreatitis is most commonly caused by gallstones and alcohol; chronic pancreatitis leads to endocrine and exocrine insufficiency.",
        commonDiseases: [
          "Acute Pancreatitis",
          "Pancreatic Cancer",
          "Chronic Pancreatitis",
          "Diabetes Mellitus",
        ],
        relationships:
          "Retroperitoneal, crossing L1–L2 behind the stomach; the head nestles in the C-loop of the duodenum and the tail reaches the splenic hilum.",
        imaging:
          "Contrast CT is the modality of choice for pancreatitis and cancer; MRCP visualizes the pancreatic and biliary ducts non-invasively.",
        clinicalNote:
          "The pancreas contains the islets of Langerhans whose β-cells secrete insulin — their autoimmune destruction causes type 1 diabetes.",
        histology:
          "Exocrine acini (enzyme-secreting) clustered around ducts; endocrine islets of Langerhans scattered among acini with α, β, δ, and PP cells.",
        quizRef: 3,
      },
      {
        id: "small-intestine",
        name: "Small Intestine",
        latinName: "Intestinum Tenue",
        weight: "~1 kg",
        overview:
          "A 6–7 m convoluted tube divided into duodenum, jejunum, and ileum. Its inner surface is amplified by circular folds, villi, and microvilli to reach ~32 m² of absorptive area.",
        location: "Central and lower abdomen, framed by the large intestine.",
        function:
          "Completes digestion using pancreatic enzymes and bile; absorbs ~90% of nutrients, vitamins, minerals, and water.",
        bloodSupply:
          "Superior mesenteric artery (most); the duodenum also receives supply from the celiac trunk via the pancreaticoduodenal arcades.",
        nerveSupply:
          "Vagus (parasympathetic) and superior mesenteric plexus (sympathetic).",
        clinicalImportance:
          "Celiac disease, Crohn disease (especially terminal ileum), and small bowel obstruction are common clinically significant disorders.",
        commonDiseases: [
          "Crohn Disease",
          "Celiac Disease",
          "Small Bowel Obstruction",
          "Malabsorption Syndromes",
        ],
        relationships:
          "Coiled in the central abdomen between the stomach (at the duodenum) and the cecum (at the ileocecal valve); the mesentery suspends the jejunum and ileum.",
        imaging:
          "CT enterography evaluates Crohn disease, obstruction, and tumors; capsule endoscopy visualizes the small-bowel mucosa non-invasively.",
        clinicalNote:
          "The ligament of Treitz marks the duodenojejunal flexure — the anatomic boundary between upper and lower GI bleeding.",
        histology:
          "Mucosa with villi and microvilli amplifying surface area ~600-fold; crypts of Lieberkühn contain stem cells, Paneth cells, and enteroendocrine cells.",
      },
      {
        id: "large-intestine",
        name: "Large Intestine",
        latinName: "Intestinum Crassum",
        weight: "~1.5 kg (with contents)",
        overview:
          "A 1.5 m tube comprising cecum, appendix, ascending, transverse, descending, sigmoid colon, rectum, and anal canal. The colonic wall features haustra, teniae coli, and epiploic appendages.",
        location: "Framing the abdomen, from the right iliac fossa around to the rectum.",
        function:
          "Absorbs water and electrolytes, houses gut microbiota that ferment undigested carbohydrates into short-chain fatty acids, and forms and stores feces.",
        bloodSupply:
          "Superior mesenteric (right and transverse) and inferior mesenteric (descending and sigmoid) arteries; watershed area at the splenic flexure.",
        nerveSupply:
          "Vagus (parasympathetic proximal); pelvic splanchnic nerves (parasympathetic distal); sympathetic from superior and inferior mesenteric plexuses.",
        clinicalImportance:
          "The splenic flexure is vulnerable to ischemic colitis; colorectal cancer is one of the most common and screenable cancers.",
        commonDiseases: [
          "Colorectal Cancer",
          "Ulcerative Colitis",
          "Appendicitis",
          "Diverticulitis",
        ],
        relationships:
          "Frames the abdomen from the right iliac fossa (cecum) around to the rectum; the transverse and sigmoid colons are intraperitoneal while the ascending and descending are secondarily retroperitoneal.",
        imaging:
          "Colonoscopy directly visualizes the mucosa for screening and biopsy; CT colonography is a non-invasive alternative for cancer screening.",
        clinicalNote:
          "The splenic flexure is a watershed area vulnerable to ischemic colitis due to its limited collateral blood supply.",
        histology:
          "Mucosa with straight crypts (no villi) and abundant goblet cells over lamina propria with lymphoid tissue; teniae coli, haustra, and epiploic appendages characterize the colon.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    id: "urinary",
    name: "Urinary System",
    latinName: "Systema Urinarium",
    icon: "Droplet",
    color: "#1abc9c",
    tagline: "The body's chemical filtration plant.",
    description:
      "The urinary system filters blood to remove waste and excess fluid, regulates electrolyte and acid–base balance, and produces urine for excretion. The kidneys also secrete renin and erythropoietin, linking urinary function to blood pressure and red cell production.",
    funFact:
      "The two kidneys filter about 180 liters of plasma per day, yet you excrete only ~1.5 liters of urine — 99% is reabsorbed.",
    stats: [
      { label: "Nephrons / Kidney", value: "~1 million" },
      { label: "Filtrate / Day", value: "~180 L" },
      { label: "Urine / Day", value: "~1.5 L" },
      { label: "Renal Blood Flow", value: "~1.1 L/min" },
    ],
    layers: ["Skin", "Subcutaneous tissue", "Muscle", "Perirenal fascia", "Kidney parenchyma"],
    imagingModality: "Ultrasound",
    organs: [
      {
        id: "kidneys",
        name: "Kidneys",
        latinName: "Renes",
        weight: "~150 g each",
        overview:
          "Paired bean-shaped retroperitoneal organs containing about one million nephrons each. They are organized into an outer cortex, inner medulla with pyramids, and a central renal pelvis.",
        location: "Posterior abdominal wall, retroperitoneal, at level T12–L3, with the right kidney slightly lower due to the liver.",
        function:
          "Filter blood to form urine, regulate fluid and electrolyte balance and acid–base status, and secrete renin and erythropoietin.",
        bloodSupply:
          "Renal arteries from the aorta, dividing into segmental, interlobar, arcuate, and interlobular arteries supplying the nephrons.",
        nerveSupply:
          "Renal plexus from the sympathetic trunk (T10–L1) regulates renin release and vascular tone.",
        clinicalImportance:
          "Chronic kidney disease is silent until late; bilateral renal artery stenosis can cause refractory hypertension.",
        commonDiseases: [
          "Chronic Kidney Disease",
          "Acute Kidney Injury",
          "Nephrolithiasis",
          "Glomerulonephritis",
        ],
        relationships:
          "Retroperitoneal at T12–L3 with the adrenal glands superomedially; the liver above the right kidney makes it lower, and the spleen sits above the left.",
        imaging:
          "Ultrasound is first-line for hydronephrosis and renal masses; CT urography is the gold standard for stones and tumors; MRI for staging and contrast allergy.",
        clinicalNote:
          "Costovertebral angle tenderness is a clinical sign of pyelonephritis; a palpable flank mass may suggest polycystic kidney disease or tumor.",
        histology:
          "Outer cortex with glomeruli and convoluted tubules, inner medulla with loops of Henle and collecting ducts arranged in pyramids; the nephron is the functional unit.",
      },
      {
        id: "ureters",
        name: "Ureters",
        latinName: "Ureteres",
        weight: "~30 g",
        overview:
          "Two 25–30 cm muscular tubes transporting urine from the renal pelvis to the bladder via peristalsis. Three narrow points are clinically important sites of stone impaction.",
        location: "Retroperitoneum, descending along the psoas muscle into the pelvis.",
        function:
          "Propel urine from kidneys to bladder by peristaltic contractions of smooth muscle layers.",
        bloodSupply:
          "Segmental supply from renal, gonadal, common iliac, and inferior vesical arteries.",
        nerveSupply:
          "Renal, aortic, and pelvic plexuses — visceral afferents follow sympathetic paths to T11–L2.",
        clinicalImportance:
          "Ureteric stones cause severe colicky pain radiating from loin to groin; the pain is referred to the T11–L2 dermatomes.",
        commonDiseases: [
          "Ureteric Calculus",
          "Ureteral Stricture",
          "Ureteral Cancer",
          "Vesicoureteral Reflux",
        ],
      },
      {
        id: "bladder",
        name: "Urinary Bladder",
        latinName: "Vesica Urinaria",
        weight: "~50 g (empty)",
        overview:
          "A hollow muscular reservoir with a capacity of ~400–600 mL. Its wall features the detrusor muscle and an internal trigone, and it is supported by the pelvic floor.",
        location: "Retropubic space of the lesser pelvis, behind the pubic symphysis.",
        function:
          "Stores urine and contracts during micturition; the detrusor and sphincter coordination is governed by sacral reflexes and cortical control.",
        bloodSupply:
          "Superior and inferior vesical arteries from the internal iliac arteries.",
        nerveSupply:
          "Pelvic splanchnic nerves (S2–S4, parasympathetic) cause detrusor contraction; pudendal nerve controls the external sphincter.",
        clinicalImportance:
          "Urinary retention in men is usually due to benign prostatic hyperplasia; cystoscopy evaluates hematuria and bladder tumors.",
        commonDiseases: [
          "Urinary Tract Infection",
          "Bladder Cancer",
          "Urinary Incontinence",
          "Benign Prostatic Hyperplasia",
        ],
        relationships:
          "Sits behind the pubic symphysis in the retropubic space; in males the prostate and seminal vesicles lie inferior and the rectum posterior, in females the uterus and vagina lie posterior.",
        imaging:
          "Ultrasound estimates post-void residual and detects stones; CT evaluates hematuria and bladder tumors; cystoscopy directly visualizes the mucosa.",
        clinicalNote:
          "Suprapubic distension with inability to void in an elderly man suggests urinary retention from benign prostatic hyperplasia, requiring catheterization.",
        histology:
          "Transitional epithelium (urothelium) overlying a distensible lamina propria and thick detrusor smooth muscle arranged in inner longitudinal, middle circular, and outer longitudinal layers.",
      },
      {
        id: "urethra",
        name: "Urethra",
        latinName: "Urethra",
        overview:
          "The tube conveying urine from the bladder to the exterior. In males it averages 20 cm (prostatic, membranous, spongy parts) and serves both urinary and reproductive functions; in females it is ~4 cm.",
        location: "From the internal urethral meatus of the bladder to the external urethral orifice.",
        function:
          "Conducts urine during micturition; in males also transports semen during ejaculation.",
        bloodSupply:
          "Inferior vesical, middle rectal, and internal pudendal arteries.",
        nerveSupply:
          "Pudendal nerve (somatic, external sphincter); pelvic plexus (autonomic).",
        clinicalImportance:
          "The female urethra's short length predisposes to urinary tract infections; male membranous urethra is at risk in pelvic fractures.",
        commonDiseases: [
          "Urethritis",
          "Urethral Stricture",
          "Urethral Trauma",
          "Urethral Caruncle",
        ],
      },
      {
        id: "nephrons",
        name: "Nephrons",
        latinName: "Nephron",
        overview:
          "The functional filtering units of the kidney — each kidney contains about one million. Each nephron consists of a renal corpuscle (glomerulus and Bowman's capsule) and a renal tubule (proximal, loop of Henle, distal, collecting duct).",
        location: "Throughout the renal cortex (corpuscles) and medulla (loops and collecting ducts).",
        function:
          "Filter plasma, reabsorb nutrients and water, and secrete waste to form urine; regulate blood pressure, osmolality, and acid–base balance.",
        bloodSupply:
          "Afferent arteriole feeds the glomerular capillary tuft; efferent arteriole forms peritubular capillaries and vasa recta.",
        nerveSupply:
          "Sympathetic renal nerves regulate renin release and arteriolar tone.",
        clinicalImportance:
          "Diabetic nephropathy begins with glomerular hyperfiltration and progresses to proteinuria and chronic kidney disease.",
        commonDiseases: [
          "Diabetic Nephropathy",
          "Glomerulonephritis",
          "Acute Tubular Necrosis",
          "Nephrotic Syndrome",
        ],
        relationships:
          "Span the cortex (renal corpuscle and convoluted tubules) and medulla (loop of Henle and collecting duct); each kidney contains about one million nephrons.",
        imaging:
          "Cannot be directly imaged due to microscopic size; renal biopsy with light, immunofluorescence, and electron microscopy assesses glomerular pathology.",
        clinicalNote:
          "ACE inhibitors reduce intraglomerular pressure by dilating the efferent arteriole, slowing progression of proteinuric kidney disease.",
        histology:
          "Renal corpuscle (glomerular capillary tuft within Bowman's capsule) plus proximal convoluted tubule, loop of Henle, distal convoluted tubule, and collecting duct.",
      },
      {
        id: "renal-cortex",
        name: "Renal Cortex",
        latinName: "Cortex Renalis",
        overview:
          "The outer granular layer of the kidney containing all renal corpuscles and the convoluted tubules. It extends between the medullary pyramids as the columns of Bertin.",
        location: "Outer third of the kidney, beneath the fibrous renal capsule.",
        function:
          "Houses the glomeruli where plasma filtration occurs and the proximal/distal convoluted tubules where the bulk of reabsorption takes place.",
        bloodSupply:
          "Interlobular arteries branching from the arcuate arteries, supplying the afferent arterioles of each glomerulus.",
        nerveSupply:
          "Renal sympathetic nerves (T10–L1).",
        clinicalImportance:
          "Cortical necrosis from severe ischemia (e.g., post-partum hemorrhage) causes acute kidney injury that may be irreversible.",
        commonDiseases: [
          "Renal Cortical Necrosis",
          "Acute Interstitial Nephritis",
          "Renal Cell Carcinoma",
          "Cortical Cyst",
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    id: "endocrine",
    name: "Endocrine System",
    latinName: "Systema Endocrinum",
    icon: "Activity",
    color: "#9b59b6",
    tagline: "Hormones: the body's slow but powerful messengers.",
    description:
      "The endocrine system is a network of ductless glands that secrete hormones into the bloodstream to regulate metabolism, growth, reproduction, and homeostasis. It works in concert with the nervous system to maintain long-term balance.",
    funFact:
      "The pituitary gland — the master gland controlling most others — is only the size of a pea and weighs about 0.5 g.",
    stats: [
      { label: "Major Glands", value: "~10" },
      { label: "Hormones", value: "50+" },
      { label: "Master Gland", value: "Pituitary" },
      { label: "Largest Gland", value: "Thyroid" },
    ],
    layers: ["Skin", "Subcutaneous tissue", "Muscle/Deep fascia", "Gland capsule", "Glandular tissue"],
    imagingModality: "MRI",
    organs: [
      {
        id: "pituitary",
        name: "Pituitary Gland",
        latinName: "Hypophysis",
        weight: "~0.5 g",
        overview:
          "The 'master gland' suspended from the hypothalamus by the infundibulum and housed in the sella turcica. It has an anterior adenohypophysis and a posterior neurohypophysis with distinct embryological origins.",
        location: "Sella turcica of the sphenoid bone, just behind the optic chiasm.",
        function:
          "Anterior lobe secretes GH, ACTH, TSH, FSH, LH, and PRL. Posterior lobe releases oxytocin and ADH synthesized in the hypothalamus.",
        bloodSupply:
          "Superior, middle, and inferior hypophyseal arteries from the internal carotid; the hypophyseal portal system delivers hypothalamic releasing factors.",
        nerveSupply:
          "Posterior pituitary is supplied by hypothalamo-hypophyseal nerve tract from the supraoptic and paraventricular nuclei.",
        clinicalImportance:
          "Pituitary adenomas compressing the optic chiasm cause bitemporal hemianopia; prolactinomas are the most common subtype.",
        commonDiseases: [
          "Pituitary Adenoma",
          "Acromegaly",
          "Prolactinoma",
          "Sheehan Syndrome",
        ],
      },
      {
        id: "thyroid",
        name: "Thyroid Gland",
        latinName: "Glandula Thyroidea",
        weight: "~25 g",
        overview:
          "A butterfly-shaped endocrine gland with two lateral lobes connected by an isthmus. Its follicular cells produce T3 and T4 from iodinated tyrosine, while parafollicular C cells produce calcitonin.",
        location: "Anterior neck, at levels C5–T1, anterior to the trachea and deep to the sternothyroid muscle.",
        function:
          "Regulates basal metabolic rate via T3 and T4, influences growth and development, and lowers blood calcium via calcitonin.",
        bloodSupply:
          "Superior (from external carotid) and inferior (from subclavian) thyroid arteries; rarely a thyroid ima artery.",
        nerveSupply:
          "Sympathetic fibers from the superior and middle cervical ganglia.",
        clinicalImportance:
          "The recurrent laryngeal nerve runs close to the inferior thyroid artery and is at risk during thyroidectomy, causing voice changes.",
        commonDiseases: [
          "Hyperthyroidism",
          "Hypothyroidism",
          "Hashimoto Thyroiditis",
          "Thyroid Cancer",
        ],
      },
      {
        id: "parathyroid",
        name: "Parathyroid Glands",
        latinName: "Glandulae Parathyroideae",
        weight: "~0.04 g",
        overview:
          "Usually four small glands (two superior, two inferior) embedded in the posterior thyroid capsule. Chief cells secrete parathyroid hormone (PTH), the master regulator of blood calcium.",
        location: "Posterior surface of the thyroid lobes, typically two on each side.",
        function:
          "PTH raises blood calcium by stimulating osteoclasts, increasing renal calcium reabsorption, and activating vitamin D for intestinal absorption.",
        bloodSupply:
          "Inferior thyroid artery is the dominant supply; superior thyroid artery contributes variably.",
        nerveSupply:
          "Sympathetic vasomotor fibers from the cervical ganglia.",
        clinicalImportance:
          "Accidental removal during thyroidectomy causes hypocalcemia with tetany and perioral tingling — Chvostek and Trousseau signs.",
        commonDiseases: [
          "Hyperparathyroidism",
          "Hypoparathyroidism",
          "Parathyroid Adenoma",
          "Hypocalcemia",
        ],
      },
      {
        id: "adrenal-glands",
        name: "Adrenal Glands",
        latinName: "Glandulae Suprarenales",
        weight: "~5 g each",
        overview:
          "Paired triangular glands sitting atop each kidney, comprising an outer cortex (zona glomerulosa, fasciculata, reticularis) and an inner medulla derived from neural crest cells.",
        location: "Superomedial to each kidney, in the retroperitoneum.",
        function:
          "Cortex secretes mineralocorticoids (aldosterone), glucocorticoids (cortisol), and androgens. Medulla secretes adrenaline and noradrenaline as part of the sympathetic response.",
        bloodSupply:
          "Superior, middle, and inferior suprarenal arteries from the inferior phrenic, aorta, and renal artery; a single central vein drains to the IVC (right) or renal vein (left).",
        nerveSupply:
          "Preganglionic sympathetic fibers from the splanchnic nerves directly innervate the chromaffin cells of the medulla.",
        clinicalImportance:
          "Pheochromocytoma causes episodic severe hypertension; Cushing syndrome results from chronic cortisol excess.",
        commonDiseases: [
          "Cushing Syndrome",
          "Addison Disease",
          "Pheochromocytoma",
          "Congenital Adrenal Hyperplasia",
        ],
      },
      {
        id: "pancreatic-islets",
        name: "Pancreatic Islets",
        latinName: "Insulae Pancreaticae",
        weight: "~1–2 g total",
        overview:
          "The endocrine portion of the pancreas — clusters of ~1 million islets of Langerhans scattered among the exocrine acini, comprising 1–2% of pancreatic mass.",
        location: "Distributed throughout the pancreas, more concentrated in the tail.",
        function:
          "β-cells secrete insulin (lowers blood glucose), α-cells glucagon (raises it), δ-cells somatostatin, and PP-cells pancreatic polypeptide.",
        bloodSupply:
          "Splenic, pancreaticoduodenal, and gastroduodenal arteries.",
        nerveSupply:
          "Sympathetic and parasympathetic (vagal) fibers from the celiac and superior mesenteric plexuses.",
        clinicalImportance:
          "Autoimmune destruction of β-cells causes type 1 diabetes; insulin resistance with β-cell dysfunction underlies type 2 diabetes.",
        commonDiseases: [
          "Type 1 Diabetes Mellitus",
          "Type 2 Diabetes Mellitus",
          "Insulinoma",
          "Diabetic Ketoacidosis",
        ],
        relationships:
          "Scattered throughout the pancreas, more concentrated in the tail; their β-cells secrete insulin directly into the capillaries in response to blood glucose.",
        imaging:
          "Most islets are too small to image; functional PET with radiolabeled tracers and selective arterial calcium stimulation localize insulinomas.",
        clinicalNote:
          "β-cell destruction causes type 1 diabetes; insulinoma presents with Whipple triad — fasting hypoglycemia, symptoms, and relief with glucose.",
        histology:
          "Pale-staining clusters of endocrine cells surrounded by a fenestrated capillary network; β-cells dominate (~70%), with α (~20%), δ, and PP cells.",
        quizRef: 3,
      },
      {
        id: "pineal",
        name: "Pineal Gland",
        latinName: "Glandula Pinealis",
        weight: "~0.15 g",
        overview:
          "A small neuroendocrine gland shaped like a pinecone, named for its appearance. It is a circumventricular organ outside the blood–brain barrier and produces melatonin in response to darkness.",
        location: "Epithalamus, midline, posterior to the third ventricle near the corpora quadrigemina.",
        function:
          "Secretes melatonin, regulating circadian rhythms and seasonal reproductive functions in some species.",
        bloodSupply:
          "Branches of the posterior cerebral artery.",
        nerveSupply:
          "Sympathetic fibers from the superior cervical ganglion via the nervi conarii relay light-dark information.",
        clinicalImportance:
          "Pineal region tumors can compress the superior colliculus causing Parinaud syndrome (paralysis of upward gaze).",
        commonDiseases: [
          "Pinealoma",
          "Parinaud Syndrome",
          "Pineal Cyst",
          "Circadian Rhythm Disorders",
        ],
      },
      {
        id: "thymus-endocrine",
        name: "Thymus",
        latinName: "Thymus",
        weight: "~25 g (adult)",
        overview:
          "A bilobed lymphoepithelial gland largest in childhood and involuting after puberty. It is both a primary lymphoid organ and an endocrine gland through its secretion of thymopoietin and thymulin.",
        location: "Anterosuperior mediastinum, behind the sternum and anterior to the great vessels.",
        function:
          "Site of T-lymphocyte maturation; thymic hormones promote T-cell differentiation and self-tolerance.",
        bloodSupply:
          "Inferior thyroid, internal thoracic, and pericardiophrenic arteries.",
        nerveSupply:
          "Vagus and sympathetic fibers from the cervical ganglia.",
        clinicalImportance:
          "Myasthenia gravis is associated with thymic hyperplasia or thymoma; thymectomy can improve symptoms.",
        commonDiseases: [
          "Myasthenia Gravis",
          "Thymoma",
          "DiGeorge Syndrome",
          "Thymic Hyperplasia",
        ],
      },
      {
        id: "gonads",
        name: "Gonads",
        latinName: "Glandulae Genitales",
        overview:
          "The primary reproductive organs — testes in males and ovaries in females — which serve dual exocrine (gametes) and endocrine (sex steroids) functions.",
        location: "Testes in the scrotum; ovaries in the lateral pelvic wall.",
        function:
          "Testes produce testosterone and sperm. Ovaries produce estrogen and progesterone and release oocytes in cyclic fashion.",
        bloodSupply:
          "Testicular/ovarian arteries from the aorta; venous drainage to the IVC (right) and renal vein (left).",
        nerveSupply:
          "Testicular/ovarian plexus from the aortic and renal plexuses; sympathetic T10–L1.",
        clinicalImportance:
          "Polycystic ovary syndrome is the leading cause of anovulatory infertility; testicular tumors often present as a painless scrotal mass.",
        commonDiseases: [
          "Polycystic Ovary Syndrome",
          "Testicular Cancer",
          "Ovarian Cancer",
          "Hypogonadism",
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    id: "lymphatic",
    name: "Lymphatic System",
    latinName: "Systema Lymphoideum",
    icon: "Shield",
    color: "#2ecc71",
    tagline: "The body's drainage and defense network.",
    description:
      "The lymphatic system returns interstitial fluid to the bloodstream, transports dietary lipids from the gut, and provides immune surveillance through a network of vessels, nodes, and lymphoid organs. It is the highway of adaptive immunity.",
    funFact:
      "You have about 600–700 lymph nodes — the smallest are barely a millimeter, and they collectively filter lymph from nearly every tissue.",
    stats: [
      { label: "Lymph Nodes", value: "~600–700" },
      { label: "Lymph / Day", value: "~3 L" },
      { label: "Largest Node Cluster", value: "Cervical" },
      { label: "Primary Lymphoid", value: "Thymus, Marrow" },
    ],
    layers: ["Skin", "Subcutaneous tissue", "Deep fascia", "Lymphoid tissue", "Lymph node medulla"],
    imagingModality: "MRI",
    organs: [
      {
        id: "spleen",
        name: "Spleen",
        latinName: "Splen",
        weight: "~150 g",
        overview:
          "The largest lymphoid organ, organized into red pulp (for red blood cell filtration) and white pulp (for immune responses). It is highly vascular and lies protected by ribs 9–11.",
        location: "Left upper quadrant, beneath ribs 9–11, deep to the stomach.",
        function:
          "Filters blood, removes aged or abnormal red cells and platelets, recycles iron, mounts immune responses to blood-borne pathogens, and stores a reservoir of blood.",
        bloodSupply:
          "Splenic artery from the celiac trunk; splenic vein joins the superior mesenteric vein to form the portal vein.",
        nerveSupply:
          "Celiac plexus (sympathetic vasomotor fibers).",
        clinicalImportance:
          "Splenic rupture from blunt trauma causes life-threatening intra-abdominal hemorrhage; post-splenectomy patients need vaccination against encapsulated organisms.",
        commonDiseases: [
          "Splenic Rupture",
          "Hypersplenism",
          "Splenomegaly",
          "Asplenia",
        ],
      },
      {
        id: "thymus-lymphatic",
        name: "Thymus",
        latinName: "Thymus",
        weight: "~25 g (adult)",
        overview:
          "A primary lymphoid organ and the site of T-cell maturation. It is largest relative to body size at birth and reaches its absolute peak around puberty, then gradually involutes into fat.",
        location: "Anterosuperior mediastinum, behind the sternum.",
        function:
          "Develops and selects immunocompetent, self-tolerant T-lymphocytes; thymic epithelial cells secrete thymopoietin and thymulin.",
        bloodSupply:
          "Inferior thyroid and internal thoracic arteries.",
        nerveSupply:
          "Vagus and sympathetic fibers.",
        clinicalImportance:
          "DiGeorge syndrome (22q11 deletion) causes thymic aplasia and T-cell deficiency; thymoma is associated with myasthenia gravis.",
        commonDiseases: [
          "Thymoma",
          "DiGeorge Syndrome",
          "Myasthenia Gravis",
          "Severe Combined Immunodeficiency",
        ],
      },
      {
        id: "lymph-nodes",
        name: "Lymph Nodes",
        latinName: "Nodi Lymphatici",
        weight: "~1 g each",
        overview:
          "Small bean-shaped encapsulated structures that filter lymph before it returns to the bloodstream. Each node contains a cortex with lymphoid follicles, a paracortex of T-cells, and a medulla with medullary sinuses and cords.",
        location: "Distributed throughout the body in regional clusters — cervical, axillary, mediastinal, mesenteric, inguinal.",
        function:
          "Trap particulate antigens, present them to lymphocytes, and generate adaptive immune responses; site of lymphocyte proliferation and antibody production.",
        bloodSupply:
          "Segmental arteries from adjacent vessels entering at the hilum, forming capillaries that exit via high endothelial venules for lymphocyte trafficking.",
        nerveSupply:
          "Sympathetic fibers accompany blood vessels.",
        clinicalImportance:
          "Lymphadenopathy — node enlargement — is a key sign of infection, malignancy, or autoimmune disease; biopsy of sentinel nodes stages cancer.",
        commonDiseases: [
          "Lymphadenopathy",
          "Lymphoma",
          "Metastatic Carcinoma",
          "Lymphadenitis",
        ],
      },
      {
        id: "tonsils",
        name: "Tonsils",
        latinName: "Tonsillae",
        weight: "~5 g",
        overview:
          "Clusters of lymphoid tissue encircling the pharynx — the pharyngeal, palatine, lingual, and tubal tonsils forming Waldeyer's ring — that provide a first line of immune defense at mucosal entry points.",
        location: "Pharyngeal wall, especially the oropharynx and nasopharynx.",
        function:
          "Sample ingested and inhaled antigens, generate immune responses, and produce lymphocytes; the palatine tonsils are the largest and most clinically prominent.",
        bloodSupply:
          "Tonsillar branch of the facial artery, plus ascending palatine, descending palatine, and pharyngeal branches.",
        nerveSupply:
          "Glossopharyngeal nerve (CN IX) and the tonsillar plexus of the lesser palatine nerves.",
        clinicalImportance:
          "Tonsillitis is a common childhood infection; peritonsillar abscess (quinsy) is a feared complication requiring drainage.",
        commonDiseases: [
          "Tonsillitis",
          "Peritonsillar Abscess",
          "Tonsillar Hypertrophy",
          "Tonsillar Cancer",
        ],
      },
      {
        id: "bone-marrow",
        name: "Bone Marrow",
        latinName: "Medulla Ossium",
        weight: "~2.6 kg",
        overview:
          "The primary hematopoietic tissue of the body, filling the medullary cavities of bones. In adults, red marrow is restricted to the axial skeleton and proximal long bones, while yellow marrow fills the rest.",
        location: "Medullary cavities of bones — vertebrae, sternum, ribs, pelvis, skull, and proximal femur/humerus in adults.",
        function:
          "Produces red blood cells, white blood cells, and platelets (red marrow); stores fat (yellow marrow); also serves as a primary lymphoid organ where B-cells mature.",
        bloodSupply:
          "Nutrient arteries entering via nutrient foramina; sinusoidal capillaries drain to central veins.",
        nerveSupply:
          "Sympathetic nerves accompany nutrient vessels.",
        clinicalImportance:
          "Bone marrow aspiration and biopsy diagnose leukemias, lymphomas, and myelodysplastic syndromes; marrow transplantation treats many hematologic diseases.",
        commonDiseases: [
          "Leukemia",
          "Aplastic Anemia",
          "Multiple Myeloma",
          "Myelodysplastic Syndrome",
        ],
      },
      {
        id: "lymph-vessels",
        name: "Lymph Vessels",
        latinName: "Vasa Lymphatica",
        overview:
          "A one-way vascular network that drains interstitial fluid as lymph and returns it to the venous circulation via the thoracic duct and right lymphatic duct. Lactals in the intestine absorb dietary fats as chyle.",
        location: "Throughout nearly all tissues except CNS, bone marrow, cartilage, and avascular structures.",
        function:
          "Drain excess interstitial fluid, transport dietary lipids from the gut, and conduct lymphocytes and antigens to lymph nodes.",
        bloodSupply:
          "Lymphatic vessels themselves are nourished by their surrounding tissue vasa vasorum; terminal ducts drain into the venous system at the jugulo-subclavian junctions.",
        nerveSupply:
          "Sympathetic fibers accompany larger trunks.",
        clinicalImportance:
          "Lymphatic obstruction from surgery, radiation, or filariasis causes lymphedema — chronic swelling of the affected limb.",
        commonDiseases: [
          "Lymphedema",
          "Lymphangitis",
          "Filariasis",
          "Chylothorax",
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    id: "reproductive",
    name: "Reproductive System",
    latinName: "Systema Reproductionis",
    icon: "Baby",
    color: "#e84393",
    tagline: "The continuity of life, anatomically explained.",
    description:
      "The reproductive system produces gametes, supports fertilization and embryonic development, and governs secondary sexual characteristics through hormonal control. This module is presented in a strictly scientific, educational context.",
    funFact:
      "The ovary contains all the oocytes a female will ever have at birth — about 1–2 million — declining to ~400,000 by puberty, of which only ~400 will ovulate.",
    stats: [
      { label: "Sperm / Ejaculate", value: "~200 million" },
      { label: "Oocytes at Birth", value: "~1–2 million" },
      { label: "Menstrual Cycle", value: "~28 days" },
      { label: "Gestation", value: "~40 weeks" },
    ],
    layers: ["Skin", "Subcutaneous tissue", "Muscle", "Peritoneum/Fascia", "Reproductive organs"],
    imagingModality: "Ultrasound",
    organs: [
      {
        id: "testes",
        name: "Testes",
        latinName: "Testes",
        weight: "~25 g each",
        overview:
          "Paired oval male gonads located in the scrotum, descended from the abdomen during fetal development to maintain a temperature ~2°C below core for spermatogenesis. They contain ~800 seminiferous tubules.",
        location: "Scrotum, outside the body cavity.",
        function:
          "Produce spermatozoa in the seminiferous tubules and testosterone via Leydig cells.",
        bloodSupply:
          "Testicular artery from the aorta; anastomoses with cremasteric and deferential arteries.",
        nerveSupply:
          "Testicular plexus (T10–L1 sympathetic and vagal parasympathetic); genitofemoral nerve to the cremaster.",
        clinicalImportance:
          "Cryptorchidism (undescended testis) increases risk of infertility and testicular cancer; testicular torsion is a surgical emergency.",
        commonDiseases: [
          "Testicular Torsion",
          "Testicular Cancer",
          "Cryptorchidism",
          "Varicocele",
        ],
      },
      {
        id: "epididymis",
        name: "Epididymis",
        latinName: "Epididymis",
        weight: "~3 g",
        overview:
          "A tightly coiled 6-meter tube caped over the posterior testis where sperm mature and acquire motility over 2–3 weeks before passing to the vas deferens.",
        location: "Posterolateral surface of each testis.",
        function:
          "Stores, matures, and propels sperm during ejaculation; absorbs fluid and concentrates sperm.",
        bloodSupply:
          "Testicular, deferential, and cremasteric arteries.",
        nerveSupply:
          "Inferior hypogastric and testicular plexuses.",
        clinicalImportance:
          "Acute epididymitis in young men is often sexually transmitted; it must be distinguished from testicular torsion.",
        commonDiseases: [
          "Epididymitis",
          "Epididymal Cyst",
          "Spermatocele",
          "Chronic Epididymitis",
        ],
      },
      {
        id: "prostate",
        name: "Prostate Gland",
        latinName: "Prostata",
        weight: "~20 g",
        overview:
          "A walnut-sized fibromuscular gland surrounding the proximal urethra, composed of multiple zones — peripheral, central, transitional, and anterior fibromuscular stroma — each with distinct clinical significance.",
        location: "Inferior to the bladder neck, anterior to the rectum, surrounding the prostatic urethra.",
        function:
          "Secretes a milky alkaline fluid rich in enzymes, citrate, and zinc that supports sperm motility and counteracts vaginal acidity.",
        bloodSupply:
          "Inferior vesical and middle rectal arteries (from the internal iliac).",
        nerveSupply:
          "Pelvic splanchnic nerves (parasympathetic) and inferior hypogastric plexus (sympathetic).",
        clinicalImportance:
          "Benign prostatic hyperplasia arises in the transitional zone causing urinary obstruction; cancer most often arises in the peripheral zone.",
        commonDiseases: [
          "Benign Prostatic Hyperplasia",
          "Prostate Cancer",
          "Prostatitis",
          "Prostatic Abscess",
        ],
      },
      {
        id: "ovaries",
        name: "Ovaries",
        latinName: "Ovaria",
        weight: "~7 g each",
        overview:
          "Paired almond-shaped female gonads attached to the broad ligament by the mesovarium. They contain follicles at various stages and undergo cyclic ovulation under hypothalamic-pituitary control.",
        location: "Lateral pelvic wall, in the ovarian fossa near the bifurcation of the iliac artery.",
        function:
          "Produce oocytes through folliculogenesis and secrete estrogen, progesterone, inhibin, and relaxin to regulate the menstrual cycle.",
        bloodSupply:
          "Ovarian artery (aorta) and ovarian branch of uterine artery, forming an anastomotic arcade.",
        nerveSupply:
          "Ovarian plexus from the aortic and renal plexuses (T10–T11).",
        clinicalImportance:
          "Polycystic ovary syndrome is a leading cause of infertility; ovarian cancer is often detected late due to vague symptoms.",
        commonDiseases: [
          "Polycystic Ovary Syndrome",
          "Ovarian Cancer",
          "Ovarian Cyst",
          "Endometrioma",
        ],
      },
      {
        id: "uterus",
        name: "Uterus",
        latinName: "Uterus",
        weight: "~50–70 g (non-pregnant)",
        overview:
          "A thick-walled, pear-shaped muscular organ consisting of fundus, body, isthmus, and cervix. The endometrium undergoes cyclic proliferation and shedding, and the myometrium contracts during labor.",
        location: "Pelvic cavity, between bladder (anterior) and rectum (posterior).",
        function:
          "Receives and supports the fertilized ovum, houses the developing embryo/fetus, and contracts during labor to deliver the baby.",
        bloodSupply:
          "Uterine artery from the internal iliac, with anastomoses to the ovarian artery; veins drain to the internal iliac.",
        nerveSupply:
          "Pelvic splanchnic nerves (parasympathetic S2–S4) and inferior hypogastric plexus (sympathetic T10–L1).",
        clinicalImportance:
          "Endometriosis — endometrial tissue outside the uterus — causes dysmenorrhea and infertility; fibroids are the most common benign uterine tumor.",
        commonDiseases: [
          "Endometriosis",
          "Uterine Fibroids",
          "Endometrial Cancer",
          "Adenomyosis",
        ],
      },
      {
        id: "fallopian-tubes",
        name: "Fallopian Tubes",
        latinName: "Tubae Uterinae",
        weight: "~5 g",
        overview:
          "Paired 10-cm muscular tubes with fimbriated openings near the ovaries. Their ampulla is the usual site of fertilization, after which the embryo travels to the uterus over ~3–4 days.",
        location: "Within the upper free edge of the broad ligament, extending laterally from the uterine cornua.",
        function:
          "Capture the released ovum, provide the site of fertilization, and transport the developing embryo to the uterus via ciliary action and peristalsis.",
        bloodSupply:
          "Uterine and ovarian arteries via anastomoses along the tube.",
        nerveSupply:
          "Pelvic and ovarian plexuses.",
        clinicalImportance:
          "Ectopic pregnancy most commonly implants in the ampulla and may rupture causing life-threatening hemorrhage; tubal damage from PID causes infertility.",
        commonDiseases: [
          "Ectopic Pregnancy",
          "Pelvic Inflammatory Disease",
          "Tubal Infertility",
          "Hydrosalpinx",
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  {
    id: "integumentary",
    name: "Integumentary System",
    latinName: "Systema Integumentum",
    icon: "Layers",
    color: "#fdcb6e",
    tagline: "Your largest organ — and your first line of defense.",
    description:
      "The integumentary system comprises the skin and its appendages — hair, nails, and glands — and is the largest organ of the body by surface area (~2 m²) and weight (~4 kg). It protects against pathogens, regulates temperature, senses the environment, and synthesizes vitamin D.",
    funFact:
      "You shed about 30,000–40,000 dead skin cells every minute — your entire outer skin layer is replaced roughly every 28 days.",
    stats: [
      { label: "Surface Area", value: "~2 m²" },
      { label: "Weight", value: "~4 kg" },
      { label: "Layers", value: "2 main" },
      { label: "Renewal Cycle", value: "~28 days" },
    ],
    layers: ["Stratum corneum", "Epidermis", "Dermis", "Hypodermis", "Deep fascia"],
    imagingModality: "Dermoscopy",
    organs: [
      {
        id: "epidermis",
        name: "Epidermis",
        latinName: "Epidermis",
        overview:
          "The outermost stratified squamous keratinized epithelium, 0.05–1.5 mm thick, composed of 4–5 layers: stratum basale, spinosum, granulosum, lucidum (only in thick skin), and corneum. It is avascular and renews every ~28 days.",
        location: "Outermost layer of the skin.",
        function:
          "Provides a waterproof barrier, protects against pathogens and UV damage, and houses immune sentinel cells (Langerhans cells) and melanocytes.",
        bloodSupply:
          "Avascular; nourished by diffusion from the underlying dermal papillae.",
        nerveSupply:
          "Free nerve endings transmit pain, itch, and temperature; specialized receptors for fine touch are also present.",
        clinicalImportance:
          "The stratum basale regenerates after superficial burns; deeper burns that destroy the basal layer require skin grafting.",
        commonDiseases: [
          "Basal Cell Carcinoma",
          "Squamous Cell Carcinoma",
          "Psoriasis",
          "Eczema",
        ],
        relationships:
          "Anchored to the underlying dermis at the basement membrane with dermal papillae interdigitating; sits superficial to the dermis and hypodermis.",
        imaging:
          "Dermoscopy (epiluminescence microscopy) magnifies pigmented lesions; reflectance confocal microscopy enables non-invasive cellular imaging.",
        clinicalNote:
          "The stratum basale regenerates after superficial (first-degree) burns; deeper burns that destroy the basal layer require skin grafting.",
        histology:
          "Stratified squamous keratinized epithelium with 4–5 strata (basale, spinosum, granulosum, lucidum in thick skin, corneum); the stratum basale contains mitotically active stem cells.",
        quizRef: 5,
      },
      {
        id: "dermis",
        name: "Dermis",
        latinName: "Dermis",
        weight: "~3 kg (paired with hypodermis)",
        overview:
          "A dense connective tissue layer 1–4 mm thick, divided into a superficial papillary layer and a deeper reticular layer. It gives skin its strength, elasticity, and houses most skin appendages.",
        location: "Between the epidermis and hypodermis.",
        function:
          "Provides mechanical strength and elasticity, houses blood vessels, nerves, sweat and sebaceous glands, hair follicles, and supports the epidermis.",
        bloodSupply:
          "Subdermal and cutaneous plexuses from perforating arteries; capillary loops in dermal papillae.",
        nerveSupply:
          "Rich innervation includes free nerve endings and encapsulated receptors — Meissner (light touch), Pacinian (pressure), Ruffini (stretch), and Krause (cold).",
        clinicalImportance:
          "Deep burns extending into the dermis heal with scarring and contracture; the dermis also houses the cells of origin of melanoma.",
        commonDiseases: [
          "Melanoma",
          "Scleroderma",
          "Burns (Partial Thickness)",
          "Dermatitis",
        ],
      },
      {
        id: "hypodermis",
        name: "Hypodermis",
        latinName: "Hypodermis",
        overview:
          "The subcutaneous layer of loose connective tissue and adipose tissue that anchors skin to underlying structures while allowing mobility. It is not technically part of the skin but is functionally integrated.",
        location: "Beneath the dermis, above the deep fascia or periosteum.",
        function:
          "Insulates the body, stores energy as fat, cushions underlying structures, and provides a route for large subcutaneous vessels.",
        bloodSupply:
          "Subcutaneous arteries and veins supplying the overlying skin.",
        nerveSupply:
          "Subcutaneous sensory nerves; pressure and pain receptors are present.",
        clinicalImportance:
          "Subcutaneous injections deliver medication here; lipodystrophy and cellulitis affect this layer.",
        commonDiseases: [
          "Cellulitis",
          "Lipodystrophy",
          "Lipoma",
          "Subcutaneous Emphysema",
        ],
      },
      {
        id: "hair-follicles",
        name: "Hair Follicles",
        latinName: "Folliculi Pili",
        overview:
          "Tubular invaginations of the epidermis that extend into the dermis and produce hair shafts. Each follicle cycles through anagen (growth), catagen (regression), and telogen (resting) phases.",
        location: "Distributed throughout skin except palms, soles, lips, and parts of genitalia.",
        function:
          "Produce hair for protection, insulation, and sensory detection; sebaceous glands open into follicles to lubricate hair.",
        bloodSupply:
          "Dermal papilla capillaries from cutaneous plexuses.",
        nerveSupply:
          "Each follicle is surrounded by a network of sensory nerve endings that detect hair movement.",
        clinicalImportance:
          "Androgenetic alopecia results from dihydrotestosterone-mediated miniaturization of follicles; folliculitis is common and usually staphylococcal.",
        commonDiseases: [
          "Alopecia",
          "Folliculitis",
          "Hirsutism",
          "Tinea Capitis",
        ],
      },
      {
        id: "sweat-glands",
        name: "Sweat Glands",
        latinName: "Glandulae Sudoriferae",
        weight: "~100 g total",
        overview:
          "Eccrine glands (2–4 million, distributed widely) produce watery sweat for thermoregulation. Apocrine glands open into hair follicles in the axillae and groin and produce an odorless secretion metabolized by bacteria into body odor.",
        location: "Eccrine throughout the skin (densest on palms and soles); apocrine in axillae, groin, and areolae.",
        function:
          "Eccrine glands cool the body through evaporative heat loss; apocrine glands secrete pheromone-like compounds.",
        bloodSupply:
          "Cutaneous capillaries surrounding the secretory coil.",
        nerveSupply:
          "Eccrine glands are innervated by sympathetic cholinergic fibers (unique among sweat glands); apocrine by sympathetic adrenergic fibers.",
        clinicalImportance:
          "Hyperhidrosis causes excessive sweating affecting quality of life; cystic fibrosis is diagnosed by elevated sweat chloride.",
        commonDiseases: [
          "Hyperhidrosis",
          "Miliaria (Heat Rash)",
          "Hidradenitis Suppurativa",
          "Anhidrosis",
        ],
      },
      {
        id: "sebaceous-glands",
        name: "Sebaceous Glands",
        latinName: "Glandulae Sebaceae",
        overview:
          "Holocrine glands that secrete sebum — a mixture of lipids — into hair follicles. They are most numerous on the face and scalp and are absent from palms and soles.",
        location: "Wherever hair follicles exist, especially the face, scalp, chest, and back.",
        function:
          "Produce sebum that lubricates skin and hair, maintains an acid mantle, and has mild antimicrobial properties.",
        bloodSupply:
          "Capillaries of the surrounding dermis.",
        nerveSupply:
          "Indirect; activity is primarily controlled by androgens rather than nerves.",
        clinicalImportance:
          "Excess sebum and blocked ducts contribute to acne vulgaris; sebaceous gland carcinoma is a rare but aggressive eyelid tumor.",
        commonDiseases: [
          "Acne Vulgaris",
          "Sebaceous Cyst",
          "Seborrheic Dermatitis",
          "Sebaceous Carcinoma",
        ],
      },
      {
        id: "nails",
        name: "Nails",
        latinName: "Ungues",
        weight: "~3 g",
        overview:
          "Keratinized plates on the dorsal surface of each distal phalanx produced by the nail matrix. Each nail consists of a body, root, lunula, and folds, growing at ~3 mm per month for fingers and ~1 mm for toes.",
        location: "Dorsal surface of the tips of fingers and toes.",
        function:
          "Protect the distal phalanges, enhance fine touch, and provide a counter-pressure surface aiding grip and scratching.",
        bloodSupply:
          "Digital arteries of the distal phalanx via capillaries in the nail bed.",
        nerveSupply:
          "Digital nerves providing rich sensory supply to the nail bed.",
        clinicalImportance:
          "Nail changes can signal systemic disease — clubbing in lung or heart disease, Beau lines after severe illness, koilonychia in iron deficiency.",
        commonDiseases: [
          "Onychomycosis",
          "Ingrown Nail",
          "Paronychia",
          "Nail Psoriasis",
        ],
      },
      {
        id: "melanocytes",
        name: "Melanocytes",
        latinName: "Melanocyti",
        overview:
          "Neural crest-derived pigment cells located in the stratum basale that produce melanin and transfer it via melanosomes to surrounding keratinocytes. Each melanocyte serves ~36 keratinocytes.",
        location: "Stratum basale of the epidermis and hair follicles.",
        function:
          "Synthesize melanin that absorbs UV radiation and protects DNA in keratinocytes; determine skin and hair color.",
        bloodSupply:
          "Nourished by diffusion from dermal capillaries.",
        nerveSupply:
          "Not directly innervated; their activity is regulated by UV radiation and melanocyte-stimulating hormone.",
        clinicalImportance:
          "Melanoma is the most lethal skin cancer; vitiligo results from autoimmune destruction of melanocytes causing depigmentation.",
        commonDiseases: [
          "Melanoma",
          "Vitiligo",
          "Albinism",
          "Melasma",
        ],
      },
    ],
  },
];

// ============================================================================
// DISEASE LIBRARY
// ============================================================================

export const diseaseLibrary: Disease[] = [
  {
    id: "osteoporosis",
    name: "Osteoporosis",
    systemId: "skeletal",
    cause:
      "Age-related estrogen/testosterone decline and chronic calcium/vitamin D deficiency cause bone resorption by osteoclasts to outpace formation by osteoblasts, producing low bone mass and microarchitectural deterioration.",
    symptoms: [
      "Often asymptomatic until fracture",
      "Loss of height over years",
      "Stooped posture (kyphosis)",
      "Fracture of hip, spine, or wrist after minor trauma",
    ],
    diagnosis:
      "Dual-energy X-ray absorptiometry (DEXA) T-score of -2.5 or lower at the femoral neck or lumbar spine; vertebral fracture assessment on X-ray.",
    treatment:
      "Bisphosphonates (alendronate, zoledronate), calcium and vitamin D supplementation, weight-bearing exercise, smoking cessation, and denosumab or teriparatide for high-risk cases.",
    prognosis:
      "Good with early treatment; mortality after hip fracture remains 20–30% at one year, highlighting the importance of prevention and early intervention.",
  },
  {
    id: "myocardial-infarction",
    name: "Myocardial Infarction",
    systemId: "cardiovascular",
    cause:
      "Acute rupture of an atherosclerotic coronary plaque triggers platelet aggregation and thrombus formation, abruptly occluding a coronary artery and causing ischemic necrosis of downstream myocardium.",
    symptoms: [
      "Crushing retrosternal chest pain radiating to left arm or jaw",
      "Diaphoresis and pallor",
      "Dyspnea",
      "Nausea and vomiting",
    ],
    diagnosis:
      "12-lead ECG showing ST elevation, hyperacute T waves, or new LBBB; serial high-sensitivity troponin elevation; echocardiography for wall motion abnormalities.",
    treatment:
      "Immediate aspirin and P2Y12 inhibitor, anticoagulation, beta-blocker, statin; primary percutaneous coronary intervention within 90 minutes (door-to-balloon) or fibrinolysis if PCI unavailable.",
    prognosis:
      "Time-critical — 'time is muscle'. Mortality at 30 days has fallen below 10% with timely reperfusion; long-term prognosis depends on residual ejection fraction and secondary prevention.",
  },
  {
    id: "asthma",
    name: "Asthma",
    systemId: "respiratory",
    cause:
      "Chronic airway inflammation driven by type 2 helper T cells, eosinophils, and IgE-mediated responses to allergens or irritants, producing reversible bronchoconstriction, mucosal edema, and mucus hypersecretion.",
    symptoms: [
      "Episodic wheeze",
      "Chest tightness",
      "Cough (often nocturnal)",
      "Dyspnea triggered by exercise, allergens, or infection",
    ],
    diagnosis:
      "Spirometry showing reversible airflow obstruction — FEV1 improvement ≥12% and 200 mL post-bronchodilator; peak expiratory flow variability; fractional exhaled nitric oxide.",
    treatment:
      "Stepwise inhaled corticosteroids with long-acting β2-agonists (ICS-formoterol as both maintenance and reliever in SMART regimen); leukotriene receptor antagonists; biologics for severe asthma.",
    prognosis:
      "Excellent with guideline-based therapy; most patients achieve good control. Severe exacerbations can be fatal — ~1,400 asthma deaths annually in the UK alone emphasize the need for adherence and action plans.",
  },
  {
    id: "peptic-ulcer",
    name: "Peptic Ulcer Disease",
    systemId: "digestive",
    cause:
      "Most commonly Helicobacter pylori infection or chronic NSAID use disrupts mucosal defenses, allowing acid and pepsin to injure the stomach or duodenal mucosa and form an ulcer extending into the submucosa.",
    symptoms: [
      "Epigastric burning pain relieved by food or antacids (duodenal)",
      "Pain worse with food (gastric)",
      "Nocturnal pain awakening the patient",
      "Nausea, bloating, melena if bleeding",
    ],
    diagnosis:
      "Upper GI endoscopy directly visualizes the ulcer and allows biopsy; non-invasive H. pylori testing via urea breath test, stool antigen, or serology.",
    treatment:
      "Triple therapy (PPI + clarithromycin + amoxicillin) for H. pylori; PPI alone for NSAID-induced ulcers with NSAID cessation; misoprostol for prevention in NSAID users.",
    prognosis:
      "Excellent with eradication of H. pylori and NSAID avoidance; complications include bleeding, perforation, and gastric outlet obstruction requiring urgent intervention.",
  },
  {
    id: "chronic-kidney-disease",
    name: "Chronic Kidney Disease",
    systemId: "urinary",
    cause:
      "Progressive irreversible nephron loss most often from diabetic nephropathy, hypertensive nephrosclerosis, or glomerulonephritis, leading to reduced glomerular filtration rate over months to years.",
    symptoms: [
      "Fatigue and weakness",
      "Peripheral edema",
      "Nocturia and polyuria",
      "Late: pruritus, anorexia, confusion (uremia)",
    ],
    diagnosis:
      "Estimated GFR <60 mL/min/1.73 m² for ≥3 months, or markers of kidney damage (albuminuria, imaging abnormalities, biopsy changes); KDIGO staging G1–G5.",
    treatment:
      "Blood pressure control (ACE inhibitor or ARB), glycemic control, sodium restriction, SGLT2 inhibitors, erythropoiesis-stimulating agents, phosphate binders; renal replacement therapy (dialysis or transplant) in stage 5.",
    prognosis:
      "Variable; progression can be slowed with risk factor control. Cardiovascular disease is the leading cause of death in CKD patients — managing it aggressively is essential.",
  },
  {
    id: "diabetes-mellitus",
    name: "Diabetes Mellitus",
    systemId: "endocrine",
    cause:
      "Type 1: autoimmune destruction of pancreatic β-cells causing absolute insulin deficiency. Type 2: insulin resistance with progressive β-cell dysfunction, strongly linked to obesity, sedentary lifestyle, and genetics.",
    symptoms: [
      "Polyuria",
      "Polydipsia",
      "Polyphagia with weight loss (Type 1)",
      "Fatigue, blurred vision, recurrent infections (Type 2)",
    ],
    diagnosis:
      "Fasting plasma glucose ≥7.0 mmol/L, 2-hour oral glucose tolerance test ≥11.1 mmol/L, HbA1c ≥6.5%, or random glucose ≥11.1 mmol/L with classic symptoms.",
    treatment:
      "Type 1: lifelong insulin replacement (basal-bolus regimen or pump). Type 2: lifestyle, metformin, SGLT2 inhibitors, GLP-1 receptor agonists, sulfonylureas, insulin as needed.",
    prognosis:
      "Good with strict glycemic and blood pressure control; long-term complications include retinopathy, nephropathy, neuropathy, and accelerated cardiovascular disease. Diabetic ketoacidosis is a medical emergency.",
  },
  {
    id: "stroke",
    name: "Stroke",
    systemId: "nervous",
    cause:
      "Sudden interruption of cerebral blood flow — most often ischemic (~85%) due to thromboembolism from atherosclerosis or atrial fibrillation, or hemorrhagic (~15%) from hypertension or aneurysm rupture.",
    symptoms: [
      "Sudden unilateral weakness or facial droop",
      "Slurred speech or aphasia",
      "Visual disturbance or diplopia",
      "Sudden severe headache (hemorrhagic)",
    ],
    diagnosis:
      "Rapid clinical assessment using FAST/BE-FAST; non-contrast CT to exclude hemorrhage; CT or MR angiography to identify large vessel occlusion; NIHSS for severity grading.",
    treatment:
      "Ischemic: intravenous thrombolysis (alteplase/tenecteplase) within 4.5 hours, mechanical thrombectomy for large vessel occlusion within 6–24 hours. Hemorrhagic: blood pressure control, neurosurgical evacuation if indicated.",
    prognosis:
      "Time-dependent — 'time is brain'. With modern stroke units and reperfusion therapies, mortality and disability have fallen substantially. Rehabilitation is critical for recovery.",
  },
  {
    id: "hypertension",
    name: "Hypertension",
    systemId: "cardiovascular",
    cause:
      "Essential hypertension (~95%) arises from interplay of genetics, salt sensitivity, sympathetic activation, and renin-angiotensin-aldosterone dysregulation. Secondary causes include renal artery stenosis, pheochromocytoma, and primary hyperaldosteronism.",
    symptoms: [
      "Usually asymptomatic — 'silent killer'",
      "Headache (severe hypertension)",
      "Dizziness",
      "Visual disturbance in hypertensive crisis",
    ],
    diagnosis:
      "Average office BP ≥130/80 mmHg (ACC/AHA) or ≥140/90 mmHg (ESC) on at least two occasions, or 24-hour ambulatory BP monitoring; workup for secondary causes when indicated.",
    treatment:
      "Lifestyle modification (weight loss, DASH diet, sodium restriction, exercise, alcohol moderation); first-line drugs include ACE inhibitors/ARBs, calcium channel blockers, and thiazide diuretics.",
    prognosis:
      "Excellent with sustained control; untreated hypertension accelerates atherosclerosis and leads to stroke, myocardial infarction, heart failure, renal failure, and retinopathy.",
  },
  {
    id: "pneumonia",
    name: "Pneumonia",
    systemId: "respiratory",
    cause:
      "Infection of the lung parenchyma by bacteria (Streptococcus pneumoniae most commonly), viruses (influenza, SARS-CoV-2), or atypical organisms (Mycoplasma, Legionella), producing alveolar inflammation and consolidation.",
    symptoms: [
      "Fever with rigors",
      "Productive cough with purulent sputum",
      "Pleuritic chest pain",
      "Dyspnea and tachypnea",
    ],
    diagnosis:
      "Clinical examination with chest X-ray showing consolidation; CURB-65 or PSI for severity; sputum and blood cultures, urinary antigen tests, and PCR for organism identification.",
    treatment:
      "Empirical antibiotics guided by severity and setting — outpatient amoxicillin or doxycycline; inpatient ceftriaxone with azithromycin; oxygen, fluids, and ventilatory support as needed.",
    prognosis:
      "Good in healthy adults with prompt treatment; mortality rises sharply in elderly, immunocompromised, and those with comorbidity. Vaccination against pneumococcus and influenza is preventive.",
  },
  {
    id: "appendicitis",
    name: "Appendicitis",
    systemId: "digestive",
    cause:
      "Obstruction of the appendiceal lumen by a fecalith, lymphoid hyperplasia, or tumor leads to mucus accumulation, bacterial overgrowth, increased luminal pressure, and ultimately ischemia, necrosis, and perforation.",
    symptoms: [
      "Periumbilical pain migrating to right iliac fossa",
      "Anorexia and nausea",
      "Low-grade fever",
      "Pain on movement or coughing",
    ],
    diagnosis:
      "Clinical assessment with Alvarado or AIR score; ultrasound in children and young women; CT scan in adults for definitive diagnosis; surgical inspection at laparoscopy.",
    treatment:
      "Laparoscopic appendectomy is the standard; conservative antibiotic management may be considered in selected uncomplicated cases. Perforation requires broader antibiotics ± drainage.",
    prognosis:
      "Excellent with prompt surgery; perforation increases morbidity and length of stay. Mortality is low but rises in elderly and immunocompromised patients.",
  },
  {
    id: "gallstones",
    name: "Gallstones (Cholelithiasis)",
    systemId: "digestive",
    cause:
      "Supersaturation of bile with cholesterol, excess bilirubin (pigment stones), or gallbladder hypomotility leads to precipitation and stone formation. Risk factors include the '5 Fs': female, fat, forty, fertile, family history.",
    symptoms: [
      "Biliary colic: right upper quadrant pain after fatty meals",
      "Nausea and vomiting",
      "Pain radiating to right shoulder",
      "Most stones are asymptomatic",
    ],
    diagnosis:
      "Abdominal ultrasound is first-line (sensitivity >95% for gallstones); liver function tests assess for obstruction or cholangitis; MRCP visualizes the biliary tree if stones are suspected in the duct.",
    treatment:
      "Laparoscopic cholecystectomy for symptomatic stones; ERCP for common bile duct stones; pain control and antibiotics for acute cholecystitis before surgery.",
    prognosis:
      "Excellent after cholecystectomy; serious complications include cholecystitis, pancreatitis, cholangitis, and rarely gallstone ileus. Asymptomatic stones typically do not require treatment.",
  },
  {
    id: "anemia",
    name: "Iron Deficiency Anemia",
    systemId: "lymphatic",
    cause:
      "Imbalance between iron intake and loss — most commonly chronic blood loss (menstruation, gastrointestinal bleeding) or inadequate dietary intake — leads to insufficient hemoglobin synthesis and microcytic red cells.",
    symptoms: [
      "Fatigue and weakness",
      "Pallor",
      "Dyspnea on exertion",
      "Pica and restless legs syndrome",
    ],
    diagnosis:
      "Low hemoglobin with low MCV (microcytic) and low MCH (hypochromic); low serum ferritin (<30 µg/L is diagnostic); high transferrin and low iron saturation. Investigate source of blood loss in adults.",
    treatment:
      "Oral iron replacement (ferrous sulfate) with vitamin C to enhance absorption; intravenous iron for intolerance or severe deficiency; treat underlying cause — endoscopy for occult GI bleeding is mandatory in older adults and postmenopausal women.",
    prognosis:
      "Excellent once the cause is identified and treated; hemoglobin typically rises within 2 weeks of iron therapy. Recurrence depends on the underlying condition.",
  },
];

// ============================================================================
// MICROSCOPE LEVELS — body to atom zoom journey
// ============================================================================

export const microscopeLevels: MicroscopeLevel[] = [
  {
    id: "whole-body",
    name: "Whole Body",
    scale: "1.7 m",
    description:
      "The complete human organism — about 37 trillion cells working in concert. The starting view of the holographic body, the scale at which you can see the person.",
    color: "#e8e0d0",
  },
  {
    id: "organ",
    name: "Organ",
    scale: "20 cm",
    description:
      "Discrete structures such as the heart, liver, or brain that perform specialized functions. Each is composed of multiple tissue types working together.",
    color: "#e74c3c",
  },
  {
    id: "tissue",
    name: "Tissue",
    scale: "1 mm",
    description:
      "Groups of similar cells — epithelial, connective, muscular, or nervous — and their extracellular matrix forming the building blocks of organs.",
    color: "#d35400",
  },
  {
    id: "cell",
    name: "Cell",
    scale: "20 µm",
    description:
      "The basic unit of life — ~200 distinct cell types in humans — bounded by a membrane and containing cytoplasm, organelles, and genetic material.",
    color: "#16a085",
  },
  {
    id: "organelle",
    name: "Organelle",
    scale: "2 µm",
    description:
      "Specialized subcellular structures such as the nucleus, mitochondria, endoplasmic reticulum, and Golgi apparatus that carry out specific cellular functions.",
    color: "#9b59b6",
  },
  {
    id: "dna",
    name: "DNA",
    scale: "2 nm",
    description:
      "The double helix of deoxyribonucleic acid — two antiparallel strands of nucleotides joined by complementary base pairs encoding the genetic blueprint of life.",
    color: "#f1c40f",
  },
  {
    id: "chromosome",
    name: "Chromosome",
    scale: "1400 nm",
    description:
      "Tightly packaged DNA wound around histone proteins — 46 chromosomes (23 pairs) in each human cell, visible as distinct structures during cell division.",
    color: "#e84393",
  },
  {
    id: "protein",
    name: "Protein",
    scale: "5 nm",
    description:
      "Three-dimensional chains of amino acids folded into functional molecules — enzymes, structural elements, signaling receptors, and antibodies driving virtually all biological processes.",
    color: "#1abc9c",
  },
  {
    id: "molecule",
    name: "Molecule",
    scale: "0.3 nm",
    description:
      "Stable assemblies of atoms joined by chemical bonds — water, glucose, hemoglobin's heme group — whose shapes and interactions define biochemistry.",
    color: "#3498db",
  },
  {
    id: "atom",
    name: "Atom",
    scale: "0.1 nm",
    description:
      "The fundamental building block of matter — a nucleus of protons and neutrons surrounded by electron clouds. About 99% of the human body is oxygen, carbon, hydrogen, and nitrogen.",
    color: "#34495e",
  },
];

// ============================================================================
// EDUCATION MODES
// ============================================================================

export const educationModes: EducationMode[] = [
  {
    id: "medical-school",
    name: "Medical School",
    icon: "Stethoscope",
    description:
      "Full clinical depth for MD students — gross anatomy, neuroanatomy, embryology, and clinical correlations with cross-sectional imaging and surgical perspectives.",
    difficulty: "Advanced",
  },
  {
    id: "nursing",
    name: "Nursing",
    icon: "HeartPulse",
    description:
      "Practical, patient-focused anatomy emphasizing assessment landmarks, injection sites, vital sign physiology, and safe procedure performance.",
    difficulty: "Intermediate",
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    icon: "PersonStanding",
    description:
      "Detailed musculoskeletal and neuroanatomy for movement analysis — origins, insertions, innervation, and actions of every major muscle with palpation guidance.",
    difficulty: "Intermediate",
  },
  {
    id: "dentistry",
    name: "Dentistry",
    icon: "Smile",
    description:
      "Focused head and neck anatomy — cranial nerves, masticatory muscles, salivary glands, the temporomandibular joint, and dental occlusion.",
    difficulty: "Advanced",
  },
  {
    id: "veterinary",
    name: "Veterinary",
    icon: "PawPrint",
    description:
      "Comparative anatomy highlighting homologous structures across mammalian species, with notes on cross-species anatomical differences relevant to practice.",
    difficulty: "Advanced",
  },
  {
    id: "biology",
    name: "Biology",
    icon: "Microscope",
    description:
      "General human biology for high-school and undergraduate students — accessible explanations with cellular and evolutionary context woven in.",
    difficulty: "Beginner",
  },
  {
    id: "exam-prep",
    name: "Exam Prep",
    icon: "GraduationCap",
    description:
      "High-yield review mode for USMLE, NEET, and board exams — concise facts, mnemonics, and clinical vignettes targeting frequently tested concepts.",
    difficulty: "Advanced",
  },
];

// ============================================================================
// VIEWPORT MODES — imaging modalities for the 3D scene
// ============================================================================

export const viewportModes: ViewportMode[] = [
  {
    id: "normal",
    name: "Normal",
    icon: "Eye",
    description:
      "Photorealistic surface view of the body and organs as they appear to the naked eye — ideal for gross anatomy orientation.",
  },
  {
    id: "x-ray",
    name: "X-Ray",
    icon: "ScanLine",
    description:
      "Projection radiograph revealing dense bone in white, soft tissue in shades of gray, and air in black — the classic radiographic contrast.",
  },
  {
    id: "mri",
    name: "MRI",
    icon: "Waves",
    description:
      "Magnetic resonance imaging with superb soft-tissue contrast in T1- and T2-weighted sequences — the modality of choice for brain, spine, and joints.",
  },
  {
    id: "ct",
    name: "CT",
    icon: "Layers",
    description:
      "Cross-sectional computed tomography with fast acquisition and excellent bone detail — emergency imaging gold standard for trauma and acute abdomen.",
  },
  {
    id: "ultrasound",
    name: "Ultrasound",
    icon: "AudioWaveform",
    description:
      "Real-time sonographic imaging using high-frequency sound waves — safe, radiation-free, and ideal for obstetrics, the heart, and bedside procedures.",
  },
  {
    id: "heat-map",
    name: "Heat Map",
    icon: "Thermometer",
    description:
      "Functional overlay showing metabolic activity and blood flow using a thermal color scale — highlighting inflammation, tumors, and active regions.",
  },
  {
    id: "disease",
    name: "Disease",
    icon: "AlertTriangle",
    description:
      "Pathology overlay highlighting diseased tissue, lesions, and affected organs with annotated clinical findings — guided tour of disease manifestation.",
  },
];

// ============================================================================
// QUIZ QUESTIONS
// ============================================================================

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "How many bones are in the adult human skeleton?",
    options: ["186", "206", "226", "246"],
    correctIndex: 1,
    explanation:
      "The adult human skeleton has 206 bones. Newborns start with about 270 cartilaginous bones that fuse during growth and development, reaching the adult count by the early twenties.",
  },
  {
    id: "q2",
    question: "Which artery is most commonly known as the 'widow-maker' when occluded?",
    options: [
      "Right coronary artery",
      "Left circumflex artery",
      "Left anterior descending artery",
      "Posterior descending artery",
    ],
    correctIndex: 2,
    explanation:
      "The left anterior descending (LAD) artery supplies a large portion of the left ventricle. Its proximal occlusion can cause a massive anterior myocardial infarction with high mortality — hence the colloquial 'widow-maker'.",
  },
  {
    id: "q3",
    question: "Which cranial nerve provides motor innervation to the trapezius and sternocleidomastoid muscles?",
    options: [
      "Vagus nerve (CN X)",
      "Glossopharyngeal nerve (CN IX)",
      "Spinal accessory nerve (CN XI)",
      "Hypoglossal nerve (CN XII)",
    ],
    correctIndex: 2,
    explanation:
      "The spinal accessory nerve (CN XI) innervates the sternocleidomastoid and trapezius muscles. Injury during procedures such as cervical lymph node biopsy causes shoulder droop and difficulty elevating the arm above horizontal.",
  },
  {
    id: "q4",
    question: "Which cells in the pancreas secrete insulin?",
    options: ["Alpha cells", "Beta cells", "Delta cells", "PP cells"],
    correctIndex: 1,
    explanation:
      "Beta (β) cells of the pancreatic islets of Langerhans secrete insulin in response to elevated blood glucose. Alpha cells secrete glucagon, delta cells secrete somatostatin, and PP cells secrete pancreatic polypeptide.",
  },
  {
    id: "q5",
    question: "The pulmonary artery is unique among arteries because it:",
    options: [
      "Has no smooth muscle in its wall",
      "Carries deoxygenated blood",
      "Originates from the left ventricle",
      "Contains valves",
    ],
    correctIndex: 1,
    explanation:
      "The pulmonary artery is the only artery in the adult that carries deoxygenated (venous) blood, transporting it from the right ventricle to the lungs for oxygenation. The umbilical artery in fetal circulation also carries deoxygenated blood.",
  },
  {
    id: "q6",
    question: "Which layer of the epidermis is responsible for generating new skin cells?",
    options: [
      "Stratum corneum",
      "Stratum granulosum",
      "Stratum spinosum",
      "Stratum basale",
    ],
    correctIndex: 3,
    explanation:
      "The stratum basale (basal layer) is the deepest epidermal layer and contains mitotically active keratinocyte stem cells that regenerate the epidermis. Cells produced here migrate upward, differentiating as they progress through the layers and are ultimately shed from the stratum corneum roughly every 28 days.",
  },
];

// ============================================================================
// DISSECTION LAYERS — depth-ordered tissue layers for the 3D dissection tool
// ============================================================================

export const dissectionLayers: DissectionLayer[] = [
  {
    id: "skin",
    name: "Skin",
    depth: 0,
    description:
      "Outermost integumentary layer comprising the epidermis (stratified squamous keratinized epithelium) and the underlying dermis of dense connective tissue.",
    color: "#e8b89a",
    opacity: 0.85,
  },
  {
    id: "fascia",
    name: "Fascia",
    depth: 1,
    description:
      "Superficial and deep connective-tissue fascia that envelops muscles, vessels, and nerves, providing structural support and planes of surgical dissection.",
    color: "#d9a07a",
    opacity: 0.6,
  },
  {
    id: "muscle",
    name: "Skeletal Muscle",
    depth: 2,
    description:
      "Striated voluntary muscle tissue organized into bundles (fascicles) that contract to produce movement and stabilize joints.",
    color: "#a83232",
    opacity: 0.9,
  },
  {
    id: "organs",
    name: "Visceral Organs",
    depth: 3,
    description:
      "The internal organs of the thoracic, abdominal, and pelvic cavities — heart, lungs, liver, intestines, kidneys, and others — within their serosal sacs.",
    color: "#c0563e",
    opacity: 1,
  },
  {
    id: "skeleton",
    name: "Skeleton",
    depth: 4,
    description:
      "The deepest layer — 206 bones of the axial and appendicular skeleton providing the rigid internal framework of the body.",
    color: "#ece4d2",
    opacity: 1,
  },
];

// ============================================================================
// ANATOMICAL LANDMARKS — 3D reference points for measurement & annotation tools
// Coordinate system: x = left/right, y = up/down (head ~+2.3, feet ~-2),
// z = front/back. All points are on the surface of an upright adult model.
// ============================================================================

export const anatomicalLandmarks: AnatomicalLandmark[] = [
  {
    id: "vertex",
    name: "Vertex of Skull",
    systemId: "skeletal",
    position: [0, 2.6, 0],
  },
  {
    id: "sternal-angle",
    name: "Sternal Angle (Angle of Louis)",
    systemId: "skeletal",
    position: [0, 1.55, 0.3],
  },
  {
    id: "xiphoid-process",
    name: "Xiphoid Process",
    systemId: "skeletal",
    position: [0, 1.2, 0.35],
  },
  {
    id: "umbilicus",
    name: "Umbilicus (Navel)",
    systemId: "integumentary",
    position: [0, 0.55, 0.3],
  },
  {
    id: "pubic-symphysis",
    name: "Pubic Symphysis",
    systemId: "skeletal",
    position: [0, 0.0, 0.25],
  },
  {
    id: "anterior-shoulder",
    name: "Anterior Shoulder (Deltoid)",
    systemId: "muscular",
    position: [0.6, 1.6, 0.1],
  },
  {
    id: "wrist",
    name: "Wrist (Radial Styloid)",
    systemId: "skeletal",
    position: [0.72, 0.05, 0.05],
  },
  {
    id: "greater-trochanter",
    name: "Greater Trochanter",
    systemId: "skeletal",
    position: [0.3, -0.1, 0],
  },
  {
    id: "patella",
    name: "Patella",
    systemId: "skeletal",
    position: [0.22, -1.0, 0.15],
  },
  {
    id: "medial-malleolus",
    name: "Medial Malleolus",
    systemId: "skeletal",
    position: [0.18, -1.85, 0],
  },
  {
    id: "spinous-process-t1",
    name: "Spinous Process of T1",
    systemId: "skeletal",
    position: [0, 1.8, -0.18],
  },
  {
    id: "calcaneus",
    name: "Calcaneus (Heel)",
    systemId: "skeletal",
    position: [0.22, -2.0, 0.2],
  },
  {
    id: "cardiac-apex",
    name: "Cardiac Apex (Point of Maximal Impulse)",
    systemId: "cardiovascular",
    position: [0.18, 1.45, 0.32],
  },
  {
    id: "tracheal-carina",
    name: "Tracheal Carina (Bifurcation)",
    systemId: "respiratory",
    position: [0, 1.7, 0.18],
  },
];
