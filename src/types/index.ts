export interface User {
  id: string;
  email: string;
  username: string;
  reputation: number;
  certifications: string[];
  created_at: string;
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'investigating' | 'resolved';
  created_by: string;
  created_at: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  content: string;
  created_at: string;
}