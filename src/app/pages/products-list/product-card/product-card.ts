import { Component, inject, input } from '@angular/core';
import { Product } from '../../../modules/products.model';
import { PrimaryButton } from '../../../components/primary-button/primary-button';
import { cartService } from '../../../services/cartService';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `
    <div
      class="bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative"
    >
      <div class="mx-auto">
        <img
          [src]="product().image"
          class="w-[200px] h-[100px] object-contain"
        />
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">
            {{ product().title }}
          </span>
          <span class="text-sm">
            {{ '$' + product().price }}
          </span>
          <app-primary-button
            label="Add to cart"
            class="mt-3"
            (btnClicked)="cartService.addToCart(product())"
          />

          <span
            class="absolute top-2 right-3 text-sm font-bold"
            [class]="product().stock ? 'text-green-500' : 'text-red-500'"
          >
            @if (product().stock) {
            {{ product().stock }} left }@else { Out of stock }
          </span>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  cartService = inject(cartService);

  product = input.required<Product>();
}
