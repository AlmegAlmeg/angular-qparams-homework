import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NamesService } from 'src/app/services/names.service';

@Component({
  selector: 'app-names-list',
  templateUrl: './names-list.component.html',
  styleUrls: ['./names-list.component.css']
})
export class NamesListComponent implements OnInit {
  namesArrFromService: string[]
  dataFromSearch: string
  errors: string
  constructor(private namesService: NamesService, private route:ActivatedRoute) { 
    this.namesArrFromService = this.namesService.namesArr
    this.errors = ''
  }

  ngOnInit(): void {
    //! remember! when getting the key from the data (object) you need to use [] to get it
    this.route.queryParams.subscribe(data=>{
      if(data['name']){
        this.dataFromSearch = data['name']
        this.namesArrFromService = this.namesService.namesArr.filter(name => name.includes(this.dataFromSearch))
        if(this.namesArrFromService.length == 0){
          this.namesArrFromService = this.namesService.namesArr
          this.errors = 'No name found, here is a list of all names'
        }
      }
    })
  }

}
