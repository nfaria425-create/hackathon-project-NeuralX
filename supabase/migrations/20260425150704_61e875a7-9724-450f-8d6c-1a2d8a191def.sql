-- Flashcards (per chapter)
CREATE TABLE public.flashcards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_id uuid NOT NULL REFERENCES public.chapters(id) ON DELETE CASCADE,
  front text NOT NULL,
  back text NOT NULL,
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.flashcards ENABLE ROW LEVEL SECURITY;
CREATE POLICY "flashcards_read" ON public.flashcards FOR SELECT TO authenticated USING (true);
CREATE INDEX idx_flashcards_chapter ON public.flashcards(chapter_id);

-- Mock tests (subject-wise or full-length)
CREATE TABLE public.mock_tests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  test_type text NOT NULL CHECK (test_type IN ('subject','full_length')),
  subject_id uuid REFERENCES public.subjects(id) ON DELETE SET NULL,
  duration_minutes int NOT NULL DEFAULT 60,
  total_questions int NOT NULL DEFAULT 0,
  difficulty text NOT NULL DEFAULT 'mixed',
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.mock_tests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "mock_tests_read" ON public.mock_tests FOR SELECT TO authenticated USING (true);

CREATE TABLE public.mock_test_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  mock_test_id uuid NOT NULL REFERENCES public.mock_tests(id) ON DELETE CASCADE,
  question_id uuid NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  sort_order int NOT NULL DEFAULT 0,
  UNIQUE(mock_test_id, question_id)
);
ALTER TABLE public.mock_test_questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "mock_test_questions_read" ON public.mock_test_questions FOR SELECT TO authenticated USING (true);
CREATE INDEX idx_mtq_test ON public.mock_test_questions(mock_test_id);

CREATE TABLE public.mock_test_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  mock_test_id uuid NOT NULL REFERENCES public.mock_tests(id) ON DELETE CASCADE,
  score int NOT NULL,
  total int NOT NULL,
  time_seconds int NOT NULL DEFAULT 0,
  answers jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.mock_test_attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "mta_own_all" ON public.mock_test_attempts FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE INDEX idx_mta_user ON public.mock_test_attempts(user_id);

-- Previous Year Papers
CREATE TABLE public.previous_year_papers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  year int NOT NULL,
  exam text NOT NULL DEFAULT 'CET',
  subject_id uuid REFERENCES public.subjects(id) ON DELETE SET NULL,
  title text NOT NULL,
  description text,
  paper_url text,
  answer_key_url text,
  total_questions int NOT NULL DEFAULT 0,
  duration_minutes int NOT NULL DEFAULT 180,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.previous_year_papers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "pyp_read" ON public.previous_year_papers FOR SELECT TO authenticated USING (true);

CREATE TABLE public.pyp_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pyp_id uuid NOT NULL REFERENCES public.previous_year_papers(id) ON DELETE CASCADE,
  question_id uuid NOT NULL REFERENCES public.questions(id) ON DELETE CASCADE,
  sort_order int NOT NULL DEFAULT 0,
  UNIQUE(pyp_id, question_id)
);
ALTER TABLE public.pyp_questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "pyp_questions_read" ON public.pyp_questions FOR SELECT TO authenticated USING (true);
CREATE INDEX idx_pypq_paper ON public.pyp_questions(pyp_id);