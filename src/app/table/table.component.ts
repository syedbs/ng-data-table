import { Component, OnInit } from '@angular/core';
interface DataItem {
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent  {

  searchValue = '';
  visible = false;
  listOfData: DataItem[] = [
    {
      name: 'John Brownsfsd',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Greendf',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Blacksf',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    },
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Greensfsd',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joesd Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jimds Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    },
    {
      name: 'Johnsd Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jimds Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joedsds Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jimsd Redsd',
      age: 32,
      address: 'London No. 2 Lake Park'
    },
    {
      name: 'Johnsd Brownsd',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jimsd Greends',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Josde Blacksd',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jimds Redsd',
      age: 32,
      address: 'London No. 2 Lake Park'
    },
    {
      name: 'Johnsd Brownsd',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jimds Greensd',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jimsd Redsd',
      age: 32,
      address: 'London No. 2 Lake Park'
    },
    {
      name: 'Johnsd Brownsd',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joesd Blacksd',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jimsd Redsd',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ];
  listOfNameShowData = [];
  listOfNameMasterShowData = [];
  listOfDisplayData = [...this.listOfData];
  rightBottom = 'bottomRight';
  isActive = (key): boolean => {
    return this.activeKeys[key] ? this.activeKeys[key].active : false;
  }
  activeKey: string;
  activeKeys: any = {} // item: {search: '', active: false,reset:false}

  reset(): void {
    this.visible = false;
    this.searchValue = '';
    // this.activeKeys = {};
    this.activeKeys[this.activeKey].search = '';
    this.activeKeys[this.activeKey].active = false;
    this.activeKeys[this.activeKey].reset = true;
    this.search();
    this.listOfDisplayData = this.listOfData;
  }

  search(): void {
    this.visible = false;
    const cloneListOfNameShowData = [...this.listOfNameShowData]
    // this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.name.indexOf(this.searchValue) !== -1);
    this.listOfDisplayData = this.fnCustomFilterFromMasterArray(this.listOfDisplayData, this.activeKey,
    cloneListOfNameShowData.filter((rec: any) => rec.checked == true)) || [];
    this.activeKeys[this.activeKey].active = true;
  }
  fnFindUniqueColumnWithCheckedFlag(objectSet: any[], findKey: any, ): any[] {
    // tslint:disable-next-line: one-variable-per-declaration
    let o = {}, i, l = objectSet.length, r = [];
    for (i = 0; i < l; i++) { o[objectSet[i][findKey]] = objectSet[i][findKey]; }
    // tslint:disable-next-line: forin
    for (i in o) { r.push({ checked: true, data: o[i] }); }
    return r;
  }

  fnCustomFilterFromMasterArray(masterObject: any[], findKey: any, data: any[]): any[] {
    // tslint:disable-next-line: one-variable-per-declaration
    let o = {}, i , outer: any, l = masterObject.length, filteredData: any = [];
    for (outer = 0; outer < data.length; outer++) {
      const filterMasterData = masterObject.filter((record: any) => record['' + findKey + ''] == data[outer].data) || [];
      filteredData = filteredData.concat(filterMasterData);
    }
    // console.log(filteredData)
    return filteredData;
  }

  tableNameClick(event, name): void {
    if (event === true){
      const data = this.fnFindUniqueColumnWithCheckedFlag(this.listOfDisplayData, name);
      this.listOfNameShowData = data;
      this.listOfNameMasterShowData = data;
      this.activeKey = name;
      // tslint:disable-next-line: no-unused-expression
      !this.activeKeys[name] && (this.activeKeys[name] = {search: '', active: false, reset: false});
    }else{
      // tslint:disable-next-line: no-unused-expression
      this.activeKeys[this.activeKey].reset && (this.activeKeys[this.activeKey].search = '');
      // tslint:disable-next-line: no-unused-expression
      !this.visible && (this.searchValue = '');
      this.activeKey = null;
    }
  }

  fnFilterPTableColumn(arg: string): void {
    this.activeKeys[this.activeKey].search = arg;

    if (arg.trim() !== '') {
      this.listOfNameShowData = this.listOfNameMasterShowData.filter((rec: any) =>
       { if ((rec.data || '').toString().toLowerCase()
       .includes((arg || '').toLowerCase())) { return true; } else { return false; } }) || [];
    } else {
      this.listOfNameShowData = this.listOfNameMasterShowData;
    }

  }

}
