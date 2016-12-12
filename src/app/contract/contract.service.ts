import { Injectable } from '@angular/core';
import {CONTRACT} from "./mock-contract";

@Injectable()
export class ContractService {

  constructor() { }

  getAllContract() {
    return CONTRACT
  }

}
