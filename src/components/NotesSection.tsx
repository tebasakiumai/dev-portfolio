import { notes } from '../data/notes'
import NoteEntry from './NoteEntry'

function NotesSection() {
  return (
    <section className="notes-section">
      <p className="mono section-eyebrow">$ git log --oneline</p>
      <h2>技術記録</h2>

      <div className="note-log">
        {notes.map((note) => (
          <NoteEntry key={note.id} note={note} />
        ))}
      </div>
    </section>
  )
}

export default NotesSection