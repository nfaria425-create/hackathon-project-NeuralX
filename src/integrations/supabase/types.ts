export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ai_messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          role: string
          user_id: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          role: string
          user_id: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      chapters: {
        Row: {
          id: string
          name: string
          sort_order: number
          subject_id: string
        }
        Insert: {
          id?: string
          name: string
          sort_order?: number
          subject_id: string
        }
        Update: {
          id?: string
          name?: string
          sort_order?: number
          subject_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chapters_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      flashcards: {
        Row: {
          back: string
          chapter_id: string
          created_at: string
          front: string
          id: string
          sort_order: number
        }
        Insert: {
          back: string
          chapter_id: string
          created_at?: string
          front: string
          id?: string
          sort_order?: number
        }
        Update: {
          back?: string
          chapter_id?: string
          created_at?: string
          front?: string
          id?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "flashcards_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
        ]
      }
      mock_performance: {
        Row: {
          id: string
          last_attempt_at: string
          score: number
          subject_id: string
          user_id: string
        }
        Insert: {
          id?: string
          last_attempt_at?: string
          score?: number
          subject_id: string
          user_id: string
        }
        Update: {
          id?: string
          last_attempt_at?: string
          score?: number
          subject_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mock_performance_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      mock_test_attempts: {
        Row: {
          answers: Json | null
          created_at: string
          id: string
          mock_test_id: string
          score: number
          time_seconds: number
          total: number
          user_id: string
        }
        Insert: {
          answers?: Json | null
          created_at?: string
          id?: string
          mock_test_id: string
          score: number
          time_seconds?: number
          total: number
          user_id: string
        }
        Update: {
          answers?: Json | null
          created_at?: string
          id?: string
          mock_test_id?: string
          score?: number
          time_seconds?: number
          total?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mock_test_attempts_mock_test_id_fkey"
            columns: ["mock_test_id"]
            isOneToOne: false
            referencedRelation: "mock_tests"
            referencedColumns: ["id"]
          },
        ]
      }
      mock_test_questions: {
        Row: {
          id: string
          mock_test_id: string
          question_id: string
          sort_order: number
        }
        Insert: {
          id?: string
          mock_test_id: string
          question_id: string
          sort_order?: number
        }
        Update: {
          id?: string
          mock_test_id?: string
          question_id?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "mock_test_questions_mock_test_id_fkey"
            columns: ["mock_test_id"]
            isOneToOne: false
            referencedRelation: "mock_tests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mock_test_questions_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      mock_tests: {
        Row: {
          created_at: string
          description: string | null
          difficulty: string
          duration_minutes: number
          id: string
          sort_order: number
          subject_id: string | null
          test_type: string
          title: string
          total_questions: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          difficulty?: string
          duration_minutes?: number
          id?: string
          sort_order?: number
          subject_id?: string | null
          test_type: string
          title: string
          total_questions?: number
        }
        Update: {
          created_at?: string
          description?: string | null
          difficulty?: string
          duration_minutes?: number
          id?: string
          sort_order?: number
          subject_id?: string | null
          test_type?: string
          title?: string
          total_questions?: number
        }
        Relationships: [
          {
            foreignKeyName: "mock_tests_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      planners: {
        Row: {
          created_at: string
          id: string
          plan: Json
          plan_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          plan: Json
          plan_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          plan?: Json
          plan_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      previous_year_papers: {
        Row: {
          answer_key_url: string | null
          created_at: string
          description: string | null
          duration_minutes: number
          exam: string
          id: string
          paper_url: string | null
          subject_id: string | null
          title: string
          total_questions: number
          year: number
        }
        Insert: {
          answer_key_url?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number
          exam?: string
          id?: string
          paper_url?: string | null
          subject_id?: string | null
          title: string
          total_questions?: number
          year: number
        }
        Update: {
          answer_key_url?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number
          exam?: string
          id?: string
          paper_url?: string | null
          subject_id?: string | null
          title?: string
          total_questions?: number
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "previous_year_papers_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          current_streak: number
          display_name: string | null
          email: string | null
          id: string
          last_study_date: string | null
          level: number
          longest_streak: number
          onboarded: boolean
          updated_at: string
          xp: number
        }
        Insert: {
          created_at?: string
          current_streak?: number
          display_name?: string | null
          email?: string | null
          id: string
          last_study_date?: string | null
          level?: number
          longest_streak?: number
          onboarded?: boolean
          updated_at?: string
          xp?: number
        }
        Update: {
          created_at?: string
          current_streak?: number
          display_name?: string | null
          email?: string | null
          id?: string
          last_study_date?: string | null
          level?: number
          longest_streak?: number
          onboarded?: boolean
          updated_at?: string
          xp?: number
        }
        Relationships: []
      }
      pyp_questions: {
        Row: {
          id: string
          pyp_id: string
          question_id: string
          sort_order: number
        }
        Insert: {
          id?: string
          pyp_id: string
          question_id: string
          sort_order?: number
        }
        Update: {
          id?: string
          pyp_id?: string
          question_id?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "pyp_questions_pyp_id_fkey"
            columns: ["pyp_id"]
            isOneToOne: false
            referencedRelation: "previous_year_papers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pyp_questions_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      questions: {
        Row: {
          chapter_id: string | null
          correct_index: number
          difficulty: string
          explanation: string | null
          id: string
          options: Json
          question: string
          topic_id: string
        }
        Insert: {
          chapter_id?: string | null
          correct_index: number
          difficulty?: string
          explanation?: string | null
          id?: string
          options: Json
          question: string
          topic_id: string
        }
        Update: {
          chapter_id?: string | null
          correct_index?: number
          difficulty?: string
          explanation?: string | null
          id?: string
          options?: Json
          question?: string
          topic_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "questions_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_attempts: {
        Row: {
          answers: Json | null
          created_at: string
          id: string
          score: number
          time_seconds: number
          topic_id: string | null
          total: number
          user_id: string
        }
        Insert: {
          answers?: Json | null
          created_at?: string
          id?: string
          score: number
          time_seconds?: number
          topic_id?: string | null
          total: number
          user_id: string
        }
        Update: {
          answers?: Json | null
          created_at?: string
          id?: string
          score?: number
          time_seconds?: number
          topic_id?: string | null
          total?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "quiz_attempts_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      study_tasks: {
        Row: {
          completed: boolean
          created_at: string
          id: string
          sort_order: number
          task_date: string
          time_slot: string | null
          title: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          created_at?: string
          id?: string
          sort_order?: number
          task_date?: string
          time_slot?: string | null
          title: string
          user_id: string
        }
        Update: {
          completed?: boolean
          created_at?: string
          id?: string
          sort_order?: number
          task_date?: string
          time_slot?: string | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      subjects: {
        Row: {
          code: string
          color: string
          icon: string
          id: string
          name: string
          sort_order: number
        }
        Insert: {
          code: string
          color: string
          icon: string
          id?: string
          name: string
          sort_order?: number
        }
        Update: {
          code?: string
          color?: string
          icon?: string
          id?: string
          name?: string
          sort_order?: number
        }
        Relationships: []
      }
      topics: {
        Row: {
          chapter_id: string
          id: string
          name: string
          notes_md: string | null
          sort_order: number
        }
        Insert: {
          chapter_id: string
          id?: string
          name: string
          notes_md?: string | null
          sort_order?: number
        }
        Update: {
          chapter_id?: string
          id?: string
          name?: string
          notes_md?: string | null
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "topics_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "chapters"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
