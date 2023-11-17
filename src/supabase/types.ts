export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      tasks: {
        Row: {
          created_at: string;
          description: string | null;
          done: boolean | null;
          id: number;
          title: string | null;
          userid: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          done?: boolean | null;
          id?: number;
          title?: string | null;
          userid: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          done?: boolean | null;
          id?: number;
          title?: string | null;
          userid?: string;
        };
        Relationships: [
          {
            foreignKeyName: "tasks_userid_fkey";
            columns: ["userid"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
