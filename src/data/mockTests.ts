// MHT CET Mock Test configuration & question builder
// Dynamic — reads from existing quizBank + library so new mocks just need
// a new entry in the MOCK_TESTS array.
import { library } from "./library";
import { quizBank, type QuizQuestion, type SubjectCode } from "./quizzes";

export type Stream = "PCM" | "PCB";

export type MockTestConfig = {
  id: string;
  title: string;
  stream: Stream;
  difficulty: "Easy" | "Medium" | "Hard";
  durationMin: number; // CBT duration
  seed: number;
};

export type MockQuestion = QuizQuestion & {
  subjectCode: SubjectCode;
  subjectName: string;
  chapterSlug: string;
  chapterName: string;
  marks: number;
};

// Official MHT CET pattern (per subject, per test)
const PATTERN: Record<Stream, { code: SubjectCode; target: number; marks: number }[]> = {
  PCM: [
    { code: "P", target: 50, marks: 1 },
    { code: "C", target: 50, marks: 1 },
    { code: "M", target: 50, marks: 2 },
  ],
  PCB: [
    { code: "B", target: 50, marks: 2 },
    { code: "P", target: 50, marks: 1 },
    { code: "C", target: 50, marks: 1 },
  ],
};

function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const MOCK_TESTS: MockTestConfig[] = [
  { id: "pcm-1", title: "PCM Mock Test 1", stream: "PCM", difficulty: "Easy",   durationMin: 180, seed: 101 },
  { id: "pcm-2", title: "PCM Mock Test 2", stream: "PCM", difficulty: "Medium", durationMin: 180, seed: 202 },
  { id: "pcm-3", title: "PCM Mock Test 3", stream: "PCM", difficulty: "Medium", durationMin: 180, seed: 303 },
  { id: "pcm-4", title: "PCM Mock Test 4", stream: "PCM", difficulty: "Hard",   durationMin: 180, seed: 404 },
  { id: "pcm-5", title: "PCM Mock Test 5", stream: "PCM", difficulty: "Hard",   durationMin: 180, seed: 505 },
  { id: "pcb-1", title: "PCB Mock Test 1", stream: "PCB", difficulty: "Easy",   durationMin: 180, seed: 611 },
  { id: "pcb-2", title: "PCB Mock Test 2", stream: "PCB", difficulty: "Medium", durationMin: 180, seed: 722 },
  { id: "pcb-3", title: "PCB Mock Test 3", stream: "PCB", difficulty: "Medium", durationMin: 180, seed: 833 },
  { id: "pcb-4", title: "PCB Mock Test 4", stream: "PCB", difficulty: "Hard",   durationMin: 180, seed: 944 },
  { id: "pcb-5", title: "PCB Mock Test 5", stream: "PCB", difficulty: "Hard",   durationMin: 180, seed: 1055 },
];

export function getMockTest(id: string) {
  return MOCK_TESTS.find((m) => m.id === id);
}

// Build the ordered question list for a given mock test
export function buildMockQuestions(cfg: MockTestConfig): {
  questions: MockQuestion[];
  subjects: { code: SubjectCode; name: string; start: number; count: number; marks: number }[];
  totalMarks: number;
} {
  const questions: MockQuestion[] = [];
  const subjects: { code: SubjectCode; name: string; start: number; count: number; marks: number }[] = [];
  let totalMarks = 0;

  for (const p of PATTERN[cfg.stream]) {
    const subj = library.find((s) => s.code === p.code);
    if (!subj) continue;
    // Pool all questions across chapters for the subject
    const pool: MockQuestion[] = [];
    subj.chapters.forEach((ch) => {
      const bank = quizBank[p.code]?.[ch.slug] ?? [];
      bank.forEach((q) =>
        pool.push({
          ...q,
          subjectCode: p.code,
          subjectName: subj.name,
          chapterSlug: ch.slug,
          chapterName: ch.name,
          marks: p.marks,
        }),
      );
    });
    const shuffled = shuffle(pool, cfg.seed + p.code.charCodeAt(0));
    const picked: MockQuestion[] = [];
    if (shuffled.length > 0) {
      for (let i = 0; i < p.target; i++) picked.push(shuffled[i % shuffled.length]);
    }
    const start = questions.length;
    subjects.push({ code: p.code, name: subj.name, start, count: picked.length, marks: p.marks });
    totalMarks += picked.length * p.marks;
    questions.push(...picked);
  }
  return { questions, subjects, totalMarks };
}
