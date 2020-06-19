import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';

import { DisplayGrid, GridsterComponent, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType, GridsterComponentInterface }
  from 'angular-gridster2';

@Component({
  selector: 'app-gridsample',
  templateUrl: './gridsample.component.html',
  styleUrls: ['./gridsample.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GridsampleComponent implements OnInit, AfterViewInit, AfterContentInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  gridsterHeight: number = 500;
  gridSterDefaultRows = 1;
  gridSterDefaultColumns = 6;
  @ViewChild('gridsterComponent') public gridsterComponent: ElementRef;
  // dashboardElements = [
  //   { cols: 1, rows: 1, y: 0, x: 0, label: "Card1", dragEnabled: true, resizeEnabled: true, elementHtml: "<div> Card 1 contents</div>" },
  //   { cols: 1, rows: 1, y: 0, x: 1, label: "Card1", dragEnabled: true, resizeEnabled: true, elementHtml: "<div> Card 2 contents</div>" },
  //   { cols: 1, rows: 1, y: 0, x: 2, label: "Card1", dragEnabled: true, resizeEnabled: true, elementHtml: "<div> Card 3 contents</div>" },
  //   { cols: 1, rows: 1, y: 0, x: 3, label: "Card1", dragEnabled: true, resizeEnabled: true, elementHtml: "<div> Card 4 contents</div>" },
  //   { cols: 1, rows: 1, y: 0, x: 4, label: "Card1", dragEnabled: true, resizeEnabled: true, elementHtml: "<div> Card 5 contents</div>" },
  //   { cols: 1, rows: 1, y: 0, x: 5, label: "Card1", dragEnabled: true, resizeEnabled: true, elementHtml: "<div> Card 6 contents</div>" },


  //   { cols: 1, rows: 1, y: 1, x: 0, label: "Card1", dragEnabled: true, resizeEnabled: true, elementHtml: "<div> Card 7 contents</div>" },
  //   { cols: 1, rows: 1, y: 1, x: 1, label: "Card1", dragEnabled: true, resizeEnabled: true, elementHtml: "<div> Card 8 contents</div>" },
  //   { cols: 1, rows: 1, y: 1, x: 2, label: "Card1", dragEnabled: true, resizeEnabled: true, elementHtml: "<div> Card 9 contents</div>" },
  //   { cols: 1, rows: 1, y: 1, x: 3, label: "Card1", dragEnabled: true, resizeEnabled: true, elementHtml: "<div> Card 10 contents</div>" },
  //   { cols: 1, rows: 1, y: 1, x: 4, label: "Card1", dragEnabled: true, resizeEnabled: true, elementHtml: "<div> Card 11 contents</div>" },
  //   { cols: 1, rows: 1, y: 1, x: 5, label: "Card1", dragEnabled: true, resizeEnabled: true, elementHtml: "<div> Card 12 contents</div>" },
  //   // { cols: 2, rows: 2, y: 0, x: 2, hasContent: true, dragEnabled: true, resizeEnabled: true },
  //   // { cols: 1, rows: 1, y: 0, x: 1, dragEnabled: true, resizeEnabled: true },
  //   // { cols: 1, rows: 1, y: 2, x: 5, dragEnabled: true, resizeEnabled: true },
  //   // { cols: 1, rows: 1, y: 1, x: 0, dragEnabled: true, resizeEnabled: true },
  //   // { cols: 1, rows: 1, y: 1, x: 0, dragEnabled: true, resizeEnabled: true },
  //   // { cols: 2, rows: 2, y: 3, x: 5, minItemRows: 2, minItemCols: 2, label: 'Min rows & cols = 2', dragEnabled: true, resizeEnabled: true },
  //   // { cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, label: 'Max rows & cols = 2', dragEnabled: true, resizeEnabled: true },
  //   // { cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Enabled' },
  //   // { cols: 1, rows: 1, y: 2, x: 4, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Disabled' },
  //   // { cols: 1, rows: 1, y: 2, x: 6 }
  // ];

  dashboardElements = [];
  gristerBackground = "grey";
  static eventStart(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    console.info('eventStart', item, itemComponent, event);
  }

  static eventStop(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    console.info('eventStop', item, itemComponent, event);
  }

  static overlapEvent(source: GridsterItem, target: GridsterItem, grid: GridsterComponent) {
    console.log('overlap', source, target, grid);
  }
  getGridsterHeight() {
    return this.gridsterHeight + "px";
  }

  ngAfterViewInit() {

    // this.gridSterDefaultRows = this.gridsterComponent["rows"];
    // this.gridSterDefaultColumns = this.gridsterComponent["columns"];
  }


  ngAfterContentInit(): void {
    //debugger;
    var gridsterComponentWidth = this.gridsterComponent["curWidth"];
    var gridsterComponentHeight = this.gridsterComponent["curHeight"];
    this.gridsterHeight = 330;
    var totalSpace = gridsterComponentWidth * gridsterComponentHeight;
    console.log("Total Space " + totalSpace);
    var itemSize = 175 * 150;
    console.log("Item size " + itemSize);

    for (let i = 0; i < 6; i++) {
      let newItem = {
        x: i, y: 0, rows: 1, cols: 1, label: "newlabel" + i, dragEnabled: true,
        resizeEnabled: true, elementHtml: "<div style='vertical-align: middle;'> new Card  contents" + i + "</div>"
      };
      this.dashboardElements.push(newItem);
    }
  }

  gridsampleInitCallBack(gridster: GridsterComponentInterface) {
    // debugger;
    // alert("init call back called");

  }
  getGristerNextPossiblePosition(newItem: GridsterItem) {

    return true;
  }
  itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
    let gridSterCurrentRows = itemComponent.gridster["rows"];
    let gridSterCurrentColumns = itemComponent.gridster["columns"];
    // debugger;
    // if ((this.gridSterDefaultRows == gridSterCurrentRows) && (this.gridSterDefaultColumns == gridSterCurrentColumns)) {
    //   // if (this.gridSterDefaultRows <= gridSterCurrentRows && this.gridSterDefaultColumns <= gridSterCurrentColumns) {
    this.gridsterHeight += 200;
    // debugger;
    console.log("gridster height changed");
    //this.gridSterDefaultRows += 1;
    //this.dashboardElements.push(newItem);
    //}
  }

  itemResize(item, itemComponent) {
    //console.info('itemResized', item, itemComponent);
    if (itemComponent != undefined) {
      if (itemComponent["gridster"]["rows"] > 5) {
        console.log("gridster resized item resize");
        //  this.gridsterHeight += 300;
      }
    }
  }
  ngOnInit() {
    this.options = {
      //gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      pushItems: true,
      initCallback: this.gridsampleInitCallBack,
      itemChangeCallback: this.itemChange,
      itemResizeCallback: this.itemResize,
      maxCols: 6,
      swap: true,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        dropOverItems: true,
      },
      api: {
        getNextPossiblePosition: this.getGristerNextPossiblePosition

      },
      resizable: {
        enabled: true,
        delayStart: 0

      }
    };

    this.dashboard = this.dashboardElements;



  }

  changedOptions() {
    alert("changed options");
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  getHW() {
    var gridsterComponentWidth = this.gridsterComponent["curWidth"];
    var gridsterComponentHeight = this.gridsterComponent["curHeight"];
    alert("Width : " + gridsterComponentWidth + ", Height : " + gridsterComponentHeight);
    //this.gridsterHeight += 100;

  }
  addItem() {

    var gridsterComponentWidth = this.gridsterComponent["curWidth"];
    var gridsterComponentHeight = this.gridsterComponent["curHeight"];
    console.log("Width : " + gridsterComponentWidth + ", Height : " + gridsterComponentHeight);

    let gridSterCurrentRows = this.gridsterComponent["rows"];
    let gridSterCurrentColumns = this.gridsterComponent["columns"];


    let gridSterItems = this.gridsterComponent["grid"];


    //const newItem = { x: 0, y: 0, rows: 1, cols: 1, initCallback: this.gridItemCreated };
    const newItem = {
      x: 0, y: 0, rows: 1, cols: 1, label: "newlabel", dragEnabled: true,
      resizeEnabled: true, elementHtml: "<div> new Card  contents</div>"
    };

    console.log(
      "Default Rows :" + this.gridSterDefaultRows
      + " , Current Rows " + gridSterCurrentRows
      + " Default Columns :" + this.gridSterDefaultColumns
      + " , Current Columns " + gridSterCurrentColumns
    );
    if ((this.gridSterDefaultRows == gridSterCurrentRows) && (this.gridSterDefaultColumns == gridSterCurrentColumns)) {
      // if (this.gridSterDefaultRows <= gridSterCurrentRows && this.gridSterDefaultColumns <= gridSterCurrentColumns) {
      this.gridsterHeight += 200;
      // debugger;
      console.log("gridster height changed");
      this.gridSterDefaultRows += 1;
      //this.dashboardElements.push(newItem);
    }


    //this.dashboard.push(newItem);
    //this.gridsterHeight += 100;

    this.dashboardElements.push(newItem);

  }

  gridItemCreated(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {

    // if (itemComponent != undefined) {
    //   if (itemComponent["gridster"]["rows"] > 5) {
    //     // alert("gridster resized");
    //   }

    // }

  }
}
