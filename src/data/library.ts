// CET Learning Library — Maharashtra State Board Std XI Syllabus
// Fully editable content source. Add/expand notes, formulas, questions here
// without changing the UI. UI reads this data and renders every chapter page.

export type MCQ = {
  q: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explanation?: string;
};

export type Flashcard = { front: string; back: string };

export type Chapter = {
  slug: string;
  name: string;
  overview: string;
  objectives: string[];
  notes: string; // markdown-safe plain text
  formulas: { name: string; expr: string }[];
  definitions: { term: string; meaning: string }[];
  keyPoints: string[];
  mcqs: MCQ[];
  flashcards: Flashcard[];
  pyqs: { year: number; q: string; answer: string }[];
};

export type Subject = {
  code: "P" | "C" | "M" | "B";
  name: string;
  color: string; // token
  chapters: Chapter[];
};

// ---------- PHYSICS ----------
const physics: Chapter[] = [
  {
    slug: "vectors",
    name: "Vectors",
    overview:
      "Vectors describe physical quantities with both magnitude and direction. This chapter builds the algebra and geometry needed for all of mechanics.",
    objectives: [
      "Distinguish scalars from vectors",
      "Add, subtract and resolve vectors",
      "Compute dot and cross products",
      "Apply vectors to displacement, velocity and force",
    ],
    notes:
      "A vector has magnitude and direction (e.g. displacement, force). Vectors add using the triangle or parallelogram rule and can be resolved into perpendicular components along chosen axes. The dot product gives a scalar and measures parallel alignment; the cross product gives a vector perpendicular to both operands and measures rotational tendency.",
    formulas: [
      { name: "Magnitude", expr: "|A| = √(Ax² + Ay² + Az²)" },
      { name: "Dot product", expr: "A·B = |A||B|cosθ" },
      { name: "Cross product magnitude", expr: "|A×B| = |A||B|sinθ" },
      { name: "Unit vector", expr: "Â = A / |A|" },
    ],
    definitions: [
      { term: "Scalar", meaning: "Physical quantity with magnitude only." },
      { term: "Vector", meaning: "Physical quantity with magnitude and direction." },
      { term: "Null vector", meaning: "Vector with zero magnitude and arbitrary direction." },
    ],
    keyPoints: [
      "Vector addition is commutative and associative.",
      "Dot product of perpendicular vectors is zero.",
      "Cross product is anti-commutative: A×B = −B×A.",
    ],
    mcqs: [
      {
        q: "If A·B = 0 and neither is null, the vectors are:",
        options: ["Parallel", "Anti-parallel", "Perpendicular", "Equal"],
        answer: 2,
        explanation: "cosθ = 0 ⇒ θ = 90°.",
      },
      {
        q: "Magnitude of (3î + 4ĵ) is:",
        options: ["5", "7", "12", "√7"],
        answer: 0,
      },
      {
        q: "A × A equals:",
        options: ["|A|²", "0 (null vector)", "2A", "1"],
        answer: 1,
      },
      {
        q: "Two vectors of magnitude 5 and 12 give a resultant of magnitude 13 when:",
        options: ["Parallel", "Anti-parallel", "Perpendicular", "At 60°"],
        answer: 2,
      },
      {
        q: "Unit vector along (2î + 2ĵ + ê) is:",
        options: ["(2î+2ĵ+ê)/3", "(2î+2ĵ+ê)/5", "(î+ĵ+ê)/√3", "(2î+2ĵ+ê)/9"],
        answer: 0,
      },
    ],
    flashcards: [
      { front: "Triangle law of addition", back: "Place tail-to-head; resultant joins first tail to last head." },
      { front: "Dot product formula", back: "A·B = |A||B|cosθ = AxBx + AyBy + AzBz" },
      { front: "Cross product direction", back: "Given by right-hand rule; perpendicular to both vectors." },
      { front: "Resolution of vector", back: "Ax = A cosθ, Ay = A sinθ" },
      { front: "Null vector properties", back: "Zero magnitude, arbitrary direction, additive identity." },
    ],
    pyqs: [
      { year: 2023, q: "The angle between A = 2î + 3ĵ and B = 3î − 2ĵ is:", answer: "90° (dot product = 0)." },
      { year: 2022, q: "If |A + B| = |A − B|, then A and B are:", answer: "Perpendicular." },
    ],
  },
  {
    slug: "error-analysis",
    name: "Error Analysis",
    overview:
      "Every measurement carries uncertainty. This chapter formalises how to estimate, combine and report errors in experimental results.",
    objectives: [
      "Identify systematic and random errors",
      "Compute absolute, relative and percentage error",
      "Propagate errors through sums, products and powers",
      "Report results with significant figures",
    ],
    notes:
      "Measurements deviate from the true value due to instrument limitations, observer bias and environmental factors. Errors are quantified using mean deviation and combined using rules that depend on the mathematical operation. Significant figures indicate the precision of a reported value.",
    formulas: [
      { name: "Absolute error", expr: "Δa = |a_true − a_meas|" },
      { name: "Relative error", expr: "Δa / a̅" },
      { name: "% error", expr: "(Δa / a̅) × 100" },
      { name: "Sum/Difference", expr: "Δ(A±B) = ΔA + ΔB" },
      { name: "Product/Quotient", expr: "Δ(AB)/AB = ΔA/A + ΔB/B" },
      { name: "Power", expr: "Δ(Aⁿ)/Aⁿ = n·(ΔA/A)" },
    ],
    definitions: [
      { term: "Accuracy", meaning: "Closeness of a measurement to the true value." },
      { term: "Precision", meaning: "Closeness of repeated measurements to each other." },
      { term: "Least count", meaning: "Smallest measurement an instrument can resolve." },
    ],
    keyPoints: [
      "Systematic errors are reproducible; random errors are not.",
      "In products/quotients, relative errors add.",
      "Final answer should not exceed the least precise input in significant figures.",
    ],
    mcqs: [
      { q: "If A = (2.0 ± 0.1) and B = (3.0 ± 0.2), then A+B is:", options: ["5.0 ± 0.1", "5.0 ± 0.2", "5.0 ± 0.3", "5.0 ± 0.02"], answer: 2 },
      { q: "% error in T = 2π√(l/g) if % error in l is 2 and g is 3:", options: ["1%", "2.5%", "5%", "6%"], answer: 1, explanation: "½(2+3)=2.5%." },
      { q: "Least count of a Vernier with 20 divisions matching 19 MSD (1 MSD=1mm):", options: ["0.1 mm", "0.05 mm", "0.02 mm", "0.01 mm"], answer: 1 },
      { q: "Number of significant figures in 0.00450:", options: ["2", "3", "4", "5"], answer: 1 },
      { q: "Zero error is an example of:", options: ["Random error", "Systematic error", "Gross error", "Personal error"], answer: 1 },
    ],
    flashcards: [
      { front: "Mean absolute error", back: "Δa̅ = (Σ|Δaᵢ|)/n" },
      { front: "Rule for sums", back: "Absolute errors add." },
      { front: "Rule for products", back: "Relative errors add." },
      { front: "Rule for powers", back: "Relative error multiplied by exponent." },
      { front: "Significant figures", back: "All non-zero digits + zeros between/after non-zeros in decimal." },
    ],
    pyqs: [
      { year: 2023, q: "In an experiment, % error in a is 1, b is 2, c is 3. % error in X = a²b/c³ is:", answer: "1(2)+2+3(3) = 13%." },
    ],
  },
  {
    slug: "motion-in-a-plane",
    name: "Motion in a plane",
    overview:
      "Extends 1-D kinematics to two dimensions using vectors. Covers projectile motion and uniform circular motion.",
    objectives: [
      "Describe 2-D position, velocity and acceleration vectors",
      "Analyse projectile motion",
      "Derive properties of uniform circular motion",
    ],
    notes:
      "Two-dimensional motion is analysed by resolving vectors along mutually perpendicular axes. In projectile motion the horizontal component of velocity stays constant while the vertical component obeys uniform acceleration due to gravity. Uniform circular motion has constant speed but changing direction, giving a centripetal acceleration directed towards the centre.",
    formulas: [
      { name: "Range of projectile", expr: "R = u²sin2θ / g" },
      { name: "Max height", expr: "H = u²sin²θ / 2g" },
      { name: "Time of flight", expr: "T = 2u sinθ / g" },
      { name: "Centripetal acceleration", expr: "a_c = v²/r = ω²r" },
    ],
    definitions: [
      { term: "Projectile", meaning: "Body given initial velocity, moving under gravity alone." },
      { term: "Angular velocity", meaning: "Rate of change of angular displacement, ω = dθ/dt." },
    ],
    keyPoints: [
      "Horizontal and vertical motions are independent.",
      "Max range at 45° for equal launch/landing height.",
      "Centripetal force is not a new force — it is the net radial force.",
    ],
    mcqs: [
      { q: "Range is maximum when angle of projection is:", options: ["30°", "45°", "60°", "90°"], answer: 1 },
      { q: "At the highest point of a projectile, velocity is:", options: ["Zero", "Vertical", "Horizontal", "Along tangent"], answer: 2 },
      { q: "Centripetal acceleration for v=10 m/s on r=5m circle:", options: ["10", "20", "50", "2"], answer: 1 },
      { q: "For a projectile, the trajectory is:", options: ["Circle", "Parabola", "Ellipse", "Straight line"], answer: 1 },
      { q: "Angular velocity of second's hand:", options: ["π/30", "π/60", "2π/60", "π"], answer: 0 },
    ],
    flashcards: [
      { front: "Equations along x for projectile", back: "x = u cosθ · t" },
      { front: "Equations along y", back: "y = u sinθ · t − ½gt²" },
      { front: "Angular–linear relation", back: "v = ωr" },
      { front: "Direction of a_c", back: "Radially inward, toward centre." },
      { front: "Time to reach max height", back: "t = u sinθ / g" },
    ],
    pyqs: [
      { year: 2024, q: "A body is projected with 20 m/s at 30°. Max height (g=10) is:", answer: "H = 400·¼/20 = 5 m." },
    ],
  },
  {
    slug: "laws-of-motion",
    name: "Laws of Motion",
    overview:
      "Newton's three laws form the foundation of classical mechanics, connecting force, mass and motion.",
    objectives: [
      "State and apply Newton's laws",
      "Analyse friction on inclined and horizontal surfaces",
      "Solve pulley and connected-body problems",
    ],
    notes:
      "The first law defines inertia; the second gives F = ma; the third states action-reaction pairs. Friction opposes relative motion between surfaces in contact. Free-body diagrams are essential for solving problems involving multiple forces and constraints.",
    formulas: [
      { name: "Second law", expr: "F = ma = dp/dt" },
      { name: "Weight", expr: "W = mg" },
      { name: "Friction limit", expr: "f_s ≤ μ_s N" },
      { name: "Kinetic friction", expr: "f_k = μ_k N" },
    ],
    definitions: [
      { term: "Inertia", meaning: "Tendency of a body to resist change in state of motion." },
      { term: "Impulse", meaning: "Product of force and time, J = FΔt = Δp." },
    ],
    keyPoints: [
      "Action-reaction forces act on different bodies.",
      "Static friction is self-adjusting up to μ_s N.",
      "Momentum is conserved when net external force is zero.",
    ],
    mcqs: [
      { q: "Newton's 3rd law pair acts on:", options: ["Same body", "Two different bodies", "Ground only", "None"], answer: 1 },
      { q: "A 2 kg body under 10 N net force accelerates at:", options: ["2", "5", "10", "20"], answer: 1 },
      { q: "Coefficient of friction is:", options: ["Dimensionless", "Newton", "kg", "m/s"], answer: 0 },
      { q: "In free fall, apparent weight is:", options: ["mg", "0", "2mg", "½mg"], answer: 1 },
      { q: "Impulse has same unit as:", options: ["Force", "Energy", "Momentum", "Power"], answer: 2 },
    ],
    flashcards: [
      { front: "1st law", back: "A body remains at rest or in uniform motion unless acted on by net external force." },
      { front: "2nd law", back: "F = dp/dt = ma (constant mass)." },
      { front: "3rd law", back: "Every action has an equal and opposite reaction." },
      { front: "Angle of friction", back: "tanλ = μ" },
      { front: "Conservation of momentum", back: "If ΣF_ext = 0, total momentum is conserved." },
    ],
    pyqs: [
      { year: 2023, q: "A block of 5 kg on a rough surface (μ=0.2). Minimum horizontal force to move it (g=10):", answer: "f = μmg = 0.2·5·10 = 10 N." },
    ],
  },
  {
    slug: "gravitation",
    name: "Gravitation",
    overview:
      "Studies the universal attractive force between masses — from apples falling to planets orbiting.",
    objectives: [
      "State Newton's law of gravitation",
      "Derive g at height and depth",
      "Explain orbital and escape velocity",
      "State Kepler's laws",
    ],
    notes:
      "Every particle attracts every other with a force proportional to the product of masses and inversely proportional to the square of the distance. The acceleration due to gravity varies with altitude and depth. Satellites orbit under gravity acting as centripetal force.",
    formulas: [
      { name: "Universal gravitation", expr: "F = G m₁m₂ / r²" },
      { name: "g at height h", expr: "g' = g(1 − 2h/R)  (h ≪ R)" },
      { name: "g at depth d", expr: "g' = g(1 − d/R)" },
      { name: "Orbital velocity", expr: "v_o = √(GM/r)" },
      { name: "Escape velocity", expr: "v_e = √(2GM/R) = √(2gR)" },
    ],
    definitions: [
      { term: "Gravitational field", meaning: "Force per unit mass at a point due to another mass." },
      { term: "Escape velocity", meaning: "Minimum speed needed to leave a body's gravity permanently." },
    ],
    keyPoints: [
      "g is maximum at surface, decreases with both height and depth.",
      "Kepler's 3rd: T² ∝ r³.",
      "Escape velocity of Earth ≈ 11.2 km/s.",
    ],
    mcqs: [
      { q: "Value of G in SI:", options: ["6.67×10⁻¹¹", "9.8", "6.02×10²³", "3×10⁸"], answer: 0 },
      { q: "Escape velocity from Earth:", options: ["7.9 km/s", "11.2 km/s", "9.8 m/s", "3×10⁸ m/s"], answer: 1 },
      { q: "g at height R above surface:", options: ["g", "g/2", "g/4", "0"], answer: 2 },
      { q: "Kepler's 3rd law:", options: ["T ∝ r", "T² ∝ r³", "T ∝ r²", "T³ ∝ r²"], answer: 1 },
      { q: "Weight of body at Earth's centre:", options: ["mg", "2mg", "0", "mg/2"], answer: 2 },
    ],
    flashcards: [
      { front: "Newton's law of gravitation", back: "F = Gm₁m₂/r², attractive." },
      { front: "g on surface", back: "g = GM/R² ≈ 9.8 m/s²." },
      { front: "Orbital period", back: "T = 2π√(r³/GM)" },
      { front: "Gravitational PE", back: "U = −GMm/r" },
      { front: "Kepler's 1st law", back: "Planets orbit in ellipses with sun at one focus." },
    ],
    pyqs: [
      { year: 2024, q: "Ratio of escape velocities from two planets of same density but radii R and 2R:", answer: "v_e ∝ R ⇒ 1:2." },
    ],
  },
  {
    slug: "thermal-properties-of-matter",
    name: "Thermal properties of matter",
    overview:
      "Explains how heat changes temperature, dimensions and state of matter and how it is transferred.",
    objectives: [
      "Distinguish heat and temperature",
      "Apply expansion coefficients",
      "Use calorimetry to solve heat exchange",
      "Describe conduction, convection and radiation",
    ],
    notes:
      "Heat is energy in transit due to temperature difference. Solids expand linearly (α), area-wise (β=2α) and volumetrically (γ=3α). Latent heat is absorbed/released during phase change without temperature change. Heat transfers by conduction (solids), convection (fluids) and radiation (electromagnetic waves).",
    formulas: [
      { name: "Linear expansion", expr: "ΔL = αL₀ΔT" },
      { name: "Heat equation", expr: "Q = mcΔT" },
      { name: "Latent heat", expr: "Q = mL" },
      { name: "Conduction rate", expr: "dQ/dt = kA·ΔT/L" },
      { name: "Stefan's law", expr: "E = σT⁴" },
    ],
    definitions: [
      { term: "Specific heat", meaning: "Heat required to raise 1 kg by 1 K." },
      { term: "Latent heat", meaning: "Heat per unit mass for phase change at constant T." },
    ],
    keyPoints: [
      "β = 2α, γ = 3α (isotropic solids).",
      "Water has maximum density at 4°C.",
      "Black body absorbs all radiation incident on it.",
    ],
    mcqs: [
      { q: "Relation between α, β, γ:", options: ["α:β:γ = 1:2:3", "1:1:1", "3:2:1", "2:1:3"], answer: 0 },
      { q: "Latent heat of fusion of ice (kJ/kg):", options: ["334", "540", "80", "2260"], answer: 0 },
      { q: "SI unit of thermal conductivity:", options: ["W/mK", "J/kgK", "W/m²", "K/W"], answer: 0 },
      { q: "Radiation obeys law of:", options: ["Newton", "Stefan-Boltzmann", "Ohm", "Hooke"], answer: 1 },
      { q: "Water is densest at:", options: ["0°C", "4°C", "100°C", "−4°C"], answer: 1 },
    ],
    flashcards: [
      { front: "Heat vs Temperature", back: "Heat = energy transfer; Temperature = measure of average KE." },
      { front: "Coefficient of volume expansion", back: "γ = ΔV/(V₀ΔT)" },
      { front: "Newton's law of cooling", back: "dT/dt ∝ (T−T_s)" },
      { front: "Convection", back: "Heat transfer by bulk fluid movement." },
      { front: "Wien's displacement", back: "λ_max·T = constant." },
    ],
    pyqs: [
      { year: 2023, q: "200 g water at 20°C mixed with 100 g water at 80°C. Final temp:", answer: "T = (200·20 + 100·80)/300 = 40°C." },
    ],
  },
  {
    slug: "sound",
    name: "Sound",
    overview:
      "Sound is a mechanical longitudinal wave. Chapter covers its speed, superposition, beats, resonance and the Doppler effect.",
    objectives: [
      "Describe properties of sound waves",
      "Explain beats and standing waves",
      "Apply resonance in air columns and strings",
      "Solve Doppler-effect problems",
    ],
    notes:
      "Sound needs a material medium. Speed depends on medium's elasticity and density. Superposition of two nearby frequencies produces beats. Vibrating strings and air columns support standing waves at characteristic frequencies. The Doppler effect changes observed frequency with relative motion of source and observer.",
    formulas: [
      { name: "Speed in gas", expr: "v = √(γP/ρ)" },
      { name: "Beat frequency", expr: "f_b = |f₁ − f₂|" },
      { name: "String fundamental", expr: "f = (1/2L)√(T/μ)" },
      { name: "Doppler (general)", expr: "f' = f · (v±v_o)/(v∓v_s)" },
    ],
    definitions: [
      { term: "Wavelength", meaning: "Distance between successive compressions." },
      { term: "Resonance", meaning: "Large amplitude response when driving frequency matches natural frequency." },
    ],
    keyPoints: [
      "Sound is longitudinal; light is transverse.",
      "Speed of sound in air ≈ 340 m/s (at 20°C).",
      "Closed pipe supports only odd harmonics.",
    ],
    mcqs: [
      { q: "Sound cannot travel through:", options: ["Solid", "Liquid", "Gas", "Vacuum"], answer: 3 },
      { q: "Beat frequency of 256 Hz & 260 Hz:", options: ["2", "4", "8", "516"], answer: 1 },
      { q: "Open pipe harmonics:", options: ["Only odd", "Only even", "All integers", "None"], answer: 2 },
      { q: "Doppler applies only if:", options: ["Source moves", "Observer moves", "Relative motion exists", "Medium moves"], answer: 2 },
      { q: "Speed of sound increases with:", options: ["Density", "Temperature", "Wavelength", "Amplitude"], answer: 1 },
    ],
    flashcards: [
      { front: "Longitudinal wave", back: "Particle vibration parallel to propagation." },
      { front: "Node", back: "Point of zero displacement in standing wave." },
      { front: "Antinode", back: "Point of maximum displacement." },
      { front: "Doppler shift toward observer", back: "Frequency appears higher." },
      { front: "Beat time period", back: "T_b = 1/|f₁−f₂|" },
    ],
    pyqs: [
      { year: 2022, q: "A tuning fork gives 5 beats with 250 Hz. When waxed, beats become 3. Its frequency is:", answer: "255 Hz (waxing lowers f, beats decrease → f>250)." },
    ],
  },
  {
    slug: "optics",
    name: "Optics",
    overview:
      "Covers reflection, refraction, lenses, mirrors, dispersion, interference, diffraction and polarisation.",
    objectives: [
      "Apply mirror and lens formulae",
      "Explain total internal reflection",
      "Describe interference and diffraction",
      "Analyse polarisation phenomena",
    ],
    notes:
      "Geometrical optics treats light as rays and explains image formation by mirrors and lenses. Wave optics treats light as a wave and explains interference (Young's experiment), diffraction (single slit) and polarisation (Brewster's law).",
    formulas: [
      { name: "Mirror formula", expr: "1/v + 1/u = 1/f" },
      { name: "Lens formula", expr: "1/v − 1/u = 1/f" },
      { name: "Refractive index", expr: "n = c/v = sin i / sin r" },
      { name: "Fringe width", expr: "β = λD/d" },
      { name: "Brewster's law", expr: "tan i_p = n" },
    ],
    definitions: [
      { term: "Focal length", meaning: "Distance from pole where parallel rays converge." },
      { term: "Critical angle", meaning: "Angle of incidence in denser medium at which refraction angle = 90°." },
    ],
    keyPoints: [
      "Concave mirror can form real or virtual image.",
      "Convex lens with u < f gives virtual, erect, magnified image.",
      "TIR condition: light going denser → rarer, i > θ_c.",
    ],
    mcqs: [
      { q: "Focal length of convex lens is:", options: ["Negative", "Positive", "Zero", "Infinity"], answer: 1 },
      { q: "In Young's experiment, β = λD/d. If d doubles, β becomes:", options: ["2β", "β/2", "β", "4β"], answer: 1 },
      { q: "Critical angle when n=1.5:", options: ["30°", "42°", "60°", "90°"], answer: 1 },
      { q: "Polarisation shows light is:", options: ["Longitudinal", "Transverse", "Both", "None"], answer: 1 },
      { q: "Power of lens f=50 cm:", options: ["0.5 D", "2 D", "5 D", "50 D"], answer: 1 },
    ],
    flashcards: [
      { front: "Snell's law", back: "n₁ sin θ₁ = n₂ sin θ₂" },
      { front: "Magnification (mirror)", back: "m = −v/u" },
      { front: "Diffraction", back: "Bending of waves around obstacles." },
      { front: "Coherent sources", back: "Sources of same frequency and constant phase difference." },
      { front: "Brewster angle", back: "Angle where reflected light is fully polarised." },
    ],
    pyqs: [
      { year: 2024, q: "An object placed at 20 cm from convex lens (f=10) gives image at:", answer: "1/v−1/(−20)=1/10 ⇒ v=20 cm, real inverted." },
    ],
  },
  {
    slug: "electrostatics",
    name: "Electrostatics",
    overview:
      "Studies stationary electric charges — the forces, fields, potentials and energies they produce.",
    objectives: [
      "State Coulomb's law and superposition",
      "Compute electric field and potential",
      "Apply Gauss's law",
      "Analyse capacitors in series and parallel",
    ],
    notes:
      "Charges exert forces given by Coulomb's law. An electric field is force per unit positive charge. Potential is work done per unit charge. Gauss's law relates flux through a closed surface to enclosed charge and simplifies field calculations for symmetric distributions.",
    formulas: [
      { name: "Coulomb's law", expr: "F = k q₁q₂ / r²" },
      { name: "Electric field of point charge", expr: "E = kq/r²" },
      { name: "Potential of point charge", expr: "V = kq/r" },
      { name: "Capacitance (parallel plate)", expr: "C = ε₀A/d" },
      { name: "Energy stored", expr: "U = ½CV²" },
    ],
    definitions: [
      { term: "Electric flux", meaning: "Φ = ∫E·dA, measures field lines through a surface." },
      { term: "Equipotential surface", meaning: "Surface on which potential is constant." },
    ],
    keyPoints: [
      "Field is perpendicular to equipotential surface.",
      "In series: 1/C = Σ 1/Cᵢ; parallel: C = Σ Cᵢ.",
      "Field inside a conductor in electrostatic equilibrium is zero.",
    ],
    mcqs: [
      { q: "SI unit of electric field:", options: ["N/C", "V·m", "C/N", "F"], answer: 0 },
      { q: "Two capacitors 3μF & 6μF in series:", options: ["2 μF", "9 μF", "18 μF", "0.5 μF"], answer: 0 },
      { q: "Coulomb's law force varies with r as:", options: ["1/r", "1/r²", "r", "r²"], answer: 1 },
      { q: "Potential at distance r from point charge q:", options: ["kq/r²", "kq/r", "kqr", "kq"], answer: 1 },
      { q: "Energy stored in capacitor:", options: ["QV", "½QV", "½Q/V", "V²/C"], answer: 1 },
    ],
    flashcards: [
      { front: "Coulomb constant", back: "k = 1/(4πε₀) ≈ 9×10⁹ N·m²/C²" },
      { front: "Electric dipole moment", back: "p = q·2a, direction −q to +q." },
      { front: "Gauss's law", back: "∮E·dA = q_enc/ε₀" },
      { front: "Capacitor in parallel", back: "C_eq = C₁ + C₂" },
      { front: "Field inside conductor", back: "Zero (electrostatic)." },
    ],
    pyqs: [
      { year: 2023, q: "Three 3μF capacitors in parallel across 10V. Energy stored:", answer: "C=9μF, U=½·9μF·100=450 μJ." },
    ],
  },
  {
    slug: "semiconductors",
    name: "Semiconductors",
    overview:
      "Introduces conduction in semiconductors, doping, p-n junctions and elementary devices like diodes.",
    objectives: [
      "Differentiate conductors, insulators and semiconductors",
      "Describe intrinsic and extrinsic semiconductors",
      "Explain p-n junction behaviour",
      "Understand diode as rectifier",
    ],
    notes:
      "Semiconductors have moderate conductivity that increases with temperature. Doping with pentavalent (n-type) or trivalent (p-type) atoms creates majority carriers. A p-n junction forms a depletion region and permits current preferentially in forward bias, functioning as a diode.",
    formulas: [
      { name: "Conductivity", expr: "σ = e(n_e μ_e + n_h μ_h)" },
      { name: "Mass-action law", expr: "n_e · n_h = n_i²" },
    ],
    definitions: [
      { term: "Intrinsic semiconductor", meaning: "Pure semiconductor without doping." },
      { term: "Depletion region", meaning: "Zone at p-n junction free of mobile carriers." },
    ],
    keyPoints: [
      "In n-type, majority carriers are electrons.",
      "Forward bias lowers barrier potential.",
      "Diode conducts only when forward biased above knee voltage.",
    ],
    mcqs: [
      { q: "Doping Si with As gives:", options: ["p-type", "n-type", "Intrinsic", "Insulator"], answer: 1 },
      { q: "In forward bias, depletion region:", options: ["Widens", "Narrows", "Unchanged", "Disappears fully"], answer: 1 },
      { q: "Majority carriers in p-type:", options: ["Electrons", "Holes", "Ions", "Protons"], answer: 1 },
      { q: "Diode acts as:", options: ["Amplifier", "Rectifier", "Oscillator", "Transformer"], answer: 1 },
      { q: "Band gap of Si:", options: ["~1.1 eV", "5 eV", "0.1 eV", "10 eV"], answer: 0 },
    ],
    flashcards: [
      { front: "n-type dopant", back: "Pentavalent (P, As, Sb)." },
      { front: "p-type dopant", back: "Trivalent (B, Al, In)." },
      { front: "Reverse bias", back: "p to −, n to +; very small current." },
      { front: "Zener diode", back: "Operates in reverse breakdown; used as voltage regulator." },
      { front: "Semiconductor at 0 K", back: "Behaves as insulator." },
    ],
    pyqs: [
      { year: 2024, q: "In a p-n junction, the barrier potential for Si is approximately:", answer: "≈ 0.7 V." },
    ],
  },
];

