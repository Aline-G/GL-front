export class Sort {
  private sortOrder = 1;
  private collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base',
  });

  constructor() {
  }

  // tslint:disable-next-line:typedef
  public startSort(property: string, order: string, type = '') {
    if (order === 'desc') {
      this.sortOrder = -1;
    }

    // @ts-ignore
    return (a: any, b: any) => {
      if(property === 'state'){
        return this.sortDataState((a[property]), (b[property]));
      }
      else if (type === 'date') {
        return this.sortData(new Date(a[property]), new Date(b[property]));
      } else {
        return this.collator.compare(a[property], b[property]) * this.sortOrder;
      }
    };
  }

  private sortData(a: any, b: any): number {
    if (a < b) {
      return -1 * this.sortOrder;
    } else if (a > b) {
      return this.sortOrder;
    } else {
      return 0;
    }
  }

  private sortDataState(a: any, b: any): number {
    console.log(a);
    if (a === 'FINISHED' && b === 'SUSPENDED') {
      return -1 * this.sortOrder;
    }
    else if(a === 'FINISHED' && b === 'IN_PROGRESS'){
      return -1 * this.sortOrder;
    }
    else if(a === 'FINISHED' && b === 'INCOMING'){
      return -1 * this.sortOrder;
    }
    else if(a === 'SUSPENDED' && b === 'IN_PROGRESS'){
      return -1 * this.sortOrder;
    }
    else if(a === 'SUSPENDED' && b === 'INCOMING'){
      return -1 * this.sortOrder;
    }
    else if(a === 'IN_PROGRESS' && b === 'INCOMING'){
      return -1 * this.sortOrder;
    }
    if (b === 'FINISHED' && a === 'SUSPENDED') {
      return this.sortOrder;
    }
    else if(b === 'FINISHED' && a === 'IN_PROGRESS'){
      return this.sortOrder;
    }
    else if(b === 'FINISHED' && a === 'INCOMING'){
      return this.sortOrder;
    }
    else if(b === 'SUSPENDED' && a === 'IN_PROGRESS'){
      return this.sortOrder;
    }
    else if(b === 'SUSPENDED' && a === 'INCOMING'){
      return this.sortOrder;
    }
    else if(b === 'IN_PROGRESS' && a === 'INCOMING'){
      return this.sortOrder;
    } else if (a === 'VALIDATED' && b === 'WAITING') {
      return -1 * this.sortOrder;
    }
    else if (a === 'VALIDATED' && b === 'DRAFT') {
      return -1 * this.sortOrder;
    }
    else if (a === 'WAITING' && b === 'DRAFT') {
      return -1 * this.sortOrder;
    }
    else if(b === 'VALIDATED' && a === 'WAITING'){
      return this.sortOrder;
    }
    else if(b === 'VALIDATED' && a === 'DRAFT'){
      return this.sortOrder;
    }
    else if(b === 'WAITING' && a === 'DRAFT'){
      return this.sortOrder;
    } else {
      return 0;
    }
  }

}
