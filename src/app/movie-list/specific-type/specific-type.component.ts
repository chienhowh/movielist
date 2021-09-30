import { FormBuilder } from '@angular/forms';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-type',
  templateUrl: './specific-type.component.html',
  styleUrls: ['./specific-type.component.scss']
})
export class SpecificTypeComponent implements OnInit {
  type: string;
  validateForm = this.fb.group({

  });
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(map(params => params.type)).subscribe(t => this.type = t);
  }

}
