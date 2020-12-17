export class DefaultTableValue implements ITableSetting {
  enabledSerialNo = false;
  enabledCheckbox = true;
  enabledPagination = true;
  enabledCellClick = false;
  enabledColumnFilter = false;
  pageSize = 10;
  checkboxCallbackFn = false;
  enabledPdfDownload = false;
  enabledExcelDownload = false;
  enabledPrint = false;
  enabledTotal = false;
  totalTitle = 'Total';
  enabledServerSitePaggination = false;
  addNewButtonText = 'Add New';
  hasRowOperation = false;
  hasBulkOperation = false;
  constructor(tableSetting?: ITableSetting){
    if (tableSetting){
      const { enabledSerialNo, enabledCheckbox , enabledPagination , enabledCellClick , enabledColumnFilter,
        pageSize, checkboxCallbackFn, enabledPdfDownload, enabledExcelDownload , enabledPrint, enabledTotal,
        totalTitle, enabledServerSitePaggination, addNewButtonText , hasRowOperation, hasBulkOperation} = tableSetting;

      this.enabledSerialNo = enabledSerialNo || false;
      this.enabledCheckbox = enabledCheckbox && enabledCheckbox;
      this.enabledPagination = enabledPagination && enabledPagination;
      this.enabledCellClick = enabledCellClick && enabledCellClick;
      this.enabledColumnFilter = enabledColumnFilter && enabledColumnFilter;
      this.pageSize = pageSize && pageSize;
      this.checkboxCallbackFn = checkboxCallbackFn && checkboxCallbackFn;
      this.enabledPdfDownload = enabledPdfDownload && enabledPdfDownload;
      this.enabledExcelDownload = enabledExcelDownload && enabledExcelDownload;
      this.enabledPrint = enabledPrint && enabledPrint;
      this.enabledTotal = enabledTotal && enabledTotal;
      this.totalTitle = totalTitle && totalTitle;
      this.enabledServerSitePaggination = enabledServerSitePaggination && enabledServerSitePaggination;
      this.addNewButtonText = addNewButtonText && addNewButtonText;
      this.hasRowOperation = hasRowOperation && hasRowOperation;
      this.hasBulkOperation = hasBulkOperation && hasBulkOperation;
    }
    
  }
}
export interface ITableSetting {
    enabledSerialNo?: boolean | false;
    tableColDef?: IColDef[];
    enabledCheckbox?: boolean | true;
    enabledPagination?: boolean | true;
    enabledCellClick?: boolean | false;
    enabledColumnFilter?: boolean | false;
    pageSize?: number | 10;
    checkboxCallbackFn?: boolean | false;
    enabledPdfDownload?: boolean | false;
    enabledExcelDownload?: boolean | false;
    enabledPrint?: boolean | false;
    enabledTotal?: boolean | false;
    totalTitle?: string | 'Total';
    enabledServerSitePaggination?: boolean | false;
    addNewButtonText?: string | 'Add New';
    addNewCallBackFn?: () => void;
    hasRowOperation?: boolean | false;
    hasBulkOperation?: boolean | false;
    bulkOperations?: IOperation[];
    rowOperations?: IOperation[];
    //  tableID?: string | 'P-table-001';
    // tableClass?: string | 'table table-border';
    // tableName?: string | 'p-table-name';
    // columnNameSetAsClass?: boolean | null;
    // enabledColumnSetting?: boolean | false;
    // enabledReordering?: boolean | false;
    // tableHeaderVisibility?: boolean | true;
    // tableFooterVisibility?: boolean|true;
    // pTableStyle?: ptableStyle;
    // enabledCustomReflow?: boolean | false;
    // enabledReflow?: boolean | false;
    // enabledAutoScrolled?: boolean | false;
    // enabledEditDeleteBtn?: boolean | false;
    // enabledEditBtn?: boolean | false;
    // enabledDeleteBtn?: boolean | false;
    // enabledRecordCreateBtn?: boolean | false;
    // enabledRadioBtn?: boolean | false;
    // enabledDataLength?: boolean | false;
    // enabledColumnResize?: boolean | false;
    // enabledStaySelectedPage?: boolean | false;
    // displayPaggingSize?: number | 10;
    // checkboxColumnHeader?: boolean | string | 'Select';
    // radioBtnColumnHeader?: string | 'Select';
    // tableRowIDInternalName?: string | 'Id';
    // disabledTableReset?: boolean | false;
    // enabledSearch?: boolean | true;
  }

export interface IOperation{
    name: string;
    icon: string;
    callBackFn: () => void;
}
export interface IColDef {
    title: string | '';
    key: string;
    className?: string;
    sort: boolean | false;
    filter: boolean | false;
    type?: string | 'string';
    okBtnTxt?: string | 'Apply';
    cancelBtnTxt?: string | 'Cancel';
    visible: boolean | true;
    alwaysVisible?: boolean | false;
    innerBtnIcon?: string| '';

    // displayType?: string;
    // onClick?: string | '';
    // btnTitle?: string | '';
    // showTotal?: boolean | false;
    // width?: string | '';
  }

// export interface PtableStyle {
//     tableOverflow?: boolean | false;
//     tableOverflowX?: boolean | false;
//     tableOverflowY?: boolean | false;
//     overflowContentWidth?: string | '';
//     overflowContentHeight?: string | null;
//   }
