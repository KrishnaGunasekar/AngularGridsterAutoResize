import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

import { DisplayGrid, GridsterComponent, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType, GridsterComponentInterface }
  from 'angular-gridster2';

@Component({
  selector: 'app-gridsample',
  templateUrl: './gridsample.component.html',
  styleUrls: ['./gridsample.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GridsampleComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  gridsterHeight: number = 500;
  gridSterDefaultRows = 0;
  gridSterDefaultColumns = 0;
  @ViewChild('gridsterComponent') public gridsterComponent: ElementRef;
  dashboardElements = [
    { cols: 1, rows: 1, y: 0, x: 0, dragEnabled: true, resizeEnabled: true },
    { cols: 2, rows: 2, y: 0, x: 2, hasContent: true, dragEnabled: true, resizeEnabled: true },
    { cols: 1, rows: 1, y: 0, x: 4, dragEnabled: true, resizeEnabled: true },
    { cols: 1, rows: 1, y: 2, x: 5, dragEnabled: true, resizeEnabled: true },
    { cols: 1, rows: 1, y: 1, x: 0, dragEnabled: true, resizeEnabled: true },
    { cols: 1, rows: 1, y: 1, x: 0, dragEnabled: true, resizeEnabled: true },
    { cols: 2, rows: 2, y: 3, x: 5, minItemRows: 2, minItemCols: 2, label: 'Min rows & cols = 2', dragEnabled: true, resizeEnabled: true },
    { cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, label: 'Max rows & cols = 2', dragEnabled: true, resizeEnabled: true },
    { cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Enabled' },
    { cols: 1, rows: 1, y: 2, x: 4, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Disabled' },
    { cols: 1, rows: 1, y: 2, x: 6 }
  ];

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
  gridsampleInitCallBack(gridster: GridsterComponentInterface) {
    // debugger;
    // alert("init call back called");

  }
  getGristerNextPossiblePosition(newItem: GridsterItem) {
    debugger;
    return true;
  }
  itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
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


    this.gridSterDefaultRows = 5;
    this.gridSterDefaultColumns = 7;
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
    //alert("Width : " + gridsterComponentWidth + ", Height : " + gridsterComponentHeight);
    this.gridsterHeight += 100;

  }
  addItem() {
    var gridsterComponentWidth = this.gridsterComponent["curWidth"];
    var gridsterComponentHeight = this.gridsterComponent["curHeight"];
    console.log("Width : " + gridsterComponentWidth + ", Height : " + gridsterComponentHeight);

    let gridSterCurrentRows = this.gridsterComponent["rows"];
    let gridSterCurrentColumns = this.gridsterComponent["columns"];


    let gridSterItems = this.gridsterComponent["grid"];


    const newItem = { x: 0, y: 0, rows: 1, cols: 1, initCallback: this.gridItemCreated };


    if (this.gridSterDefaultRows != gridSterCurrentRows || this.gridSterDefaultColumns != gridSterCurrentColumns) {
      this.gridsterHeight += 300;
      console.log("gridster height changed");
    }


    //this.dashboard.push(newItem);
    //this.gridsterHeight += 100;

    this.dashboardElements.push(newItem);

  }

  gridItemCreated(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {

    if (itemComponent != undefined) {
      if (itemComponent["gridster"]["rows"] > 5) {
        // alert("gridster resized");
      }

    }

  }
}
