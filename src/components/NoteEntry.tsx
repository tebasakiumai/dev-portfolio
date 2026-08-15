import type { Note } from '../data/notes'

interface Props {
  note: Note
}

function NoteEntry({ note }: Props) {
  return (
    <article className="note-entry">
      <div className="note-entry-meta">
        <span className="note-hash mono">{note.hash}</span>
        <span className="note-date mono">{note.date}</span>
        <span className={`status-badge status-${note.status}`}>
          {note.status}
        </span>
      </div>

      <h3 className="note-title">{note.title}</h3>
      <p className="note-body">{note.body}</p>

      <ul className="note-tags">
        {note.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}

export default NoteEntry