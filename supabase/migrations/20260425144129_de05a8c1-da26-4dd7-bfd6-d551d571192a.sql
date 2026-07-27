-- PROFILES
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  email text,
  xp integer not null default 0,
  level integer not null default 1,
  current_streak integer not null default 0,
  longest_streak integer not null default 0,
  last_study_date date,
  onboarded boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "profiles_select_all" on public.profiles for select to authenticated using (true);
create policy "profiles_update_own" on public.profiles for update to authenticated using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles for insert to authenticated with check (auth.uid() = id);

-- timestamps trigger
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;
create trigger profiles_updated before update on public.profiles
  for each row execute function public.set_updated_at();

-- auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, display_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email,'@',1)));
  return new;
end; $$;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- CURRICULUM
create table public.subjects (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  code text not null unique,
  color text not null,
  icon text not null,
  sort_order int not null default 0
);
create table public.chapters (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid not null references public.subjects(id) on delete cascade,
  name text not null,
  sort_order int not null default 0
);
create table public.topics (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid not null references public.chapters(id) on delete cascade,
  name text not null,
  notes_md text,
  sort_order int not null default 0
);
create table public.questions (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.topics(id) on delete cascade,
  question text not null,
  options jsonb not null,
  correct_index int not null,
  explanation text,
  difficulty text not null default 'medium'
);
alter table public.subjects enable row level security;
alter table public.chapters enable row level security;
alter table public.topics enable row level security;
alter table public.questions enable row level security;
create policy "subjects_read" on public.subjects for select to authenticated using (true);
create policy "chapters_read" on public.chapters for select to authenticated using (true);
create policy "topics_read" on public.topics for select to authenticated using (true);
create policy "questions_read" on public.questions for select to authenticated using (true);

-- USER ACTIVITY
create table public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  topic_id uuid references public.topics(id) on delete set null,
  score int not null,
  total int not null,
  time_seconds int not null default 0,
  answers jsonb,
  created_at timestamptz not null default now()
);
alter table public.quiz_attempts enable row level security;
create policy "qa_own_all" on public.quiz_attempts for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create table public.study_tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  time_slot text,
  task_date date not null default current_date,
  completed boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
alter table public.study_tasks enable row level security;
create policy "st_own_all" on public.study_tasks for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create table public.mock_performance (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject_id uuid not null references public.subjects(id) on delete cascade,
  score int not null default 0,
  last_attempt_at timestamptz not null default now(),
  unique(user_id, subject_id)
);
alter table public.mock_performance enable row level security;
create policy "mp_own_all" on public.mock_performance for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create table public.ai_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  conversation_id uuid not null,
  role text not null check (role in ('user','assistant','system')),
  content text not null,
  created_at timestamptz not null default now()
);
alter table public.ai_messages enable row level security;
create policy "ai_own_all" on public.ai_messages for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create table public.planners (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade unique,
  plan_type text not null check (plan_type in ('standard','ai')),
  plan jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.planners enable row level security;
create policy "pl_own_all" on public.planners for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create trigger planners_updated before update on public.planners
  for each row execute function public.set_updated_at();