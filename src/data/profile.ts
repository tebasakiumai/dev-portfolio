export interface SkillGroup {
  category: string
  items: string[]
}

export const profile = {
  name: 'tebasakiumai',
  role: '大学生 / アプリ開発',
  bio: [
    '大学生活の傍ら、独学でアプリ開発を学んでいます。',
    'きっかけは「自分たちの就活をもっと楽にするツールが欲しい」という単純な動機でした。開発経験ゼロの状態から、概念を1つずつ理解しながら、実際に動くデスクトップアプリを完成させるところまで進めてきました。',
    'このサイト自体も、学んだ技術を記録しながら作った制作物のひとつです。',
  ],
  email: '非公開',
  githubUrl: 'https://github.com/tebasakiumai',
  skills: [
    {
      category: '言語',
      items: ['TypeScript', 'JavaScript'],
    },
    {
      category: 'フレームワーク / ライブラリ',
      items: ['React', 'Electron', 'React Router'],
    },
    {
      category: 'ツール / 環境',
      items: ['Vite', 'Git', 'GitHub', 'VSCode'],
    },
  ] satisfies SkillGroup[],
}