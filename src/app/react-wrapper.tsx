import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Root, createRoot } from 'react-dom/client';
import { Button, Alert, Box, Collapse, IconButton } from '@mui/material';


const anchor = 'anchor';

@Component({
  selector: 'react-wrapper',
  standalone: true,
  template: `<span #${anchor}></span>`,
  styleUrls: ['./react-wrapper.css']
})
export class CustomReactComponentWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild(anchor, { static: true }) containerRef!: ElementRef;

  public open: boolean = false;
  public root!: Root;

  ngOnChanges(changes: SimpleChanges): void {
      this.render();
  }

  ngAfterViewInit() {
    if (!this.root) {
      this.root = createRoot(this.containerRef.nativeElement);
    }
      this.render();
  }

  setOpen(open: boolean) {
    this.open = open;
    this.render();
  }

  ngOnDestroy() {
      ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
      this.root.render(
      <React.StrictMode>
        <Button variant="outlined">React me</Button>
        <Box sx={{ width: '100%' }}>
        <Collapse in={this.open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  this.setOpen(false);
                }}
              >
                Close
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Close me!
          </Alert>
        </Collapse>
        <Button
          disabled={this.open}
          variant="outlined"
          onClick={() => {
            this.setOpen(true);
          }}
        >
          Re-open
        </Button>
      </Box>
      </React.StrictMode>
      );
  }
}