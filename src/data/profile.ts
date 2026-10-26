export interface SkillGroup {
  category: string
  items: string[]
}

export const profile = {
  name: 'tebasakiumai',
  role: '大学生 / アプリ開発',
  bio: [
    '大学生活の傍ら、独学でアプリ開発を学んでいます。',
  ],
  email: '非公開',
  githubUrl: 'https://github.com/tebasakiumai',
  skills: [
    {
      category: '言語',
      items: ['Python', 'C', 'TypeScript', 'JavaScript'],
    },
    {
      category: 'フレームワーク / ライブラリ',
      items: ['React', 'Electron', 'React Router'],
    },
    {
      category: 'ツール / 環境',
      items: ['Vite', 'Git', 'GitHub', 'VSCode'],
    },
    {
      category: 'ツール / AI',
      items: ['ChatGPT', 'Claud'],
    },
  ] satisfies SkillGroup[],
}