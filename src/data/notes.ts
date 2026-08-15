export interface Note {
  id: string
  hash: string
  date: string
  title: string
  body: string
  tags: string[]
  status: 'done' | 'wip'
}

export const notes: Note[] = [
  {
    id: 'electron-store-version',
    hash: 'a3f9c1',
    date: '2024-06-01',
    title: 'electron-storeはv8系に固定する',
    body: 'v9以降はESM専用になっており、CommonJS構成のプロジェクトでは動かない。package.jsonでバージョンを8.2.0に固定して解決した。',
    tags: ['Electron', 'trouble-shooting'],
    status: 'done',
  },
  {
    id: 'jsx-element-typecheck',
    hash: '7b2e04',
    date: '2024-05-20',
    title: 'JSX.Elementの戻り値でビルドが失敗する',
    body: '型チェックの厳格化により、JSX.Elementを戻り値の型に使うとビルド時にエラーになるケースがあった。React.ReactElementを明示的にimportして使うことで解消。',
    tags: ['TypeScript', 'React'],
    status: 'done',
  },
]