
-- Add chapter_id to questions for direct chapter-level quiz queries
ALTER TABLE public.questions ADD COLUMN IF NOT EXISTS chapter_id uuid;

-- Backfill chapter_id from existing topic relations
UPDATE public.questions q
SET chapter_id = t.chapter_id
FROM public.topics t
WHERE q.topic_id = t.id AND q.chapter_id IS NULL;

CREATE INDEX IF NOT EXISTS idx_questions_chapter ON public.questions(chapter_id);
CREATE INDEX IF NOT EXISTS idx_questions_topic ON public.questions(topic_id);
