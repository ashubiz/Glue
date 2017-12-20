import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-business-profile',
  templateUrl: 'business-profile.component.html'
})
export class BusinessProfileComponent implements OnInit {
  data: string;
  constructor(private router: Router) {
    this.data = `Description is the pattern of development that presents a word picture of a thing, a person, a situation, or a series of
              events. It is one of four rhetorical modes (also known as modes of discourse), along with exposition, argumentation,
              and narration. Each of the rhetorical modes is present in a variety of forms and each has its own purpose and
              conventions. The act of description may be related to that of definition. Description is also the fiction-writing
              mode for transmitting a mental image of the particulars of a story.

              Description is the pattern of development that presents a word picture of a thing, a person, a situation, or a series of
              events. It is one of four rhetorical modes (also known as modes of discourse), along with exposition, argumentation,
              and narration. Each of the rhetorical modes is present in a variety of forms and each has its own purpose and
              conventions. The act of description may be related to that of definition. Description is also the fiction-writing
              mode for transmitting a mental image of the particulars of a story`;
   }

  ngOnInit() {
  }

  edit() {
    this.router.navigate(['edit']);
  }

}
