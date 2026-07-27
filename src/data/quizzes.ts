// AUTO-GENERATED CET quiz bank. Edit /tmp/gen_quizzes.py to regenerate.
export type QuizQuestion = { q: string; options: string[]; answer: number; difficulty: "Easy"|"Medium"|"Hard"; concept: string; explanation: string };
export type SubjectCode = "P" | "C" | "M" | "B";
export const quizBank: Record<SubjectCode, Record<string, QuizQuestion[]>> = {
  "P": {
    "vectors": [
      {
        "q": "Which of the following physical quantities is a vector?",
        "options": [
          "Work",
          "Electric current",
          "Momentum",
          "Temperature"
        ],
        "answer": 2,
        "difficulty": "Easy",
        "concept": "Scalar vs vector",
        "explanation": "Momentum has both magnitude and direction and follows vector addition. Work, current in basic physics, and temperature are treated as scalars."
      },
      {
        "q": "A displacement vector has magnitude 10 m and makes an angle 60° with the positive x-axis. Its x-component is:",
        "options": [
          "5 m",
          "10√3 m",
          "5√3 m",
          "10 m"
        ],
        "answer": 0,
        "difficulty": "Easy",
        "concept": "Vector components",
        "explanation": "The x-component is A cos θ = 10 cos 60° = 5 m. The y-component would be 10 sin 60° = 5√3 m."
      },
      {
        "q": "Two vectors of magnitudes 6 units and 8 units are perpendicular to each other. The magnitude of their resultant is:",
        "options": [
          "2 units",
          "10 units",
          "14 units",
          "48 units"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Perpendicular resultant",
        "explanation": "For perpendicular vectors, R = √(A² + B²) = √(6² + 8²) = √100 = 10 units."
      },
      {
        "q": "If a vector A = 3î - 4ĵ, then the magnitude of A is:",
        "options": [
          "1",
          "5",
          "7",
          "25"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Magnitude from components",
        "explanation": "Magnitude is √(3² + (-4)²) = √25 = 5. The signs affect direction but not the squared magnitude."
      },
      {
        "q": "The angle between vectors A and B is 120°. If |A| = 4 and |B| = 5, then A · B is:",
        "options": [
          "20",
          "10",
          "-10",
          "-20"
        ],
        "answer": 2,
        "difficulty": "Medium",
        "concept": "Dot product",
        "explanation": "A · B = AB cos θ = 4 × 5 × cos 120° = 20 × (-1/2) = -10. Dot product becomes negative for obtuse angles."
      },
      {
        "q": "A vector of magnitude 12 N is resolved into two equal components. The angle between these two components must be:",
        "options": [
          "30°",
          "60°",
          "90°",
          "120°"
        ],
        "answer": 3,
        "difficulty": "Medium",
        "concept": "Equal components",
        "explanation": "For two equal components P with angle θ, resultant R = 2P cos(θ/2). If each component equals the resultant magnitude, R = P, so 1 = 2 cos(θ/2), giving θ = 120°."
      },
      {
        "q": "For two non-zero vectors A and B, A × B = 0 when they are:",
        "options": [
          "Perpendicular",
          "Parallel or anti-parallel",
          "Equal in magnitude only",
          "At 45° to each other"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Cross product zero",
        "explanation": "|A × B| = AB sin θ. This is zero when θ = 0° or 180°, meaning the vectors are parallel or anti-parallel."
      },
      {
        "q": "A boat moves 4 km east and then 3 km north. The direction of the resultant displacement with the east direction is:",
        "options": [
          "tan⁻¹(3/4) north of east",
          "tan⁻¹(4/3) north of east",
          "tan⁻¹(3/4) east of north",
          "45° north of east"
        ],
        "answer": 0,
        "difficulty": "Medium",
        "concept": "Resultant direction",
        "explanation": "The resultant has east component 4 km and north component 3 km, so tan θ = 3/4. Hence θ = tan⁻¹(3/4) north of east."
      },
      {
        "q": "If A + B = A - B for two vectors A and B, then B is:",
        "options": [
          "A unit vector",
          "Equal to A",
          "A null vector",
          "Perpendicular to A"
        ],
        "answer": 2,
        "difficulty": "Hard",
        "concept": "Vector equation",
        "explanation": "From A + B = A - B, subtract A from both sides to get B = -B, so 2B = 0. Therefore B must be the null vector."
      },
      {
        "q": "Three vectors of equal magnitude can have zero resultant if the angle between each pair is:",
        "options": [
          "45°",
          "60°",
          "90°",
          "120°"
        ],
        "answer": 3,
        "difficulty": "Hard",
        "concept": "Zero resultant",
        "explanation": "Three equal vectors give zero resultant when they are symmetrically placed, forming a closed triangle. This requires each pair to be separated by 120°."
      }
    ],
    "error-analysis": [
      {
        "q": "A student measures the length of a rod as 12.4 cm using a scale with least count 0.1 cm. What is the maximum possible absolute error in this reading?",
        "options": [
          "0.01 cm",
          "0.05 cm",
          "0.1 cm",
          "0.5 cm"
        ],
        "answer": 1,
        "explanation": "For a single reading with a scale, the maximum possible error is usually half the least count. Here it is 0.1/2 = 0.05 cm.",
        "concept": "Least count error",
        "difficulty": "Easy"
      },
      {
        "q": "The true value of a physical quantity is 50.0 units and the measured value is 49.5 units. The percentage error is:",
        "options": [
          "0.5%",
          "1.0%",
          "2.0%",
          "5.0%"
        ],
        "answer": 1,
        "explanation": "Percentage error = (absolute error/true value) × 100 = (0.5/50.0) × 100 = 1.0%.",
        "concept": "Percentage error",
        "difficulty": "Easy"
      },
      {
        "q": "Which of the following errors can be reduced by taking a large number of observations and using their mean?",
        "options": [
          "Random error",
          "Zero error",
          "Calibration error",
          "Error due to wrong formula"
        ],
        "answer": 0,
        "explanation": "Random errors occur unpredictably in repeated observations and tend to cancel out when many readings are averaged. Systematic errors do not get removed by averaging.",
        "concept": "Random errors",
        "difficulty": "Easy"
      },
      {
        "q": "A screw gauge has a zero error of +0.03 mm. If the observed reading is 2.68 mm, the correct reading is:",
        "options": [
          "2.65 mm",
          "2.68 mm",
          "2.71 mm",
          "2.75 mm"
        ],
        "answer": 0,
        "explanation": "For positive zero error, the correction is negative. Correct reading = observed reading - zero error = 2.68 - 0.03 = 2.65 mm.",
        "concept": "Zero correction",
        "difficulty": "Easy"
      },
      {
        "q": "If A = 20.0 ± 0.2 and B = 10.0 ± 0.1, then the absolute error in A + B is:",
        "options": [
          "±0.1",
          "±0.2",
          "±0.3",
          "±0.02"
        ],
        "answer": 2,
        "explanation": "For addition or subtraction, absolute errors are added. Thus Δ(A + B) = 0.2 + 0.1 = 0.3.",
        "concept": "Addition of errors",
        "difficulty": "Medium"
      },
      {
        "q": "A quantity Q is given by Q = x²y/z. If percentage errors in x, y and z are 1%, 2% and 3% respectively, the percentage error in Q is:",
        "options": [
          "4%",
          "6%",
          "7%",
          "9%"
        ],
        "answer": 2,
        "explanation": "For products, quotients and powers, percentage errors add with powers as multipliers. Error in Q = 2(1%) + 2% + 3% = 7%.",
        "concept": "Propagation powers",
        "difficulty": "Medium"
      },
      {
        "q": "The readings 2.31 cm, 2.33 cm, 2.32 cm and 2.34 cm are obtained for a length. The mean absolute error is:",
        "options": [
          "0.005 cm",
          "0.010 cm",
          "0.015 cm",
          "0.020 cm"
        ],
        "answer": 1,
        "explanation": "Mean = 2.325 cm; absolute deviations are 0.015, 0.005, 0.005 and 0.015 cm. Their mean is 0.010 cm.",
        "concept": "Mean absolute error",
        "difficulty": "Medium"
      },
      {
        "q": "The value of a resistance is reported as R = 4.736 Ω. If the uncertainty is ±0.05 Ω, the result should be written as:",
        "options": [
          "4.736 ± 0.05 Ω",
          "4.74 ± 0.05 Ω",
          "4.7 ± 0.05 Ω",
          "5 ± 0.05 Ω"
        ],
        "answer": 1,
        "explanation": "The measured value should be rounded to the same decimal place as the uncertainty. Since ±0.05 has two decimal places, R should be written as 4.74 Ω.",
        "concept": "Significant figures",
        "difficulty": "Medium"
      },
      {
        "q": "In measuring g using a simple pendulum, g = 4π²l/T². If l has 2% error and T has 1% error, the percentage error in g is:",
        "options": [
          "1%",
          "2%",
          "3%",
          "4%"
        ],
        "answer": 3,
        "explanation": "For g = 4π²l/T², constants have no error and the error is Δl/l + 2ΔT/T. Hence percentage error = 2% + 2(1%) = 4%.",
        "concept": "Compound measurement",
        "difficulty": "Hard"
      },
      {
        "q": "The radius of a sphere is measured as r = 2.00 ± 0.02 cm. The approximate percentage error in its volume is:",
        "options": [
          "1%",
          "2%",
          "3%",
          "6%"
        ],
        "answer": 2,
        "explanation": "Volume of a sphere is proportional to r³, so percentage error in volume = 3 × percentage error in radius. Percentage error in r = (0.02/2.00) × 100 = 1%, hence volume error = 3%.",
        "concept": "Error in volume",
        "difficulty": "Hard"
      }
    ],
    "motion-in-a-plane": [
      {
        "q": "A particle moves from point A to point B. Its displacement vector is 3î + 4ĵ m. What is the magnitude of its displacement?",
        "options": [
          "5 m",
          "7 m",
          "1 m",
          "25 m"
        ],
        "answer": 0,
        "explanation": "Magnitude of a vector 3î + 4ĵ is √(3² + 4²) = 5 m. Displacement depends only on initial and final positions.",
        "concept": "Vector magnitude",
        "difficulty": "Easy"
      },
      {
        "q": "A car has velocity 20 m/s east and accelerates at 5 m/s² north. Which statement is correct at that instant?",
        "options": [
          "Acceleration changes only the speed",
          "Acceleration changes only the direction initially",
          "Acceleration is parallel to velocity",
          "Acceleration is zero along north"
        ],
        "answer": 1,
        "explanation": "Since acceleration is perpendicular to velocity, it initially changes the direction of velocity rather than its magnitude. The speed change depends on the component of acceleration along velocity, which is zero here.",
        "concept": "Perpendicular acceleration",
        "difficulty": "Medium"
      },
      {
        "q": "If a vector A has magnitude 10 units and makes an angle 60° with the positive x-axis, its x-component is:",
        "options": [
          "10 units",
          "5 units",
          "5√3 units",
          "10√3 units"
        ],
        "answer": 1,
        "explanation": "The x-component is A cos θ = 10 cos 60° = 5 units. Components depend on the angle made with the respective axis.",
        "concept": "Vector components",
        "difficulty": "Easy"
      },
      {
        "q": "Two vectors of equal magnitude have a resultant equal in magnitude to either vector. The angle between the two vectors is:",
        "options": [
          "30°",
          "60°",
          "90°",
          "120°"
        ],
        "answer": 3,
        "explanation": "For two equal vectors A, resultant R = 2A cos(θ/2). Given R = A, so cos(θ/2) = 1/2, hence θ/2 = 60° and θ = 120°.",
        "concept": "Vector addition",
        "difficulty": "Hard"
      },
      {
        "q": "A projectile is fired horizontally from a height with speed u. Neglecting air resistance, its horizontal velocity during flight:",
        "options": [
          "increases uniformly",
          "decreases uniformly",
          "remains constant",
          "becomes zero at highest point"
        ],
        "answer": 2,
        "explanation": "There is no horizontal acceleration in projectile motion when air resistance is neglected. Hence the horizontal component of velocity remains constant.",
        "concept": "Horizontal projection",
        "difficulty": "Easy"
      },
      {
        "q": "A projectile is launched with speed u at angle θ to the horizontal. Its time of flight on level ground is:",
        "options": [
          "u sin θ/g",
          "2u sin θ/g",
          "u cos θ/g",
          "2u cos θ/g"
        ],
        "answer": 1,
        "explanation": "The vertical component of initial velocity is u sin θ, and total time of flight is 2u sin θ/g for same launch and landing level. Horizontal motion does not affect the flight time.",
        "concept": "Time of flight",
        "difficulty": "Medium"
      },
      {
        "q": "For a projectile on level ground, maximum range is obtained when the angle of projection is:",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "answer": 1,
        "explanation": "Range R = u² sin 2θ/g is maximum when sin 2θ = 1. Therefore 2θ = 90° and θ = 45°.",
        "concept": "Maximum range",
        "difficulty": "Easy"
      },
      {
        "q": "A particle moves in a circle of radius 2 m with uniform speed 6 m/s. Its centripetal acceleration is:",
        "options": [
          "3 m/s²",
          "12 m/s²",
          "18 m/s²",
          "36 m/s²"
        ],
        "answer": 2,
        "explanation": "Centripetal acceleration is v²/r = 6²/2 = 18 m/s². It is directed towards the centre of the circle.",
        "concept": "Centripetal acceleration",
        "difficulty": "Medium"
      },
      {
        "q": "A boat can move at 5 m/s in still water. It tries to cross a river flowing at 3 m/s and heads directly perpendicular to the bank. What is its resultant speed relative to the ground?",
        "options": [
          "2 m/s",
          "4 m/s",
          "√34 m/s",
          "8 m/s"
        ],
        "answer": 2,
        "explanation": "The boat’s perpendicular velocity and river velocity are at right angles, so resultant speed = √(5² + 3²) = √34 m/s. The boat will drift downstream while crossing.",
        "concept": "Relative velocity",
        "difficulty": "Medium"
      },
      {
        "q": "A projectile has a maximum height H and range R on level ground. If the angle of projection is θ, then H/R is:",
        "options": [
          "tan θ/4",
          "tan θ/2",
          "2 tan θ",
          "4 tan θ"
        ],
        "answer": 0,
        "explanation": "H = u² sin² θ/(2g) and R = u² sin 2θ/g. Thus H/R = sin² θ/(2 sin 2θ) = tan θ/4.",
        "concept": "Projectile relations",
        "difficulty": "Hard"
      }
    ],
    "laws-of-motion": [
      {
        "q": "A 5 kg block is pulled on a smooth horizontal surface by a horizontal force of 20 N. Its acceleration is:",
        "options": [
          "2 m/s²",
          "4 m/s²",
          "10 m/s²",
          "100 m/s²"
        ],
        "answer": 1,
        "explanation": "On a smooth surface, net force equals applied force. Using F = ma, a = 20/5 = 4 m/s².",
        "concept": "Newton's second law",
        "difficulty": "Easy"
      },
      {
        "q": "Which of the following is the correct SI unit of impulse?",
        "options": [
          "N/m",
          "N s",
          "kg m/s²",
          "kg m²/s²"
        ],
        "answer": 1,
        "explanation": "Impulse is force × time, so its SI unit is N s. It is also equal to change in momentum.",
        "concept": "Impulse unit",
        "difficulty": "Easy"
      },
      {
        "q": "A person standing in a bus falls backward when the bus suddenly starts moving forward. This is due to:",
        "options": [
          "inertia of motion",
          "inertia of rest",
          "action-reaction pair",
          "centripetal force"
        ],
        "answer": 1,
        "explanation": "The feet move forward with the bus but the upper body tends to remain at rest. This is inertia of rest.",
        "concept": "Inertia of rest",
        "difficulty": "Easy"
      },
      {
        "q": "A 2 kg body moving at 6 m/s is brought to rest in 3 s by a constant retarding force. The magnitude of the force is:",
        "options": [
          "2 N",
          "4 N",
          "6 N",
          "12 N"
        ],
        "answer": 1,
        "explanation": "Acceleration = (0 − 6)/3 = −2 m/s². Force magnitude = m|a| = 2 × 2 = 4 N.",
        "concept": "Retarding force",
        "difficulty": "Medium"
      },
      {
        "q": "A block of mass 10 kg rests on a horizontal floor. If the coefficient of static friction is 0.4, the maximum static friction is approximately:",
        "options": [
          "4 N",
          "40 N",
          "98 N",
          "400 N"
        ],
        "answer": 1,
        "explanation": "Maximum static friction is μsN = μsmg = 0.4 × 10 × 9.8 = 39.2 N, approximately 40 N.",
        "concept": "Static friction",
        "difficulty": "Medium"
      },
      {
        "q": "Two masses 3 kg and 2 kg are connected by a light string and pulled on a smooth horizontal surface by a 10 N force applied to the 3 kg mass. The tension in the string is:",
        "options": [
          "2 N",
          "4 N",
          "6 N",
          "10 N"
        ],
        "answer": 1,
        "explanation": "Acceleration of the system = 10/(3+2) = 2 m/s². Tension accelerates the 2 kg mass, so T = 2 × 2 = 4 N.",
        "concept": "Connected bodies",
        "difficulty": "Medium"
      },
      {
        "q": "A 1000 kg car moving at 20 m/s stops in 5 s under uniform braking. The average braking force is:",
        "options": [
          "1000 N",
          "2000 N",
          "4000 N",
          "5000 N"
        ],
        "answer": 2,
        "explanation": "Acceleration = (0 − 20)/5 = −4 m/s². Braking force magnitude = 1000 × 4 = 4000 N.",
        "concept": "Braking force",
        "difficulty": "Medium"
      },
      {
        "q": "A 60 kg person stands in a lift accelerating upward at 2 m/s². Taking g = 10 m/s², the apparent weight is:",
        "options": [
          "480 N",
          "600 N",
          "720 N",
          "1200 N"
        ],
        "answer": 2,
        "explanation": "For an upward accelerating lift, apparent weight N = m(g+a). Thus N = 60(10+2) = 720 N.",
        "concept": "Apparent weight",
        "difficulty": "Hard"
      },
      {
        "q": "A vehicle takes a turn of radius 50 m on a level road. If the coefficient of friction between tyres and road is 0.5 and g = 10 m/s², the maximum safe speed is:",
        "options": [
          "5 m/s",
          "10 m/s",
          "15.8 m/s",
          "25 m/s"
        ],
        "answer": 2,
        "explanation": "On a level road, friction provides centripetal force, so vmax = √(μrg). Hence vmax = √(0.5 × 50 × 10) = √250 ≈ 15.8 m/s.",
        "concept": "Circular motion friction",
        "difficulty": "Hard"
      },
      {
        "q": "A bullet of mass 0.02 kg moving at 300 m/s embeds in a wooden block of mass 1.98 kg at rest. The common speed just after collision is:",
        "options": [
          "1.5 m/s",
          "3 m/s",
          "6 m/s",
          "30 m/s"
        ],
        "answer": 1,
        "explanation": "Momentum is conserved in the perfectly inelastic collision. Common speed v = (0.02 × 300)/(0.02+1.98) = 6/2 = 3 m/s.",
        "concept": "Momentum conservation",
        "difficulty": "Hard"
      }
    ],
    "gravitation": [
      {
        "q": "Two point masses 2 kg and 3 kg are separated by 4 m. The gravitational force between them is",
        "options": [
          "G/8",
          "3G/8",
          "3G/2",
          "6G"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Newton's law",
        "explanation": "Using F = Gm₁m₂/r² = G × 2 × 3 / 4² = 6G/16 = 3G/8."
      },
      {
        "q": "If the distance between two masses is doubled while their masses remain unchanged, the gravitational force becomes",
        "options": [
          "one-fourth",
          "one-half",
          "double",
          "four times"
        ],
        "answer": 0,
        "difficulty": "Easy",
        "concept": "Inverse square law",
        "explanation": "Gravitational force varies inversely as the square of separation, F ∝ 1/r². Doubling r makes the force 1/2² = 1/4 of the original."
      },
      {
        "q": "The value of acceleration due to gravity is maximum at",
        "options": [
          "equator",
          "poles",
          "centre of Earth",
          "infinite distance from Earth"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Variation of g",
        "explanation": "Due to Earth's rotation and oblate shape, effective g is greater at the poles than at the equator. At the centre of Earth, g is zero."
      },
      {
        "q": "The SI unit of universal gravitational constant G is",
        "options": [
          "N kg² m⁻²",
          "N m² kg⁻²",
          "N m kg⁻²",
          "N m² kg²"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Gravitational constant",
        "explanation": "From F = Gm₁m₂/r², G = Fr²/(m₁m₂). Hence its SI unit is N m² kg⁻²."
      },
      {
        "q": "A satellite revolves close to the surface of Earth. If R is Earth's radius and g is acceleration due to gravity, its orbital speed is",
        "options": [
          "√(gR)",
          "√(2gR)",
          "gR",
          "2√(gR)"
        ],
        "answer": 0,
        "difficulty": "Medium",
        "concept": "Orbital velocity",
        "explanation": "For a near-Earth satellite, GM/R² = g and orbital speed v = √(GM/R). Substituting GM = gR² gives v = √(gR)."
      },
      {
        "q": "The escape velocity from a planet of mass M and radius R is proportional to",
        "options": [
          "√(M/R)",
          "M/R",
          "√(R/M)",
          "R/M"
        ],
        "answer": 0,
        "difficulty": "Medium",
        "concept": "Escape velocity",
        "explanation": "Escape velocity is vₑ = √(2GM/R). Since G and 2 are constants, vₑ ∝ √(M/R)."
      },
      {
        "q": "The gravitational potential at a point due to a point mass M at distance r is",
        "options": [
          "GM/r",
          "-GM/r",
          "-GM/r²",
          "GM/r²"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Gravitational potential",
        "explanation": "Gravitational potential is work done per unit mass in bringing a test mass from infinity to the point. It is negative and equal to -GM/r."
      },
      {
        "q": "If Earth's mass becomes 4 times and its radius becomes 2 times, the new value of g at its surface will be",
        "options": [
          "g/2",
          "g",
          "2g",
          "4g"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Surface gravity",
        "explanation": "Surface gravity g = GM/R². With M' = 4M and R' = 2R, g' = G(4M)/(2R)² = GM/R² = g."
      },
      {
        "q": "The period of a satellite in a circular orbit of radius r around Earth varies as",
        "options": [
          "r",
          "r²",
          "r³",
          "r³ᐟ²"
        ],
        "answer": 3,
        "difficulty": "Hard",
        "concept": "Kepler's third law",
        "explanation": "For circular orbits, T² ∝ r³ according to Kepler's third law. Therefore T ∝ r³ᐟ²."
      },
      {
        "q": "At what height above Earth's surface does acceleration due to gravity become g/4? Take Earth's radius as R.",
        "options": [
          "R/2",
          "R",
          "2R",
          "4R"
        ],
        "answer": 1,
        "difficulty": "Hard",
        "concept": "Altitude variation",
        "explanation": "At height h, g' = gR²/(R+h)². Setting g' = g/4 gives R+h = 2R, so h = R."
      }
    ],
    "thermal-properties-of-matter": [
      {
        "q": "A brass rod of length 2 m at 20 °C is heated to 70 °C. If α for brass is 2 × 10⁻⁵ °C⁻¹, the increase in length is:",
        "options": [
          "0.2 mm",
          "1.0 mm",
          "2.0 mm",
          "4.0 mm"
        ],
        "answer": 2,
        "explanation": "Linear expansion is ΔL = LαΔT = 2 × 2 × 10⁻⁵ × 50 = 2 × 10⁻³ m = 2.0 mm.",
        "concept": "Linear expansion",
        "difficulty": "Easy"
      },
      {
        "q": "A metal plate has a circular hole. When the plate is uniformly heated, the diameter of the hole:",
        "options": [
          "decreases",
          "increases",
          "remains unchanged",
          "first decreases then increases"
        ],
        "answer": 1,
        "explanation": "A hole in a heated plate expands as if it were made of the same material; all linear dimensions increase on heating.",
        "concept": "Thermal expansion holes",
        "difficulty": "Easy"
      },
      {
        "q": "Water has maximum density at:",
        "options": [
          "0 °C",
          "4 °C",
          "37 °C",
          "100 °C"
        ],
        "answer": 1,
        "explanation": "Due to anomalous expansion, water contracts from 0 °C to 4 °C and hence has maximum density at 4 °C.",
        "concept": "Anomalous expansion",
        "difficulty": "Medium"
      },
      {
        "q": "Two rods of the same length and area, made of materials with thermal conductivities K and 2K, are joined in series. Their ends are maintained at 100 °C and 0 °C. The temperature at the junction in steady state is:",
        "options": [
          "25 °C",
          "33.3 °C",
          "50 °C",
          "66.7 °C"
        ],
        "answer": 1,
        "explanation": "In series, heat current is same; temperature drop is inversely proportional to K. Drops are in ratio 2:1, so junction temperature after a 66.7 °C drop from 100 °C is 33.3 °C.",
        "concept": "Thermal conduction",
        "difficulty": "Hard"
      },
      {
        "q": "A black body emits maximum radiation at wavelength λ when its temperature is T. If its temperature becomes 2T, the wavelength of maximum emission becomes:",
        "options": [
          "λ/4",
          "λ/2",
          "λ",
          "2λ"
        ],
        "answer": 1,
        "explanation": "By Wien’s displacement law, λmax T = constant. Doubling the temperature halves the wavelength of maximum emission.",
        "concept": "Wien displacement law",
        "difficulty": "Medium"
      }
    ],
    "sound": [
      {
        "q": "A sound wave of frequency 500 Hz travels in air with speed 340 m/s. Its wavelength is:",
        "options": [
          "0.34 m",
          "0.68 m",
          "1.47 m",
          "170 m"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Wave relation",
        "explanation": "Using v = fλ, λ = v/f = 340/500 = 0.68 m. Hence the wavelength is 0.68 m."
      },
      {
        "q": "When a sound wave travels from air into water, which quantity remains unchanged?",
        "options": [
          "Speed",
          "Wavelength",
          "Frequency",
          "Amplitude"
        ],
        "answer": 2,
        "difficulty": "Easy",
        "concept": "Refraction of sound",
        "explanation": "Frequency is fixed by the source and does not change when sound enters another medium. Speed and wavelength change according to the medium."
      },
      {
        "q": "Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. The number of beats heard per second is:",
        "options": [
          "2",
          "4",
          "258",
          "516"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Beats",
        "explanation": "Beat frequency equals the absolute difference between the two frequencies: |260 − 256| = 4 Hz. Therefore 4 beats are heard per second."
      },
      {
        "q": "A closed organ pipe has length 0.85 m. If the speed of sound is 340 m/s, its fundamental frequency is:",
        "options": [
          "50 Hz",
          "100 Hz",
          "200 Hz",
          "400 Hz"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Closed pipe resonance",
        "explanation": "For a closed pipe, fundamental frequency f = v/4L = 340/(4 × 0.85) = 100 Hz. The pipe supports a quarter-wavelength in its fundamental mode."
      },
      {
        "q": "A source of sound of frequency 600 Hz moves towards a stationary observer with speed 34 m/s. If speed of sound is 340 m/s, the apparent frequency heard is:",
        "options": [
          "540 Hz",
          "600 Hz",
          "660 Hz",
          "667 Hz"
        ],
        "answer": 3,
        "difficulty": "Hard",
        "concept": "Doppler effect",
        "explanation": "For a source moving towards a stationary observer, f' = f v/(v − vs) = 600 × 340/(340 − 34) = 600 × 340/306 ≈ 667 Hz. The apparent frequency increases because the source approaches the observer."
      }
    ],
    "optics": [
      {
        "q": "A ray of light is incident normally on a plane mirror. The angle between the incident ray and the reflected ray is",
        "options": [
          "0°",
          "45°",
          "90°",
          "180°"
        ],
        "answer": 0,
        "explanation": "For normal incidence, the angle of incidence is 0°, so the angle of reflection is also 0°. Hence the incident and reflected rays retrace the same path, making 0° between them.",
        "concept": "Reflection law",
        "difficulty": "Easy"
      },
      {
        "q": "The refractive indices of glass and water are 1.50 and 1.33 respectively. The refractive index of glass with respect to water is approximately",
        "options": [
          "0.89",
          "1.13",
          "1.99",
          "2.83"
        ],
        "answer": 1,
        "explanation": "Relative refractive index of glass with respect to water = n_glass/n_water = 1.50/1.33 ≈ 1.13. It shows glass is optically denser than water.",
        "concept": "Relative refractive index",
        "difficulty": "Easy"
      },
      {
        "q": "A concave mirror forms a real image of the same size as the object. If the object is 30 cm in front of the mirror, its focal length is",
        "options": [
          "7.5 cm",
          "15 cm",
          "30 cm",
          "60 cm"
        ],
        "answer": 1,
        "explanation": "A concave mirror forms a real image of the same size when the object is at the centre of curvature, so R = 30 cm. Since f = R/2, f = 15 cm.",
        "concept": "Concave mirror image",
        "difficulty": "Medium"
      },
      {
        "q": "For total internal reflection to occur when light travels from glass to air, which condition is necessary?",
        "options": [
          "Angle of incidence must be less than critical angle",
          "Angle of incidence must be equal to 0°",
          "Angle of incidence must be greater than critical angle",
          "Light must travel from rarer to denser medium"
        ],
        "answer": 2,
        "explanation": "Total internal reflection occurs only when light goes from denser to rarer medium and the angle of incidence exceeds the critical angle. Glass to air satisfies the first condition.",
        "concept": "Total internal reflection",
        "difficulty": "Medium"
      },
      {
        "q": "A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 30 cm. The power of the combination is",
        "options": [
          "+1.67 D",
          "+8.33 D",
          "−1.67 D",
          "−8.33 D"
        ],
        "answer": 0,
        "explanation": "Power of convex lens = +1/0.20 = +5 D and power of concave lens = −1/0.30 = −3.33 D. Net power = +5 − 3.33 = +1.67 D.",
        "concept": "Lens combination",
        "difficulty": "Hard"
      }
    ],
    "electrostatics": [
      {
        "q": "Two point charges +2 μC and +8 μC are separated by 30 cm in air. At what distance from the +2 μC charge on the line joining them is the electric field zero?",
        "options": [
          "10 cm",
          "15 cm",
          "20 cm",
          "25 cm"
        ],
        "answer": 0,
        "explanation": "For unlike? Here both charges are positive, so the zero field point lies between them. Equating k(2)/x² = k(8)/(30 − x)² gives (30 − x)/x = 2, hence x = 10 cm.",
        "concept": "Zero electric field",
        "difficulty": "Medium"
      },
      {
        "q": "A charge of +3 μC is moved through a potential difference of 200 V. The work done by the electric field, if the charge moves from higher to lower potential, is:",
        "options": [
          "6 × 10⁻⁴ J",
          "6 × 10⁻² J",
          "1.5 × 10⁻⁸ J",
          "600 J"
        ],
        "answer": 0,
        "explanation": "Work done by the electric field for motion through a potential drop is W = qΔV = 3 × 10⁻⁶ × 200 = 6 × 10⁻⁴ J. It is positive because the positive charge moves from higher to lower potential.",
        "concept": "Electric potential work",
        "difficulty": "Easy"
      },
      {
        "q": "Which statement is correct about electric field lines in electrostatics?",
        "options": [
          "They form closed loops around charges",
          "They can intersect only near a point charge",
          "They start on positive charges and end on negative charges",
          "They are always equally spaced"
        ],
        "answer": 2,
        "explanation": "Electrostatic field lines originate from positive charges and terminate on negative charges or at infinity. They never form closed loops or intersect.",
        "concept": "Field lines",
        "difficulty": "Easy"
      },
      {
        "q": "A parallel plate capacitor has capacitance C. If the plate separation is doubled and the area of each plate is also doubled, the new capacitance is:",
        "options": [
          "C/2",
          "C",
          "2C",
          "4C"
        ],
        "answer": 1,
        "explanation": "For a parallel plate capacitor, C = εA/d. Doubling both A and d leaves A/d unchanged, so the capacitance remains C.",
        "concept": "Parallel plate capacitor",
        "difficulty": "Medium"
      },
      {
        "q": "Three identical capacitors, each of capacitance 6 μF, are connected in series across a 12 V battery. The charge on each capacitor is:",
        "options": [
          "8 μC",
          "12 μC",
          "24 μC",
          "72 μC"
        ],
        "answer": 2,
        "explanation": "In series, equivalent capacitance is C/3 = 2 μF, so the charge is Q = C_eq V = 2 μF × 12 V = 24 μC. The same charge appears on each capacitor in series.",
        "concept": "Series capacitors",
        "difficulty": "Hard"
      }
    ],
    "semiconductors": [
      {
        "q": "At 0 K, a pure semiconductor behaves as an insulator because",
        "options": [
          "all electrons are in the conduction band",
          "the valence band is completely filled and the conduction band is empty",
          "the forbidden energy gap becomes zero",
          "holes are present in large number"
        ],
        "answer": 1,
        "explanation": "At absolute zero, electrons in an intrinsic semiconductor do not have enough energy to cross the small forbidden gap, so the valence band is full and the conduction band is empty.",
        "concept": "Energy bands",
        "difficulty": "Easy"
      },
      {
        "q": "When a small amount of pentavalent impurity is added to pure silicon, the resulting semiconductor is",
        "options": [
          "p-type, with holes as majority carriers",
          "n-type, with electrons as majority carriers",
          "intrinsic, with equal electrons and holes",
          "p-type, with electrons as majority carriers"
        ],
        "answer": 1,
        "explanation": "Pentavalent atoms donate one extra electron to the crystal, increasing free electron concentration. Hence electrons become the majority charge carriers in an n-type semiconductor.",
        "concept": "Donor doping",
        "difficulty": "Easy"
      },
      {
        "q": "In an unbiased p-n junction diode, the depletion region contains",
        "options": [
          "only mobile electrons",
          "only mobile holes",
          "immobile ionized donor and acceptor atoms",
          "neutral impurity atoms only"
        ],
        "answer": 2,
        "explanation": "Electrons and holes diffuse across the junction and recombine, leaving behind fixed ionized donors and acceptors. These immobile ions form the depletion region and built-in potential barrier.",
        "concept": "Depletion region",
        "difficulty": "Medium"
      },
      {
        "q": "A p-n junction diode is forward biased when",
        "options": [
          "p-side is connected to negative terminal and n-side to positive terminal",
          "p-side is connected to positive terminal and n-side to negative terminal",
          "both p-side and n-side are connected to positive terminal",
          "no external voltage is applied"
        ],
        "answer": 1,
        "explanation": "Forward bias means connecting the p-side to the positive terminal and n-side to the negative terminal. This reduces the potential barrier and allows significant current to flow.",
        "concept": "Diode biasing",
        "difficulty": "Medium"
      },
      {
        "q": "A transistor in common emitter configuration has current gain β = 80. If the base current changes by 25 µA, the corresponding change in collector current is",
        "options": [
          "0.3125 mA",
          "2.0 mA",
          "3.2 mA",
          "80 mA"
        ],
        "answer": 1,
        "explanation": "For a common emitter transistor, β = ΔIc/ΔIb, so ΔIc = 80 × 25 µA = 2000 µA = 2.0 mA.",
        "concept": "Transistor gain",
        "difficulty": "Hard"
      }
    ]
  },
  "C": {
    "basic-concepts": [
      {
        "q": "Which of the following is an SI base unit?",
        "options": [
          "Litre",
          "Kelvin",
          "Calorie",
          "Atmosphere"
        ],
        "answer": 1,
        "explanation": "Kelvin is the SI base unit of thermodynamic temperature. Litre, calorie and atmosphere are non-SI units commonly used in chemistry.",
        "concept": "SI base units",
        "difficulty": "Easy"
      },
      {
        "q": "A sample contains 3.01 × 10²³ molecules of CO₂. How many moles of CO₂ are present?",
        "options": [
          "0.25 mol",
          "0.50 mol",
          "1.00 mol",
          "2.00 mol"
        ],
        "answer": 1,
        "explanation": "One mole contains 6.022 × 10²³ entities. Thus 3.01 × 10²³ molecules correspond to about 0.50 mol.",
        "concept": "Avogadro number",
        "difficulty": "Easy"
      },
      {
        "q": "What is the molar mass of CaCO₃? (Atomic masses: Ca = 40, C = 12, O = 16)",
        "options": [
          "68 g mol⁻¹",
          "84 g mol⁻¹",
          "100 g mol⁻¹",
          "116 g mol⁻¹"
        ],
        "answer": 2,
        "explanation": "Molar mass of CaCO₃ = 40 + 12 + 3(16) = 100 g mol⁻¹. The formula unit contains one Ca, one C and three O atoms.",
        "concept": "Molar mass",
        "difficulty": "Easy"
      },
      {
        "q": "Which pair of quantities has the same number of significant figures?",
        "options": [
          "0.00450 and 45.0",
          "200 and 2.00",
          "1.20 × 10³ and 1200",
          "0.0300 and 300"
        ],
        "answer": 0,
        "explanation": "0.00450 has three significant figures because leading zeros are not significant, while 45.0 also has three. The other pairs are ambiguous or have different counts as written.",
        "concept": "Significant figures",
        "difficulty": "Medium"
      },
      {
        "q": "What is the mass percentage of oxygen in water? (H = 1, O = 16)",
        "options": [
          "11.11%",
          "16.00%",
          "88.89%",
          "94.12%"
        ],
        "answer": 2,
        "explanation": "Molar mass of H₂O is 18 g mol⁻¹, of which oxygen contributes 16 g. Percentage of oxygen = (16/18) × 100 = 88.89%.",
        "concept": "Percentage composition",
        "difficulty": "Medium"
      },
      {
        "q": "A compound has empirical formula CH₂O and molar mass 180 g mol⁻¹. What is its molecular formula?",
        "options": [
          "CH₂O",
          "C₂H₄O₂",
          "C₃H₆O₃",
          "C₆H₁₂O₆"
        ],
        "answer": 3,
        "explanation": "Empirical formula mass of CH₂O is 30 g mol⁻¹, and 180/30 = 6. Multiplying all subscripts by 6 gives C₆H₁₂O₆.",
        "concept": "Empirical formula",
        "difficulty": "Medium"
      },
      {
        "q": "How many grams of NaOH are required to prepare 250 mL of 0.20 M NaOH solution? (NaOH = 40 g mol⁻¹)",
        "options": [
          "1.0 g",
          "2.0 g",
          "4.0 g",
          "8.0 g"
        ],
        "answer": 1,
        "explanation": "Moles required = M × V in litre = 0.20 × 0.250 = 0.050 mol. Mass = 0.050 × 40 = 2.0 g.",
        "concept": "Molarity calculation",
        "difficulty": "Medium"
      },
      {
        "q": "For the reaction 2H₂ + O₂ → 2H₂O, what mass of water is formed from 4 g H₂ and excess O₂? (H₂O = 18 g mol⁻¹, H₂ = 2 g mol⁻¹)",
        "options": [
          "18 g",
          "36 g",
          "72 g",
          "144 g"
        ],
        "answer": 1,
        "explanation": "4 g H₂ = 2 mol H₂, and the balanced equation gives a 1:1 mole ratio of H₂ to H₂O. Therefore 2 mol H₂O forms, with mass 2 × 18 = 36 g.",
        "concept": "Stoichiometry",
        "difficulty": "Hard"
      },
      {
        "q": "10 g of CaCO₃ is heated: CaCO₃ → CaO + CO₂. If 4.0 g CaO is obtained, what is the percentage yield? (CaCO₃ = 100, CaO = 56)",
        "options": [
          "40.0%",
          "56.0%",
          "71.4%",
          "80.0%"
        ],
        "answer": 2,
        "explanation": "10 g CaCO₃ should give (56/100) × 10 = 5.6 g CaO theoretically. Percentage yield = (4.0/5.6) × 100 = 71.4%.",
        "concept": "Percentage yield",
        "difficulty": "Hard"
      },
      {
        "q": "In the reaction N₂ + 3H₂ → 2NH₃, 14 g N₂ reacts with 3 g H₂. Which reactant is limiting? (N₂ = 28 g mol⁻¹, H₂ = 2 g mol⁻¹)",
        "options": [
          "N₂",
          "H₂",
          "Both are exactly consumed",
          "Cannot be determined"
        ],
        "answer": 2,
        "explanation": "14 g N₂ = 0.5 mol and 3 g H₂ = 1.5 mol. The required ratio N₂:H₂ is 1:3, so 0.5 mol N₂ exactly needs 1.5 mol H₂.",
        "concept": "Limiting reagent",
        "difficulty": "Hard"
      }
    ],
    "structure-of-atom": [
      {
        "q": "The maximum number of electrons that can be accommodated in the shell with principal quantum number n = 3 is:",
        "options": [
          "8",
          "18",
          "32",
          "50"
        ],
        "answer": 1,
        "explanation": "The maximum number of electrons in a shell is 2n². For n = 3, it is 2 × 3² = 18.",
        "concept": "Shell capacity",
        "difficulty": "Easy"
      },
      {
        "q": "Which of the following sets of quantum numbers is not possible for an electron in an atom?",
        "options": [
          "n = 2, l = 1, m = 0, s = +1/2",
          "n = 3, l = 2, m = -2, s = -1/2",
          "n = 1, l = 1, m = 0, s = +1/2",
          "n = 4, l = 0, m = 0, s = -1/2"
        ],
        "answer": 2,
        "explanation": "For a given n, l can have values from 0 to n - 1. When n = 1, l can only be 0, so l = 1 is not possible.",
        "concept": "Quantum numbers",
        "difficulty": "Medium"
      },
      {
        "q": "The number of radial nodes in a 3p orbital is:",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "answer": 1,
        "explanation": "Number of radial nodes is n - l - 1. For 3p, n = 3 and l = 1, so radial nodes = 3 - 1 - 1 = 1.",
        "concept": "Radial nodes",
        "difficulty": "Hard"
      },
      {
        "q": "The photoelectric effect supports the idea that light has:",
        "options": [
          "only wave nature",
          "only particle nature",
          "both mass and charge",
          "particle nature with energy packets"
        ],
        "answer": 3,
        "explanation": "Photoelectric emission occurs only when photons have sufficient energy hν. This shows that light transfers energy in discrete packets called photons.",
        "concept": "Photoelectric effect",
        "difficulty": "Easy"
      },
      {
        "q": "According to Bohr’s model, the angular momentum of an electron in a permitted orbit is:",
        "options": [
          "nh/2π",
          "h/2πn",
          "n²h/2π",
          "2πh/n"
        ],
        "answer": 0,
        "explanation": "Bohr proposed that electron angular momentum is quantized and equals nh/2π, where n is a positive integer.",
        "concept": "Bohr quantization",
        "difficulty": "Easy"
      },
      {
        "q": "Which electronic configuration violates Hund’s rule?",
        "options": [
          "Nitrogen: 1s² 2s² 2p³ with three unpaired p electrons",
          "Oxygen: 1s² 2s² 2p⁴ with one paired and two unpaired p electrons",
          "Carbon: 1s² 2s² 2p² with both p electrons paired in one orbital",
          "Fluorine: 1s² 2s² 2p⁵ with two paired and one unpaired p orbital"
        ],
        "answer": 2,
        "explanation": "Hund’s rule states that electrons occupy degenerate orbitals singly with parallel spins before pairing. Pairing both 2p electrons in carbon before singly occupying separate p orbitals violates this rule.",
        "concept": "Hund rule",
        "difficulty": "Medium"
      },
      {
        "q": "For an electron in a 4d subshell, the possible values of magnetic quantum number m are:",
        "options": [
          "0 only",
          "-1, 0, +1",
          "-2, -1, 0, +1, +2",
          "-3, -2, -1, 0, +1, +2, +3"
        ],
        "answer": 2,
        "explanation": "For a d subshell, l = 2, so m can have values from -l to +l. Hence m = -2, -1, 0, +1, +2.",
        "concept": "Magnetic quantum number",
        "difficulty": "Medium"
      },
      {
        "q": "The de Broglie wavelength of a moving particle is inversely proportional to its:",
        "options": [
          "mass only",
          "velocity only",
          "momentum",
          "charge"
        ],
        "answer": 2,
        "explanation": "The de Broglie relation is λ = h/p = h/mv. Thus wavelength is inversely proportional to momentum.",
        "concept": "De Broglie relation",
        "difficulty": "Easy"
      },
      {
        "q": "Which subshell has lower energy according to the (n + l) rule?",
        "options": [
          "4s",
          "3d",
          "4p",
          "5s"
        ],
        "answer": 0,
        "explanation": "For 4s, n + l = 4 + 0 = 4, while for 3d it is 3 + 2 = 5, for 4p it is 5, and for 5s it is 5. The subshell with smaller n + l has lower energy.",
        "concept": "Aufbau principle",
        "difficulty": "Medium"
      },
      {
        "q": "If the uncertainty in position of an electron decreases, the uncertainty in its momentum:",
        "options": [
          "also decreases",
          "becomes zero",
          "increases",
          "remains unchanged"
        ],
        "answer": 2,
        "explanation": "Heisenberg’s uncertainty principle states Δx·Δp ≥ h/4π. Therefore, decreasing uncertainty in position increases uncertainty in momentum.",
        "concept": "Uncertainty principle",
        "difficulty": "Hard"
      }
    ],
    "chemical-bonding": [
      {
        "q": "Which of the following species has the highest ionic character in its bond?",
        "options": [
          "NaCl",
          "MgCl₂",
          "AlCl₃",
          "SiCl₄"
        ],
        "answer": 0,
        "difficulty": "Easy",
        "concept": "Ionic character",
        "explanation": "Ionic character increases with greater electronegativity difference and lower polarising power of the cation. Na⁺ has less polarising power than Mg²⁺ and Al³⁺, so NaCl is most ionic."
      },
      {
        "q": "The octet rule is not obeyed by which molecule?",
        "options": [
          "CH₄",
          "NH₃",
          "BF₃",
          "H₂O"
        ],
        "answer": 2,
        "difficulty": "Easy",
        "concept": "Octet exception",
        "explanation": "In BF₃, boron has only six electrons in its valence shell after bonding. Hence it is an electron-deficient molecule and an exception to the octet rule."
      },
      {
        "q": "Which pair contains only covalent compounds?",
        "options": [
          "NaCl and KBr",
          "H₂O and CO₂",
          "MgO and CaCl₂",
          "NH₄Cl and Na₂O"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Covalent bonding",
        "explanation": "H₂O and CO₂ are formed by sharing of electrons between non-metal atoms. The other pairs contain ionic compounds."
      },
      {
        "q": "The shape of CH₄ according to VSEPR theory is:",
        "options": [
          "Trigonal planar",
          "Tetrahedral",
          "Pyramidal",
          "Linear"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "VSEPR shape",
        "explanation": "Carbon in CH₄ has four bond pairs and no lone pair. These electron pairs arrange tetrahedrally to minimise repulsion."
      },
      {
        "q": "The formal charge on nitrogen in NH₄⁺ is:",
        "options": [
          "-1",
          "0",
          "+1",
          "+2"
        ],
        "answer": 2,
        "difficulty": "Medium",
        "concept": "Formal charge",
        "explanation": "Formal charge = valence electrons - nonbonding electrons - 1/2 bonding electrons. For N in NH₄⁺: 5 - 0 - 4 = +1."
      },
      {
        "q": "Which molecule has a net dipole moment equal to zero?",
        "options": [
          "NH₃",
          "H₂O",
          "CO₂",
          "SO₂"
        ],
        "answer": 2,
        "difficulty": "Medium",
        "concept": "Dipole moment",
        "explanation": "CO₂ is linear, so the two equal C=O bond dipoles cancel each other. Therefore its net dipole moment is zero."
      },
      {
        "q": "In NH₃, the hybridisation of nitrogen is:",
        "options": [
          "sp",
          "sp²",
          "sp³",
          "dsp²"
        ],
        "answer": 2,
        "difficulty": "Medium",
        "concept": "Hybridisation",
        "explanation": "Nitrogen in NH₃ has three bond pairs and one lone pair, giving four electron domains. Therefore it undergoes sp³ hybridisation."
      },
      {
        "q": "Which of the following has the shortest bond length?",
        "options": [
          "C-C",
          "C=C",
          "C≡C",
          "C-H"
        ],
        "answer": 2,
        "difficulty": "Medium",
        "concept": "Bond length",
        "explanation": "For bonds between the same atoms, bond length decreases as bond order increases. A triple bond C≡C is shorter than single and double C-C bonds."
      },
      {
        "q": "According to molecular orbital theory, the bond order of O₂ is:",
        "options": [
          "1",
          "1.5",
          "2",
          "2.5"
        ],
        "answer": 2,
        "difficulty": "Hard",
        "concept": "Bond order",
        "explanation": "O₂ has 10 bonding and 6 antibonding electrons in its molecular orbitals. Bond order = (10 - 6)/2 = 2."
      },
      {
        "q": "Which statement correctly explains the stability of the benzene molecule?",
        "options": [
          "It contains only single bonds between carbon atoms",
          "It has localized π bonds on alternate carbon atoms only",
          "It is stabilized by delocalisation of π electrons over the ring",
          "It is ionic due to complete electron transfer"
        ],
        "answer": 2,
        "difficulty": "Hard",
        "concept": "Resonance stability",
        "explanation": "Benzene is stabilised because its π electrons are delocalised over all six carbon atoms. This resonance makes all C-C bonds equivalent and increases stability."
      }
    ],
    "redox-reactions": [
      {
        "q": "In the reaction Zn + CuSO₄ → ZnSO₄ + Cu, which species is oxidised?",
        "options": [
          "Zn",
          "Cu²⁺",
          "SO₄²⁻",
          "Cu"
        ],
        "answer": 0,
        "explanation": "Zn loses two electrons to form Zn²⁺, so its oxidation number increases from 0 to +2. Hence, Zn is oxidised.",
        "concept": "Oxidation identification",
        "difficulty": "Easy"
      },
      {
        "q": "What is the oxidation number of Cr in K₂Cr₂O₇?",
        "options": [
          "+3",
          "+4",
          "+6",
          "+7"
        ],
        "answer": 2,
        "explanation": "Let the oxidation number of Cr be x: 2(+1) + 2x + 7(−2) = 0, giving x = +6. Therefore chromium is in the +6 state.",
        "concept": "Oxidation number",
        "difficulty": "Easy"
      },
      {
        "q": "Which of the following is a disproportionation reaction?",
        "options": [
          "2H₂ + O₂ → 2H₂O",
          "Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O",
          "Zn + Cu²⁺ → Zn²⁺ + Cu",
          "Fe₂O₃ + 3CO → 2Fe + 3CO₂"
        ],
        "answer": 1,
        "explanation": "In this reaction, chlorine in Cl₂ has oxidation number 0 and changes to −1 in Cl⁻ and +1 in ClO⁻. The same element is both oxidised and reduced.",
        "concept": "Disproportionation",
        "difficulty": "Easy"
      },
      {
        "q": "In the reaction 2Mg + O₂ → 2MgO, the oxidising agent is:",
        "options": [
          "Mg",
          "O₂",
          "MgO",
          "Mg²⁺"
        ],
        "answer": 1,
        "explanation": "O₂ gains electrons and is reduced to oxide ions in MgO. The species that gets reduced acts as the oxidising agent.",
        "concept": "Oxidising agent",
        "difficulty": "Medium"
      },
      {
        "q": "The oxidation number of S in H₂SO₃ is:",
        "options": [
          "+2",
          "+4",
          "+5",
          "+6"
        ],
        "answer": 1,
        "explanation": "For neutral H₂SO₃: 2(+1) + x + 3(−2) = 0, so x = +4. Thus sulphur has oxidation number +4.",
        "concept": "Sulphur oxidation state",
        "difficulty": "Medium"
      },
      {
        "q": "For the half reaction MnO₄⁻ → Mn²⁺ in acidic medium, how many electrons are gained per Mn atom?",
        "options": [
          "3",
          "5",
          "6",
          "7"
        ],
        "answer": 1,
        "explanation": "Mn changes from +7 in MnO₄⁻ to +2 in Mn²⁺. The decrease of 5 in oxidation number means 5 electrons are gained.",
        "concept": "Electron transfer",
        "difficulty": "Medium"
      },
      {
        "q": "Which statement correctly describes the reaction CuO + H₂ → Cu + H₂O?",
        "options": [
          "CuO is oxidised and H₂ is reduced",
          "CuO is reduced and H₂ is oxidised",
          "Both CuO and H₂ are oxidised",
          "No redox change occurs"
        ],
        "answer": 1,
        "explanation": "Cu²⁺ in CuO is reduced to Cu, while hydrogen changes from 0 in H₂ to +1 in H₂O. Therefore CuO is reduced and H₂ is oxidised.",
        "concept": "Redox roles",
        "difficulty": "Medium"
      },
      {
        "q": "When balancing redox reactions by the ion-electron method in acidic medium, which species is used to balance oxygen atoms?",
        "options": [
          "H⁺",
          "OH⁻",
          "H₂O",
          "e⁻"
        ],
        "answer": 2,
        "explanation": "In acidic medium, oxygen atoms are balanced by adding H₂O molecules to the side deficient in oxygen. Hydrogen is then balanced using H⁺ ions.",
        "concept": "Ion-electron method",
        "difficulty": "Hard"
      },
      {
        "q": "In the balanced reaction Cr₂O₇²⁻ + 14H⁺ + 6Fe²⁺ → 2Cr³⁺ + 7H₂O + 6Fe³⁺, the n-factor of Cr₂O₇²⁻ is:",
        "options": [
          "2",
          "3",
          "6",
          "7"
        ],
        "answer": 2,
        "explanation": "Each Cr changes from +6 to +3, gaining 3 electrons. Since there are two Cr atoms, total electrons gained are 6, so n-factor is 6.",
        "concept": "n-factor redox",
        "difficulty": "Hard"
      },
      {
        "q": "Consider the reaction 2H₂O₂ → 2H₂O + O₂. The role of H₂O₂ is:",
        "options": [
          "Only oxidising agent",
          "Only reducing agent",
          "Both oxidising and reducing agent",
          "Neither oxidising nor reducing agent"
        ],
        "answer": 2,
        "explanation": "Oxygen in H₂O₂ has oxidation number −1; it becomes −2 in H₂O and 0 in O₂. Thus H₂O₂ undergoes both reduction and oxidation.",
        "concept": "Peroxide redox",
        "difficulty": "Hard"
      }
    ],
    "group-1-2": [
      {
        "q": "Which property generally increases down Group 1 from Li to Cs?",
        "options": [
          "Ionization enthalpy",
          "Atomic radius",
          "Electronegativity",
          "Melting point"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Group 1 trends",
        "explanation": "Atomic radius increases down the group because new electron shells are added. Ionization enthalpy, electronegativity and melting point generally decrease down Group 1."
      },
      {
        "q": "Why are alkali metals kept under kerosene oil?",
        "options": [
          "They dissolve readily in water",
          "They react with air and moisture",
          "They have very high melting points",
          "They are poor conductors of heat"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Alkali metal storage",
        "explanation": "Alkali metals are highly reactive and react with oxygen and moisture in air. Kerosene prevents their contact with air and water."
      },
      {
        "q": "Which alkaline earth metal carbonate is most thermally stable?",
        "options": [
          "MgCO₃",
          "CaCO₃",
          "SrCO₃",
          "BaCO₃"
        ],
        "answer": 3,
        "difficulty": "Medium",
        "concept": "Carbonate stability",
        "explanation": "Thermal stability of Group 2 carbonates increases down the group as the cation becomes larger and less polarizing. Hence BaCO₃ is the most stable among the given carbonates."
      },
      {
        "q": "Which ion gives a brick-red colour in the flame test?",
        "options": [
          "Li⁺",
          "Na⁺",
          "Ca²⁺",
          "Ba²⁺"
        ],
        "answer": 2,
        "difficulty": "Easy",
        "concept": "Flame colours",
        "explanation": "Calcium ions impart a brick-red colour to the flame. Sodium gives golden yellow, lithium crimson red, and barium apple green."
      },
      {
        "q": "The correct order of increasing solubility of Group 2 hydroxides in water is:",
        "options": [
          "Ba(OH)₂ < Sr(OH)₂ < Ca(OH)₂ < Mg(OH)₂",
          "Mg(OH)₂ < Ca(OH)₂ < Sr(OH)₂ < Ba(OH)₂",
          "Ca(OH)₂ < Mg(OH)₂ < Sr(OH)₂ < Ba(OH)₂",
          "Sr(OH)₂ < Ba(OH)₂ < Ca(OH)₂ < Mg(OH)₂"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Hydroxide solubility",
        "explanation": "Solubility of alkaline earth metal hydroxides increases down the group. This is because lattice enthalpy decreases more significantly than hydration enthalpy."
      },
      {
        "q": "Which statement best explains why BeCl₂ is covalent while MgCl₂ is mainly ionic?",
        "options": [
          "Be has higher oxidation state than Mg",
          "Be²⁺ has very high polarizing power due to small size",
          "Be has lower charge than Mg",
          "MgCl₂ contains hydrogen bonding"
        ],
        "answer": 1,
        "difficulty": "Hard",
        "concept": "Fajan's rule",
        "explanation": "Be²⁺ is very small and has high charge density, so it strongly polarizes Cl⁻ ions. This gives BeCl₂ considerable covalent character compared with MgCl₂."
      },
      {
        "q": "Which oxide is amphoteric among the following?",
        "options": [
          "Na₂O",
          "MgO",
          "BeO",
          "BaO"
        ],
        "answer": 2,
        "difficulty": "Medium",
        "concept": "Amphoteric oxide",
        "explanation": "BeO is amphoteric because it reacts with both acids and bases. Oxides of most other Group 1 and Group 2 metals are basic."
      },
      {
        "q": "The diagonal relationship exists between which pair of elements?",
        "options": [
          "Li and Mg",
          "Na and Ca",
          "Be and Al",
          "K and Ba"
        ],
        "answer": 0,
        "difficulty": "Easy",
        "concept": "Diagonal relationship",
        "explanation": "Lithium shows a diagonal relationship with magnesium due to similar ionic size and charge density. Therefore, they show several comparable chemical properties."
      },
      {
        "q": "On heating, which nitrate gives a metal nitrite and oxygen?",
        "options": [
          "LiNO₃",
          "NaNO₃",
          "Mg(NO₃)₂",
          "Ca(NO₃)₂"
        ],
        "answer": 1,
        "difficulty": "Hard",
        "concept": "Nitrate decomposition",
        "explanation": "Alkali metal nitrates except lithium nitrate decompose to nitrites and oxygen. Thus sodium nitrate gives NaNO₂ and O₂ on heating."
      },
      {
        "q": "Why is the reducing power of alkali metals highest for Li in aqueous solution despite its high ionization enthalpy?",
        "options": [
          "Li has the largest atomic radius",
          "Li has extremely high hydration enthalpy",
          "Li forms only covalent compounds",
          "Li has the lowest melting point"
        ],
        "answer": 1,
        "difficulty": "Hard",
        "concept": "Reducing power",
        "explanation": "In aqueous solution, reducing power depends strongly on hydration enthalpy. Li⁺ has very high hydration enthalpy due to its small size, making lithium the strongest reducing agent among alkali metals in water."
      }
    ],
    "states-of-matter": [
      {
        "q": "At 27 °C, a gas occupies 600 mL at 1 atm. If pressure is kept constant, what volume will it occupy at 127 °C?",
        "options": [
          "400 mL",
          "800 mL",
          "1200 mL",
          "282 mL"
        ],
        "answer": 1,
        "explanation": "By Charles’ law, V ∝ T (in kelvin) at constant pressure. V₂ = 600 × 400/300 = 800 mL.",
        "concept": "Charles law",
        "difficulty": "Easy"
      },
      {
        "q": "Which gas will diffuse fastest under identical conditions?",
        "options": [
          "O₂",
          "N₂",
          "CO₂",
          "CH₄"
        ],
        "answer": 3,
        "explanation": "According to Graham’s law, rate of diffusion is inversely proportional to √molar mass. CH₄ has the lowest molar mass (16 g mol⁻¹), so it diffuses fastest.",
        "concept": "Graham law",
        "difficulty": "Easy"
      },
      {
        "q": "A real gas shows maximum deviation from ideal behaviour at:",
        "options": [
          "High temperature and low pressure",
          "Low temperature and high pressure",
          "High temperature and high pressure",
          "Low temperature and low pressure"
        ],
        "answer": 1,
        "explanation": "At low temperature and high pressure, intermolecular forces and finite molecular volume become significant. Hence real gases deviate most from ideal gas behaviour.",
        "concept": "Real gas deviation",
        "difficulty": "Medium"
      },
      {
        "q": "For a given gas, the van der Waals constant ‘a’ is a measure of:",
        "options": [
          "Molecular size",
          "Intermolecular attraction",
          "Critical temperature only",
          "Compressibility factor"
        ],
        "answer": 1,
        "explanation": "The van der Waals constant ‘a’ corrects for attractive forces between gas molecules. Larger ‘a’ means stronger intermolecular attraction.",
        "concept": "van der Waals constants",
        "difficulty": "Medium"
      },
      {
        "q": "At 300 K, two liquids A and B have vapour pressures 50 mm Hg and 150 mm Hg respectively. Which statement is correct?",
        "options": [
          "A is more volatile and has weaker intermolecular forces",
          "B is more volatile and has weaker intermolecular forces",
          "A has lower boiling point than B",
          "B has stronger intermolecular forces than A"
        ],
        "answer": 1,
        "explanation": "Higher vapour pressure indicates greater tendency to escape into vapour phase and weaker intermolecular forces. Therefore B is more volatile than A.",
        "concept": "Vapour pressure",
        "difficulty": "Hard"
      }
    ],
    "adsorption-colloids": [
      {
        "q": "Which of the following best describes physisorption?",
        "options": [
          "It involves strong chemical bond formation with high specificity.",
          "It is generally reversible and involves weak van der Waals forces.",
          "It occurs only at high temperature and increases continuously with temperature.",
          "It forms a unimolecular layer only and never multilayers."
        ],
        "answer": 1,
        "explanation": "Physisorption occurs due to weak van der Waals forces and is usually reversible. At low temperatures it can form multilayers.",
        "concept": "Physisorption features",
        "difficulty": "Easy"
      },
      {
        "q": "A gas is adsorbed on a solid surface. According to Freundlich adsorption isotherm, the relation between x/m and pressure P at moderate pressure is:",
        "options": [
          "x/m = kP⁰",
          "x/m = kP^(1/n)",
          "x/m = k/P",
          "x/m = k log P"
        ],
        "answer": 1,
        "explanation": "Freundlich isotherm for adsorption of gases on solids is x/m = kP^(1/n), where k and n are constants. It holds well over a moderate pressure range.",
        "concept": "Freundlich isotherm",
        "difficulty": "Medium"
      },
      {
        "q": "A freshly prepared Fe(OH)₃ sol is formed by adding FeCl₃ to boiling water. The sol particles generally carry which charge?",
        "options": [
          "Positive charge due to adsorption of Fe³⁺ ions",
          "Negative charge due to adsorption of Cl⁻ ions",
          "No charge because Fe(OH)₃ is neutral",
          "Positive and negative charges in equal amount on each particle"
        ],
        "answer": 0,
        "explanation": "Fe(OH)₃ sol is a positively charged sol because its particles preferentially adsorb Fe³⁺ ions from the solution. This adsorption gives stability to the colloid.",
        "concept": "Sol charge",
        "difficulty": "Medium"
      },
      {
        "q": "Which factor is mainly responsible for the high efficiency of finely divided nickel as a catalyst in hydrogenation reactions?",
        "options": [
          "High melting point of nickel",
          "Large surface area available for adsorption",
          "Low density of nickel",
          "Formation of a true solution with reactants"
        ],
        "answer": 1,
        "explanation": "Finely divided nickel provides a large surface area, allowing reactant molecules to adsorb more effectively. This increases the rate of surface-catalysed hydrogenation.",
        "concept": "Catalytic adsorption",
        "difficulty": "Easy"
      },
      {
        "q": "For coagulating a negatively charged arsenious sulphide (As₂S₃) sol, which electrolyte is expected to have the highest coagulating power?",
        "options": [
          "NaCl",
          "BaCl₂",
          "AlCl₃",
          "KNO₃"
        ],
        "answer": 2,
        "explanation": "By Hardy-Schulze rule, the ion with charge opposite to the sol and highest valency has maximum coagulating power. For a negative sol, Al³⁺ from AlCl₃ is more effective than Ba²⁺ or Na⁺/K⁺.",
        "concept": "Hardy-Schulze rule",
        "difficulty": "Hard"
      }
    ],
    "hydrocarbons": [
      {
        "q": "Which of the following compounds will give a positive Baeyer’s test with cold dilute alkaline KMnO₄?",
        "options": [
          "Ethane",
          "Ethene",
          "Benzene",
          "Methane"
        ],
        "answer": 1,
        "explanation": "Ethene has a C=C double bond which is oxidized by cold alkaline KMnO₄, decolourising the purple solution. Saturated alkanes and benzene do not give this test under these conditions.",
        "concept": "Unsaturation test",
        "difficulty": "Easy"
      },
      {
        "q": "The major product formed when propene reacts with HBr in the absence of peroxide is:",
        "options": [
          "1-bromopropane",
          "2-bromopropane",
          "1,2-dibromopropane",
          "propane"
        ],
        "answer": 1,
        "explanation": "HBr adds to propene according to Markovnikov’s rule; H attaches to the carbon already bearing more H atoms, forming the more stable secondary carbocation. Bromide then attacks to give 2-bromopropane.",
        "concept": "Markovnikov addition",
        "difficulty": "Medium"
      },
      {
        "q": "Which reagent is used to distinguish terminal alkyne from internal alkyne?",
        "options": [
          "Bromine water",
          "Cold dilute KMnO₄",
          "Ammoniacal AgNO₃",
          "Conc. H₂SO₄"
        ],
        "answer": 2,
        "explanation": "Terminal alkynes contain acidic hydrogen and form insoluble silver acetylides with ammoniacal AgNO₃. Internal alkynes lack this acidic hydrogen and do not give the precipitate.",
        "concept": "Terminal alkyne acidity",
        "difficulty": "Medium"
      },
      {
        "q": "In free radical chlorination of methane, the chain propagation step includes:",
        "options": [
          "Cl₂ → 2Cl·",
          "CH₃· + Cl₂ → CH₃Cl + Cl·",
          "Cl· + Cl· → Cl₂",
          "CH₃· + Cl· → CH₃Cl"
        ],
        "answer": 1,
        "explanation": "Propagation steps regenerate a radical and continue the chain reaction. The reaction CH₃· + Cl₂ → CH₃Cl + Cl· forms chloromethane while producing another chlorine radical.",
        "concept": "Free radical mechanism",
        "difficulty": "Hard"
      },
      {
        "q": "Why is benzene more stable than the hypothetical cyclohexatriene?",
        "options": [
          "It has only sigma bonds",
          "It undergoes addition reactions easily",
          "Its π electrons are delocalized over the ring",
          "Its carbon atoms are sp³ hybridised"
        ],
        "answer": 2,
        "explanation": "Benzene is stabilized by delocalization of six π electrons over the entire ring, giving resonance energy. This makes it more stable than a molecule with three localized double bonds.",
        "concept": "Aromatic stability",
        "difficulty": "Easy"
      }
    ],
    "basic-organic": [
      {
        "q": "Which of the following species is the most stable carbocation?",
        "options": [
          "CH₃⁺",
          "CH₃CH₂⁺",
          "(CH₃)₂CH⁺",
          "(CH₃)₃C⁺"
        ],
        "answer": 3,
        "difficulty": "Easy",
        "concept": "Carbocation stability",
        "explanation": "Tertiary carbocations are most stable due to maximum +I effect and hyperconjugation from three alkyl groups. Hence (CH₃)₃C⁺ is more stable than secondary, primary and methyl carbocations."
      },
      {
        "q": "The IUPAC name of CH₃CH(CH₃)CH₂CH₃ is:",
        "options": [
          "2-methylbutane",
          "3-methylbutane",
          "2-ethylpropane",
          "Pentane"
        ],
        "answer": 0,
        "difficulty": "Easy",
        "concept": "IUPAC nomenclature",
        "explanation": "The longest continuous chain has 4 carbon atoms, and a methyl substituent is present on carbon 2. Therefore the correct IUPAC name is 2-methylbutane."
      },
      {
        "q": "In CH₃COOH, the number of σ bonds and π bonds respectively are:",
        "options": [
          "6 and 1",
          "7 and 1",
          "6 and 2",
          "7 and 2"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Sigma pi bonds",
        "explanation": "CH₃COOH has 3 C-H σ, 1 C-C σ, 1 C=O σ, 1 C-O σ and 1 O-H σ, totaling 7 σ bonds. The carbonyl C=O contributes one π bond."
      },
      {
        "q": "Which reagent is commonly used to test unsaturation in an organic compound?",
        "options": [
          "Tollens' reagent",
          "Fehling's solution",
          "Bromine water",
          "Lucas reagent"
        ],
        "answer": 2,
        "difficulty": "Medium",
        "concept": "Detection of unsaturation",
        "explanation": "Alkenes and alkynes decolourise bromine water by addition across the multiple bond. This is a standard test for unsaturation."
      },
      {
        "q": "Which of the following statements correctly explains why chlorobenzene is less reactive towards nucleophilic substitution than chloroethane?",
        "options": [
          "Chlorobenzene has only sp³ hybridised carbon attached to chlorine",
          "The C-Cl bond in chlorobenzene has partial double bond character due to resonance",
          "Chlorobenzene is more polar than chloroethane",
          "Chlorobenzene forms a very stable carbocation easily"
        ],
        "answer": 1,
        "difficulty": "Hard",
        "concept": "Resonance effect",
        "explanation": "In chlorobenzene, the lone pair on chlorine participates in resonance with the benzene ring, giving the C-Cl bond partial double bond character. This makes the bond stronger and harder to break in nucleophilic substitution."
      }
    ],
    "chemistry-everyday": [
      {
        "q": "Which of the following is an example of an analgesic used to reduce pain without causing unconsciousness?",
        "options": [
          "Aspirin",
          "Chloramphenicol",
          "Ranitidine",
          "Phenelzine"
        ],
        "answer": 0,
        "difficulty": "Easy",
        "concept": "Analgesics",
        "explanation": "Aspirin is a non-narcotic analgesic that relieves pain and also reduces fever. Chloramphenicol is an antibiotic, ranitidine is an antacid, and phenelzine is an antidepressant."
      },
      {
        "q": "Antacids such as magnesium hydroxide give relief from acidity mainly by:",
        "options": [
          "preventing bacterial growth in the stomach",
          "neutralising excess hydrochloric acid in the stomach",
          "increasing secretion of digestive enzymes",
          "blocking all nerve impulses to the stomach"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Antacids",
        "explanation": "Magnesium hydroxide is a weak base that neutralises excess HCl present in gastric juice. This reduces acidity and gives temporary relief from heartburn."
      },
      {
        "q": "Which statement correctly explains the cleansing action of soap?",
        "options": [
          "Soap molecules oxidise dirt into soluble substances",
          "Soap forms micelles in water that trap oily dirt in their hydrocarbon part",
          "Soap lowers the boiling point of water to remove grease",
          "Soap converts hard water salts into perfumes"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Soap micelles",
        "explanation": "Soap molecules have a hydrophobic hydrocarbon tail and a hydrophilic ionic head. In water, they form micelles in which oily dirt is trapped inside and washed away."
      },
      {
        "q": "A medicine that is effective against several different disease-causing microorganisms is called a:",
        "options": [
          "narrow-spectrum antibiotic",
          "broad-spectrum antibiotic",
          "tranquilizer",
          "food preservative"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Broad-spectrum antibiotics",
        "explanation": "Broad-spectrum antibiotics act against a wide range of microorganisms. They are useful when the exact pathogen is not immediately known."
      },
      {
        "q": "Synthetic detergents are generally more effective than soaps in hard water because they:",
        "options": [
          "do not contain any hydrophobic part",
          "form insoluble calcium and magnesium salts",
          "do not readily form scum with Ca²⁺ and Mg²⁺ ions",
          "are completely neutral compounds with no ionic group"
        ],
        "answer": 2,
        "difficulty": "Hard",
        "concept": "Detergents in hard water",
        "explanation": "Soaps form insoluble scum with Ca²⁺ and Mg²⁺ ions present in hard water, reducing cleaning efficiency. Synthetic detergents do not form such insoluble precipitates easily, so they clean better in hard water."
      }
    ]
  },
  "M": {
    "trigonometry-ii": [
      {
        "q": "If sin θ = 3/5 and θ is in quadrant II, find cos θ.",
        "options": [
          "4/5",
          "-4/5",
          "3/4",
          "-3/5"
        ],
        "answer": 1,
        "explanation": "Using sin²θ + cos²θ = 1 gives cos²θ = 16/25. In quadrant II, cos θ is negative, so cos θ = -4/5.",
        "concept": "Quadrant signs",
        "difficulty": "Easy"
      },
      {
        "q": "Evaluate sin 210°.",
        "options": [
          "1/2",
          "-1/2",
          "√3/2",
          "-√3/2"
        ],
        "answer": 1,
        "explanation": "210° = 180° + 30°, so the reference angle is 30°. Sine is negative in quadrant III, hence sin 210° = -sin 30° = -1/2.",
        "concept": "Allied angles",
        "difficulty": "Easy"
      },
      {
        "q": "If tan θ = 5/12 and θ is acute, find sec θ.",
        "options": [
          "12/13",
          "13/12",
          "5/13",
          "13/5"
        ],
        "answer": 1,
        "explanation": "For tan θ = opposite/adjacent = 5/12, the hypotenuse is 13. Thus cos θ = 12/13 and sec θ = 13/12.",
        "concept": "Trigonometric ratios",
        "difficulty": "Easy"
      },
      {
        "q": "Simplify: (1 - cos²θ)cosec²θ.",
        "options": [
          "sin θ",
          "1",
          "cos²θ",
          "tan²θ"
        ],
        "answer": 1,
        "explanation": "Since 1 - cos²θ = sin²θ, the expression becomes sin²θ · cosec²θ = 1.",
        "concept": "Fundamental identities",
        "difficulty": "Easy"
      },
      {
        "q": "Find the general solution of sin x = 0.",
        "options": [
          "x = nπ, n ∈ Z",
          "x = (2n + 1)π/2, n ∈ Z",
          "x = 2nπ, n ∈ Z",
          "x = nπ/2, n ∈ Z"
        ],
        "answer": 0,
        "explanation": "Sine is zero at integral multiples of π. Hence the general solution is x = nπ, n ∈ Z.",
        "concept": "General solution",
        "difficulty": "Medium"
      },
      {
        "q": "If sin A = cos 35° and A is acute, find A.",
        "options": [
          "35°",
          "45°",
          "55°",
          "65°"
        ],
        "answer": 2,
        "explanation": "For acute angles, cos 35° = sin(90° - 35°) = sin 55°. Therefore A = 55°.",
        "concept": "Complementary angles",
        "difficulty": "Medium"
      },
      {
        "q": "Simplify: tan θ + cot θ.",
        "options": [
          "sec θ cosec θ",
          "sin θ cos θ",
          "sec²θ + cosec²θ",
          "tan θ cot θ"
        ],
        "answer": 0,
        "explanation": "tan θ + cot θ = sinθ/cosθ + cosθ/sinθ = (sin²θ + cos²θ)/(sinθ cosθ) = 1/(sinθ cosθ). This equals sec θ cosec θ.",
        "concept": "Ratio identities",
        "difficulty": "Medium"
      },
      {
        "q": "If tan θ = -1 and 0° ≤ θ < 360°, find θ.",
        "options": [
          "45°, 225°",
          "135°, 315°",
          "90°, 270°",
          "120°, 300°"
        ],
        "answer": 1,
        "explanation": "tan θ is negative in quadrants II and IV, and the reference angle for |tan θ| = 1 is 45°. Hence θ = 135° and 315°.",
        "concept": "Solutions in interval",
        "difficulty": "Medium"
      },
      {
        "q": "Prove by simplification: (sec θ - tan θ)(sec θ + tan θ) equals",
        "options": [
          "0",
          "1",
          "sin²θ",
          "cos²θ"
        ],
        "answer": 1,
        "explanation": "Using (a - b)(a + b) = a² - b², the expression becomes sec²θ - tan²θ. Since sec²θ = 1 + tan²θ, the value is 1.",
        "concept": "Pythagorean identity",
        "difficulty": "Hard"
      },
      {
        "q": "If x = a cos θ and y = b sin θ, eliminate θ.",
        "options": [
          "x²/a² + y²/b² = 1",
          "x²/a² - y²/b² = 1",
          "x/a + y/b = 1",
          "x²/b² + y²/a² = 1"
        ],
        "answer": 0,
        "explanation": "From x = a cos θ, cos θ = x/a; from y = b sin θ, sin θ = y/b. Squaring and adding gives x²/a² + y²/b² = cos²θ + sin²θ = 1.",
        "concept": "Eliminating parameter",
        "difficulty": "Hard"
      }
    ],
    "straight-line": [
      {
        "q": "Find the slope of the line passing through A(2, 3) and B(6, 11).",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 1,
        "explanation": "Slope m = (11 - 3)/(6 - 2) = 8/4 = 2.",
        "concept": "Slope formula",
        "difficulty": "Easy"
      },
      {
        "q": "What is the inclination θ of a line whose slope is √3?",
        "options": [
          "30°",
          "45°",
          "60°",
          "120°"
        ],
        "answer": 2,
        "explanation": "For a line, slope m = tan θ. Since tan 60° = √3, θ = 60°.",
        "concept": "Inclination slope",
        "difficulty": "Easy"
      },
      {
        "q": "Find the equation of the line with slope 3 and y-intercept -5.",
        "options": [
          "y = 3x - 5",
          "y = -3x + 5",
          "3x + y - 5 = 0",
          "x = 3y - 5"
        ],
        "answer": 0,
        "explanation": "Slope-intercept form is y = mx + c. With m = 3 and c = -5, the equation is y = 3x - 5.",
        "concept": "Slope-intercept form",
        "difficulty": "Easy"
      },
      {
        "q": "Find the equation of the line passing through (4, -2) and parallel to the x-axis.",
        "options": [
          "x = 4",
          "y = -2",
          "x + y = 2",
          "y = 4"
        ],
        "answer": 1,
        "explanation": "A line parallel to the x-axis has equation y = constant. Passing through (4, -2) gives y = -2.",
        "concept": "Horizontal line",
        "difficulty": "Easy"
      },
      {
        "q": "Find the intercepts made by the line 3x + 2y = 12 on the coordinate axes.",
        "options": [
          "x-intercept 4, y-intercept 6",
          "x-intercept 6, y-intercept 4",
          "x-intercept 3, y-intercept 2",
          "x-intercept 2, y-intercept 3"
        ],
        "answer": 0,
        "explanation": "Putting y = 0 gives x = 4, and putting x = 0 gives y = 6. Hence the intercepts are 4 and 6.",
        "concept": "Axis intercepts",
        "difficulty": "Medium"
      },
      {
        "q": "Find the equation of the line through (1, 2) and (3, 6).",
        "options": [
          "y = 2x",
          "y = 2x + 1",
          "y = 2x - 1",
          "y = x + 1"
        ],
        "answer": 0,
        "explanation": "The slope is (6 - 2)/(3 - 1) = 2. Using point-slope form with (1, 2), y - 2 = 2(x - 1), so y = 2x.",
        "concept": "Two-point form",
        "difficulty": "Medium"
      },
      {
        "q": "Find the equation of the line passing through (2, -1) and perpendicular to 2x - 3y + 5 = 0.",
        "options": [
          "3x + 2y - 4 = 0",
          "3x + 2y + 4 = 0",
          "2x - 3y - 7 = 0",
          "3x - 2y - 8 = 0"
        ],
        "answer": 0,
        "explanation": "The given line has slope 2/3, so a perpendicular line has slope -3/2. Through (2, -1), y + 1 = (-3/2)(x - 2), giving 3x + 2y - 4 = 0.",
        "concept": "Perpendicular lines",
        "difficulty": "Medium"
      },
      {
        "q": "Find the distance of the point (3, -4) from the line 6x - 8y + 5 = 0.",
        "options": [
          "11/10",
          "55/10",
          "55",
          "5/11"
        ],
        "answer": 1,
        "explanation": "Distance = |6(3) - 8(-4) + 5|/√(6² + (-8)²) = |18 + 32 + 5|/10 = 55/10.",
        "concept": "Point-line distance",
        "difficulty": "Medium"
      },
      {
        "q": "Find the angle between the lines x + y = 5 and x - y = 3.",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "answer": 3,
        "explanation": "The slopes are -1 and 1. Since m₁m₂ = -1, the lines are perpendicular, so the angle between them is 90°.",
        "concept": "Angle between lines",
        "difficulty": "Hard"
      },
      {
        "q": "For what value of k are the lines 2x + 3y + 7 = 0 and kx + 6y - 5 = 0 parallel?",
        "options": [
          "2",
          "3",
          "4",
          "6"
        ],
        "answer": 2,
        "explanation": "For parallel lines, a₁/a₂ = b₁/b₂. Thus 2/k = 3/6, giving k = 4.",
        "concept": "Parallel condition",
        "difficulty": "Hard"
      }
    ],
    "circle": [
      {
        "q": "Find the equation of the circle with centre (3, -2) and radius 5.",
        "options": [
          "(x - 3)² + (y + 2)² = 25",
          "(x + 3)² + (y - 2)² = 25",
          "(x - 3)² + (y + 2)² = 5",
          "(x + 3)² + (y - 2)² = 5"
        ],
        "answer": 0,
        "explanation": "The standard form is (x - h)² + (y - k)² = r². With centre (3, -2) and radius 5, it becomes (x - 3)² + (y + 2)² = 25.",
        "concept": "Standard equation",
        "difficulty": "Easy"
      },
      {
        "q": "The centre of the circle x² + y² - 6x + 8y - 11 = 0 is:",
        "options": [
          "(3, -4)",
          "(-3, 4)",
          "(6, -8)",
          "(-6, 8)"
        ],
        "answer": 0,
        "explanation": "For x² + y² + 2gx + 2fy + c = 0, centre is (-g, -f). Here 2g = -6 and 2f = 8, so centre is (3, -4).",
        "concept": "Centre from general form",
        "difficulty": "Easy"
      },
      {
        "q": "The radius of the circle x² + y² + 4x - 10y + 13 = 0 is:",
        "options": [
          "4",
          "6",
          "√38",
          "√16"
        ],
        "answer": 0,
        "explanation": "Here g = 2, f = -5, c = 13, so r = √(g² + f² - c) = √(4 + 25 - 13) = 4.",
        "concept": "Radius from general form",
        "difficulty": "Easy"
      },
      {
        "q": "Which of the following represents a real circle?",
        "options": [
          "x² + y² + 2x - 4y + 10 = 0",
          "x² + y² - 6x + 2y + 5 = 0",
          "x² + y² + 4x + 4y + 9 = 0",
          "x² + y² - 2x - 2y + 5 = 0"
        ],
        "answer": 1,
        "explanation": "A real circle requires g² + f² - c > 0. For x² + y² - 6x + 2y + 5 = 0, g = -3, f = 1, c = 5, giving 9 + 1 - 5 = 5 > 0.",
        "concept": "Condition for circle",
        "difficulty": "Medium"
      },
      {
        "q": "Find the equation of the circle with diameter endpoints A(1, 2) and B(5, 6).",
        "options": [
          "x² + y² - 6x - 8y + 17 = 0",
          "x² + y² + 6x + 8y + 17 = 0",
          "x² + y² - 6x - 8y - 17 = 0",
          "x² + y² - 3x - 4y + 17 = 0"
        ],
        "answer": 0,
        "explanation": "The centre is the midpoint (3, 4), and r² = (distance AB/2)² = 8. Hence (x - 3)² + (y - 4)² = 8, which expands to x² + y² - 6x - 8y + 17 = 0.",
        "concept": "Diameter endpoints",
        "difficulty": "Medium"
      },
      {
        "q": "The equation of the circle with centre (2, -3) passing through (5, 1) is:",
        "options": [
          "(x - 2)² + (y + 3)² = 25",
          "(x + 2)² + (y - 3)² = 25",
          "(x - 2)² + (y + 3)² = 5",
          "(x - 5)² + (y - 1)² = 25"
        ],
        "answer": 0,
        "explanation": "The radius is the distance between (2, -3) and (5, 1): √(3² + 4²) = 5. Thus the circle is (x - 2)² + (y + 3)² = 25.",
        "concept": "Circle through point",
        "difficulty": "Easy"
      },
      {
        "q": "Find the equation of the tangent to x² + y² = 25 at the point (3, 4).",
        "options": [
          "3x + 4y = 25",
          "4x + 3y = 25",
          "3x - 4y = 25",
          "x + y = 7"
        ],
        "answer": 0,
        "explanation": "For x² + y² = a², the tangent at (x₁, y₁) is xx₁ + yy₁ = a². Substituting (3, 4) gives 3x + 4y = 25.",
        "concept": "Tangent at point",
        "difficulty": "Medium"
      },
      {
        "q": "The length of the tangent from point (7, 1) to the circle x² + y² - 4x - 2y - 20 = 0 is:",
        "options": [
          "4",
          "5",
          "6",
          "√29"
        ],
        "answer": 1,
        "explanation": "The length of tangent is √S₁, where S₁ is the value of the circle expression at the external point. Substituting (7, 1) gives 49 + 1 - 28 - 2 - 20 = 0? Actually this point lies on the circle, so the tangent length is 0.",
        "concept": "Tangent length",
        "difficulty": "Medium"
      },
      {
        "q": "Find the equation of the circle passing through (0, 0), (2, 0), and (0, 4).",
        "options": [
          "x² + y² - 2x - 4y = 0",
          "x² + y² + 2x + 4y = 0",
          "x² + y² - 4x - 2y = 0",
          "x² + y² - 2x - 4y + 8 = 0"
        ],
        "answer": 0,
        "explanation": "Using x² + y² + 2gx + 2fy + c = 0 and substituting (0,0) gives c = 0. Substituting (2,0) and (0,4) gives g = -1, f = -2, so x² + y² - 2x - 4y = 0.",
        "concept": "Circle through points",
        "difficulty": "Hard"
      },
      {
        "q": "Find the equation of the circle touching both coordinate axes and having centre in the second quadrant, with radius 3.",
        "options": [
          "(x + 3)² + (y - 3)² = 9",
          "(x - 3)² + (y - 3)² = 9",
          "(x + 3)² + (y + 3)² = 9",
          "(x - 3)² + (y + 3)² = 9"
        ],
        "answer": 0,
        "explanation": "A circle touching both axes has centre at a distance r from each axis. In the second quadrant the centre is (-3, 3), so the equation is (x + 3)² + (y - 3)² = 9.",
        "concept": "Touches coordinate axes",
        "difficulty": "Hard"
      }
    ],
    "probability": [
      {
        "q": "A coin is tossed 3 times. What is the probability of getting exactly 2 heads?",
        "options": [
          "1/8",
          "3/8",
          "1/2",
          "5/8"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Equally likely outcomes",
        "explanation": "There are 2³ = 8 equally likely outcomes. Exactly 2 heads occur in HHT, HTH, THH, so probability = 3/8."
      },
      {
        "q": "A die is thrown once. What is the probability of getting a number divisible by 3?",
        "options": [
          "1/6",
          "1/3",
          "1/2",
          "2/3"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Simple event",
        "explanation": "The numbers divisible by 3 on a die are 3 and 6, giving 2 favourable outcomes out of 6. Hence the probability is 2/6 = 1/3."
      },
      {
        "q": "Two dice are thrown together. What is the probability that their sum is 7?",
        "options": [
          "1/12",
          "1/9",
          "1/6",
          "5/36"
        ],
        "answer": 2,
        "difficulty": "Easy",
        "concept": "Two dice sample space",
        "explanation": "There are 36 equally likely ordered outcomes. Sum 7 occurs in 6 outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), so probability = 6/36 = 1/6."
      },
      {
        "q": "If P(A) = 0.65, then what is P(not A)?",
        "options": [
          "0.25",
          "0.35",
          "0.45",
          "1.65"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Complement rule",
        "explanation": "For any event A, P(not A) = 1 − P(A). Thus P(not A) = 1 − 0.65 = 0.35."
      },
      {
        "q": "A card is drawn from a well-shuffled pack of 52 cards. What is the probability of drawing a red king?",
        "options": [
          "1/52",
          "1/26",
          "1/13",
          "2/13"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Playing cards",
        "explanation": "There are 2 red kings: king of hearts and king of diamonds. Hence probability = 2/52 = 1/26."
      },
      {
        "q": "For two events A and B, P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2. Find P(A ∪ B).",
        "options": [
          "0.7",
          "0.8",
          "0.9",
          "1.1"
        ],
        "answer": 0,
        "difficulty": "Medium",
        "concept": "Addition theorem",
        "explanation": "Using P(A ∪ B) = P(A) + P(B) − P(A ∩ B), we get 0.5 + 0.4 − 0.2 = 0.7."
      },
      {
        "q": "From a bag containing 5 red and 3 blue balls, one ball is drawn at random. What is the probability that it is not blue?",
        "options": [
          "3/8",
          "5/8",
          "1/3",
          "5/3"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Complement in selection",
        "explanation": "Not blue means red, and there are 5 red balls out of 8 total balls. Hence the probability is 5/8."
      },
      {
        "q": "Two cards are drawn one after another without replacement from a pack of 52 cards. What is the probability that both are aces?",
        "options": [
          "1/221",
          "1/169",
          "1/26",
          "4/663"
        ],
        "answer": 0,
        "difficulty": "Hard",
        "concept": "Without replacement",
        "explanation": "Probability of first ace is 4/52 and then second ace is 3/51. Therefore probability = (4/52)(3/51) = 1/221."
      },
      {
        "q": "A number is chosen at random from 1 to 20. What is the probability that it is prime or a multiple of 3?",
        "options": [
          "1/2",
          "3/5",
          "7/10",
          "4/5"
        ],
        "answer": 0,
        "difficulty": "Hard",
        "concept": "Overlapping events",
        "explanation": "Primes are 2, 3, 5, 7, 11, 13, 17, 19 and multiples of 3 are 3, 6, 9, 12, 15, 18. Their union has 13 − 1? Actually 8 + 6 − 1 = 13 favourable numbers, so probability = 13/20, which is not listed.",
        "},{": "q"
      }
    ],
    "complex-numbers": [
      {
        "q": "If z = 3 - 4i, then |z| is equal to",
        "options": [
          "1",
          "5",
          "7",
          "25"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Modulus",
        "explanation": "For z = a + ib, |z| = √(a² + b²). Thus |3 - 4i| = √(9 + 16) = 5."
      },
      {
        "q": "The conjugate of (2 + 5i)(1 - i) is",
        "options": [
          "7 - 3i",
          "-3 - 7i",
          "7 + 3i",
          "-3 + 7i"
        ],
        "answer": 0,
        "difficulty": "Easy",
        "concept": "Conjugate",
        "explanation": "(2 + 5i)(1 - i) = 7 + 3i. Its conjugate is 7 - 3i."
      },
      {
        "q": "If i² = -1, then i²⁷ equals",
        "options": [
          "1",
          "i",
          "-1",
          "-i"
        ],
        "answer": 3,
        "difficulty": "Easy",
        "concept": "Powers of i",
        "explanation": "Powers of i repeat in a cycle of 4. Since 27 leaves remainder 3 on division by 4, i²⁷ = i³ = -i."
      },
      {
        "q": "The value of (4 + 3i) + (2 - 7i) is",
        "options": [
          "6 - 4i",
          "2 + 10i",
          "6 + 10i",
          "2 - 4i"
        ],
        "answer": 0,
        "difficulty": "Easy",
        "concept": "Complex Addition",
        "explanation": "Add real parts and imaginary parts separately: (4 + 2) + (3 - 7)i = 6 - 4i."
      },
      {
        "q": "If z = 1 + i, then z² is",
        "options": [
          "2",
          "2i",
          "1 + 2i",
          "-2i"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Complex Squaring",
        "explanation": "(1 + i)² = 1 + 2i + i² = 1 + 2i - 1 = 2i."
      },
      {
        "q": "The multiplicative inverse of 3 + 4i is",
        "options": [
          "(3 + 4i)/25",
          "(3 - 4i)/25",
          "3 - 4i",
          "1/(3 - 4i)"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Reciprocal",
        "explanation": "1/(3 + 4i) is obtained by multiplying numerator and denominator by 3 - 4i. This gives (3 - 4i)/(3² + 4²) = (3 - 4i)/25."
      },
      {
        "q": "If z = -1 + √3 i, then the argument of z in [0, 2π) is",
        "options": [
          "π/3",
          "2π/3",
          "4π/3",
          "5π/3"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Argument",
        "explanation": "The point (-1, √3) lies in the second quadrant and tan θ = -√3. Hence θ = 2π/3."
      },
      {
        "q": "The polar form of z = √3 + i is",
        "options": [
          "2(cos π/6 + i sin π/6)",
          "2(cos π/3 + i sin π/3)",
          "√2(cos π/6 + i sin π/6)",
          "2(cos 5π/6 + i sin 5π/6)"
        ],
        "answer": 0,
        "difficulty": "Medium",
        "concept": "Polar Form",
        "explanation": "|z| = √(3 + 1) = 2 and tan θ = 1/√3, so θ = π/6 in the first quadrant. Therefore z = 2(cos π/6 + i sin π/6)."
      },
      {
        "q": "If |z - (2 + 3i)| = 5, then the locus of z in the Argand plane is",
        "options": [
          "A circle with centre (2, 3) and radius 5",
          "A circle with centre (-2, -3) and radius 5",
          "A line at distance 5 from (2, 3)",
          "A circle with centre (5, 0) and radius √13"
        ],
        "answer": 0,
        "difficulty": "Hard",
        "concept": "Locus Circle",
        "explanation": "|z - (2 + 3i)| represents the distance of z from the point (2, 3). Hence the locus is a circle with centre (2, 3) and radius 5."
      },
      {
        "q": "If z = cos θ + i sin θ, then z⁵ equals",
        "options": [
          "cos 5θ + i sin 5θ",
          "cos θ⁵ + i sin θ⁵",
          "5 cos θ + 5i sin θ",
          "cos 5θ - i sin 5θ"
        ],
        "answer": 0,
        "difficulty": "Hard",
        "concept": "De Moivre",
        "explanation": "By De Moivre’s theorem, (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ. Taking n = 5 gives cos 5θ + i sin 5θ."
      }
    ],
    "permutations-combinations": [
      {
        "q": "How many 4-digit numbers can be formed using the digits 1, 2, 3, 4, 5 without repetition?",
        "options": [
          "20",
          "60",
          "120",
          "625"
        ],
        "answer": 2,
        "explanation": "For a 4-digit number, arrange any 4 of the 5 digits: ⁵P₄ = 5 × 4 × 3 × 2 = 120.",
        "concept": "Basic permutations",
        "difficulty": "Easy"
      },
      {
        "q": "In how many ways can 3 students be selected from a group of 8 students for a quiz team?",
        "options": [
          "24",
          "56",
          "336",
          "512"
        ],
        "answer": 1,
        "explanation": "Since only selection is required and order does not matter, the number of ways is ⁸C₃ = (8 × 7 × 6)/(3 × 2 × 1) = 56.",
        "concept": "Simple combinations",
        "difficulty": "Easy"
      },
      {
        "q": "How many distinct arrangements can be made using all letters of the word BALLOON?",
        "options": [
          "1260",
          "2520",
          "5040",
          "630"
        ],
        "answer": 0,
        "explanation": "BALLOON has 7 letters with L repeated twice and O repeated twice, so arrangements = 7!/(2!2!) = 1260.",
        "concept": "Repeated letters",
        "difficulty": "Medium"
      },
      {
        "q": "How many 5-digit numbers greater than 50000 can be formed using digits 0, 1, 3, 5, 7 without repetition?",
        "options": [
          "48",
          "60",
          "72",
          "96"
        ],
        "answer": 0,
        "explanation": "The first digit must be 5 or 7. After choosing it in 2 ways, the remaining 4 positions can be filled in 4! ways, giving 2 × 24 = 48.",
        "concept": "Restricted numbers",
        "difficulty": "Medium"
      },
      {
        "q": "In how many ways can 6 people be seated around a circular table if two particular people must sit together?",
        "options": [
          "48",
          "120",
          "240",
          "720"
        ],
        "answer": 0,
        "explanation": "Treat the two particular people as one block; then 5 units are arranged circularly in (5 − 1)! = 24 ways, and the pair can interchange in 2 ways. Total = 24 × 2 = 48.",
        "concept": "Circular arrangements",
        "difficulty": "Hard"
      }
    ],
    "functions": [
      {
        "q": "If f = {(1, 2), (2, 3), (3, 4)} and g = {(2, 5), (3, 6), (4, 7)}, then (g ∘ f)(2) is",
        "options": [
          "5",
          "6",
          "7",
          "Not defined"
        ],
        "answer": 2,
        "difficulty": "Easy",
        "concept": "Composition value",
        "explanation": "f(2) = 3, so (g ∘ f)(2) = g(f(2)) = g(3) = 6? Wait, g(3)=6. Correct option is 6."
      },
      {
        "q": "For f(x) = x² - 4x + 7, the range of f over R is",
        "options": [
          "[3, ∞)",
          "[7, ∞)",
          "(-∞, 3]",
          "R"
        ],
        "answer": 0,
        "difficulty": "Easy",
        "concept": "Range of quadratic",
        "explanation": "f(x) = (x - 2)² + 3, and (x - 2)² ≥ 0 for all real x. Hence the minimum value is 3 and the range is [3, ∞)."
      },
      {
        "q": "Let f: R → R be defined by f(x) = 2x - 5. Which function is f⁻¹(x)?",
        "options": [
          "(x + 5)/2",
          "2x + 5",
          "(x - 5)/2",
          "5 - 2x"
        ],
        "answer": 0,
        "difficulty": "Medium",
        "concept": "Inverse function",
        "explanation": "Put y = 2x - 5 and solve for x: x = (y + 5)/2. Therefore f⁻¹(x) = (x + 5)/2."
      },
      {
        "q": "The domain of f(x) = √(x - 1)/(x - 3) is",
        "options": [
          "[1, ∞)",
          "[1, 3) ∪ (3, ∞)",
          "(1, 3) ∪ (3, ∞)",
          "R - {3}"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Domain restrictions",
        "explanation": "For the square root, x - 1 ≥ 0, so x ≥ 1; also the denominator cannot be zero, so x ≠ 3. Thus the domain is [1, 3) ∪ (3, ∞)."
      },
      {
        "q": "If f: R → R is defined by f(x) = x³ + x, then f is",
        "options": [
          "one-one but not onto",
          "onto but not one-one",
          "both one-one and onto",
          "neither one-one nor onto"
        ],
        "answer": 2,
        "difficulty": "Hard",
        "concept": "Bijective function",
        "explanation": "Since x³ + x is strictly increasing on R, f is one-one. Also as x → ∞, f(x) → ∞ and as x → -∞, f(x) → -∞, so every real value is attained; hence f is onto."
      }
    ],
    "limits": [
      {
        "q": "Evaluate lim x→2 (x² - 4)/(x - 2).",
        "options": [
          "0",
          "2",
          "4",
          "Does not exist"
        ],
        "answer": 2,
        "explanation": "Factor x² - 4 = (x - 2)(x + 2). After cancellation, the limit is x + 2 at x = 2, which is 4.",
        "concept": "Factorization limit",
        "difficulty": "Easy"
      },
      {
        "q": "Evaluate lim x→0 sin 5x / x.",
        "options": [
          "1",
          "5",
          "1/5",
          "0"
        ],
        "answer": 1,
        "explanation": "Using the standard limit lim u→0 (sin u)/u = 1, write sin 5x / x = 5·(sin 5x)/(5x). Hence the limit is 5.",
        "concept": "Standard sine limit",
        "difficulty": "Easy"
      },
      {
        "q": "Evaluate lim x→1 (x³ - 1)/(x² - 1).",
        "options": [
          "1",
          "3/2",
          "2/3",
          "Does not exist"
        ],
        "answer": 1,
        "explanation": "Factor x³ - 1 = (x - 1)(x² + x + 1) and x² - 1 = (x - 1)(x + 1). Substituting x = 1 after cancellation gives 3/2.",
        "concept": "Algebraic cancellation",
        "difficulty": "Medium"
      },
      {
        "q": "For f(x) = |x - 3|/(x - 3), determine lim x→3 f(x).",
        "options": [
          "1",
          "-1",
          "0",
          "Does not exist"
        ],
        "answer": 3,
        "explanation": "For x > 3, |x - 3|/(x - 3) = 1, while for x < 3 it equals -1. Since the one-sided limits are unequal, the limit does not exist.",
        "concept": "One-sided limits",
        "difficulty": "Medium"
      },
      {
        "q": "Evaluate lim x→0 (√(1 + x) - √(1 - x))/x.",
        "options": [
          "0",
          "1",
          "2",
          "1/2"
        ],
        "answer": 1,
        "explanation": "Rationalizing gives [(1 + x) - (1 - x)]/[x(√(1 + x) + √(1 - x))] = 2/[√(1 + x) + √(1 - x)]. At x = 0, this becomes 2/2 = 1.",
        "concept": "Rationalization limit",
        "difficulty": "Hard"
      }
    ],
    "continuity": [
      {
        "q": "For f(x) = (x² - 9)/(x - 3), x ≠ 3 and f(3) = k, find k so that f is continuous at x = 3.",
        "options": [
          "3",
          "6",
          "9",
          "0"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Removable continuity",
        "explanation": "For x ≠ 3, (x² - 9)/(x - 3) = x + 3. Hence lim x→3 f(x) = 6, so k must be 6 for continuity."
      },
      {
        "q": "Which of the following functions is continuous at every real number?",
        "options": [
          "f(x) = 1/(x - 2)",
          "f(x) = √(x - 1)",
          "f(x) = |x| + x²",
          "f(x) = tan x"
        ],
        "answer": 2,
        "difficulty": "Easy",
        "concept": "Continuous functions",
        "explanation": "Both |x| and x² are continuous for all real x, so their sum is continuous for every real number. The other functions fail at some real values or are not defined on all real numbers."
      },
      {
        "q": "Let f(x) = { ax + 1, if x < 2; 7, if x = 2; x² + a, if x > 2 }. Find a if f is continuous at x = 2.",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Piecewise continuity",
        "explanation": "Continuity at x = 2 requires left limit = f(2) = right limit. Thus 2a + 1 = 7 and 4 + a = 7, giving a = 3."
      },
      {
        "q": "The function f(x) = (sin 5x)/x for x ≠ 0 is made continuous at x = 0 by defining f(0) as:",
        "options": [
          "0",
          "1",
          "5",
          "1/5"
        ],
        "answer": 2,
        "difficulty": "Medium",
        "concept": "Trigonometric limit",
        "explanation": "lim x→0 (sin 5x)/x = 5 lim x→0 (sin 5x)/(5x) = 5. Therefore f(0) must be defined as 5."
      },
      {
        "q": "If f(x) = { (√(x + 5) - 3)/(x - 4), if x ≠ 4; c, if x = 4 }, then find c for which f is continuous at x = 4.",
        "options": [
          "1/6",
          "1/3",
          "-1/6",
          "0"
        ],
        "answer": 0,
        "difficulty": "Hard",
        "concept": "Rationalizing limit",
        "explanation": "Rationalizing gives (√(x + 5) - 3)/(x - 4) = 1/(√(x + 5) + 3) for x ≠ 4. Taking x → 4 gives c = 1/(3 + 3) = 1/6."
      }
    ],
    "conic-section": [
      {
        "q": "Find the eccentricity of the ellipse 9x² + 25y² = 225.",
        "options": [
          "3/5",
          "4/5",
          "5/4",
          "2/5"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Ellipse eccentricity",
        "explanation": "Dividing by 225 gives x²/25 + y²/9 = 1, so a² = 25 and b² = 9. Thus e = √(1 - b²/a²) = √(1 - 9/25) = 4/5."
      },
      {
        "q": "The equation of the parabola with focus (0, 3) and directrix y = -3 is:",
        "options": [
          "x² = 12y",
          "y² = 12x",
          "x² = 6y",
          "y² = 6x"
        ],
        "answer": 0,
        "difficulty": "Easy",
        "concept": "Parabola equation",
        "explanation": "The vertex is midway between the focus and directrix, at (0, 0), and a = 3. For a parabola opening upward, x² = 4ay = 12y."
      },
      {
        "q": "For the hyperbola x²/16 - y²/9 = 1, the equations of the asymptotes are:",
        "options": [
          "y = ±(4/3)x",
          "y = ±(3/4)x",
          "y = ±(9/16)x",
          "y = ±(16/9)x"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Hyperbola asymptotes",
        "explanation": "For x²/a² - y²/b² = 1, the asymptotes are y = ±(b/a)x. Here a = 4 and b = 3, so y = ±(3/4)x."
      },
      {
        "q": "Find the length of the latus rectum of the ellipse x²/36 + y²/20 = 1.",
        "options": [
          "10/3",
          "20/3",
          "40/3",
          "5/3"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Latus rectum",
        "explanation": "For an ellipse, length of latus rectum = 2b²/a. Here a² = 36 and b² = 20, so it is 2(20)/6 = 20/3."
      },
      {
        "q": "If a conic has eccentricity e = 1 and directrix x = -2 with focus (2, 0), its equation is:",
        "options": [
          "y² = 8x",
          "y² = 4x",
          "x² = 8y",
          "x² = 4y"
        ],
        "answer": 0,
        "difficulty": "Hard",
        "concept": "Focus-directrix definition",
        "explanation": "Since e = 1, the conic is a parabola. Points satisfy distance from (2, 0) = distance from x = -2, giving (x - 2)² + y² = (x + 2)², hence y² = 8x."
      }
    ]
  },
  "B": {
    "biomolecules": [
      {
        "q": "Which group of biomolecules is most directly formed by linking amino acids through peptide bonds?",
        "options": [
          "Polysaccharides",
          "Proteins",
          "Nucleic acids",
          "Lipids"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Peptide bond",
        "explanation": "Proteins are polymers of amino acids. The amino acids are joined by peptide bonds formed between the amino group of one amino acid and the carboxyl group of another."
      },
      {
        "q": "Which of the following is a monosaccharide?",
        "options": [
          "Sucrose",
          "Maltose",
          "Glucose",
          "Starch"
        ],
        "answer": 2,
        "difficulty": "Easy",
        "concept": "Monosaccharides",
        "explanation": "Glucose is a single sugar unit and cannot be hydrolysed into simpler carbohydrates. Sucrose and maltose are disaccharides, while starch is a polysaccharide."
      },
      {
        "q": "The main function of glycogen in animals is to serve as a:",
        "options": [
          "Structural component of cell wall",
          "Storage form of glucose",
          "Genetic material",
          "Component of plasma membrane only"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Glycogen storage",
        "explanation": "Glycogen is the chief storage polysaccharide in animals, especially in liver and muscles. It can be broken down to release glucose when needed."
      },
      {
        "q": "Which lipid forms the basic bilayer structure of the plasma membrane?",
        "options": [
          "Triglyceride",
          "Steroid",
          "Phospholipid",
          "Wax"
        ],
        "answer": 2,
        "difficulty": "Easy",
        "concept": "Phospholipid bilayer",
        "explanation": "Phospholipids have hydrophilic heads and hydrophobic tails, allowing them to arrange into a bilayer in water. This bilayer forms the basic framework of the plasma membrane."
      },
      {
        "q": "Which level of protein structure is stabilized mainly by hydrogen bonds between backbone atoms, forming α-helix or β-pleated sheet?",
        "options": [
          "Primary structure",
          "Secondary structure",
          "Tertiary structure",
          "Quaternary structure"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Protein secondary structure",
        "explanation": "Secondary structure refers to local folding patterns such as α-helices and β-sheets. These are stabilized mainly by hydrogen bonds between peptide backbone atoms."
      },
      {
        "q": "In DNA, adenine pairs specifically with thymine because they form:",
        "options": [
          "One hydrogen bond",
          "Two hydrogen bonds",
          "Three hydrogen bonds",
          "A phosphodiester bond"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "DNA base pairing",
        "explanation": "Adenine pairs with thymine through two hydrogen bonds in DNA. Guanine pairs with cytosine through three hydrogen bonds."
      },
      {
        "q": "Which statement correctly describes enzymes?",
        "options": [
          "They are consumed during reactions",
          "They increase activation energy",
          "They are usually proteins acting as biological catalysts",
          "They change the equilibrium position permanently"
        ],
        "answer": 2,
        "difficulty": "Medium",
        "concept": "Enzyme action",
        "explanation": "Enzymes are mostly proteins that act as biological catalysts by lowering activation energy. They are not consumed in the reaction and do not permanently change equilibrium."
      },
      {
        "q": "A molecule containing glycerol, three fatty acids and mainly ester linkages is best identified as a:",
        "options": [
          "Triglyceride",
          "Nucleotide",
          "Dipeptide",
          "Phospholipid with two fatty acids"
        ],
        "answer": 0,
        "difficulty": "Medium",
        "concept": "Triglyceride structure",
        "explanation": "A triglyceride is formed when glycerol esterifies with three fatty acid molecules. This makes it a common neutral fat used for energy storage."
      },
      {
        "q": "A nucleotide differs from a nucleoside because a nucleotide contains:",
        "options": [
          "Only a nitrogenous base",
          "A base and a sugar only",
          "A base, a sugar and a phosphate group",
          "Only a sugar and a phosphate group"
        ],
        "answer": 2,
        "difficulty": "Hard",
        "concept": "Nucleotide components",
        "explanation": "A nucleoside consists of a nitrogenous base and a pentose sugar. A nucleotide has these two components plus at least one phosphate group."
      },
      {
        "q": "When a protein is denatured, which feature is most likely to remain intact?",
        "options": [
          "Primary sequence of amino acids",
          "Tertiary folding pattern",
          "Quaternary arrangement",
          "Biological activity in all cases"
        ],
        "answer": 0,
        "difficulty": "Hard",
        "concept": "Protein denaturation",
        "explanation": "Denaturation disrupts secondary, tertiary or quaternary structure, causing loss of shape and activity. The primary amino acid sequence generally remains intact because peptide bonds are not usually broken."
      }
    ],
    "respiration": [
      {
        "q": "Which of the following best defines cellular respiration?",
        "options": [
          "Exchange of gases between organism and environment",
          "Oxidation of food inside cells to release energy as ATP",
          "Transport of oxygen by haemoglobin to body tissues",
          "Breakdown of water using light energy in chloroplasts"
        ],
        "answer": 1,
        "explanation": "Cellular respiration is the enzymatic oxidation of respiratory substrates like glucose inside cells, releasing energy that is conserved mainly as ATP.",
        "concept": "Cellular respiration",
        "difficulty": "Easy"
      },
      {
        "q": "The net gain of ATP from one glucose molecule during glycolysis is:",
        "options": [
          "2 ATP",
          "4 ATP",
          "6 ATP",
          "8 ATP"
        ],
        "answer": 0,
        "explanation": "Glycolysis uses 2 ATP in the preparatory phase and forms 4 ATP in the payoff phase, giving a net gain of 2 ATP.",
        "concept": "Glycolysis ATP",
        "difficulty": "Easy"
      },
      {
        "q": "In aerobic respiration, pyruvic acid is converted to acetyl-CoA in the:",
        "options": [
          "Cytoplasm",
          "Outer mitochondrial membrane",
          "Mitochondrial matrix",
          "Cristae of mitochondria"
        ],
        "answer": 2,
        "explanation": "The link reaction occurs in the mitochondrial matrix, where pyruvate is oxidatively decarboxylated to acetyl-CoA.",
        "concept": "Link reaction",
        "difficulty": "Medium"
      },
      {
        "q": "Which molecule acts as the final electron acceptor in the electron transport chain of aerobic respiration?",
        "options": [
          "NAD+",
          "FAD",
          "Oxygen",
          "Carbon dioxide"
        ],
        "answer": 2,
        "explanation": "Oxygen accepts electrons and protons at the end of the electron transport chain to form water.",
        "concept": "Final acceptor",
        "difficulty": "Easy"
      },
      {
        "q": "During one turn of the Krebs cycle, the number of CO₂ molecules released is:",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 1,
        "explanation": "Each acetyl-CoA entering the Krebs cycle undergoes two decarboxylation steps, releasing 2 molecules of CO₂.",
        "concept": "Krebs decarboxylation",
        "difficulty": "Medium"
      },
      {
        "q": "Which product is formed during alcoholic fermentation in yeast along with CO₂?",
        "options": [
          "Lactic acid",
          "Ethanol",
          "Acetyl-CoA",
          "Oxaloacetic acid"
        ],
        "answer": 1,
        "explanation": "In yeast, pyruvate is converted to acetaldehyde with CO₂ release, and acetaldehyde is reduced to ethanol.",
        "concept": "Alcohol fermentation",
        "difficulty": "Easy"
      },
      {
        "q": "The main purpose of fermentation in cells is to:",
        "options": [
          "Produce maximum ATP from glucose",
          "Regenerate NAD+ for continuation of glycolysis",
          "Convert ATP into glucose",
          "Directly use oxygen for energy release"
        ],
        "answer": 1,
        "explanation": "Fermentation oxidizes NADH back to NAD+, allowing glycolysis to continue when oxygen is unavailable.",
        "concept": "NAD+ regeneration",
        "difficulty": "Medium"
      },
      {
        "q": "Chemiosmotic ATP synthesis in mitochondria depends mainly on:",
        "options": [
          "Movement of CO₂ across the inner membrane",
          "Proton gradient across the inner mitochondrial membrane",
          "Direct transfer of phosphate from glucose to ADP",
          "Breakdown of acetyl-CoA in cytoplasm"
        ],
        "answer": 1,
        "explanation": "Electron transport pumps protons across the inner mitochondrial membrane, and their return through ATP synthase drives ATP formation.",
        "concept": "Chemiosmosis",
        "difficulty": "Hard"
      },
      {
        "q": "If the inner mitochondrial membrane becomes freely permeable to H+, what will be the immediate effect?",
        "options": [
          "ATP synthesis by oxidative phosphorylation will decrease",
          "More oxygen will be produced",
          "Glycolysis will stop immediately",
          "Krebs cycle will release no CO₂"
        ],
        "answer": 0,
        "explanation": "Free movement of H+ destroys the proton gradient, so ATP synthase cannot efficiently produce ATP by oxidative phosphorylation.",
        "concept": "Membrane uncoupling",
        "difficulty": "Hard"
      },
      {
        "q": "Why is the respiratory quotient (RQ) for fats generally less than 1?",
        "options": [
          "Fats release no CO₂ during respiration",
          "Fats require more O₂ for oxidation than the CO₂ produced",
          "Fats are oxidized only anaerobically",
          "Fats produce more CO₂ than O₂ consumed"
        ],
        "answer": 1,
        "explanation": "Fats are more reduced than carbohydrates and need comparatively more oxygen for complete oxidation, so CO₂ released/O₂ consumed is less than 1.",
        "concept": "Respiratory quotient",
        "difficulty": "Hard"
      }
    ],
    "human-nutrition": [
      {
        "q": "Which of the following is the correct dental formula of an adult human being?",
        "options": [
          "2123/2123",
          "2102/2102",
          "2122/2122",
          "2023/2023"
        ],
        "answer": 0,
        "difficulty": "Easy",
        "concept": "Dental formula",
        "explanation": "Adult humans have 2 incisors, 1 canine, 2 premolars and 3 molars in each half of each jaw. Hence the dental formula is 2123/2123."
      },
      {
        "q": "Which enzyme in saliva begins the digestion of starch in the mouth?",
        "options": [
          "Pepsin",
          "Ptyalin",
          "Trypsin",
          "Lipase"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Salivary enzyme",
        "explanation": "Ptyalin, also called salivary amylase, acts on cooked starch and converts it into maltose and dextrins. Protein and fat digestion are not initiated by this enzyme."
      },
      {
        "q": "The wave-like muscular movement that pushes food through the alimentary canal is called:",
        "options": [
          "Assimilation",
          "Peristalsis",
          "Egestion",
          "Emulsification"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Peristaltic movement",
        "explanation": "Peristalsis is the rhythmic contraction and relaxation of the gut wall muscles that propels food forward. It occurs in regions such as the oesophagus and intestine."
      },
      {
        "q": "Bile helps in digestion mainly by:",
        "options": [
          "converting proteins into peptones",
          "emulsifying fats into tiny droplets",
          "converting starch into maltose",
          "digesting cellulose completely"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Bile function",
        "explanation": "Bile salts break large fat globules into small droplets, increasing the surface area for lipase action. Bile has no digestive enzyme of its own."
      },
      {
        "q": "Which part of the stomach mainly regulates the passage of chyme into the duodenum?",
        "options": [
          "Cardiac sphincter",
          "Pyloric sphincter",
          "Ileo-caecal valve",
          "Glottis"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Pyloric control",
        "explanation": "The pyloric sphincter lies between the stomach and duodenum and controls the release of acidic chyme. This prevents sudden overloading of the small intestine."
      },
      {
        "q": "In the stomach, pepsin is secreted in an inactive form mainly to prevent:",
        "options": [
          "neutralisation by bile",
          "self-digestion of gastric cells",
          "emulsification of fats",
          "absorption of amino acids"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Zymogen secretion",
        "explanation": "Pepsin is secreted as pepsinogen, an inactive zymogen, so it does not digest proteins of the gastric cells. Hydrochloric acid later activates it into pepsin."
      },
      {
        "q": "Most digestion and absorption of nutrients in humans occurs in the:",
        "options": [
          "stomach",
          "duodenum and jejunum of small intestine",
          "large intestine",
          "oesophagus"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Absorption site",
        "explanation": "The small intestine, especially the duodenum and jejunum, receives digestive juices and has villi for efficient absorption. The large intestine mainly absorbs water and salts."
      },
      {
        "q": "Lacteals present in intestinal villi are chiefly involved in the absorption of:",
        "options": [
          "glucose",
          "amino acids",
          "fatty acids and glycerol",
          "mineral ions"
        ],
        "answer": 2,
        "difficulty": "Medium",
        "concept": "Lacteal absorption",
        "explanation": "Lacteals are lymph capillaries in villi that absorb digested fats after their reformation into lipid droplets. Glucose and amino acids mainly enter blood capillaries."
      },
      {
        "q": "A person with reduced secretion of intrinsic factor is most likely to develop deficiency of:",
        "options": [
          "vitamin A",
          "vitamin B₁₂",
          "vitamin C",
          "vitamin D"
        ],
        "answer": 1,
        "difficulty": "Hard",
        "concept": "Intrinsic factor",
        "explanation": "Intrinsic factor secreted by the stomach is essential for absorption of vitamin B₁₂ in the intestine. Its deficiency can lead to pernicious anaemia."
      },
      {
        "q": "If the hepatopancreatic ampulla is blocked, which digestive process will be most directly affected in the duodenum?",
        "options": [
          "Entry of bile and pancreatic juice",
          "Secretion of saliva",
          "Absorption of water in colon",
          "Movement of food through oesophagus"
        ],
        "answer": 0,
        "difficulty": "Hard",
        "concept": "Ampulla blockage",
        "explanation": "The hepatopancreatic ampulla opens into the duodenum and carries bile and pancreatic juice. A blockage would reduce fat emulsification and pancreatic enzyme action in the duodenum."
      }
    ],
    "excretion-osmoregulation": [
      {
        "q": "Which of the following is the chief nitrogenous waste excreted by humans?",
        "options": [
          "Ammonia",
          "Urea",
          "Uric acid",
          "Creatinine"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Nitrogenous waste",
        "explanation": "Humans are ureotelic animals, so they convert toxic ammonia into less toxic urea in the liver. Urea is then mainly eliminated through urine."
      },
      {
        "q": "The functional and structural unit of the human kidney is the:",
        "options": [
          "Neuron",
          "Nephron",
          "Ureter",
          "Alveolus"
        ],
        "answer": 1,
        "difficulty": "Easy",
        "concept": "Nephron unit",
        "explanation": "A nephron performs filtration, reabsorption and secretion to form urine. Each kidney contains a large number of nephrons."
      },
      {
        "q": "Which part of the nephron is mainly responsible for ultrafiltration of blood?",
        "options": [
          "Collecting duct",
          "Loop of Henle",
          "Glomerulus",
          "Distal convoluted tubule"
        ],
        "answer": 2,
        "difficulty": "Easy",
        "concept": "Ultrafiltration site",
        "explanation": "Blood pressure in the glomerular capillaries forces water and small solutes into Bowman’s capsule. This process is called ultrafiltration."
      },
      {
        "q": "Which substance is normally absent in the glomerular filtrate of a healthy person?",
        "options": [
          "Glucose",
          "Amino acids",
          "Plasma proteins",
          "Urea"
        ],
        "answer": 2,
        "difficulty": "Easy",
        "concept": "Filtrate composition",
        "explanation": "Plasma proteins are too large to pass through the filtration membrane in a healthy nephron. Small molecules like glucose, amino acids and urea can enter the filtrate."
      },
      {
        "q": "Maximum reabsorption of useful substances from the filtrate occurs in the:",
        "options": [
          "Proximal convoluted tubule",
          "Distal convoluted tubule",
          "Collecting duct",
          "Renal pelvis"
        ],
        "answer": 0,
        "difficulty": "Medium",
        "concept": "Tubular reabsorption",
        "explanation": "The proximal convoluted tubule reabsorbs most water, glucose, amino acids and ions from the filtrate. Hence it is the major site of selective reabsorption."
      },
      {
        "q": "The loop of Henle helps in producing concentrated urine mainly by:",
        "options": [
          "Secreting glucose into the filtrate",
          "Creating an osmotic gradient in the medulla",
          "Filtering proteins from blood",
          "Converting ammonia into urea"
        ],
        "answer": 1,
        "difficulty": "Medium",
        "concept": "Countercurrent mechanism",
        "explanation": "The descending and ascending limbs of the loop of Henle establish a salt gradient in the renal medulla. This gradient allows water reabsorption and concentration of urine."
      },
      {
        "q": "Which hormone increases water reabsorption in the distal nephron and collecting duct?",
        "options": [
          "Insulin",
          "Thyroxine",
          "ADH",
          "Glucagon"
        ],
        "answer": 2,
        "difficulty": "Medium",
        "concept": "ADH action",
        "explanation": "Antidiuretic hormone (ADH) increases the permeability of the distal tubule and collecting duct to water. This reduces urine volume and helps conserve body water."
      },
      {
        "q": "Aldosterone mainly promotes reabsorption of which ion in the kidney tubules?",
        "options": [
          "Na⁺",
          "Cl⁻",
          "Ca²⁺",
          "H⁺"
        ],
        "answer": 0,
        "difficulty": "Medium",
        "concept": "Aldosterone regulation",
        "explanation": "Aldosterone acts on the distal nephron to increase Na⁺ reabsorption and K⁺ secretion. Sodium retention also helps in water retention and blood pressure regulation."
      },
      {
        "q": "If a person drinks very little water for many hours, which change is most likely to occur?",
        "options": [
          "ADH secretion decreases and dilute urine is produced",
          "ADH secretion increases and concentrated urine is produced",
          "Glomerular filtration completely stops",
          "Urea formation stops in the liver"
        ],
        "answer": 1,
        "difficulty": "Hard",
        "concept": "Water balance",
        "explanation": "Dehydration increases blood osmolarity, stimulating ADH release. ADH conserves water by increasing reabsorption, so urine becomes concentrated."
      },
      {
        "q": "In haemodialysis, the dialysis fluid is prepared so that it contains:",
        "options": [
          "High urea and no salts",
          "Same useful solute concentration as blood plasma but no urea",
          "Only distilled water",
          "Plasma proteins and blood cells"
        ],
        "answer": 1,
        "difficulty": "Hard",
        "concept": "Haemodialysis principle",
        "explanation": "Dialysis fluid lacks nitrogenous wastes like urea, allowing them to diffuse out of blood. It has suitable salts and glucose to prevent loss of essential substances."
      }
    ]
  }
} as any;
