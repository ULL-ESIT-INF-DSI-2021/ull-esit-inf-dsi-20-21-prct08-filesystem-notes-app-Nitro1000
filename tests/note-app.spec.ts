import 'mocha';
import {expect} from 'chai';
import {Note} from '../src/note';
import {NoteApp} from '../src/note-app';
import * as fs from 'fs';

describe('Test NoteApp', () => {
  let appNote = new NoteApp();
  it('Se puede crear una nueva nota', () => {
    appNote.addNote('Test', 'Nota_test', 'Nota de prueba', 'blue');
    expect(fs.existsSync('db/Test/Nota_test.json')).true;
  });

  it('Se puede listar las notas de un usuario', () => {
    appNote.addNote('Test', 'Nota_test2', 'Nota de prueba',
        'blue');

    let nota1 = new Note('Nota_test',
        'Nota de prueba modificada', 'blue');
    let nota2 = new Note('Nota_test2', 'Nota de prueba',
        'blue');
    expect(appNote.listNotes('Test')).to.be.eql([nota1, nota2]);
  });

  it('Se puede eliminar una nota', () => {
    appNote.removeNote('Test', 'Nota_test');
    expect(fs.existsSync('db/Test/Nota_test.json')).false;
  });
});
