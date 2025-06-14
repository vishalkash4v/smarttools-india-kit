
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit, Save, X, Plus, Search, Hash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  color: string;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    tags: '',
    color: '#ffffff'
  });
  const { toast } = useToast();

  const colors = [
    '#ffffff', '#ffeb3b', '#ff9800', '#f44336',
    '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
    '#2196f3', '#03a9f4', '#00bcd4', '#009688',
    '#4caf50', '#8bc34a', '#cddc39'
  ];

  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = localStorage.getItem('keepNotes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem('keepNotes', JSON.stringify(notes));
  }, [notes]);

  const createNote = () => {
    if (!newNote.title.trim() && !newNote.content.trim()) {
      toast({
        title: "Cannot create empty note",
        variant: "destructive"
      });
      return;
    }

    const note: Note = {
      id: Date.now().toString(),
      title: newNote.title.trim() || 'Untitled',
      content: newNote.content.trim(),
      tags: newNote.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      color: newNote.color
    };

    setNotes([note, ...notes]);
    setNewNote({ title: '', content: '', tags: '', color: '#ffffff' });
    setIsCreating(false);
    toast({ title: "Note created successfully" });
  };

  const updateNote = (id: string, updates: Partial<Note>) => {
    setNotes(notes.map(note => 
      note.id === id 
        ? { ...note, ...updates, updatedAt: new Date().toISOString() }
        : note
    ));
    setEditingId(null);
    toast({ title: "Note updated successfully" });
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    toast({ title: "Note deleted" });
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Create New Note Button */}
      {!isCreating && (
        <Button onClick={() => setIsCreating(true)} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add New Note
        </Button>
      )}

      {/* Create Note Form */}
      {isCreating && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Create New Note</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsCreating(false);
                  setNewNote({ title: '', content: '', tags: '', color: '#ffffff' });
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Note title..."
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            />
            <Textarea
              placeholder="Write your note..."
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              rows={4}
            />
            <Input
              placeholder="Tags (comma separated)..."
              value={newNote.tags}
              onChange={(e) => setNewNote({ ...newNote, tags: e.target.value })}
            />
            <div className="space-y-2">
              <label className="text-sm font-medium">Color</label>
              <div className="flex gap-2 flex-wrap">
                {colors.map(color => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${
                      newNote.color === color ? 'border-primary' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setNewNote({ ...newNote, color })}
                  />
                ))}
              </div>
            </div>
            <Button onClick={createNote} className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Create Note
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Notes Grid */}
      {filteredNotes.length === 0 && !isCreating && (
        <div className="text-center py-8 text-muted-foreground">
          {searchTerm ? 'No notes found matching your search.' : 'No notes yet. Create your first note!'}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredNotes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            isEditing={editingId === note.id}
            onEdit={() => setEditingId(note.id)}
            onSave={(updates) => updateNote(note.id, updates)}
            onCancel={() => setEditingId(null)}
            onDelete={() => deleteNote(note.id)}
            formatDate={formatDate}
          />
        ))}
      </div>
    </div>
  );
};

interface NoteCardProps {
  note: Note;
  isEditing: boolean;
  onEdit: () => void;
  onSave: (updates: Partial<Note>) => void;
  onCancel: () => void;
  onDelete: () => void;
  formatDate: (date: string) => string;
}

const NoteCard: React.FC<NoteCardProps> = ({
  note,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  onDelete,
  formatDate
}) => {
  const [editData, setEditData] = useState({
    title: note.title,
    content: note.content,
    tags: note.tags.join(', ')
  });

  const handleSave = () => {
    onSave({
      title: editData.title.trim() || 'Untitled',
      content: editData.content.trim(),
      tags: editData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    });
  };

  if (isEditing) {
    return (
      <Card style={{ backgroundColor: note.color }}>
        <CardContent className="p-4 space-y-3">
          <Input
            value={editData.title}
            onChange={(e) => setEditData({ ...editData, title: e.target.value })}
            placeholder="Note title..."
          />
          <Textarea
            value={editData.content}
            onChange={(e) => setEditData({ ...editData, content: e.target.value })}
            placeholder="Write your note..."
            rows={3}
          />
          <Input
            value={editData.tags}
            onChange={(e) => setEditData({ ...editData, tags: e.target.value })}
            placeholder="Tags (comma separated)..."
          />
          <div className="flex gap-2">
            <Button onClick={handleSave} size="sm" className="flex-1">
              <Save className="h-3 w-3 mr-1" />
              Save
            </Button>
            <Button onClick={onCancel} variant="outline" size="sm" className="flex-1">
              <X className="h-3 w-3 mr-1" />
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      className="cursor-pointer hover:shadow-md transition-shadow"
      style={{ backgroundColor: note.color }}
    >
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg leading-tight">{note.title}</h3>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" onClick={onEdit} className="h-8 w-8">
                <Edit className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onDelete} className="h-8 w-8">
                <Trash2 className="h-3 w-3 text-destructive" />
              </Button>
            </div>
          </div>
          
          {note.content && (
            <p className="text-sm text-muted-foreground whitespace-pre-wrap line-clamp-4">
              {note.content}
            </p>
          )}
          
          {note.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {note.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Hash className="h-2 w-2 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          
          <div className="text-xs text-muted-foreground">
            {formatDate(note.updatedAt)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Notes;
