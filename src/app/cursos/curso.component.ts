import { Component, OnInit } from '@angular/core';
import { Curso} from './curso';
import { dataCursos } from './dataCursos';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursosComponent implements OnInit {
  constructor(private cursoService: CursoService) { }
  cursos: Array<Curso> = [];
  getCursos() {
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }
  ngOnInit() {
    this.getCursos();
  }

}
