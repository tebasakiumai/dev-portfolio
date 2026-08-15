export type ProjectStatus = 'done' | 'wip'

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  status: ProjectStatus
  repoUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'student-calendar-app',
    title: '就活カレンダーアプリ',
    description:
      '大学生・就活生向けのデスクトップカレンダーアプリ。レイヤー管理、週次締切ダッシュボード、24時間タイムラインなど、締切管理に特化した機能を実装。',
    tech: ['Electron', 'React', 'TypeScript', 'electron-store'],
    status: 'done',
    repoUrl: 'https://github.com/tebasakiumai/student-calendar-app',
  },
]