// ---------- CHEMISTRY ----------
const chemistry: Chapter[] = [
  {
    slug: "basic-concepts",
    name: "Some Basic concepts of chemistry",
    overview:
      "Foundational chapter on matter, laws of chemical combination, atomic and molecular masses, mole concept and stoichiometry.",
    objectives: [
      "State laws of chemical combination",
      "Use the mole concept and Avogadro's number",
      "Perform stoichiometric calculations",
      "Compute empirical and molecular formulae",
    ],
    notes:
      "Chemistry deals with composition and transformations of matter. Dalton's atomic theory and laws (conservation of mass, definite proportions) underpin quantitative chemistry. The mole is the SI unit for amount of substance; 1 mole contains Nₐ = 6.022×10²³ entities.",
    formulas: [
      { name: "Number of moles", expr: "n = mass / molar mass" },
      { name: "Molarity", expr: "M = moles solute / L solution" },
      { name: "% composition", expr: "(mass of element / mass of compound) × 100" },
    ],
    definitions: [
      { term: "Mole", meaning: "Amount of substance containing Nₐ entities." },
      { term: "Molar mass", meaning: "Mass of one mole in grams." },
    ],
    keyPoints: [
      "Nₐ = 6.022×10²³ mol⁻¹.",
      "22.4 L is molar volume of gas at STP.",
      "Empirical formula is the simplest whole-number ratio of atoms.",
    ],
    mcqs: [
      { q: "Number of atoms in 12 g of C-12:", options: ["6.022×10²²", "6.022×10²³", "12", "1"], answer: 1 },
      { q: "Molarity of 0.5 mol NaOH in 500 mL:", options: ["0.5 M", "1 M", "2 M", "0.25 M"], answer: 1 },
      { q: "STP molar volume:", options: ["11.2 L", "22.4 L", "24.5 L", "44.8 L"], answer: 1 },
      { q: "Empirical formula of glucose C₆H₁₂O₆:", options: ["CHO", "CH₂O", "C₂H₄O₂", "C₃H₆O₃"], answer: 1 },
      { q: "Which is law of definite proportions?", options: ["Lavoisier", "Proust", "Dalton", "Gay-Lussac"], answer: 1 },
    ],
    flashcards: [
      { front: "Avogadro's number", back: "6.022×10²³" },
      { front: "Molarity", back: "moles of solute per litre of solution." },
      { front: "Molality", back: "moles of solute per kg of solvent." },
      { front: "Limiting reagent", back: "Reactant completely consumed first." },
      { front: "1 amu", back: "1.66×10⁻²⁴ g" },
    ],
    pyqs: [
      { year: 2023, q: "How many molecules in 9 g of water?", answer: "n=0.5 mol; 0.5·Nₐ = 3.011×10²³." },
    ],
  },
  {
    slug: "structure-of-atom",
    name: "Structure of atom",
    overview:
      "Traces the development of atomic models from Thomson to quantum mechanical, and discusses electronic configuration.",
    objectives: [
      "Describe Rutherford and Bohr models",
      "Explain quantum numbers",
      "Write electronic configurations",
      "State Hund's, Pauli and Aufbau rules",
    ],
    notes:
      "Bohr proposed quantised electron orbits explaining hydrogen spectrum. Quantum mechanics describes electrons as probability clouds characterised by four quantum numbers (n, l, m_l, m_s). Electron configuration follows Aufbau principle, Pauli exclusion and Hund's rule.",
    formulas: [
      { name: "Bohr radius (n)", expr: "r_n = 0.529·n²/Z Å" },
      { name: "Bohr energy", expr: "E_n = −13.6·Z²/n² eV" },
      { name: "de Broglie", expr: "λ = h/mv" },
    ],
    definitions: [
      { term: "Quantum number", meaning: "Set of integers describing an electron's state." },
      { term: "Orbital", meaning: "Region around nucleus with high probability of finding electron." },
    ],
    keyPoints: [
      "Maximum electrons in shell = 2n².",
      "Hund's rule: half-fill degenerate orbitals before pairing.",
      "s(2), p(6), d(10), f(14).",
    ],
    mcqs: [
      { q: "Max electrons in n=3:", options: ["6", "10", "18", "32"], answer: 2 },
      { q: "Quantum number for orbital shape:", options: ["n", "l", "m", "s"], answer: 1 },
      { q: "Ground-state configuration of O (Z=8):", options: ["1s²2s²2p⁴", "1s²2s²2p⁶", "1s²2s²2p³", "1s²2s²3p⁴"], answer: 0 },
      { q: "Energy of H atom in n=2:", options: ["−13.6 eV", "−3.4 eV", "−1.51 eV", "0"], answer: 1 },
      { q: "Wavelength associated with particle is:", options: ["λ=h/p", "λ=hp", "λ=p/h", "λ=hν"], answer: 0 },
    ],
    flashcards: [
      { front: "Aufbau principle", back: "Electrons fill lowest energy orbitals first." },
      { front: "Pauli exclusion", back: "No two electrons have all four quantum numbers same." },
      { front: "Hund's rule", back: "Fill degenerate orbitals singly with parallel spins first." },
      { front: "s orbital shape", back: "Spherical." },
      { front: "p orbital shape", back: "Dumbbell (three orientations)." },
    ],
    pyqs: [
      { year: 2022, q: "Total nodes in 3p orbital:", answer: "n−1 = 2 (1 radial + 1 angular)." },
    ],
  },
  {
    slug: "chemical-bonding",
    name: "Chemical Bonding",
    overview:
      "Covers ionic, covalent and coordinate bonds, Lewis structures, VSEPR theory, hybridisation and bond parameters.",
    objectives: [
      "Draw Lewis structures",
      "Predict geometry by VSEPR",
      "Explain hybridisation and shape",
      "Compare σ and π bonds",
    ],
    notes:
      "Atoms combine to attain stable octets. Ionic bonds form by electron transfer, covalent by sharing. VSEPR predicts molecular shape from electron-pair repulsion. Hybridisation combines atomic orbitals into equivalent hybrids that explain observed geometries.",
    formulas: [
      { name: "Formal charge", expr: "FC = V − L − ½S" },
      { name: "Bond order (MOT)", expr: "BO = (N_b − N_a)/2" },
    ],
    definitions: [
      { term: "Electronegativity", meaning: "Tendency of atom in a bond to attract shared electrons." },
      { term: "Hybridisation", meaning: "Mixing of atomic orbitals of comparable energy to form new hybrid orbitals." },
    ],
    keyPoints: [
      "sp = linear, sp² = trigonal planar, sp³ = tetrahedral.",
      "π bonds are weaker than σ bonds.",
      "Lone pair-lone pair > lone pair-bond pair > bond pair-bond pair repulsion.",
    ],
    mcqs: [
      { q: "Shape of NH₃:", options: ["Trigonal planar", "Pyramidal", "Tetrahedral", "Linear"], answer: 1 },
      { q: "Hybridisation of C in ethene:", options: ["sp", "sp²", "sp³", "sp³d"], answer: 1 },
      { q: "Bond order of O₂:", options: ["1", "2", "2.5", "3"], answer: 1 },
      { q: "Which is not a σ bond?", options: ["s-s", "s-p", "p-p (head-on)", "p-p (side)"], answer: 3 },
      { q: "Ionic character increases with:", options: ["Similar EN", "Large ΔEN", "Small size", "Low charge"], answer: 1 },
    ],
    flashcards: [
      { front: "Ionic bond", back: "Electrostatic attraction after electron transfer." },
      { front: "Covalent bond", back: "Bond by sharing of electron pairs." },
      { front: "Coordinate bond", back: "Both electrons donated by one atom." },
      { front: "VSEPR", back: "Electron pairs arrange to minimise repulsion." },
      { front: "σ vs π", back: "σ: head-on overlap; π: sideways overlap." },
    ],
    pyqs: [
      { year: 2024, q: "Shape of BF₃:", answer: "sp², trigonal planar, 120°." },
    ],
  },
  {
    slug: "redox-reactions",
    name: "Redox reactions",
    overview:
      "Studies electron-transfer reactions using oxidation numbers and balances redox equations in acidic/basic media.",
    objectives: [
      "Assign oxidation numbers",
      "Identify oxidising and reducing agents",
      "Balance redox equations",
      "Explain redox in terms of electron transfer",
    ],
    notes:
      "In redox, one species is oxidised (loses electrons) and another reduced (gains). Oxidation number bookkeeping helps identify these species and balance complex equations either by oxidation-number or half-reaction (ion-electron) methods.",
    formulas: [
      { name: "Oxidation number check", expr: "Σ ON = charge on species" },
    ],
    definitions: [
      { term: "Oxidation", meaning: "Loss of electrons / increase in oxidation number." },
      { term: "Reduction", meaning: "Gain of electrons / decrease in oxidation number." },
    ],
    keyPoints: [
      "O usually −2 (except peroxides −1, OF₂ +2).",
      "H is +1 (except metal hydrides −1).",
      "Disproportionation: same species oxidised and reduced.",
    ],
    mcqs: [
      { q: "ON of Mn in KMnO₄:", options: ["+2", "+4", "+6", "+7"], answer: 3 },
      { q: "In H₂O₂, oxidation number of O:", options: ["−2", "−1", "0", "+1"], answer: 1 },
      { q: "Reducing agent is one which:", options: ["Gains electrons", "Loses electrons", "Both", "Neither"], answer: 1 },
      { q: "Disproportionation example:", options: ["Cl₂+H₂O", "NaCl", "H₂+O₂", "HCl"], answer: 0 },
      { q: "ON of S in H₂SO₄:", options: ["+2", "+4", "+6", "+8"], answer: 2 },
    ],
    flashcards: [
      { front: "Oxidising agent", back: "Substance that oxidises others; itself gets reduced." },
      { front: "Reducing agent", back: "Substance that reduces others; itself gets oxidised." },
      { front: "Redox couple", back: "Ox/Red pair, e.g. Cu²⁺/Cu." },
      { front: "Half-reaction", back: "Oxidation or reduction shown separately with electrons." },
      { front: "Balancing in acidic medium", back: "Balance atoms, then O with H₂O, H with H⁺, charge with e⁻." },
    ],
    pyqs: [
      { year: 2023, q: "ON of Cr in K₂Cr₂O₇:", answer: "+6." },
    ],
  },
  {
    slug: "group-1-2",
    name: "Elements of group 1 and 2",
    overview:
      "Covers alkali (Group 1) and alkaline-earth (Group 2) metals — trends in properties, reactions, and important compounds.",
    objectives: [
      "Describe periodic trends in Groups 1 and 2",
      "Explain reactivity with water, oxygen, halogens",
      "Discuss uses of Na, K, Mg, Ca and their compounds",
    ],
    notes:
      "Group 1 metals are highly reactive, low-density, low-melting, form +1 ions, and give strongly basic hydroxides. Group 2 metals form +2 ions, are harder, denser and less reactive than Group 1. Both are strong reducing agents and give characteristic flame colours.",
    formulas: [],
    definitions: [
      { term: "Alkali metals", meaning: "Group 1 elements (Li, Na, K, Rb, Cs)." },
      { term: "Alkaline earth metals", meaning: "Group 2 elements (Be, Mg, Ca, Sr, Ba)." },
    ],
    keyPoints: [
      "Reactivity increases down the group.",
      "Group 2 hydroxides are less soluble than Group 1.",
      "Li resembles Mg (diagonal relationship).",
    ],
    mcqs: [
      { q: "Most reactive alkali metal (common):", options: ["Li", "Na", "K", "Cs"], answer: 3 },
      { q: "Flame colour of Ca:", options: ["Brick red", "Yellow", "Violet", "Crimson"], answer: 0 },
      { q: "Slaked lime is:", options: ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"], answer: 1 },
      { q: "Diagonal relation of Li is with:", options: ["Be", "Mg", "Al", "B"], answer: 1 },
      { q: "Group 1 hydrides are:", options: ["Covalent", "Ionic", "Metallic", "Coordinate"], answer: 1 },
    ],
    flashcards: [
      { front: "Group 1 ion", back: "+1, formed by losing one s-electron." },
      { front: "Group 2 ion", back: "+2, formed by losing two s-electrons." },
      { front: "Reactivity with water", back: "Group 1 vigorous; Group 2 slower (except Be)." },
      { front: "Flame test Na", back: "Golden yellow." },
      { front: "Uses of Mg", back: "Alloys, flash powder, chlorophyll." },
    ],
    pyqs: [
      { year: 2022, q: "Which is not an alkaline earth metal?", answer: "Li (it is alkali)." },
    ],
  },
  {
    slug: "states-of-matter",
    name: "States of Matter (Gaseous and Liquids)",
    overview:
      "Explains behaviour of gases and liquids using gas laws, kinetic theory, real-gas equation and properties like viscosity and surface tension.",
    objectives: [
      "Apply gas laws and ideal-gas equation",
      "Describe kinetic molecular theory",
      "Explain deviations from ideal behaviour",
      "Discuss viscosity and surface tension of liquids",
    ],
    notes:
      "Gases obey Boyle's, Charles' and Avogadro's laws combined in PV = nRT. Real gases deviate from ideality at high P and low T, described by van der Waals equation. Liquids show intermediate properties: definite volume, no definite shape, and characteristic viscosity and surface tension.",
    formulas: [
      { name: "Ideal gas", expr: "PV = nRT" },
      { name: "van der Waals", expr: "(P + a/V²)(V − b) = RT" },
      { name: "Graham's law", expr: "r ∝ 1/√M" },
    ],
    definitions: [
      { term: "STP", meaning: "0°C, 1 atm (IUPAC now: 0°C, 1 bar)." },
      { term: "Surface tension", meaning: "Force per unit length acting on liquid surface." },
    ],
    keyPoints: [
      "R = 8.314 J/mol·K.",
      "Real gases deviate most near liquefaction.",
      "Viscosity decreases with temperature for liquids.",
    ],
    mcqs: [
      { q: "At constant T, P·V = const is:", options: ["Charles' law", "Boyle's law", "Avogadro's", "Dalton's"], answer: 1 },
      { q: "Value of R (J/mol·K):", options: ["0.0821", "8.314", "1.987", "0.082"], answer: 1 },
      { q: "Compressibility factor Z for ideal gas:", options: ["0", "1", "<1", ">1"], answer: 1 },
      { q: "Surface tension unit:", options: ["N/m", "N·m", "N", "Pa"], answer: 0 },
      { q: "Graham's law relates rate of effusion to:", options: ["Molar mass", "Temperature", "Volume", "Pressure"], answer: 0 },
    ],
    flashcards: [
      { front: "Boyle's law", back: "P ∝ 1/V (T constant)." },
      { front: "Charles' law", back: "V ∝ T (P constant)." },
      { front: "Kinetic theory", back: "Gas is many small particles in constant random motion; PE=0; KE ∝ T." },
      { front: "Vapour pressure", back: "Pressure of vapour in equilibrium with its liquid at given T." },
      { front: "Viscosity", back: "Resistance to flow of a liquid." },
    ],
    pyqs: [
      { year: 2024, q: "A gas at 300 K, 1 atm occupies 22.4 L. Moles present:", answer: "n = PV/RT ≈ 0.91 mol." },
    ],
  },
  {
    slug: "adsorption-colloids",
    name: "Adsorption and colloids (Surface Chemistry)",
    overview:
      "Deals with phenomena occurring at surfaces — adsorption, catalysis and colloidal states.",
    objectives: [
      "Distinguish absorption and adsorption",
      "Compare physisorption and chemisorption",
      "Classify colloids and describe their properties",
      "Explain catalysis and enzyme action",
    ],
    notes:
      "Adsorption is accumulation of a substance on a surface. Physisorption uses van der Waals forces (weak, low T), chemisorption uses chemical bonds (strong, higher T). Colloids have particle size 1–1000 nm and show Tyndall effect, Brownian motion, coagulation and electrophoresis.",
    formulas: [
      { name: "Freundlich isotherm", expr: "x/m = k·P^(1/n)" },
    ],
    definitions: [
      { term: "Adsorbate", meaning: "Substance getting adsorbed on surface." },
      { term: "Colloid", meaning: "Heterogeneous system with dispersed phase in dispersion medium." },
    ],
    keyPoints: [
      "Adsorption is exothermic.",
      "Tyndall effect distinguishes colloid from true solution.",
      "Catalyst lowers activation energy without being consumed.",
    ],
    mcqs: [
      { q: "Physisorption is:", options: ["Very strong", "Weak (van der Waals)", "Chemical bonding", "Irreversible"], answer: 1 },
      { q: "Tyndall effect is due to:", options: ["Absorption", "Reflection", "Scattering", "Refraction"], answer: 2 },
      { q: "Emulsion is:", options: ["Liquid in liquid", "Solid in liquid", "Gas in liquid", "Liquid in gas"], answer: 0 },
      { q: "Which is a natural colloid?", options: ["Blood", "Salt solution", "Sugar solution", "Alcohol"], answer: 0 },
      { q: "Catalyst affects:", options: ["ΔH", "K_eq", "Activation energy", "Nothing"], answer: 2 },
    ],
    flashcards: [
      { front: "Physisorption vs chemisorption", back: "Physisorption reversible & weak; chemisorption irreversible & strong." },
      { front: "Brownian motion", back: "Random zig-zag motion of colloidal particles." },
      { front: "Coagulation", back: "Precipitation of colloid by adding electrolyte." },
      { front: "Sol", back: "Solid dispersed in liquid." },
      { front: "Hardy-Schulze rule", back: "Higher-charge ion is more effective in coagulation." },
    ],
    pyqs: [
      { year: 2023, q: "Which is not a colloidal system?", answer: "Sugar in water (true solution)." },
    ],
  },
  {
    slug: "hydrocarbons",
    name: "Hydrocarbons",
    overview:
      "Classifies and studies alkanes, alkenes, alkynes and aromatic compounds — preparation, properties and reactions.",
    objectives: [
      "Classify hydrocarbons",
      "Compare reactivity of saturated and unsaturated hydrocarbons",
      "Discuss Markovnikov and peroxide effects",
      "Describe aromaticity and benzene reactions",
    ],
    notes:
      "Alkanes (CₙH₂ₙ₊₂) undergo substitution; alkenes (CₙH₂ₙ) and alkynes (CₙH₂ₙ₋₂) undergo addition. Aromatic hydrocarbons like benzene undergo electrophilic substitution due to delocalised π electrons.",
    formulas: [
      { name: "Alkane general", expr: "CₙH₂ₙ₊₂" },
      { name: "Alkene general", expr: "CₙH₂ₙ" },
      { name: "Alkyne general", expr: "CₙH₂ₙ₋₂" },
    ],
    definitions: [
      { term: "Markovnikov rule", meaning: "H attaches to C with more H atoms in HX addition." },
      { term: "Aromaticity", meaning: "Extra stability of planar cyclic conjugated systems with (4n+2)π electrons." },
    ],
    keyPoints: [
      "Combustion is common to all hydrocarbons.",
      "Ozonolysis of alkenes gives carbonyl compounds.",
      "Benzene resists addition; prefers substitution.",
    ],
    mcqs: [
      { q: "Ethene + HBr gives (peroxide free):", options: ["Ethyl bromide", "Vinyl bromide", "Ethane", "Bromoethane per Markovnikov"], answer: 0 },
      { q: "Which is aromatic?", options: ["Cyclohexane", "Benzene", "Cyclopropane", "Butene"], answer: 1 },
      { q: "Alkyne functional group:", options: ["C=C", "C≡C", "C−C", "C−O"], answer: 1 },
      { q: "Markovnikov gives major product in:", options: ["Symmetrical alkene", "Unsymmetrical alkene", "Alkane", "Aromatics"], answer: 1 },
      { q: "Complete combustion of CH₄ gives:", options: ["CO", "CO₂+H₂O", "C+H₂", "CH₃OH"], answer: 1 },
    ],
    flashcards: [
      { front: "Saturated hydrocarbon", back: "Only single C-C bonds (alkanes)." },
      { front: "Unsaturated", back: "Contains C=C or C≡C." },
      { front: "Peroxide effect", back: "Anti-Markovnikov addition of HBr in presence of peroxides." },
      { front: "Wurtz reaction", back: "2R-X + 2Na → R-R + 2NaX." },
      { front: "Aromatic count", back: "Hückel's rule: (4n+2)π electrons." },
    ],
    pyqs: [
      { year: 2024, q: "Product of propene + HBr with peroxide:", answer: "1-Bromopropane (anti-Markovnikov)." },
    ],
  },
  {
    slug: "basic-organic",
    name: "Basic principles of organic chemistry",
    overview:
      "Introduces functional groups, IUPAC nomenclature, isomerism, and reaction mechanisms (inductive, resonance, hyperconjugation).",
    objectives: [
      "Name organic compounds using IUPAC rules",
      "Identify functional groups",
      "Classify isomerism",
      "Explain electronic effects in bonds",
    ],
    notes:
      "Organic chemistry systematises carbon compounds. IUPAC nomenclature uses longest chain, functional group priority, and locants. Isomers share molecular formula but differ in structure or arrangement. Electron-displacement effects rationalise reactivity and stability.",
    formulas: [],
    definitions: [
      { term: "Homologous series", meaning: "Family of compounds with same functional group and general formula." },
      { term: "Resonance", meaning: "Delocalisation of π electrons across atoms giving stabilisation." },
    ],
    keyPoints: [
      "Priority: −COOH > −SO₃H > −COOR > −COX > −CN > −CHO.",
      "Positive inductive effect stabilises carbocations only weakly compared to hyperconjugation.",
      "Chain, position, functional, tautomerism are structural isomerisms.",
    ],
    mcqs: [
      { q: "IUPAC name of CH₃−CH(OH)−CH₃:", options: ["Ethanol", "Propan-2-ol", "Propan-1-ol", "Methanol"], answer: 1 },
      { q: "Which is not a functional group?", options: ["−OH", "−CHO", "−CH₃", "−COOH"], answer: 2 },
      { q: "Number of structural isomers of C₄H₁₀:", options: ["1", "2", "3", "4"], answer: 1 },
      { q: "+I effect group:", options: ["−NO₂", "−CN", "−CH₃", "−COOH"], answer: 2 },
      { q: "Most stable carbocation:", options: ["Methyl", "Primary", "Secondary", "Tertiary"], answer: 3 },
    ],
    flashcards: [
      { front: "IUPAC step 1", back: "Identify longest carbon chain containing principal group." },
      { front: "Inductive effect", back: "Permanent σ-electron displacement along chain." },
      { front: "Resonance", back: "π-electron delocalisation stabilising molecule." },
      { front: "Hyperconjugation", back: "Delocalisation of σ-electrons of C−H into adjacent empty p or π orbital." },
      { front: "Geometrical isomer", back: "Cis/trans about C=C." },
    ],
    pyqs: [
      { year: 2023, q: "IUPAC name of (CH₃)₃CBr:", answer: "2-Bromo-2-methylpropane." },
    ],
  },
  {
    slug: "chemistry-everyday",
    name: "Chemistry in everyday life",
    overview:
      "Surveys chemicals in medicines, food, cleansing agents and their roles in daily life.",
    objectives: [
      "Classify drugs by pharmacological action",
      "Describe common food additives and preservatives",
      "Explain action of soaps and detergents",
    ],
    notes:
      "Medicines act as antacids, antihistamines, antibiotics, antiseptics, and analgesics. Preservatives like sodium benzoate prevent food spoilage. Soaps are sodium salts of fatty acids; detergents work even in hard water because their salts are soluble.",
    formulas: [],
    definitions: [
      { term: "Antibiotic", meaning: "Chemical that inhibits or kills microorganisms." },
      { term: "Detergent", meaning: "Synthetic cleansing agent effective in hard water." },
    ],
    keyPoints: [
      "Aspirin is an analgesic and antipyretic.",
      "Iodine tincture is an antiseptic.",
      "Saccharin is an artificial sweetener.",
    ],
    mcqs: [
      { q: "Common antacid:", options: ["Aspirin", "Ranitidine", "Paracetamol", "Ibuprofen"], answer: 1 },
      { q: "Soap is sodium salt of:", options: ["Alcohol", "Fatty acid", "Amine", "Ester"], answer: 1 },
      { q: "Preservative in jams:", options: ["NaCl", "Sodium benzoate", "Sugar only", "HCl"], answer: 1 },
      { q: "Artificial sweetener:", options: ["Glucose", "Sucrose", "Saccharin", "Lactose"], answer: 2 },
      { q: "Antibiotic example:", options: ["Aspirin", "Penicillin", "Paracetamol", "Vitamin C"], answer: 1 },
    ],
    flashcards: [
      { front: "Antipyretic", back: "Reduces fever (e.g. paracetamol)." },
      { front: "Antiseptic", back: "Applied to living tissue to kill microbes." },
      { front: "Disinfectant", back: "Applied to non-living surfaces to kill microbes." },
      { front: "Soaps vs detergents", back: "Soaps fail in hard water; detergents don't." },
      { front: "Analgesic", back: "Pain-relieving drug." },
    ],
    pyqs: [
      { year: 2022, q: "Chemical name of aspirin:", answer: "Acetylsalicylic acid." },
    ],
  },
];

// ---------- MATHEMATICS ----------
const mathematics: Chapter[] = [
  {
    slug: "trigonometry-ii",
    name: "Trigonometry II",
    overview:
      "Extends trigonometry to compound, multiple and sub-multiple angles and to solving trigonometric equations.",
    objectives: [
      "Prove and use compound-angle identities",
      "Derive multiple- and half-angle formulae",
      "Solve trigonometric equations",
    ],
    notes:
      "Compound-angle formulae express sin(A±B), cos(A±B), tan(A±B). From these follow double- and half-angle results and product-to-sum conversions used to solve trigonometric equations over principal ranges.",
    formulas: [
      { name: "sin(A+B)", expr: "sinA cosB + cosA sinB" },
      { name: "cos(A+B)", expr: "cosA cosB − sinA sinB" },
      { name: "tan(A+B)", expr: "(tanA + tanB)/(1 − tanA tanB)" },
      { name: "sin 2A", expr: "2 sinA cosA" },
      { name: "cos 2A", expr: "cos²A − sin²A = 1 − 2sin²A" },
    ],
    definitions: [
      { term: "Principal solution", meaning: "Solution of trig equation in [0, 2π)." },
      { term: "General solution", meaning: "All solutions written using integer parameter n." },
    ],
    keyPoints: [
      "sinx = 0 ⇒ x = nπ.",
      "cosx = 0 ⇒ x = (2n+1)π/2.",
      "tanx = tanα ⇒ x = nπ + α.",
    ],
    mcqs: [
      { q: "Value of sin 75°:", options: ["(√6+√2)/4", "(√6−√2)/4", "(√3+1)/4", "1/2"], answer: 0 },
      { q: "cos 2A in terms of cosA:", options: ["1−2cos²A", "2cos²A−1", "1−sin²A", "2sin²A"], answer: 1 },
      { q: "Number of solutions of sinx = 0 in [0,2π]:", options: ["1", "2", "3", "4"], answer: 2 },
      { q: "sin(π/2 − x):", options: ["sinx", "−sinx", "cosx", "−cosx"], answer: 2 },
      { q: "tan(45°+45°):", options: ["1", "0", "∞ (undefined)", "−1"], answer: 2 },
    ],
    flashcards: [
      { front: "Half angle sin", back: "sin(A/2) = ±√((1−cosA)/2)" },
      { front: "Product to sum", back: "2 sinA cosB = sin(A+B)+sin(A−B)" },
      { front: "Range of sinx", back: "[−1, 1]" },
      { front: "General sin equation", back: "sinx=sinα ⇒ x=nπ+(−1)ⁿ α" },
      { front: "sin 3A", back: "3 sinA − 4 sin³A" },
    ],
    pyqs: [
      { year: 2024, q: "Solve 2 sin²x − 1 = 0 in [0, 2π]:", answer: "x = π/4, 3π/4, 5π/4, 7π/4." },
    ],
  },
  {
    slug: "straight-line",
    name: "Straight Line",
    overview:
      "Studies equations, slopes and angles of straight lines, and distances involving lines and points.",
    objectives: [
      "Write equations in various forms",
      "Compute slope, angle, distance",
      "Find intersection of lines",
    ],
    notes:
      "A line in a plane is characterised by two parameters (slope-intercept, point-slope, two-point, intercept and normal forms). Angle between lines, perpendicular distance from a point, and family of lines through intersection are standard applications.",
    formulas: [
      { name: "Slope from two points", expr: "m = (y₂−y₁)/(x₂−x₁)" },
      { name: "Point-slope", expr: "y − y₁ = m(x − x₁)" },
      { name: "Perpendicular distance", expr: "d = |ax₀+by₀+c|/√(a²+b²)" },
      { name: "Angle between lines", expr: "tanθ = |(m₁−m₂)/(1+m₁m₂)|" },
    ],
    definitions: [
      { term: "Intercept form", meaning: "x/a + y/b = 1 with x-intercept a, y-intercept b." },
      { term: "Concurrent lines", meaning: "Three or more lines meeting at a single point." },
    ],
    keyPoints: [
      "Parallel lines: m₁ = m₂.",
      "Perpendicular lines: m₁·m₂ = −1.",
      "Distance between parallel lines = |c₁−c₂|/√(a²+b²).",
    ],
    mcqs: [
      { q: "Slope of line 2x+3y=6:", options: ["2/3", "−2/3", "3/2", "−3/2"], answer: 1 },
      { q: "Line perpendicular to y=2x+1 with slope:", options: ["2", "1/2", "−1/2", "−2"], answer: 2 },
      { q: "Distance from (0,0) to 3x+4y+5=0:", options: ["1", "5", "0.5", "√7"], answer: 0 },
      { q: "Intercepts of x/3+y/4=1:", options: ["(3,4)", "(4,3)", "(1,1)", "(0,0)"], answer: 0 },
      { q: "Angle between y=x and y=−x:", options: ["30°", "45°", "60°", "90°"], answer: 3 },
    ],
    flashcards: [
      { front: "Slope-intercept form", back: "y = mx + c" },
      { front: "Normal form", back: "x cosα + y sinα = p" },
      { front: "Family of lines", back: "L₁ + λL₂ = 0 passes through their intersection." },
      { front: "Collinearity", back: "Points collinear ⇔ area of triangle = 0." },
      { front: "Angle bisectors", back: "(a₁x+b₁y+c₁)/√(a₁²+b₁²) = ±(a₂x+b₂y+c₂)/√(a₂²+b₂²)" },
    ],
    pyqs: [
      { year: 2023, q: "Equation of line through (1,2) parallel to y=3x+4:", answer: "y−2 = 3(x−1) ⇒ y=3x−1." },
    ],
  },
  {
    slug: "circle",
    name: "Circle",
    overview:
      "Standard forms of a circle, tangents, chords and system of circles.",
    objectives: [
      "Write equations of circle in various forms",
      "Find tangent and normal at a point",
      "Determine radical axis and system of circles",
    ],
    notes:
      "A circle is the locus of points at a fixed distance from a centre. Its general equation is x²+y²+2gx+2fy+c=0 with centre (−g,−f) and radius √(g²+f²−c). Tangents can be drawn from external points and length of tangent has a simple formula using the equation.",
    formulas: [
      { name: "Standard form", expr: "(x−h)² + (y−k)² = r²" },
      { name: "General form", expr: "x²+y²+2gx+2fy+c=0" },
      { name: "Tangent at (x₁,y₁)", expr: "xx₁ + yy₁ + g(x+x₁)+f(y+y₁)+c=0" },
      { name: "Length of tangent", expr: "√(x₁²+y₁²+2gx₁+2fy₁+c)" },
    ],
    definitions: [
      { term: "Chord of contact", meaning: "Line joining points of tangency of two tangents from external point." },
      { term: "Radical axis", meaning: "Locus of point with equal tangent length to two circles." },
    ],
    keyPoints: [
      "Radius = √(g²+f²−c) (must be real).",
      "Tangent perpendicular to radius at contact point.",
      "Two circles orthogonal: 2g₁g₂+2f₁f₂ = c₁+c₂.",
    ],
    mcqs: [
      { q: "Centre of x²+y²−4x+6y−12=0:", options: ["(2,−3)", "(−2,3)", "(2,3)", "(−2,−3)"], answer: 0 },
      { q: "Radius above:", options: ["1", "5", "4", "√25"], answer: 1 },
      { q: "Equation of circle with centre (0,0), r=3:", options: ["x²+y²=9", "x²+y²=3", "x+y=3", "(x−3)²+y²=0"], answer: 0 },
      { q: "Tangent from (0,0) to x²+y²=1 length:", options: ["0", "1", "√2", "Not possible (on/inside)"], answer: 3, explanation: "Origin lies on/inside circle." },
      { q: "Circle x²+y²=25 passes through:", options: ["(3,4)", "(4,5)", "(2,3)", "(1,1)"], answer: 0 },
    ],
    flashcards: [
      { front: "Diameter form", back: "(x−x₁)(x−x₂)+(y−y₁)(y−y₂)=0" },
      { front: "Equation of family through two circles", back: "S₁ + λS₂ = 0" },
      { front: "Common chord", back: "S₁ − S₂ = 0" },
      { front: "Chord of contact", back: "xx₁+yy₁+g(x+x₁)+f(y+y₁)+c=0" },
      { front: "Tangent to x²+y²=a² at (x₁,y₁)", back: "xx₁+yy₁=a²" },
    ],
    pyqs: [
      { year: 2024, q: "Radius of circle x²+y²−6x+8y=0:", answer: "√(9+16−0)=5." },
    ],
  },
  {
    slug: "probability",
    name: "Probability",
    overview:
      "Axiomatic probability, addition and multiplication rules, conditional probability and Bayes' theorem.",
    objectives: [
      "Compute probability of events",
      "Apply conditional probability",
      "Use Bayes' theorem",
    ],
    notes:
      "Probability quantifies uncertainty as a number in [0, 1]. Events combine via union, intersection and complement. Conditional probability P(A|B) = P(A∩B)/P(B). Bayes' theorem inverts conditioning.",
    formulas: [
      { name: "P(A∪B)", expr: "P(A)+P(B)−P(A∩B)" },
      { name: "Conditional", expr: "P(A|B) = P(A∩B)/P(B)" },
      { name: "Bayes' theorem", expr: "P(Aᵢ|E) = P(E|Aᵢ)P(Aᵢ)/ΣP(E|Aⱼ)P(Aⱼ)" },
      { name: "Independence", expr: "P(A∩B)=P(A)P(B)" },
    ],
    definitions: [
      { term: "Mutually exclusive", meaning: "Events with empty intersection." },
      { term: "Independent events", meaning: "Occurrence of one doesn't affect the other." },
    ],
    keyPoints: [
      "0 ≤ P(E) ≤ 1.",
      "Σ P(all outcomes) = 1.",
      "P(A̅) = 1 − P(A).",
    ],
    mcqs: [
      { q: "P(getting a 6 on fair die):", options: ["1/2", "1/3", "1/6", "1"], answer: 2 },
      { q: "Two coins, P(both heads):", options: ["1/2", "1/4", "1/3", "3/4"], answer: 1 },
      { q: "If A,B independent, P(A)=0.4, P(B)=0.5, P(A∩B):", options: ["0.9", "0.2", "0.1", "0.7"], answer: 1 },
      { q: "P(A∪B) if P(A)=0.3, P(B)=0.4, disjoint:", options: ["0.7", "0.12", "0.1", "0.58"], answer: 0 },
      { q: "Probability of a certain event:", options: ["0", "0.5", "1", "∞"], answer: 2 },
    ],
    flashcards: [
      { front: "Sample space", back: "Set of all possible outcomes." },
      { front: "Event", back: "Subset of sample space." },
      { front: "Complement", back: "P(A̅) = 1 − P(A)" },
      { front: "Bayes' theorem", back: "Updates prior probabilities with observed evidence." },
      { front: "Independent events", back: "P(A|B) = P(A)" },
    ],
    pyqs: [
      { year: 2023, q: "A card is drawn from 52. P(king or heart):", answer: "4/52 + 13/52 − 1/52 = 16/52 = 4/13." },
    ],
  },
  {
    slug: "complex-numbers",
    name: "Complex Numbers",
    overview:
      "Algebra of complex numbers, modulus-argument form, De Moivre's theorem and roots of unity.",
    objectives: [
      "Perform algebra of complex numbers",
      "Convert to polar form",
      "Apply De Moivre's theorem",
    ],
    notes:
      "A complex number z = a + ib has modulus |z| = √(a²+b²) and argument arg(z). In polar form z = r(cosθ + i sinθ). De Moivre's theorem: (cosθ + i sinθ)ⁿ = cos nθ + i sin nθ.",
    formulas: [
      { name: "Modulus", expr: "|z| = √(a²+b²)" },
      { name: "Conjugate", expr: "z̄ = a − ib" },
      { name: "Polar", expr: "z = r(cosθ + i sinθ)" },
      { name: "De Moivre", expr: "(cosθ+i sinθ)ⁿ = cos nθ + i sin nθ" },
    ],
    definitions: [
      { term: "Argument", meaning: "Angle θ that z makes with positive real axis." },
      { term: "Purely imaginary", meaning: "z with a=0, b≠0." },
    ],
    keyPoints: [
      "i² = −1.",
      "z z̄ = |z|².",
      "|z₁z₂| = |z₁||z₂|; arg(z₁z₂) = arg z₁ + arg z₂.",
    ],
    mcqs: [
      { q: "i^{10} equals:", options: ["1", "−1", "i", "−i"], answer: 1 },
      { q: "Modulus of 3+4i:", options: ["7", "5", "1", "25"], answer: 1 },
      { q: "Conjugate of 2−3i:", options: ["2+3i", "−2+3i", "−2−3i", "3−2i"], answer: 0 },
      { q: "Cube roots of unity are:", options: ["1, ω, ω²", "1, i, −1", "1, i, −i", "0, 1, −1"], answer: 0 },
      { q: "(1+i)²:", options: ["2i", "0", "2", "1+2i"], answer: 0 },
    ],
    flashcards: [
      { front: "Real part", back: "Re(z)=a" },
      { front: "Imaginary part", back: "Im(z)=b" },
      { front: "1+ω+ω²", back: "= 0" },
      { front: "ω³", back: "= 1" },
      { front: "|z₁/z₂|", back: "|z₁|/|z₂|" },
    ],
    pyqs: [
      { year: 2022, q: "Argument of 1+i:", answer: "π/4." },
    ],
  },
  {
    slug: "permutations-combinations",
    name: "Permutations and Combinations",
    overview:
      "Counting techniques — arrangements, selections and simple combinatorial identities.",
    objectives: [
      "Use fundamental principle of counting",
      "Compute nPr and nCr",
      "Solve arrangement/selection problems",
    ],
    notes:
      "The multiplication principle counts sequential choices. Permutation counts ordered arrangements; combination counts unordered selections. Standard results handle repetition, restrictions and circular arrangements.",
    formulas: [
      { name: "Permutation", expr: "nPr = n!/(n−r)!" },
      { name: "Combination", expr: "nCr = n!/(r!(n−r)!)" },
      { name: "Circular", expr: "(n−1)!" },
    ],
    definitions: [
      { term: "Factorial", meaning: "n! = n(n−1)(n−2)…1; 0!=1." },
      { term: "Combination", meaning: "Selection where order does not matter." },
    ],
    keyPoints: [
      "nCr = nC(n−r).",
      "nCr + nC(r−1) = (n+1)Cr.",
      "Arrangements of n things with repetition = nⁿ (all positions).",
    ],
    mcqs: [
      { q: "5! equals:", options: ["120", "25", "60", "24"], answer: 0 },
      { q: "Number of ways to arrange 5 books:", options: ["24", "120", "720", "60"], answer: 1 },
      { q: "Number of committees of 3 from 6:", options: ["20", "18", "15", "6"], answer: 0 },
      { q: "Number of arrangements around a round table of 5:", options: ["120", "24", "12", "5"], answer: 1 },
      { q: "nPr with r=0:", options: ["0", "1", "n", "n!"], answer: 1 },
    ],
    flashcards: [
      { front: "Fundamental counting principle", back: "If task 1 in m ways and task 2 in n ways, together m·n." },
      { front: "Permutation with repetition", back: "n!/ (p!q!…)" },
      { front: "Combination symmetry", back: "nCr = nC(n−r)" },
      { front: "Sum of all subsets", back: "2ⁿ" },
      { front: "Ways to select at least one", back: "2ⁿ − 1" },
    ],
    pyqs: [
      { year: 2024, q: "Number of ways to arrange letters of 'BANANA':", answer: "6!/(3!·2!) = 60." },
    ],
  },
  {
    slug: "functions",
    name: "Functions",
    overview:
      "Definition, types, composition and inverse of functions with domain and range analysis.",
    objectives: [
      "Define function, domain and range",
      "Identify one-one, onto and bijective functions",
      "Compose and invert functions",
    ],
    notes:
      "A function assigns each input exactly one output. It can be one-one (injective), onto (surjective), or both (bijective). Composition (g∘f)(x)=g(f(x)) and inverse functions require bijectivity.",
    formulas: [
      { name: "Composition", expr: "(g∘f)(x) = g(f(x))" },
      { name: "Inverse property", expr: "f(f⁻¹(x)) = x" },
    ],
    definitions: [
      { term: "Injective", meaning: "Different inputs give different outputs." },
      { term: "Surjective", meaning: "Every element of codomain is image of some input." },
    ],
    keyPoints: [
      "Constant function is neither injective nor surjective (usually).",
      "Identity function I(x)=x is bijective.",
      "For inverse to exist, function must be bijective.",
    ],
    mcqs: [
      { q: "Domain of f(x)=1/(x−2):", options: ["ℝ", "ℝ−{2}", "ℝ⁺", "[2,∞)"], answer: 1 },
      { q: "Range of sin x:", options: ["[0,1]", "[−1,1]", "ℝ", "(0,1)"], answer: 1 },
      { q: "f(x)=x², domain ℝ, is:", options: ["Injective", "Surjective onto ℝ", "Neither", "Bijective"], answer: 2 },
      { q: "(f∘f)(x) for f(x)=2x+1:", options: ["4x+3", "2x+2", "4x+1", "x"], answer: 0 },
      { q: "Inverse of f(x)=x+3:", options: ["x−3", "−x+3", "x/3", "3−x"], answer: 0 },
    ],
    flashcards: [
      { front: "Function", back: "Relation with each input mapped to exactly one output." },
      { front: "Codomain", back: "Set from which outputs come." },
      { front: "Range", back: "Actual set of outputs." },
      { front: "Bijective", back: "Injective + Surjective." },
      { front: "Even function", back: "f(−x)=f(x)" },
    ],
    pyqs: [
      { year: 2023, q: "Domain of f(x)=√(x−1):", answer: "[1, ∞)." },
    ],
  },
  {
    slug: "limits",
    name: "Limits",
    overview:
      "Introduces the concept of limit, algebra of limits, and standard trigonometric/exponential limits.",
    objectives: [
      "Evaluate limits using algebraic manipulation",
      "Use standard limit results",
      "Apply L'Hospital-like reasoning for elementary cases",
    ],
    notes:
      "The limit of f as x→a is the value f approaches near a. Limits obey linearity, products and quotients (denominator ≠ 0). Standard results such as lim (sinx)/x = 1 as x→0 are used repeatedly.",
    formulas: [
      { name: "sinx/x", expr: "lim_{x→0} sinx/x = 1" },
      { name: "(1+x)^{1/x}", expr: "lim_{x→0} (1+x)^{1/x} = e" },
      { name: "(eˣ−1)/x", expr: "lim_{x→0} (eˣ−1)/x = 1" },
      { name: "(aⁿ−1)/n", expr: "lim_{n→0} (aⁿ−1)/n = ln a" },
    ],
    definitions: [
      { term: "Left-hand limit", meaning: "Limit as x approaches a from values less than a." },
      { term: "Right-hand limit", meaning: "Limit as x approaches a from values greater than a." },
    ],
    keyPoints: [
      "Limit exists iff LHL = RHL = finite value.",
      "0/0 and ∞/∞ are indeterminate forms.",
      "Constants can be factored out of limits.",
    ],
    mcqs: [
      { q: "lim_{x→0} sinx/x:", options: ["0", "1", "∞", "undefined"], answer: 1 },
      { q: "lim_{x→2} (x²−4)/(x−2):", options: ["0", "2", "4", "undefined"], answer: 2 },
      { q: "lim_{x→∞} 1/x:", options: ["1", "0", "∞", "does not exist"], answer: 1 },
      { q: "lim_{x→0}(1+x)^{1/x}:", options: ["1", "e", "0", "∞"], answer: 1 },
      { q: "Indeterminate form:", options: ["0/1", "1/0", "0/0", "1/1"], answer: 2 },
    ],
    flashcards: [
      { front: "Definition (informal)", back: "f(x) approaches L as x approaches a." },
      { front: "Sum rule", back: "lim(f+g) = lim f + lim g" },
      { front: "Product rule", back: "lim(fg) = (lim f)(lim g)" },
      { front: "Quotient", back: "lim(f/g) = lim f / lim g (lim g ≠ 0)" },
      { front: "Log limit", back: "lim ln(1+x)/x = 1 as x→0" },
    ],
    pyqs: [
      { year: 2024, q: "lim_{x→0}(tan x)/x:", answer: "1." },
    ],
  },
  {
    slug: "continuity",
    name: "Continuity",
    overview:
      "Defines continuity of a function at a point and on an interval, and lists standard continuous functions.",
    objectives: [
      "Test continuity at a point",
      "Identify types of discontinuity",
      "State theorems on continuous functions",
    ],
    notes:
      "A function f is continuous at x=a if lim_{x→a} f(x) = f(a). This requires the limit to exist and equal the functional value. Polynomials, sinx, cosx, and exponentials are continuous everywhere.",
    formulas: [],
    definitions: [
      { term: "Removable discontinuity", meaning: "Limit exists but ≠ f(a) or f(a) undefined." },
      { term: "Jump discontinuity", meaning: "LHL and RHL exist but are unequal." },
    ],
    keyPoints: [
      "Sum, product and composition of continuous functions is continuous.",
      "Quotient is continuous where denominator ≠ 0.",
      "Continuous on closed interval ⇒ attains max/min (extreme value theorem).",
    ],
    mcqs: [
      { q: "f(x)=|x| is continuous at:", options: ["x=0 only", "x≠0 only", "All x", "Nowhere"], answer: 2 },
      { q: "f(x)=1/x has discontinuity at:", options: ["x=1", "x=0", "x=∞", "None"], answer: 1 },
      { q: "Polynomial functions are continuous:", options: ["Only at 0", "Only at integers", "Everywhere", "Nowhere"], answer: 2 },
      { q: "For continuity at a, we need:", options: ["Only f(a) defined", "Only limit exists", "Limit = f(a)", "None"], answer: 2 },
      { q: "Greatest integer function is discontinuous at:", options: ["Integers", "Rationals", "Irrationals", "Only x=0"], answer: 0 },
    ],
    flashcards: [
      { front: "Definition of continuity", back: "lim_{x→a} f(x) = f(a)" },
      { front: "Types of discontinuity", back: "Removable, jump, infinite, oscillating." },
      { front: "Removable discontinuity", back: "Limit exists but f(a) either undefined or unequal." },
      { front: "Intermediate value theorem", back: "Continuous on [a,b] takes every value between f(a) and f(b)." },
      { front: "Composition rule", back: "If g continuous at a and f continuous at g(a), then f∘g continuous at a." },
    ],
    pyqs: [
      { year: 2023, q: "For what value of k is f(x)=kx at x=0, x=0 and f(0)=2 continuous:", answer: "Requires f(0)=lim = 0; contradiction unless redefined; k=any but f(0) must equal 0." },
    ],
  },
  {
    slug: "conic-section",
    name: "Conic Section",
    overview:
      "Standard equations and properties of parabola, ellipse and hyperbola with their eccentricities and directrices.",
    objectives: [
      "Recognise and sketch each conic",
      "Write standard equations",
      "Compute eccentricity, foci and directrices",
    ],
    notes:
      "Conic sections are curves formed by intersecting a plane with a double cone. They include parabola (e=1), ellipse (e<1) and hyperbola (e>1). Each has a focus-directrix definition and standard equation in convenient axes.",
    formulas: [
      { name: "Parabola (standard)", expr: "y² = 4ax" },
      { name: "Ellipse", expr: "x²/a² + y²/b² = 1" },
      { name: "Hyperbola", expr: "x²/a² − y²/b² = 1" },
      { name: "Eccentricity (ellipse)", expr: "e = √(1 − b²/a²)" },
    ],
    definitions: [
      { term: "Focus", meaning: "Special point used in focus-directrix definition." },
      { term: "Directrix", meaning: "Fixed line such that ratio of distances (focus/directrix) is e." },
    ],
    keyPoints: [
      "Parabola y²=4ax has focus (a,0), directrix x=−a.",
      "Ellipse sum of distances from two foci is constant (=2a).",
      "Hyperbola difference of distances from two foci is constant.",
    ],
    mcqs: [
      { q: "Eccentricity of parabola:", options: ["0", "1/2", "1", ">1"], answer: 2 },
      { q: "Standard equation of circle is special conic with e:", options: ["0", "0.5", "1", "∞"], answer: 0 },
      { q: "Focus of y²=8x:", options: ["(1,0)", "(2,0)", "(4,0)", "(0,2)"], answer: 1 },
      { q: "Ellipse eccentricity range:", options: ["e=1", "0<e<1", "e>1", "e<0"], answer: 1 },
      { q: "Hyperbola x²/16−y²/9=1 has a:", options: ["3", "4", "5", "9"], answer: 1 },
    ],
    flashcards: [
      { front: "Focus-directrix property", back: "PF/PM = e (constant)" },
      { front: "Length of latus rectum (parabola)", back: "4a" },
      { front: "Vertices of ellipse", back: "(±a, 0)" },
      { front: "Foci of hyperbola", back: "(±ae, 0), e = √(1 + b²/a²)" },
      { front: "Circle as special ellipse", back: "a = b, e = 0" },
    ],
    pyqs: [
      { year: 2022, q: "Eccentricity of x²/25 + y²/9 = 1:", answer: "e = √(1−9/25) = 4/5." },
    ],
  },
];

// ---------- BIOLOGY ----------
const biology: Chapter[] = [
  {
    slug: "biomolecules",
    name: "Biomolecules",
    overview:
      "Chemistry of life — carbohydrates, proteins, lipids, nucleic acids and enzymes.",
    objectives: [
      "Classify major biomolecules",
      "Describe structure and function of proteins and nucleic acids",
      "Explain enzyme action and factors affecting it",
    ],
    notes:
      "Biomolecules are organic molecules present in living systems. Carbohydrates are polyhydroxy aldehydes/ketones classified as mono, oligo, and polysaccharides. Proteins are polymers of α-amino acids linked by peptide bonds. Lipids include fats, oils and phospholipids. Nucleic acids (DNA, RNA) carry hereditary information. Enzymes are biocatalysts, mostly proteins.",
    formulas: [],
    definitions: [
      { term: "Enzyme", meaning: "Protein catalyst that speeds up biochemical reactions." },
      { term: "Peptide bond", meaning: "Amide linkage between two amino acids." },
    ],
    keyPoints: [
      "Glucose is a hexose aldose sugar.",
      "DNA is double-stranded; RNA is single-stranded.",
      "Enzymes have active sites and are substrate-specific.",
    ],
    mcqs: [
      { q: "Building block of proteins:", options: ["Fatty acid", "Nucleotide", "Amino acid", "Glucose"], answer: 2 },
      { q: "Base pair in DNA A pairs with:", options: ["G", "T", "U", "C"], answer: 1 },
      { q: "Storage carbohydrate in animals:", options: ["Starch", "Cellulose", "Glycogen", "Chitin"], answer: 2 },
      { q: "Enzymes are mostly:", options: ["Lipids", "Carbohydrates", "Proteins", "Nucleic acids"], answer: 2 },
      { q: "Component of nucleotide:", options: ["Sugar+base only", "Sugar+base+phosphate", "Base+phosphate", "Sugar+phosphate"], answer: 1 },
    ],
    flashcards: [
      { front: "Monosaccharide example", back: "Glucose, fructose." },
      { front: "Polysaccharide", back: "Starch, cellulose, glycogen." },
      { front: "Fat vs oil", back: "Fat solid at RT (saturated); oil liquid (unsaturated)." },
      { front: "Central dogma", back: "DNA → RNA → Protein." },
      { front: "Enzyme lock-and-key", back: "Substrate fits into specific active site." },
    ],
    pyqs: [
      { year: 2024, q: "Pentose sugar in RNA is:", answer: "Ribose." },
    ],
  },
  {
    slug: "respiration",
    name: "Respiration and Energy Transfer",
    overview:
      "How cells extract energy from glucose via glycolysis, Krebs cycle, and electron transport chain.",
    objectives: [
      "Trace glucose oxidation through respiration stages",
      "Compare aerobic and anaerobic respiration",
      "Explain ATP synthesis and its role",
    ],
    notes:
      "Cellular respiration converts glucose to ATP through glycolysis (cytosol), Krebs cycle (mitochondrial matrix) and oxidative phosphorylation (inner mitochondrial membrane). Aerobic respiration yields ~36–38 ATP per glucose; anaerobic yields only 2 ATP with fermentation products.",
    formulas: [
      { name: "Aerobic respiration", expr: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP" },
    ],
    definitions: [
      { term: "Glycolysis", meaning: "Splitting of glucose to pyruvate in cytoplasm." },
      { term: "Oxidative phosphorylation", meaning: "ATP synthesis using energy from electron transport." },
    ],
    keyPoints: [
      "Glycolysis: 1 glucose → 2 pyruvate + 2 ATP + 2 NADH.",
      "Krebs cycle occurs in mitochondrial matrix.",
      "ATP is the universal energy currency.",
    ],
    mcqs: [
      { q: "Site of glycolysis:", options: ["Cytoplasm", "Mitochondria", "Nucleus", "Ribosome"], answer: 0 },
      { q: "End product of anaerobic respiration in muscles:", options: ["Ethanol", "Lactic acid", "CO₂", "Acetyl-CoA"], answer: 1 },
      { q: "Net ATP from aerobic respiration:", options: ["2", "4", "18", "38"], answer: 3 },
      { q: "Krebs cycle occurs in:", options: ["Cytoplasm", "Mitochondrial matrix", "Inner mitochondrial membrane", "Chloroplast"], answer: 1 },
      { q: "Final electron acceptor in aerobic ETC:", options: ["NAD⁺", "FAD", "O₂", "CO₂"], answer: 2 },
    ],
    flashcards: [
      { front: "ATP full form", back: "Adenosine triphosphate." },
      { front: "Alcoholic fermentation", back: "Yeast produces ethanol + CO₂." },
      { front: "Pyruvate → Acetyl-CoA", back: "Link reaction in mitochondrial matrix, releases CO₂ and NADH." },
      { front: "Chemiosmosis", back: "ATP synthesis driven by proton gradient across membrane." },
      { front: "Anaerobic yield", back: "Only 2 ATP per glucose." },
    ],
    pyqs: [
      { year: 2023, q: "Net ATP produced in glycolysis:", answer: "2 ATP." },
    ],
  },
  {
    slug: "human-nutrition",
    name: "Human Nutrition",
    overview:
      "Human digestive system, its organs, digestion of macronutrients, and absorption.",
    objectives: [
      "Identify parts of the digestive system",
      "Describe digestion of carbohydrates, proteins and lipids",
      "Explain absorption and assimilation",
    ],
    notes:
      "The human alimentary canal extends from mouth to anus and includes associated glands (salivary, liver, pancreas). Mechanical and chemical digestion break food into absorbable units; villi in small intestine absorb nutrients into blood/lymph.",
    formulas: [],
    definitions: [
      { term: "Peristalsis", meaning: "Rhythmic contraction moving food along gut." },
      { term: "Villi", meaning: "Finger-like projections in small intestine that increase absorption." },
    ],
    keyPoints: [
      "Amylase digests starch in mouth.",
      "Pepsin digests protein in stomach (acidic pH).",
      "Most absorption occurs in small intestine.",
    ],
    mcqs: [
      { q: "Enzyme in saliva:", options: ["Pepsin", "Amylase", "Trypsin", "Lipase"], answer: 1 },
      { q: "Bile is secreted by:", options: ["Pancreas", "Liver", "Stomach", "Intestine"], answer: 1 },
      { q: "pH of stomach:", options: ["7", "8", "1–3", "9"], answer: 2 },
      { q: "Absorption of glucose occurs mainly in:", options: ["Mouth", "Stomach", "Small intestine", "Large intestine"], answer: 2 },
      { q: "Trypsin acts on:", options: ["Starch", "Protein", "Fat", "Cellulose"], answer: 1 },
    ],
    flashcards: [
      { front: "Function of HCl in stomach", back: "Activates pepsinogen, kills microbes." },
      { front: "Bile function", back: "Emulsifies fats." },
      { front: "Villi", back: "Increase surface area of small intestine." },
      { front: "Assimilation", back: "Absorbed nutrients used by body cells." },
      { front: "Egestion", back: "Removal of undigested waste as faeces." },
    ],
    pyqs: [
      { year: 2024, q: "Which enzyme digests fats?", answer: "Lipase." },
    ],
  },
  {
    slug: "excretion-osmoregulation",
    name: "Excretion and Osmoregulation",
    overview:
      "How the body eliminates nitrogenous wastes and maintains water-salt balance via kidneys.",
    objectives: [
      "Describe structure of nephron",
      "Explain urine formation",
      "Discuss osmoregulation mechanisms",
    ],
    notes:
      "Excretion removes metabolic wastes like urea. Kidneys contain nephrons, each performing filtration (glomerulus), reabsorption (PCT), secretion, and concentration (loop of Henle, DCT, collecting duct). ADH controls water reabsorption for osmoregulation.",
    formulas: [],
    definitions: [
      { term: "Nephron", meaning: "Structural and functional unit of the kidney." },
      { term: "Osmoregulation", meaning: "Regulation of water and solute concentrations in body fluids." },
    ],
    keyPoints: [
      "Filtration occurs in glomerulus under blood pressure.",
      "ADH increases water reabsorption in collecting duct.",
      "Humans excrete urea (ureotelic).",
    ],
    mcqs: [
      { q: "Functional unit of kidney:", options: ["Neuron", "Nephron", "Alveolus", "Hepatocyte"], answer: 1 },
      { q: "Filtration occurs in:", options: ["PCT", "Loop of Henle", "Glomerulus", "DCT"], answer: 2 },
      { q: "ADH acts on:", options: ["Collecting duct", "Glomerulus", "Liver", "Skin"], answer: 0 },
      { q: "Humans excrete mainly:", options: ["Ammonia", "Urea", "Uric acid", "Creatine"], answer: 1 },
      { q: "Most reabsorption occurs in:", options: ["DCT", "Loop of Henle", "PCT", "Collecting duct"], answer: 2 },
    ],
    flashcards: [
      { front: "Ureotelic organisms", back: "Excrete urea (mammals)." },
      { front: "Uricotelic organisms", back: "Excrete uric acid (birds, reptiles)." },
      { front: "Ammonotelic organisms", back: "Excrete ammonia (fish)." },
      { front: "Bowman's capsule", back: "Cup-shaped start of nephron enclosing glomerulus." },
      { front: "Diabetes insipidus", back: "Caused by ADH deficiency, leading to excessive dilute urine." },
    ],
    pyqs: [
      { year: 2023, q: "Structural and functional unit of kidney:", answer: "Nephron." },
    ],
  },
];

export const library: Subject[] = [
  { code: "P", name: "Physics", color: "hsl(var(--subject-physics))", chapters: physics },
  { code: "C", name: "Chemistry", color: "hsl(var(--subject-chemistry))", chapters: chemistry },
  { code: "M", name: "Mathematics", color: "hsl(var(--subject-math))", chapters: mathematics },
  { code: "B", name: "Biology", color: "hsl(var(--subject-biology))", chapters: biology },
];

export const findChapter = (subjectCode: string, chapterSlug: string) =>
  library
    .find((s) => s.code === subjectCode)
    ?.chapters.find((c) => c.slug === chapterSlug) ?? null;
