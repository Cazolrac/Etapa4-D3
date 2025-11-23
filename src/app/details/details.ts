import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { PrerenderFallback } from '@angular/ssr';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  id: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }
}
export const prerender = false;
