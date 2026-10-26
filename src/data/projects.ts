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
    id: 'keiba-predictor',
    title: '競馬予測モデル',
    description:
      'JRA(中央競馬)のレース結果を収集し、LightGBM(LambdaRank)でレース内の着順をランキング予測するWebアプリ。スクレイピングから特徴量設計、モデル学習、フロントエンド表示、GitHub Actionsによる週次の自動バッチ処理までを一貫して構築。騎手・調教師の勝率は過去レースのデータのみで計算し、データリークを防止している。',
    tech: [
      'Python',
      'LightGBM',
      'scikit-learn',
      'SQLite',
      'React',
      'TypeScript',
      'Vite',
      'GitHub Actions',
    ],
    status: 'wip',
    repoUrl: 'https://github.com/tebasakiumai/keiba-predictor',
    demoUrl: 'https://tebasakiumai.github.io/keiba-predictor/',
  },
  {
    id: 'student-calendar-app',
    title: '就活カレンダーアプリ',
    description:
      '大学生・就活生向けのデスクトップカレンダーアプリ。レイヤー管理、週次締切ダッシュボード、24時間タイムラインなど、締切管理に特化した機能を実装。',
    tech: ['Electron', 'React', 'TypeScript', 'electron-store'],
    status: 'wip',
    repoUrl: 'https://github.com/tebasakiumai/student-calendar-app',
  },
]