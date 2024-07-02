import { Component, Input, OnInit } from '@angular/core';
import { Nft } from '../../../models/nft';
import { CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    selector: '[nft-auctions-table-item]',
    templateUrl: './nft-auctions-table-item.component.html',
    standalone: true,
    imports: [AngularSvgIconModule, CurrencyPipe, ButtonModule, ToolbarModule],
})
export class NftAuctionsTableItemComponent implements OnInit {
  @Input() auction = <Nft>{};

  constructor() {}

  ngOnInit(): void {}
}
