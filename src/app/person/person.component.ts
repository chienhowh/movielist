import { IPerson } from './../core/interfaces/movie.interface';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from './person.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { API, API_POSTER } from '../core/consts/global-constants.const';
import { ROUTING_PATH } from '../core/consts/routing-path.const';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @ViewChild('biography') biography: ElementRef;
  get ROUTING_PATH() {
    return ROUTING_PATH;

  }
  get API_POSTER() {
    return API_POSTER;
  }
  age?: number;
  personID?: string;
  person?: IPerson;
  poster1x = '';
  constructor(
    private personSvc: PersonService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.personID = this.route.snapshot.paramMap.get('id');
    if (this.personID) {
      this.getPersonByID(this.personID);
    }
  }

  getPersonByID(id: string) {
    const params = { append_to_response: 'movie_credits' }
    this.personSvc.getPersonByID(id, params).pipe(
      map(person => ({
        ...person, movie_credits: {
          crew: person.movie_credits.crew,
          cast: person.movie_credits.cast.sort((a, b) => b.release_date.localeCompare(a.release_date)).slice(0, 10)
        }
      })),
      tap(person => this.age = ((new Date()).getFullYear() - (new Date(person.birthday)).getFullYear()))
    ).subscribe(person => {
      this.person = person;
      this.poster1x = `${API.POSTER}w300_and_h450_bestv2/${person.profile_path}`;
      setTimeout(() => {
        this.setBiographyTruncate();
      }, 0);
    });
  }

  setBiographyTruncate() {
    const height = this.biography.nativeElement.offsetHeight
    if (height > 220) {
      this.renderer.addClass(this.biography.nativeElement,'truncate');
    }
  }

  readmore(){
    this.renderer.removeClass(this.biography.nativeElement,'truncate');
  }
}
